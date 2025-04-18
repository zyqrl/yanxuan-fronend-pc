/*
 * @Author: ch
 * @Date: 2022-05-04 18:24:03
 * @LastEditors: ch
 * @LastEditTime: 2022-05-07 10:30:17
 * @Description: file content
 */
import {axiosTk} from "../axiosTk";
import { ToAsyncAwait } from "../utils";
import ENV from '../config/env';

const BASE_URL = `${ENV.base_url}/oss/oss`;

/**
 * 获取OOS信息
 * @param {*} data 
 */
 export const ApiPostGetOssConfig = (data) => 
	ToAsyncAwait(axiosTk.post(`${BASE_URL}/generateOssSignature`, data));

