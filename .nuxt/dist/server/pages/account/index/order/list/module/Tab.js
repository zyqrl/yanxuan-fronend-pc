exports.ids = [31];
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

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(284);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("307c5295", content, true, context)
};

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_style_index_0_id_17ff1e00_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(244);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_style_index_0_id_17ff1e00_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_style_index_0_id_17ff1e00_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_style_index_0_id_17ff1e00_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_style_index_0_id_17ff1e00_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-17ff1e00]{display:flex}.flex-inline[data-v-17ff1e00]{display:inline-flex}.flex-inline[data-v-17ff1e00]:after,.flex-inline[data-v-17ff1e00]:before,.flex[data-v-17ff1e00]:after,.flex[data-v-17ff1e00]:before{display:none}.flex-left[data-v-17ff1e00]{justify-content:flex-start}.flex-center[data-v-17ff1e00]{justify-content:center}.flex-right[data-v-17ff1e00]{justify-content:flex-end}.flex-between[data-v-17ff1e00]{justify-content:space-between}.flex-around[data-v-17ff1e00]{justify-content:space-around}.flex-stretch[data-v-17ff1e00]{align-items:stretch}.flex-top[data-v-17ff1e00]{align-items:flex-start}.flex-middle[data-v-17ff1e00]{align-items:center}.flex-bottom[data-v-17ff1e00]{align-items:flex-end}.flex-baseline[data-v-17ff1e00]{align-items:baseline}.flex-row[data-v-17ff1e00]{flex-direction:row}.flex-row-reverse[data-v-17ff1e00]{flex-direction:row-reverse}.flex-column[data-v-17ff1e00]{flex-direction:column}.flex-column-reverse[data-v-17ff1e00]{flex-direction:column-reverse}.flex-nowrap[data-v-17ff1e00]{flex-wrap:nowrap}.flex-wrap[data-v-17ff1e00]{flex-wrap:wrap}.flex-wrap-reverse[data-v-17ff1e00]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-17ff1e00]{align-content:stretch}.flex-wrap-top[data-v-17ff1e00]{align-content:flex-start}.flex-wrap-middle[data-v-17ff1e00]{align-content:center}.flex-wrap-bottom[data-v-17ff1e00]{align-content:flex-end}.flex-wrap-between[data-v-17ff1e00]{align-content:space-between}.flex-wrap-around[data-v-17ff1e00]{align-content:space-around}.flex-first[data-v-17ff1e00]{order:-1}.flex-last[data-v-17ff1e00]{order:99}.flex-none[data-v-17ff1e00]{flex:none}.flex-auto[data-v-17ff1e00]{flex:auto}.flex-1[data-v-17ff1e00]{flex:1}.hover-text[data-v-17ff1e00]:hover{color:#ff875b}.expend-click[data-v-17ff1e00]{position:relative}.expend-click[data-v-17ff1e00]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-17ff1e00],[data-v-17ff1e00]:after,[data-v-17ff1e00]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-17ff1e00],dd[data-v-17ff1e00],dl[data-v-17ff1e00],figure[data-v-17ff1e00],form[data-v-17ff1e00],h1[data-v-17ff1e00],h2[data-v-17ff1e00],h3[data-v-17ff1e00],h4[data-v-17ff1e00],h5[data-v-17ff1e00],ol[data-v-17ff1e00],p[data-v-17ff1e00],ul[data-v-17ff1e00]{margin:0;font-size:14px}button[data-v-17ff1e00],input[data-v-17ff1e00],ol[data-v-17ff1e00],ul[data-v-17ff1e00]{padding:0}li[data-v-17ff1e00],ol[data-v-17ff1e00],ul[data-v-17ff1e00]{list-style:none;list-style-type:none}h1[data-v-17ff1e00],h2[data-v-17ff1e00],h3[data-v-17ff1e00],h4[data-v-17ff1e00],h5[data-v-17ff1e00]{font-size:100%}input[data-v-17ff1e00]{border:0;margin:0}img[data-v-17ff1e00]{width:100%}a[data-v-17ff1e00],button[data-v-17ff1e00],img[data-v-17ff1e00],input[data-v-17ff1e00],optgroup[data-v-17ff1e00],select[data-v-17ff1e00],textarea[data-v-17ff1e00]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-17ff1e00],img[data-v-17ff1e00]{-webkit-touch-callout:none;border:0}body[data-v-17ff1e00],html[data-v-17ff1e00]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-17ff1e00],img[data-v-17ff1e00],input[data-v-17ff1e00],textarea[data-v-17ff1e00]{vertical-align:middle;outline:none}body[data-v-17ff1e00]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-17ff1e00]{border-collapse:collapse;border-spacing:0}a[data-v-17ff1e00],table[data-v-17ff1e00]{color:#333}a[data-v-17ff1e00],a[data-v-17ff1e00]:hover{text-decoration:none}a[data-v-17ff1e00]:hover{color:#ff512b}.scrollbar-self[data-v-17ff1e00]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-17ff1e00]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-17ff1e00]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.tab[data-v-17ff1e00]{width:100%;height:42px;line-height:42px;border-bottom:1px solid #ddd}.tab li[data-v-17ff1e00]{float:left;margin-right:54px;font-size:16px;cursor:pointer}.tab__active[data-v-17ff1e00],.tab li span[data-v-17ff1e00]{color:#ff875b}.tab__active[data-v-17ff1e00]{position:relative}.tab__active[data-v-17ff1e00]:after{display:block;height:2px;width:100%;content:\"\";background:#ff875b;position:absolute;bottom:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index/order/list/module/Tab.vue?vue&type=template&id=17ff1e00&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"tab"},[_vm._ssrNode((_vm._ssrList((_vm.tabs),function(item){return ("<li"+(_vm._ssrClass(null,_vm.active == item.value && 'tab__active'))+" data-v-17ff1e00>"+_vm._ssrEscape("\n\t\t"+_vm._s(item.label)+"\n\t\t")+((item.count)?("<span data-v-17ff1e00>"+_vm._ssrEscape(_vm._s(item.count))+"</span>"):"<!---->")+"</li>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/index/order/list/module/Tab.vue?vue&type=template&id=17ff1e00&scoped=true&

// EXTERNAL MODULE: ./plugins/api/order.js
var order = __webpack_require__(166);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index/order/list/module/Tab.vue?vue&type=script&lang=js&
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


/* harmony default export */ var Tabvue_type_script_lang_js_ = ({
  props: {
    active: {
      type: Number | String,
      default: -1
    }
  },
  data() {
    return {
      tabs: [{
        label: '全部',
        value: -1,
        code: 'allCount'
      }, {
        label: '待付款',
        value: 1,
        code: 'unpaidCount'
      }, {
        label: '待发货',
        value: 3,
        code: 'waitDeliveryCount'
      }, {
        label: '待收货',
        value: 4,
        code: 'deliveredCount'
      }, {
        label: '待评价',
        value: 5,
        code: 'waitComment'
      }]
    };
  },
  mounted() {
    this.getOrderStatistics();
  },
  methods: {
    change(val) {
      this.$emit('change', val);
    },
    async getOrderStatistics() {
      const {
        result
      } = await Object(order["h" /* ApiGetOrderStatistics */])();
      this.tabs = this.tabs.map(i => {
        i.count = result[i.code];
        return i;
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/account/index/order/list/module/Tab.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_Tabvue_type_script_lang_js_ = (Tabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/account/index/order/list/module/Tab.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(283)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_Tabvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "17ff1e00",
  "4ce1dc2f"
  
)

/* harmony default export */ var Tab = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Tab.js.map