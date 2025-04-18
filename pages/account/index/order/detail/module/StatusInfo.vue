<!--
 * @Author: ch
 * @Date: 2022-05-09 14:41:37
 * @LastEditors: ch
 * @LastEditTime: 2022-06-30 20:01:46
 * @Description: file content
-->
<template>
		<div class="operation">
			<span>订单编号：{{orderInfo.orderNo}}</span>
			<p>订单状态：{{ctxCon.name}}</p>
			<span>{{ctxCon.tips}}</span>
			<div class="operation--btns">
			<!-- 已发货可以确认收货 -->
			<UiButton v-if="orderInfo.orderStatus === 4" type="yellow_gradual" :radius="true" @click="receive">确认收货</UiButton>
			<UiButton v-if="orderInfo.orderStatus === 5" type="yellow_gradual" :radius="true" @click="handelComment">去评价</UiButton>
			<UiButton v-if="orderInfo.orderStatus === 6" type="yellow_gradual" :radius="true" @click="handelComment">去追评</UiButton>
			<!-- 待支付可以取消，支付订单 -->
			<template v-if="orderInfo.orderStatus === 1">
				<UiButton type="yellow_gradual" :radius="true" @click="payVisible = true">去支付</UiButton>
				<UiButton type="grey" :radius="true" @click="cancelVisible=true">取消</UiButton>
			</template>
			</div>
			<BsCancelOrder :visible.sync="cancelVisible" :orderId="orderInfo.orderId" @cancel="emitStatus"/>
			<BsPay :visible.sync="payVisible" :orderId="orderInfo.orderId" @finish="emitStatus" @cancel="emitStatus"/>
		</div>
</template>
<script>
import {ApiPutOrderReceive}  from '@/plugins/api/order';
import BsPay from '@/components/BsPay.vue'
import UiButton from '@/components/UiButton.vue'
import BsCancelOrder from '../../../../../../components/BsCancelOrder.vue'
export default {
	components: { UiButton, BsPay, BsCancelOrder },
	props: {
		orderInfo : {
			type : Object,
			default : () => ({})
		}
	},
	data(){
		return {
			ctxData : {
				// 待付款
				'1' : {name:'待付款', tips:''},
				// 关闭
				'2' : {name:'交易关闭' , tips:'关闭原因'},
				// 已支付
				'3' : {name:'待发货', tips:'您的包裹整装待发'},
				// 已发货
				'4' : {name:'待收货', tips:'您的包裹正向您飞来'},
				// 已收货
				'5' : {name:'已收货'},
				// 已完成
				'6' : {name:'交易成功'},
				'7' : {name:'交易成功'},
			},
			ctxCon : {},
			startSecondNum : 0,
			timerStop : null,
			cancelVisible : false,
			payVisible : false

		}
	},
	watch : {
		orderInfo(nVal){
			const {orderStatus, autoReceiveTime, serverTime} = this.orderInfo;
			this.ctxCon = this.ctxData[orderStatus];
			if(orderStatus === 1){
				// 待支付 开始倒计时
				if(this.timerStop){
					clearTimeout(this.timerStop);
				}
				this.calcTimerStartSecondNum();
				this.timer();

			}else if(orderStatus === 4){
				const receiveTime = (new Date(autoReceiveTime.replace(/-/g,'/'))).getTime();
				const curTime = (new Date(serverTime.replace(/-/g,'/'))).getTime();
				const minute = parseInt((receiveTime - curTime) / 60000);
				const day = parseInt(Math.floor(minute / 1440));
				const hour = parseInt(Math.floor((minute - day * 1440) / 60));
				const m = parseInt(Math.floor(minute - ((day * 24 + hour) * 60)));
				let str = `${day ? `${day}天${hour}时${m}分` : (hour ? `${hour}时${m}分` : ( m ? `${m}分` : '1分'))}`;
				this.ctxCon.tips = `${str}后，将自动确认收货`
				
			}else if(orderStatus === 2){
				this.ctxCon.tips = this.orderInfo.cancelReason;
			}
		}
	},
	methods:{

		/**
		 * 计算待支付倒计时开始秒数
		 */
		calcTimerStartSecondNum(){
			let expireTime = (new Date(this.orderInfo.expireTime.replace(/-/g,'/'))).getTime(),
				curTime = (new Date(this.orderInfo.serverTime.replace(/-/g,'/'))).getTime(),
				second = Math.floor((expireTime - curTime) / 1000);
			this.startSecondNum = second > 0 ? second : 0;
		},
		/**
		 * 待付款的倒计时
		 */
		timer(){
			if(this.startSecondNum == 0){
				this.emitStatus()
				return;
			}
			this.startSecondNum--;
			let minute = parseInt(this.startSecondNum / 60);
			let second = parseInt(this.startSecondNum % 60);
			this.ctxCon.tips = `剩余${minute > 0 ? `${minute}分` : ''} ${second}秒`;
			this.timerStop = setTimeout(()=>this.timer(),1000)
		},

		/**
		 * 确认收货
		 */
		receive(){
			this.$confirm('确认已经收到货了吗？', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(async () => {
				const {error} = await ApiPutOrderReceive({orderId : this.orderInfo.orderId});
				if(error){
					uni.$toast(error.message);
					return false;
				}

				this.handelComment()
				// this.$message({
				// 	type: 'success',
				// 	message: '成功收货!'
				// });
				// this.emitStatus()
			});
		},
		handelComment(){
			this.$router.push({
				path : '/account/comment',
				query : {
					orderId : this.orderInfo.orderId
				}
			});
		},
		emitStatus(){
			// 如果有倒计时 则停止倒计时
			if(this.timerStop){
				clearTimeout(this.timerStop);
			}
			this.$emit('changeStatus');
		}
	}
	
}
</script>
<style lang="scss" scoped>
.operation{
	width: 300px;
	height: 200px;
	background: #f8f8f8;
	padding-top: 20px;
	text-align: center;
	border-right: 1px solid #ddd;
	span{
		color: #999;
	}
	p{
		font-size: 14px;
		margin: 30px 0 15px;
	}
	&--btns{
		margin-top: 30px;
		button{
			margin: 0 7px;
			width: 100px;
		}
	}
}

</style>