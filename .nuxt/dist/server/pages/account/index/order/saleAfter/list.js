exports.ids = [33];
exports.modules = {

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(386);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("05410c92", content, true, context)
};

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/app-qrcode.100710a.jpg";

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_643c703a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(331);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_643c703a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_643c703a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_643c703a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_643c703a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-643c703a]{display:flex}.flex-inline[data-v-643c703a]{display:inline-flex}.flex-inline[data-v-643c703a]:after,.flex-inline[data-v-643c703a]:before,.flex[data-v-643c703a]:after,.flex[data-v-643c703a]:before{display:none}.flex-left[data-v-643c703a]{justify-content:flex-start}.flex-center[data-v-643c703a]{justify-content:center}.flex-right[data-v-643c703a]{justify-content:flex-end}.flex-between[data-v-643c703a]{justify-content:space-between}.flex-around[data-v-643c703a]{justify-content:space-around}.flex-stretch[data-v-643c703a]{align-items:stretch}.flex-top[data-v-643c703a]{align-items:flex-start}.flex-middle[data-v-643c703a]{align-items:center}.flex-bottom[data-v-643c703a]{align-items:flex-end}.flex-baseline[data-v-643c703a]{align-items:baseline}.flex-row[data-v-643c703a]{flex-direction:row}.flex-row-reverse[data-v-643c703a]{flex-direction:row-reverse}.flex-column[data-v-643c703a]{flex-direction:column}.flex-column-reverse[data-v-643c703a]{flex-direction:column-reverse}.flex-nowrap[data-v-643c703a]{flex-wrap:nowrap}.flex-wrap[data-v-643c703a]{flex-wrap:wrap}.flex-wrap-reverse[data-v-643c703a]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-643c703a]{align-content:stretch}.flex-wrap-top[data-v-643c703a]{align-content:flex-start}.flex-wrap-middle[data-v-643c703a]{align-content:center}.flex-wrap-bottom[data-v-643c703a]{align-content:flex-end}.flex-wrap-between[data-v-643c703a]{align-content:space-between}.flex-wrap-around[data-v-643c703a]{align-content:space-around}.flex-first[data-v-643c703a]{order:-1}.flex-last[data-v-643c703a]{order:99}.flex-none[data-v-643c703a]{flex:none}.flex-auto[data-v-643c703a]{flex:auto}.flex-1[data-v-643c703a]{flex:1}.hover-text[data-v-643c703a]:hover{color:#ff875b}.expend-click[data-v-643c703a]{position:relative}.expend-click[data-v-643c703a]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-643c703a],[data-v-643c703a]:after,[data-v-643c703a]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-643c703a],dd[data-v-643c703a],dl[data-v-643c703a],figure[data-v-643c703a],form[data-v-643c703a],h1[data-v-643c703a],h2[data-v-643c703a],h3[data-v-643c703a],h4[data-v-643c703a],h5[data-v-643c703a],ol[data-v-643c703a],p[data-v-643c703a],ul[data-v-643c703a]{margin:0;font-size:14px}button[data-v-643c703a],input[data-v-643c703a],ol[data-v-643c703a],ul[data-v-643c703a]{padding:0}li[data-v-643c703a],ol[data-v-643c703a],ul[data-v-643c703a]{list-style:none;list-style-type:none}h1[data-v-643c703a],h2[data-v-643c703a],h3[data-v-643c703a],h4[data-v-643c703a],h5[data-v-643c703a]{font-size:100%}input[data-v-643c703a]{border:0;margin:0}img[data-v-643c703a]{width:100%}a[data-v-643c703a],button[data-v-643c703a],img[data-v-643c703a],input[data-v-643c703a],optgroup[data-v-643c703a],select[data-v-643c703a],textarea[data-v-643c703a]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-643c703a],img[data-v-643c703a]{-webkit-touch-callout:none;border:0}body[data-v-643c703a],html[data-v-643c703a]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-643c703a],img[data-v-643c703a],input[data-v-643c703a],textarea[data-v-643c703a]{vertical-align:middle;outline:none}body[data-v-643c703a]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-643c703a]{border-collapse:collapse;border-spacing:0}a[data-v-643c703a],table[data-v-643c703a]{color:#333}a[data-v-643c703a],a[data-v-643c703a]:hover{text-decoration:none}a[data-v-643c703a]:hover{color:#ff512b}.scrollbar-self[data-v-643c703a]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-643c703a]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-643c703a]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.main[data-v-643c703a]{width:100%;border:1px solid #ddd}.main-title[data-v-643c703a]{width:100%;height:42px;background:#f8f8f8;border-bottom:1px solid #ddd;font-size:14px;font-family:Source Han Sans CN-Regular,Source Han Sans CN;font-weight:400;color:#333;line-height:42px;padding-left:24px}.main-img[data-v-643c703a]{width:140px;height:140px;margin:110px 0 20px}.main-txt[data-v-643c703a]{width:100%;text-align:center;font-size:14px;font-family:Microsoft YaHei-Regular,Microsoft YaHei;font-weight:400;color:#999}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index/order/saleAfter/list.vue?vue&type=template&id=643c703a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"main flex flex-column flex-middle"},[_vm._ssrNode("<p class=\"main-title\" data-v-643c703a>售后订单</p> <img"+(_vm._ssrAttr("src",__webpack_require__(384)))+" alt class=\"main-img\" data-v-643c703a> <p class=\"main-txt\" data-v-643c703a>请前往移动端查看售后订单</p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/index/order/saleAfter/list.vue?vue&type=template&id=643c703a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index/order/saleAfter/list.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var listvue_type_script_lang_js_ = ({
  data() {
    return {};
  },
  methods: {}
});
// CONCATENATED MODULE: ./pages/account/index/order/saleAfter/list.vue?vue&type=script&lang=js&
 /* harmony default export */ var saleAfter_listvue_type_script_lang_js_ = (listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/account/index/order/saleAfter/list.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(385)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  saleAfter_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "643c703a",
  "2c26a8fc"
  
)

/* harmony default export */ var list = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=list.js.map