<!--
 * @Author: ch
 * @Date: 2022-05-07 22:40:55
 * @LastEditors: ch
 * @LastEditTime: 2022-05-10 13:48:39
 * @Description: file content
-->
<template>
	<div class="ui-line-box">
		<div class="ui-line-box--head">
			<slot name="head">
				<b class="ui-line-box--title">{{title}}</b>
			</slot>
		</div>
		<slot name="body"></slot>
	</div>
</template>
<script>
export default {
	props : {
		title : {
			type : String,
			default : ''
		}
	}
}
</script>
<style lang="scss" scoped>
.ui-line-box{
	border:1px solid #ddd;
	&--head{
		height: 42px;
		line-height: 42px;
		padding: 0 30px;
		background: #f8f8f8;
	}
	&--title{
		font-weight: normal;
	}
}
</style>