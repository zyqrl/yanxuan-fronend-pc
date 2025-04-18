exports.ids = [8];
exports.modules = {

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


/***/ })

};;
//# sourceMappingURL=u-i-goods-info.js.map