<!--
 * @Author: ch
 * @Date: 2022-06-27 11:46:34
 * @LastEditors: ch
 * @LastEditTime: 2022-06-30 23:40:44
 * @Description: file content
-->
<template>
	<div class="main">
		<div class="tab">
			<router-link class="tab--link" to="/account/home">个人中心</router-link>
			<router-link class="tab--link" to="/account/order/list">我的订单</router-link>
			<span>商品评价</span>
		</div>
		<div class="title">商品评价</div>
		<div class="ctx">
			<UiLoading v-if="loading"></UiLoading>
			<BsCommentInfo v-else source="comment" :isFollowForm="isFollow" v-for="(item, idx) in list" :key="idx"
				:commentDetail="item" @submit="handleSubmitComment($event, idx)" 
				@submitFollow="handleSubmitFollow($event, idx)" @editStatusChange="editChange($event, idx)"/>
		</div>
	</div>
</template>
<script>
import {
  ApiGetOrderCommentDetail,
  ApiGetCommentTabCount,
  ApiGetProductSatisfaction,
  ApiGetCommentCount,
  ApiGetCommentDetail
} from "@/plugins/api/comment";
import {COMMENT} from '@/constants'
import BsCommentInfo from '../../../components/BsCommentInfo.vue';
export default {
	components: { BsCommentInfo },
	data(){
		let query = this.$route.query;
		return {
			isFollow : query.follow ? true : false, // 是否自动打开追评
			orderId: query.orderId,
			commentId : query.commentId,
			list:[],
			loading : true
		}
	},
	mounted(){
		if(this.orderId){
			this.getOrderCommentDetail();
		}else if(this.commentId){
			this.getCommentDetail();
		}
	},

	beforeRouteLeave(to, from, next) {
		if(this.list.findIndex(i => i.isEdit) > -1){
			this.$confirm('你正在进行商品评价，退出后评价的内容将不保存！','提示').then(()=>{
				next()
			}).catch(()=>{

			})
		}else{
			next()
		}
	},
	methods:{
		/**
		 * 按订单查询评价详情
		 */
		async getOrderCommentDetail() {
			this.loading = true;
			const { error, result } = await ApiGetOrderCommentDetail({
				orderId: this.orderId,
			});
			this.loading = false;
			if (error) {
				this.$message.warning(error.message);
				return false;
			}
			this.list = result;
		},
		/**
		 * 按评论查询，追评时用
		 */
		async getCommentDetail(){
			this.loading = true;
			const {error, result} = await ApiGetCommentDetail({
				commentId : this.commentId
			});
			this.loading = false;
			if (error) {
				this.$message.warning(error.message);
				return false;
			}
			this.list = [result];
		},
		/**
		 * 提交评论成功事件
		 * 如果还有未评论的则弹窗提示，并更新当前行的数据
		 * 如果是最好一条产品评论则跳到评论成功页
		 */
		handleSubmitComment(result, idx){
			this.$set(this.list, idx, {...this.list[idx],...result});
			if(this.list.findIndex(i => !i.id) > -1){
				this.$message.success('评论成功~');
			}else{
				this.$router.replace('/account/comment/success');
			}
		},
		
		editChange(isEdit, idx){
			this.$set(this.list[idx], 'isEdit', isEdit);
		},
	}
}
</script>
<style lang="scss" scoped>
.main{
	@include layout-box;
	margin-bottom: 32px;
}
.tab{
	margin: 10px 0;
	height: 40px;
	line-height: 40px;
	color: #999;
	&--link{
		background: url('@/assets/img/comment/right.png') no-repeat right center;
		padding-right: 15px;
		margin-right: 10px;
		background-size: 5px;
		color: #666;
	}
}
.title{
    width: 100%;
	height: 40px;
	line-height: 40px;
	background: #f7f7f7;
	border: 1px solid #f2f2f2;
	padding: 0 16px;
	font-size: 14px;
	font-family: Microsoft YaHei-Regular, Microsoft YaHei;
	font-weight: 400;
	color: #666666;
	display: flex;
	justify-content: space-between;
}

.ctx{
	border: 1px solid #f2f2f2;
	border-top: 0;
}
</style>