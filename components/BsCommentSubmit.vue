<!--
 * @Author: ch
 * @Date: 2022-06-25 15:29:43
 * @LastEditors: ch
 * @LastEditTime: 2022-06-30 22:53:16
 * @Description: file content
-->
<template>
	
	<div class="submit">
		<p class="rate-box" v-if="type === COMMENT.TYPE.COMMENT">
			<b>满意度评分</b>
			<el-rate v-model="rate"></el-rate>
			<span>{{reteDesc}}</span>
		</p>
		<el-input type="textarea" class="textarea" placeholder="从多个维度评价，可以帮助更多想买的人哦~"
			v-model="commentContent"  show-word-limit :maxlength="500" :rows="6"/>
		<div class="operation">
			<el-upload list-type="picture-card" 
				:on-remove="handleRemove" :limit="6"
				:action="uploadAction" :data="uploadData" 
				:before-upload="handleBeforeUpload" 
				:on-exceed="handleUploadExceed"
              	:on-error="handleUploadError">
					<i class="el-icon-plus"></i>
					<p class="upload-txt">我要晒图</p>
				</el-upload>
			<UiButton class="upload-btn" :disabled="isDisabled" @click="handleSubmit">发表评论</UiButton>
		</div>
	</div>
</template>
<script>
import {ApiPostComment} from '@/plugins/api/comment';
import {ApiPostGetOssConfig} from '@/plugins/api/oss';
import {COMMENT} from '@/constants';

export default {
	props : {
		type : {
			type : String | Number,
			default : COMMENT.TYPE.COMMENT
		},
		commentDetail : {
			type : Object,
			default : () => ({})
		}
	},
	data(){
		return {
			COMMENT,
			rate: 5,
			commentContent : '',
			uploadData : {},
			uploadAction : '',
			fileList : []
		}
	},
	computed:{
		isEdit(){
			return (this.commentContent || this.fileList.length > 0) ? true : false
		},
		reteDesc(){
			return COMMENT.RATE_LEVEL[this.rate];
		},
		isDisabled(){
			let status = false
			if(this.type === COMMENT.TYPE.COMMENT){
				status = !this.rate || !this.commentContent.trim();
			}
			if(this.type === COMMENT.TYPE.FOLLOW_COMMENT){
				status = !this.commentContent.trim();
			}
			return status;
		}
	},
	watch : {
		isEdit(val){
			this.$emit('editStatusChange', val)
		}
	},
	methods : {
		async handleSubmit(){
			let data = {
				commentContent : this.commentContent,
				commentType : this.type,
				orderProductId : this.commentDetail.orderProductId,
				pictureUrl : this.fileList.map(i => i.url).join(',')
			}
			if(this.type === COMMENT.TYPE.COMMENT){
				data.productId = this.commentDetail.productId;
				data.commentScore = this.rate;
			}else if(this.type === COMMENT.TYPE.FOLLOW_COMMENT){
				data.originId = data.parentId = this.commentDetail.id;
			}
			const {error, result} = await ApiPostComment(data);
			if(error){
				this.$message.error(error.message);
				return false;
			}
			this.commentContent = '';
			this.fileList = [];
			this.$nextTick(()=>{
				this.$emit('submit',result);
			})
			
		},

		/**
		 * 获取OSS鉴权信息
		 * configId 自定义文件夹 图片存储的文件夹名称
		 * serviceName 服务名
		 */
		async getOssCon(){
			const {error, result} = await ApiPostGetOssConfig({
				configId : 'account-comment/',
				serviceName : 'comment'
			});
			if(error){
				this.$message.error(error.message);
				return false
			}
			return result
			
		},

		async handleBeforeUpload(file) {
			let result = await this.getOssCon();
			if(result){
				this.uploadAction = result.host;
				this.uploadData = {
					...this.uploadData,
					policy : result.policy,
					OSSAccessKeyId: result.accessId,
					success_action_status: 200,
					signature: result.signature,
				}
			}
			Object.assign(this.uploadData, {
				key: `${result.dir}${"${filename}"}`,
				name: file.name,
			});
			this.fileList.push({
				url : `${result.host}/${result.dir}${file.name}`,
				uid : file.uid
			})
		},

		handleUploadError(error, file) {
			this.handleRemove(file)
		},
		handleRemove(file) {
			this.fileList = this.fileList.filter(i => i.uid != file.uid );
		},
		handleUploadExceed(){
			this.$message.warning('最多只能上传6张照片哦~')
		}
	}
}
</script>

<style lang="scss" scoped>
.rate-box{
	display: flex;
	b{
		font-weight: normal;
		margin-right: 10px;
		color: #666;
	}
	span{
		color: #FF6A19;
		margin-left: 10px;
	}
}
.textarea{
	height: 138px;
	margin-top: 30px;
}
.operation{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 15px;
	.upload-txt{
		font-size: 12px;
		color: #999;
	}
	.upload-btn{
		height: 40px;
		width: 100px;
		border-radius: 4px;
		font-size: 14px;
		padding: 0;
	}
}
/deep/{
	 .el-upload--picture-card,.el-upload-list__item{
		 height: 70px !important;
		 width: 70px !important;
		 line-height: 20px;
	 }
	 .el-upload--picture-card{
		 padding-top: 10px;
	 }
}
</style>