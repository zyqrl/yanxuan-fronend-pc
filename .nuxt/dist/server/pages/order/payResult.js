exports.ids = [48];
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

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pay_success.e89156c.png";

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(418);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("bec8e136", content, true, context)
};

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payResult_vue_vue_type_style_index_0_id_3dc8bb3f_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(340);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payResult_vue_vue_type_style_index_0_id_3dc8bb3f_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payResult_vue_vue_type_style_index_0_id_3dc8bb3f_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payResult_vue_vue_type_style_index_0_id_3dc8bb3f_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payResult_vue_vue_type_style_index_0_id_3dc8bb3f_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-3dc8bb3f]{display:flex}.flex-inline[data-v-3dc8bb3f]{display:inline-flex}.flex-inline[data-v-3dc8bb3f]:after,.flex-inline[data-v-3dc8bb3f]:before,.flex[data-v-3dc8bb3f]:after,.flex[data-v-3dc8bb3f]:before{display:none}.flex-left[data-v-3dc8bb3f]{justify-content:flex-start}.flex-center[data-v-3dc8bb3f]{justify-content:center}.flex-right[data-v-3dc8bb3f]{justify-content:flex-end}.flex-between[data-v-3dc8bb3f]{justify-content:space-between}.flex-around[data-v-3dc8bb3f]{justify-content:space-around}.flex-stretch[data-v-3dc8bb3f]{align-items:stretch}.flex-top[data-v-3dc8bb3f]{align-items:flex-start}.flex-middle[data-v-3dc8bb3f]{align-items:center}.flex-bottom[data-v-3dc8bb3f]{align-items:flex-end}.flex-baseline[data-v-3dc8bb3f]{align-items:baseline}.flex-row[data-v-3dc8bb3f]{flex-direction:row}.flex-row-reverse[data-v-3dc8bb3f]{flex-direction:row-reverse}.flex-column[data-v-3dc8bb3f]{flex-direction:column}.flex-column-reverse[data-v-3dc8bb3f]{flex-direction:column-reverse}.flex-nowrap[data-v-3dc8bb3f]{flex-wrap:nowrap}.flex-wrap[data-v-3dc8bb3f]{flex-wrap:wrap}.flex-wrap-reverse[data-v-3dc8bb3f]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-3dc8bb3f]{align-content:stretch}.flex-wrap-top[data-v-3dc8bb3f]{align-content:flex-start}.flex-wrap-middle[data-v-3dc8bb3f]{align-content:center}.flex-wrap-bottom[data-v-3dc8bb3f]{align-content:flex-end}.flex-wrap-between[data-v-3dc8bb3f]{align-content:space-between}.flex-wrap-around[data-v-3dc8bb3f]{align-content:space-around}.flex-first[data-v-3dc8bb3f]{order:-1}.flex-last[data-v-3dc8bb3f]{order:99}.flex-none[data-v-3dc8bb3f]{flex:none}.flex-auto[data-v-3dc8bb3f]{flex:auto}.flex-1[data-v-3dc8bb3f]{flex:1}.hover-text[data-v-3dc8bb3f]:hover{color:#ff875b}.expend-click[data-v-3dc8bb3f]{position:relative}.expend-click[data-v-3dc8bb3f]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-3dc8bb3f],[data-v-3dc8bb3f]:after,[data-v-3dc8bb3f]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-3dc8bb3f],dd[data-v-3dc8bb3f],dl[data-v-3dc8bb3f],figure[data-v-3dc8bb3f],form[data-v-3dc8bb3f],h1[data-v-3dc8bb3f],h2[data-v-3dc8bb3f],h3[data-v-3dc8bb3f],h4[data-v-3dc8bb3f],h5[data-v-3dc8bb3f],ol[data-v-3dc8bb3f],p[data-v-3dc8bb3f],ul[data-v-3dc8bb3f]{margin:0;font-size:14px}button[data-v-3dc8bb3f],input[data-v-3dc8bb3f],ol[data-v-3dc8bb3f],ul[data-v-3dc8bb3f]{padding:0}li[data-v-3dc8bb3f],ol[data-v-3dc8bb3f],ul[data-v-3dc8bb3f]{list-style:none;list-style-type:none}h1[data-v-3dc8bb3f],h2[data-v-3dc8bb3f],h3[data-v-3dc8bb3f],h4[data-v-3dc8bb3f],h5[data-v-3dc8bb3f]{font-size:100%}input[data-v-3dc8bb3f]{border:0;margin:0}img[data-v-3dc8bb3f]{width:100%}a[data-v-3dc8bb3f],button[data-v-3dc8bb3f],img[data-v-3dc8bb3f],input[data-v-3dc8bb3f],optgroup[data-v-3dc8bb3f],select[data-v-3dc8bb3f],textarea[data-v-3dc8bb3f]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-3dc8bb3f],img[data-v-3dc8bb3f]{-webkit-touch-callout:none;border:0}body[data-v-3dc8bb3f],html[data-v-3dc8bb3f]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-3dc8bb3f],img[data-v-3dc8bb3f],input[data-v-3dc8bb3f],textarea[data-v-3dc8bb3f]{vertical-align:middle;outline:none}body[data-v-3dc8bb3f]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-3dc8bb3f]{border-collapse:collapse;border-spacing:0}a[data-v-3dc8bb3f],table[data-v-3dc8bb3f]{color:#333}a[data-v-3dc8bb3f],a[data-v-3dc8bb3f]:hover{text-decoration:none}a[data-v-3dc8bb3f]:hover{color:#ff512b}.scrollbar-self[data-v-3dc8bb3f]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-3dc8bb3f]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-3dc8bb3f]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.main[data-v-3dc8bb3f]{width:1200px;margin:0 auto;text-align:center;padding:100px 0 40px}.icon[data-v-3dc8bb3f]{width:239px}b[data-v-3dc8bb3f]{display:block}p[data-v-3dc8bb3f]{margin:10px 0 25px;color:#999}button[data-v-3dc8bb3f]{margin:0 10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/order/payResult.vue?vue&type=template&id=3dc8bb3f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(253)))+" class=\"icon\" data-v-3dc8bb3f> <b data-v-3dc8bb3f>交易成功</b> <p data-v-3dc8bb3f>您的包裹整装待发~</p> "),_vm._ssrNode("<div data-v-3dc8bb3f>","</div>",[_c('UiButton',{attrs:{"type":"grey","radius":true},on:{"click":_vm.goHome}},[_vm._v("返回首页")]),_vm._ssrNode(" "),_c('UiButton',{attrs:{"type":"yellow_gradual","radius":true},on:{"click":_vm.goDetail}},[_vm._v("查看订单")])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/order/payResult.vue?vue&type=template&id=3dc8bb3f&scoped=true&

// EXTERNAL MODULE: ./components/UiButton.vue + 4 modules
var UiButton = __webpack_require__(15);

// EXTERNAL MODULE: ./plugins/api/order.js
var order = __webpack_require__(166);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/order/payResult.vue?vue&type=script&lang=js&
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



/* harmony default export */ var payResultvue_type_script_lang_js_ = ({
  components: {
    UiButton: UiButton["default"]
  },
  data() {
    return {
      orderInfo: {},
      type: this.$route.query.type,
      reuqestNum: 0
    };
  },
  mounted() {
    // this.getOrderInfo();
    if (this.$route.query.type == 2) {
      this.$confirm("虚拟商品已自动发货，前往消息中心查看?", "提示", {
        confirmButtonText: "前往",
        cancelButtonText: "取消",
        callback: async e => {
          if (e == `confirm`) {
            window.open('https://you.mashibing.com/account/message', '_black');
          }
        }
      });
    }
  },
  methods: {
    async getOrderInfo() {
      this.reuqestNum++;
      const {
        error,
        result
      } = await Object(order["g" /* ApiGetOrderPaySatus */])({
        orderId: this.$route.query.id
      });
      if (error) {
        this.$message.warning(error.message);
        return false;
      }
      if (!result.isSuccess && this.reuqestNum < 5) {
        setTimeout(() => {
          this.getOrderInfo();
        }, 1000);
        return false;
      }
      this.orderInfo = result;
    },
    goHome() {
      this.$router.replace('/');
    },
    goDetail() {
      this.$router.replace(`/account/order/detail?id=${this.$route.query.id}`);
    }
  }
});
// CONCATENATED MODULE: ./pages/order/payResult.vue?vue&type=script&lang=js&
 /* harmony default export */ var order_payResultvue_type_script_lang_js_ = (payResultvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/order/payResult.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(417)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  order_payResultvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3dc8bb3f",
  "3b2eded0"
  
)

/* harmony default export */ var payResult = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UiButton: __webpack_require__(15).default})


/***/ })

};;
//# sourceMappingURL=payResult.js.map