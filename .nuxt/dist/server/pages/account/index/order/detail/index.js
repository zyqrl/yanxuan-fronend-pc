exports.ids = [25,2,7,8,14,26,27,28,29];
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

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(186);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("9d624f5a", content, true, context)
};

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UIGoodsInfo.vue?vue&type=template&id=753d9a5e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-goods-info",on:{"click":function($event){return _vm.$router.push(("/goods/detail/" + (_vm.goods.productId)))}}},[_vm._ssrNode("<div class=\"ui-goods-info--img\""+(_vm._ssrStyle(null,("background-image:url(" + (_vm.goods.productImageUrl || _vm.goods.productMainPicture) + ")"), null))+" data-v-753d9a5e></div> <p data-v-753d9a5e><b data-v-753d9a5e>"+_vm._ssrEscape(_vm._s(_vm.goods.productName))+"</b> <span data-v-753d9a5e>"+_vm._ssrEscape(_vm._s(_vm.goods.skuDescribe))+"</span></p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UIGoodsInfo.vue?vue&type=template&id=753d9a5e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UIGoodsInfo.vue?vue&type=script&lang=js&
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

/* harmony default export */ var UIGoodsInfovue_type_script_lang_js_ = ({
  props: {
    goods: {
      type: Object,
      default: () => ({})
    }
  }
});
// CONCATENATED MODULE: ./components/UIGoodsInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UIGoodsInfovue_type_script_lang_js_ = (UIGoodsInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/UIGoodsInfo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(185)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UIGoodsInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "753d9a5e",
  "d1e0c260"
  
)

/* harmony default export */ var UIGoodsInfo = __webpack_exports__["default"] = (component.exports);

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

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UIGoodsInfo_vue_vue_type_style_index_0_id_753d9a5e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UIGoodsInfo_vue_vue_type_style_index_0_id_753d9a5e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UIGoodsInfo_vue_vue_type_style_index_0_id_753d9a5e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UIGoodsInfo_vue_vue_type_style_index_0_id_753d9a5e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UIGoodsInfo_vue_vue_type_style_index_0_id_753d9a5e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-753d9a5e]{display:flex}.flex-inline[data-v-753d9a5e]{display:inline-flex}.flex-inline[data-v-753d9a5e]:after,.flex-inline[data-v-753d9a5e]:before,.flex[data-v-753d9a5e]:after,.flex[data-v-753d9a5e]:before{display:none}.flex-left[data-v-753d9a5e]{justify-content:flex-start}.flex-center[data-v-753d9a5e]{justify-content:center}.flex-right[data-v-753d9a5e]{justify-content:flex-end}.flex-between[data-v-753d9a5e]{justify-content:space-between}.flex-around[data-v-753d9a5e]{justify-content:space-around}.flex-stretch[data-v-753d9a5e]{align-items:stretch}.flex-top[data-v-753d9a5e]{align-items:flex-start}.flex-middle[data-v-753d9a5e]{align-items:center}.flex-bottom[data-v-753d9a5e]{align-items:flex-end}.flex-baseline[data-v-753d9a5e]{align-items:baseline}.flex-row[data-v-753d9a5e]{flex-direction:row}.flex-row-reverse[data-v-753d9a5e]{flex-direction:row-reverse}.flex-column[data-v-753d9a5e]{flex-direction:column}.flex-column-reverse[data-v-753d9a5e]{flex-direction:column-reverse}.flex-nowrap[data-v-753d9a5e]{flex-wrap:nowrap}.flex-wrap[data-v-753d9a5e]{flex-wrap:wrap}.flex-wrap-reverse[data-v-753d9a5e]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-753d9a5e]{align-content:stretch}.flex-wrap-top[data-v-753d9a5e]{align-content:flex-start}.flex-wrap-middle[data-v-753d9a5e]{align-content:center}.flex-wrap-bottom[data-v-753d9a5e]{align-content:flex-end}.flex-wrap-between[data-v-753d9a5e]{align-content:space-between}.flex-wrap-around[data-v-753d9a5e]{align-content:space-around}.flex-first[data-v-753d9a5e]{order:-1}.flex-last[data-v-753d9a5e]{order:99}.flex-none[data-v-753d9a5e]{flex:none}.flex-auto[data-v-753d9a5e]{flex:auto}.flex-1[data-v-753d9a5e]{flex:1}.hover-text[data-v-753d9a5e]:hover{color:#ff875b}.expend-click[data-v-753d9a5e]{position:relative}.expend-click[data-v-753d9a5e]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-753d9a5e],[data-v-753d9a5e]:after,[data-v-753d9a5e]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-753d9a5e],dd[data-v-753d9a5e],dl[data-v-753d9a5e],figure[data-v-753d9a5e],form[data-v-753d9a5e],h1[data-v-753d9a5e],h2[data-v-753d9a5e],h3[data-v-753d9a5e],h4[data-v-753d9a5e],h5[data-v-753d9a5e],ol[data-v-753d9a5e],p[data-v-753d9a5e],ul[data-v-753d9a5e]{margin:0;font-size:14px}button[data-v-753d9a5e],input[data-v-753d9a5e],ol[data-v-753d9a5e],ul[data-v-753d9a5e]{padding:0}li[data-v-753d9a5e],ol[data-v-753d9a5e],ul[data-v-753d9a5e]{list-style:none;list-style-type:none}h1[data-v-753d9a5e],h2[data-v-753d9a5e],h3[data-v-753d9a5e],h4[data-v-753d9a5e],h5[data-v-753d9a5e]{font-size:100%}input[data-v-753d9a5e]{border:0;margin:0}img[data-v-753d9a5e]{width:100%}a[data-v-753d9a5e],button[data-v-753d9a5e],img[data-v-753d9a5e],input[data-v-753d9a5e],optgroup[data-v-753d9a5e],select[data-v-753d9a5e],textarea[data-v-753d9a5e]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-753d9a5e],img[data-v-753d9a5e]{-webkit-touch-callout:none;border:0}body[data-v-753d9a5e],html[data-v-753d9a5e]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-753d9a5e],img[data-v-753d9a5e],input[data-v-753d9a5e],textarea[data-v-753d9a5e]{vertical-align:middle;outline:none}body[data-v-753d9a5e]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-753d9a5e]{border-collapse:collapse;border-spacing:0}a[data-v-753d9a5e],table[data-v-753d9a5e]{color:#333}a[data-v-753d9a5e],a[data-v-753d9a5e]:hover{text-decoration:none}a[data-v-753d9a5e]:hover{color:#ff512b}.scrollbar-self[data-v-753d9a5e]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-753d9a5e]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-753d9a5e]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.ui-goods-info[data-v-753d9a5e]{display:flex;cursor:pointer}.ui-goods-info--img[data-v-753d9a5e]{width:100px;height:100px;border:1px solid #eee;background-size:contain;background-repeat:no-repeat;background-position:50%}.ui-goods-info p[data-v-753d9a5e]{width:270px;margin:7px 0 0 18px;text-align:left}.ui-goods-info p b[data-v-753d9a5e]{display:block;line-height:22px;margin-bottom:10px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.ui-goods-info p span[data-v-753d9a5e]{color:#999}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(217);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("ffa38b2a", content, true, context)
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

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UiLineBox.vue?vue&type=template&id=7bf25b0a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-line-box"},[_vm._ssrNode("<div class=\"ui-line-box--head\" data-v-7bf25b0a>","</div>",[_vm._t("head",function(){return [_c('b',{staticClass:"ui-line-box--title"},[_vm._v(_vm._s(_vm.title))])]})],2),_vm._ssrNode(" "),_vm._t("body")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UiLineBox.vue?vue&type=template&id=7bf25b0a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UiLineBox.vue?vue&type=script&lang=js&
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

/* harmony default export */ var UiLineBoxvue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/UiLineBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UiLineBoxvue_type_script_lang_js_ = (UiLineBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/UiLineBox.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(216)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UiLineBoxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7bf25b0a",
  "64014a43"
  
)

/* harmony default export */ var UiLineBox = __webpack_exports__["default"] = (component.exports);

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

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiLineBox_vue_vue_type_style_index_0_id_7bf25b0a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiLineBox_vue_vue_type_style_index_0_id_7bf25b0a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiLineBox_vue_vue_type_style_index_0_id_7bf25b0a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiLineBox_vue_vue_type_style_index_0_id_7bf25b0a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiLineBox_vue_vue_type_style_index_0_id_7bf25b0a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-7bf25b0a]{display:flex}.flex-inline[data-v-7bf25b0a]{display:inline-flex}.flex-inline[data-v-7bf25b0a]:after,.flex-inline[data-v-7bf25b0a]:before,.flex[data-v-7bf25b0a]:after,.flex[data-v-7bf25b0a]:before{display:none}.flex-left[data-v-7bf25b0a]{justify-content:flex-start}.flex-center[data-v-7bf25b0a]{justify-content:center}.flex-right[data-v-7bf25b0a]{justify-content:flex-end}.flex-between[data-v-7bf25b0a]{justify-content:space-between}.flex-around[data-v-7bf25b0a]{justify-content:space-around}.flex-stretch[data-v-7bf25b0a]{align-items:stretch}.flex-top[data-v-7bf25b0a]{align-items:flex-start}.flex-middle[data-v-7bf25b0a]{align-items:center}.flex-bottom[data-v-7bf25b0a]{align-items:flex-end}.flex-baseline[data-v-7bf25b0a]{align-items:baseline}.flex-row[data-v-7bf25b0a]{flex-direction:row}.flex-row-reverse[data-v-7bf25b0a]{flex-direction:row-reverse}.flex-column[data-v-7bf25b0a]{flex-direction:column}.flex-column-reverse[data-v-7bf25b0a]{flex-direction:column-reverse}.flex-nowrap[data-v-7bf25b0a]{flex-wrap:nowrap}.flex-wrap[data-v-7bf25b0a]{flex-wrap:wrap}.flex-wrap-reverse[data-v-7bf25b0a]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-7bf25b0a]{align-content:stretch}.flex-wrap-top[data-v-7bf25b0a]{align-content:flex-start}.flex-wrap-middle[data-v-7bf25b0a]{align-content:center}.flex-wrap-bottom[data-v-7bf25b0a]{align-content:flex-end}.flex-wrap-between[data-v-7bf25b0a]{align-content:space-between}.flex-wrap-around[data-v-7bf25b0a]{align-content:space-around}.flex-first[data-v-7bf25b0a]{order:-1}.flex-last[data-v-7bf25b0a]{order:99}.flex-none[data-v-7bf25b0a]{flex:none}.flex-auto[data-v-7bf25b0a]{flex:auto}.flex-1[data-v-7bf25b0a]{flex:1}.hover-text[data-v-7bf25b0a]:hover{color:#ff875b}.expend-click[data-v-7bf25b0a]{position:relative}.expend-click[data-v-7bf25b0a]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-7bf25b0a],[data-v-7bf25b0a]:after,[data-v-7bf25b0a]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-7bf25b0a],dd[data-v-7bf25b0a],dl[data-v-7bf25b0a],figure[data-v-7bf25b0a],form[data-v-7bf25b0a],h1[data-v-7bf25b0a],h2[data-v-7bf25b0a],h3[data-v-7bf25b0a],h4[data-v-7bf25b0a],h5[data-v-7bf25b0a],ol[data-v-7bf25b0a],p[data-v-7bf25b0a],ul[data-v-7bf25b0a]{margin:0;font-size:14px}button[data-v-7bf25b0a],input[data-v-7bf25b0a],ol[data-v-7bf25b0a],ul[data-v-7bf25b0a]{padding:0}li[data-v-7bf25b0a],ol[data-v-7bf25b0a],ul[data-v-7bf25b0a]{list-style:none;list-style-type:none}h1[data-v-7bf25b0a],h2[data-v-7bf25b0a],h3[data-v-7bf25b0a],h4[data-v-7bf25b0a],h5[data-v-7bf25b0a]{font-size:100%}input[data-v-7bf25b0a]{border:0;margin:0}img[data-v-7bf25b0a]{width:100%}a[data-v-7bf25b0a],button[data-v-7bf25b0a],img[data-v-7bf25b0a],input[data-v-7bf25b0a],optgroup[data-v-7bf25b0a],select[data-v-7bf25b0a],textarea[data-v-7bf25b0a]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-7bf25b0a],img[data-v-7bf25b0a]{-webkit-touch-callout:none;border:0}body[data-v-7bf25b0a],html[data-v-7bf25b0a]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-7bf25b0a],img[data-v-7bf25b0a],input[data-v-7bf25b0a],textarea[data-v-7bf25b0a]{vertical-align:middle;outline:none}body[data-v-7bf25b0a]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-7bf25b0a]{border-collapse:collapse;border-spacing:0}a[data-v-7bf25b0a],table[data-v-7bf25b0a]{color:#333}a[data-v-7bf25b0a],a[data-v-7bf25b0a]:hover{text-decoration:none}a[data-v-7bf25b0a]:hover{color:#ff512b}.scrollbar-self[data-v-7bf25b0a]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-7bf25b0a]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-7bf25b0a]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.ui-line-box[data-v-7bf25b0a]{border:1px solid #ddd}.ui-line-box--head[data-v-7bf25b0a]{height:42px;line-height:42px;padding:0 30px;background:#f8f8f8}.ui-line-box--title[data-v-7bf25b0a]{font-weight:400}", ""]);
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

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/order_status_close.8c04c86.png";

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(278);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("e5d103b8", content, true, context)
};

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(280);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("b54f4b64", content, true, context)
};

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(282);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("04120daa", content, true, context)
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

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/order_status_1.7d03209.png";

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/order_status_1_active.7567200.png";

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAAAXNSR0IArs4c6QAAAO1QTFRFAAAAAAAAgICAVVVVqqqqgICAZmZmkpKSn5+fjo6OkpKSmZmZh4eHjo6OkpKSl5eXkJCQlZWVj4+Pk5OTnp6eoqKiqKiorq6usrKysbGxtLS0uLi4t7e3uLi4vLy8ubm5vr6+wcHBwcHBwMDAxMTExMTEwsLCxMTEwsLCw8PDxsbGxMTEw8PDxMTEw8PDxMTExcXFxcXFx8fHx8fHx8fHx8fHyMjIysrKy8vLysrKycnJycnJysrKysrKy8vLy8vLysrKzMzMy8vLzMzMy8vLy8vLzMzMy8vLzMzMzMzMzMzMy8vLzMzMzMzMzMzMjAdVAgAAAE50Uk5TAAECAwMEBQcICQ4PERIVFhcYGRodISwvMjQ6PUBBREVTWl5hZ2hsbG1vb3BzdHd+hYmMkpaXorO0u77GxsnJ09Tb3t/i5unt8PT19/f7dXXoVQAAAgdJREFUWMOtmNlaAjEMhQsM4nRgKBPEXREX3EXcd1xxI+//ON6IyiTttNL/lvZ8JTltkhFCRxDKSqwSgETFFRkGwpFSVIUU1ahkvz+QCliUtDtLsZyAlqRczBTIS4MAAEAi82aFSQWZqEmDQC4CK6KcTqEQgyVxQRNHBdYoNqoTNXCgNsGcwUkBoEbOUVDgiErFIxeDM/FoXiL4B9GIo+Bf/PFYPiMQqzeD/tkSE45fr0vT/vr6HSIifq7Q3+RPPg03q779gN/0G/TODTNb1gpMHbzgL6d0Qfn7hdEeYuOvAOJgkR4jyIjEI47S1UVDn47dqxEu55ikCCFECcaixBuz3upqaNU5i5LXHuZ7qKU3n64NQgREofGMBp7T7ghESCRO0MhJannIpPTeLHFP0lohEphBanlFxONKxIyxHCWUSOwkntrNIelrIsBK4mUaNo+XeX9aSnRgH/Fjlpew+yNtOEfELbbUW4bzEPYQ32fYemKZ1P4crB0t8OXE1lr9w50hxFpyXF9I5po5SoTMZXeUCJgnx02iyj18bhIR9/y+mhVe6fNLzHVhlrigRYCktWmWaDKliBTErkmhwxVEWpZbt2/8/rfrFluWjc1BRkNetGpRTEjrRknbN+Z9tms+mkYfrauHBtpHG+9jmPAx0vgYrHyMdz6GTC+jro+B28vY7+Xjg+MnkC/tTrHhDlb03AAAAABJRU5ErkJggg=="

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/order_status_2_active.a1226a9.png";

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAAAXNSR0IArs4c6QAAAK5QTFRFAAAAAAAAgICAVVVVqqqqgICAZmZmkpKSn5+fjo6OkpKSmZmZh4eHjo6OkpKSl5eXkJCQlZWVj4+Pk5OTnp6epqamtLS0xMTEx8fHx8fHyMjIyMjIycnJycnJysrKycnJzMzMzMzMzMzMzMzMzc3Nz8/P0NDQ0dHR1tbW2NjY2tra29vb3t7e39/f4ODg4eHh4uLi4+Pj5+fn6urq7Ozs7u7u8PDw8vLy8/Pz9PT038ux8gAAACN0Uk5TAAECAwMEBQcICQ4PERIVFhcYGRodKDpwepeanqGlu8bw9/vYK1EVAAABzElEQVRYw62YaXOCMBCGUVEkQIxZtfbwTFt7WHtoD/7/H6vDaKtmExPY95PD4DNh92UPgsCkMGYZFxJACp6xOAw8FSUdOFEnidz/HzIBqARzO0szlWCUTJtnAXVmARQQVrcT2gLOSrQtgFoCTkpqJkKDg6N4wxBHAc4SaFRbXfBQt4WcwYuwZWjnaAjwlDiJR42Dt/hxXhIooeTIUVBKBx6ri3II8e91BiXF/vIpyyLkPrMplFa6qzD6IXo3M7XTBCb7n7PrnnaM0BSJoVIIQqmhIRp6OvpTA2La15JSVFr9EFfKgFCX2r0RaszB3IiYDzCLatUexsqIUGOtN2zzARUVBrF+8cIm7e4YS6myCUlrVhWRBbwqgiPG8kSIQFZFyACqIsABsXy/tSPOP8gq3yysD2IO593Tc6GPPP9+tIXTnNRNfqA3S1LN1vo8IPysLNYyG3yxXBVa5/nXg83gsUM41/eWcMbYy36CeHm1+iLESo6XtTpo4fNCJGj59UJEaBPwQQi8FfkgGN4QbYQ52hC1tjyyIEZoW6YYDghGFIpBiWBcoxgaKUZXggGaYoynWCYoVhqKxYpivaNYMklWXYqFm2TtJ/n44PkJ5BcRdDFsVl9teQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/order_status_3_active.68e9bd2.png";

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAAAXNSR0IArs4c6QAAAJlQTFRFAAAAAAAAgICAVVVVqqqqgICAZmZmkpKSn5+fjo6OkpKSmZmZh4eHjo6OkpKSl5eXkJCQlZWVj4+Pk5OTnp6epqamtLS0xMTEx8fHx8fHyMjIyMjIycnJycnJysrKycnJzMzMzMzMzMzMzMzMz8/P0dHR0tLS29vb3Nzc3d3d4uLi4+Pj6+vr7Ozs7e3t8PDw8fHx8vLy9PT0TYVdjQAAACN0Uk5TAAECAwMEBQcICQ4PERIVFhcYGRodKDpwepeanqGlu8bw9/vYK1EVAAAB1klEQVRYw62Ya3eCMAyGq6JIgVobde7itU7ndJvj//+4MadObFop5P3E4dDnhCTkAmM2BRFPhVQASoqURwHzVBj34Ea9OCx/PuASUElezpZ2osAqlbTvAprcAThCeNNN6Eq4K9l1ABoxlFLcsBFaAkpKtCx+lFBaEvVqpw8e6ncQG7wIOcOwoyXBU/LGHw0B3hLFuMRQQXEho6CSrnKsKash5H+uc6gofomnqopQ58gmUFnJqcKYRgxeFvqkGczOl4vngWFGYPPEWGsEofXY4g0zHMO5BTEfGkE5VlrTiCdtQehH49kQTczR0opYjrAUNao9TLUVoadGb8jjATUVsMi8+eCS8XSEhVS7hIQ1rYtImaiLEEhieSIkU3URikEZxGr/vbEhoBRi9ZllBzvC8SKvu7cLIdvbX8Thzvzk+5nwtba70xHUQ/bLKBKwoDpSa5OfzXZFApZargTfZn+6ImAJHrkisjUIGvnMAmdQt7cEjXzsSMm5PrE5fKyd2dlDC59Xgsdo+fVChGgT8EFIvBX5IDjeEF2EJdoQjbY8cSAmaFumGA4IRhSKQYlgXKMYGilGV4IBmmKMp1gmKFYaisWKYr2jWDJJVl2KhZtk7Sf5+eD5C+QHNS8wy/BrCrUAAAAASUVORK5CYII="

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/order_status_4_active.a03f475.png";

/***/ }),

/***/ 275:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAAAXNSR0IArs4c6QAAALFQTFRFAAAAAAAAgICAVVVVqqqqgICAZmZmkpKSn5+fjo6OkpKSmZmZh4eHjo6OkpKSl5eXkJCQlZWVj4+Pk5OTnp6eoqKiqqqqrKysqKiorq6uuLi4uLi4vLy8vr6+v7+/wcHBw8PDwsLCwsLCxMTExMTEx8fHyMjIx8fHyMjIycnJyMjIycnJycnJysrKycnJycnJysrKysrKysrKy8vLzMzMy8vLzMzMzMzMzMzMzMzMzMzM1VaF5AAAADp0Uk5TAAECAwMEBQcICQ4PERIVFhcYGRodISQrLC89QUxPV1phZWlsfpOam6KlprO0v8LGxsrQ2+nt8PT3+y0TSCAAAAHjSURBVFjDrZjZQsIwEEUDFEvTbchUBRVXRFFcAYH8/4f5INKmTdK0zH1M09NkMpmljJnkBTxOQCAKSGIeeKyh/DDFktLQd3/f44BaAXdbSz8SaJSI+rWALrcAEBEF79oJA8BawcAC6ITopLBjIvQSdFTSM9gR0FmgterJEBtoeKJZQyMC4rCyjh5gQ0HJHp0EGytRzyXEFgoVj8JWKvhYF9ohIPd1ji3FD+cp2iLE/8lG2FrRPsKI9gjhHWeJ3BpwDAIYY8x3n3/1vv2Zj9Uxv5Fj3u2klHI1rrho2owg5VzNDYx5roTbPUGu1XGPBY6EyWZPkDv1QaA90tPJzbmRIL/LxxprlryWcveYGQjyXp0ds2qsmfxt+jXTE57KkUfjWJ/7ubPDyKWFgMCqF2QrS4yLlYWAglVNkX9yViEssup8DWIhFUYdATUbKe58Vk8QuntatP/zsoaAwBLLbVD1lunTic619IyvM73nx4aYVWWYCMhN16zMMBIwMF52lWEmoGcOOUXGcmQkpLbA95ATxvbcbA6/UwcC+vYkMK0nQF0quv7YrF9G9amIICESpGWK4oCgRKEolAjKNYqikaJ0JSigKcp4imaCoqWhaKwo2juKJpOk1aVouEnafpKfDw1/gfwCg2Uy51sjKZkAAAAASUVORK5CYII="

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/order_status_5_active.fe5023a.png";

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusStep_vue_vue_type_style_index_0_id_768b1149_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(241);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusStep_vue_vue_type_style_index_0_id_768b1149_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusStep_vue_vue_type_style_index_0_id_768b1149_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusStep_vue_vue_type_style_index_0_id_768b1149_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatusStep_vue_vue_type_style_index_0_id_768b1149_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-768b1149]{display:flex}.flex-inline[data-v-768b1149]{display:inline-flex}.flex-inline[data-v-768b1149]:after,.flex-inline[data-v-768b1149]:before,.flex[data-v-768b1149]:after,.flex[data-v-768b1149]:before{display:none}.flex-left[data-v-768b1149]{justify-content:flex-start}.flex-center[data-v-768b1149]{justify-content:center}.flex-right[data-v-768b1149]{justify-content:flex-end}.flex-between[data-v-768b1149]{justify-content:space-between}.flex-around[data-v-768b1149]{justify-content:space-around}.flex-stretch[data-v-768b1149]{align-items:stretch}.flex-top[data-v-768b1149]{align-items:flex-start}.flex-middle[data-v-768b1149]{align-items:center}.flex-bottom[data-v-768b1149]{align-items:flex-end}.flex-baseline[data-v-768b1149]{align-items:baseline}.flex-row[data-v-768b1149]{flex-direction:row}.flex-row-reverse[data-v-768b1149]{flex-direction:row-reverse}.flex-column[data-v-768b1149]{flex-direction:column}.flex-column-reverse[data-v-768b1149]{flex-direction:column-reverse}.flex-nowrap[data-v-768b1149]{flex-wrap:nowrap}.flex-wrap[data-v-768b1149]{flex-wrap:wrap}.flex-wrap-reverse[data-v-768b1149]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-768b1149]{align-content:stretch}.flex-wrap-top[data-v-768b1149]{align-content:flex-start}.flex-wrap-middle[data-v-768b1149]{align-content:center}.flex-wrap-bottom[data-v-768b1149]{align-content:flex-end}.flex-wrap-between[data-v-768b1149]{align-content:space-between}.flex-wrap-around[data-v-768b1149]{align-content:space-around}.flex-first[data-v-768b1149]{order:-1}.flex-last[data-v-768b1149]{order:99}.flex-none[data-v-768b1149]{flex:none}.flex-auto[data-v-768b1149]{flex:auto}.flex-1[data-v-768b1149]{flex:1}.hover-text[data-v-768b1149]:hover{color:#ff875b}.expend-click[data-v-768b1149]{position:relative}.expend-click[data-v-768b1149]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-768b1149],[data-v-768b1149]:after,[data-v-768b1149]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-768b1149],dd[data-v-768b1149],dl[data-v-768b1149],figure[data-v-768b1149],form[data-v-768b1149],h1[data-v-768b1149],h2[data-v-768b1149],h3[data-v-768b1149],h4[data-v-768b1149],h5[data-v-768b1149],ol[data-v-768b1149],p[data-v-768b1149],ul[data-v-768b1149]{margin:0;font-size:14px}button[data-v-768b1149],input[data-v-768b1149],ol[data-v-768b1149],ul[data-v-768b1149]{padding:0}li[data-v-768b1149],ol[data-v-768b1149],ul[data-v-768b1149]{list-style:none;list-style-type:none}h1[data-v-768b1149],h2[data-v-768b1149],h3[data-v-768b1149],h4[data-v-768b1149],h5[data-v-768b1149]{font-size:100%}input[data-v-768b1149]{border:0;margin:0}img[data-v-768b1149]{width:100%}a[data-v-768b1149],button[data-v-768b1149],img[data-v-768b1149],input[data-v-768b1149],optgroup[data-v-768b1149],select[data-v-768b1149],textarea[data-v-768b1149]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-768b1149],img[data-v-768b1149]{-webkit-touch-callout:none;border:0}body[data-v-768b1149],html[data-v-768b1149]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-768b1149],img[data-v-768b1149],input[data-v-768b1149],textarea[data-v-768b1149]{vertical-align:middle;outline:none}body[data-v-768b1149]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-768b1149]{border-collapse:collapse;border-spacing:0}a[data-v-768b1149],table[data-v-768b1149]{color:#333}a[data-v-768b1149],a[data-v-768b1149]:hover{text-decoration:none}a[data-v-768b1149]:hover{color:#ff512b}.scrollbar-self[data-v-768b1149]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-768b1149]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-768b1149]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.step[data-v-768b1149]{padding:45px 65px 0;display:flex;flex:1;justify-content:space-between}.step li[data-v-768b1149]{flex:1;position:relative}.step li[data-v-768b1149]:after{display:block;content:\"........................................\";width:calc(100% - 65px);height:20px;line-height:0;overflow:hidden;position:absolute;color:#eee;font-size:40px;top:25px;left:-8px;z-index:1}.step li[data-v-768b1149]:first-child{flex:0}.step li[data-v-768b1149]:first-child:after{content:\"\"}.step li div[data-v-768b1149]{position:relative;z-index:2;width:80px;text-align:center;float:right}.step li img[data-v-768b1149]{width:66px}.step li b[data-v-768b1149]{display:block;margin:10px 0;color:#999}.step li span[data-v-768b1149]{display:block;color:#666;font-size:12px}.step li.active b[data-v-768b1149]{color:#ff875b}.step li.active[data-v-768b1149]:after{color:#fff3ed}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogisitcsInfo_vue_vue_type_style_index_0_id_c62742f6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(242);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogisitcsInfo_vue_vue_type_style_index_0_id_c62742f6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogisitcsInfo_vue_vue_type_style_index_0_id_c62742f6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogisitcsInfo_vue_vue_type_style_index_0_id_c62742f6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogisitcsInfo_vue_vue_type_style_index_0_id_c62742f6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-c62742f6]{display:flex}.flex-inline[data-v-c62742f6]{display:inline-flex}.flex-inline[data-v-c62742f6]:after,.flex-inline[data-v-c62742f6]:before,.flex[data-v-c62742f6]:after,.flex[data-v-c62742f6]:before{display:none}.flex-left[data-v-c62742f6]{justify-content:flex-start}.flex-center[data-v-c62742f6]{justify-content:center}.flex-right[data-v-c62742f6]{justify-content:flex-end}.flex-between[data-v-c62742f6]{justify-content:space-between}.flex-around[data-v-c62742f6]{justify-content:space-around}.flex-stretch[data-v-c62742f6]{align-items:stretch}.flex-top[data-v-c62742f6]{align-items:flex-start}.flex-middle[data-v-c62742f6]{align-items:center}.flex-bottom[data-v-c62742f6]{align-items:flex-end}.flex-baseline[data-v-c62742f6]{align-items:baseline}.flex-row[data-v-c62742f6]{flex-direction:row}.flex-row-reverse[data-v-c62742f6]{flex-direction:row-reverse}.flex-column[data-v-c62742f6]{flex-direction:column}.flex-column-reverse[data-v-c62742f6]{flex-direction:column-reverse}.flex-nowrap[data-v-c62742f6]{flex-wrap:nowrap}.flex-wrap[data-v-c62742f6]{flex-wrap:wrap}.flex-wrap-reverse[data-v-c62742f6]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-c62742f6]{align-content:stretch}.flex-wrap-top[data-v-c62742f6]{align-content:flex-start}.flex-wrap-middle[data-v-c62742f6]{align-content:center}.flex-wrap-bottom[data-v-c62742f6]{align-content:flex-end}.flex-wrap-between[data-v-c62742f6]{align-content:space-between}.flex-wrap-around[data-v-c62742f6]{align-content:space-around}.flex-first[data-v-c62742f6]{order:-1}.flex-last[data-v-c62742f6]{order:99}.flex-none[data-v-c62742f6]{flex:none}.flex-auto[data-v-c62742f6]{flex:auto}.flex-1[data-v-c62742f6]{flex:1}.hover-text[data-v-c62742f6]:hover{color:#ff875b}.expend-click[data-v-c62742f6]{position:relative}.expend-click[data-v-c62742f6]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-c62742f6],[data-v-c62742f6]:after,[data-v-c62742f6]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-c62742f6],dd[data-v-c62742f6],dl[data-v-c62742f6],figure[data-v-c62742f6],form[data-v-c62742f6],h1[data-v-c62742f6],h2[data-v-c62742f6],h3[data-v-c62742f6],h4[data-v-c62742f6],h5[data-v-c62742f6],ol[data-v-c62742f6],p[data-v-c62742f6],ul[data-v-c62742f6]{margin:0;font-size:14px}button[data-v-c62742f6],input[data-v-c62742f6],ol[data-v-c62742f6],ul[data-v-c62742f6]{padding:0}li[data-v-c62742f6],ol[data-v-c62742f6],ul[data-v-c62742f6]{list-style:none;list-style-type:none}h1[data-v-c62742f6],h2[data-v-c62742f6],h3[data-v-c62742f6],h4[data-v-c62742f6],h5[data-v-c62742f6]{font-size:100%}input[data-v-c62742f6]{border:0;margin:0}img[data-v-c62742f6]{width:100%}a[data-v-c62742f6],button[data-v-c62742f6],img[data-v-c62742f6],input[data-v-c62742f6],optgroup[data-v-c62742f6],select[data-v-c62742f6],textarea[data-v-c62742f6]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-c62742f6],img[data-v-c62742f6]{-webkit-touch-callout:none;border:0}body[data-v-c62742f6],html[data-v-c62742f6]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-c62742f6],img[data-v-c62742f6],input[data-v-c62742f6],textarea[data-v-c62742f6]{vertical-align:middle;outline:none}body[data-v-c62742f6]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-c62742f6]{border-collapse:collapse;border-spacing:0}a[data-v-c62742f6],table[data-v-c62742f6]{color:#333}a[data-v-c62742f6],a[data-v-c62742f6]:hover{text-decoration:none}a[data-v-c62742f6]:hover{color:#ff512b}.scrollbar-self[data-v-c62742f6]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-c62742f6]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-c62742f6]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.logisitcs[data-v-c62742f6]{display:flex;margin:30px 0}.logisitcs--info[data-v-c62742f6]{flex:1}.logisitcs--list[data-v-c62742f6]{width:670px;margin-left:28px}.title[data-v-c62742f6]{display:flex;justify-content:space-between}.title span[data-v-c62742f6]{color:#666}.title span small[data-v-c62742f6]{font-size:14px;color:#999;margin-left:15px}.info[data-v-c62742f6]{padding:20px 30px;color:#666}.info p[data-v-c62742f6]{display:flex;margin-bottom:20px}.info p label[data-v-c62742f6]{width:70px}.info p span[data-v-c62742f6]{flex:1}.list[data-v-c62742f6]{padding:30px;height:180px;overflow-y:auto}.list li[data-v-c62742f6]{position:relative;padding-left:20px;padding-bottom:20px;font-size:14px}.list li b[data-v-c62742f6]{display:block;line-height:14px;margin-bottom:10px}.list li span[data-v-c62742f6]{color:#999}.list li[data-v-c62742f6]:before{width:10px;height:10px;border-radius:50%;background:#1ebc20;left:0}.list li[data-v-c62742f6]:after,.list li[data-v-c62742f6]:before{display:block;content:\"\";position:absolute;top:2px}.list li[data-v-c62742f6]:after{height:100%;width:2px;left:5px;border-left:1px solid #1ebc20}.list li[data-v-c62742f6]:last-child{padding-bottom:0}.list li[data-v-c62742f6]:last-child:after{display:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodsInfo_vue_vue_type_style_index_0_id_6b724561_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(243);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodsInfo_vue_vue_type_style_index_0_id_6b724561_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodsInfo_vue_vue_type_style_index_0_id_6b724561_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodsInfo_vue_vue_type_style_index_0_id_6b724561_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoodsInfo_vue_vue_type_style_index_0_id_6b724561_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-6b724561]{display:flex}.flex-inline[data-v-6b724561]{display:inline-flex}.flex-inline[data-v-6b724561]:after,.flex-inline[data-v-6b724561]:before,.flex[data-v-6b724561]:after,.flex[data-v-6b724561]:before{display:none}.flex-left[data-v-6b724561]{justify-content:flex-start}.flex-center[data-v-6b724561]{justify-content:center}.flex-right[data-v-6b724561]{justify-content:flex-end}.flex-between[data-v-6b724561]{justify-content:space-between}.flex-around[data-v-6b724561]{justify-content:space-around}.flex-stretch[data-v-6b724561]{align-items:stretch}.flex-top[data-v-6b724561]{align-items:flex-start}.flex-middle[data-v-6b724561]{align-items:center}.flex-bottom[data-v-6b724561]{align-items:flex-end}.flex-baseline[data-v-6b724561]{align-items:baseline}.flex-row[data-v-6b724561]{flex-direction:row}.flex-row-reverse[data-v-6b724561]{flex-direction:row-reverse}.flex-column[data-v-6b724561]{flex-direction:column}.flex-column-reverse[data-v-6b724561]{flex-direction:column-reverse}.flex-nowrap[data-v-6b724561]{flex-wrap:nowrap}.flex-wrap[data-v-6b724561]{flex-wrap:wrap}.flex-wrap-reverse[data-v-6b724561]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-6b724561]{align-content:stretch}.flex-wrap-top[data-v-6b724561]{align-content:flex-start}.flex-wrap-middle[data-v-6b724561]{align-content:center}.flex-wrap-bottom[data-v-6b724561]{align-content:flex-end}.flex-wrap-between[data-v-6b724561]{align-content:space-between}.flex-wrap-around[data-v-6b724561]{align-content:space-around}.flex-first[data-v-6b724561]{order:-1}.flex-last[data-v-6b724561]{order:99}.flex-none[data-v-6b724561]{flex:none}.flex-auto[data-v-6b724561]{flex:auto}.flex-1[data-v-6b724561]{flex:1}.hover-text[data-v-6b724561]:hover{color:#ff875b}.expend-click[data-v-6b724561]{position:relative}.expend-click[data-v-6b724561]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-6b724561],[data-v-6b724561]:after,[data-v-6b724561]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-6b724561],dd[data-v-6b724561],dl[data-v-6b724561],figure[data-v-6b724561],form[data-v-6b724561],h1[data-v-6b724561],h2[data-v-6b724561],h3[data-v-6b724561],h4[data-v-6b724561],h5[data-v-6b724561],ol[data-v-6b724561],p[data-v-6b724561],ul[data-v-6b724561]{margin:0;font-size:14px}button[data-v-6b724561],input[data-v-6b724561],ol[data-v-6b724561],ul[data-v-6b724561]{padding:0}li[data-v-6b724561],ol[data-v-6b724561],ul[data-v-6b724561]{list-style:none;list-style-type:none}h1[data-v-6b724561],h2[data-v-6b724561],h3[data-v-6b724561],h4[data-v-6b724561],h5[data-v-6b724561]{font-size:100%}input[data-v-6b724561]{border:0;margin:0}img[data-v-6b724561]{width:100%}a[data-v-6b724561],button[data-v-6b724561],img[data-v-6b724561],input[data-v-6b724561],optgroup[data-v-6b724561],select[data-v-6b724561],textarea[data-v-6b724561]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-6b724561],img[data-v-6b724561]{-webkit-touch-callout:none;border:0}body[data-v-6b724561],html[data-v-6b724561]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-6b724561],img[data-v-6b724561],input[data-v-6b724561],textarea[data-v-6b724561]{vertical-align:middle;outline:none}body[data-v-6b724561]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-6b724561]{border-collapse:collapse;border-spacing:0}a[data-v-6b724561],table[data-v-6b724561]{color:#333}a[data-v-6b724561],a[data-v-6b724561]:hover{text-decoration:none}a[data-v-6b724561]:hover{color:#ff512b}.scrollbar-self[data-v-6b724561]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-6b724561]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-6b724561]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.goods[data-v-6b724561]{width:100%;border:1px solid #ddd;margin-top:30px}.goods th[data-v-6b724561]{height:42px;background:#f8f8f8;font-weight:400}.goods td[data-v-6b724561]{text-align:center;border:1px solid #ddd;padding:10px 20px}.goods td.not-border[data-v-6b724561]{border-left:0;border-right:0}.goods tbody tr:first-child td[data-v-6b724561]{padding-top:20px}.goods tbody tr:last-child td[data-v-6b724561]{padding-bottom:20px}.message[data-v-6b724561]{border:1px solid #ddd;border-top:0;padding:30px}.message[data-v-6b724561],.message p[data-v-6b724561]{display:flex;justify-content:space-between}.message p[data-v-6b724561]{width:250px}.message p[data-v-6b724561]:nth-child(2){margin:20px 0}.message--pay-amount[data-v-6b724561]{color:#ff512b;font-weight:700}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(381);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1b955f5e", content, true, context)
};

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


/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index/order/detail/module/StatusStep.vue?vue&type=template&id=768b1149&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"step"},[_vm._ssrNode((_vm._ssrList((_vm.steps),function(item){return ("<li"+(_vm._ssrClass(null,item.active && 'active'))+" data-v-768b1149><div data-v-768b1149><img"+(_vm._ssrAttr("src",item.active ? item.iconActive :item.icon))+" data-v-768b1149> <b data-v-768b1149>"+_vm._ssrEscape(_vm._s(item.name))+"</b> <span data-v-768b1149>"+_vm._ssrEscape(_vm._s(item.date))+"</span> <span data-v-768b1149>"+_vm._ssrEscape(_vm._s(item.time))+"</span></div></li>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/index/order/detail/module/StatusStep.vue?vue&type=template&id=768b1149&scoped=true&

// EXTERNAL MODULE: ./components/UiButton.vue + 4 modules
var UiButton = __webpack_require__(15);

// EXTERNAL MODULE: ./plugins/utils/index.js + 1 modules
var utils = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index/order/detail/module/StatusStep.vue?vue&type=script&lang=js&
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



/* harmony default export */ var StatusStepvue_type_script_lang_js_ = ({
  components: {
    UiButton: UiButton["default"]
  },
  props: {
    orderInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {};
  },
  computed: {
    steps() {
      const defaultStep = [{
        id: 1,
        name: '提交订单',
        icon: __webpack_require__(267),
        iconActive: __webpack_require__(268)
      }, {
        id: 6,
        name: '支付订单',
        icon: __webpack_require__(269),
        iconActive: __webpack_require__(270)
      }, {
        id: 7,
        name: '平台发货',
        icon: __webpack_require__(271),
        iconActive: __webpack_require__(272)
      }, {
        id: 8,
        name: '确认收货',
        icon: __webpack_require__(273),
        iconActive: __webpack_require__(274)
      }];
      let showStep = [];
      const logs = this.orderInfo.orderLogs;
      if (!logs) {
        return [];
      }
      if (this.orderInfo.orderStatus === 2) {
        logs.forEach(item => {
          const cur = defaultStep.find(i => i.id === item.operationType);
          if (cur) {
            showStep.push({
              ...cur,
              date: Object(utils["c" /* FormatDate */])(item.createTime, 'yyyy-mm-dd'),
              time: Object(utils["c" /* FormatDate */])(item.createTime, 'hh:ii:ss'),
              active: true
            });
          }
        });
        const createTime = logs[logs.length - 1].createTime;
        showStep.push({
          type: -1,
          name: '交易关闭',
          active: true,
          date: Object(utils["c" /* FormatDate */])(createTime, 'yyyy-mm-dd'),
          time: Object(utils["c" /* FormatDate */])(createTime, 'hh:ii:ss'),
          icon: __webpack_require__(240),
          iconActive: __webpack_require__(240)
        });
      } else {
        showStep = defaultStep.map(item => {
          const cur = logs.find(i => i.operationType === item.id);
          if (cur) {
            item.active = true;
            item.date = Object(utils["c" /* FormatDate */])(cur.createTime, 'yyyy-mm-dd');
            item.time = Object(utils["c" /* FormatDate */])(cur.createTime, 'hh:ii:ss');
            item.createTime = cur.createTime;
          }
          return item;
        });
        let lastLog = logs[logs.length - 1];
        let lastStep = {
          type: -1,
          name: '交易完成',
          icon: __webpack_require__(275),
          iconActive: __webpack_require__(276)
        };
        if (lastLog.operationType === 8) {
          lastStep.createTime = lastLog.createTime;
          lastStep.active = true;
        }
        showStep.push(lastStep);
      }
      return showStep;
    }
  },
  methods: {}
});
// CONCATENATED MODULE: ./pages/account/index/order/detail/module/StatusStep.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_StatusStepvue_type_script_lang_js_ = (StatusStepvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/account/index/order/detail/module/StatusStep.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(277)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_StatusStepvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "768b1149",
  "0d73af27"
  
)

/* harmony default export */ var StatusStep = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index/order/detail/module/LogisitcsInfo.vue?vue&type=template&id=c62742f6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"logisitcs"},[_c('UiLineBox',{staticClass:"logisitcs--info",attrs:{"title":"收货人信息"}},[_c('div',{staticClass:"info",attrs:{"slot":"body"},slot:"body"},[_c('p',[_c('label',[_vm._v("收货人：")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.logisitcsInfo.recipientName))])]),_vm._v(" "),_c('p',[_c('label',[_vm._v("手机号码：")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.logisitcsInfo.recipientPhone))])]),_vm._v(" "),_c('p',[_c('label',[_vm._v("收货地址：")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.logisitcsInfo.recipientAddress))])])])]),_vm._ssrNode(" "),(_vm.orderInfo.orderStatus >= 4)?_c('UiLineBox',{staticClass:"logisitcs--list"},[_c('div',{staticClass:"title",attrs:{"slot":"head"},slot:"head"},[_c('b',[_vm._v("物流信息")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.logisitcsInfo.companyName)),_c('small',[_vm._v(_vm._s(_vm.logisitcsInfo.trackingNo))])])]),_vm._v(" "),_c('ul',{staticClass:"list",attrs:{"slot":"body"},slot:"body"},_vm._l((_vm.logisitcsList),function(item,idx){return _c('li',{key:idx},[_c('b',{staticClass:"item--time"},[_vm._v(_vm._s(item.time))]),_vm._v(" "),_c('span',{staticClass:"item--ctx"},[_vm._v(_vm._s(item.context))])])}),0)]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/index/order/detail/module/LogisitcsInfo.vue?vue&type=template&id=c62742f6&scoped=true&

// EXTERNAL MODULE: ./components/UiLineBox.vue + 4 modules
var UiLineBox = __webpack_require__(212);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index/order/detail/module/LogisitcsInfo.vue?vue&type=script&lang=js&
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
    UiLineBox: UiLineBox["default"]
  },
  props: {
    orderInfo: {
      type: Object,
      defalut: () => ({})
    }
  },
  computed: {
    logisitcsInfo() {
      return this.orderInfo.logistics || {};
    },
    logisitcsList() {
      return this.logisitcsInfo.logisticsDataList || [];
    }
  }
});
// CONCATENATED MODULE: ./pages/account/index/order/detail/module/LogisitcsInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_LogisitcsInfovue_type_script_lang_js_ = (LogisitcsInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/account/index/order/detail/module/LogisitcsInfo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(279)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_LogisitcsInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c62742f6",
  "6853db5e"
  
)

/* harmony default export */ var LogisitcsInfo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UiLineBox: __webpack_require__(212).default})


/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index/order/detail/module/GoodsInfo.vue?vue&type=template&id=6b724561&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<table class=\"goods\" data-v-6b724561>","</table>",[_vm._ssrNode("<thead data-v-6b724561><tr data-v-6b724561><th data-v-6b724561>商品信息</th> <th width=\"96\" data-v-6b724561>单价</th> <th width=\"96\" data-v-6b724561>数量</th> "+((_vm.orderInfo.orderStatus > 2)?("<th width=\"163\" data-v-6b724561>实付款</th>"):"<!---->")+" <th width=\"135\" data-v-6b724561>操作</th></tr></thead> "),_vm._ssrNode("<tbody data-v-6b724561>","</tbody>",_vm._l((_vm.products),function(i){return _vm._ssrNode("<tr data-v-6b724561>","</tr>",[_vm._ssrNode("<td class=\"not-border\" data-v-6b724561>","</td>",[_c('UIGoodsInfo',{attrs:{"goods":i}})],1),_vm._ssrNode(" "),_vm._ssrNode("<td class=\"not-border\" data-v-6b724561>","</td>",[_c('UiMoney',{attrs:{"money":i.realAmount,"float":""}})],1),_vm._ssrNode(" <td class=\"not-border\" data-v-6b724561>"+_vm._ssrEscape(_vm._s(i.quantity))+"</td> "),(_vm.orderInfo.orderStatus > 2)?_vm._ssrNode("<td data-v-6b724561>","</td>",[_c('UiMoney',{attrs:{"money":i.realAmount,"float":""}})],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<td data-v-6b724561>","</td>",[(i.afterSaleApplyFlag || [2,3,4].includes(i.detailStatus))?[(i.afterSaleApplyFlag)?_c('nuxt-link',{attrs:{"to":"/account/order/saleAfter/list"}},[_vm._v("申请售后")]):_c('span',[_vm._v("\n\t\t\t\t\t\t\t\t"+_vm._s(i.detailStatus === 2 ? '退款中' :  i.detailStatus === 3 ? '已退款' : '退款关闭')+"\n\t\t\t\t\t\t\t")])]:_vm._e()],2)],2)}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"message\" data-v-6b724561>","</div>",[_vm._ssrNode("<div data-v-6b724561><label data-v-6b724561>买家留言</label> <span data-v-6b724561>"+_vm._ssrEscape(_vm._s(_vm.orderInfo.userMessage || '无'))+"</span></div> "),_vm._ssrNode("<div data-v-6b724561>","</div>",[_vm._ssrNode("<p data-v-6b724561>","</p>",[_vm._ssrNode("<label data-v-6b724561>商品总额</label> "),_c('UiMoney',{attrs:{"money":_vm.orderInfo.totalAmount,"float":""}})],2),_vm._ssrNode(" "),_vm._ssrNode("<p data-v-6b724561>","</p>",[_vm._ssrNode("<label data-v-6b724561>运费</label> "),_c('UiMoney',{attrs:{"money":_vm.orderInfo.shippingAmount,"float":""}})],2),_vm._ssrNode(" "),(_vm.orderInfo.orderStatus > 2)?_vm._ssrNode("<p data-v-6b724561>","</p>",[_vm._ssrNode("<label data-v-6b724561>"+_vm._ssrEscape("\n\t\t\t\t\t\t"+_vm._s(_vm.orderInfo.orderStatus == 1 ? '应付款：' : '实付款：')+"\n\t\t\t\t\t")+"</label> "),_c('UiMoney',{staticClass:"message--pay-amount",attrs:{"size":"20px","preSize":"14px","sufSize":"14px","money":_vm.orderInfo.payAmount,"float":"","prefix":"","suffix":""}})],2):_vm._e()],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/index/order/detail/module/GoodsInfo.vue?vue&type=template&id=6b724561&scoped=true&

// EXTERNAL MODULE: ./components/UIGoodsInfo.vue + 4 modules
var UIGoodsInfo = __webpack_require__(176);

// EXTERNAL MODULE: ./components/UiMoney.vue + 4 modules
var UiMoney = __webpack_require__(76);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index/order/detail/module/GoodsInfo.vue?vue&type=script&lang=js&
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
//
//
//
//
//



/* harmony default export */ var GoodsInfovue_type_script_lang_js_ = ({
  components: {
    UIGoodsInfo: UIGoodsInfo["default"],
    UiMoney: UiMoney["default"]
  },
  props: {
    orderInfo: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    products() {
      return this.orderInfo.products || [];
    }
  }
});
// CONCATENATED MODULE: ./pages/account/index/order/detail/module/GoodsInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_GoodsInfovue_type_script_lang_js_ = (GoodsInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/account/index/order/detail/module/GoodsInfo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(281)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_GoodsInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6b724561",
  "fafa7c2a"
  
)

/* harmony default export */ var GoodsInfo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UIGoodsInfo: __webpack_require__(176).default,UiMoney: __webpack_require__(76).default})


/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0ca353d4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(329);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0ca353d4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0ca353d4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0ca353d4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0ca353d4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-0ca353d4]{display:flex}.flex-inline[data-v-0ca353d4]{display:inline-flex}.flex-inline[data-v-0ca353d4]:after,.flex-inline[data-v-0ca353d4]:before,.flex[data-v-0ca353d4]:after,.flex[data-v-0ca353d4]:before{display:none}.flex-left[data-v-0ca353d4]{justify-content:flex-start}.flex-center[data-v-0ca353d4]{justify-content:center}.flex-right[data-v-0ca353d4]{justify-content:flex-end}.flex-between[data-v-0ca353d4]{justify-content:space-between}.flex-around[data-v-0ca353d4]{justify-content:space-around}.flex-stretch[data-v-0ca353d4]{align-items:stretch}.flex-top[data-v-0ca353d4]{align-items:flex-start}.flex-middle[data-v-0ca353d4]{align-items:center}.flex-bottom[data-v-0ca353d4]{align-items:flex-end}.flex-baseline[data-v-0ca353d4]{align-items:baseline}.flex-row[data-v-0ca353d4]{flex-direction:row}.flex-row-reverse[data-v-0ca353d4]{flex-direction:row-reverse}.flex-column[data-v-0ca353d4]{flex-direction:column}.flex-column-reverse[data-v-0ca353d4]{flex-direction:column-reverse}.flex-nowrap[data-v-0ca353d4]{flex-wrap:nowrap}.flex-wrap[data-v-0ca353d4]{flex-wrap:wrap}.flex-wrap-reverse[data-v-0ca353d4]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-0ca353d4]{align-content:stretch}.flex-wrap-top[data-v-0ca353d4]{align-content:flex-start}.flex-wrap-middle[data-v-0ca353d4]{align-content:center}.flex-wrap-bottom[data-v-0ca353d4]{align-content:flex-end}.flex-wrap-between[data-v-0ca353d4]{align-content:space-between}.flex-wrap-around[data-v-0ca353d4]{align-content:space-around}.flex-first[data-v-0ca353d4]{order:-1}.flex-last[data-v-0ca353d4]{order:99}.flex-none[data-v-0ca353d4]{flex:none}.flex-auto[data-v-0ca353d4]{flex:auto}.flex-1[data-v-0ca353d4]{flex:1}.hover-text[data-v-0ca353d4]:hover{color:#ff875b}.expend-click[data-v-0ca353d4]{position:relative}.expend-click[data-v-0ca353d4]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-0ca353d4],[data-v-0ca353d4]:after,[data-v-0ca353d4]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-0ca353d4],dd[data-v-0ca353d4],dl[data-v-0ca353d4],figure[data-v-0ca353d4],form[data-v-0ca353d4],h1[data-v-0ca353d4],h2[data-v-0ca353d4],h3[data-v-0ca353d4],h4[data-v-0ca353d4],h5[data-v-0ca353d4],ol[data-v-0ca353d4],p[data-v-0ca353d4],ul[data-v-0ca353d4]{margin:0;font-size:14px}button[data-v-0ca353d4],input[data-v-0ca353d4],ol[data-v-0ca353d4],ul[data-v-0ca353d4]{padding:0}li[data-v-0ca353d4],ol[data-v-0ca353d4],ul[data-v-0ca353d4]{list-style:none;list-style-type:none}h1[data-v-0ca353d4],h2[data-v-0ca353d4],h3[data-v-0ca353d4],h4[data-v-0ca353d4],h5[data-v-0ca353d4]{font-size:100%}input[data-v-0ca353d4]{border:0;margin:0}img[data-v-0ca353d4]{width:100%}a[data-v-0ca353d4],button[data-v-0ca353d4],img[data-v-0ca353d4],input[data-v-0ca353d4],optgroup[data-v-0ca353d4],select[data-v-0ca353d4],textarea[data-v-0ca353d4]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-0ca353d4],img[data-v-0ca353d4]{-webkit-touch-callout:none;border:0}body[data-v-0ca353d4],html[data-v-0ca353d4]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-0ca353d4],img[data-v-0ca353d4],input[data-v-0ca353d4],textarea[data-v-0ca353d4]{vertical-align:middle;outline:none}body[data-v-0ca353d4]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-0ca353d4]{border-collapse:collapse;border-spacing:0}a[data-v-0ca353d4],table[data-v-0ca353d4]{color:#333}a[data-v-0ca353d4],a[data-v-0ca353d4]:hover{text-decoration:none}a[data-v-0ca353d4]:hover{color:#ff512b}.scrollbar-self[data-v-0ca353d4]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-0ca353d4]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-0ca353d4]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.box[data-v-0ca353d4]{min-width:1000px;border:1px solid #ddd;border-radius:4px;display:flex;margin:0 0 30px}.pay-type[data-v-0ca353d4]{margin:30px 0;border:1px solid #ddd;background:#f8f8f8;height:59px;line-height:59px;padding:0 30px;display:flex;justify-content:space-between}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index/order/detail/index.vue?vue&type=template&id=0ca353d4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"box\" data-v-0ca353d4>","</div>",[_c('StatusInfo',{attrs:{"orderInfo":_vm.orderInfo},on:{"changeStatus":_vm.getOrderInfo}}),_vm._ssrNode(" "),_c('StatusStep',{attrs:{"orderInfo":_vm.orderInfo}})],2),_vm._ssrNode(" "),(_vm.orderInfo.orderType !== _vm.ORDER_TYPE.VIRTUAL)?_c('LogisitcsInfo',{attrs:{"orderInfo":_vm.orderInfo}}):_vm._e(),_vm._ssrNode(" "+((_vm.orderInfo.payType !== 1)?("<div class=\"pay-type\" data-v-0ca353d4><p data-v-0ca353d4>"+_vm._ssrEscape("支付方式："+_vm._s(_vm.orderInfo.payTypeDesc))+"</p> <p data-v-0ca353d4>"+_vm._ssrEscape("支付时间："+_vm._s(_vm.orderInfo.payTime))+"</p></div>"):"<!---->")+" "),_c('GoodsInfo',{attrs:{"orderInfo":_vm.orderInfo}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/index/order/detail/index.vue?vue&type=template&id=0ca353d4&scoped=true&

// EXTERNAL MODULE: ./plugins/api/order.js
var order = __webpack_require__(166);

// CONCATENATED MODULE: ./plugins/dicts/order.js
/*
 * @Author: ch
 * @Date: 2022-05-26 11:49:16
 * @LastEditors: ch
 * @LastEditTime: 2022-05-26 17:00:06
 * @Description: file content
 */

// 订单状态
const ORDER_STATUS = {
  // 待支付
  AWAIT_PAY: 1
};
const ORDER_TYPE = {
  //(1, "普通订单"),
  NORMAL: 1,
  //(2, "免费订单"),
  FREE: 2,
  //(3, "秒杀订单"),
  SECKILL: 3,
  //(4, "虚拟商品订单"),
  VIRTUAL: 4
};
// EXTERNAL MODULE: ./pages/account/index/order/detail/module/StatusInfo.vue + 4 modules
var StatusInfo = __webpack_require__(345);

// EXTERNAL MODULE: ./pages/account/index/order/detail/module/StatusStep.vue + 4 modules
var StatusStep = __webpack_require__(346);

// EXTERNAL MODULE: ./pages/account/index/order/detail/module/LogisitcsInfo.vue + 4 modules
var LogisitcsInfo = __webpack_require__(347);

// EXTERNAL MODULE: ./pages/account/index/order/detail/module/GoodsInfo.vue + 4 modules
var GoodsInfo = __webpack_require__(348);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index/order/detail/index.vue?vue&type=script&lang=js&
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







/* harmony default export */ var detailvue_type_script_lang_js_ = ({
  components: {
    StatusInfo: StatusInfo["default"],
    StatusStep: StatusStep["default"],
    LogisitcsInfo: LogisitcsInfo["default"],
    GoodsInfo: GoodsInfo["default"]
  },
  data() {
    return {
      ORDER_TYPE: ORDER_TYPE,
      orderInfo: {
        orderType: ORDER_TYPE.VIRTUAL
      }
    };
  },
  mounted() {
    this.getOrderInfo();
  },
  methods: {
    /**
     * 获取订单最新信息
     */
    async getOrderInfo() {
      const {
        error,
        result
      } = await Object(order["d" /* ApiGetOrderDetail */])(this.$route.query.id);
      if (error) {
        this.$message.warning(error.message);
        return false;
      }
      this.orderInfo = {
        ...result
      };
    }
  }
});
// CONCATENATED MODULE: ./pages/account/index/order/detail/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var order_detailvue_type_script_lang_js_ = (detailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/account/index/order/detail/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(380)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  order_detailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0ca353d4",
  "f89bc210"
  
)

/* harmony default export */ var detail = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map