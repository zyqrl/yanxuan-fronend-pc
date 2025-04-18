<!--
 * @Author: ch
 * @Date: 2022-05-12 10:30:07
 * @LastEditors: ch
 * @LastEditTime: 2022-05-12 11:01:57
 * @Description: file content
-->
<template>
	<div class="ui-empty">
		<img class="ui-empty--icon" :src="icon"/>
		<p class="ui-empty--desc">{{desc}}</p>
		<slot></slot>
	</div>
</template>
<script>
export default {
	props : {
		title : String,
		desc : String,
		icon : String
	},
}
</script>
<style lang="scss" scoped>
.ui-empty{
	margin-top: 30px;
	text-align: center;
	padding: 80px 0;
	&--icon{
		width: 228px;
	}
	&--desc{
		margin: 20px 0;
		color: #999;
	}
}
</style>