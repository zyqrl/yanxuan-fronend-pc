/*
 * @Author: ch
 * @Date: 2022-05-17 18:17:00
 * @LastEditors: ch
 * @LastEditTime: 2022-06-27 16:20:31
 * @Description: file content
 */
/**
 * 全局常量，请避免使用魔法数字
 */

// 用户凭证名
const TOKEN_KEY = "msbPcToken";
const UUID_KEY = "msbPcUuid";

// 订单状态
const ORDER_STATUS = {
  WAIT_PAY: 1, // 待付款
  WAIT_SEND: 3, //待发货
  WAIT_RECEIVE: 4, // 待收货
  WAIT_COMMENT: 5,//评价
  FINISH: 6,
  FINISH_FOLLOW_COMMENT : 7
};

// 性别
const SEX_TYPE = {
  MALE: 1, // 男
  FEMALE: 2, // 女
  UNKNOW: 3, // 未知
};

// 热门分类类级
const CATEGROY_LEVEL = {
  ONE: 1,
  TWO: 2,
};

// 秒杀活动状态
const SECKILL_STATUS = {
  NOT_START: 1, // 未开始
  GOING: 2, // 进行中
};
const COMMENT = {
  TYPE: {
      // 评价
    COMMENT: 1,
    // 追评
    FOLLOW_COMMENT: 2,
    // 回复
    ANSWER: 3,
  },
  RATE_LEVEL: {
    1 : '很不满意',
    2 : '不太满意',
    3 : '一般',
    4 : '满意',
    5 : '非常满意'
  }
  
}

export { TOKEN_KEY, UUID_KEY, ORDER_STATUS, SEX_TYPE, CATEGROY_LEVEL, SECKILL_STATUS, COMMENT };
