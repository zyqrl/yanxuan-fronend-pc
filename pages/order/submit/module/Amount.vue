<!--
 * @Author: ch
 * @Date: 2022-05-08 16:12:18
 * @LastEditors: ch
 * @LastEditTime: 2022-05-26 20:03:02
 * @Description: file content
-->
<template>
	<div class="amount">
		<div>
			<span>应付款</span>
			<UiMoney class="money" size="20px" preSize="14px" sufSize="14px" :money="amount" float prefix suffix/>
		</div>
		<template v-if="productType == 1">
			<p>{{address.province + address.city + address.area + address.detailAddress}}</p>
			<p>{{address.name}} {{address.phone}}</p>
		</template>
	</div>
</template>
<script>
import UiMoney from '../../../../components/UiMoney.vue'
export default {
	components: { UiMoney },
	props : {
		productType : {
			type : String | Number
			
		},
		amount : {
			type : Number,
			default : 0
		},
		address : {
			type : Object,
			default : () => ({})
		}
		
	}
}
</script>
<style lang="scss" scoped>
.amount{
	max-height: 133px;
	background: #f8f8f8;
	text-align: right;
	padding: 20px 40px;
	margin-top: 10px;
	.money{
		font-size: 0;
		color: #FF512B;
		display: inline-block;
		font-weight: bold;
	}
	p{
		font-size: 12px;
		color: #9E9E9E;
		margin-top: 15px;
	}
}
</style>