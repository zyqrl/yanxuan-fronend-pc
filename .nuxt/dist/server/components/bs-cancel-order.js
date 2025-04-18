exports.ids = [2];
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


/***/ })

};;
//# sourceMappingURL=bs-cancel-order.js.map