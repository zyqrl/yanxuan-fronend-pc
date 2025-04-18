<!--
 * @Author: ch
 * @Date: 2022-05-09 15:52:51
 * @LastEditors: ch
 * @LastEditTime: 2022-05-16 14:43:24
 * @Description: file content
-->
<template>
	<div class="logisitcs">
		<UiLineBox class="logisitcs--info" title="收货人信息">
			<div slot="body" class="info">
				<p>
					<label>收货人：</label>
					<span>{{logisitcsInfo.recipientName}}</span>
				</p>
				<p>
					<label>手机号码：</label>
					<span>{{logisitcsInfo.recipientPhone}}</span>
				</p>
				<p>
					<label>收货地址：</label>
					<span>{{logisitcsInfo.recipientAddress}}</span>
				</p>
			</div>
		</UiLineBox>
		<UiLineBox class="logisitcs--list" v-if="orderInfo.orderStatus >= 4">
			<div slot="head" class="title">
				<b>物流信息</b>
				<span>{{logisitcsInfo.companyName}}<small>{{logisitcsInfo.trackingNo}}</small></span>
			</div>
			<ul slot="body" class="list">
				<li v-for="(item, idx) in logisitcsList" :key="idx">
					<b class="item--time">{{item.time}}</b>
					<span class="item--ctx">{{item.context}}</span>
				</li>
			</ul>
		</UiLineBox>
	</div>
</template>
<script>
import UiLineBox from '@/components/UiLineBox.vue'
export default {
	components: { UiLineBox },
	props : {
		orderInfo : {
			type : Object,
			defalut : () => ({})
		}
	},
	computed:{
		logisitcsInfo(){
			return this.orderInfo.logistics || {}
		},
		logisitcsList(){
			return this.logisitcsInfo.logisticsDataList || []
		}
	}
	
}
</script>
<style lang="scss" scoped>
.logisitcs{
	display: flex;
	margin: 30px 0;
	&--info{
		flex: 1;
	}
	&--list{
		width: 670px;
		margin-left: 28px;
	}
}
.title{
	display: flex;
	justify-content: space-between;
	span{
		color: #666;
		small{
			font-size: 14px;
			color: #999;
			margin-left: 15px;
		}
	}
}
.info{
	padding: 20px 30px;
	color: #666;
	p{
		display: flex;
		margin-bottom:20px ;
		label{
			width: 70px;
		}
		span{
			flex: 1;
		}
	}
}
.list{
	padding: 30px ;
	height: 180px;
	overflow-y: auto;
	li{
		position: relative;
		padding-left: 20px;
		padding-bottom: 20px;
		font-size: 14px;
		b{
			display: block;
			line-height: 14px;
			margin-bottom: 10px;
		}
		span{
			color: #999;
		}
		&::before{
			display: block;
			width: 10px;
			height: 10px;
			content: '';
			border-radius: 50%;
			background: #1EBC20;
			position: absolute;
			left: 0;
			top: 2px;
		}
		&::after{
			display: block;
			content: '';
			height: 100%;
			width: 2px;
			left: 5px;
			top: 2px;
			border-left: 1px solid #1EBC20;
			position: absolute;
		}
		&:last-child{
			padding-bottom: 0;
			&::after{
				display: none;
			}
		}
	}
}
</style>