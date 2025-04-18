/*
 * @Author: ch
 * @Date: 2022-05-26 11:49:16
 * @LastEditors: ch
 * @LastEditTime: 2022-05-26 17:00:06
 * @Description: file content
 */

// 订单状态
export const ORDER_STATUS = {
	// 待支付
	AWAIT_PAY: 1
}
export const ORDER_TYPE = {
	//(1, "普通订单"),
	NORMAL: 1,
	//(2, "免费订单"),
	FREE: 2, 
	//(3, "秒杀订单"),
	SECKILL: 3, 
	//(4, "虚拟商品订单"),
    VIRTUAL : 4 
}