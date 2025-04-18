

/*
 * @Author: ch
 * @Date: 2022-05-04 18:17:25
 * @LastEditors: ch
 * @LastEditTime: 2022-06-28 09:56:23
 * @Description: file content
 */
import {axiosTk} from "../axiosTk";
import {ToAsyncAwait} from "@/plugins/utils";
import ENV from '../config/env';

const BASE_URL = `${ENV.base_url}/mall/trade`;

const APPID = 'wx0643970a8e86d028';

/**
 * 获取订单
 * @param {*} params 
 */
export const ApiGetOrderList = (params) => 
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/app/tradeOrder/page`, {params}));
/**
 * 获取立即购买预订单
 * @param {*} data 
 */
export const ApiGetBeforeOrder = (params) =>
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/app/tradeOrder/buyAdvanceOrder`, {params}));

/**
 * 获取购物车预订单
 * @param {*} data 
 */
export const ApiGetBeforeCartOrder = (params) =>
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/app/tradeOrder/cartAdvanceOrder`, {params}));

/**
 * 订单详情
 * @param {*} id 
 */
export const  ApiGetOrderDetail = (id) =>
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/app/tradeOrder/${id}`));

/**
 * 订单商品详情信息
 * @param {*} orderProductId 
 */
export const  ApiGetOrderProductDetail = ({orderProductId}) =>
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/app/tradeOrder/product/${orderProductId}`));

/**
 * 获取待评价订单详请列表
 */
export const ApiGetCommentOrderDetailList = (params) => 
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/app/tradeOrder/listOrderProductWaitComment`,{params}))

/**
* 提交订单
* @param {*} data 
*/
export const ApiGetOrderPaySatus = ({orderId}) => 
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/app/tradeOrder/payResult/${orderId}`));
   
	
/**
 * 获取物流信息
 * @param {*} orderId 
 */
export const  ApiGetOrderLogistics = ({orderId}) =>
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/app/tradeOrder/logistics/${orderId}`));	

	/**
 * 获取物流列表
 * @param {*} params
 */
export const ApiGetOrderLogisticsList = (params) =>
  ToAsyncAwait(axiosTk.get(`${BASE_URL}/app/tradeOrder/listReceiveOrder`, { params }));

/**
 * 确认收货
 * @param {*} orderId 
 */
export const ApiPutOrderReceive = (data) =>
  ToAsyncAwait(axiosTk.put(`${BASE_URL}/app/tradeOrder/receive`, data));	
/**
 * 提交订单
 * @param {*} data 
 */
export const ApiPostSubmitOrder = (data) => 
	ToAsyncAwait(axiosTk.post(`${BASE_URL}/app/tradeOrder/submitOrder`, data));

/**
 * 取消订单
 * @param {*} data 
 */
export const ApiPutCancelOrder = (data) => 
	ToAsyncAwait(axiosTk.put(`${BASE_URL}/app/tradeOrder/cancel`, data));


/**
 * 获取订单统计数据
 */
export const ApiGetOrderStatistics = () => 
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/app/tradeOrder/statistics`))








/**
 * 申请售后
 * @param {*} data 
 */
export const ApiPostApplySaleAfter = (data) => 
	ToAsyncAwait(axiosTk.post(`${BASE_URL}/app/refundOrder/applyRefund`, data));
		
/**
 * 修改售后申请
 * @param {*} data 
 */
export const ApiPostEditSaleAfter = (data) => 
ToAsyncAwait(axiosTk.put(`${BASE_URL}/app/refundOrder/updateRefund`, data));

/**
 * 撤销售后申请
 * @param {*} data 
 */
export const ApiPostCancelSaleAfter = (data) => 
	ToAsyncAwait(axiosTk.put(`${BASE_URL}/app/refundOrder/cancelRefund`, data));
	
/**
 * 售后订单列表
 * @param {*} data 
 */
export const ApiGetSaleAfterOrderList = (params) => 
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/app/refundOrder/page`, params));
/**
 * 售后订单详情
 * @param {*} data 
 */
export const ApiGetSaleAfterOrderDetail = (params) => 
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/app/refundOrder/refundInfo`, params));
/**
 * 售后物流公司
 * @param {*} data 
 */
export const ApiGetLogisticsCompanylist = (params) => 
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/app/refundOrder/logisticsCompany`));
/**
 * 售后提交物流信息
 * @param {*} data 
 */
export const ApiPutLogisticsInfo = (data) => 
	ToAsyncAwait(axiosTk.put(`${BASE_URL}/app/refundOrder/completeRefund`, data));
/**
 * 退款订单统计
 */
 export const ApiGetRefundStatistisc= (data) => 
 ToAsyncAwait(axiosTk.put(`${BASE_URL}/app/refundOrder/statistics`, data));




/**
 * 微信h5支付，获取支付URL
 * @param {*} data 
 */
export const ApiPostWxH5Pay = (data) => 
	ToAsyncAwait(axiosTk.post(`${BASE_URL}/pay/wxPay/h5`, data));
