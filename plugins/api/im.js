/*
 * @Author: ch
 * @Date: 2022-06-12 14:06:01
 * @LastEditors: ch
 * @LastEditTime: 2022-06-14 21:14:54
 * @Description: file content
 */

import {axiosTk} from "../axiosTk";
import { ToAsyncAwait } from "../utils";
import ENV from '../config/env';
const BASE_URL = `${ENV.base_url}/mall/im`;

/**
 * 获取soket登录秘钥
 */
export const ApiGetSoketTicket = () => ToAsyncAwait(axiosTk.get(`${BASE_URL}/ticket`, {
	params: {
		ticketType: 'CONNECT_TICKET'
	}
}));