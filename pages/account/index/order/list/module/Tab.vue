<!--
 * @Author: ch
 * @Date: 2019-01-01 08:04:09
 * @LastEditors: ch
 * @LastEditTime: 2022-06-27 11:38:50
 * @Description: file content
-->
<template>
	<ul class="tab">
		<li v-for="item in tabs" :key="item.value" @click="change(item.value)"
			:class="active == item.value && 'tab__active'">
			{{item.label}}
			<span v-if="item.count">{{item.count}}</span>
		</li>
	</ul>
</template>
<script>
import {ApiGetOrderStatistics} from '~/plugins/api/order';
export default {
	props:{
		active : {
			type : Number | String,
			default : -1
		}
	},
	data(){
		return {
			tabs : [
				{label : '全部', value : -1, code: 'allCount'},
				{label : '待付款', value : 1, code: 'unpaidCount'},
				{label : '待发货', value : 3, code: 'waitDeliveryCount'},
				{label : '待收货', value : 4, code: 'deliveredCount'},
				{label : '待评价', value : 5, code: 'waitComment'},
			]
		}
	},
	mounted(){
		this.getOrderStatistics();
	},
	methods : {
		change(val){
			this.$emit('change', val)
		},
		async getOrderStatistics(){
			const {result} = await ApiGetOrderStatistics();
			this.tabs = this.tabs.map(i => {
				i.count = result[i.code];
				return i;
			})
		}
	}
}
</script>
<style lang="scss" scoped>

.tab {
	width: 100%;
	height: 42px;
	line-height: 42px;
	border-bottom: 1px solid #ddd;
	li{
		float: left;
		margin-right: 54px;
		font-size: 16px;
		cursor: pointer;
		span{
			color: #FF875B;
		}
	}
	&__active{
		color: #FF875B;
		position: relative;
		&::after{
			display: block;
			height: 2px;
			width: 100%;
			content: '';
			background: #FF875B;
			position: absolute;
			bottom: 0;
		}
	}
}
</style>