<!--
 * @Author: ch
 * @Date: 2022-05-04 17:30:58
 * @LastEditors: ch
 * @LastEditTime: 2022-06-30 11:19:15
 * @Description: file content
-->

<template>
	<div class="main">
		<template v-if="productType == 1">
			<h3 class="title">收货地址</h3>
			<BsAddress v-model="address"/>
		</template>
		<h3 class="title">支付方式</h3>
		<div class="pay-type">
			<el-radio-group v-model="payType">
				<el-radio label="wx" >
					<img class="pay-type--wx" src="@/assets/img/order/wx.png"/>
				</el-radio>
				<el-radio label="ali" >
					<img class="pay-type--ali" src="@/assets/img/order/zfb.png"/>
				</el-radio>
			</el-radio-group>
		</div>
		<h3 class="title">确认商品信息</h3>
		<OrderInfo :products="orderInfo.products" />
		<Message :orderInfo="orderInfo" :message.sync="userMessage"/>
		<Amount :amount="orderInfo.productAmount" :address="address" :productType="productType" />
		<div class="pay">
			<UiButton radius type="red_panel" @click="submit">立即支付</UiButton>
		</div>
		<BsPay :visible.sync="payVisible" :payType="payType" :orderId="payOrder.orderId"
			@cancel="cancelPay" @finish="finishPay" />
	</div>
</template>
<script>
import {ApiPostSubmitOrder, ApiGetBeforeOrder, ApiGetBeforeCartOrder, ApiGetOrderPaySatus} from '@/plugins/api/order';
import BsPay from '../../../components/BsPay.vue';
import UIGoodsInfo from '../../../components/UIGoodsInfo.vue';
import OrderInfo from './module/OrderInfo.vue';
import Message from './module/Message.vue';
import Amount from './module/Amount.vue';
import UiButton from '../../../components/UiButton.vue';
import BsAddress from '../../../components/BsAddress.vue';
export default {
	components: { BsPay, UIGoodsInfo, OrderInfo, Message, Amount, UiButton, BsAddress },
	data(){
		return {
			address : {},
			orderInfo : {},
			userMessage : '',
			payOrder : {},
			payType : 'wx',
			payVisible : false,
			payTimerTxt : '',
			payTimerStop : null,
			productType : this.$route.query.productType
		}
	},
	mounted(){

		this.getBeforeOrder();
	},
	methods : {
		/**
		 * 获取预订单信息，将要提交的订单信息
		 */
		async getBeforeOrder(){
			const query = this.$route.query;
			let res = {};
			// 购物车结算
			if(query.mode === 'cart'){
				res = await ApiGetBeforeCartOrder({
					cartIds: query.ids,
					isVirtual :this.productType == 2 && true,
					recipientAddressId : this.address.id
				})
			}
			// 立即购买
			if(query.mode === 'buyNow'){
				res = await ApiGetBeforeOrder({
					productSkuId : query.skuId,
					quantity : query.num,
					activityId : query.activityId,
					activityTimeId : query.activityTimeId,
					isVirtual :this.productType == 2 && true,
					// 1正常购买 2活动购买
					activityType : query.activityType,
					recipientAddressId : this.address.id
				});
			}
			if(res.error){
				this.$message.error(res.error.message);
				return false;
			}
			this.orderInfo = res.result;


		},
		/**
		 * 提交订单
		 */
		async submit(){
			const {query} = this.$route;
			
			if(!this.address.id && this.productType === 1){
				this.$message.error('请选择收货地址');
				return false;
			}
			const {error, result} = await ApiPostSubmitOrder({
				orderSource :  6,
				recipientAddressId : this.address.id,
				isVirtual :this.productType == 2 && true,
				shoppingCartIds : query.ids ? query.ids.split(',') : [],
				products : this.orderInfo.products.map(i => ({
					activityId : query.activityId,
					activityTimeId : query.activityTimeId,
					productId : i.productId,
					productSkuId : i.productSkuId,
					quantity : i.quantity,
					activityType : query.activityType
				})),
				userMessage : this.userMessage
			});
			if(error){
				this.$message.error(error.message);
				return false;
			}
			this.payVisible = true;
			this.payOrder = result;

			setTimeout(()=>{
				this.getOrderPayStatus();
			}, 5000)
		},
		/**
		 * 查询订单支付状态，提交订单成功后每隔5秒调一次，跳到支付结果页
		 */
		async getOrderPayStatus(){
			const {error, result} = await ApiGetOrderPaySatus({orderId : this.payOrder.orderId});
			if(error){
				this.$router.replace(`/account/order/detail?id=${this.payOrder.orderId}`);
				return false
			}
			if(!result.isSuccess){
				setTimeout(()=>{
					this.getOrderPayStatus();
				}, 5000)
				return false;
			}
			this.$router.replace(`/order/payResult?id=${this.payOrder.orderId}&type=${this.productType}`)

		},
		cancelPay(){
			this.$router.replace(`/account/order/detail?id=${this.payOrder.orderId}`);
		},
		finishPay(){
			this.$router.replace(`/order/payResult?id=${this.payOrder.orderId}&type=${this.productType}`)
		}
	}
}
</script>
<style lang="scss" scoped>
.main{
	@include layout-box;
	padding: 30px 0;
}
.title{
	margin: 24px 0 13px;
}
.pay-type{
	border: 1px solid #DDDDDD;
	padding: 30px 70px;
	&--wx{
		width: 130px;
	}
	&--ali{
		width:92px
	}
}
.pay{
	text-align: right;
	padding-bottom: 50px;
	margin-top: 10px;
}

</style>