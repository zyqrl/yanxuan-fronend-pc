<!--
 * @Author: ch
 * @Date: 2022-05-09 14:41:37
 * @LastEditors: ch
 * @LastEditTime: 2022-05-16 14:46:43
 * @Description: file content
-->
<template>
	<ul class="step">
		<li v-for="item in steps" :key="item.id" :class="item.active && 'active'">
			<div>
				<img :src="item.active ? item.iconActive :item.icon"/>
				<b>{{item.name}}</b>
				<span>{{item.date}}</span>
				<span>{{item.time}}</span>
			</div>
		</li>
	</ul>
</template>
<script>
import UiButton from '@/components/UiButton.vue';
import {FormatDate} from '@/plugins/utils'
export default {
	components: { UiButton },
	props: {
		orderInfo : {
			type : Object,
			default : () => ({})
		}
	},
	data(){
		return {
		}
	},
	computed:{
		steps(){
			const defaultStep = [
				{
					id : 1, name : '提交订单', 
					icon: require('@/assets/img/account/order/order_status_1.png'),
					iconActive : require('@/assets/img/account/order/order_status_1_active.png')
				},
				{
					id : 6, name : '支付订单' , 
					icon: require('@/assets/img/account/order/order_status_2.png'),
					iconActive : require('@/assets/img/account/order/order_status_2_active.png')
				},
				{
					id : 7, name : '平台发货' , 
					icon: require('@/assets/img/account/order/order_status_3.png'),
					iconActive : require('@/assets/img/account/order/order_status_3_active.png')
				},
				{
					id : 8, name : '确认收货' , 
					icon: require('@/assets/img/account/order/order_status_4.png'),
					iconActive : require('@/assets/img/account/order/order_status_4_active.png')
				},
			];
			let showStep = [];
			const logs = this.orderInfo.orderLogs;
			if(!logs){
				return [];
			}
			if(this.orderInfo.orderStatus === 2){
				logs.forEach(item => {
					const cur = defaultStep.find(i => i.id === item.operationType);
					if(cur){
						showStep.push({
							...cur,
							date : FormatDate(item.createTime,'yyyy-mm-dd'),
							time : FormatDate(item.createTime, 'hh:ii:ss'), 
							active:true
						});
					}
				});
				const createTime = logs[logs.length - 1].createTime;
				showStep.push({
					type:-1, name: '交易关闭', active: true,
					date : FormatDate(createTime,'yyyy-mm-dd'),
					time : FormatDate(createTime, 'hh:ii:ss'),  
					icon: require('@/assets/img/account/order/order_status_close.png'),
					iconActive : require('@/assets/img/account/order/order_status_close.png')
				});
				
			}else{
				showStep = defaultStep.map(item => {
					const cur = logs.find(i => i.operationType === item.id);
					if(cur){
						item.active = true;
						item.date = FormatDate(cur.createTime,'yyyy-mm-dd');
						item.time = FormatDate(cur.createTime, 'hh:ii:ss'); 
						item.createTime = cur.createTime;
					}
					return item;
				})
				let lastLog = logs[logs.length - 1];
				let lastStep = {
					type:-1, name: '交易完成', 
					icon: require('@/assets/img/account/order/order_status_5.png'),
					iconActive : require('@/assets/img/account/order/order_status_5_active.png')
				}
				if(lastLog.operationType === 8){
					lastStep.createTime = lastLog.createTime;
					lastStep.active = true;
				}
				showStep.push(lastStep);
			}
			return showStep;
		}
	},
	methods:{
	}
	
}
</script>
<style lang="scss" scoped>
.step{
	padding: 45px 65px 0 65px;
	display: flex;
	flex: 1;
	justify-content: space-between;
	li{
		flex: 1;
		position: relative;
		&::after{
			display: block;
			content: '........................................';
			width: calc(100% - 65px);
			height: 20px;
			line-height: 0;
			overflow: hidden;
			position: absolute;
			color: #eee;
			font-size: 40px;
			top: 25px;
			left: -8px;
			z-index: 1;
		}
		&:first-child{
			flex: 0;
			&::after{
				content: '';
			}
		}
		div{
			position: relative;
			z-index: 2;
			width: 80px;
			text-align: center;
			float: right;
		}
		img{
			width: 66px;
		}
		b{
			display: block;
			margin: 10px 0;
			color: #999;
		}
		span{
			display: block;
			color: #666;
			font-size: 12px;
		}
		&.active{
			b{
				color: #FF875B;
			}
			&::after{
				color: #FFF3ED;
			}
		}
	}
}
</style>