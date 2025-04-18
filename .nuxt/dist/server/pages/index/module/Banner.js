exports.ids = [44];
exports.modules = {

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AD_PLATFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AD_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AD_JUMP_TYPE; });
/*
 * @Author: ch
 * @Date: 2022-05-31 11:05:08
 * @LastEditors: ch
 * @LastEditTime: 2022-05-31 17:23:02
 * @Description: file content
 */

const AD_PLATFORM = {
  PC: 2,
  MOBILE: 1
};
const AD_LOCATION = {
  // 首页轮播图
  HOME_BANNER: 1,
  // 首页精装区
  HOME_HARDCOVER: 2,
  // 分类banner
  CATEGORY_BANNER: 3
};
const AD_JUMP_TYPE = {
  // 商品详情
  GOODS: 1,
  // 分类
  CATEGORY: 2,
  // 链接
  LINK: 3,
  // 不跳转
  NO_JUMP: 4
};


/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(286);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0099fe39", content, true, context)
};

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_52bf2f26_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(246);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_52bf2f26_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_52bf2f26_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_52bf2f26_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_style_index_0_id_52bf2f26_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-52bf2f26]{display:flex}.flex-inline[data-v-52bf2f26]{display:inline-flex}.flex-inline[data-v-52bf2f26]:after,.flex-inline[data-v-52bf2f26]:before,.flex[data-v-52bf2f26]:after,.flex[data-v-52bf2f26]:before{display:none}.flex-left[data-v-52bf2f26]{justify-content:flex-start}.flex-center[data-v-52bf2f26]{justify-content:center}.flex-right[data-v-52bf2f26]{justify-content:flex-end}.flex-between[data-v-52bf2f26]{justify-content:space-between}.flex-around[data-v-52bf2f26]{justify-content:space-around}.flex-stretch[data-v-52bf2f26]{align-items:stretch}.flex-top[data-v-52bf2f26]{align-items:flex-start}.flex-middle[data-v-52bf2f26]{align-items:center}.flex-bottom[data-v-52bf2f26]{align-items:flex-end}.flex-baseline[data-v-52bf2f26]{align-items:baseline}.flex-row[data-v-52bf2f26]{flex-direction:row}.flex-row-reverse[data-v-52bf2f26]{flex-direction:row-reverse}.flex-column[data-v-52bf2f26]{flex-direction:column}.flex-column-reverse[data-v-52bf2f26]{flex-direction:column-reverse}.flex-nowrap[data-v-52bf2f26]{flex-wrap:nowrap}.flex-wrap[data-v-52bf2f26]{flex-wrap:wrap}.flex-wrap-reverse[data-v-52bf2f26]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-52bf2f26]{align-content:stretch}.flex-wrap-top[data-v-52bf2f26]{align-content:flex-start}.flex-wrap-middle[data-v-52bf2f26]{align-content:center}.flex-wrap-bottom[data-v-52bf2f26]{align-content:flex-end}.flex-wrap-between[data-v-52bf2f26]{align-content:space-between}.flex-wrap-around[data-v-52bf2f26]{align-content:space-around}.flex-first[data-v-52bf2f26]{order:-1}.flex-last[data-v-52bf2f26]{order:99}.flex-none[data-v-52bf2f26]{flex:none}.flex-auto[data-v-52bf2f26]{flex:auto}.flex-1[data-v-52bf2f26]{flex:1}.hover-text[data-v-52bf2f26]:hover{color:#ff875b}.expend-click[data-v-52bf2f26]{position:relative}.expend-click[data-v-52bf2f26]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-52bf2f26],[data-v-52bf2f26]:after,[data-v-52bf2f26]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-52bf2f26],dd[data-v-52bf2f26],dl[data-v-52bf2f26],figure[data-v-52bf2f26],form[data-v-52bf2f26],h1[data-v-52bf2f26],h2[data-v-52bf2f26],h3[data-v-52bf2f26],h4[data-v-52bf2f26],h5[data-v-52bf2f26],ol[data-v-52bf2f26],p[data-v-52bf2f26],ul[data-v-52bf2f26]{margin:0;font-size:14px}button[data-v-52bf2f26],input[data-v-52bf2f26],ol[data-v-52bf2f26],ul[data-v-52bf2f26]{padding:0}li[data-v-52bf2f26],ol[data-v-52bf2f26],ul[data-v-52bf2f26]{list-style:none;list-style-type:none}h1[data-v-52bf2f26],h2[data-v-52bf2f26],h3[data-v-52bf2f26],h4[data-v-52bf2f26],h5[data-v-52bf2f26]{font-size:100%}input[data-v-52bf2f26]{border:0;margin:0}img[data-v-52bf2f26]{width:100%}a[data-v-52bf2f26],button[data-v-52bf2f26],img[data-v-52bf2f26],input[data-v-52bf2f26],optgroup[data-v-52bf2f26],select[data-v-52bf2f26],textarea[data-v-52bf2f26]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-52bf2f26],img[data-v-52bf2f26]{-webkit-touch-callout:none;border:0}body[data-v-52bf2f26],html[data-v-52bf2f26]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-52bf2f26],img[data-v-52bf2f26],input[data-v-52bf2f26],textarea[data-v-52bf2f26]{vertical-align:middle;outline:none}body[data-v-52bf2f26]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-52bf2f26]{border-collapse:collapse;border-spacing:0}a[data-v-52bf2f26],table[data-v-52bf2f26]{color:#333}a[data-v-52bf2f26],a[data-v-52bf2f26]:hover{text-decoration:none}a[data-v-52bf2f26]:hover{color:#ff512b}.scrollbar-self[data-v-52bf2f26]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-52bf2f26]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-52bf2f26]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.home-banner[data-v-52bf2f26]{width:1200px;margin:0 auto}.home-banner[data-v-52bf2f26] .el-carousel .el-carousel__container i{font-size:18px}.home-banner[data-v-52bf2f26] .el-carousel .el-carousel__arrow{width:45px;height:45px}.home-banner[data-v-52bf2f26] .el-carousel .el-carousel__indicators{display:none}.home-banner[data-v-52bf2f26] .el-carousel .el-carousel__arrow--left{left:calc(50% - 550px)!important}.home-banner[data-v-52bf2f26] .el-carousel .el-carousel__arrow--right{right:calc(50% - 550px)!important}.home-banner[data-v-52bf2f26] .el-carousel .el-image{width:100%;height:100%;cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/module/Banner.vue?vue&type=template&id=52bf2f26&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-banner"},[_c('el-carousel',{attrs:{"height":"360px","indicator-position":"outside"}},_vm._l((_vm.data),function(item){return _c('el-carousel-item',{key:item.id},[_c('el-image',{attrs:{"src":item.pictureUrl,"fit":"cover"},on:{"click":function($event){return _vm.onBannerClick(item)}}})],1)}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/module/Banner.vue?vue&type=template&id=52bf2f26&scoped=true&

// EXTERNAL MODULE: ./plugins/dicts/ad.js
var ad = __webpack_require__(245);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/module/Banner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Bannervue_type_script_lang_js_ = ({
  name: "HomtBanner",
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {
    onBannerClick(item) {
      switch (item.jumpType) {
        case ad["a" /* AD_JUMP_TYPE */].GOODS:
          window.open(`${location.origin}/goods/detail/${item.jumpUrl}`);
          break;
        case ad["a" /* AD_JUMP_TYPE */].CATEGORY:
          window.open(`${location.origin}/goods/list?id=${item.jumpUrl}&levelType=2`);
          break;
        case ad["a" /* AD_JUMP_TYPE */].LINK:
          window.open(item.jumpUrl, '_blank');
          break;
        default:
          break;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/index/module/Banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_Bannervue_type_script_lang_js_ = (Bannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index/module/Banner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(285)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_Bannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "52bf2f26",
  "c4436384"
  
)

/* harmony default export */ var Banner = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Banner.js.map