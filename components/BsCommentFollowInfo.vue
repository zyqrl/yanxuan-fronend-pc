<!--
 * @Author: ch
 * @Date: 2022-06-23 10:40:04
 * @LastEditors: ch
 * @LastEditTime: 2022-06-30 22:11:19
 * @Description: file content
-->
<template>
	<div class="follow">
		<b class="follow--title">{{day}}追评:</b>
		<p class="follow--ctx">{{followComment.commentContent}}</p>
		<UiImgs v-if="imgs.length" :list="imgs" class="follow--imgs" />
	</div>
</template>
<script>
import UiImgs from './UiImgs.vue';
export default {
	components: { UiImgs },
	props : {
		followComment : {
			type : Object,
			default : () => ({})
		},
		commentTime : {
			type : String,
			default : ''
		}
	},
	computed:{
		day(){
			const followTime = (new Date(this.followComment.createTime)).getTime();
			const commentTime = (new Date(this.commentTime)).getTime();
			const day = Math.floor((followTime - commentTime) / (24 * 60 * 60 * 1000));
			return day > 0 ? `${day}天后` : `当天`;
		},
		imgs (){
			let urls = this.followComment.pictureUrl || '';
			return urls ? urls.split(',') : [];
		}
	}
}
</script>
<style lang="scss" scoped>
.follow{
	margin-top: 30px;
	&--title{
		color: #FF6A19;
		font-weight: normal;
	}
	&--ctx{
		line-height: 24px;
		word-break: break-all;
	}
	&--imgs{
		margin-top: 10px;
	}
}
</style>