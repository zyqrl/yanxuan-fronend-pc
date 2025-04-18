/*
 * @Author: ch
 * @Date: 2022-05-04 18:24:03
 * @LastEditors: ch
 * @LastEditTime: 2022-05-07 10:27:01
 * @Description: file content
 */
import {axiosTk} from "../axiosTk";
import {axios} from "../axios";
import { ToAsyncAwait } from "../utils";
import ENV from '../config/env';

const BASE_URL = `${ENV.base_url}/uc`;

/**
 * 获取当前登录用户信息
 */
export const ApiGetCurrentUser = () => 
	ToAsyncAwait(axiosTk.get(`${BASE_URL}/user/current`));

/**
 * 修改用户信息
 * @param {*} data 
 */
export const ApiPutUser = (data) => 
	ToAsyncAwait(axiosTk.put(`${BASE_URL}/user/`, data));


/**
 * 登录
 * @param {*} data 
 */
export const ApiPostLogin = (data) => ToAsyncAwait(axios.post(`${BASE_URL}/user/login`, data));
/**
 * 退出登录
 */
 export const ApiPostLogout = () => ToAsyncAwait(axiosTk.get(`${BASE_URL}/user/logout`));
/**
 * 获取手机验证码
 * @param {*} params 
 */
export const ApiGetCode = (params) => ToAsyncAwait(axios.get(`${BASE_URL}/user/login/verificationCode`, { params }));

