<!--
 * @Author: ch
 * @Date: 2022-05-08 14:41:42
 * @LastEditors: ch
 * @LastEditTime: 2022-05-16 16:13:11
 * @Description: file content
-->
<template>
	<div class="ui-goods-info" @click="$router.push(`/goods/detail/${goods.productId}`)">
		<div class="ui-goods-info--img" 
			:style="`background-image:url(${goods.productImageUrl || goods.productMainPicture})`"></div>
		<p>
			<b>{{goods.productName}}</b>
			<span>{{goods.skuDescribe}}</span>
		</p>
	</div>
</template>
<script>
export default {
	props : {
		goods : {
			type : Object,
			default : () => ({})
		}
	}
}
</script>
<style lang="scss" scoped>
.ui-goods-info{
	display: flex;
	cursor: pointer;
	&--img{
		width: 100px;
		height: 100px;
		border: 1px solid #eee;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}
	p{
		width: 270px;
		margin: 7px 0 0 18px;
		text-align: left;
		b{
			display: block;
			line-height: 22px;
			margin-bottom: 10px;
			overflow: hidden;
			text-overflow:ellipsis;
			display:-webkit-box; 
			-webkit-box-orient:vertical;
			-webkit-line-clamp:2; 
		}
		span{
			color: #999;
		}
	}
}
</style>