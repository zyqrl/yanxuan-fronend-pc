exports.ids = [50];
exports.modules = {

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


/***/ })

};;
//# sourceMappingURL=Amount.js.map