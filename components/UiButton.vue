<!--
 * @Author: ch
 * @Date: 2022-05-09 11:31:29
 * @LastEditors: ch
 * @LastEditTime: 2022-05-09 15:24:30
 * @Description: 按钮，每个类型有设置默认高， 宽度默认随内容变化，有特殊大小需要自定义class控制
 props
 type 固定按钮类型 红色面板 red_panel 红色描边red_line 黄色面板yellow_panel 黄色线条yellow_line 黄色渐变yellow_gradual 灰色grey
 radius 是否圆角  true  false
 disabled 是否禁用 true false
-->
<template>
	<button :class="`ui-button ${myClass}`" @click.stop="click">
		<slot></slot>
	</button>
</template>
<script>
export default {
	props : {
		type : {
			type : String,
			default : 'red_panel'
		},
		radius: {
			type : String | Boolean,
			default : false
		},
		disabled : {
			type : Boolean,
			default : false
		}
	},
	computed : {
		myClass(){
			let classStr = this.type ? ` ui-button__${this.type}` : '';
			classStr += this.radius ? ` ui-button__radius` : '';
			classStr += this.disabled ? ' ui-button__disabled' : '';
			return classStr;
		}
	},
	methods : {
		click(...args){
			if(this.disabled){
				return false;
			}
			this.$emit('click', args);
		}
	}
}
</script>
<style lang="scss" scoped>
.ui-button{
	cursor: pointer;
	&__red_panel{
		background: #FF512B;
		color: #fff;
		height: 46px;
		font-size: 18px;
		padding: 0 30px;
		border: none;
		font-weight: bold;
	}
	&__red_line{
		border:1px solid #FF512B;
		height: 44px;
		font-size: 18px;
		padding: 0 30px;
		color: #FF512B;
	}
	&__yellow_line{
		border:1px solid #FF512B;
		height: 28px;
		padding: 0 10px;
		color: #FF512B;
		background: #FFFFFF;;
	}
	&__yellow_panel{
		background:#FF512B;
		height: 30px;
		padding: 0 10px;
		border: none;
		color: #fff;
	}
	&__yellow_gradual{
		background: linear-gradient(90deg, #FFA25A 0%, #FF7F39 100%);
		height: 30px;
		border: none;
		color: #fff;
		padding: 0 10px;
	}
	&__grey{
		background:#f5f5f5;
		border: 1px solid #ccc;
		height: 28px;
		padding: 0 10px;
	}
	&__radius{
		border-radius: 4px;
	}
	&__disabled{
		opacity: .8;
		cursor: not-allowed;
	}
}
</style>