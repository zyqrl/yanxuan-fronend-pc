/*
 * @Author: ch
 * @Date: 2022-05-31 11:05:08
 * @LastEditors: ch
 * @LastEditTime: 2022-05-31 17:23:02
 * @Description: file content
 */

 
const AD_PLATFORM = {
	PC: 2,
	MOBILE : 1
}
const AD_LOCATION = {
	// 首页轮播图
	HOME_BANNER: 1,
	// 首页精装区
	HOME_HARDCOVER: 2,
	// 分类banner
	CATEGORY_BANNER : 3
	
}

const AD_JUMP_TYPE = {
	// 商品详情
	GOODS: 1,
	// 分类
	CATEGORY: 2,
	// 链接
	LINK: 3,
	// 不跳转
	NO_JUMP : 4
	
}
export {
	// 广告所属平台
	AD_PLATFORM,
	// 广告位置
	AD_LOCATION,
	// 广告跳转类型
	AD_JUMP_TYPE
}