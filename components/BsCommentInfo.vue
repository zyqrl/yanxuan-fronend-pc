<!--
 * @Author: ch
 * @Date: 2022-06-24 11:43:04
 * @LastEditors: ch
 * @LastEditTime: 2022-07-01 18:13:33
 * @Description: file content
-->
<template>
	<div class="comment-info">
		<div class="side-user"  v-if="source == 'detail'">
			<el-avatar :size="55" :src="commentDetail.userAvatar" />
			<p>{{commentDetail.userName}}</p>
		</div>
		<div class="side-product" v-else>
			<img :src="commentDetail.productPicture"/>
			<p>{{commentDetail.productName}}</p>
			<span>{{commentDetail.skuName}}</span>
		</div>
		<main>
			<BsCommentSubmit v-if="!commentDetail.id" :commentDetail="commentDetail" @submit="handleSubmit" 
				@editStatusChange="editStatusChange"/>
			<template v-else>
				<div class="top">
					<el-rate :value="commentDetail.commentScore" disabled/>
					<span class="time">{{FormatDate(commentDetail.createTime, 'yyyy-mm-dd hh:ii')}}</span>
				</div>
				<p class="sku" v-if="commentDetail.skuName">已购买：{{commentDetail.skuName}}</p>
				<div class="ctx">{{commentDetail.commentContent}}</div>
				<!-- 图片预览 -->
				<UiImgs v-if="imgs.length" :list="imgs" class="imgs" />

				<!-- 追评 -->
				<UiButton class="follow-btn" type="yellow_line" radius="4px"
					v-if="isCanFollowComment && !showFollowForm" @click="showFollowForm = true">发起追评</UiButton>
				
				<BsCommentSubmit v-if="showFollowForm && !followComment" :type="COMMENT.TYPE.FOLLOW_COMMENT" 
					:commentDetail="commentDetail" @submit="handleSubmitFollow" @editStatusChange="editStatusChange"/>
					
				<BsCommentFollowInfo v-if="followComment" 
					:followComment="followComment" :commentTime="commentDetail.commentTime"/>
				
				<!-- 点赞评论Bar -->
				<div class="operation">
					<div>
						<span class="operation--chat" @click="answerVisible = !answerVisible">
							<template v-if="replyCount">{{replyCount}}条</template>评论
						</span>
						<span class="operation--show" v-if="answerCommentList.length" @click="answerVisible = !answerVisible">
							{{answerVisible ? '收起' : '展开'}}
						</span>
					</div>
					<span class="operation--thumb" :class="{'operation--thumb__active':isLike}" @click="handleUseful">{{usefulCount || '有用'}}</span>
				</div>

				<!-- 评论内容 -->
				<div class="answer" v-if="showAnswerBox">
					<b class="answer--title">全部评论({{replyCount}})</b>
					<ul>
						<li class="answer--item" v-if="commentDetail.merchantComment">
							<div class="answer--name"><b>{{commentDetail.merchantComment.userName}}：</b><span>{{commentDetail.merchantComment.createTime}}</span></div>
							<p class="answer--ctx">{{commentDetail.merchantComment.commentContent}}</p>
						</li>
						<template  v-if="answerVisible">
							<li class="answer--item" v-for="(item, idx) in answerCommentList" :key="idx">
								<div class="answer--name">
									<b>{{item.userName}} {{item.parentId !== commentDetail.id ? ` 回复 ${item.parentUserName}` : ''}}：</b>
									<span>{{FormatDate(item.createTime, 'yyyy-mm-dd hh:ii')}}</span>
								</div>
								<p class="answer--ctx">{{item.commentContent}}</p>
								<span class="answer--answer" @click="handleAnswer(item)">回复</span>
							</li>
						</template>
					</ul>
					<div v-if="answerVisible" class="answer--form">
						<input v-model="answerContent" class="answer--input" maxlength="500"
							@keydown="handleClearAnswer" :placeholder="answerPlaceholder"/>
						<UiButton :disabled="!answerContent.trim()" @click="handleSubmitAnswer"
							radius="4px" class="answer--btn" type="red_panel">发表</UiButton>
					</div>
				</div>

			</template>
		</main>
		
	</div>
</template>
<script>
import BsCommentFollowInfo from './BsCommentFollowInfo.vue';
import {ApiPostComment, ApiPutCommentUseful} from '@/plugins/api/comment';
import {Debounce, FormatDate } from '@/plugins/utils';
import UiImgs from './UiImgs.vue';
import UiButton from './UiButton.vue';
import BsCommentSubmit from './BsCommentSubmit.vue';
import {COMMENT} from '@/constants'
export default {
	components: { BsCommentFollowInfo, UiImgs, UiButton, BsCommentSubmit },
	props:{
		// 来源 comment从我的订单来是需要操作评价，detail游客从商品中来只要显示评价详情
		source:{
			type : String,
			default : 'comment' 
		},
		// 是否默认打开追评，只有在无追评时有用
		isFollowForm : {
			type : Boolean,
			default : false,
			require : true
		},
		commentDetail : {
			type : Object,
			default : () => ({})
		}
	},
	data(){
		return { 
			COMMENT,
			answerCommentList : this.commentDetail.answerCommentList || [],
			answerVisible : false,
			answerContent : '',
			answer : null,
			isLike : this.commentDetail.isLike,
			usefulCount : this.commentDetail.usefulCount,
			replyCount : this.commentDetail.replyCount,
			showFollowForm : this.isFollowForm,
			followComment : this.commentDetail.followComment || null

		}
	},
	computed:{
		showAnswerBox(){
			return (this.commentDetail.merchantComment || this.answerVisible) ? true : false
		},
		answerPlaceholder (){
			return this.answer ? `回复：${this.answer.userName}` : '说点什么吧？'
		},
		imgs (){
			let imgs = this.commentDetail.pictureUrl;
			return imgs ? imgs.split(',') : [];
		},
		/**
		 * 是否需要显示追评按钮
		 * 如果是在订单里进来的，且没有追评则显示
		 */
		isCanFollowComment(){
			let status = (!this.followComment && this.source === 'comment')
			return status;
		}
	},
	watch:{
		commentDetail:{
			handler(){
				this.followComment = this.commentDetail.followComment;
				this.replyCount = this.commentDetail.replyCount || 0;
				this.answerCommentList = this.commentDetail.answerCommentList || [];
				this.isLike = this.commentDetail.isLike;
				this.usefulCount = this.commentDetail.usefulCount;
			},
			deep : true
			
		}
	},
	mounted(){
		this.answerCommentList = this.commentDetail.answerCommentList || [];
	},
	methods : {
		FormatDate,
		/**
		 * 评价成功后，抛出事件，方便父组件做数据处理
		 */
		handleSubmit(result){
			this.$emit('submit', result)
		},
		/**
		 * 追评提交成功，抛出事件，方便父组件做数据处理
		 */
		handleSubmitFollow(result){
			this.followComment = result;
		},
		handleAnswer (item){
			this.answer = item;
		},
		/**
		 * 有回复用户时，取消回复对象
		 * 输入框没有内容后再按一次退格，删除回复对象，直接回复评价
		 */
		handleClearAnswer(e){
			if(e.code === 'Backspace' && !this.answerContent && this.answer){
				this.answer = null;
			}
		},
		/**
		 * 评论回复，请求成功往列表添加一条记录
		 */
		async handleSubmitAnswer(){
			let data = {
				commentContent : this.answerContent,
				commentType : 3,
				originId : this.commentDetail.id,
				parentId : this.answer ? this.answer.id : this.commentDetail.id
			}
			const {error, result} = await ApiPostComment(data);
			if(error){
				this.$message.error(error.message);
				return false

			}
			this.answerCommentList.unshift({
				...result, 
				userName : this.$store.state.userInfo.nickname,
				parentUserName: this.answer ? this.answer.userName : ''
			});
			this.answerContent = '';
			this.replyCount++;
			this.$message.success('评论成功!');
		},
		/**
		 * 点击点赞，做防抖处理
		 */
		handleUseful(){
			this.isLike = !this.isLike
			if(this.isLike){
				this.usefulCount++;
			}else{
				this.usefulCount--;
			}
			if(!this.debounce){
				this.debounce = Debounce(this.updateUseFul, 500);
			}
			this.debounce();
		},
		/**
		 * 更新点赞请求
		 */
		async updateUseFul(){
			if(this.isLike === this.commentDetail.isLike){
				return false
			}
			const {error, result} = await ApiPutCommentUseful({
				commentId : this.commentDetail.id,
				isLike : this.isLike
			});
			this.commentDetail.isLike = this.isLike;
			
		},
		/**
		 * 动态监听是否有输入内容的评价或追评
		 */
		editStatusChange(val){
			this.$emit('editStatusChange', val)
		}
	}
}
</script>
<style lang="scss" scoped>
.comment-info{
	display: flex;
	border-top: 1px solid #f2f2f2;
	padding: 35px 20px 50px 0;
	main{
		flex: 1;
	}
}
.side-user{
	width: 170px;
	text-align: center;
	p{
		margin-top: 10px;
		@include ellipses(2)
	}
	
}
.side-product{
	width: 230px;
	padding: 0 45px;
	text-align: left;
	img{
		width: 140px;
		height: 140px;
		object-fit: contain;
	}
	p{
		margin-top: 10px;
		@include ellipses(2);
	}
	span{
		margin-top: 5px;
		display: block;
		color: #999;
		font-size: 12px;
	}

}
.top{
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
	/deep/.el-rate__icon{
		margin-right: 0;
		font-size: 24px;
	}
}
.time, .sku{
	color: #999;
	font-size: 12px;
}
.ctx{
	word-break: break-all;
	line-height: 24px;
	margin-top: 8px;
}
.imgs{
	margin-top: 10px;
}
.follow-btn{
	margin-top:30px
}
.follow{
	margin-top: 30px;
	&--title{
		color: #FF6A19;
		font-weight: normal;
	}
}
.operation{
	color: #999;
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
	&--show{
		color: #3083FF;
		margin-left: 28px;
		cursor: pointer;
	}
	&--chat,&--thumb{
		background: url('@/assets/img/comment/chat.png') no-repeat left center;
		background-size: 16px;
		padding-left: 24px;
		cursor: pointer;
		&__active,&:hover{
			background-image: url('@/assets/img/comment/chat_active.png');
			color: #FF6A19;

		}
	}

	&--thumb{
		background-image: url('@/assets/img/comment/thumb.png');
		&__active,&:hover{
			background-image: url('@/assets/img/comment/thumb_active.png');

		}
	}
}
.answer{
	background: #F8F8F8;
	margin-top: 14px;
	padding: 0 24px 20px;
	&--item{
		border-top: 1px solid #eee;
		padding: 20px 0;
	}
	&--title{
		height: 54px;
		line-height: 54px;
		font-weight: normal;
		color: #666;
	}
	&--name{
		color: #999;
		font-size: 12px;
		display: flex;
		justify-content: space-between;
	}
	&--ctx{
		color: #666;
		margin: 15px 0 0;
		word-break: break-all;
	}
	&--answer{
		font-size: 12px;
		color: #666;
		text-align: right;
		cursor: pointer;
		display: block;
		
	}
	&--form{
		display: flex;
	}
	&--input{
		flex: 1;
		height: 40px;
		border: 1px solid #eee;
		border-radius: 4px;
		margin-right: 15px;
		padding: 0 20px;
	}
	&--btn{
		height: 40px;
		font-size: 14px;
		
	}
	/deep/.ui-button__disabled{
		background: #eee;
		color: #999;
	}
}
</style>