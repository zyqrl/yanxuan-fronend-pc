<!--
 * @Author: ch
 * @Date: 2022-05-08 01:11:33
 * @LastEditors: ch
 * @LastEditTime: 2022-06-28 10:39:35
 * @Description: file content
-->
<template>
	<div>
		<div class="main">
			<img class="icon" src="@/assets/img/order/pay_success.png" />
			<p>评价成功</p>
			<div>
				<UiButton type="grey" @click="$router.back()" :radius="true">返回</UiButton>
			</div>
			<div v-if="goodsList.length">
				<b class="product-title">这些宝贝还在等你得评价哦~</b>
				<ul class="product">
					<li v-for="(item, idx) in goodsList" :key="idx">
						<img :src="item.productPicture"/>
						<p>{{item.productName}}</p>
						<UiButton type="grey" @click="$router.replace(`/account/comment?orderId=${item.orderId}`)" >
							{{item.commentStatus == 1 ? '立即评价' : '立即追评'}}
						</UiButton>
					</li>
				</ul>
			</div>
		</div>
		<BsChosen class="chosen"/>
	</div>
</template>
<script>
import UiButton from '@/components/UiButton.vue';
import {ApiGetCommentOrderDetailList} from '@/plugins/api/order';
export default {
	components: { UiButton },
	data(){
		return {
			goodsList : []
		}
	},
	mounted(){
		this.getAwaitGoodsList();
	},
	methods:{
		
		async getAwaitGoodsList (){
			const  {error, result} = await ApiGetCommentOrderDetailList({
				length:6,
				pageIndex : 1
			});
			if(error){
				this.$message.warning(error.message)
			}
			this.goodsList = result.records.map(item => {
				return {
					productPicture : item.productImageUrl,
					productName : item.productName,
					commentStatus : item.commentStatus,
					orderId : item.orderId
				}
			});
		}
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
	margin: 0 10px 30px;
}
.product-title{
	height: 40px;
	line-height: 40px;
	text-align: left;
	background: #F7F7F7;
	font-weight: normal;
	color: #666;
	padding: 0 16px;
}
.product{
	display: flex;
	// justify-content: flex-start;
	li{
		margin:40px 0 0 48px;
		width: 140px;
		img{
			width: 140px;
			height: 140px;
			object-fit: contain;

		}
		p{
			@include ellipses(2);
			height: 40px;
			margin: 10px 0;
		}
	}
}
</style>