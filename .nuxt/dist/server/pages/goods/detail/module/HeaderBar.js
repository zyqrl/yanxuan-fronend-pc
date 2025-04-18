exports.ids = [40];
exports.modules = {

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(321);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("a4a98d6c", content, true, context)
};

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_style_index_0_id_4f6d4186_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(259);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_style_index_0_id_4f6d4186_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_style_index_0_id_4f6d4186_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_style_index_0_id_4f6d4186_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBar_vue_vue_type_style_index_0_id_4f6d4186_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-4f6d4186]{display:flex}.flex-inline[data-v-4f6d4186]{display:inline-flex}.flex-inline[data-v-4f6d4186]:after,.flex-inline[data-v-4f6d4186]:before,.flex[data-v-4f6d4186]:after,.flex[data-v-4f6d4186]:before{display:none}.flex-left[data-v-4f6d4186]{justify-content:flex-start}.flex-center[data-v-4f6d4186]{justify-content:center}.flex-right[data-v-4f6d4186]{justify-content:flex-end}.flex-between[data-v-4f6d4186]{justify-content:space-between}.flex-around[data-v-4f6d4186]{justify-content:space-around}.flex-stretch[data-v-4f6d4186]{align-items:stretch}.flex-top[data-v-4f6d4186]{align-items:flex-start}.flex-middle[data-v-4f6d4186]{align-items:center}.flex-bottom[data-v-4f6d4186]{align-items:flex-end}.flex-baseline[data-v-4f6d4186]{align-items:baseline}.flex-row[data-v-4f6d4186]{flex-direction:row}.flex-row-reverse[data-v-4f6d4186]{flex-direction:row-reverse}.flex-column[data-v-4f6d4186]{flex-direction:column}.flex-column-reverse[data-v-4f6d4186]{flex-direction:column-reverse}.flex-nowrap[data-v-4f6d4186]{flex-wrap:nowrap}.flex-wrap[data-v-4f6d4186]{flex-wrap:wrap}.flex-wrap-reverse[data-v-4f6d4186]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-4f6d4186]{align-content:stretch}.flex-wrap-top[data-v-4f6d4186]{align-content:flex-start}.flex-wrap-middle[data-v-4f6d4186]{align-content:center}.flex-wrap-bottom[data-v-4f6d4186]{align-content:flex-end}.flex-wrap-between[data-v-4f6d4186]{align-content:space-between}.flex-wrap-around[data-v-4f6d4186]{align-content:space-around}.flex-first[data-v-4f6d4186]{order:-1}.flex-last[data-v-4f6d4186]{order:99}.flex-none[data-v-4f6d4186]{flex:none}.flex-auto[data-v-4f6d4186]{flex:auto}.flex-1[data-v-4f6d4186]{flex:1}.hover-text[data-v-4f6d4186]:hover{color:#ff875b}.expend-click[data-v-4f6d4186]{position:relative}.expend-click[data-v-4f6d4186]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-4f6d4186],[data-v-4f6d4186]:after,[data-v-4f6d4186]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-4f6d4186],dd[data-v-4f6d4186],dl[data-v-4f6d4186],figure[data-v-4f6d4186],form[data-v-4f6d4186],h1[data-v-4f6d4186],h2[data-v-4f6d4186],h3[data-v-4f6d4186],h4[data-v-4f6d4186],h5[data-v-4f6d4186],ol[data-v-4f6d4186],p[data-v-4f6d4186],ul[data-v-4f6d4186]{margin:0;font-size:14px}button[data-v-4f6d4186],input[data-v-4f6d4186],ol[data-v-4f6d4186],ul[data-v-4f6d4186]{padding:0}li[data-v-4f6d4186],ol[data-v-4f6d4186],ul[data-v-4f6d4186]{list-style:none;list-style-type:none}h1[data-v-4f6d4186],h2[data-v-4f6d4186],h3[data-v-4f6d4186],h4[data-v-4f6d4186],h5[data-v-4f6d4186]{font-size:100%}input[data-v-4f6d4186]{border:0;margin:0}img[data-v-4f6d4186]{width:100%}a[data-v-4f6d4186],button[data-v-4f6d4186],img[data-v-4f6d4186],input[data-v-4f6d4186],optgroup[data-v-4f6d4186],select[data-v-4f6d4186],textarea[data-v-4f6d4186]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-4f6d4186],img[data-v-4f6d4186]{-webkit-touch-callout:none;border:0}body[data-v-4f6d4186],html[data-v-4f6d4186]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-4f6d4186],img[data-v-4f6d4186],input[data-v-4f6d4186],textarea[data-v-4f6d4186]{vertical-align:middle;outline:none}body[data-v-4f6d4186]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-4f6d4186]{border-collapse:collapse;border-spacing:0}a[data-v-4f6d4186],table[data-v-4f6d4186]{color:#333}a[data-v-4f6d4186],a[data-v-4f6d4186]:hover{text-decoration:none}a[data-v-4f6d4186]:hover{color:#ff512b}.scrollbar-self[data-v-4f6d4186]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-4f6d4186]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-4f6d4186]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.header[data-v-4f6d4186]{position:fixed;top:0;left:0;right:0;height:70px;background:#fff;z-index:11}.header--layout[data-v-4f6d4186]{width:1200px;margin:0 auto;padding-left:256px;display:flex;justify-content:space-between;align-items:center;height:100%}.header--layout ul[data-v-4f6d4186]{display:flex;font-size:16px}.header--layout ul li[data-v-4f6d4186]{margin-right:50px;height:70px;line-height:70px}.header--layout ul li.active[data-v-4f6d4186]{color:#ff6a19;position:relative}.header--layout ul li.active[data-v-4f6d4186]:after{display:block;content:\"\";position:absolute;height:2px;width:40px;background:#ff6a19;bottom:0;left:50%;transform:translateX(-50%)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/goods/detail/module/HeaderBar.vue?vue&type=template&id=4f6d4186&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header"},[_vm._ssrNode("<div class=\"header--layout\" data-v-4f6d4186>","</div>",[_vm._ssrNode("<ul data-v-4f6d4186><li"+(_vm._ssrClass(null,{'active': _vm.tabKey =='detail'}))+" data-v-4f6d4186>商品详情</li> <li"+(_vm._ssrClass(null,{'active': _vm.tabKey =='comment'}))+" data-v-4f6d4186>商品评价</li></ul> "),_c('UiButton',{on:{"click":_vm.handleAddCart}},[_vm._v("加入购物车")])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/goods/detail/module/HeaderBar.vue?vue&type=template&id=4f6d4186&scoped=true&

// EXTERNAL MODULE: ./components/UiButton.vue + 4 modules
var UiButton = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/goods/detail/module/HeaderBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var HeaderBarvue_type_script_lang_js_ = ({
  components: {
    UiButton: UiButton["default"]
  },
  props: {
    tabKey: {
      type: String,
      default: 'detail'
    }
  },
  data() {
    return {};
  },
  methods: {
    handleJump(val) {
      this.$emit('jump', val);
    },
    handleAddCart() {
      this.$emit('addCart');
    }
  }
});
// CONCATENATED MODULE: ./pages/goods/detail/module/HeaderBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_HeaderBarvue_type_script_lang_js_ = (HeaderBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/goods/detail/module/HeaderBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(320)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_HeaderBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4f6d4186",
  "0b44b4f4"
  
)

/* harmony default export */ var HeaderBar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UiButton: __webpack_require__(15).default})


/***/ })

};;
//# sourceMappingURL=HeaderBar.js.map