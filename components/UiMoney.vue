<!--
 * @Author: ch
 * @Date: 2022-05-04 17:44:29
 * @LastEditors: ch
 * @LastEditTime: 2022-05-10 13:55:12
 * @Description: 金额显示UI组件，金额￥和小数点显示大小不同，以及需不需要小数点
 props
 money 金额 数组或字符串
 float 是否需要展示小数点
 prefix 是否需要把￥前缀单独提取到一个标签 
 suffix 是否需要把小数点后缀单独提取到一个标签
 preSize 前缀字体大小 Strin 记得带单位 浏览器支持的单位都可以 默认12px
 sufSize 小数点字体大小 Strin 记得带单位 浏览器支持的单位都可以 默认12px
 size 整数数字体大小 Strin 记得带单位 浏览器支持的单位都可以 默认14px

-->

<template>
	<div class="ui-money">
		<span v-if="prefix" :style="preStyle" class="ui-money--prefix">￥</span>
		<span :style="style" class="ui-money--price">{{moneyStr}}</span>
		<span v-if="float && suffix" :style="sufStyle" class="ui-money--suffix">.{{moneyArr[1]}}</span>
	</div>
</template>
<script>
export default {
	props : {
		money : {
			type : Number | String,
			default : '0'
		},
		float : {
			type : Boolean,
			default : false
		},
		prefix : {
			type : Boolean,
			default : false
		},
		suffix : {
			type : Boolean,
			default : false
		},
		sufSize : {
			type : String,
			default : '12px'
		},
		preSize : {
			type : String,
			default : '12px'
		},
		size : {
			type : String,
			default : '14px'
		}
	},
	computed : {
		sufStyle(){
			return {
				fontSize : this.sufSize
			}
		},
		preStyle(){
			return {
				fontSize : this.preSize
			}
		},
		style(){
			return {
				fontSize : this.size
			}
		},
		moneyStr (){
			let priceStr = '',
				intNum = this.moneyArr[0],
				floatNum = this.moneyArr[1];
			// 前缀不需要缩小显示
			if(!this.prefix){
				priceStr = `￥${intNum}`;
			}else{
				priceStr = intNum;
			}
			// 后缀不需要缩小显示
			if(!this.suffix){
				priceStr += floatNum ? `.${floatNum}` : '';
			}
			return priceStr;
		},
		moneyArr (){
			let moneyArr = (this.money || '0').toString().split('.');
			// 如果需要补0 则整数时补00
			if(this.float){
				if(!moneyArr[1]){
					moneyArr[1] = '00';
				}else if(moneyArr[1].length < 1){
					moneyArr[1] = `${moneyArr[1]}0`;
				}
			}
			return moneyArr;
		}

	}
}
</script>
<style lang="scss" scoped>
.ui-money{
	font-size: 0;
}
</style>