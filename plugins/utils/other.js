/*
 * @Author: ch
 * @Date: 2022-05-04 21:57:26
 * @LastEditors: ch
 * @LastEditTime: 2022-06-12 14:40:19
 * @Description: file content
 */


import {
	toAsyncAwait as ToAsyncAwait,
	isPhone as IsPhone,
	formatDate as FormatDate,
	formatJsonSearch as FormatJsonSearch,
	creatUuid as CreateUUID
} from "js-util-all"

/** 防抖函数
 * 首次运行时把定时器赋值给一个变量， 第二次执行时，
 * 如果间隔没超过定时器设定的时间则会清除掉定时器，
 * 重新设定定时器， 依次反复， 当我们停止下来时，
 * 没有执行清除定时器， 超过一定时间后触发回调函数。
*/
const Debounce = (fn, delay) => {
	let timer
	return function () {
		const that = this
		const _args = arguments // 存一下传入的参数
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(function () {
			fn.apply(that, _args)
		}, delay)
	}
}


// 工具类的文件需要把文件提供的工具类统一放最下方做一个统一输出
export {
	// async await 标识结果处理
	ToAsyncAwait,
	// 判断是否为手机号
	IsPhone,
	// 时间格式化
	FormatDate,
	// 创建UUID
	CreateUUID,
	// 请求Search参数转化为JSON格式
	FormatJsonSearch,
	// 防抖函数
	Debounce
}