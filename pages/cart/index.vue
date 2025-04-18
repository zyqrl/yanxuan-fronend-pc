<!--
 * @Author: ch
 * @Date: 2022-05-03 22:41:15
 * @LastEditors: ch
 * @LastEditTime: 2022-05-25 17:57:25
 * @Description: file content
-->
<template>
	<div>
		<UiLoading v-if="isLoading" ></UiLoading>
		<UiEmpty v-if="!isLoading && !list.length" desc="购物车空空如也，去挑点喜欢的好货吧~" 
			:icon="require('@/assets/img/cart/empty.png')">
			<UiButton type="grey" @click="$router.push('/')">去逛逛</UiButton>
		</UiEmpty>
		<div class="main" v-else>
			<table class="table table--head">
				<thead>
					<tr>
						<th width="90">
							<el-checkbox label="全选"  @change="handleCheckAll"
								v-model="checkAll" :indeterminate="isIndeterminate"></el-checkbox>
						</th>
						<th>商品信息</th>
						<th width="115">单价</th>
						<th width="115">数量</th>
						<th width="115">小计</th>
						<th width="115">操作</th>
					</tr>
				</thead>
			</table>
			<el-checkbox-group v-model="checkedIds" @change="changeCheckedGoods">
				<table class="table">
					<tbody>
						<tr v-for="item in list" :key="item.id" :class="item.status !== 'normal' && 'disable'">
							<td width="50">
								<el-checkbox v-if="item.status === 'normal'" :label="item.id" class="checkbox" />
								<span v-else class="tag">失效</span>
							</td>
							<td>
								<UIGoodsInfo :goods="item" />
							</td>
							<td width="115">
								<UiMoney :money="item.productSku ? item.productSku.sellPrice : 0" />
							</td>
							<td width="115">
								<el-input-number :value="item.number" @change="onChangeStepper($event, item)" 
								:min="1" :max="item.maxBuyNum" size="mini" />
							</td>
							<td width="115">
								<UiMoney :money="item.totalPrice" />
							</td>
							<td width="115">
								<a @click="handleDelete(item.id)" class="del">删除</a>
							</td>
						</tr>
					</tbody>
				</table>
			</el-checkbox-group>
			<div class="operation">
				<div>
					<el-checkbox label="全选" @change="handleCheckAll" v-model="checkAll" :indeterminate="isIndeterminate" />
					<a class="operation--del" href="javascript:void" @click="handleDelete()" v-if="checkedIds.length">批量删除</a>
				</div>
				<div class="operation--right">
					<p>已选<span class="operation--count">{{checkedIds.length}}</span>件</p>
					<p class="operation--total">
						总计：
						<UiMoney class="operation--total-price" size="20px" float prefix preSize="14px"
						 :money="totalPrice"/>
					</p>
					<UiButton class="operation--settlement" @click="settlement" :disabled="!checkedIds.length">去结算</UiButton>
				</div>
			</div>
		</div>
		<BsChosen></BsChosen>
	</div>
	
</template>
<script>
import {ApiGetCartList, ApiDeleteCartGoods, ApiPutCartNum} from '@/plugins/api/cart';
import {Debounce} from '@/plugins/utils';
import UIGoodsInfo from '@/components/UIGoodsInfo.vue';
import UiButton from '@/components/UiButton.vue';
import UiMoney from '@/components/UiMoney.vue';
import UiEmpty from '@/components/UiEmpty.vue';
import UiLoading from '@/components/UiLoading.vue';
import BsChosen from '@/components/BsChosen.vue';
export default {
	components: { UIGoodsInfo, UiButton, UiMoney, UiEmpty, UiLoading, BsChosen },
	data(){
		return {
			isLoading : false,
			list : [],
			checkedIds : [],
			checkAll : false,
			isIndeterminate : false
		}
	},
	computed:{
		totalPrice(){
			const checkedList = this.list.filter(item => this.checkedIds.includes(item.id)) || [];
			let tempPrice = 0;
			checkedList.forEach(item => {
				// 商品单价, 为了方便计算先转换单位为分 (整数)
                const unitPrice = item.productSku ? item.productSku.sellPrice * 100 : 0
                tempPrice += unitPrice * (item.number || 0)
			});
			return (tempPrice / 100).toFixed(2);
		},
		// 正常可结算的商品
		normalList(){
			return this.list.filter(i => i.status == 'normal');
		}
	},
	created(){
		this.getCartList();
	},
	methods:{
		/**
		 * 获取购物车商品列表
		 */
        async getCartList() {
			this.isLoading = true;
			const {error, result} = await ApiGetCartList();
			if(error){
				this.$message.warning(error.message);
				return false;
			}
			this.isLoading = false
			this.list = result.map(item => {

				const singleBuyLimit = item.product.singleBuyLimit;
				const stock = item.productSku && item.productSku.stock;
				// 最大可买数量
				item.maxBuyNum =  singleBuyLimit ? Math.min(singleBuyLimit, stock || 1) : stock;
				// 状态
				item.status = item.product.isEnable ?  
					(!item.productSku || item.productSku.stock == 0) ? 'notSku': 'normal' : 
					'isDisable';
				// sku标签 
				item.skuDescribe = item.status === 'normal' ? item.productSku?.name : 
					item.status === 'normal' ? '请重新选择商品规格' :  '宝贝已失效，暂时无法购买';
				// 小计
				item.totalPrice = item.status === 'normal' ? 
					this.calcMonery(item.productSku.sellPrice, item.number) : 0
				return item;
			});
		},
		calcMonery(moery, number){
			return (((moery * 100) * number) / 100).toFixed(2);
		},
		/**
		 * 商品选择框改变，全选按钮 半选，全选，不选状态
		 */
		changeCheckedGoods(){
			this.checkAll = this.normalList.length === this.checkedIds.length;
			this.isIndeterminate = this.checkedIds.length > 0 && !this.checkAll;
		},
		/**
		 * 点击全选选择框，全选，反选功能
		 */
		handleCheckAll(val) {
			this.checkedIds = val ? this.normalList.map(item => item.id) : [] ;
		},
		/**
		 * 监听步进器更改事件
		 */
        onChangeStepper(value, item) {
			
            // 记录一个节流函数句柄
            if (!item.debounceHandle) {
				item.oldValue = item.number
                item.debounceHandle = Debounce(this.updateCartNum, 500)
            }
            // 更新商品数量
			item.number = value;
			item.totalPrice = this.calcMonery(item.productSku.sellPrice, value);
            // 提交更新购物车数量 (节流)
            item.debounceHandle(item, item.oldValue, value);
        },
        /**
		 * 提交更新购物车数量
		 */
        async updateCartNum(item, oldValue, newValue) {
			const {error, result} = await ApiPutCartNum({
				id : item.id,
				number : item.number
			});
			if(error){
				this.$message.error(error.message);
				item.number = item.sku;
				return false;
			}
			if(result.isBeyondMaxLimit){
				this.$message.error('数量超出范围');
				item.number = result.canSetShoppingCartNumber;
				return false;
			}
			this.$store.dispatch('getCartProducts');
        },
		/**
		 * 删除选中的商品
		 */
        handleDelete(id) {
			const ids = id ? [id] : this.checkedIds;
			const tips = id ? '您确定要删除该商品吗？' : '您确定要删除选中的商品吗？'
            if (!ids.length) {
                return false
			}
			this.$confirm(tips, '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(async () => {
				const {error} = await ApiDeleteCartGoods({idList : ids.join(',')});
				if(error){
					this.$message.error(error.message);
					return false;
				}
				this.list = this.list.filter(item => !ids.includes(item.id));

				if(id){
					this.checkedIds = this.checkedIds.filter(i => i.id !== id);
				}else{
					this.checkedIds = [];
				}
				this.$store.dispatch('getCartProducts');
				
			})
		},
		/**
		 * 点击去结算
		 */
		settlement(){
			const ids = this.checkedIds;
			// 检查是否同时选中实物商品跟虚拟商品，不可以同时结账
			const baseType = this.list.find(i => ids[0] === i.id).productType;
			for(let id of ids){
				const item = this.list.find(i => id === i.id);
				if(item.productType != baseType){
					this.$message.warning('虚拟商品需要单独结算，不可和其他实物订单合并结算哦~');
					return false;
				}
			}
            if (ids.length) {
                this.$router.push({
					path : '/order/submit', 
					query : { 
						mode: 'cart', 
						productType : baseType,
						ids:ids.join(',') 
					}
				})
            }
		}
	}
}
</script>
<style lang="scss" scoped>
.main{
	@include layout-box;
	padding-bottom: 50px;
}
.table{
	width: 100%;
	border: 1px solid #ddd;
	font-size: 14px;
	&--head{
		margin: 30px 0 20px;
	}
	.disable td{
		background: #f8f8f8;
		opacity: .6;
	}
	.del{
		cursor: pointer;
	}
	.tag{
		display: inline-block;
		background: #ddd;
		height: 20px;
		width: 40px;
		line-height: 20px;
		font-size: 12px;
	}
	th{
		height: 46px;
		line-height: 46px;
		background: #f8f8f8;
		font-weight: normal;
	}
	td{
		text-align: center;
		padding: 40px 0;
		border-bottom: 1px solid #ddd;
	}
}
.operation{
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #f8f8f8;
	border: 1px solid #ddd;
	margin-top: 10px;
	height: 70px;
	padding: 0 237px 0 20px;
	position: sticky;
	z-index: 9;
	bottom: 0;
	&--del{
		margin-left: 70px;
	}
	&--right{
		display: flex;
		align-items: center;
	}
	&--count{
		color: #FF512B;
		margin: 0 5px;
	}
	&--total{
		display: flex;
		align-items: center;
		margin-left: 90px;
		&-price{
			color: #FF512B;
			font-weight: bold;
		}
	}
	&--settlement{
		position: absolute;
		top: -1px;
		right: 0;
		width: 160px;
		height: 70px;
	}
}
/deep/{
	.checkbox{
		.el-checkbox__label{
			display: none;
		}
	}
	
}
</style>