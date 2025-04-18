exports.ids = [16];
exports.modules = {

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(300);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("b93edd8a", content, true, context)
};

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiPagination_vue_vue_type_style_index_0_id_396282de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(250);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiPagination_vue_vue_type_style_index_0_id_396282de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiPagination_vue_vue_type_style_index_0_id_396282de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiPagination_vue_vue_type_style_index_0_id_396282de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiPagination_vue_vue_type_style_index_0_id_396282de_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-396282de]{display:flex}.flex-inline[data-v-396282de]{display:inline-flex}.flex-inline[data-v-396282de]:after,.flex-inline[data-v-396282de]:before,.flex[data-v-396282de]:after,.flex[data-v-396282de]:before{display:none}.flex-left[data-v-396282de]{justify-content:flex-start}.flex-center[data-v-396282de]{justify-content:center}.flex-right[data-v-396282de]{justify-content:flex-end}.flex-between[data-v-396282de]{justify-content:space-between}.flex-around[data-v-396282de]{justify-content:space-around}.flex-stretch[data-v-396282de]{align-items:stretch}.flex-top[data-v-396282de]{align-items:flex-start}.flex-middle[data-v-396282de]{align-items:center}.flex-bottom[data-v-396282de]{align-items:flex-end}.flex-baseline[data-v-396282de]{align-items:baseline}.flex-row[data-v-396282de]{flex-direction:row}.flex-row-reverse[data-v-396282de]{flex-direction:row-reverse}.flex-column[data-v-396282de]{flex-direction:column}.flex-column-reverse[data-v-396282de]{flex-direction:column-reverse}.flex-nowrap[data-v-396282de]{flex-wrap:nowrap}.flex-wrap[data-v-396282de]{flex-wrap:wrap}.flex-wrap-reverse[data-v-396282de]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-396282de]{align-content:stretch}.flex-wrap-top[data-v-396282de]{align-content:flex-start}.flex-wrap-middle[data-v-396282de]{align-content:center}.flex-wrap-bottom[data-v-396282de]{align-content:flex-end}.flex-wrap-between[data-v-396282de]{align-content:space-between}.flex-wrap-around[data-v-396282de]{align-content:space-around}.flex-first[data-v-396282de]{order:-1}.flex-last[data-v-396282de]{order:99}.flex-none[data-v-396282de]{flex:none}.flex-auto[data-v-396282de]{flex:auto}.flex-1[data-v-396282de]{flex:1}.hover-text[data-v-396282de]:hover{color:#ff875b}.expend-click[data-v-396282de]{position:relative}.expend-click[data-v-396282de]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-396282de],[data-v-396282de]:after,[data-v-396282de]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-396282de],dd[data-v-396282de],dl[data-v-396282de],figure[data-v-396282de],form[data-v-396282de],h1[data-v-396282de],h2[data-v-396282de],h3[data-v-396282de],h4[data-v-396282de],h5[data-v-396282de],ol[data-v-396282de],p[data-v-396282de],ul[data-v-396282de]{margin:0;font-size:14px}button[data-v-396282de],input[data-v-396282de],ol[data-v-396282de],ul[data-v-396282de]{padding:0}li[data-v-396282de],ol[data-v-396282de],ul[data-v-396282de]{list-style:none;list-style-type:none}h1[data-v-396282de],h2[data-v-396282de],h3[data-v-396282de],h4[data-v-396282de],h5[data-v-396282de]{font-size:100%}input[data-v-396282de]{border:0;margin:0}img[data-v-396282de]{width:100%}a[data-v-396282de],button[data-v-396282de],img[data-v-396282de],input[data-v-396282de],optgroup[data-v-396282de],select[data-v-396282de],textarea[data-v-396282de]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-396282de],img[data-v-396282de]{-webkit-touch-callout:none;border:0}body[data-v-396282de],html[data-v-396282de]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-396282de],img[data-v-396282de],input[data-v-396282de],textarea[data-v-396282de]{vertical-align:middle;outline:none}body[data-v-396282de]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-396282de]{border-collapse:collapse;border-spacing:0}a[data-v-396282de],table[data-v-396282de]{color:#333}a[data-v-396282de],a[data-v-396282de]:hover{text-decoration:none}a[data-v-396282de]:hover{color:#ff512b}.scrollbar-self[data-v-396282de]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-396282de]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-396282de]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.bs-pagination[data-v-396282de]{width:1200px;margin:60px auto 0}.bs-pagination[data-v-396282de] .el-pagination .btn-next,.bs-pagination[data-v-396282de] .el-pagination .btn-prev{width:32px;height:32px;background:#fff;border-radius:2px;border:1px solid rgba(0,0,0,.2)}.bs-pagination[data-v-396282de] .el-pagination .el-pagination__jump{color:#333}.bs-pagination[data-v-396282de] .el-pagination .el-pager .number{width:32px;height:32px;line-height:32px;font-size:14px;background:#fff;border:1px solid rgba(0,0,0,.2);border-radius:2px}.bs-pagination[data-v-396282de] .el-pagination .el-pager .active{color:#fff;background:#ff512b;border:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UiPagination.vue?vue&type=template&id=396282de&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bs-pagination flex flex-right"},[_c('el-pagination',_vm._b({attrs:{"background":"","current-page":_vm.currentPage,"page-size":_vm.pageSize,"layout":_vm.layout,"total":_vm.total},on:{"size-change":function($event){return _vm.$emit('size-change', $event)},"current-change":function($event){return _vm.$emit('current-change', $event)}}},'el-pagination',_vm.$attrs,false)),_vm._ssrNode(" "),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UiPagination.vue?vue&type=template&id=396282de&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UiPagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var UiPaginationvue_type_script_lang_js_ = ({
  name: "BsPagination",
  props: {
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 0
    },
    layout: {
      type: String,
      default: "prev, pager, next, jumper"
    },
    currentPage: {
      type: Number,
      default: 0
    }
  }
});
// CONCATENATED MODULE: ./components/UiPagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UiPaginationvue_type_script_lang_js_ = (UiPaginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/UiPagination.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(299)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UiPaginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "396282de",
  "4937aebe"
  
)

/* harmony default export */ var UiPagination = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=ui-pagination.js.map