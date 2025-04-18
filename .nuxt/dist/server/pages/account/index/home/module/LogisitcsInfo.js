exports.ids = [22,9];
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

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(237);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("405b3390", content, true, context)
};

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UiConfirm.vue?vue&type=template&id=1b437e04&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{staticClass:"bs-order-ensure",attrs:{"width":"16%","center":"","visible":_vm.dialogVisible,"show-close":false},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('div',{staticClass:"dialog-content flex flex-middle"},[_c('img',{attrs:{"src":__webpack_require__(235)}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_c('div',{staticClass:"dialog-footer flex flex-between"},[_c('el-button',{on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{staticClass:"dialog-footer__btn--ensure",on:{"click":_vm.onConfirm}},[_vm._v("确认")])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UiConfirm.vue?vue&type=template&id=1b437e04&scoped=true&

// EXTERNAL MODULE: ./components/UiButton.vue + 4 modules
var UiButton = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UiConfirm.vue?vue&type=script&lang=js&
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


/* harmony default export */ var UiConfirmvue_type_script_lang_js_ = ({
  components: {
    UiButton: UiButton["default"]
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    }
  },
  computed: {
    dialogVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit("update:visible", val);
      }
    }
  },
  methods: {
    onConfirm() {
      this.$emit("confirm");
      this.dialogVisible = false;
    }
  }
});
// CONCATENATED MODULE: ./components/UiConfirm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UiConfirmvue_type_script_lang_js_ = (UiConfirmvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/UiConfirm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(236)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UiConfirmvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1b437e04",
  "5d27634c"
  
)

/* harmony default export */ var UiConfirm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAllJREFUaEPtmS1PBDEQht+z8CPQoNFo0KBIQCFQeBJQkKDwCBQkODRoNFiwoMGCJi/Zkl633Z3tTO8o2SaXNdd2nvnoTKcTVD4mlcuPEcCz4DKAFQD8LgJYCqz7BuATwAuA5+ardgCtBSjkBoBVAAsDpfkC8AjgDgDhskYuAAXfaTSetXEwiRa5zgEZCkAtbzZatxA8XIPWIIh4DAGg1vcjvi3eTPhHutOF1BpSAAp/nOHnQplbf2N8nEggJACzFt7RiCD6AOYlvBiiC4ABS7cJz/Nct8idx5g4TE3uAtgFsJ67q/G8ewBXsTVTANT6mVIIl3G5jMvQmiVphVbCSwEcGSSpWwD8cTB38KcZTHan4QIxAAvtcx9rAK7ZskIMgMlqTaOqZm4JgIcmyf2KFwO4NEpYJQCYG/Z85YYADDb6v8UoAUC5GAeMh58RAlgEm1u7FIC/bguAiYsXEotRCuAJwHnKAjz7rTJvKYCpzBy60I2F6gueQk687ZQFRgDPgqVciFv8XwtUH8SWx6jheTC1VOcxapnISgF0JjLLUqIUQGcpwU2tijlWjv59wKLC7S3mCGBRTn8AOAhMYKEYUTltcaHhdZJ9HX9YnHCiCw03tTiN/M1KKSX5PmCxoes+UyE53evwEBh0qefkqtsqBKi+sUWIv9BapOu8p5JKX290nhAmzV0HPmtLiISncBIL+BDVPnA4CAb2VsGmb7KJq4mB2Fy6FI9Zqw4GMze7z4NfK4e4UAqkymfWGIxrofNLV4s9dLPIe/Ueu9Ult9YCagG0C4wAWg1q538D0ZKKMbgrGYEAAAAASUVORK5CYII="

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiConfirm_vue_vue_type_style_index_0_id_1b437e04_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(211);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiConfirm_vue_vue_type_style_index_0_id_1b437e04_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiConfirm_vue_vue_type_style_index_0_id_1b437e04_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiConfirm_vue_vue_type_style_index_0_id_1b437e04_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiConfirm_vue_vue_type_style_index_0_id_1b437e04_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-1b437e04]{display:flex}.flex-inline[data-v-1b437e04]{display:inline-flex}.flex-inline[data-v-1b437e04]:after,.flex-inline[data-v-1b437e04]:before,.flex[data-v-1b437e04]:after,.flex[data-v-1b437e04]:before{display:none}.flex-left[data-v-1b437e04]{justify-content:flex-start}.flex-center[data-v-1b437e04]{justify-content:center}.flex-right[data-v-1b437e04]{justify-content:flex-end}.flex-between[data-v-1b437e04]{justify-content:space-between}.flex-around[data-v-1b437e04]{justify-content:space-around}.flex-stretch[data-v-1b437e04]{align-items:stretch}.flex-top[data-v-1b437e04]{align-items:flex-start}.flex-middle[data-v-1b437e04]{align-items:center}.flex-bottom[data-v-1b437e04]{align-items:flex-end}.flex-baseline[data-v-1b437e04]{align-items:baseline}.flex-row[data-v-1b437e04]{flex-direction:row}.flex-row-reverse[data-v-1b437e04]{flex-direction:row-reverse}.flex-column[data-v-1b437e04]{flex-direction:column}.flex-column-reverse[data-v-1b437e04]{flex-direction:column-reverse}.flex-nowrap[data-v-1b437e04]{flex-wrap:nowrap}.flex-wrap[data-v-1b437e04]{flex-wrap:wrap}.flex-wrap-reverse[data-v-1b437e04]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-1b437e04]{align-content:stretch}.flex-wrap-top[data-v-1b437e04]{align-content:flex-start}.flex-wrap-middle[data-v-1b437e04]{align-content:center}.flex-wrap-bottom[data-v-1b437e04]{align-content:flex-end}.flex-wrap-between[data-v-1b437e04]{align-content:space-between}.flex-wrap-around[data-v-1b437e04]{align-content:space-around}.flex-first[data-v-1b437e04]{order:-1}.flex-last[data-v-1b437e04]{order:99}.flex-none[data-v-1b437e04]{flex:none}.flex-auto[data-v-1b437e04]{flex:auto}.flex-1[data-v-1b437e04]{flex:1}.hover-text[data-v-1b437e04]:hover{color:#ff875b}.expend-click[data-v-1b437e04]{position:relative}.expend-click[data-v-1b437e04]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-1b437e04],[data-v-1b437e04]:after,[data-v-1b437e04]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-1b437e04],dd[data-v-1b437e04],dl[data-v-1b437e04],figure[data-v-1b437e04],form[data-v-1b437e04],h1[data-v-1b437e04],h2[data-v-1b437e04],h3[data-v-1b437e04],h4[data-v-1b437e04],h5[data-v-1b437e04],ol[data-v-1b437e04],p[data-v-1b437e04],ul[data-v-1b437e04]{margin:0;font-size:14px}button[data-v-1b437e04],input[data-v-1b437e04],ol[data-v-1b437e04],ul[data-v-1b437e04]{padding:0}li[data-v-1b437e04],ol[data-v-1b437e04],ul[data-v-1b437e04]{list-style:none;list-style-type:none}h1[data-v-1b437e04],h2[data-v-1b437e04],h3[data-v-1b437e04],h4[data-v-1b437e04],h5[data-v-1b437e04]{font-size:100%}input[data-v-1b437e04]{border:0;margin:0}img[data-v-1b437e04]{width:100%}a[data-v-1b437e04],button[data-v-1b437e04],img[data-v-1b437e04],input[data-v-1b437e04],optgroup[data-v-1b437e04],select[data-v-1b437e04],textarea[data-v-1b437e04]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-1b437e04],img[data-v-1b437e04]{-webkit-touch-callout:none;border:0}body[data-v-1b437e04],html[data-v-1b437e04]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-1b437e04],img[data-v-1b437e04],input[data-v-1b437e04],textarea[data-v-1b437e04]{vertical-align:middle;outline:none}body[data-v-1b437e04]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-1b437e04]{border-collapse:collapse;border-spacing:0}a[data-v-1b437e04],table[data-v-1b437e04]{color:#333}a[data-v-1b437e04],a[data-v-1b437e04]:hover{text-decoration:none}a[data-v-1b437e04]:hover{color:#ff512b}.scrollbar-self[data-v-1b437e04]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-1b437e04]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-1b437e04]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}[data-v-1b437e04] .el-dialog .el-dialog__header{display:none}[data-v-1b437e04] .el-dialog .el-dialog__body{padding:41px 60px}[data-v-1b437e04] .el-dialog .el-dialog__body .dialog-content{color:rgba(0,0,0,.8);font-size:16px;padding:0 2px 42px}[data-v-1b437e04] .el-dialog .el-dialog__body .dialog-content img{width:24px;height:24px;margin-right:17px}[data-v-1b437e04] .el-dialog .el-dialog__body .dialog-footer .el-button{width:90px;height:30px;font-size:14px}[data-v-1b437e04] .el-dialog .el-dialog__body .dialog-footer .dialog-footer__btn--ensure{background:#ff875b;color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(263);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4924686a", content, true, context)
};

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logisitcs-empty.7cf5bf7.png";

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogisitcsInfo_vue_vue_type_style_index_0_id_6a4d87e6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(238);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogisitcsInfo_vue_vue_type_style_index_0_id_6a4d87e6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogisitcsInfo_vue_vue_type_style_index_0_id_6a4d87e6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogisitcsInfo_vue_vue_type_style_index_0_id_6a4d87e6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogisitcsInfo_vue_vue_type_style_index_0_id_6a4d87e6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-6a4d87e6]{display:flex}.flex-inline[data-v-6a4d87e6]{display:inline-flex}.flex-inline[data-v-6a4d87e6]:after,.flex-inline[data-v-6a4d87e6]:before,.flex[data-v-6a4d87e6]:after,.flex[data-v-6a4d87e6]:before{display:none}.flex-left[data-v-6a4d87e6]{justify-content:flex-start}.flex-center[data-v-6a4d87e6]{justify-content:center}.flex-right[data-v-6a4d87e6]{justify-content:flex-end}.flex-between[data-v-6a4d87e6]{justify-content:space-between}.flex-around[data-v-6a4d87e6]{justify-content:space-around}.flex-stretch[data-v-6a4d87e6]{align-items:stretch}.flex-top[data-v-6a4d87e6]{align-items:flex-start}.flex-middle[data-v-6a4d87e6]{align-items:center}.flex-bottom[data-v-6a4d87e6]{align-items:flex-end}.flex-baseline[data-v-6a4d87e6]{align-items:baseline}.flex-row[data-v-6a4d87e6]{flex-direction:row}.flex-row-reverse[data-v-6a4d87e6]{flex-direction:row-reverse}.flex-column[data-v-6a4d87e6]{flex-direction:column}.flex-column-reverse[data-v-6a4d87e6]{flex-direction:column-reverse}.flex-nowrap[data-v-6a4d87e6]{flex-wrap:nowrap}.flex-wrap[data-v-6a4d87e6]{flex-wrap:wrap}.flex-wrap-reverse[data-v-6a4d87e6]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-6a4d87e6]{align-content:stretch}.flex-wrap-top[data-v-6a4d87e6]{align-content:flex-start}.flex-wrap-middle[data-v-6a4d87e6]{align-content:center}.flex-wrap-bottom[data-v-6a4d87e6]{align-content:flex-end}.flex-wrap-between[data-v-6a4d87e6]{align-content:space-between}.flex-wrap-around[data-v-6a4d87e6]{align-content:space-around}.flex-first[data-v-6a4d87e6]{order:-1}.flex-last[data-v-6a4d87e6]{order:99}.flex-none[data-v-6a4d87e6]{flex:none}.flex-auto[data-v-6a4d87e6]{flex:auto}.flex-1[data-v-6a4d87e6]{flex:1}.hover-text[data-v-6a4d87e6]:hover{color:#ff875b}.expend-click[data-v-6a4d87e6]{position:relative}.expend-click[data-v-6a4d87e6]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-6a4d87e6],[data-v-6a4d87e6]:after,[data-v-6a4d87e6]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-6a4d87e6],dd[data-v-6a4d87e6],dl[data-v-6a4d87e6],figure[data-v-6a4d87e6],form[data-v-6a4d87e6],h1[data-v-6a4d87e6],h2[data-v-6a4d87e6],h3[data-v-6a4d87e6],h4[data-v-6a4d87e6],h5[data-v-6a4d87e6],ol[data-v-6a4d87e6],p[data-v-6a4d87e6],ul[data-v-6a4d87e6]{margin:0;font-size:14px}button[data-v-6a4d87e6],input[data-v-6a4d87e6],ol[data-v-6a4d87e6],ul[data-v-6a4d87e6]{padding:0}li[data-v-6a4d87e6],ol[data-v-6a4d87e6],ul[data-v-6a4d87e6]{list-style:none;list-style-type:none}h1[data-v-6a4d87e6],h2[data-v-6a4d87e6],h3[data-v-6a4d87e6],h4[data-v-6a4d87e6],h5[data-v-6a4d87e6]{font-size:100%}input[data-v-6a4d87e6]{border:0;margin:0}img[data-v-6a4d87e6]{width:100%}a[data-v-6a4d87e6],button[data-v-6a4d87e6],img[data-v-6a4d87e6],input[data-v-6a4d87e6],optgroup[data-v-6a4d87e6],select[data-v-6a4d87e6],textarea[data-v-6a4d87e6]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-6a4d87e6],img[data-v-6a4d87e6]{-webkit-touch-callout:none;border:0}body[data-v-6a4d87e6],html[data-v-6a4d87e6]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-6a4d87e6],img[data-v-6a4d87e6],input[data-v-6a4d87e6],textarea[data-v-6a4d87e6]{vertical-align:middle;outline:none}body[data-v-6a4d87e6]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-6a4d87e6]{border-collapse:collapse;border-spacing:0}a[data-v-6a4d87e6],table[data-v-6a4d87e6]{color:#333}a[data-v-6a4d87e6],a[data-v-6a4d87e6]:hover{text-decoration:none}a[data-v-6a4d87e6]:hover{color:#ff512b}.scrollbar-self[data-v-6a4d87e6]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-6a4d87e6]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-6a4d87e6]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.home-logisitcs[data-v-6a4d87e6]{width:620px;border:1px solid #ddd}.home-logisitcs .home-logisitcs-label[data-v-6a4d87e6]{height:42px;line-height:42px;padding:0 22px;border-bottom:1px solid #ddd;background:#f8f8f8;font-size:14px;color:#333}.home-logisitcs .home-logisitcs-empty[data-v-6a4d87e6]{height:310px}.home-logisitcs .home-logisitcs-empty img[data-v-6a4d87e6]{width:228px;height:144px}.home-logisitcs .home-logisitcs-content[data-v-6a4d87e6]{max-height:620px;overflow:auto;padding:30px}.home-logisitcs .home-logisitcs-content .home-logisitcs-content__item[data-v-6a4d87e6]{margin-bottom:30px;cursor:pointer}.home-logisitcs .home-logisitcs-content .home-logisitcs-content__item[data-v-6a4d87e6]:last-child{margin-bottom:0}.home-logisitcs .home-logisitcs-content .home-logisitcs-content__item .logisitcs-content-item__info img[data-v-6a4d87e6]{width:60px;height:60px;margin-right:18px;border-radius:2px}.home-logisitcs .home-logisitcs-content .home-logisitcs-content__item .logisitcs-content-item__info .content-item-info__wrap .item-info-wrap__title[data-v-6a4d87e6]{width:309px;font-size:14px;color:#666;margin-bottom:8px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.home-logisitcs .home-logisitcs-content .home-logisitcs-content__item .logisitcs-content-item__info .content-item-info__wrap .item-info-wrap__orderNo[data-v-6a4d87e6]{display:inline-block;color:#999;font-size:12px}.home-logisitcs .home-logisitcs-content .home-logisitcs-content__item .logisitcs-content-item__info .content-item-info__wrap .item-info-wrap__orderNo span[data-v-6a4d87e6]{margin-right:30px}.home-logisitcs .home-logisitcs-content .home-logisitcs-content__item .logisitcs-content-item__info .content-item-info__wrap .item-info-wrap__orderNo--light[data-v-6a4d87e6]{color:#ff875b;cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index/home/module/LogisitcsInfo.vue?vue&type=template&id=6a4d87e6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-logisitcs"},[_vm._ssrNode("<div class=\"home-logisitcs-label\" data-v-6a4d87e6>我的物流</div> "),(_vm.loadFinish && _vm.total === 0)?_vm._ssrNode("<div class=\"home-logisitcs-empty flex flex-center flex-middle\" data-v-6a4d87e6>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(260)))+" data-v-6a4d87e6>")],2):_c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}]},[_c('div',{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:(_vm.handleListload),expression:"handleListload"}],staticClass:"home-logisitcs-content scrollbar-self"},_vm._l((_vm.list),function(item){return _vm._ssrNode("<div class=\"home-logisitcs-content__item flex flex-middle flex-between\" data-v-6a4d87e6>","</div>",[_vm._ssrNode("<div class=\"logisitcs-content-item__info flex flex-start\" data-v-6a4d87e6><img"+(_vm._ssrAttr("src",item.cover))+" data-v-6a4d87e6> <div class=\"content-item-info__wrap flex-1\" data-v-6a4d87e6><p class=\"item-info-wrap__title\" data-v-6a4d87e6>"+_vm._ssrEscape("\n              "+_vm._s(item.logisticsContext)+"\n            ")+"</p> <div class=\"item-info-wrap__orderNo\" data-v-6a4d87e6>"+((item.logistics.companyName)?("<span data-v-6a4d87e6>"+_vm._ssrEscape(_vm._s(((item.logistics.companyName) + ": " + (item.logistics.trackingNo))))+"</span>"):"<!---->")+" <span class=\"item-info-wrap__orderNo--light\" data-v-6a4d87e6>查看详情</span></div></div></div> "),_c('UiButton',{attrs:{"type":"yellow_line","radius":true},on:{"click":function($event){return _vm.onOrderConfirm(item)}}},[_vm._v("确认收货")])],2)}),0)]),_vm._ssrNode(" "),_c('UiConfirm',{attrs:{"title":"确认收到货了吗？","visible":_vm.confirmOrderVisible},on:{"update:visible":function($event){_vm.confirmOrderVisible=$event},"confirm":_vm.handleOrderEnsure}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/index/home/module/LogisitcsInfo.vue?vue&type=template&id=6a4d87e6&scoped=true&

// EXTERNAL MODULE: ./node_modules/element-ui/lib/element-ui.common.js
var element_ui_common = __webpack_require__(17);

// EXTERNAL MODULE: ./components/UiButton.vue + 4 modules
var UiButton = __webpack_require__(15);

// EXTERNAL MODULE: ./components/UiConfirm.vue + 4 modules
var UiConfirm = __webpack_require__(228);

// EXTERNAL MODULE: ./plugins/api/order.js
var order = __webpack_require__(166);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index/home/module/LogisitcsInfo.vue?vue&type=script&lang=js&
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





/* harmony default export */ var LogisitcsInfovue_type_script_lang_js_ = ({
  components: {
    UiButton: UiButton["default"],
    UiConfirm: UiConfirm["default"]
  },
  data() {
    return {
      selectOrderId: 0,
      query: {
        pageIndex: 1,
        length: 15
      },
      total: 0,
      confirmOrderVisible: false,
      list: [],
      loading: false,
      loadFinish: false
    };
  },
  mounted() {
    this.getLogisticsList();
  },
  methods: {
    // 获取待收货物流信息
    async getLogisticsList() {
      this.loading = true;
      const {
        result
      } = await Object(order["f" /* ApiGetOrderLogisticsList */])({
        ...this.query
      });
      this.loading = false;
      this.loadFinish = true;
      if (result) {
        const {
          total,
          records
        } = result;
        this.total = total;
        if (records && records.length > 0) {
          const formatRecords = records.map(item => {
            const goods = item.products || [{
              productImageUrl: ""
            }];
            const logisticsList = item.logistics.logisticsDataList || [];
            return {
              ...item,
              cover: goods[0].productImageUrl,
              // 订单封面
              logisticsContext: logisticsList.length > 0 && logisticsList[0].context || "暂无物流信息" // 物流详细信息
            };
          });

          this.list = this.list.concat(formatRecords);
        }
      }
    },
    onOrderConfirm({
      orderId
    }) {
      this.selectOrderId = orderId;
      this.confirmOrderVisible = true;
    },
    // 上拉加载
    handleListload() {
      if (this.total > 0 && this.list.length < this.total) {
        // 执行接口请求
        this.query.pageIndex += 1;
        this.getLogisticsList();
      }
    },
    onJumpOrderDetail(id) {
      this.$router.push(`/account/order/detail?id=${id}`);
    },
    // 确认收货
    async handleOrderEnsure() {
      const {
        result
      } = await Object(order["l" /* ApiPutOrderReceive */])({
        orderId: this.selectOrderId
      });
      this.confirmOrderVisible = false;
      if (result) {
        element_ui_common["Message"].success("确认收货成功");
        this.list = [];
        this.query.pageIndex = 1;
        this.getLogisticsList();
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/account/index/home/module/LogisitcsInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_LogisitcsInfovue_type_script_lang_js_ = (LogisitcsInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/account/index/home/module/LogisitcsInfo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(262)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_LogisitcsInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6a4d87e6",
  "2c03535e"
  
)

/* harmony default export */ var LogisitcsInfo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UiButton: __webpack_require__(15).default,UiConfirm: __webpack_require__(228).default})


/***/ })

};;
//# sourceMappingURL=LogisitcsInfo.js.map