/*
 * @Author: ch
 * @Date: 2022-05-04 18:24:03
 * @LastEditors: ch
 * @LastEditTime: 2022-05-07 10:28:22
 * @Description: file content
 */
import {axiosTk} from "../axiosTk";
import { ToAsyncAwait } from "../utils";
import ENV from '../config/env';

const BASE_URL = `${ENV.base_url}/mall/base`;


/**
 * 获取收货地址
 */
export const ApiGetAddress = () =>
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/receiveAddress`));
/**
 * 新增收货地址
 */
export const ApiPostAddress = (data) =>
	ToAsyncAwait(axiosTk.post(`${BASE_URL}/receiveAddress`, data));
/**
 * 收货地址修改
 */
export const ApiPutAddress = (data) =>
	ToAsyncAwait(axiosTk.put(`${BASE_URL}/receiveAddress`, data));
/**
 * 收货删除
 */
export const ApiDeleteAddress = (data) =>
	ToAsyncAwait(axiosTk.delete(`${BASE_URL}/receiveAddress?idList=${data.idList}`));