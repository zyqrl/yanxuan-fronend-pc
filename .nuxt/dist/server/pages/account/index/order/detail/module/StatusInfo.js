exports.ids = [28,2,7];
exports.modules = {

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ApiGetOrderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ApiGetBeforeOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiGetBeforeCartOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ApiGetOrderDetail; });
/* unused harmony export ApiGetOrderProductDetail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ApiGetCommentOrderDetailList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ApiGetOrderPaySatus; });
/* unused harmony export ApiGetOrderLogistics */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ApiGetOrderLogisticsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ApiPutOrderReceive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ApiPostSubmitOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ApiPutCancelOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ApiGetOrderStatistics; });
/* unused harmony export ApiPostApplySaleAfter */
/* unused harmony export ApiPostEditSaleAfter */
/* unused harmony export ApiPostCancelSaleAfter */
/* unused harmony export ApiGetSaleAfterOrderList */
/* unused harmony export ApiGetSaleAfterOrderDetail */
/* unused harmony export ApiGetLogisticsCompanylist */
/* unused harmony export ApiPutLogisticsInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ApiGetRefundStatistisc; });
/* unused harmony export ApiPostWxH5Pay */
/* harmony import */ var _axiosTk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _plugins_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/*
 * @Author: ch
 * @Date: 2022-05-04 18:17:25
 * @LastEditors: ch
 * @LastEditTime: 2022-06-28 09:56:23
 * @Description: file content
 */



const BASE_URL = `${_config_env__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].base_url}/mall/trade`;
const APPID = 'wx0643970a8e86d028';

/**
 * 获取订单
 * @param {*} params 
 */
const ApiGetOrderList = params => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].get(`${BASE_URL}/app/tradeOrder/page`, {
  params
}));
/**
 * 获取立即购买预订单
 * @param {*} data 
 */
const ApiGetBeforeOrder = params => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].get(`${BASE_URL}/app/tradeOrder/buyAdvanceOrder`, {
  params
}));

/**
 * 获取购物车预订单
 * @param {*} data 
 */
const ApiGetBeforeCartOrder = params => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].get(`${BASE_URL}/app/tradeOrder/cartAdvanceOrder`, {
  params
}));

/**
 * 订单详情
 * @param {*} id 
 */
const ApiGetOrderDetail = id => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].get(`${BASE_URL}/app/tradeOrder/${id}`));

/**
 * 订单商品详情信息
 * @param {*} orderProductId 
 */
const ApiGetOrderProductDetail = ({
  orderProductId
}) => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].get(`${BASE_URL}/app/tradeOrder/product/${orderProductId}`));

/**
 * 获取待评价订单详请列表
 */
const ApiGetCommentOrderDetailList = params => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].get(`${BASE_URL}/app/tradeOrder/listOrderProductWaitComment`, {
  params
}));

/**
* 提交订单
* @param {*} data 
*/
const ApiGetOrderPaySatus = ({
  orderId
}) => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].get(`${BASE_URL}/app/tradeOrder/payResult/${orderId}`));

/**
 * 获取物流信息
 * @param {*} orderId 
 */
const ApiGetOrderLogistics = ({
  orderId
}) => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].get(`${BASE_URL}/app/tradeOrder/logistics/${orderId}`));

/**
* 获取物流列表
* @param {*} params
*/
const ApiGetOrderLogisticsList = params => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].get(`${BASE_URL}/app/tradeOrder/listReceiveOrder`, {
  params
}));

/**
 * 确认收货
 * @param {*} orderId 
 */
const ApiPutOrderReceive = data => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].put(`${BASE_URL}/app/tradeOrder/receive`, data));
/**
 * 提交订单
 * @param {*} data 
 */
const ApiPostSubmitOrder = data => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].post(`${BASE_URL}/app/tradeOrder/submitOrder`, data));

/**
 * 取消订单
 * @param {*} data 
 */
const ApiPutCancelOrder = data => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].put(`${BASE_URL}/app/tradeOrder/cancel`, data));

/**
 * 获取订单统计数据
 */
const ApiGetOrderStatistics = () => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].get(`${BASE_URL}/app/tradeOrder/statistics`));

/**
 * 申请售后
 * @param {*} data 
 */
const ApiPostApplySaleAfter = data => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].post(`${BASE_URL}/app/refundOrder/applyRefund`, data));

/**
 * 修改售后申请
 * @param {*} data 
 */
const ApiPostEditSaleAfter = data => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].put(`${BASE_URL}/app/refundOrder/updateRefund`, data));

/**
 * 撤销售后申请
 * @param {*} data 
 */
const ApiPostCancelSaleAfter = data => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].put(`${BASE_URL}/app/refundOrder/cancelRefund`, data));

/**
 * 售后订单列表
 * @param {*} data 
 */
const ApiGetSaleAfterOrderList = params => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].get(`${BASE_URL}/app/refundOrder/page`, params));
/**
 * 售后订单详情
 * @param {*} data 
 */
const ApiGetSaleAfterOrderDetail = params => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].get(`${BASE_URL}/app/refundOrder/refundInfo`, params));
/**
 * 售后物流公司
 * @param {*} data 
 */
const ApiGetLogisticsCompanylist = params => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].get(`${BASE_URL}/app/refundOrder/logisticsCompany`));
/**
 * 售后提交物流信息
 * @param {*} data 
 */
const ApiPutLogisticsInfo = data => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].put(`${BASE_URL}/app/refundOrder/completeRefund`, data));
/**
 * 退款订单统计
 */
const ApiGetRefundStatistisc = data => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].put(`${BASE_URL}/app/refundOrder/statistics`, data));

/**
 * 微信h5支付，获取支付URL
 * @param {*} data 
 */
const ApiPostWxH5Pay = data => Object(_plugins_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].post(`${BASE_URL}/pay/wxPay/h5`, data));

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(203);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4a65f6b9", content, true, context)
};

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BsPay.vue?vue&type=template&id=1b6e7a16&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{staticClass:"box",attrs:{"title":_vm.title,"width":"380px","center":"","visible":_vm.myVisible,"modal":false},on:{"update:visible":function($event){_vm.myVisible=$event},"open":_vm.open,"close":_vm.close}},[(!_vm.myPayType)?_c('div',{staticClass:"pay-type"},[_c('el-radio-group',{model:{value:(_vm.myPayType),callback:function ($$v) {_vm.myPayType=$$v},expression:"myPayType"}},[_c('el-radio',{staticClass:"pay-type--item",attrs:{"label":"wx"}},[_c('img',{staticClass:"pay-type--wx",attrs:{"src":__webpack_require__(200)}})]),_vm._v(" "),_c('el-radio',{staticClass:"pay-type--item",attrs:{"label":"ali"}},[_c('img',{staticClass:"pay-type--ali",attrs:{"src":__webpack_require__(201)}})])],1)],1):_c('div',{staticClass:"pay"},[_c('span',{staticClass:"pay--timer"},[_vm._v(_vm._s(_vm.timerTxt))]),_vm._v(" "),_c('UiMoney',{staticClass:"money",attrs:{"sufSize":"14px","preSize":"14px","size":"20px","float":"","suffix":"","prefix":"","money":_vm.orderInfo.payAmount}}),_vm._v(" "),_c('div',{staticClass:"pay--code"},[(_vm.imgUrl)?_c('img',{attrs:{"src":_vm.imgUrl}}):_c('span',[_vm._v(_vm._s(_vm.imgTip))])]),_vm._v(" "),_c('p',{staticClass:"pay--tips"},[_vm._v("如支付后没有自动跳转，请点击 "),_c('span',{staticClass:"pay--finish",on:{"click":_vm.finish}},[_vm._v("完成付款")])]),_vm._v(" "),_c('UiButton',{staticClass:"pay--btn",attrs:{"type":"yellow_gradual"},on:{"click":_vm.back}},[_vm._v("其他支付方式")])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BsPay.vue?vue&type=template&id=1b6e7a16&scoped=true&

// EXTERNAL MODULE: ./plugins/axiosTk.js
var axiosTk = __webpack_require__(9);

// EXTERNAL MODULE: ./plugins/utils/index.js + 1 modules
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./plugins/config/env.js
var env = __webpack_require__(8);

// CONCATENATED MODULE: ./plugins/api/pay.js
/*
 * @Author: ch
 * @Date: 2022-05-08 00:44:22
 * @LastEditors: ch
 * @LastEditTime: 2022-06-29 14:51:00
 * @Description: file content
 */




const BASE_URL = `${env["a" /* default */].base_url}/mall/trade`;
/**
 * 获取微信支付二维码
 * @param {*} data 
 */
const ApiPostWxPayCdoeImg = data => Object(utils["f" /* ToAsyncAwait */])(axiosTk["a" /* axiosTk */].post(`${BASE_URL}/payCenter/wxPay/nativeData`, data));
/**
 * 获取支付宝支付二维码
 * @param {*} data 
 */
const ApiPostAliPayCdoeImg = data => Object(utils["f" /* ToAsyncAwait */])(axiosTk["a" /* axiosTk */].post(`${BASE_URL}/payCenter/aliPay/qr`, data));
// EXTERNAL MODULE: ./plugins/api/order.js
var order = __webpack_require__(166);

// EXTERNAL MODULE: ./components/UiMoney.vue + 4 modules
var UiMoney = __webpack_require__(76);

// EXTERNAL MODULE: ./components/UiButton.vue + 4 modules
var UiButton = __webpack_require__(15);

// EXTERNAL MODULE: external "qrcode"
var external_qrcode_ = __webpack_require__(164);
var external_qrcode_default = /*#__PURE__*/__webpack_require__.n(external_qrcode_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BsPay.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var BsPayvue_type_script_lang_js_ = ({
  components: {
    UiMoney: UiMoney["default"],
    UiButton: UiButton["default"]
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    orderId: {
      type: Number | String,
      default: ''
    },
    payType: {
      type: String | null,
      require: true
    }
  },
  data() {
    return {
      orderInfo: {},
      imgUrl: '',
      imgTip: '二维码获取中',
      timerTxt: '',
      startSecondNum: 0,
      timerStop: null,
      myPayType: null,
      payUUID: null
    };
  },
  watch: {
    myPayType(val) {
      // 单选框change事件无效，使用watch代替
      if (val) {
        this.getQrCode();
      }
    }
  },
  computed: {
    myVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit('update:visible', val);
      }
    },
    title() {
      let str = '请选择支付方式';
      if (this.myPayType === 'wx') {
        str = '打开微信扫描付款';
      } else if (this.myPayType === 'ali') {
        str = '打开支付宝扫描付款';
      }
      ;
      return str;
    }
  },
  methods: {
    open() {
      this.getOrderInfo();
      this.myPayType = this.payType;
      if (this.myPayType) {
        this.getQrCode();
      }
    },
    /**
     * 获取订单最新信息
     */
    async getOrderInfo() {
      const {
        error,
        result
      } = await Object(order["d" /* ApiGetOrderDetail */])(this.orderId);
      if (error) {
        this.$message.warning(error.message);
        return false;
      }
      this.orderInfo = result;
      if (this.orderInfo.orderStatus === 1) {
        // 待支付 开始倒计时
        if (this.timerStop) {
          clearInterval(this.timerStop);
        }
        this.calcTimerStartSecondNum();
        this.timer();
      }
    },
    getQrCode() {
      this.payUUID = Object(utils["a" /* CreateUUID */])();
      if (this.myPayType == 'wx') {
        this.getWxCodeImg(this.payUUID);
      } else if (this.myPayType === 'ali') {
        this.getAliCodeImg(this.payUUID);
      }
    },
    /**
     * 支付宝二维码
     */
    async getAliCodeImg(uid) {
      const {
        error,
        result
      } = await ApiPostAliPayCdoeImg({
        orderId: this.orderId
      });
      if (this.payUUID !== uid) {
        return false;
      }
      if (error) {
        this.imgTip = error.message;
        return false;
      }
      external_qrcode_default.a.toDataURL(result.payDataInfo.qrCodeData, {
        width: 200
      }, (err, url) => {
        this.imgUrl = url;
      });
    },
    /**
     * 微信二维码
     */
    async getWxCodeImg(uid) {
      const {
        error,
        result
      } = await ApiPostWxPayCdoeImg({
        orderId: this.orderId
      });
      if (this.payUUID !== uid) {
        return false;
      }
      if (error) {
        this.imgTip = error.message;
        return false;
      }
      external_qrcode_default.a.toDataURL(result.payDataInfo.codeUrlData, {
        width: 200
      }, (err, url) => {
        this.imgUrl = url;
      });
    },
    /**
     * 计算倒计时开始秒数
     */
    calcTimerStartSecondNum() {
      let expireTime = new Date(this.orderInfo.expireTime.replace(/-/g, '/')).getTime(),
        curTime = new Date(this.orderInfo.serverTime.replace(/-/g, '/')).getTime(),
        second = Math.floor((expireTime - curTime) / 1000);
      this.startSecondNum = second > 0 ? second : 0;
      this.timerStop = setInterval(() => {
        this.timer();
      }, 1000);
    },
    /**
     * 待付款的倒计时
     */
    timer() {
      if (this.startSecondNum == 0) {
        this.close();
        return;
      }
      this.startSecondNum--;
      let minute = parseInt(this.startSecondNum / 60);
      let second = parseInt(this.startSecondNum % 60);
      this.timerTxt = `剩余${minute > 0 ? `${minute}分` : ''} ${second}秒`;
    },
    close() {
      clearInterval(this.timerStop);
      this.timerStop = null;
      this.myPayType = this.payType;
      this.$emit('cancel');
    },
    finish() {
      this.myVisible = false;
      this.$emit('finish');
    },
    back() {
      this.myPayType = null;
      this.imgUrl = null;
      this.imgTip = '二维码获取中';
    }
  }
});
// CONCATENATED MODULE: ./components/BsPay.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BsPayvue_type_script_lang_js_ = (BsPayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BsPay.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(202)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BsPayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1b6e7a16",
  "57d396d7"
  
)

/* harmony default export */ var BsPay = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UiMoney: __webpack_require__(76).default,UiButton: __webpack_require__(15).default})


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(215);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("488202a0", content, true, context)
};

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wx.5493ac2.png";

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/zfb.a438bcd.png";

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsPay_vue_vue_type_style_index_0_id_1b6e7a16_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(179);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsPay_vue_vue_type_style_index_0_id_1b6e7a16_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsPay_vue_vue_type_style_index_0_id_1b6e7a16_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsPay_vue_vue_type_style_index_0_id_1b6e7a16_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsPay_vue_vue_type_style_index_0_id_1b6e7a16_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-1b6e7a16]{display:flex}.flex-inline[data-v-1b6e7a16]{display:inline-flex}.flex-inline[data-v-1b6e7a16]:after,.flex-inline[data-v-1b6e7a16]:before,.flex[data-v-1b6e7a16]:after,.flex[data-v-1b6e7a16]:before{display:none}.flex-left[data-v-1b6e7a16]{justify-content:flex-start}.flex-center[data-v-1b6e7a16]{justify-content:center}.flex-right[data-v-1b6e7a16]{justify-content:flex-end}.flex-between[data-v-1b6e7a16]{justify-content:space-between}.flex-around[data-v-1b6e7a16]{justify-content:space-around}.flex-stretch[data-v-1b6e7a16]{align-items:stretch}.flex-top[data-v-1b6e7a16]{align-items:flex-start}.flex-middle[data-v-1b6e7a16]{align-items:center}.flex-bottom[data-v-1b6e7a16]{align-items:flex-end}.flex-baseline[data-v-1b6e7a16]{align-items:baseline}.flex-row[data-v-1b6e7a16]{flex-direction:row}.flex-row-reverse[data-v-1b6e7a16]{flex-direction:row-reverse}.flex-column[data-v-1b6e7a16]{flex-direction:column}.flex-column-reverse[data-v-1b6e7a16]{flex-direction:column-reverse}.flex-nowrap[data-v-1b6e7a16]{flex-wrap:nowrap}.flex-wrap[data-v-1b6e7a16]{flex-wrap:wrap}.flex-wrap-reverse[data-v-1b6e7a16]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-1b6e7a16]{align-content:stretch}.flex-wrap-top[data-v-1b6e7a16]{align-content:flex-start}.flex-wrap-middle[data-v-1b6e7a16]{align-content:center}.flex-wrap-bottom[data-v-1b6e7a16]{align-content:flex-end}.flex-wrap-between[data-v-1b6e7a16]{align-content:space-between}.flex-wrap-around[data-v-1b6e7a16]{align-content:space-around}.flex-first[data-v-1b6e7a16]{order:-1}.flex-last[data-v-1b6e7a16]{order:99}.flex-none[data-v-1b6e7a16]{flex:none}.flex-auto[data-v-1b6e7a16]{flex:auto}.flex-1[data-v-1b6e7a16]{flex:1}.hover-text[data-v-1b6e7a16]:hover{color:#ff875b}.expend-click[data-v-1b6e7a16]{position:relative}.expend-click[data-v-1b6e7a16]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-1b6e7a16],[data-v-1b6e7a16]:after,[data-v-1b6e7a16]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-1b6e7a16],dd[data-v-1b6e7a16],dl[data-v-1b6e7a16],figure[data-v-1b6e7a16],form[data-v-1b6e7a16],h1[data-v-1b6e7a16],h2[data-v-1b6e7a16],h3[data-v-1b6e7a16],h4[data-v-1b6e7a16],h5[data-v-1b6e7a16],ol[data-v-1b6e7a16],p[data-v-1b6e7a16],ul[data-v-1b6e7a16]{margin:0;font-size:14px}button[data-v-1b6e7a16],input[data-v-1b6e7a16],ol[data-v-1b6e7a16],ul[data-v-1b6e7a16]{padding:0}li[data-v-1b6e7a16],ol[data-v-1b6e7a16],ul[data-v-1b6e7a16]{list-style:none;list-style-type:none}h1[data-v-1b6e7a16],h2[data-v-1b6e7a16],h3[data-v-1b6e7a16],h4[data-v-1b6e7a16],h5[data-v-1b6e7a16]{font-size:100%}input[data-v-1b6e7a16]{border:0;margin:0}img[data-v-1b6e7a16]{width:100%}a[data-v-1b6e7a16],button[data-v-1b6e7a16],img[data-v-1b6e7a16],input[data-v-1b6e7a16],optgroup[data-v-1b6e7a16],select[data-v-1b6e7a16],textarea[data-v-1b6e7a16]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-1b6e7a16],img[data-v-1b6e7a16]{-webkit-touch-callout:none;border:0}body[data-v-1b6e7a16],html[data-v-1b6e7a16]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-1b6e7a16],img[data-v-1b6e7a16],input[data-v-1b6e7a16],textarea[data-v-1b6e7a16]{vertical-align:middle;outline:none}body[data-v-1b6e7a16]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-1b6e7a16]{border-collapse:collapse;border-spacing:0}a[data-v-1b6e7a16],table[data-v-1b6e7a16]{color:#333}a[data-v-1b6e7a16],a[data-v-1b6e7a16]:hover{text-decoration:none}a[data-v-1b6e7a16]:hover{color:#ff512b}.scrollbar-self[data-v-1b6e7a16]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-1b6e7a16]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-1b6e7a16]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.box[data-v-1b6e7a16]{background:rgba(0,0,0,.5)}.pay-type[data-v-1b6e7a16]{width:270px;padding:0 30px}.pay-type--item[data-v-1b6e7a16]{width:270px;height:56px;display:flex;align-items:center;border:1px solid #ccc;padding-left:55px;margin-bottom:20px}.pay-type--wx[data-v-1b6e7a16]{width:108px}.pay-type--ali[data-v-1b6e7a16]{width:78px}.pay[data-v-1b6e7a16]{text-align:center}.pay--code[data-v-1b6e7a16]{width:160px;height:160px;margin:15px auto 20px;position:relative;overflow:hidden}.pay--code img[data-v-1b6e7a16]{width:200px;position:absolute;left:-20px;top:-20px}.pay--code span[data-v-1b6e7a16]{line-height:100px;color:#999}.pay--timer[data-v-1b6e7a16]{color:#999;display:block;margin-bottom:15px}.pay--timer[data-v-1b6e7a16],.pay--tips[data-v-1b6e7a16]{font-size:14px}.pay--finish[data-v-1b6e7a16]{color:#ff512b;cursor:pointer}.pay--btn[data-v-1b6e7a16]{border-radius:4px;width:143px;height:32px;margin-top:20px}.money[data-v-1b6e7a16]{color:#ff512b;font-weight:700}[data-v-1b6e7a16] .el-dialog{border-radius:4px}[data-v-1b6e7a16] .el-dialog__header{padding:30px 0 15px}[data-v-1b6e7a16] .el-dialog__title{font-size:20px;font-weight:700}[data-v-1b6e7a16] .el-dialog__body{padding-top:0;padding-bottom:50px}[data-v-1b6e7a16] .el-dialog__headerbtn{top:32px;right:30px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BsCancelOrder.vue?vue&type=template&id=ae367c96&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{attrs:{"visible":_vm.myVisible,"title":"取消订单原因","width":"380px"},on:{"update:visible":function($event){_vm.myVisible=$event}}},[_c('ul',{staticClass:"cancel"},_vm._l((_vm.cancelData),function(item){return _c('li',{key:item.value,class:_vm.selected == item.value && 'cancel__active',on:{"click":function($event){_vm.selected = item.value}}},[_vm._v("\n\t\t\t"+_vm._s(item.label)+"\n\t\t")])}),0),_vm._v(" "),_c('UiButton',{staticClass:"btn",attrs:{"type":"yellow_gradual","radius":true,"disabled":!_vm.selected},on:{"click":_vm.cancelOrder}},[_vm._v("确认取消")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BsCancelOrder.vue?vue&type=template&id=ae367c96&scoped=true&

// EXTERNAL MODULE: ./plugins/api/order.js
var order = __webpack_require__(166);

// EXTERNAL MODULE: ./components/UiButton.vue + 4 modules
var UiButton = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BsCancelOrder.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var BsCancelOrdervue_type_script_lang_js_ = ({
  components: {
    UiButton: UiButton["default"]
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    orderId: {
      type: Number
    }
  },
  data() {
    return {
      selected: '',
      cancelData: [{
        value: 1,
        label: '我不想买了'
      }, {
        value: 2,
        label: '地址信息填写错误'
      }, {
        value: 3,
        label: '商品降价'
      }, {
        value: 4,
        label: '商品无货'
      }, {
        value: 5,
        label: '其他'
      }]
    };
  },
  computed: {
    myVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit('update:visible', val);
      }
    }
  },
  methods: {
    async cancelOrder() {
      const ooderId = this.orderId;
      const {
        error,
        result
      } = await Object(order["k" /* ApiPutCancelOrder */])({
        cancelReasonType: this.selected,
        orderId: ooderId
      });
      if (error) {
        this.$message.error(error.message);
        return false;
      }
      this.myVisible = false;
      this.$emit('cancel');
      // 取消成功，跳到订单关闭页
    }
  }
});
// CONCATENATED MODULE: ./components/BsCancelOrder.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BsCancelOrdervue_type_script_lang_js_ = (BsCancelOrdervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BsCancelOrder.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(214)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BsCancelOrdervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ae367c96",
  "bac483ba"
  
)

/* harmony default export */ var BsCancelOrder = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UiButton: __webpack_require__(15).default})


/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCancelOrder_vue_vue_type_style_index_0_id_ae367c96_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCancelOrder_vue_vue_type_style_index_0_id_ae367c96_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCancelOrder_vue_vue_type_style_index_0_id_ae367c96_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCancelOrder_vue_vue_type_style_index_0_id_ae367c96_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCancelOrder_vue_vue_type_style_index_0_id_ae367c96_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-ae367c96]{display:flex}.flex-inline[data-v-ae367c96]{display:inline-flex}.flex-inline[data-v-ae367c96]:after,.flex-inline[data-v-ae367c96]:before,.flex[data-v-ae367c96]:after,.flex[data-v-ae367c96]:before{display:none}.flex-left[data-v-ae367c96]{justify-content:flex-start}.flex-center[data-v-ae367c96]{justify-content:center}.flex-right[data-v-ae367c96]{justify-content:flex-end}.flex-between[data-v-ae367c96]{justify-content:space-between}.flex-around[data-v-ae367c96]{justify-content:space-around}.flex-stretch[data-v-ae367c96]{align-items:stretch}.flex-top[data-v-ae367c96]{align-items:flex-start}.flex-middle[data-v-ae367c96]{align-items:center}.flex-bottom[data-v-ae367c96]{align-items:flex-end}.flex-baseline[data-v-ae367c96]{align-items:baseline}.flex-row[data-v-ae367c96]{flex-direction:row}.flex-row-reverse[data-v-ae367c96]{flex-direction:row-reverse}.flex-column[data-v-ae367c96]{flex-direction:column}.flex-column-reverse[data-v-ae367c96]{flex-direction:column-reverse}.flex-nowrap[data-v-ae367c96]{flex-wrap:nowrap}.flex-wrap[data-v-ae367c96]{flex-wrap:wrap}.flex-wrap-reverse[data-v-ae367c96]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-ae367c96]{align-content:stretch}.flex-wrap-top[data-v-ae367c96]{align-content:flex-start}.flex-wrap-middle[data-v-ae367c96]{align-content:center}.flex-wrap-bottom[data-v-ae367c96]{align-content:flex-end}.flex-wrap-between[data-v-ae367c96]{align-content:space-between}.flex-wrap-around[data-v-ae367c96]{align-content:space-around}.flex-first[data-v-ae367c96]{order:-1}.flex-last[data-v-ae367c96]{order:99}.flex-none[data-v-ae367c96]{flex:none}.flex-auto[data-v-ae367c96]{flex:auto}.flex-1[data-v-ae367c96]{flex:1}.hover-text[data-v-ae367c96]:hover{color:#ff875b}.expend-click[data-v-ae367c96]{position:relative}.expend-click[data-v-ae367c96]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-ae367c96],[data-v-ae367c96]:after,[data-v-ae367c96]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-ae367c96],dd[data-v-ae367c96],dl[data-v-ae367c96],figure[data-v-ae367c96],form[data-v-ae367c96],h1[data-v-ae367c96],h2[data-v-ae367c96],h3[data-v-ae367c96],h4[data-v-ae367c96],h5[data-v-ae367c96],ol[data-v-ae367c96],p[data-v-ae367c96],ul[data-v-ae367c96]{margin:0;font-size:14px}button[data-v-ae367c96],input[data-v-ae367c96],ol[data-v-ae367c96],ul[data-v-ae367c96]{padding:0}li[data-v-ae367c96],ol[data-v-ae367c96],ul[data-v-ae367c96]{list-style:none;list-style-type:none}h1[data-v-ae367c96],h2[data-v-ae367c96],h3[data-v-ae367c96],h4[data-v-ae367c96],h5[data-v-ae367c96]{font-size:100%}input[data-v-ae367c96]{border:0;margin:0}img[data-v-ae367c96]{width:100%}a[data-v-ae367c96],button[data-v-ae367c96],img[data-v-ae367c96],input[data-v-ae367c96],optgroup[data-v-ae367c96],select[data-v-ae367c96],textarea[data-v-ae367c96]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-ae367c96],img[data-v-ae367c96]{-webkit-touch-callout:none;border:0}body[data-v-ae367c96],html[data-v-ae367c96]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-ae367c96],img[data-v-ae367c96],input[data-v-ae367c96],textarea[data-v-ae367c96]{vertical-align:middle;outline:none}body[data-v-ae367c96]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-ae367c96]{border-collapse:collapse;border-spacing:0}a[data-v-ae367c96],table[data-v-ae367c96]{color:#333}a[data-v-ae367c96],a[data-v-ae367c96]:hover{text-decoration:none}a[data-v-ae367c96]:hover{color:#ff512b}.scrollbar-self[data-v-ae367c96]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-ae367c96]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-ae367c96]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.cancel[data-v-ae367c96]{width:320px;display:flex;flex-wrap:wrap;justify-content:space-between;margin:10px auto 0}.cancel li[data-v-ae367c96]{width:150px;height:36px;line-height:36px;text-align:center;border:1px solid #ddd;cursor:pointer;margin:15px 0}.cancel li.cancel__active[data-v-ae367c96]{border-color:#ff875b;color:#ff875b}.btn[data-v-ae367c96]{width:320px;height:36px;margin-top:25px}[data-v-ae367c96] .el-dialog{border-radius:4px}[data-v-ae367c96] .el-dialog__header{padding:30px 0 15px;text-align:center}[data-v-ae367c96] .el-dialog__title{font-size:20px;font-weight:700}[data-v-ae367c96] .el-dialog__body{padding-top:0;padding-bottom:50px}[data-v-ae367c96] .el-dialog__headerbtn{top:32px;right:30px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(266);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6e9871fc", content, true, context)
};

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusInfo_vue_vue_type_style_index_0_id_7c9ef32a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(239);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusInfo_vue_vue_type_style_index_0_id_7c9ef32a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusInfo_vue_vue_type_style_index_0_id_7c9ef32a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusInfo_vue_vue_type_style_index_0_id_7c9ef32a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusInfo_vue_vue_type_style_index_0_id_7c9ef32a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-7c9ef32a]{display:flex}.flex-inline[data-v-7c9ef32a]{display:inline-flex}.flex-inline[data-v-7c9ef32a]:after,.flex-inline[data-v-7c9ef32a]:before,.flex[data-v-7c9ef32a]:after,.flex[data-v-7c9ef32a]:before{display:none}.flex-left[data-v-7c9ef32a]{justify-content:flex-start}.flex-center[data-v-7c9ef32a]{justify-content:center}.flex-right[data-v-7c9ef32a]{justify-content:flex-end}.flex-between[data-v-7c9ef32a]{justify-content:space-between}.flex-around[data-v-7c9ef32a]{justify-content:space-around}.flex-stretch[data-v-7c9ef32a]{align-items:stretch}.flex-top[data-v-7c9ef32a]{align-items:flex-start}.flex-middle[data-v-7c9ef32a]{align-items:center}.flex-bottom[data-v-7c9ef32a]{align-items:flex-end}.flex-baseline[data-v-7c9ef32a]{align-items:baseline}.flex-row[data-v-7c9ef32a]{flex-direction:row}.flex-row-reverse[data-v-7c9ef32a]{flex-direction:row-reverse}.flex-column[data-v-7c9ef32a]{flex-direction:column}.flex-column-reverse[data-v-7c9ef32a]{flex-direction:column-reverse}.flex-nowrap[data-v-7c9ef32a]{flex-wrap:nowrap}.flex-wrap[data-v-7c9ef32a]{flex-wrap:wrap}.flex-wrap-reverse[data-v-7c9ef32a]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-7c9ef32a]{align-content:stretch}.flex-wrap-top[data-v-7c9ef32a]{align-content:flex-start}.flex-wrap-middle[data-v-7c9ef32a]{align-content:center}.flex-wrap-bottom[data-v-7c9ef32a]{align-content:flex-end}.flex-wrap-between[data-v-7c9ef32a]{align-content:space-between}.flex-wrap-around[data-v-7c9ef32a]{align-content:space-around}.flex-first[data-v-7c9ef32a]{order:-1}.flex-last[data-v-7c9ef32a]{order:99}.flex-none[data-v-7c9ef32a]{flex:none}.flex-auto[data-v-7c9ef32a]{flex:auto}.flex-1[data-v-7c9ef32a]{flex:1}.hover-text[data-v-7c9ef32a]:hover{color:#ff875b}.expend-click[data-v-7c9ef32a]{position:relative}.expend-click[data-v-7c9ef32a]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-7c9ef32a],[data-v-7c9ef32a]:after,[data-v-7c9ef32a]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-7c9ef32a],dd[data-v-7c9ef32a],dl[data-v-7c9ef32a],figure[data-v-7c9ef32a],form[data-v-7c9ef32a],h1[data-v-7c9ef32a],h2[data-v-7c9ef32a],h3[data-v-7c9ef32a],h4[data-v-7c9ef32a],h5[data-v-7c9ef32a],ol[data-v-7c9ef32a],p[data-v-7c9ef32a],ul[data-v-7c9ef32a]{margin:0;font-size:14px}button[data-v-7c9ef32a],input[data-v-7c9ef32a],ol[data-v-7c9ef32a],ul[data-v-7c9ef32a]{padding:0}li[data-v-7c9ef32a],ol[data-v-7c9ef32a],ul[data-v-7c9ef32a]{list-style:none;list-style-type:none}h1[data-v-7c9ef32a],h2[data-v-7c9ef32a],h3[data-v-7c9ef32a],h4[data-v-7c9ef32a],h5[data-v-7c9ef32a]{font-size:100%}input[data-v-7c9ef32a]{border:0;margin:0}img[data-v-7c9ef32a]{width:100%}a[data-v-7c9ef32a],button[data-v-7c9ef32a],img[data-v-7c9ef32a],input[data-v-7c9ef32a],optgroup[data-v-7c9ef32a],select[data-v-7c9ef32a],textarea[data-v-7c9ef32a]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-7c9ef32a],img[data-v-7c9ef32a]{-webkit-touch-callout:none;border:0}body[data-v-7c9ef32a],html[data-v-7c9ef32a]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-7c9ef32a],img[data-v-7c9ef32a],input[data-v-7c9ef32a],textarea[data-v-7c9ef32a]{vertical-align:middle;outline:none}body[data-v-7c9ef32a]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-7c9ef32a]{border-collapse:collapse;border-spacing:0}a[data-v-7c9ef32a],table[data-v-7c9ef32a]{color:#333}a[data-v-7c9ef32a],a[data-v-7c9ef32a]:hover{text-decoration:none}a[data-v-7c9ef32a]:hover{color:#ff512b}.scrollbar-self[data-v-7c9ef32a]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-7c9ef32a]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-7c9ef32a]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.operation[data-v-7c9ef32a]{width:300px;height:200px;background:#f8f8f8;padding-top:20px;text-align:center;border-right:1px solid #ddd}.operation span[data-v-7c9ef32a]{color:#999}.operation p[data-v-7c9ef32a]{font-size:14px;margin:30px 0 15px}.operation--btns[data-v-7c9ef32a]{margin-top:30px}.operation--btns button[data-v-7c9ef32a]{margin:0 7px;width:100px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index/order/detail/module/StatusInfo.vue?vue&type=template&id=7c9ef32a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"operation"},[_vm._ssrNode("<span data-v-7c9ef32a>"+_vm._ssrEscape("订单编号："+_vm._s(_vm.orderInfo.orderNo))+"</span> <p data-v-7c9ef32a>"+_vm._ssrEscape("订单状态："+_vm._s(_vm.ctxCon.name))+"</p> <span data-v-7c9ef32a>"+_vm._ssrEscape(_vm._s(_vm.ctxCon.tips))+"</span> "),_vm._ssrNode("<div class=\"operation--btns\" data-v-7c9ef32a>","</div>",[(_vm.orderInfo.orderStatus === 4)?_c('UiButton',{attrs:{"type":"yellow_gradual","radius":true},on:{"click":_vm.receive}},[_vm._v("确认收货")]):_vm._e(),_vm._ssrNode(" "),(_vm.orderInfo.orderStatus === 5)?_c('UiButton',{attrs:{"type":"yellow_gradual","radius":true},on:{"click":_vm.handelComment}},[_vm._v("去评价")]):_vm._e(),_vm._ssrNode(" "),(_vm.orderInfo.orderStatus === 6)?_c('UiButton',{attrs:{"type":"yellow_gradual","radius":true},on:{"click":_vm.handelComment}},[_vm._v("去追评")]):_vm._e(),_vm._ssrNode(" "),(_vm.orderInfo.orderStatus === 1)?[_c('UiButton',{attrs:{"type":"yellow_gradual","radius":true},on:{"click":function($event){_vm.payVisible = true}}},[_vm._v("去支付")]),_vm._ssrNode(" "),_c('UiButton',{attrs:{"type":"grey","radius":true},on:{"click":function($event){_vm.cancelVisible=true}}},[_vm._v("取消")])]:_vm._e()],2),_vm._ssrNode(" "),_c('BsCancelOrder',{attrs:{"visible":_vm.cancelVisible,"orderId":_vm.orderInfo.orderId},on:{"update:visible":function($event){_vm.cancelVisible=$event},"cancel":_vm.emitStatus}}),_vm._ssrNode(" "),_c('BsPay',{attrs:{"visible":_vm.payVisible,"orderId":_vm.orderInfo.orderId},on:{"update:visible":function($event){_vm.payVisible=$event},"finish":_vm.emitStatus,"cancel":_vm.emitStatus}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/index/order/detail/module/StatusInfo.vue?vue&type=template&id=7c9ef32a&scoped=true&

// EXTERNAL MODULE: ./plugins/api/order.js
var order = __webpack_require__(166);

// EXTERNAL MODULE: ./components/BsPay.vue + 5 modules
var BsPay = __webpack_require__(188);

// EXTERNAL MODULE: ./components/UiButton.vue + 4 modules
var UiButton = __webpack_require__(15);

// EXTERNAL MODULE: ./components/BsCancelOrder.vue + 4 modules
var BsCancelOrder = __webpack_require__(208);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index/order/detail/module/StatusInfo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var StatusInfovue_type_script_lang_js_ = ({
  components: {
    UiButton: UiButton["default"],
    BsPay: BsPay["default"],
    BsCancelOrder: BsCancelOrder["default"]
  },
  props: {
    orderInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      ctxData: {
        // 待付款
        '1': {
          name: '待付款',
          tips: ''
        },
        // 关闭
        '2': {
          name: '交易关闭',
          tips: '关闭原因'
        },
        // 已支付
        '3': {
          name: '待发货',
          tips: '您的包裹整装待发'
        },
        // 已发货
        '4': {
          name: '待收货',
          tips: '您的包裹正向您飞来'
        },
        // 已收货
        '5': {
          name: '已收货'
        },
        // 已完成
        '6': {
          name: '交易成功'
        },
        '7': {
          name: '交易成功'
        }
      },
      ctxCon: {},
      startSecondNum: 0,
      timerStop: null,
      cancelVisible: false,
      payVisible: false
    };
  },
  watch: {
    orderInfo(nVal) {
      const {
        orderStatus,
        autoReceiveTime,
        serverTime
      } = this.orderInfo;
      this.ctxCon = this.ctxData[orderStatus];
      if (orderStatus === 1) {
        // 待支付 开始倒计时
        if (this.timerStop) {
          clearTimeout(this.timerStop);
        }
        this.calcTimerStartSecondNum();
        this.timer();
      } else if (orderStatus === 4) {
        const receiveTime = new Date(autoReceiveTime.replace(/-/g, '/')).getTime();
        const curTime = new Date(serverTime.replace(/-/g, '/')).getTime();
        const minute = parseInt((receiveTime - curTime) / 60000);
        const day = parseInt(Math.floor(minute / 1440));
        const hour = parseInt(Math.floor((minute - day * 1440) / 60));
        const m = parseInt(Math.floor(minute - (day * 24 + hour) * 60));
        let str = `${day ? `${day}天${hour}时${m}分` : hour ? `${hour}时${m}分` : m ? `${m}分` : '1分'}`;
        this.ctxCon.tips = `${str}后，将自动确认收货`;
      } else if (orderStatus === 2) {
        this.ctxCon.tips = this.orderInfo.cancelReason;
      }
    }
  },
  methods: {
    /**
     * 计算待支付倒计时开始秒数
     */
    calcTimerStartSecondNum() {
      let expireTime = new Date(this.orderInfo.expireTime.replace(/-/g, '/')).getTime(),
        curTime = new Date(this.orderInfo.serverTime.replace(/-/g, '/')).getTime(),
        second = Math.floor((expireTime - curTime) / 1000);
      this.startSecondNum = second > 0 ? second : 0;
    },
    /**
     * 待付款的倒计时
     */
    timer() {
      if (this.startSecondNum == 0) {
        this.emitStatus();
        return;
      }
      this.startSecondNum--;
      let minute = parseInt(this.startSecondNum / 60);
      let second = parseInt(this.startSecondNum % 60);
      this.ctxCon.tips = `剩余${minute > 0 ? `${minute}分` : ''} ${second}秒`;
      this.timerStop = setTimeout(() => this.timer(), 1000);
    },
    /**
     * 确认收货
     */
    receive() {
      this.$confirm('确认已经收到货了吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const {
          error
        } = await Object(order["l" /* ApiPutOrderReceive */])({
          orderId: this.orderInfo.orderId
        });
        if (error) {
          uni.$toast(error.message);
          return false;
        }
        this.handelComment();
        // this.$message({
        // 	type: 'success',
        // 	message: '成功收货!'
        // });
        // this.emitStatus()
      });
    },

    handelComment() {
      this.$router.push({
        path: '/account/comment',
        query: {
          orderId: this.orderInfo.orderId
        }
      });
    },
    emitStatus() {
      // 如果有倒计时 则停止倒计时
      if (this.timerStop) {
        clearTimeout(this.timerStop);
      }
      this.$emit('changeStatus');
    }
  }
});
// CONCATENATED MODULE: ./pages/account/index/order/detail/module/StatusInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_StatusInfovue_type_script_lang_js_ = (StatusInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/account/index/order/detail/module/StatusInfo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(265)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_StatusInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7c9ef32a",
  "7a2d67ee"
  
)

/* harmony default export */ var StatusInfo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UiButton: __webpack_require__(15).default,BsCancelOrder: __webpack_require__(208).default,BsPay: __webpack_require__(188).default})


/***/ })

};;
//# sourceMappingURL=StatusInfo.js.map