<!--
 * @Author: ch
 * @Date: 2022-05-08 01:11:33
 * @LastEditors: ch
 * @LastEditTime: 2022-05-27 20:01:33
 * @Description: file content
-->
<template>
	<div class="main">
		<img class="icon" src="@/assets/img/order/pay_success.png" />
		<b>交易成功</b>
		<p>您的包裹整装待发~</p>
		<div>
			<UiButton type="grey" @click="goHome" :radius="true">返回首页</UiButton>
			<UiButton type="yellow_gradual" @click="goDetail" :radius="true">查看订单</UiButton>
		</div>

	</div>
</template>
<script>
import UiButton from '../../components/UiButton.vue';
import {ApiGetOrderPaySatus} from '@/plugins/api/order';
export default {
	components: { UiButton },
	data(){
		return {
			orderInfo : {},
			type : this.$route.query.type,
			reuqestNum : 0
		}
	},
	mounted(){
		// this.getOrderInfo();
		if(this.$route.query.type == 2){
			this.$confirm("虚拟商品已自动发货，前往消息中心查看?", "提示", {
				confirmButtonText: "前往",
				cancelButtonText: "取消",
				callback: async (e) => {
				if (e == `confirm`) {
					window.open('https://you.mashibing.com/account/message','_black');
				}
				}
			})
		}

      
	},
	methods:{
		async getOrderInfo(){
			this.reuqestNum++;
			const {error, result} = await ApiGetOrderPaySatus({orderId : this.$route.query.id});
			if(error){
				this.$message.warning(error.message);
				return false
			}
			if(!result.isSuccess && this.reuqestNum < 5){
				setTimeout(()=>{
					this.getOrderInfo();
				}, 1000)
				return false;
			}
			this.orderInfo = result;
		},
		goHome(){
			this.$router.replace('/');
		},
		goDetail(){
			this.$router.replace(`/account/order/detail?id=${this.$route.query.id}`)
		},
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
	margin: 0 10px;
}
</style>