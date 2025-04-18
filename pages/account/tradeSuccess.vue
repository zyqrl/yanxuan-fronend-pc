<!--
 * @Author: ch
 * @Date: 2022-05-08 01:11:33
 * @LastEditors: ch
 * @LastEditTime: 2022-06-27 15:37:53
 * @Description: file content
-->
<template>
	<div>
		<div class="main">
			<img class="icon" src="@/assets/img/order/pay_success.png" />
			<!-- <b>交易成功</b> -->
			<p>交易成功</p>
			<div>
				<UiButton type="grey" @click="$router.replace(`/`)" :radius="true">返回首页</UiButton>
				<UiButton type="yellow_gradual" @click="$router.replace(`./comment?orderId=${orderId}`)" :radius="true">去评价</UiButton>
			</div>
		</div>
		<BsChosen class="chosen"/>
	</div>
</template>
<script>
import UiButton from '@/components/UiButton.vue';
import {ApiGetOrderPaySatus} from '@/plugins/api/order';
export default {
	components: { UiButton },
	data(){
		return {
			orderId : this.$route.query.orderId
		}
	},
	mounted(){

      
	},
	methods:{
	}
}
</script>
<style lang="scss" scoped>
.main{
	@include layout-box; 
	text-align: center;
	padding: 100px 0 40px;
}
.icon{
	width: 239px;
}
b{
	display: block;
}
p{
	margin: 10px 0 25px 0;
	color: #999;
}
button{
	margin: 0 10px 30px;
}
</style>