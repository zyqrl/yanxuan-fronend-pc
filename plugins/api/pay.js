/*
 * @Author: ch
 * @Date: 2022-05-08 00:44:22
 * @LastEditors: ch
 * @LastEditTime: 2022-06-29 14:51:00
 * @Description: file content
 */


import {axiosTk} from "../axiosTk";
import {ToAsyncAwait} from "@/plugins/utils";
import ENV from '../config/env';

const BASE_URL = `${ENV.base_url}/mall/trade`;
/**
 * 获取微信支付二维码
 * @param {*} data 
 */
export const ApiPostWxPayCdoeImg = (data) => 
	ToAsyncAwait(axiosTk.post(`${BASE_URL}/payCenter/wxPay/nativeData`, data));
/**
 * 获取支付宝支付二维码
 * @param {*} data 
 */
export const ApiPostAliPayCdoeImg = (data) => 
	ToAsyncAwait(axiosTk.post(`${BASE_URL}/payCenter/aliPay/qr`, data));