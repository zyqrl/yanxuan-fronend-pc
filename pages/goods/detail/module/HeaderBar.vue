<!--
 * @Author: ch
 * @Date: 2022-06-25 07:24:32
 * @LastEditors: ch
 * @LastEditTime: 2022-06-29 14:19:36
 * @Description: file content
-->
<template>
	<div class="header">
		<div class="header--layout">
			<ul>
				<li @click="handleJump('detail')" :class="{'active': tabKey =='detail'}">商品详情</li>
				<li @click="handleJump('comment')" :class="{'active': tabKey =='comment'}">商品评价</li>
			</ul>
			<UiButton @click="handleAddCart">加入购物车</UiButton>
		</div>
	</div>
</template>
<script>
import UiButton from '@/components/UiButton.vue'
export default {
	components: { UiButton },
	props:{
		tabKey : {
			type : String,
			default : 'detail'
		}
	},
	data(){
		return {}
	},
	methods:{
		handleJump(val){
			this.$emit('jump', val)
		},
		handleAddCart(){
			this.$emit('addCart')
		}
	}
}
</script>
<style lang="scss" scoped>
.header{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 70px;
	background: #fff;
	z-index: 11;
	&--layout{
  		@include layout-box;
		padding-left: 256px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		ul{
			display: flex;
			font-size: 16px;
			li{
				margin-right: 50px;
				height: 70px;
    			line-height: 70px;
				&.active{
					color: #FF6A19;
					position: relative;
					&::after{
						display: block;
						content: '';
						position: absolute;
						height: 2px;
						width: 40px;
						background: #FF6A19;
						bottom: 0;
						left: 50%;
						transform: translateX(-50%);
					}
				}
			}
		}
	}
}
</style>