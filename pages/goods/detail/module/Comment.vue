<!--
 * @Author: ch
 * @Date: 2022-06-24 14:39:38
 * @LastEditors: ch
 * @LastEditTime: 2022-06-30 22:42:19
 * @Description: file content
-->
<template>
	<div>
		<div class="title">
			<b>商品评价</b>
			<div>
				<el-dropdown class="title--sort" @command="handleCommand">
					<span>{{sortActive.label}}<i class="el-icon-arrow-down el-icon--right"></i></span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item v-for="item in sortData" :key="item.val" :command="item">{{item.label}}</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<el-checkbox v-model="isContent" @change="handledContent">有内容评价</el-checkbox>
			</div>
		</div>
		<div class="ctx">
			
			
			<div class="ctx--top">
				<div class="ctx--top-rate" v-if="productRate">
					<b>商品满意度</b>
					<p>{{productRate}}</p>
					<el-rate :value="productRate" disabled size="16px"></el-rate>
				</div>
				<div class="ctx--top-tabs" v-if="tabs.length > 1">
					<span v-for="i in tabs" :key="i.labelType" @click="handleTabChanage(i)"
						:class="{'active':i.labelType == tabActive}">
						{{i.labelName}}({{i.commentCount}})
					</span>
				</div>
			</div>
			<UiEmpty v-if="!list.length && loading=='finish'" :icon="require('@/assets/img/comment/empty.png')" desc="暂时没有评论"/>
			<template v-else>
				<BsCommentInfo v-for="item in list" :key="item.id" :commentDetail="item" source="detail"/>
			</template>
			<div v-if="loading === 'loading'" class="loading">数据加载中....</div>
			<div v-if="loading === 'finish'" class="more" @click="next">查看更多></div>
		</div>

      <!-- <el-pagination class="pagination flex flex-right" layout="prev, pager, next"
        @current-change="handleCurrentChange" :current-page.sync="pageIndex"
        :page-size="pageSize" :total="total"></el-pagination> -->
	</div>
</template>
<script>
import {
  ApiGetCommentList,
  ApiGetCommentTabCount,
  ApiGetProductSatisfaction,
  ApiGetCommentCount
} from "@/plugins/api/comment";
import BsCommentInfo from '../../../../components/BsCommentInfo.vue';
export default {
	components: { BsCommentInfo },
	props : {
		
	},
	data(){
		return {
			productId : this.$route.params.id,
			tabActive : -1,
			sortData : [{
				val : 1,
				label : '默认排序'
			},{
				val : 2,
				label : '按时间排序'
			}],
			sortActive : {
				val : 1,
				label : '默认排序'
			},
			productRate : 0,
			isContent : true,
			pageIndex : 1,
			pageSize : 10,
			total:0,
			tabs : [
				{
					labelName : '全部',
					labelType : -1,
					commentCount : 0
				}
			],
			pageSize : 10,
			list : [],
			loading : 'finish'
		}
	},
	mounted(){
		this.getList();
		this.getTabCount();
		this.getProductSatisfaction();
		this.getCount();
	},
	methods:{
		async getList(){
			if(this.loading === 'loading'){
				return false;
			}
			this.loading = 'loading';
			const {error, result} = await ApiGetCommentList({
				pageIndex : this.pageIndex,
				length : this.pageSize,
				productId : this.productId,
				commentLabel : this.tabActive == -1 ? null : this.tabActive,
				sortType : this.sortActive.val,
				isContent : this.isContent || null
			});
			this.loading = 'finish';
			if(error){
				return false;
			}
			this.list = this.list.concat(result.records);
			// 如果当前页数据为空，且不是最后一页则再查一次下一页，因过滤条件后端接口无法实现分页。所以这么做的。
			if(result.records.length == 0 && this.pageIndex < result.pages){
				this.next();
				return false;
			}
			if(this.pageIndex === result.pages){
				this.loading = 'nomore'
			}
			// this.total = result.total
		},
		next(){
			this.pageIndex++;
			this.getList();
		},
		async getTabCount (){
			const {error, result} = await ApiGetCommentTabCount({
				productId : this.productId
			});
			if(error){
				return false;
			}
			this.tabs = this.tabs.concat(result.filter(i => i.commentCount > 0));
			
		},

		async getCount(){
			const {error, result} = await ApiGetCommentCount({
				productId : this.productId
			});
			if(error){
				return false;
			}
			this.$set(this.tabs[0],'commentCount', result.allCommentCount)
		},
		async getProductSatisfaction (){
			const {error, result} = await ApiGetProductSatisfaction({
				productId : this.productId
			});
			if(error){
				return false;
			}
			this.productRate = Number(result.productSatisfaction);
		},
		handleCurrentChange(val) {
			this.pageIndex = val;
			this.getList();
		},
		handleTabChanage(i){
			if(this.tabActive == i.labelType){
				return false
			}
			this.tabActive = i.labelType;
			this.pageIndex = 1;
			this.list = [];
			this.getList();
		},
		handleCommand(val){
			this.sortActive = val;
			this.pageIndex = 1;
			this.list = [];
			this.getList();
		},
		handledContent(){
			this.pageIndex = 1;
			this.list = [];
			this.getList();

		}
	}	
}
</script>
<style lang="scss" scoped>
.title {
	margin-top: 30px;
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
	&--sort{
		margin-right: 30px;
		cursor: pointer;
		&:hover{
			color: #FF512B;
		}
	}
}
.ctx{
	border: 1px solid #f2f2f2;
	border-top: 0;
	overflow: hidden;
	margin-bottom: 40px;
	&--top{
		display: flex;
		&-rate{
			width: 170px;
			height: 136px;
			text-align: center;
			padding-top: 26px;
			color: #666;
			position: relative;
			b{
				font-weight: normal;
				display: block;
   				height: 14px;
			}
			p{
				font-size: 40px;
				height: 40px;
				line-height: 40px;
				font-weight: bold;
				margin-top: 6px;
			}
			&::after{
				content: '';
				display: block;
				height: 90px;
				width: 1px;
				background: #eee;
				position: absolute;
				right: 0;
				top: 26px;
			}
			/deep/.el-rate__icon{
				margin-right: 0;
				font-size: 24px;
			}
		}
		&-tabs{
			margin: 34px 0;
			padding-left: 40px;
			display: flex;
			align-items: center;
			span{
				display: inline-block;
				height: 24px;
				line-height: 22px;
				border: 1px solid #eee;
				color: #999;
				padding: 0 12px;
				font-size: 12px;
				border-radius: 4px;
				margin-right: 16px;
				cursor: pointer;
				&.active{
					background: #FF6A19;
					border-color: #FF6A19;
					color: #fff;
				}
			}
		}
	}
}
.loading,.more{
	color: #999;
	text-align: center;
	margin-bottom: 40px;
}
.more{
	cursor: pointer;
}

.pagination {
    margin: 50px 0;
    /deep/.el-pager {
      margin-left: 8px;
    }

    /deep/button,
    /deep/.number,
    /deep/.btn-quicknext,
    /deep/.btn-quickprev {
      width: 32px;
      height: 32px;
      text-align: center;
      line-height: 32px;
      margin-left: 8px;
      border-radius: 2px 2px 2px 2px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      font-size: 14px;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.65);
    }

    /deep/.active {
      background: #ff512b;
      color: #fff;
    }
  }
</style>