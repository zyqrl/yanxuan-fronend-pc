exports.ids = [49,1,7,8,50,51,52];
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

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(233);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4168185a", content, true, context)
};

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ApiGetAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ApiPostAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ApiPutAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiDeleteAddress; });
/* harmony import */ var _axiosTk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/*
 * @Author: ch
 * @Date: 2022-05-04 18:24:03
 * @LastEditors: ch
 * @LastEditTime: 2022-05-07 10:28:22
 * @Description: file content
 */



const BASE_URL = `${_config_env__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].base_url}/mall/base`;

/**
 * 获取收货地址
 */
const ApiGetAddress = () => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].get(`${BASE_URL}/receiveAddress`));
/**
 * 新增收货地址
 */
const ApiPostAddress = data => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].post(`${BASE_URL}/receiveAddress`, data));
/**
 * 收货地址修改
 */
const ApiPutAddress = data => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].put(`${BASE_URL}/receiveAddress`, data));
/**
 * 收货删除
 */
const ApiDeleteAddress = data => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].delete(`${BASE_URL}/receiveAddress?idList=${data.idList}`));

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BsAddress.vue?vue&type=template&id=0b4ba7e5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(!_vm.isOperation && !_vm.isAccount)?_vm._ssrNode("<div class=\"address flex flex-middle\" data-v-0b4ba7e5>","</div>",[_vm._ssrNode("<article class=\"address__msg\" data-v-0b4ba7e5>","</article>",[_vm._ssrNode("<div class=\"address__msg-line flex flex-middle\" data-v-0b4ba7e5>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(229)))+" alt=\"收货地址\" data-v-0b4ba7e5> <span class=\"address__msg-line--txt\" data-v-0b4ba7e5>默认地址</span> "),_c('UiButton',{attrs:{"type":"yellow_panel"},on:{"click":function($event){return _vm.onEdit()}}},[_vm._v("修改")])],2),_vm._ssrNode(" <div class=\"address__msg-line flex flex-middle\" data-v-0b4ba7e5><span class=\"address__msg-line--type\" data-v-0b4ba7e5>收货地址:</span> <span class=\"address__msg-line--txt\" data-v-0b4ba7e5>"+_vm._ssrEscape(_vm._s(_vm.curAddressListItem.province +
          _vm.curAddressListItem.city +
          _vm.curAddressListItem.area +
          _vm.curAddressListItem.detailAddress))+"</span></div> <div class=\"address__msg-line flex flex-middle\" data-v-0b4ba7e5><span class=\"address__msg-line--type\" data-v-0b4ba7e5>收 货 人 :</span> <span class=\"address__msg-line--txt\" data-v-0b4ba7e5>"+_vm._ssrEscape(_vm._s(_vm.curAddressListItem.name))+"</span></div> <div class=\"address__msg-line flex flex-middle\" data-v-0b4ba7e5><span class=\"address__msg-line--type\" data-v-0b4ba7e5>手机号码:</span> <span class=\"address__msg-line--txt\" data-v-0b4ba7e5>"+_vm._ssrEscape(_vm._s(_vm.curAddressListItem.phone))+"</span></div>")],2),_vm._ssrNode(" <div class=\"hr\" data-v-0b4ba7e5></div> "),_vm._ssrNode("<div class=\"address__operation flex flex-column flex-middle\" data-v-0b4ba7e5>","</div>",[_c('UiButton',{staticClass:"flex flex-middle",attrs:{"type":"grey"},on:{"click":_vm.onSwtich}},[_c('img',{staticClass:"icon",attrs:{"src":__webpack_require__(230),"alt":"切换地址"}}),_vm._v("\n        切换地址\n      ")]),_vm._ssrNode(" "),_c('UiButton',{staticClass:"flex flex-middle",attrs:{"type":"grey"},on:{"click":function($event){_vm.isOperation = true}}},[_c('img',{staticClass:"icon",attrs:{"src":__webpack_require__(231),"alt":"新建地址"}}),_vm._v("\n        新建地址\n      ")])],2)],2):_vm._ssrNode("<div"+(_vm._ssrClass("address",_vm.isAccount ? 'account' : 'flex flex-middle'))+" data-v-0b4ba7e5>","</div>",[_vm._ssrNode("<article class=\"address__msg\" data-v-0b4ba7e5>","</article>",[_vm._ssrNode("<div class=\"address__msg-line flex flex-middle\" data-v-0b4ba7e5>","</div>",[_vm._ssrNode("<span class=\"address__msg-line--type\" data-v-0b4ba7e5>所在区域</span> "),_c('no-ssr',[_c('v-distpicker',{attrs:{"province":_vm.selectData.province.value,"city":_vm.selectData.city.value,"area":_vm.selectData.area.value},on:{"selected":_vm.onSelected}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"address__msg-line flex flex-middle\" data-v-0b4ba7e5>","</div>",[_vm._ssrNode("<span class=\"address__msg-line--type\" data-v-0b4ba7e5>详细地址</span> "),_c('el-input',{staticClass:"max-ipt",attrs:{"type":"textarea","rows":3,"maxlength":"30"},model:{value:(_vm.detailAddress),callback:function ($$v) {_vm.detailAddress=$$v},expression:"detailAddress"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"address__msg-line flex flex-middle\" data-v-0b4ba7e5>","</div>",[_vm._ssrNode("<span class=\"address__msg-line--type\" data-v-0b4ba7e5>收货人</span> "),_c('el-input',{staticClass:"min-ipt",attrs:{"maxlength":"8"},model:{value:(_vm.addressUser),callback:function ($$v) {_vm.addressUser=$$v},expression:"addressUser"}}),_vm._ssrNode(" <span class=\"address__msg-line--type\" data-v-0b4ba7e5>手机号码</span> "),_c('el-input',{staticClass:"min-ipt",attrs:{"oninput":"value=value.replace(/[^\\d]/g,'')","maxlength":"18"},model:{value:(_vm.addressPhone),callback:function ($$v) {_vm.addressPhone=$$v},expression:"addressPhone"}})],2)],2),_vm._ssrNode(" "+((!_vm.isAccount)?("<div class=\"hr\" data-v-0b4ba7e5></div>"):"<!---->")+" "),_vm._ssrNode("<div"+(_vm._ssrClass("address__edit flex flex-middle",!_vm.isAccount ? 'flex-column' : ''))+" data-v-0b4ba7e5>","</div>",[_c('el-checkbox',{model:{value:(_vm.defaultAddress),callback:function ($$v) {_vm.defaultAddress=$$v},expression:"defaultAddress"}},[_vm._v("设为默认地址")]),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("address__edit--btns flex flex-middle",_vm.isAccount ? 'clearmargin' : ''))+" data-v-0b4ba7e5>","</div>",[(_vm.addressList[0]&&_vm.addressList[0].id && !_vm.isAccount)?_c('UiButton',{attrs:{"type":"grey"},on:{"click":function($event){return _vm.onCanceloperation()}}},[_vm._v("取消")]):_vm._e(),_vm._ssrNode(" "),_c('UiButton',{attrs:{"type":"yellow_panel"},on:{"click":_vm.onAddAddress}},[_vm._v(_vm._s(_vm.getEditState ? "保存" : "新增")+"地址")])],2)],2)],2),_vm._ssrNode(" "),_c('el-dialog',{attrs:{"title":"选择地址","center":"","visible":_vm.dialogVisible,"width":"380px"},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('div',{staticClass:"address__list"},_vm._l((_vm.addressList),function(item){return _c('section',{key:item.id,staticClass:"address__list-item",class:item.id == _vm.curAddressListItem.id ? 'address__list-active' : '',on:{"click":function($event){return _vm.onAddressItem(item)}}},[_c('div',{staticClass:"address__list-item--name"},[_c('span',{staticClass:"address__list-item--label"},[_vm._v("收 货 人 ：")]),_vm._v(_vm._s(item.name)+"\n        ")]),_vm._v(" "),_c('div',{staticClass:"address__list-item--phone"},[_c('span',{staticClass:"address__list-item--label"},[_vm._v("手机号码：")]),_vm._v(_vm._s(item.phone)+"\n        ")]),_vm._v(" "),_c('div',{staticClass:"address__list-item--detail"},[_c('span',{staticClass:"address__list-item--label"},[_vm._v("收货地址：")]),_vm._v("\n          "+_vm._s(item.province + item.city + item.area + item.detailAddress)+"\n        ")])])}),0),_vm._v(" "),_c('span',{staticClass:"dialog-footer flex flex-between",attrs:{"slot":"footer"},slot:"footer"},[_c('UiButton',{attrs:{"type":"grey"},on:{"click":_vm.onCancel}},[_vm._v("取消")]),_vm._v(" "),_c('UiButton',{attrs:{"type":"yellow_panel"}},[_vm._v("确认")])],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BsAddress.vue?vue&type=template&id=0b4ba7e5&scoped=true&

// EXTERNAL MODULE: ./components/UiButton.vue + 4 modules
var UiButton = __webpack_require__(15);

// EXTERNAL MODULE: ./plugins/utils/index.js + 1 modules
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./plugins/api/base.js
var base = __webpack_require__(226);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BsAddress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var BsAddressvue_type_script_lang_js_ = ({
  components: {
    UiButton: UiButton["default"]
  },
  props: {
    addressData: {
      type: Object,
      default: () => {}
    },
    isAccount: {
      type: Boolean,
      default: false
    },
    isParentEdit: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: "addressData",
    event: "emitAddress"
  },
  computed: {
    getEditState() {
      return this.isEdit || this.isParentEdit;
    }
  },
  data() {
    return {
      isEdit: false,
      isOperation: false,
      dialogVisible: false,
      detailAddress: "",
      addressUser: "",
      addressPhone: "",
      defaultAddress: false,
      selectData: {
        area: {
          value: ""
        },
        city: {
          value: ""
        },
        province: {
          value: ""
        }
      },
      addressList: [{}],
      curAddressListItem: 0,
      editIndex: 0
    };
  },
  created() {
    this.getAddressData();
  },
  methods: {
    onCanceloperation() {
      let vm = this;
      vm.isOperation = false;
      vm.clearForm();
      vm.$emit("onSaveSuccess");
    },
    onEdit() {
      let vm = this;
      let curIndex = vm.addressList.findIndex(item => item.id == vm.curAddressListItem.id);
      vm.isOperation = true;
      vm.isEdit = true;
      vm.setAddressData(curIndex);
    },
    async getAddressData() {
      let vm = this;
      let res = await Object(base["b" /* ApiGetAddress */])();
      if (res.result && res.result.length) {
        vm.isOperation = false;
        vm.addressList = res.result;
        let curIndex = vm.addressList.findIndex(item => item.isDefault);
        vm.curAddressListItem = curIndex > -1 ? vm.addressList[curIndex] : vm.addressList[0];
        vm.$emit("getList", vm.addressList);
        vm.$emit("emitAddress", vm.curAddressListItem);
      } else {
        vm.defaultAddress = true;
        vm.isOperation = true;
        vm.addressList = [];
        vm.$emit("getList", vm.addressList);
      }
      console.log("获取收货地址", res);
    },
    setAddressData(i) {
      let vm = this;
      vm.editIndex = i;
      let editItem = vm.addressList[i];
      console.log(editItem);
      vm.$set(vm.selectData.area, "value", editItem.area);
      vm.$set(vm.selectData.city, "value", editItem.city);
      vm.$set(vm.selectData.province, "value", editItem.province);
      vm.$set(vm.selectData.area, "code", editItem.areaCode);
      vm.$set(vm.selectData.city, "code", editItem.cityCode);
      vm.$set(vm.selectData.province, "code", editItem.provinceCode);
      vm.$set(vm, "detailAddress", editItem.detailAddress);
      vm.$set(vm, "defaultAddress", editItem.isDefault);
      vm.$set(vm, "addressUser", editItem.name);
      vm.$set(vm, "addressPhone", editItem.phone);
    },
    onSwtich() {
      this.dialogVisible = true;
    },
    onCancel() {
      this.dialogVisible = false;
    },
    onSelected(data) {
      this.selectData = data;
    },
    async onAddAddress() {
      var _vm$selectData, _vm$selectData$area;
      let vm = this;
      let curItem = vm.addressList[vm.editIndex];
      console.log(`vm.addressPhone != curItem.phone`, vm.addressPhone, curItem);
      if (!((_vm$selectData = vm.selectData) !== null && _vm$selectData !== void 0 && (_vm$selectData$area = _vm$selectData.area) !== null && _vm$selectData$area !== void 0 && _vm$selectData$area.code)) {
        vm.$message.error("请选择所在区域~");
        return;
      }
      if (!vm.detailAddress) {
        vm.$message.error("请输入详细地址~");
        return;
      }
      if (!vm.addressUser) {
        vm.$message.error("请输入收货人~");
        return;
      }
      if (!Object(utils["e" /* IsPhone */])(vm.addressPhone) && vm.addressPhone != curItem.phone) {
        vm.$message.error("请输入收货人手机号码~");
        return;
      }
      let params = {
        area: vm.selectData.area.value,
        areaCode: vm.selectData.area.code,
        city: vm.selectData.city.value,
        cityCode: vm.selectData.city.code,
        detailAddress: vm.detailAddress,
        isDefault: vm.defaultAddress,
        name: vm.addressUser,
        phone: vm.addressPhone,
        province: vm.selectData.province.value,
        provinceCode: vm.selectData.province.code
      };
      let res;
      if (vm.getEditState) {
        let editParams = Object.assign(vm.addressList[vm.editIndex], params);
        res = await Object(base["d" /* ApiPutAddress */])(editParams);
      } else {
        res = await Object(base["c" /* ApiPostAddress */])(params);
      }
      if (!res.error) {
        vm.$message.success("添加成功!");
        vm.clearForm();
        vm.$emit("onSaveSuccess");
        vm.isEdit = false;
        vm.getAddressData();
      }
      console.log(res);
    },
    onAddressItem(item) {
      let vm = this;
      vm.curAddressListItem = item;
      vm.$emit("emitAddress", item);
      vm.dialogVisible = false;
    },
    clearForm() {
      let vm = this;
      vm.$set(vm.selectData.area, "value", "");
      vm.$set(vm.selectData.city, "value", "");
      vm.$set(vm.selectData.province, "value", "");
      vm.$set(vm.selectData.area, "code", "");
      vm.$set(vm.selectData.city, "code", "");
      vm.$set(vm.selectData.province, "code", "");
      vm.$set(vm, "detailAddress", "");
      vm.$set(vm, "defaultAddress", false);
      vm.$set(vm, "addressUser", "");
      vm.$set(vm, "addressPhone", "");
    }
  }
});
// CONCATENATED MODULE: ./components/BsAddress.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BsAddressvue_type_script_lang_js_ = (BsAddressvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BsAddress.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(232)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BsAddressvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0b4ba7e5",
  "e0814eba"
  
)

/* harmony default export */ var BsAddress = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UiButton: __webpack_require__(15).default})


/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAAAXNSR0IArs4c6QAAA1pJREFUSEuNlU9oHUUcx7/f3Rz6IIeQVKi3V6jYxkM2MysoCm1BIR4KSgUrRiio4EVsQaEHRaGGHixYQfCgYqAFIyJ6KDTgQQVFwZ1hT68VC30HDwX7HgUDm0Pf/uS3zIZh+xKc0+5vZz7z/f1dYsrq9/v75ufnTwJYAfAkgP1h2x0AvwDY9N5/DeBe9zi7BmPMCwA+IHlo2mWtTURuAngngHe2xsAZY8yHJM+Er7cBrIvIzwD0sK5DJI8COA3ggBpE5JL3/u1W7Q7QGPNRCxORi+Px+N3hcLi9R0jOk3wrgp7V5waobpLcCIdfc859vpe77TdjzCrJywF6St1nSMB1kn1VFuT/H16zx1p7AcA5ERmOx+MjNMa8RPIKgNuj0ehg7ObS0tIjaZqe00yT3BaRTZJrzjnNdrNU0MLCwi2NqYisKvArkqcAXHTOaXCbtby8fJTkVZKzHbl/V1X16GAw0KR1VW4o8FZw9xnv/Wa06S/NqtadiKwlSTJb1/UFLScR2fDevxjFcoXkNXWb1toKwD4AR5xzN4K6PEmSPwBsTyaTB8uyvKv2LMuOpWn6o9qdc73o8sMArqtdFf4b3NoB5nl+TET04B3n3ANTDsI5t1Ny1toGKCJbqlDJh0XkhPf+alAyl6bpPwBmSL5aFMUX+myt/SwUdemcW44uehbAdwBuqMIvSZ4WkU+8929Em85ra4Uauxm8aLoDwHPOue+jvZ8CeF1E1lVhQxeRu3VdH2zjFRQpVLthJoA1lme99+stLMuyuSRJNLFzelETB2ttk1ERueK9fzkuE2vtfhHJSW6NRqOi247GmMskV7XfnXMPNcAoCfp6xjn3caf2pr5aa98EcEk/kjxeFMVP8XB4j+T74WObiF25eZ6/IiJNz4uIjrG15mx8Ipo497R7iqL4dhoxz/OTWtwa2zC+mklzHzDE8xsAz2tN1XW9UpblrzE0y7InkiTRnp7tdsxUoN5qjLlG8imFJkmSF0XxZ4j1w3VdFwGmv4ET3d/Afb8APbi4uDjb6/V+APCYTqHJZPK42tM0/S1M6t+rqnp6MBhsdUMyFRigB3q9nraftlXT4+1zVVXH42kTQ3cF6qYsy/qRKjU1asuyHO6W/j2BIUmqUPtUl7Zcq3Yq8z/R/p7ajLDCGwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAdZJREFUOE+tVL9P20AUfk/BEQODIzF06MCQZGPIgESlDlk7dShRWRA32Jd0YODvgAGpS3O21ZPapUoHVqZmQIIBCSS2CESqMlaKBwZ0ju+hFzlVRJ1UDXg6+c7f+36dEZ7pwXlxGo3GUqfTuRt/PxdQq9VasdZeIqLXbre/MdgIqF6vL1QqlfeIuJBNOFZKXU+yZQalUuld9m4ZAPZ5TUSfkiTZHQF5nvcSEb+MkBFdAFgcDAZrk9SllLz/moj6vI+I6xlQbK1d+0sas6tWqycAcKGU8vmwlHKbiA6IaDUMw9tM2g0AnBljGlrrfq5HQogVx3HOiegNEf0uFArnALCllDpk4EymMMaEWuv7Px7lJed53vpwOLwoFovMjj3bmZXwzNSklB/ZF2PMq/HkaWBTgZrN5lsi+pqmaQ0Rl8MwPP1vRlmKlwCwG8fxd9d1fwHAZhAERxMebfd6vXa32x3mepSl9gMA+kqpLT7k+75AxD1rbe1xammabkRR9HMkTQjxwnEc7gkXknu0FMdxbbJHvu9/Zr8A4HZqj5hFuVzeHDfbWnscRdHV42a7rrsxbjYzzAqpkyT58KS7RkQ7QRDomT36119BCOFqreMn3f68IXNJywN6ACnq2f0UZFfYAAAAAElFTkSuQmCC"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAkdJREFUOE+tlMFrE0EUxr832QQPHgx4LFq1QQVFBW9SCYKiIILYQAXBhd3Z4EFUUKQHKR68CSIIJm92cW8qiAoiFBQa8Q/w0IMliRDBQw8eBC9lSWZkQjas6UopOKflse/3vve9N0P4T4fyOPV6/YgxxgVwFsDU6J+eMWaJiBrM/G0y7y+Q67rbisXiIwDzQohwMBi8dxynZ5P6/f60EOISAFsgbLfbd1qtVj8FjkEWUiqVPgBYB3CZmX/mqfV9f0oI8dwY86vT6VxMYWOQlPIpEc202+1z2UpSygtEtIuZn6TgkfJlAB+VUvdsfAiSUh4FsExElUklQRAsWp+YWWYVuq47XSqVVgaDwbEoirpDUBAE1pd1Zl6YbEdKuUBEeydBozxljFmzqlLQV631tTAMWzmg20S0Pw8kpTxPRHeZeTYF/RZCHG40Gr16vX5Fa31iPA0iuwo7AHzKFFlVSj32PO9QoVB4x8x7NoB83z8lhJi1Eyeivtb6JICdQojXxhgHgENEq81m82UeaEVrfX2rrfm+PyeEuJFtzZoNZr61FbOllM+IqMvMD4ateZ43UygUvmitD4Zh+CML+9f405wkSSpxHK+NF3K0AseTJDkdx7Hd7uEJguCMMWa3UkqlsVqttr1cLn8G8JaZ748X0n5Uq1WnUqm8scZqreejKPqed0WCINgH4JUxpquUqm24axnYIhHdBPDCVjTGDC8tgAMA7N7MAXiYKskFpUHbvxDiKhFVM8+I9W4pSZLIejKpNvc9ymtps9gfIoMKInkSIL0AAAAASUVORK5CYII="

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsAddress_vue_vue_type_style_index_0_id_0b4ba7e5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(210);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsAddress_vue_vue_type_style_index_0_id_0b4ba7e5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsAddress_vue_vue_type_style_index_0_id_0b4ba7e5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsAddress_vue_vue_type_style_index_0_id_0b4ba7e5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsAddress_vue_vue_type_style_index_0_id_0b4ba7e5_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(40);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(234);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-0b4ba7e5]{display:flex}.flex-inline[data-v-0b4ba7e5]{display:inline-flex}.flex-inline[data-v-0b4ba7e5]:after,.flex-inline[data-v-0b4ba7e5]:before,.flex[data-v-0b4ba7e5]:after,.flex[data-v-0b4ba7e5]:before{display:none}.flex-left[data-v-0b4ba7e5]{justify-content:flex-start}.flex-center[data-v-0b4ba7e5]{justify-content:center}.flex-right[data-v-0b4ba7e5]{justify-content:flex-end}.flex-between[data-v-0b4ba7e5]{justify-content:space-between}.flex-around[data-v-0b4ba7e5]{justify-content:space-around}.flex-stretch[data-v-0b4ba7e5]{align-items:stretch}.flex-top[data-v-0b4ba7e5]{align-items:flex-start}.flex-middle[data-v-0b4ba7e5]{align-items:center}.flex-bottom[data-v-0b4ba7e5]{align-items:flex-end}.flex-baseline[data-v-0b4ba7e5]{align-items:baseline}.flex-row[data-v-0b4ba7e5]{flex-direction:row}.flex-row-reverse[data-v-0b4ba7e5]{flex-direction:row-reverse}.flex-column[data-v-0b4ba7e5]{flex-direction:column}.flex-column-reverse[data-v-0b4ba7e5]{flex-direction:column-reverse}.flex-nowrap[data-v-0b4ba7e5]{flex-wrap:nowrap}.flex-wrap[data-v-0b4ba7e5]{flex-wrap:wrap}.flex-wrap-reverse[data-v-0b4ba7e5]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-0b4ba7e5]{align-content:stretch}.flex-wrap-top[data-v-0b4ba7e5]{align-content:flex-start}.flex-wrap-middle[data-v-0b4ba7e5]{align-content:center}.flex-wrap-bottom[data-v-0b4ba7e5]{align-content:flex-end}.flex-wrap-between[data-v-0b4ba7e5]{align-content:space-between}.flex-wrap-around[data-v-0b4ba7e5]{align-content:space-around}.flex-first[data-v-0b4ba7e5]{order:-1}.flex-last[data-v-0b4ba7e5]{order:99}.flex-none[data-v-0b4ba7e5]{flex:none}.flex-auto[data-v-0b4ba7e5]{flex:auto}.flex-1[data-v-0b4ba7e5]{flex:1}.hover-text[data-v-0b4ba7e5]:hover{color:#ff875b}.expend-click[data-v-0b4ba7e5]{position:relative}.expend-click[data-v-0b4ba7e5]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-0b4ba7e5],[data-v-0b4ba7e5]:after,[data-v-0b4ba7e5]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-0b4ba7e5],dd[data-v-0b4ba7e5],dl[data-v-0b4ba7e5],figure[data-v-0b4ba7e5],form[data-v-0b4ba7e5],h1[data-v-0b4ba7e5],h2[data-v-0b4ba7e5],h3[data-v-0b4ba7e5],h4[data-v-0b4ba7e5],h5[data-v-0b4ba7e5],ol[data-v-0b4ba7e5],p[data-v-0b4ba7e5],ul[data-v-0b4ba7e5]{margin:0;font-size:14px}button[data-v-0b4ba7e5],input[data-v-0b4ba7e5],ol[data-v-0b4ba7e5],ul[data-v-0b4ba7e5]{padding:0}li[data-v-0b4ba7e5],ol[data-v-0b4ba7e5],ul[data-v-0b4ba7e5]{list-style:none;list-style-type:none}h1[data-v-0b4ba7e5],h2[data-v-0b4ba7e5],h3[data-v-0b4ba7e5],h4[data-v-0b4ba7e5],h5[data-v-0b4ba7e5]{font-size:100%}input[data-v-0b4ba7e5]{border:0;margin:0}img[data-v-0b4ba7e5]{width:100%}a[data-v-0b4ba7e5],button[data-v-0b4ba7e5],img[data-v-0b4ba7e5],input[data-v-0b4ba7e5],optgroup[data-v-0b4ba7e5],select[data-v-0b4ba7e5],textarea[data-v-0b4ba7e5]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-0b4ba7e5],img[data-v-0b4ba7e5]{-webkit-touch-callout:none;border:0}body[data-v-0b4ba7e5],html[data-v-0b4ba7e5]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-0b4ba7e5],img[data-v-0b4ba7e5],input[data-v-0b4ba7e5],textarea[data-v-0b4ba7e5]{vertical-align:middle;outline:none}body[data-v-0b4ba7e5]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-0b4ba7e5]{border-collapse:collapse;border-spacing:0}a[data-v-0b4ba7e5],table[data-v-0b4ba7e5]{color:#333}a[data-v-0b4ba7e5],a[data-v-0b4ba7e5]:hover{text-decoration:none}a[data-v-0b4ba7e5]:hover{color:#ff512b}.scrollbar-self[data-v-0b4ba7e5]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-0b4ba7e5]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-0b4ba7e5]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.address[data-v-0b4ba7e5]{width:1200px;margin:0 auto;min-height:189px;border:1px solid #ddd;padding:28px 34px 8px}.address__msg[data-v-0b4ba7e5]{width:776px}.address__msg-line[data-v-0b4ba7e5]{margin-bottom:20px}.address__msg-line img[data-v-0b4ba7e5]{width:20px;height:24px;margin-right:14px}.address__msg-line--type[data-v-0b4ba7e5]{width:70px;color:#999}.address__msg-line--txt[data-v-0b4ba7e5],.address__msg-line--type[data-v-0b4ba7e5]{font-size:14px;font-family:Source Han Sans CN-Regular,Source Han Sans CN;font-weight:400}.address__msg-line--txt[data-v-0b4ba7e5]{color:#333}.address__msg-line[data-v-0b4ba7e5] .ui-button__yellow_panel{width:62px;height:30px;color:#ff875b;background:rgba(255,135,91,.1);border-radius:4px 4px 4px 4px;margin-left:54px}.address__msg-line .max-ipt[data-v-0b4ba7e5]{width:450px}.address__msg-line .min-ipt[data-v-0b4ba7e5]{width:164px;margin-right:50px}.address__msg-line .min-ipt[data-v-0b4ba7e5] .el-input__inner{width:164px;height:28px;background:#fff;border-radius:2px;border:1px solid rgba(0,0,0,.15)}.address .hr[data-v-0b4ba7e5]{width:2px;height:107px;background:#eee}.address__operation[data-v-0b4ba7e5]{flex:1}.address__operation[data-v-0b4ba7e5] .ui-button__grey{width:114px;font-size:14px;font-family:Source Han Sans CN-Regular,Source Han Sans CN;font-weight:400;color:#666}.address__operation[data-v-0b4ba7e5] .ui-button__grey:first-child{margin-bottom:30px}.address__operation .icon[data-v-0b4ba7e5]{width:18px;height:18px;margin-right:10px}.address__edit[data-v-0b4ba7e5]{flex:1}.address__edit--btns[data-v-0b4ba7e5]{margin-top:30px}.address__edit--btns[data-v-0b4ba7e5] .ui-button__grey{width:90px;height:30px;font-size:14px;font-family:Source Han Sans CN-Regular,Source Han Sans CN;font-weight:400;color:#666;margin-right:38px}.address__edit .clearmargin[data-v-0b4ba7e5]{margin:0 0 0 20px}.address__list[data-v-0b4ba7e5]{height:265px;overflow-y:auto;scrollbar-width:none}.address__list[data-v-0b4ba7e5]::-webkit-scrollbar{width:4px}.address__list[data-v-0b4ba7e5]::-webkit-scrollbar-track{border-radius:10px;background-color:#fff}.address__list[data-v-0b4ba7e5]::-webkit-scrollbar-thumb{border-radius:10px;background-color:#eee}.address__list-item[data-v-0b4ba7e5]{width:320px;height:120px;border:1px solid #ddd;margin-bottom:24px;cursor:pointer;padding:16px 20px}.address__list-item>div[data-v-0b4ba7e5]{margin-bottom:10px}.address__list-item--detail[data-v-0b4ba7e5]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.address__list-item--label[data-v-0b4ba7e5]{font-size:14px;font-family:Source Han Sans CN-Regular,Source Han Sans CN;font-weight:400;color:#999}.address__list-active[data-v-0b4ba7e5]{border:1px solid #ff875b;position:relative}.address__list-active[data-v-0b4ba7e5]:after{content:\"\";position:absolute;right:0;bottom:0;width:24px;height:24px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.dialog-footer[data-v-0b4ba7e5] .ui-button{width:150px;height:36px;background:#fff;border-radius:2px 2px 2px 2px;border:1px solid #eee;font-size:14px;font-family:Microsoft YaHei-Regular,Microsoft YaHei;font-weight:400;color:#000}.dialog-footer[data-v-0b4ba7e5] .ui-button__yellow_panel{background:#ff875b;color:#fff}[data-v-0b4ba7e5] .distpicker-address-wrapper select{width:164px;height:28px;background:#fff;border-radius:2px 2px 2px 2px;border:1px solid rgba(0,0,0,.15);font-size:14px;font-family:Microsoft YaHei-Regular,Microsoft YaHei;font-weight:400;color:#333;padding:0}.account[data-v-0b4ba7e5]{width:1000px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQRJREFUSEu11c8KAUEcwPHvOkg5OLhtjvICykN4AId9CicXhYuUN3CUEjfFwQso5QlcnDYOcnBQ/hWtTSy7a2bN7GVvn+/8ZmrGQON3a1l1Q5fv4GA0tASeuLN45YF3XHngE1ca8MOVBYJwJYEw/O/AL/yvgAgeOSCKRwrI4NIBWVwqEAUXDkTFhQJCeDIFpQpcL9BreC7o0MvOFy8UIRaD+cSFHNyqQtqEzQq6NbFA4MrLHUgkYTGF+fiF79bQb8Jh/zsQui2ZnLsd8QScj+5/a8Og9YX7noHQnr9H7CUM23A5+T6OnjMQwp+MmYVcHmajQNwzgRQu8ZA/JtCFPybQiTuBO1Reapid3sfgAAAAAElFTkSuQmCC"

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(312);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("17d3f316", content, true, context)
};

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(314);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("26768c8b", content, true, context)
};

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(316);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("997766ac", content, true, context)
};

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderInfo_vue_vue_type_style_index_0_id_75dc7a4c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(255);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderInfo_vue_vue_type_style_index_0_id_75dc7a4c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderInfo_vue_vue_type_style_index_0_id_75dc7a4c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderInfo_vue_vue_type_style_index_0_id_75dc7a4c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderInfo_vue_vue_type_style_index_0_id_75dc7a4c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-75dc7a4c]{display:flex}.flex-inline[data-v-75dc7a4c]{display:inline-flex}.flex-inline[data-v-75dc7a4c]:after,.flex-inline[data-v-75dc7a4c]:before,.flex[data-v-75dc7a4c]:after,.flex[data-v-75dc7a4c]:before{display:none}.flex-left[data-v-75dc7a4c]{justify-content:flex-start}.flex-center[data-v-75dc7a4c]{justify-content:center}.flex-right[data-v-75dc7a4c]{justify-content:flex-end}.flex-between[data-v-75dc7a4c]{justify-content:space-between}.flex-around[data-v-75dc7a4c]{justify-content:space-around}.flex-stretch[data-v-75dc7a4c]{align-items:stretch}.flex-top[data-v-75dc7a4c]{align-items:flex-start}.flex-middle[data-v-75dc7a4c]{align-items:center}.flex-bottom[data-v-75dc7a4c]{align-items:flex-end}.flex-baseline[data-v-75dc7a4c]{align-items:baseline}.flex-row[data-v-75dc7a4c]{flex-direction:row}.flex-row-reverse[data-v-75dc7a4c]{flex-direction:row-reverse}.flex-column[data-v-75dc7a4c]{flex-direction:column}.flex-column-reverse[data-v-75dc7a4c]{flex-direction:column-reverse}.flex-nowrap[data-v-75dc7a4c]{flex-wrap:nowrap}.flex-wrap[data-v-75dc7a4c]{flex-wrap:wrap}.flex-wrap-reverse[data-v-75dc7a4c]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-75dc7a4c]{align-content:stretch}.flex-wrap-top[data-v-75dc7a4c]{align-content:flex-start}.flex-wrap-middle[data-v-75dc7a4c]{align-content:center}.flex-wrap-bottom[data-v-75dc7a4c]{align-content:flex-end}.flex-wrap-between[data-v-75dc7a4c]{align-content:space-between}.flex-wrap-around[data-v-75dc7a4c]{align-content:space-around}.flex-first[data-v-75dc7a4c]{order:-1}.flex-last[data-v-75dc7a4c]{order:99}.flex-none[data-v-75dc7a4c]{flex:none}.flex-auto[data-v-75dc7a4c]{flex:auto}.flex-1[data-v-75dc7a4c]{flex:1}.hover-text[data-v-75dc7a4c]:hover{color:#ff875b}.expend-click[data-v-75dc7a4c]{position:relative}.expend-click[data-v-75dc7a4c]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-75dc7a4c],[data-v-75dc7a4c]:after,[data-v-75dc7a4c]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-75dc7a4c],dd[data-v-75dc7a4c],dl[data-v-75dc7a4c],figure[data-v-75dc7a4c],form[data-v-75dc7a4c],h1[data-v-75dc7a4c],h2[data-v-75dc7a4c],h3[data-v-75dc7a4c],h4[data-v-75dc7a4c],h5[data-v-75dc7a4c],ol[data-v-75dc7a4c],p[data-v-75dc7a4c],ul[data-v-75dc7a4c]{margin:0;font-size:14px}button[data-v-75dc7a4c],input[data-v-75dc7a4c],ol[data-v-75dc7a4c],ul[data-v-75dc7a4c]{padding:0}li[data-v-75dc7a4c],ol[data-v-75dc7a4c],ul[data-v-75dc7a4c]{list-style:none;list-style-type:none}h1[data-v-75dc7a4c],h2[data-v-75dc7a4c],h3[data-v-75dc7a4c],h4[data-v-75dc7a4c],h5[data-v-75dc7a4c]{font-size:100%}input[data-v-75dc7a4c]{border:0;margin:0}img[data-v-75dc7a4c]{width:100%}a[data-v-75dc7a4c],button[data-v-75dc7a4c],img[data-v-75dc7a4c],input[data-v-75dc7a4c],optgroup[data-v-75dc7a4c],select[data-v-75dc7a4c],textarea[data-v-75dc7a4c]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-75dc7a4c],img[data-v-75dc7a4c]{-webkit-touch-callout:none;border:0}body[data-v-75dc7a4c],html[data-v-75dc7a4c]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-75dc7a4c],img[data-v-75dc7a4c],input[data-v-75dc7a4c],textarea[data-v-75dc7a4c]{vertical-align:middle;outline:none}body[data-v-75dc7a4c]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-75dc7a4c]{border-collapse:collapse;border-spacing:0}a[data-v-75dc7a4c],table[data-v-75dc7a4c]{color:#333}a[data-v-75dc7a4c],a[data-v-75dc7a4c]:hover{text-decoration:none}a[data-v-75dc7a4c]:hover{color:#ff512b}.scrollbar-self[data-v-75dc7a4c]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-75dc7a4c]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-75dc7a4c]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.goods[data-v-75dc7a4c]{width:100%;border:1px solid #ddd}.goods th[data-v-75dc7a4c]{height:42px;background:#f8f8f8;color:#999;font-weight:400}.goods td[data-v-75dc7a4c]{text-align:center;padding:10px 20px}.goods tbody tr:first-child td[data-v-75dc7a4c]{padding-top:20px}.goods tbody tr:last-child td[data-v-75dc7a4c]{padding-bottom:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_37d7066d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(256);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_37d7066d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_37d7066d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_37d7066d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_37d7066d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-37d7066d]{display:flex}.flex-inline[data-v-37d7066d]{display:inline-flex}.flex-inline[data-v-37d7066d]:after,.flex-inline[data-v-37d7066d]:before,.flex[data-v-37d7066d]:after,.flex[data-v-37d7066d]:before{display:none}.flex-left[data-v-37d7066d]{justify-content:flex-start}.flex-center[data-v-37d7066d]{justify-content:center}.flex-right[data-v-37d7066d]{justify-content:flex-end}.flex-between[data-v-37d7066d]{justify-content:space-between}.flex-around[data-v-37d7066d]{justify-content:space-around}.flex-stretch[data-v-37d7066d]{align-items:stretch}.flex-top[data-v-37d7066d]{align-items:flex-start}.flex-middle[data-v-37d7066d]{align-items:center}.flex-bottom[data-v-37d7066d]{align-items:flex-end}.flex-baseline[data-v-37d7066d]{align-items:baseline}.flex-row[data-v-37d7066d]{flex-direction:row}.flex-row-reverse[data-v-37d7066d]{flex-direction:row-reverse}.flex-column[data-v-37d7066d]{flex-direction:column}.flex-column-reverse[data-v-37d7066d]{flex-direction:column-reverse}.flex-nowrap[data-v-37d7066d]{flex-wrap:nowrap}.flex-wrap[data-v-37d7066d]{flex-wrap:wrap}.flex-wrap-reverse[data-v-37d7066d]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-37d7066d]{align-content:stretch}.flex-wrap-top[data-v-37d7066d]{align-content:flex-start}.flex-wrap-middle[data-v-37d7066d]{align-content:center}.flex-wrap-bottom[data-v-37d7066d]{align-content:flex-end}.flex-wrap-between[data-v-37d7066d]{align-content:space-between}.flex-wrap-around[data-v-37d7066d]{align-content:space-around}.flex-first[data-v-37d7066d]{order:-1}.flex-last[data-v-37d7066d]{order:99}.flex-none[data-v-37d7066d]{flex:none}.flex-auto[data-v-37d7066d]{flex:auto}.flex-1[data-v-37d7066d]{flex:1}.hover-text[data-v-37d7066d]:hover{color:#ff875b}.expend-click[data-v-37d7066d]{position:relative}.expend-click[data-v-37d7066d]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-37d7066d],[data-v-37d7066d]:after,[data-v-37d7066d]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-37d7066d],dd[data-v-37d7066d],dl[data-v-37d7066d],figure[data-v-37d7066d],form[data-v-37d7066d],h1[data-v-37d7066d],h2[data-v-37d7066d],h3[data-v-37d7066d],h4[data-v-37d7066d],h5[data-v-37d7066d],ol[data-v-37d7066d],p[data-v-37d7066d],ul[data-v-37d7066d]{margin:0;font-size:14px}button[data-v-37d7066d],input[data-v-37d7066d],ol[data-v-37d7066d],ul[data-v-37d7066d]{padding:0}li[data-v-37d7066d],ol[data-v-37d7066d],ul[data-v-37d7066d]{list-style:none;list-style-type:none}h1[data-v-37d7066d],h2[data-v-37d7066d],h3[data-v-37d7066d],h4[data-v-37d7066d],h5[data-v-37d7066d]{font-size:100%}input[data-v-37d7066d]{border:0;margin:0}img[data-v-37d7066d]{width:100%}a[data-v-37d7066d],button[data-v-37d7066d],img[data-v-37d7066d],input[data-v-37d7066d],optgroup[data-v-37d7066d],select[data-v-37d7066d],textarea[data-v-37d7066d]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-37d7066d],img[data-v-37d7066d]{-webkit-touch-callout:none;border:0}body[data-v-37d7066d],html[data-v-37d7066d]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-37d7066d],img[data-v-37d7066d],input[data-v-37d7066d],textarea[data-v-37d7066d]{vertical-align:middle;outline:none}body[data-v-37d7066d]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-37d7066d]{border-collapse:collapse;border-spacing:0}a[data-v-37d7066d],table[data-v-37d7066d]{color:#333}a[data-v-37d7066d],a[data-v-37d7066d]:hover{text-decoration:none}a[data-v-37d7066d]:hover{color:#ff512b}.scrollbar-self[data-v-37d7066d]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-37d7066d]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-37d7066d]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.message[data-v-37d7066d]{height:110px;border:1px solid #ddd;border-top:0;padding:20px 40px 20px 20px;justify-content:space-between}.message[data-v-37d7066d],.message--left[data-v-37d7066d]{display:flex}.message--left label[data-v-37d7066d]{margin:11px 16px 0 0}.message label[data-v-37d7066d]{color:#666}.message p[data-v-37d7066d]{display:flex;justify-content:space-between;width:308px;margin:11px 0}[data-v-37d7066d] .textarea{display:inline-block;width:467px}[data-v-37d7066d] .textarea textarea{height:70px;background:#f8f8f8;border:none;resize:none}[data-v-37d7066d] .textarea textarea::-moz-placeholder{color:#999;font-size:12px}[data-v-37d7066d] .textarea textarea::placeholder{color:#999;font-size:12px}[data-v-37d7066d] .textarea span{background:#f8f8f8}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_52e37275_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(257);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_52e37275_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_52e37275_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_52e37275_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amount_vue_vue_type_style_index_0_id_52e37275_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-52e37275]{display:flex}.flex-inline[data-v-52e37275]{display:inline-flex}.flex-inline[data-v-52e37275]:after,.flex-inline[data-v-52e37275]:before,.flex[data-v-52e37275]:after,.flex[data-v-52e37275]:before{display:none}.flex-left[data-v-52e37275]{justify-content:flex-start}.flex-center[data-v-52e37275]{justify-content:center}.flex-right[data-v-52e37275]{justify-content:flex-end}.flex-between[data-v-52e37275]{justify-content:space-between}.flex-around[data-v-52e37275]{justify-content:space-around}.flex-stretch[data-v-52e37275]{align-items:stretch}.flex-top[data-v-52e37275]{align-items:flex-start}.flex-middle[data-v-52e37275]{align-items:center}.flex-bottom[data-v-52e37275]{align-items:flex-end}.flex-baseline[data-v-52e37275]{align-items:baseline}.flex-row[data-v-52e37275]{flex-direction:row}.flex-row-reverse[data-v-52e37275]{flex-direction:row-reverse}.flex-column[data-v-52e37275]{flex-direction:column}.flex-column-reverse[data-v-52e37275]{flex-direction:column-reverse}.flex-nowrap[data-v-52e37275]{flex-wrap:nowrap}.flex-wrap[data-v-52e37275]{flex-wrap:wrap}.flex-wrap-reverse[data-v-52e37275]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-52e37275]{align-content:stretch}.flex-wrap-top[data-v-52e37275]{align-content:flex-start}.flex-wrap-middle[data-v-52e37275]{align-content:center}.flex-wrap-bottom[data-v-52e37275]{align-content:flex-end}.flex-wrap-between[data-v-52e37275]{align-content:space-between}.flex-wrap-around[data-v-52e37275]{align-content:space-around}.flex-first[data-v-52e37275]{order:-1}.flex-last[data-v-52e37275]{order:99}.flex-none[data-v-52e37275]{flex:none}.flex-auto[data-v-52e37275]{flex:auto}.flex-1[data-v-52e37275]{flex:1}.hover-text[data-v-52e37275]:hover{color:#ff875b}.expend-click[data-v-52e37275]{position:relative}.expend-click[data-v-52e37275]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-52e37275],[data-v-52e37275]:after,[data-v-52e37275]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-52e37275],dd[data-v-52e37275],dl[data-v-52e37275],figure[data-v-52e37275],form[data-v-52e37275],h1[data-v-52e37275],h2[data-v-52e37275],h3[data-v-52e37275],h4[data-v-52e37275],h5[data-v-52e37275],ol[data-v-52e37275],p[data-v-52e37275],ul[data-v-52e37275]{margin:0;font-size:14px}button[data-v-52e37275],input[data-v-52e37275],ol[data-v-52e37275],ul[data-v-52e37275]{padding:0}li[data-v-52e37275],ol[data-v-52e37275],ul[data-v-52e37275]{list-style:none;list-style-type:none}h1[data-v-52e37275],h2[data-v-52e37275],h3[data-v-52e37275],h4[data-v-52e37275],h5[data-v-52e37275]{font-size:100%}input[data-v-52e37275]{border:0;margin:0}img[data-v-52e37275]{width:100%}a[data-v-52e37275],button[data-v-52e37275],img[data-v-52e37275],input[data-v-52e37275],optgroup[data-v-52e37275],select[data-v-52e37275],textarea[data-v-52e37275]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-52e37275],img[data-v-52e37275]{-webkit-touch-callout:none;border:0}body[data-v-52e37275],html[data-v-52e37275]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-52e37275],img[data-v-52e37275],input[data-v-52e37275],textarea[data-v-52e37275]{vertical-align:middle;outline:none}body[data-v-52e37275]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-52e37275]{border-collapse:collapse;border-spacing:0}a[data-v-52e37275],table[data-v-52e37275]{color:#333}a[data-v-52e37275],a[data-v-52e37275]:hover{text-decoration:none}a[data-v-52e37275]:hover{color:#ff512b}.scrollbar-self[data-v-52e37275]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-52e37275]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-52e37275]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.amount[data-v-52e37275]{max-height:133px;background:#f8f8f8;text-align:right;padding:20px 40px;margin-top:10px}.amount .money[data-v-52e37275]{font-size:0;color:#ff512b;display:inline-block;font-weight:700}.amount p[data-v-52e37275]{font-size:12px;color:#9e9e9e;margin-top:15px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(420);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("599c3d7b", content, true, context)
};

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/order/submit/module/OrderInfo.vue?vue&type=template&id=75dc7a4c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"goods"},[_vm._ssrNode("<thead data-v-75dc7a4c><tr data-v-75dc7a4c><th width=\"600\" data-v-75dc7a4c>商品信息</th> <th data-v-75dc7a4c>单价</th> <th data-v-75dc7a4c>数量</th> <th data-v-75dc7a4c>小计</th></tr></thead> "),_vm._ssrNode("<tbody data-v-75dc7a4c>","</tbody>",_vm._l((_vm.products),function(item){return _vm._ssrNode("<tr data-v-75dc7a4c>","</tr>",[_vm._ssrNode("<td data-v-75dc7a4c>","</td>",[_c('UIGoodsInfo',{attrs:{"goods":item}})],1),_vm._ssrNode(" <td data-v-75dc7a4c>"+_vm._ssrEscape("￥"+_vm._s(item.realPrice))+"</td> <td data-v-75dc7a4c>"+_vm._ssrEscape(_vm._s(item.quantity))+"</td> <td data-v-75dc7a4c>"+_vm._ssrEscape("￥"+_vm._s(item.realAmount))+"</td>")],2)}),0)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/order/submit/module/OrderInfo.vue?vue&type=template&id=75dc7a4c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/order/submit/module/OrderInfo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var OrderInfovue_type_script_lang_js_ = ({
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./pages/order/submit/module/OrderInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_OrderInfovue_type_script_lang_js_ = (OrderInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/order/submit/module/OrderInfo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(311)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_OrderInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "75dc7a4c",
  "570b7f5b"
  
)

/* harmony default export */ var OrderInfo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UIGoodsInfo: __webpack_require__(176).default})


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/order/submit/module/Message.vue?vue&type=template&id=37d7066d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"message"},[_vm._ssrNode("<div class=\"message--left\" data-v-37d7066d>","</div>",[_vm._ssrNode("<label data-v-37d7066d>买家留言</label> "),_c('el-input',{staticClass:"textarea",attrs:{"type":"textarea","placeholder":"填写您想要备注的信息，50字以内","show-word-limit":"","maxlength":50},model:{value:(_vm.myMsg),callback:function ($$v) {_vm.myMsg=$$v},expression:"myMsg"}})],2),_vm._ssrNode(" <div data-v-37d7066d><p data-v-37d7066d><label data-v-37d7066d>商品总额</label> <b data-v-37d7066d>"+_vm._ssrEscape("￥"+_vm._s(_vm.orderInfo.totalAmount))+"</b></p> <p data-v-37d7066d><label data-v-37d7066d>运费</label> <b data-v-37d7066d>"+_vm._ssrEscape("￥"+_vm._s(_vm.orderInfo.shippingAmount))+"</b></p></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/order/submit/module/Message.vue?vue&type=template&id=37d7066d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/order/submit/module/Message.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Messagevue_type_script_lang_js_ = ({
  props: {
    orderInfo: {
      type: Object,
      defautl: () => ({})
    },
    message: {
      type: String,
      default: ''
    }
  },
  computed: {
    myMsg: {
      get() {
        return this.message;
      },
      set(val) {
        this.$emit('update:message', val);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/order/submit/module/Message.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_Messagevue_type_script_lang_js_ = (Messagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/order/submit/module/Message.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(313)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_Messagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "37d7066d",
  "04554686"
  
)

/* harmony default export */ var Message = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/order/submit/module/Amount.vue?vue&type=template&id=52e37275&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"amount"},[_vm._ssrNode("<div data-v-52e37275>","</div>",[_vm._ssrNode("<span data-v-52e37275>应付款</span> "),_c('UiMoney',{staticClass:"money",attrs:{"size":"20px","preSize":"14px","sufSize":"14px","money":_vm.amount,"float":"","prefix":"","suffix":""}})],2),_vm._ssrNode(" "+((_vm.productType == 1)?("<p data-v-52e37275>"+_vm._ssrEscape(_vm._s(_vm.address.province + _vm.address.city + _vm.address.area + _vm.address.detailAddress))+"</p> <p data-v-52e37275>"+_vm._ssrEscape(_vm._s(_vm.address.name)+" "+_vm._s(_vm.address.phone))+"</p>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/order/submit/module/Amount.vue?vue&type=template&id=52e37275&scoped=true&

// EXTERNAL MODULE: ./components/UiMoney.vue + 4 modules
var UiMoney = __webpack_require__(76);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/order/submit/module/Amount.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Amountvue_type_script_lang_js_ = ({
  components: {
    UiMoney: UiMoney["default"]
  },
  props: {
    productType: {
      type: String | Number
    },
    amount: {
      type: Number,
      default: 0
    },
    address: {
      type: Object,
      default: () => ({})
    }
  }
});
// CONCATENATED MODULE: ./pages/order/submit/module/Amount.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_Amountvue_type_script_lang_js_ = (Amountvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/order/submit/module/Amount.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(315)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_Amountvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "52e37275",
  "b6ddc2ae"
  
)

/* harmony default export */ var Amount = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UiMoney: __webpack_require__(76).default})


/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_eb32a8ec_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(341);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_eb32a8ec_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_eb32a8ec_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_eb32a8ec_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_eb32a8ec_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-eb32a8ec]{display:flex}.flex-inline[data-v-eb32a8ec]{display:inline-flex}.flex-inline[data-v-eb32a8ec]:after,.flex-inline[data-v-eb32a8ec]:before,.flex[data-v-eb32a8ec]:after,.flex[data-v-eb32a8ec]:before{display:none}.flex-left[data-v-eb32a8ec]{justify-content:flex-start}.flex-center[data-v-eb32a8ec]{justify-content:center}.flex-right[data-v-eb32a8ec]{justify-content:flex-end}.flex-between[data-v-eb32a8ec]{justify-content:space-between}.flex-around[data-v-eb32a8ec]{justify-content:space-around}.flex-stretch[data-v-eb32a8ec]{align-items:stretch}.flex-top[data-v-eb32a8ec]{align-items:flex-start}.flex-middle[data-v-eb32a8ec]{align-items:center}.flex-bottom[data-v-eb32a8ec]{align-items:flex-end}.flex-baseline[data-v-eb32a8ec]{align-items:baseline}.flex-row[data-v-eb32a8ec]{flex-direction:row}.flex-row-reverse[data-v-eb32a8ec]{flex-direction:row-reverse}.flex-column[data-v-eb32a8ec]{flex-direction:column}.flex-column-reverse[data-v-eb32a8ec]{flex-direction:column-reverse}.flex-nowrap[data-v-eb32a8ec]{flex-wrap:nowrap}.flex-wrap[data-v-eb32a8ec]{flex-wrap:wrap}.flex-wrap-reverse[data-v-eb32a8ec]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-eb32a8ec]{align-content:stretch}.flex-wrap-top[data-v-eb32a8ec]{align-content:flex-start}.flex-wrap-middle[data-v-eb32a8ec]{align-content:center}.flex-wrap-bottom[data-v-eb32a8ec]{align-content:flex-end}.flex-wrap-between[data-v-eb32a8ec]{align-content:space-between}.flex-wrap-around[data-v-eb32a8ec]{align-content:space-around}.flex-first[data-v-eb32a8ec]{order:-1}.flex-last[data-v-eb32a8ec]{order:99}.flex-none[data-v-eb32a8ec]{flex:none}.flex-auto[data-v-eb32a8ec]{flex:auto}.flex-1[data-v-eb32a8ec]{flex:1}.hover-text[data-v-eb32a8ec]:hover{color:#ff875b}.expend-click[data-v-eb32a8ec]{position:relative}.expend-click[data-v-eb32a8ec]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-eb32a8ec],[data-v-eb32a8ec]:after,[data-v-eb32a8ec]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-eb32a8ec],dd[data-v-eb32a8ec],dl[data-v-eb32a8ec],figure[data-v-eb32a8ec],form[data-v-eb32a8ec],h1[data-v-eb32a8ec],h2[data-v-eb32a8ec],h3[data-v-eb32a8ec],h4[data-v-eb32a8ec],h5[data-v-eb32a8ec],ol[data-v-eb32a8ec],p[data-v-eb32a8ec],ul[data-v-eb32a8ec]{margin:0;font-size:14px}button[data-v-eb32a8ec],input[data-v-eb32a8ec],ol[data-v-eb32a8ec],ul[data-v-eb32a8ec]{padding:0}li[data-v-eb32a8ec],ol[data-v-eb32a8ec],ul[data-v-eb32a8ec]{list-style:none;list-style-type:none}h1[data-v-eb32a8ec],h2[data-v-eb32a8ec],h3[data-v-eb32a8ec],h4[data-v-eb32a8ec],h5[data-v-eb32a8ec]{font-size:100%}input[data-v-eb32a8ec]{border:0;margin:0}img[data-v-eb32a8ec]{width:100%}a[data-v-eb32a8ec],button[data-v-eb32a8ec],img[data-v-eb32a8ec],input[data-v-eb32a8ec],optgroup[data-v-eb32a8ec],select[data-v-eb32a8ec],textarea[data-v-eb32a8ec]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-eb32a8ec],img[data-v-eb32a8ec]{-webkit-touch-callout:none;border:0}body[data-v-eb32a8ec],html[data-v-eb32a8ec]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-eb32a8ec],img[data-v-eb32a8ec],input[data-v-eb32a8ec],textarea[data-v-eb32a8ec]{vertical-align:middle;outline:none}body[data-v-eb32a8ec]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-eb32a8ec]{border-collapse:collapse;border-spacing:0}a[data-v-eb32a8ec],table[data-v-eb32a8ec]{color:#333}a[data-v-eb32a8ec],a[data-v-eb32a8ec]:hover{text-decoration:none}a[data-v-eb32a8ec]:hover{color:#ff512b}.scrollbar-self[data-v-eb32a8ec]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-eb32a8ec]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-eb32a8ec]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.main[data-v-eb32a8ec]{width:1200px;margin:0 auto;padding:30px 0}.title[data-v-eb32a8ec]{margin:24px 0 13px}.pay-type[data-v-eb32a8ec]{border:1px solid #ddd;padding:30px 70px}.pay-type--wx[data-v-eb32a8ec]{width:130px}.pay-type--ali[data-v-eb32a8ec]{width:92px}.pay[data-v-eb32a8ec]{text-align:right;padding-bottom:50px;margin-top:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/order/submit/index.vue?vue&type=template&id=eb32a8ec&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main"},[(_vm.productType == 1)?[_vm._ssrNode("<h3 class=\"title\" data-v-eb32a8ec>收货地址</h3> "),_c('BsAddress',{model:{value:(_vm.address),callback:function ($$v) {_vm.address=$$v},expression:"address"}})]:_vm._e(),_vm._ssrNode(" <h3 class=\"title\" data-v-eb32a8ec>支付方式</h3> "),_vm._ssrNode("<div class=\"pay-type\" data-v-eb32a8ec>","</div>",[_c('el-radio-group',{model:{value:(_vm.payType),callback:function ($$v) {_vm.payType=$$v},expression:"payType"}},[_c('el-radio',{attrs:{"label":"wx"}},[_c('img',{staticClass:"pay-type--wx",attrs:{"src":__webpack_require__(200)}})]),_vm._v(" "),_c('el-radio',{attrs:{"label":"ali"}},[_c('img',{staticClass:"pay-type--ali",attrs:{"src":__webpack_require__(201)}})])],1)],1),_vm._ssrNode(" <h3 class=\"title\" data-v-eb32a8ec>确认商品信息</h3> "),_c('OrderInfo',{attrs:{"products":_vm.orderInfo.products}}),_vm._ssrNode(" "),_c('Message',{attrs:{"orderInfo":_vm.orderInfo,"message":_vm.userMessage},on:{"update:message":function($event){_vm.userMessage=$event}}}),_vm._ssrNode(" "),_c('Amount',{attrs:{"amount":_vm.orderInfo.productAmount,"address":_vm.address,"productType":_vm.productType}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pay\" data-v-eb32a8ec>","</div>",[_c('UiButton',{attrs:{"radius":"","type":"red_panel"},on:{"click":_vm.submit}},[_vm._v("立即支付")])],1),_vm._ssrNode(" "),_c('BsPay',{attrs:{"visible":_vm.payVisible,"payType":_vm.payType,"orderId":_vm.payOrder.orderId},on:{"update:visible":function($event){_vm.payVisible=$event},"cancel":_vm.cancelPay,"finish":_vm.finishPay}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/order/submit/index.vue?vue&type=template&id=eb32a8ec&scoped=true&

// EXTERNAL MODULE: ./plugins/api/order.js
var order = __webpack_require__(166);

// EXTERNAL MODULE: ./components/BsPay.vue + 5 modules
var BsPay = __webpack_require__(188);

// EXTERNAL MODULE: ./components/UIGoodsInfo.vue + 4 modules
var UIGoodsInfo = __webpack_require__(176);

// EXTERNAL MODULE: ./pages/order/submit/module/OrderInfo.vue + 4 modules
var OrderInfo = __webpack_require__(357);

// EXTERNAL MODULE: ./pages/order/submit/module/Message.vue + 4 modules
var Message = __webpack_require__(358);

// EXTERNAL MODULE: ./pages/order/submit/module/Amount.vue + 4 modules
var Amount = __webpack_require__(359);

// EXTERNAL MODULE: ./components/UiButton.vue + 4 modules
var UiButton = __webpack_require__(15);

// EXTERNAL MODULE: ./components/BsAddress.vue + 4 modules
var BsAddress = __webpack_require__(227);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/order/submit/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var submitvue_type_script_lang_js_ = ({
  components: {
    BsPay: BsPay["default"],
    UIGoodsInfo: UIGoodsInfo["default"],
    OrderInfo: OrderInfo["default"],
    Message: Message["default"],
    Amount: Amount["default"],
    UiButton: UiButton["default"],
    BsAddress: BsAddress["default"]
  },
  data() {
    return {
      address: {},
      orderInfo: {},
      userMessage: '',
      payOrder: {},
      payType: 'wx',
      payVisible: false,
      payTimerTxt: '',
      payTimerStop: null,
      productType: this.$route.query.productType
    };
  },
  mounted() {
    this.getBeforeOrder();
  },
  methods: {
    /**
     * 获取预订单信息，将要提交的订单信息
     */
    async getBeforeOrder() {
      const query = this.$route.query;
      let res = {};
      // 购物车结算
      if (query.mode === 'cart') {
        res = await Object(order["a" /* ApiGetBeforeCartOrder */])({
          cartIds: query.ids,
          isVirtual: this.productType == 2 && true,
          recipientAddressId: this.address.id
        });
      }
      // 立即购买
      if (query.mode === 'buyNow') {
        res = await Object(order["b" /* ApiGetBeforeOrder */])({
          productSkuId: query.skuId,
          quantity: query.num,
          activityId: query.activityId,
          activityTimeId: query.activityTimeId,
          isVirtual: this.productType == 2 && true,
          // 1正常购买 2活动购买
          activityType: query.activityType,
          recipientAddressId: this.address.id
        });
      }
      if (res.error) {
        this.$message.error(res.error.message);
        return false;
      }
      this.orderInfo = res.result;
    },
    /**
     * 提交订单
     */
    async submit() {
      const {
        query
      } = this.$route;
      if (!this.address.id && this.productType === 1) {
        this.$message.error('请选择收货地址');
        return false;
      }
      const {
        error,
        result
      } = await Object(order["j" /* ApiPostSubmitOrder */])({
        orderSource: 6,
        recipientAddressId: this.address.id,
        isVirtual: this.productType == 2 && true,
        shoppingCartIds: query.ids ? query.ids.split(',') : [],
        products: this.orderInfo.products.map(i => ({
          activityId: query.activityId,
          activityTimeId: query.activityTimeId,
          productId: i.productId,
          productSkuId: i.productSkuId,
          quantity: i.quantity,
          activityType: query.activityType
        })),
        userMessage: this.userMessage
      });
      if (error) {
        this.$message.error(error.message);
        return false;
      }
      this.payVisible = true;
      this.payOrder = result;
      setTimeout(() => {
        this.getOrderPayStatus();
      }, 5000);
    },
    /**
     * 查询订单支付状态，提交订单成功后每隔5秒调一次，跳到支付结果页
     */
    async getOrderPayStatus() {
      const {
        error,
        result
      } = await Object(order["g" /* ApiGetOrderPaySatus */])({
        orderId: this.payOrder.orderId
      });
      if (error) {
        this.$router.replace(`/account/order/detail?id=${this.payOrder.orderId}`);
        return false;
      }
      if (!result.isSuccess) {
        setTimeout(() => {
          this.getOrderPayStatus();
        }, 5000);
        return false;
      }
      this.$router.replace(`/order/payResult?id=${this.payOrder.orderId}&type=${this.productType}`);
    },
    cancelPay() {
      this.$router.replace(`/account/order/detail?id=${this.payOrder.orderId}`);
    },
    finishPay() {
      this.$router.replace(`/order/payResult?id=${this.payOrder.orderId}&type=${this.productType}`);
    }
  }
});
// CONCATENATED MODULE: ./pages/order/submit/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var order_submitvue_type_script_lang_js_ = (submitvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/order/submit/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(419)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  order_submitvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "eb32a8ec",
  "fd86d700"
  
)

/* harmony default export */ var order_submit = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BsAddress: __webpack_require__(227).default,UiButton: __webpack_require__(15).default,BsPay: __webpack_require__(188).default})


/***/ })

};;
//# sourceMappingURL=index.js.map