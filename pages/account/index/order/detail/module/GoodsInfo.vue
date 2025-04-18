<!--
 * @Author: ch
 * @Date: 2022-05-09 16:24:49
 * @LastEditors: ch
 * @LastEditTime: 2022-05-10 13:55:36
 * @Description: file content
-->
<template>
	<div>
		<table class="goods">
			<thead>
				<tr>
					<th>商品信息</th>
					<th width="96">单价</th>
					<th width="96">数量</th>
					<th width="163" v-if="orderInfo.orderStatus > 2">实付款</th>
					<th width="135">操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="i in products" :key="i.orderProductId">
					<td class="not-border"><UIGoodsInfo :goods="i"/></td>
					<td class="not-border">
						<UiMoney :money="i.realAmount" float/>
					</td>
					<td class="not-border">{{i.quantity}}</td>
					<td v-if="orderInfo.orderStatus > 2">
						<UiMoney :money="i.realAmount" float/>
					</td>
					<td>
						<template v-if="i.afterSaleApplyFlag || [2,3,4].includes(i.detailStatus)">
              <nuxt-link v-if="i.afterSaleApplyFlag" to="/account/order/saleAfter/list">申请售后</nuxt-link>
							<span v-else>
								{{ i.detailStatus === 2 ? '退款中' :  i.detailStatus === 3 ? '已退款' : '退款关闭'}}
							</span>
						</template>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="message">
			<div>
				<label>买家留言</label>
				<span>{{orderInfo.userMessage || '无'}}</span>
			</div>
			<div>
				<p>
					<label>商品总额</label>
					<UiMoney :money="orderInfo.totalAmount" float/>
				</p>
				<p>
					<label>运费</label>
					<UiMoney :money="orderInfo.shippingAmount" float/>
				</p>
				<p v-if="orderInfo.orderStatus > 2">
					<label>
						{{orderInfo.orderStatus == 1 ? '应付款：' : '实付款：'}}
					</label>
					<UiMoney class="message--pay-amount" size="20px" preSize="14px" sufSize="14px"  
						:money="orderInfo.payAmount" float prefix suffix/>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
import UIGoodsInfo from '@/components/UIGoodsInfo.vue'
import UiMoney from '@/components/UiMoney.vue'

export default {
	components: { UIGoodsInfo, UiMoney },
	props : {
		orderInfo : {
			type : Object,
			default : () => ({})
		}
	},
	computed:{
		products (){
			return this.orderInfo.products || []
		}
	}
}
</script>
<style lang="scss" scoped>

.goods{
	width: 100%;
	border: 1px solid #ddd;
	margin-top: 30px;
	th{
		height: 42px;
		background: #f8f8f8;
		font-weight: normal
	};
	td{
		text-align: center;
		border: 1px solid #ddd;
		padding: 10px 20px;
		&.not-border{
			border-left: 0;
			border-right: 0;
		}
	}
	tbody tr:first-child td{
		padding-top: 20px
	}
	tbody tr:last-child td{
		padding-bottom: 20px
	}
}
.message{
	border: 1px solid #ddd;
	border-top: 0;
	display: flex;
	justify-content: space-between;
	padding: 30px;
	p{
		width: 250px;
		display: flex;
		justify-content: space-between;
		&:nth-child(2){
			margin: 20px 0;
		}
	}
	&--pay-amount{
		color: #FF512B;
		font-weight: bold;
	}
}
</style>