/*
 * @Author: ch
 * @Date: 2022-05-04 18:24:03
 * @LastEditors: ch
 * @LastEditTime: 2022-05-07 10:29:08
 * @Description: file content
 */
import {axiosTk} from "../axiosTk";
import { ToAsyncAwait } from "../utils";
import ENV from '../config/env';

const BASE_URL = `${ENV.base_url}/mall/product`;


/**
 * 设置购物车数量
 * @param {id,number} data 
 */
export const ApiPutCartNum = (data) => 
	ToAsyncAwait(axiosTk.put(`${BASE_URL}/shoppingCart/number`, data));

/**
 * 往购物车中添加商品
 * @param {prodcutId, productSkuId, number} data 
 */
export const ApiPutAddCart = (data) =>
	ToAsyncAwait(axiosTk.put(`${BASE_URL}/shoppingCart/increase`, data));
/**
 * 删除购物车中的商品
 * @param {idList} data 
 */
export const ApiDeleteCartGoods = (data) => 
	ToAsyncAwait(axiosTk.delete(`${BASE_URL}/shoppingCart?idList=${data.idList}`, data));
/**
 * 获取购物车列表
 */
export const ApiGetCartList = () => 
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/shoppingCart`));
