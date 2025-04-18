/*
 * @Author: ch
 * @Date: 2022-06-20 11:38:48
 * @LastEditors: ch
 * @LastEditTime: 2022-06-30 11:48:53
 * @Description: file content
 */

import {axiosTk} from "../axiosTk";
import {axios} from "../axios";
import { ToAsyncAwait } from "../utils";
import ENV from '../config/env';

const BASE_URL = `${ENV.base_url}/mall/comment`;

/**
 * 根据商品获取评论列表未
 * @param {*} param0 
 */
export const ApiGetCommentList = (params) => 
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/app/comment`, {
		params,
		headers: {
			notVerifyToken : true
		}
	}));

/**
 * 根据商品获取评论总数
 * @param {*} param0 
 */
export const ApiGetCommentCount = ({productId}) => 
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/app/comment/getAllCommentCountByProductId/${productId}`,{
		headers: {
			notVerifyToken : true
		}
	}));
/**
 * 根据商品获取标签评论总数
 * @param {*} param0 
 */
export const ApiGetCommentTabCount = ({productId}) => 
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/app/comment/listCommentLabel/${productId}`,{
		headers: {
			notVerifyToken : true
		}
	}));
/**
 * 获取订单评论详情
 * @param {*} param0 
 */
export const ApiGetOrderCommentDetail = ({orderId}) => 
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/app/comment/listOrderCommentByOrderId/${orderId}`));
/**
 * 获取商品满意度
 * @param {*} param0 
 */
export const ApiGetProductSatisfaction = ({productId}) => 
	ToAsyncAwait(axios.get(`${BASE_URL}/app/comment/getProductSatisfaction/${productId}`));
/**
 * 获取评论详情
 * @param {*} param0 
 */
export const ApiGetCommentDetail = ({commentId}) => 
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/app/comment/getCommentDetail/${commentId}`, {
		headers: {
			notVerifyToken : true
		}
	}));
/**
 * 新增评论
 * @param {*} param0 
 */
export const ApiPostComment = (data) => 
	ToAsyncAwait(axiosTk.post(`${BASE_URL}/app/comment`, data));


/**
 * 更新评论有用数
 * @param {*} param0 
 */
export const ApiPutCommentUseful = (data) => 
	ToAsyncAwait(axiosTk.put(`${BASE_URL}/app/comment/updateUsefulCount`, data));



