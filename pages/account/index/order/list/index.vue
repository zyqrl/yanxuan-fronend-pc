<!--
 * @Author: ch
 * @Date: 2022-05-04 20:47:29
 * @LastEditors: ch
 * @LastEditTime: 2022-06-29 11:50:49
 * @Description: file content
-->
<template>
	<div class="main">
		<Tab :active="tabActive" @change="changeTab" ref="tab"></Tab>
		<UiLoading v-if="loading"></UiLoading>
		<UiEmpty v-if="!orderTotal && !loading" desc="暂无订单数据" :icon="require('@/assets/img/account/order/empty.png')">
			<UiButton type="grey" @click="$router.push('/')">去逛逛</UiButton>
		</UiEmpty>
		<template v-if="!loading">
			<table v-if="orderTotal" class="order--table order--table-head">
				<thead>
					<tr>
						<th>商品信息</th>
						<th width="96">单价</th>
						<th width="96">数量</th>
						<th width="120">实付款</th>
						<th width="110">交易状态</th>
						<th width="145">操作</th>
					</tr>
				</thead>
			</table>
			<div class="order" v-for="item in orderList" :key="item.orderId">
				<div class="order--head">
					<p>
						<span>订单编号：{{item.orderNo || '9c665dc0b20b 假的'}}</span>
						<span>下单时间：{{item.submitTime || `2011-01-01 00:00:00 假的`}}</span>
					</p>
					<router-link :to="`./detail?id=${item.orderId}`">订单详情 ></router-link>
				</div>
				<table class="order--table">
					<tbody>
						<tr v-for="(i, idx) in item.products" :key="i.orderProductId">
							<td class="not-border">
								<UIGoodsInfo :goods="i"/>
							</td>
							<td class="not-border" width="96" @click="handleDetail(item.orderId)">
								<UiMoney :money="i.realAmount" @click="handleDetail(item.orderId)"/>
							</td>
							<td class="not-border" width="96" @click="handleDetail(item.orderId)">{{i.quantity}}</td>
							<template  v-if="!idx">
								<td width="120" :rowspan="item.products.length" @click="handleDetail(item.orderId)">
									<UiMoney :money="item.payAmount" />
								</td>
								<td width="110" :rowspan="item.products.length" @click="handleDetail(item.orderId)">
									{{item.orderStatusDesc}}
								</td>
								<td width="145" :rowspan="item.products.length">
									<template v-if="item.orderStatus === 1">
										<UiButton type="yellow_gradual" @click="pay(item)">去支付</UiButton>
										<span class="link-btn" @click="cancelPay(item)">取消支付</span>
									</template>
									<UiButton type="yellow_gradual" v-if="item.orderStatus === 4" @click="receive(item)">确认收货</UiButton>
									<UiButton type="yellow_gradual" v-if="item.orderStatus === 5"
										@click="$router.push(`/account/comment?orderId=${item.orderId}`)">去评价</UiButton>
									<UiButton type="yellow_gradual" v-if="item.orderStatus === 6"
										@click="$router.push(`/account/comment?orderId=${item.orderId}&follow=true`)">去追评</UiButton>

									<router-link class="link-btn" :to="`./detail?id=${item.orderId}`" v-if="item.orderStatus >= 4">查看物流</router-link>
								</td>
							</template>
						</tr>
					</tbody>
				</table>
			</div>
			<el-pagination class="pagination" v-if=" orderTotal > pageSize" background layout="prev, pager, next" 
				:current-page.sync="pageIndex" :page-size="pageSize"
				:total="orderTotal" @current-change="getOrderList"></el-pagination>
		</template>
		
			
		<BsCancelOrder :visible.sync="cancelVisible" :orderId="operationOrder.orderId" @cancel="reloadData"/>
		<BsPay :visible.sync="payVisible" :orderId="operationOrder.orderId" @finish="reloadData"/>
	</div>
</template>
<script>
import {ApiGetOrderList, ApiPutOrderReceive, ApiGetOrderStatistics} from '~/plugins/api/order';
import BsCancelOrder from '@/components/BsCancelOrder.vue';
import BsPay from '@/components/BsPay.vue';
import UiButton from '@/components/UiButton.vue';
import UiEmpty from '@/components/UiEmpty.vue';
import UIGoodsInfo from '@/components/UIGoodsInfo.vue';
import UiLineBox from '@/components/UiLineBox.vue';
import Tab from './module/Tab.vue';
import UiLoading from '../../../../../components/UiLoading.vue';
import UiMoney from '../../../../../components/UiMoney.vue';
export default {
	components: { UiLineBox, UIGoodsInfo, Tab, UiButton, BsPay, UiEmpty, BsCancelOrder, UiLoading, UiMoney },
	data(){
		return {
			tabActive : this.$route.query.type || -1,
			pageIndex : 1,
			pageSize : 15,
			orderList : [],
			orderTotal : 0,
			loading : true,
			payVisible : false,
			cancelVisible : false,
			operationOrder : {}
		}
	},
	mounted(){
		this.getOrderList();
	},
	methods : {
		changeTab(val){
			if(val === this.tabActive){
				return false;
			}
			this.$router.replace({
				query:{
					type : val
				}
			})
			this.pageIndex = 1;
			this.tabActive = val;
			this.getOrderList();
			
		},
		/**
		 * 查询订单列表
		 */
		async getOrderList(){
			this.loading = true;
			const {error, result} = await ApiGetOrderList({
				length : this.pageSize,
				pageIndex : this.pageIndex,
				orderStatus : this.tabActive > -1 ? this.tabActive : null
			});
			this.loading = false;
			if(error){
				this.message.warning(error.message);
				return false;
			}
			this.orderList = result.records;
			this.orderTotal = result.total
		},
		/**
		 * 重新加载数据，确认收货和取消，支付订单这些操作完成后需要
		 */
		reloadData(){
			this.getOrderList();
			this.$refs.tab.getOrderStatistics();

		},
		pay(item){
			this.operationOrder = item;
			this.payVisible = true;
		},
		cancelPay(item){
			this.operationOrder = item;
			this.cancelVisible = true;
		},
		receive(item){
			this.$confirm('确认已经收到货了吗？', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(async () => {
				const {error} = await ApiPutOrderReceive({orderId : item.orderId});
				if(error){
					this.$$message.error(error.message);
					return false;
				}
				this.$router.push({
					path : '/account/tradeSuccess',
					query : {
						orderId : item.orderId
					}
				});
				// this.$message({
				// 	type: 'success',
				// 	message: '成功收货!'
				// });
				// this.reloadData();
			});
		},
		handleDetail(id){
			this.$router.push({
				path : '/account/order/detail',
				query : {id}
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.main{
	flex: 1;
}
.order{
	margin: 10px 0;
	&--head{
		height: 42px;
		line-height: 42px;
		color: #999;
		background: #F8F8F8;
		border: 1px solid #ddd;
		border-bottom: 0;
		display: flex;
		justify-content: space-between;
		padding: 0 20px;
		span{
			margin-right: 50px;
		}
		a{
			color: #999;
		}
	}
	&--table{
		border: 1px solid #ddd;
		width: 100%;
		&-head{
			margin: 30px 0 20px;
		}
		th{
			height: 46px;
			background: #f8f8f8;
			font-weight: normal;
		}
		td{
			border: 1px solid #ddd;
			padding: 20px;
			text-align: center;

			&.not-border{
				border-left: 0;
				border-right: 0;
			}
		}
		tr:first-child td{
			border-top: 0;
		}
	}
}
.link-btn{
	display: block;
	margin: 10px 0;
	color: #999;
	display: block;
}
.pagination{
	text-align: right;
}
</style>