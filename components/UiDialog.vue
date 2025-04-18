<!--
 * @Author: ch
 * @Date: 2022-05-09 20:00:57
 * @LastEditors: ch
 * @LastEditTime: 2022-05-09 20:04:59
 * @Description: file content
-->
<template>
	<el-dialog :visible="visible" @close="close">
		<slot></slot>
	</el-dialog>
</template>
<script>
export default {
	props: {
		visible : {
			type : Boolean,
			default : false
		}
	},
	methods:{
		close(...args){
			this.$emit('close', args)
		}
	}
}
</script>