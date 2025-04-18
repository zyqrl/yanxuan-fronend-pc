/*
 * @Author: ch
 * @Date: 2022-05-04 18:24:03
 * @LastEditors: ch
 * @LastEditTime: 2022-05-07 10:29:22
 * @Description: file content
 */
import {axios} from "../axios";
import { ToAsyncAwait } from "../utils";
import ENV from '../config/env';

const BASE_URL = `${ENV.base_url}/mall/product`;

/**
 * 获取商品，瀑布流
 * @param {*} params 
 */
export const ApiGetGoodsList = (params) => 
	ToAsyncAwait(axios.get(`${BASE_URL}/app/product/page`, {params}));
/**
 * 获取推荐商品
 * @param {*} params 
 */
export const ApiGetRecommendedGoodsList = (params) => 
	ToAsyncAwait(axios.get(`${BASE_URL}/app/product/recommended`, params));
/**
 * 获取商品详情
 * @param {*} params 
 */
export const ApiGetGoodsDetail = (params) => 
	ToAsyncAwait(axios.get(`${BASE_URL}/app/product/${params.id}`));
/**
 * 获取商品sku信息
 * @param {*} productId 
 */
export const ApiGetGoodsSkus = (params) => 
ToAsyncAwait(axios.get(`${BASE_URL}/app/product/sku`,{params}));

/**
 * 获取首页分类导航
 */
export const ApiGetCategoryNav = () => 
ToAsyncAwait(axios.get(`${BASE_URL}/app/product/categoryNavigation`));


/**
 * 获取一级分类列表
 */
export const ApiGetCategoryOneList = () => 
ToAsyncAwait(axios.get(`${BASE_URL}/app/productCategory/levelOne`));


/**
 * 获取二级分类和商品列表
 */
export const ApiGetCategoryTwoAndGoods = (params) => 
ToAsyncAwait(axios.get(`${BASE_URL}/app/productCategory/listCategoryAndProduct/${params.categoryId}`));