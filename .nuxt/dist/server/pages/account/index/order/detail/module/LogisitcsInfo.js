exports.ids = [27,14];
exports.modules = {

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


/***/ })

};;
//# sourceMappingURL=LogisitcsInfo.js.map