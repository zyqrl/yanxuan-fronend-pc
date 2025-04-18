<!--
 * @Author: ch
 * @Date: 2022-06-24 19:07:45
 * @LastEditors: ch
 * @LastEditTime: 2022-06-30 19:40:36
 * @Description: file content
-->
<template>
	<div class="preview-imgs">
		<ul>
			<li v-for="(i, idx) in list" :key="idx" :class="{'active' : curIndex == idx}" >
				<img :src="i" @click="curIndex = idx"/>
			</li>
		</ul>
		<p v-if="curIndex > -1">
			<img :src="list[curIndex]" @click="curIndex = -1"/>
			<span class="prev" @click="prev" v-if="curIndex > 0"></span>
			<span class="next" @click="next" v-if="curIndex < list.length-1"></span>
		</p>
	</div>
</template>
<script>
export default {
	props : {
		list : {
			type : Array,
			default : () => ([])
		}
	},
	data(){
		return {
			curIndex : -1,
		}
	},
	methods:{
		next(){
			this.curIndex++;
		},
		prev(){
			this.curIndex--;
		}
	}
}
</script>
<style lang="scss" scoped>
.preview-imgs{
	ul{
		display: flex;
	}
	li{
		width: 46px;
		height : 46px;
		border: 1px solid #eee;
		margin-right: 10px;
		padding: 1px;
		cursor: pointer;
		img{
			width: 42px;
			height: 42px;
			object-fit: contain;
		}
		&.active{
			border-color: #FF512B;
			position: relative;
			&::after{
				content: '';
				height: 3px;
				width: 3px;
				bottom: -7px;
				left: 17px;
				display: block;
				position: absolute;
				// transform: rotate(45deg);
				border: 3px solid #FF512B;
				border-left-color: transparent;
				border-right-color: transparent;
				border-bottom-color: transparent;
			}
		}
	}
	p{
		width: 300px;
		margin-top: 20px;
		position: relative;
		border: 1px solid #eee;
		img{
			width: 300px;
			height: 300px;
			object-fit: contain;
			cursor: zoom-out;
		}
		&:hover span{
			display: block;
		}
		span{
			display: none;
			position: absolute;
			width: 40px;
			height: 40px;
			background: rgba(0,0,0, .5);
			top : 130px;
			cursor: pointer;
			&::after,&::before{
				position: absolute;
				display: block;
				content: '';
				background: #fff;
				height: 20px;
				width: 4px;
				border-radius: 4px;
				left: 16px;
				top: 4px;
				transform: rotate(45deg);
			}
			&::after{
				transform: rotate(-45deg);
				top: 16px;
			}
			&.prev{
				left: 10px;
				
			}
			&.next{
				right: 10px;
				&::after{
					left: 20px;
					transform: rotate(45deg);
				}
				&::before{
					left: 20px;
					transform: rotate(-45deg);
				}
			}
		}
	}
}
</style>