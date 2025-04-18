<!--
 * @Author: ch
 * @Date: 2022-05-08 16:06:28
 * @LastEditors: ch
 * @LastEditTime: 2022-05-08 16:18:51
 * @Description: file content
-->
<template>
	<div class="message">
		<div class="message--left">
			<label>买家留言</label>
			<el-input type="textarea"  class="textarea" placeholder="填写您想要备注的信息，50字以内" 
				show-word-limit :maxlength="50" v-model="myMsg"/>
		</div>
		<div>
			<p>
				<label>商品总额</label>
				<b>￥{{orderInfo.totalAmount}}</b>
			</p>
			<p>
				<label>运费</label>
				<b>￥{{orderInfo.shippingAmount}}</b>
			</p>
		</div>
	</div>
</template>
<script>
export default {
	props : {
		orderInfo : {
			type: Object,
			defautl : ()=>({})
		},
		message : {
			type : String,
			default : ''
		}
	},
	computed : {
		myMsg : {
			get(){
				return this.message;
			},
			set(val){
				this.$emit('update:message',val)
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.message{
	height: 110px;
	border: 1px solid #ddd;
	border-top: 0;
	padding: 20px 40px 20px 20px;
	display: flex;
	justify-content: space-between;
	&--left{
		display: flex;
		label{
			margin: 11px 16px 0 0;
		}
	}
	label{
		color: #666;
	}
	p{
		display: flex;
		justify-content: space-between;
		width: 308px;
		margin: 11px 0;
	}
}
/deep/ {
	.textarea {
		display: inline-block;
		width: 467px;
		textarea{
			height: 70px;
			background: #f8f8f8;
			border: none;
			resize:none;
			&::placeholder{
				color: #999;
				font-size: 12px;
			}
		}
		span{
			background: #f8f8f8;

		}
	}
}
</style>