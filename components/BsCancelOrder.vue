<!--
 * @Author: ch
 * @Date: 2022-05-09 20:20:02
 * @LastEditors: ch
 * @LastEditTime: 2022-05-12 11:18:03
 * @Description: file content
-->
<template>
	<el-dialog :visible.sync="myVisible" title="取消订单原因" width="380px">
		<ul class="cancel">
			<li v-for="item in cancelData" :key="item.value" @click="selected = item.value"
				:class="selected == item.value && 'cancel__active'">
				{{item.label}}
			</li>
		</ul>
		<UiButton type="yellow_gradual" class="btn" :radius="true" :disabled="!selected"
			@click="cancelOrder">确认取消</UiButton>
	</el-dialog>
</template>
<script>
import {ApiPutCancelOrder,ApiPutOrderReceive} from '@/plugins/api/order'
import UiButton from '@/components/UiButton.vue';
export default {
	components: { UiButton },
	props : {
		visible : {
			type : Boolean,
			default : false
		},
		orderId : {
			type : Number
		}
	},
	data(){
		return {
			selected : '',
			cancelData : [
				{value : 1, label : '我不想买了'},
				{value : 2, label : '地址信息填写错误'},
				{value : 3, label : '商品降价'},
				{value : 4, label : '商品无货'},
				{value : 5, label : '其他'}
			]
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
		}
	},
	methods:{

		async cancelOrder(){
			const ooderId = this.orderId;
			const {error, result} = await ApiPutCancelOrder({
				cancelReasonType : this.selected,
				orderId : ooderId
			});
			if(error){
				this.$message.error(error.message);
				return false;
			}
			this.myVisible = false;
			this.$emit('cancel')
			// 取消成功，跳到订单关闭页
		}
	}
}
</script>
<style lang="scss" scoped>
.cancel{
	width: 320px;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: 10px;
	li{
		width: 150px;
		height: 36px;
		line-height: 36px;
		text-align: center;
		border: 1px solid #ddd;
		cursor: pointer;
		margin: 15px 0;
		&.cancel__active{
			border-color: #FF875B;
			color: #FF875B;
		}
	}
}
.btn{
	width: 320px;
	height: 36px;
	margin-top: 25px;
}
/deep/{
	.el-dialog{
		border-radius: 4px;
	}
	.el-dialog__header{
		padding: 30px 0 15px;
		text-align: center;
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