/*
 * @Author: ch
 * @Date: 2022-05-31 11:17:38
 * @LastEditors: ch
 * @LastEditTime: 2022-06-01 15:53:53
 * @Description: file content
 */

import {ToAsyncAwait} from '@/plugins/utils';
import { AD_PLATFORM } from '../dicts/ad';
import {axios} from "../axios";
import ENV from '../config/env';

const BASE_URL = `${ENV.base_url}/mall/marketing`;

// 获取广告列表
export const ApiGetAdList = (params) => ToAsyncAwait(axios.get(`${BASE_URL}/app/advertisement`, {
	params: {
		platform : AD_PLATFORM.PC,
		...params
	}
}))