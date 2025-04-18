<!--
 * @Author: ch
 * @Date: 2022-05-08 01:14:03
 * @LastEditors: ch
 * @LastEditTime: 2022-05-27 15:37:30
 * @Description: file content
-->
<template>
	<div>
		<div class="box">
			<StatusInfo :orderInfo="orderInfo" @changeStatus="getOrderInfo"/>
			<StatusStep :orderInfo="orderInfo" />
		</div>
		<LogisitcsInfo v-if="orderInfo.orderType !== ORDER_TYPE.VIRTUAL" :orderInfo="orderInfo" />
		<div class="pay-type" v-if="orderInfo.payType !== 1">
			<p>支付方式：{{orderInfo.payTypeDesc}}</p>
			<p>支付时间：{{orderInfo.payTime}}</p>
		</div>
		<GoodsInfo :orderInfo="orderInfo"/>
	</div>
</template>
<script>
import {ApiGetOrderDetail} from '@/plugins/api/order';
import {ORDER_TYPE} from '@/plugins/dicts/order';
import StatusInfo from './module/StatusInfo.vue';
import StatusStep from './module/StatusStep.vue';
import LogisitcsInfo from './module/LogisitcsInfo.vue';
import GoodsInfo from './module/GoodsInfo.vue';
export default {
	components: { StatusInfo, StatusStep, LogisitcsInfo, GoodsInfo },
	data(){
		return {
			ORDER_TYPE,
			orderInfo : {
				orderType : ORDER_TYPE.VIRTUAL
			}
		}
	},
	mounted(){
		this.getOrderInfo();
	},
	methods:{

		/**
		 * 获取订单最新信息
		 */
		async getOrderInfo(){
			const {error, result} = await ApiGetOrderDetail(this.$route.query.id);
			if(error){
				this.$message.warning(error.message);
				return false;
			}
			this.orderInfo = {...result};
		},
	}
}
</script>
<style lang="scss" scoped>
.box{
  	min-width: 1000px;
	border: 1px solid #ddd;
	border-radius: 4px;
	display: flex;
	margin: 0 0 30px 0;
}
.pay-type{
	margin: 30px 0;
	border: 1px solid #ddd;
	background: #f8f8f8;
	height: 59px;
	line-height: 59px;
	padding: 0 30px;
	display: flex;
	justify-content: space-between;
}
</style>