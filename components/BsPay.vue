<!--
 * @Author: ch
 * @Date: 2022-05-08 00:39:50
 * @LastEditors: ch
 * @LastEditTime: 2022-07-11 11:32:27
 * @Description: file content
-->
<template>
	<el-dialog :title="title" width="380px" class="box" center
		 :visible.sync="myVisible" @open="open" @close="close" :modal="false">
		<div class="pay-type" v-if="!myPayType">
			<el-radio-group v-model="myPayType">
				<el-radio label="wx" class="pay-type--item" >
					<img class="pay-type--wx" src="@/assets/img/order/wx.png"/>
				</el-radio>
				<el-radio label="ali" class="pay-type--item" >
					<img class="pay-type--ali" src="@/assets/img/order/zfb.png"/>
				</el-radio>
			</el-radio-group>
		</div>
		<div class="pay" v-else>
			<span class="pay--timer">{{timerTxt}}</span>
			<UiMoney class="money" sufSize="14px" preSize="14px" size="20px" 
				float suffix prefix :money="orderInfo.payAmount"/>
			<div class="pay--code">
				<img :src="imgUrl" v-if="imgUrl"/>
				<span v-else>{{imgTip}}</span>
			</div>
			<p class="pay--tips">如支付后没有自动跳转，请点击 <span class="pay--finish" @click="finish">完成付款</span></p>
			<UiButton class="pay--btn" type='yellow_gradual' @click="back">其他支付方式</UiButton>
		</div>
	</el-dialog>
</template>
<script>
import {ApiPostWxPayCdoeImg, ApiPostAliPayCdoeImg} from '@/plugins/api/pay'
import {ApiGetOrderDetail} from '@/plugins/api/order'
import UiMoney from './UiMoney.vue';
import UiButton from './UiButton.vue';
import QRcode from 'qrcode';
import {CreateUUID} from '@/plugins/utils';

export default {
	components: { UiMoney, UiButton },
	props : {
		visible : {
			type : Boolean,
			default : false
		},
		orderId : {
			type : Number | String,
			default : ''
		},
		payType:{
			type : String | null,
			require : true
		}
	},
	data(){
		return {
			orderInfo: {},
			imgUrl : '',
			imgTip : '二维码获取中',
			timerTxt : '',
			startSecondNum : 0,
			timerStop : null,
			myPayType : null,
			payUUID : null
		}
	},
	watch:{
		myPayType(val){
			// 单选框change事件无效，使用watch代替
			if(val){
				this.getQrCode();
			}
		}
	},
	computed:{
		myVisible : {
			get(){
				return this.visible;
			},
			set(val){
				this.$emit('update:visible', val)
			}
		},
		title(){
			let str = '请选择支付方式';
			if(this.myPayType === 'wx'){
				str = '打开微信扫描付款';
			}else if(this.myPayType === 'ali'){
				str = '打开支付宝扫描付款';
			};
			return str;
		}
	},
	methods : {
		open(){
			this.getOrderInfo();
			this.myPayType = this.payType;
			if(this.myPayType){
				this.getQrCode();
			}
			
		},
		/**
		 * 获取订单最新信息
		 */
		async getOrderInfo(){
			const {error, result} = await ApiGetOrderDetail(this.orderId);
			if(error){
				this.$message.warning(error.message);
				return false;
			}
			this.orderInfo = result;
			if(this.orderInfo.orderStatus === 1){
				// 待支付 开始倒计时
				if(this.timerStop){
					clearInterval(this.timerStop);
				}
				this.calcTimerStartSecondNum();
				this.timer();

			}
		},
		getQrCode(){

			this.payUUID = CreateUUID();
			if(this.myPayType == 'wx'){
				this.getWxCodeImg(this.payUUID);
			}else if(this.myPayType === 'ali'){
				this.getAliCodeImg(this.payUUID);
			}
		},
		/**
		 * 支付宝二维码
		 */
		async getAliCodeImg(uid){
			const {error, result} = await ApiPostAliPayCdoeImg({orderId : this.orderId});
			if(this.payUUID !== uid){
				return false;
			}
			if(error){
				this.imgTip = error.message;
				return false;
			}
			QRcode.toDataURL(result.payDataInfo.qrCodeData,{
				width : 200
			}, (err, url)=>{
				this.imgUrl = url;
				
			})
		},
		/**
		 * 微信二维码
		 */
		async getWxCodeImg(uid){
			const {error, result} = await ApiPostWxPayCdoeImg({orderId : this.orderId});
			if(this.payUUID !== uid){
				return false;
			}
			if(error){
				this.imgTip = error.message;
				return false;
			}
			QRcode.toDataURL(result.payDataInfo.codeUrlData,{
				width : 200
			}, (err, url)=>{
				this.imgUrl = url;
			})
			
		},

		/**
		 * 计算倒计时开始秒数
		 */
		calcTimerStartSecondNum(){
			let expireTime = (new Date(this.orderInfo.expireTime.replace(/-/g,'/'))).getTime(),
				curTime = (new Date(this.orderInfo.serverTime.replace(/-/g,'/'))).getTime(),
				second = Math.floor((expireTime - curTime) / 1000);
			this.startSecondNum = second > 0 ? second : 0;
			this.timerStop = setInterval(()=> {
				this.timer()
			},1000)
		},
		/**
		 * 待付款的倒计时
		 */
		timer(){
			if(this.startSecondNum == 0){
				this.close();
				return;
			}
			this.startSecondNum--;
			let minute = parseInt(this.startSecondNum / 60);
			let second = parseInt(this.startSecondNum % 60);
			this.timerTxt = `剩余${minute > 0 ? `${minute}分` : ''} ${second}秒`;
		},
		close(){
			clearInterval(this.timerStop);
			this.timerStop = null;
			this.myPayType = this.payType;
			this.$emit('cancel');
		},
		finish(){
			this.myVisible = false;
			this.$emit('finish')
		},
		back(){
			this.myPayType = null;
			this.imgUrl = null;
			this.imgTip = '二维码获取中'
		}
	}
}
</script>
<style lang="scss" scoped>
.box{
	background: rgba(0,0,0, .5);
}
.pay-type{
	width: 270px;
	padding: 0 30px;
	&--item{
		width: 270px;
		height: 56px;
		display: flex;
		align-items: center;
		border: 1px solid #ccc;
		padding-left: 55px;
		margin-bottom: 20px;
	}
	&--wx{
		width: 108px;
	}
	&--ali{
		width: 78px;
	}
}
.pay{
	text-align: center;
	&--code{
		width: 160px;
		height: 160px;
		margin: 15px auto 20px;
		position: relative;
		overflow: hidden;
		img{
			width: 200px;
			position: absolute;
			left: -20px;
			top: -20px;
		}
		span{
			line-height: 100px;
			color: #999;
		}
	}
	&--timer{
		color: #999;
		display: block;
		margin-bottom: 15px;
	}
	&--tips, &--timer{
		font-size: 14px;
	}
	&--finish{
		color: #FF512B;
		cursor: pointer;
	}
	&--btn{
		border-radius: 4px;
		width: 143px;
		height: 32px;
		margin-top: 20px;
	}
}
.money{
	color: #FF512B;
	font-weight: bold;
}
/deep/{
	.el-dialog{
		border-radius: 4px;
	}
	.el-dialog__header{
		padding: 30px 0 15px;
	}
	.el-dialog__title{
		font-size: 20px;
		font-weight: bold;
	}
	.el-dialog__body{
		padding-top: 0;
		padding-bottom: 50px;
	}
	.el-dialog__headerbtn{
		top: 32px;
		right: 30px;
	}
}
</style>