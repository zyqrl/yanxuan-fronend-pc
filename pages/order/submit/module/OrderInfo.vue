<!--
 * @Author: ch
 * @Date: 2022-05-04 17:36:46
 * @LastEditors: ch
 * @LastEditTime: 2022-05-08 16:04:39
 * @Description: file content
-->

<template>
	<table class="goods">
		<thead>
			<tr>
				<th width="600">商品信息</th>
				<th>单价</th>
				<th>数量</th>
				<th>小计</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in products" :key="item.productId">
				<td>
					<UIGoodsInfo :goods="item"></UIGoodsInfo>
				</td>
				<td>￥{{item.realPrice}}</td>
				<td>{{item.quantity}}</td>
				<td>￥{{item.realAmount}}</td>
			</tr>
		</tbody>
	</table>
</template>
<script>
export default {
	props : {
		products : {
			type : Array,
			default : ()=>([])
		}
	},
	data(){
		return {
			
		}
	},
	
}
</script>
<style lang="scss" scoped>
.goods{
	width: 100%;
	border: 1px solid #ddd;
	th{
		height: 42px;
		background: #f8f8f8;
		color: #999;
		font-weight: normal
	};
	td{
		text-align: center;
		padding: 10px 20px;
	}
	tbody tr:first-child td{
		padding-top: 20px
	}
	tbody tr:last-child td{
		padding-bottom: 20px
	}
}
</style>