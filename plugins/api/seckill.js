/*
 * @Author: ch
 * @Date: 2022-05-04 18:24:03
 * @LastEditors: ch
 * @LastEditTime: 2022-05-07 10:30:28
 * @Description: file content
 */
import {axios} from "../axios";
import { ToAsyncAwait } from "../utils";
import ENV from '../config/env';

const BASE_URL = `${ENV.base_url}/mall/marketing`;

 export const ApiGetHomeSeckill = () => 
	ToAsyncAwait(axios.get(`${BASE_URL}/app/activity/home`));

/**
 * 获取当天秒杀时段
 */
 export const ApiGetSeckillTimes = () => 
	ToAsyncAwait(axios.get(`${BASE_URL}/app/activity/time`));
/**
 * 获取当天秒杀时段
 */
 export const ApiGetSeckillGoods = (params) => 
	ToAsyncAwait(axios.get(`${BASE_URL}/app/activity/product`, { params }));

/**
 * 获取当前服务器时间
 */
 export const ApiGetCurrentTime = () => 
	ToAsyncAwait(axios.get(`${BASE_URL}/app/activity/timestamp`));

