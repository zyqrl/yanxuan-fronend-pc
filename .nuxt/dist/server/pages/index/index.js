exports.ids = [43,12,44,45,46,47];
exports.modules = {

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UiGoodsItem.vue?vue&type=template&id=034b1b21&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"goods-item",on:{"click":_vm.onItem}},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.item.mainPicture))+" alt=\"商品图片\" class=\"goods-item__img\" data-v-034b1b21> <div class=\"goods-item__title\" data-v-034b1b21>"+((_vm.isLabel(_vm.item.labelList))?("<span class=\"goods-item__title-label\" data-v-034b1b21>"+_vm._ssrEscape("\n      "+_vm._s(_vm.getLabel(_vm.item.labelList))+"\n    ")+"</span>"):"<!---->")+_vm._ssrEscape("\n    "+_vm._s(_vm.item.name)+"\n  ")+"</div> <div class=\"goods-item__price\" data-v-034b1b21><strong class=\"goods-item__price--txt\" data-v-034b1b21>"+_vm._ssrEscape(_vm._s(_vm.item.startingPrice))+"</strong></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UiGoodsItem.vue?vue&type=template&id=034b1b21&scoped=true&

// EXTERNAL MODULE: ./components/UiMoney.vue + 4 modules
var UiMoney = __webpack_require__(76);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UiGoodsItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var UiGoodsItemvue_type_script_lang_js_ = ({
  name: "UiGoodsItem",
  componetns: {
    UiMoney: UiMoney["default"]
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  methods: {
    isLabel(arr) {
      return arr.some(item => item.code);
    },
    getLabel(arr) {
      let str = "";
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].code != "miaosha") {
          str = arr[i].text;
          break;
        }
      }
      return str;
    },
    onItem() {
      // this.$router.push({
      //   path: "/goods/detail/" + this.item.id,
      // });
      window.open("/goods/detail/" + this.item.id);
    }
  }
});
// CONCATENATED MODULE: ./components/UiGoodsItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UiGoodsItemvue_type_script_lang_js_ = (UiGoodsItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/UiGoodsItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(172)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UiGoodsItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "034b1b21",
  "0e5d2e95"
  
)

/* harmony default export */ var UiGoodsItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("bf76e63a", content, true, context)
};

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiGoodsItem_vue_vue_type_style_index_0_id_034b1b21_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiGoodsItem_vue_vue_type_style_index_0_id_034b1b21_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiGoodsItem_vue_vue_type_style_index_0_id_034b1b21_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiGoodsItem_vue_vue_type_style_index_0_id_034b1b21_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiGoodsItem_vue_vue_type_style_index_0_id_034b1b21_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-034b1b21]{display:flex}.flex-inline[data-v-034b1b21]{display:inline-flex}.flex-inline[data-v-034b1b21]:after,.flex-inline[data-v-034b1b21]:before,.flex[data-v-034b1b21]:after,.flex[data-v-034b1b21]:before{display:none}.flex-left[data-v-034b1b21]{justify-content:flex-start}.flex-center[data-v-034b1b21]{justify-content:center}.flex-right[data-v-034b1b21]{justify-content:flex-end}.flex-between[data-v-034b1b21]{justify-content:space-between}.flex-around[data-v-034b1b21]{justify-content:space-around}.flex-stretch[data-v-034b1b21]{align-items:stretch}.flex-top[data-v-034b1b21]{align-items:flex-start}.flex-middle[data-v-034b1b21]{align-items:center}.flex-bottom[data-v-034b1b21]{align-items:flex-end}.flex-baseline[data-v-034b1b21]{align-items:baseline}.flex-row[data-v-034b1b21]{flex-direction:row}.flex-row-reverse[data-v-034b1b21]{flex-direction:row-reverse}.flex-column[data-v-034b1b21]{flex-direction:column}.flex-column-reverse[data-v-034b1b21]{flex-direction:column-reverse}.flex-nowrap[data-v-034b1b21]{flex-wrap:nowrap}.flex-wrap[data-v-034b1b21]{flex-wrap:wrap}.flex-wrap-reverse[data-v-034b1b21]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-034b1b21]{align-content:stretch}.flex-wrap-top[data-v-034b1b21]{align-content:flex-start}.flex-wrap-middle[data-v-034b1b21]{align-content:center}.flex-wrap-bottom[data-v-034b1b21]{align-content:flex-end}.flex-wrap-between[data-v-034b1b21]{align-content:space-between}.flex-wrap-around[data-v-034b1b21]{align-content:space-around}.flex-first[data-v-034b1b21]{order:-1}.flex-last[data-v-034b1b21]{order:99}.flex-none[data-v-034b1b21]{flex:none}.flex-auto[data-v-034b1b21]{flex:auto}.flex-1[data-v-034b1b21]{flex:1}.hover-text[data-v-034b1b21]:hover{color:#ff875b}.expend-click[data-v-034b1b21]{position:relative}.expend-click[data-v-034b1b21]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-034b1b21],[data-v-034b1b21]:after,[data-v-034b1b21]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-034b1b21],dd[data-v-034b1b21],dl[data-v-034b1b21],figure[data-v-034b1b21],form[data-v-034b1b21],h1[data-v-034b1b21],h2[data-v-034b1b21],h3[data-v-034b1b21],h4[data-v-034b1b21],h5[data-v-034b1b21],ol[data-v-034b1b21],p[data-v-034b1b21],ul[data-v-034b1b21]{margin:0;font-size:14px}button[data-v-034b1b21],input[data-v-034b1b21],ol[data-v-034b1b21],ul[data-v-034b1b21]{padding:0}li[data-v-034b1b21],ol[data-v-034b1b21],ul[data-v-034b1b21]{list-style:none;list-style-type:none}h1[data-v-034b1b21],h2[data-v-034b1b21],h3[data-v-034b1b21],h4[data-v-034b1b21],h5[data-v-034b1b21]{font-size:100%}input[data-v-034b1b21]{border:0;margin:0}img[data-v-034b1b21]{width:100%}a[data-v-034b1b21],button[data-v-034b1b21],img[data-v-034b1b21],input[data-v-034b1b21],optgroup[data-v-034b1b21],select[data-v-034b1b21],textarea[data-v-034b1b21]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-034b1b21],img[data-v-034b1b21]{-webkit-touch-callout:none;border:0}body[data-v-034b1b21],html[data-v-034b1b21]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-034b1b21],img[data-v-034b1b21],input[data-v-034b1b21],textarea[data-v-034b1b21]{vertical-align:middle;outline:none}body[data-v-034b1b21]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-034b1b21]{border-collapse:collapse;border-spacing:0}a[data-v-034b1b21],table[data-v-034b1b21]{color:#333}a[data-v-034b1b21],a[data-v-034b1b21]:hover{text-decoration:none}a[data-v-034b1b21]:hover{color:#ff512b}.scrollbar-self[data-v-034b1b21]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-034b1b21]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-034b1b21]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.goods-item[data-v-034b1b21]{width:228px;height:320px;cursor:pointer;background:#fff;transition:all .3s;padding:30px}.goods-item[data-v-034b1b21]:hover{box-shadow:0 4px 40px 1px rgba(0,0,0,.1);margin-top:-3px}.goods-item__img[data-v-034b1b21]{width:130px!important;height:130px;display:block;margin:0 auto 44px}.goods-item__title[data-v-034b1b21]{width:170px;height:45px;line-height:22px;margin-bottom:10px;font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.goods-item__title[data-v-034b1b21],.goods-item__title-label[data-v-034b1b21]{font-family:Microsoft YaHei-Regular,Microsoft YaHei;font-weight:400}.goods-item__title-label[data-v-034b1b21]{display:inline-block;width:40px;height:18px;line-height:18px;background:#ff6a19;font-size:12px;color:#fff;text-align:center;margin-right:8px}.goods-item__price[data-v-034b1b21]{width:200px;margin:0 auto}.goods-item__price--txt[data-v-034b1b21]{font-size:16px;color:#ff512b}.goods-item__price--txt[data-v-034b1b21]:before{content:\"￥\";font-size:14px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

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

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(290);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6d78c770", content, true, context)
};

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(292);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("8b84c098", content, true, context)
};

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(298);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("76a56bb0", content, true, context)
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

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/title.075111a.png";

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bkg-small.0a513c3.png";

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Seckill_vue_vue_type_style_index_0_id_b8ae4808_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(247);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Seckill_vue_vue_type_style_index_0_id_b8ae4808_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Seckill_vue_vue_type_style_index_0_id_b8ae4808_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Seckill_vue_vue_type_style_index_0_id_b8ae4808_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Seckill_vue_vue_type_style_index_0_id_b8ae4808_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-b8ae4808]{display:flex}.flex-inline[data-v-b8ae4808]{display:inline-flex}.flex-inline[data-v-b8ae4808]:after,.flex-inline[data-v-b8ae4808]:before,.flex[data-v-b8ae4808]:after,.flex[data-v-b8ae4808]:before{display:none}.flex-left[data-v-b8ae4808]{justify-content:flex-start}.flex-center[data-v-b8ae4808]{justify-content:center}.flex-right[data-v-b8ae4808]{justify-content:flex-end}.flex-between[data-v-b8ae4808]{justify-content:space-between}.flex-around[data-v-b8ae4808]{justify-content:space-around}.flex-stretch[data-v-b8ae4808]{align-items:stretch}.flex-top[data-v-b8ae4808]{align-items:flex-start}.flex-middle[data-v-b8ae4808]{align-items:center}.flex-bottom[data-v-b8ae4808]{align-items:flex-end}.flex-baseline[data-v-b8ae4808]{align-items:baseline}.flex-row[data-v-b8ae4808]{flex-direction:row}.flex-row-reverse[data-v-b8ae4808]{flex-direction:row-reverse}.flex-column[data-v-b8ae4808]{flex-direction:column}.flex-column-reverse[data-v-b8ae4808]{flex-direction:column-reverse}.flex-nowrap[data-v-b8ae4808]{flex-wrap:nowrap}.flex-wrap[data-v-b8ae4808]{flex-wrap:wrap}.flex-wrap-reverse[data-v-b8ae4808]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-b8ae4808]{align-content:stretch}.flex-wrap-top[data-v-b8ae4808]{align-content:flex-start}.flex-wrap-middle[data-v-b8ae4808]{align-content:center}.flex-wrap-bottom[data-v-b8ae4808]{align-content:flex-end}.flex-wrap-between[data-v-b8ae4808]{align-content:space-between}.flex-wrap-around[data-v-b8ae4808]{align-content:space-around}.flex-first[data-v-b8ae4808]{order:-1}.flex-last[data-v-b8ae4808]{order:99}.flex-none[data-v-b8ae4808]{flex:none}.flex-auto[data-v-b8ae4808]{flex:auto}.flex-1[data-v-b8ae4808]{flex:1}.hover-text[data-v-b8ae4808]:hover{color:#ff875b}.expend-click[data-v-b8ae4808]{position:relative}.expend-click[data-v-b8ae4808]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-b8ae4808],[data-v-b8ae4808]:after,[data-v-b8ae4808]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-b8ae4808],dd[data-v-b8ae4808],dl[data-v-b8ae4808],figure[data-v-b8ae4808],form[data-v-b8ae4808],h1[data-v-b8ae4808],h2[data-v-b8ae4808],h3[data-v-b8ae4808],h4[data-v-b8ae4808],h5[data-v-b8ae4808],ol[data-v-b8ae4808],p[data-v-b8ae4808],ul[data-v-b8ae4808]{margin:0;font-size:14px}button[data-v-b8ae4808],input[data-v-b8ae4808],ol[data-v-b8ae4808],ul[data-v-b8ae4808]{padding:0}li[data-v-b8ae4808],ol[data-v-b8ae4808],ul[data-v-b8ae4808]{list-style:none;list-style-type:none}h1[data-v-b8ae4808],h2[data-v-b8ae4808],h3[data-v-b8ae4808],h4[data-v-b8ae4808],h5[data-v-b8ae4808]{font-size:100%}input[data-v-b8ae4808]{border:0;margin:0}img[data-v-b8ae4808]{width:100%}a[data-v-b8ae4808],button[data-v-b8ae4808],img[data-v-b8ae4808],input[data-v-b8ae4808],optgroup[data-v-b8ae4808],select[data-v-b8ae4808],textarea[data-v-b8ae4808]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-b8ae4808],img[data-v-b8ae4808]{-webkit-touch-callout:none;border:0}body[data-v-b8ae4808],html[data-v-b8ae4808]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-b8ae4808],img[data-v-b8ae4808],input[data-v-b8ae4808],textarea[data-v-b8ae4808]{vertical-align:middle;outline:none}body[data-v-b8ae4808]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-b8ae4808]{border-collapse:collapse;border-spacing:0}a[data-v-b8ae4808],table[data-v-b8ae4808]{color:#333}a[data-v-b8ae4808],a[data-v-b8ae4808]:hover{text-decoration:none}a[data-v-b8ae4808]:hover{color:#ff512b}.scrollbar-self[data-v-b8ae4808]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-b8ae4808]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-b8ae4808]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.home-sckill-bar[data-v-b8ae4808]{width:100%;padding-bottom:28px}.home-sckill-bar .home-sckill-title[data-v-b8ae4808]{width:110px;height:26px;margin-right:20px}.home-sckill-bar .home-sckill-wrap .home-sckill-wrap__tip[data-v-b8ae4808]{font-size:18px;font-family:Microsoft YaHei-Regular,Microsoft YaHei;font-weight:400;color:#999;margin-right:10px}.home-sckill-bar .home-sckill-wrap__countdown .sckill-wrap-countdown__time[data-v-b8ae4808]{width:30px;height:30px;line-height:30px;text-align:center;color:#fff;font-size:18px;font-weight:700;background:#2f3430}.home-sckill-bar .home-sckill-wrap__countdown .sckill-wrap-countdown--mark[data-v-b8ae4808]{display:block;font-size:20px;margin:0 8px}.home-sckill[data-v-b8ae4808]{height:300px;cursor:pointer;margin-bottom:60px}.home-sckill .home-sckill-carousel[data-v-b8ae4808] .el-carousel{width:1200px;border-radius:4px}.home-sckill .home-sckill-carousel[data-v-b8ae4808] .el-carousel .el-carousel__container{padding:0 10px;background:#fff}.home-sckill .home-sckill-carousel[data-v-b8ae4808] .el-carousel .el-carousel__container .el-carousel__arrow{border-radius:45%}.home-sckill .home-sckill-carousel[data-v-b8ae4808] .el-carousel .el-carousel__container .el-carousel__arrow i{font-size:14px;font-weight:700}.home-sckill .home-sckill-carousel[data-v-b8ae4808] .el-carousel .el-carousel__container .el-carousel__arrow--left{left:-11px}.home-sckill .home-sckill-carousel[data-v-b8ae4808] .el-carousel .el-carousel__container .el-carousel__arrow--left i{margin-left:5px}.home-sckill .home-sckill-carousel[data-v-b8ae4808] .el-carousel .el-carousel__container .el-carousel__arrow--right{right:-11px}.home-sckill .home-sckill-carousel[data-v-b8ae4808] .el-carousel .el-carousel__container .el-carousel__arrow--right i{margin-right:5px}.home-sckill .home-sckill-carousel[data-v-b8ae4808] .el-carousel .carousel-goods{height:100%;background:#f8f8f8}.home-sckill .home-sckill-carousel[data-v-b8ae4808] .el-carousel .carousel-goods .carousel-goods-box{margin-right:15px;width:228px;height:300px;background:#fff;border-radius:4px}.home-sckill .home-sckill-carousel[data-v-b8ae4808] .el-carousel .carousel-goods .carousel-goods-box .carousel-goods-box__item{width:100%;padding:20px 24px;transition:all .3s}.home-sckill .home-sckill-carousel[data-v-b8ae4808] .el-carousel .carousel-goods .carousel-goods-box .carousel-goods-box__item:hover{transform:translateY(-3px)}.home-sckill .home-sckill-carousel[data-v-b8ae4808] .el-carousel .carousel-goods .carousel-goods-box .carousel-goods-box__item .goods-box-item__cover{width:140px;height:140px;-o-object-fit:productMainPicture;object-fit:productMainPicture;margin-bottom:24px}.home-sckill .home-sckill-carousel[data-v-b8ae4808] .el-carousel .carousel-goods .carousel-goods-box .carousel-goods-box__item .goods-box-item__wrap{font-size:16px;color:#333;text-align:center;width:100%}.home-sckill .home-sckill-carousel[data-v-b8ae4808] .el-carousel .carousel-goods .carousel-goods-box .carousel-goods-box__item .goods-box-item__wrap .box-item-wrap__title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:20px}.home-sckill .home-sckill-carousel[data-v-b8ae4808] .el-carousel .carousel-goods .carousel-goods-box .carousel-goods-box__item .goods-box-item__wrap .box-item-wrap__price{color:#ff512b;text-align:center;margin-right:15px}.home-sckill .home-sckill-carousel[data-v-b8ae4808] .el-carousel .carousel-goods .carousel-goods-box .carousel-goods-box__item .goods-box-item__wrap .box-item-wrap__price2{color:#999;text-decoration:line-through}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pick_vue_vue_type_style_index_0_id_39091ea2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(248);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pick_vue_vue_type_style_index_0_id_39091ea2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pick_vue_vue_type_style_index_0_id_39091ea2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pick_vue_vue_type_style_index_0_id_39091ea2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pick_vue_vue_type_style_index_0_id_39091ea2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-39091ea2]{display:flex}.flex-inline[data-v-39091ea2]{display:inline-flex}.flex-inline[data-v-39091ea2]:after,.flex-inline[data-v-39091ea2]:before,.flex[data-v-39091ea2]:after,.flex[data-v-39091ea2]:before{display:none}.flex-left[data-v-39091ea2]{justify-content:flex-start}.flex-center[data-v-39091ea2]{justify-content:center}.flex-right[data-v-39091ea2]{justify-content:flex-end}.flex-between[data-v-39091ea2]{justify-content:space-between}.flex-around[data-v-39091ea2]{justify-content:space-around}.flex-stretch[data-v-39091ea2]{align-items:stretch}.flex-top[data-v-39091ea2]{align-items:flex-start}.flex-middle[data-v-39091ea2]{align-items:center}.flex-bottom[data-v-39091ea2]{align-items:flex-end}.flex-baseline[data-v-39091ea2]{align-items:baseline}.flex-row[data-v-39091ea2]{flex-direction:row}.flex-row-reverse[data-v-39091ea2]{flex-direction:row-reverse}.flex-column[data-v-39091ea2]{flex-direction:column}.flex-column-reverse[data-v-39091ea2]{flex-direction:column-reverse}.flex-nowrap[data-v-39091ea2]{flex-wrap:nowrap}.flex-wrap[data-v-39091ea2]{flex-wrap:wrap}.flex-wrap-reverse[data-v-39091ea2]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-39091ea2]{align-content:stretch}.flex-wrap-top[data-v-39091ea2]{align-content:flex-start}.flex-wrap-middle[data-v-39091ea2]{align-content:center}.flex-wrap-bottom[data-v-39091ea2]{align-content:flex-end}.flex-wrap-between[data-v-39091ea2]{align-content:space-between}.flex-wrap-around[data-v-39091ea2]{align-content:space-around}.flex-first[data-v-39091ea2]{order:-1}.flex-last[data-v-39091ea2]{order:99}.flex-none[data-v-39091ea2]{flex:none}.flex-auto[data-v-39091ea2]{flex:auto}.flex-1[data-v-39091ea2]{flex:1}.hover-text[data-v-39091ea2]:hover{color:#ff875b}.expend-click[data-v-39091ea2]{position:relative}.expend-click[data-v-39091ea2]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-39091ea2],[data-v-39091ea2]:after,[data-v-39091ea2]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-39091ea2],dd[data-v-39091ea2],dl[data-v-39091ea2],figure[data-v-39091ea2],form[data-v-39091ea2],h1[data-v-39091ea2],h2[data-v-39091ea2],h3[data-v-39091ea2],h4[data-v-39091ea2],h5[data-v-39091ea2],ol[data-v-39091ea2],p[data-v-39091ea2],ul[data-v-39091ea2]{margin:0;font-size:14px}button[data-v-39091ea2],input[data-v-39091ea2],ol[data-v-39091ea2],ul[data-v-39091ea2]{padding:0}li[data-v-39091ea2],ol[data-v-39091ea2],ul[data-v-39091ea2]{list-style:none;list-style-type:none}h1[data-v-39091ea2],h2[data-v-39091ea2],h3[data-v-39091ea2],h4[data-v-39091ea2],h5[data-v-39091ea2]{font-size:100%}input[data-v-39091ea2]{border:0;margin:0}img[data-v-39091ea2]{width:100%}a[data-v-39091ea2],button[data-v-39091ea2],img[data-v-39091ea2],input[data-v-39091ea2],optgroup[data-v-39091ea2],select[data-v-39091ea2],textarea[data-v-39091ea2]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-39091ea2],img[data-v-39091ea2]{-webkit-touch-callout:none;border:0}body[data-v-39091ea2],html[data-v-39091ea2]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-39091ea2],img[data-v-39091ea2],input[data-v-39091ea2],textarea[data-v-39091ea2]{vertical-align:middle;outline:none}body[data-v-39091ea2]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-39091ea2]{border-collapse:collapse;border-spacing:0}a[data-v-39091ea2],table[data-v-39091ea2]{color:#333}a[data-v-39091ea2],a[data-v-39091ea2]:hover{text-decoration:none}a[data-v-39091ea2]:hover{color:#ff512b}.scrollbar-self[data-v-39091ea2]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-39091ea2]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-39091ea2]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.home-pick[data-v-39091ea2]{color:#333;margin-top:30px}.home-pick--label[data-v-39091ea2]{font-size:24px;margin-bottom:30px}.home-pick--label img[data-v-39091ea2]{width:16px;height:16px;margin-left:10px}.home-pick--price__18[data-v-39091ea2]{margin-top:auto;font-size:18px;color:#ff512b}.home-pick--price__18[data-v-39091ea2]:before{content:\"￥\";font-size:14px}.home-pick--price__16[data-v-39091ea2]{font-size:16px;color:#ff512b}.home-pick--price__16[data-v-39091ea2]:before{content:\"￥\";font-size:14px}.home-pick--price__14[data-v-39091ea2]{font-size:14px;color:#ff512b}.home-pick--price__14[data-v-39091ea2]:before{content:\"￥\";font-size:14px}.home-pick .home-pick-recommend[data-v-39091ea2]{width:50%;min-height:340px;padding:16px 20px 20px;border-radius:4px}.home-pick .home-pick-recommend--tag-wrap[data-v-39091ea2]{margin-bottom:8px}.home-pick .home-pick-recommend--tag-wrap .tag-wrap__item[data-v-39091ea2]{width:40px;height:20px;font-size:12px;line-height:20px;text-align:center;margin-right:4px}.home-pick .home-pick-recommend--tag-wrap .tag-wrap__item[data-v-39091ea2]:last-child{margin-right:0}.home-pick .home-pick-recommend--tag-wrap .tag-wrap__item--second_kill[data-v-39091ea2]{color:#3083ff;background:rgba(48,131,255,.1)}.home-pick .home-pick-recommend--tag-wrap .tag-wrap__item--recommended[data-v-39091ea2]{color:#ff875b;background:rgba(255,135,91,.1)}.home-pick .home-pick-recommend--title[data-v-39091ea2]{width:200px}.home-pick .home-pick-recommend--title[data-v-39091ea2],.home-pick .home-pick-recommend--title2[data-v-39091ea2]{display:block;font-size:16px;margin-bottom:6px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.home-pick .home-pick-recommend--title2[data-v-39091ea2]{width:150px}.home-pick .home-pick-recommend--subtitle[data-v-39091ea2]{font-size:12px;color:#999;margin-bottom:8px}.home-pick .home-pick-recommend__products[data-v-39091ea2]{cursor:pointer}.home-pick .home-pick-recommend__products .pick-recommend-products__left[data-v-39091ea2]{position:relative;width:292px;height:302px;background:#fff;padding:20px;margin-right:16px;transition:all .3s}.home-pick .home-pick-recommend__products .pick-recommend-products__left[data-v-39091ea2]:hover{box-shadow:0 4px 40px 1px rgba(0,0,0,.1);margin-top:-3px}.home-pick .home-pick-recommend__products .pick-recommend-products__left .recommend-products-left__cover[data-v-39091ea2]{position:absolute;right:18px;bottom:18px;width:170px;height:170px}.home-pick .home-pick-recommend__products .pick-recommend-products__left .recommend-products-left__cover img[data-v-39091ea2]{width:100%;height:100%}.home-pick .home-pick-recommend__products .pick-recommend-products__right[data-v-39091ea2]{width:266px;height:100%}.home-pick .home-pick-recommend__products .pick-recommend-products__right .recommend-products-right__item[data-v-39091ea2]{width:284px;height:144px;border-radius:4px;position:relative;background:#fff;padding:20px;transition:all .3s}.home-pick .home-pick-recommend__products .pick-recommend-products__right .recommend-products-right__item[data-v-39091ea2]:hover{box-shadow:0 4px 40px 1px rgba(0,0,0,.1)}.home-pick .home-pick-recommend__products .pick-recommend-products__right .recommend-products-right__item[data-v-39091ea2]:first-child{margin-bottom:16px}.home-pick .home-pick-recommend__products .pick-recommend-products__right .recommend-products-right__cover[data-v-39091ea2]{position:absolute;right:0;top:50%;transform:translateY(-50%);width:110px;height:110px}.home-pick .home-pick-recommend__products .pick-recommend-products__right .recommend-products-right__cover img[data-v-39091ea2]{width:100%;height:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 293:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAASBJREFUSEvt1T9KxEAUBvDvG1JYWG6Tbu29gR7AwkX3BgohM55AQUsF9wQmIaA3UNHCA+gNtne7NFtaWIR5MrKRKBNxgmXSBCbv/ebl5c8jVkdZllt1XWckN5u1kLOIzKMoMkmSvLg8Nsl5nr8CGHuwO2vtfXtdKbUHYN8Tu9Bab/yExVehiLyRXLaviciI5LovXmv9WWy7YgcvAFxYa+uQNiilIgCn7o69sIjcGGMOQ9AmNsuya5IHA4yhFV8v0NCKP7fi0Rgz6fnlPZDc7fpX9DG/5fSB31fC2m+7h8JPVVVNHRjH8S2AnS48CCZ5kqbpzGFFURyLyOW/wACWJM8dJiJnAEYhcNdoCnmg3tG0DeAKQK9hCmAO4Ehr/ewq+QAKieIXkEeTdwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 294:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAk9JREFUSEvtlT1oFFEQx/8zd5icZ6Foc5fCQiHiBxY2QSwUjIgWioqVAYNyu3tn4SWKWggLFhGRnMh97SIoEbHRIogQtdBK0tgoBgUtLLLbCAp65AzuG3nH3pHEy32kE5zyzcxv3vyZN4/QoTmO8xDAUQBPDMM42S6N2gXU/Y7jvAewFcCMYRjb2uW1BOfz+fXRaHQ/M+8UERPAOgDfiKgcBMHbarU6lc1mvzcr0hScy+XWxuPxsyJyTkT6iCi6NFlEfgPwmfl2pVK5s7TAX2DXdXWbt5RSezVQRH4R0SyA1wC+ANgIYHdYsEcXYOZXAM6nUiktV80WgYvFYj8zTxJRf+h/Q0Rjnuc9tW27Wk+ybbs3mUweFpErAHaF5zNBEBxLp9MfF4ELhcKaSCTygogGwjbvz83NjSynoU7WksVisXEAQ2F300EQDGYymZ+NG7uue0EpNaYDiGjC87wztm1rHVuabdvRRCLhAhgOL3TJNM3xGjh0vgOwBcBnAAOGYXxtB10wihsATAPYBOCD7/s7auBSqbSdmacA9CmlRizLynUKXQC/COAGgFml1ME6WE+A1jeqlDplWdaDbsGlUmmImSe0HCIy2AAz80sNU0oNW5Z1bwXg08x8N2Ts+w/+16VwHGcPgGcAVhPRJxGZ73YqiGiViGwG8APAofrL600kEpMADnQLbBL/3Pf9I41d4TiOfpbHRUSvRV5BAUVEeq0+1uug5Q9SLpdPENFNAD1NCs2LyKhpmo86/kHqga7rXlNKXV7uB2Hm66lU6moz8B8h6D1NfIoXGAAAAABJRU5ErkJggg=="

/***/ }),

/***/ 295:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAwRJREFUWEftmU9y0zAYxd9HFyzJDSgnoDegPQFlx8RZpCeg3aGyICzA2VFOQJiJM+yAE7Q9QdsTUE7QZN0pH+P/kmxJtqOkE6badSxZvz7JT+9TCBvWaMN44R2Yx8FnAMNMiAm9jY58iuIVmMPgqwSbc05IRAe+oL0BG2C9Q3sBdsB6hV4auCGsN+ilgFvCeoHuDNwRdmnoTsANYK8A9AA8tbhDJ/doDcxh/wSgNxaQBf7ybvL8EZ0BeGLuSx9ITEdtLK8VMIf9IUCx15paAkvvZpdxB/7Y33FD8wGJ2aQpdGPgtrA5gG/oRsBdYVcB7QReFtY3tBXYF6xPaCOwb1hf0LXAq4LVoC/szlDvHhVg/jTYB/EP68uYXtHx9GdTK6rr10AUALRHYhp7edEU4MSCtugUnJxShtbON23/lBOaMMcd7+W+Hr+rAF43bLE9XIeRBl0Ch0G8xC/Xoaw+h1Np4BeJaF9VOAz4PmCbKk0iSsSVFb6uT1f+9qzrI7Uo/YdEtK0BD0YAv1dfuj5Yu9JlqlNdIo2OcYk+B9PhstblUtToQ+mHGMfOHsATErPDvK8zS3SddFXjHoBXpezDlli1sv+PwhwGvwEkJm1vpTc2GiNlAg4HuwCfumZIDorshDMqzOFAinMcg+d3CwuAkmo4a6M8+rFyrNO5dvi8KP9O42IVWB4jz0nnJKbplUHWHCWSfPpVB8fv4PD1NrAVr0rSZEV4NOzh8e1NOd3dMxLfr/XMrYwJ7XM6gOUEx1/kEyeH0NRakIiKLK0rmYOxBSpdYc5WpTqnS2FpcP0tjRpY1FXQwkwRYNTbI23MOLgAYydbr8rNkEthKXJWy5V0Syihqcit1WclmKqi5dOrKcXMVXNl/5mA5W2jrgKrRcE3ElHy24cGfAXQvAb7rO7ezVLmq9aj24u0h8ttwzii4+ik9hkUG3SunEl3M7BaPSsfk/wyHgc3RdFKuARDVqu0JGl5ZRs0CdEe2GEvpYpB7M3PLTsxN7w6DzYK0RrYDXA/PTYuD/8Drr3hPP1hE/sAAAAASUVORK5CYII="

/***/ }),

/***/ 296:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAwNJREFUWEftmc111DAUhd+bBpgOCBWQDkgqADpINn72iqQCQgWElf28maECQgUkFRAqIFRAZjsLiyMfS8ga68cemZxwoq31882VdHWlQXhkBR8ZLyQHZuaPAHDSCbEmovOUoiQFrqpqhYgKtuUUQqzzPD9NBZ0MeAhWQaaETgLsg00NvTdwDGxK6L2Ax8Cmgp4MPAU2BfQk4AjYHwCwBIDnLneYuhFHA1dVdYmI7zw2tUHEo87SrgHgmafuByK6GGN5o4Druj4RQqxCsFmW3co6dV0fCiG80Ih4mmXZOhY6GngsrAJIDR0FPBV2Dugg8L6wqaG9wKlgU0I7gVPDpoIeBJ4L1oL+7nMGl3vsADPzGwD4ErCZt0R0FWtFQ/UiRIGmaY6LopC2qEsPuLOgb90pNcgz1jd9PyoC+h4Rj5Wvy7408L+GNZZH6DDqQZvAV0KI1y5FUiprjxFSGhG/Zlkml+pfhZlZPARsrNJE1IqrFWbmu6F0NaeyI5T+RUQHNrBMTe97O3JkMNnHNQJK61TXc4kuOspb7z0AnO1rXVN/QLempYDLLjefqb6CWWLqoHO1ewKeS9mnJTG3sv+Pwsz8EwBakw4U7Y2RbXQmKMvyaLFYyJAVLOqEcyrMzGack+DqbWEDAO1tWJamaS5U9LOO9RuL4pXRpo2LA8BmG3PMGyJqnwyilgQzm6ffTmPZSVmWB4vFQs5KW0xFVqvVcrvd/jaAXxRFcWdnbrNNaMzQnU4nOCHEpzzP9YmjICy1NkQkX3zaYiupwHxQ3Qy3szI0phfYbAwAg680VjTszYL1TQcY6/Wo14aZ5dXpsPvNO2OGgHXkHLquyE5Ntczcan8DAA1mCeHbeDtXMSfwwPrbuV/Jkeq6NoN/TxHr22ciav9OsIDlw6EMW3a5Hnp3cwK71p/dqzX4ORFdqjquJWW6imvmXLI7ga2d3NtMZmfMLF1AbbRbRNRqCSFMS9LTawLbPutbH/KbDzhoad30Sm9+GRpIKelzlVAfXuCYxg9R59Hl4T8tSDFLAh0RrAAAAABJRU5ErkJggg=="

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbarFixed_vue_vue_type_style_index_0_id_7120ad78_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(249);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbarFixed_vue_vue_type_style_index_0_id_7120ad78_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbarFixed_vue_vue_type_style_index_0_id_7120ad78_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbarFixed_vue_vue_type_style_index_0_id_7120ad78_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbarFixed_vue_vue_type_style_index_0_id_7120ad78_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-7120ad78]{display:flex}.flex-inline[data-v-7120ad78]{display:inline-flex}.flex-inline[data-v-7120ad78]:after,.flex-inline[data-v-7120ad78]:before,.flex[data-v-7120ad78]:after,.flex[data-v-7120ad78]:before{display:none}.flex-left[data-v-7120ad78]{justify-content:flex-start}.flex-center[data-v-7120ad78]{justify-content:center}.flex-right[data-v-7120ad78]{justify-content:flex-end}.flex-between[data-v-7120ad78]{justify-content:space-between}.flex-around[data-v-7120ad78]{justify-content:space-around}.flex-stretch[data-v-7120ad78]{align-items:stretch}.flex-top[data-v-7120ad78]{align-items:flex-start}.flex-middle[data-v-7120ad78]{align-items:center}.flex-bottom[data-v-7120ad78]{align-items:flex-end}.flex-baseline[data-v-7120ad78]{align-items:baseline}.flex-row[data-v-7120ad78]{flex-direction:row}.flex-row-reverse[data-v-7120ad78]{flex-direction:row-reverse}.flex-column[data-v-7120ad78]{flex-direction:column}.flex-column-reverse[data-v-7120ad78]{flex-direction:column-reverse}.flex-nowrap[data-v-7120ad78]{flex-wrap:nowrap}.flex-wrap[data-v-7120ad78]{flex-wrap:wrap}.flex-wrap-reverse[data-v-7120ad78]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-7120ad78]{align-content:stretch}.flex-wrap-top[data-v-7120ad78]{align-content:flex-start}.flex-wrap-middle[data-v-7120ad78]{align-content:center}.flex-wrap-bottom[data-v-7120ad78]{align-content:flex-end}.flex-wrap-between[data-v-7120ad78]{align-content:space-between}.flex-wrap-around[data-v-7120ad78]{align-content:space-around}.flex-first[data-v-7120ad78]{order:-1}.flex-last[data-v-7120ad78]{order:99}.flex-none[data-v-7120ad78]{flex:none}.flex-auto[data-v-7120ad78]{flex:auto}.flex-1[data-v-7120ad78]{flex:1}.hover-text[data-v-7120ad78]:hover{color:#ff875b}.expend-click[data-v-7120ad78]{position:relative}.expend-click[data-v-7120ad78]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-7120ad78],[data-v-7120ad78]:after,[data-v-7120ad78]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-7120ad78],dd[data-v-7120ad78],dl[data-v-7120ad78],figure[data-v-7120ad78],form[data-v-7120ad78],h1[data-v-7120ad78],h2[data-v-7120ad78],h3[data-v-7120ad78],h4[data-v-7120ad78],h5[data-v-7120ad78],ol[data-v-7120ad78],p[data-v-7120ad78],ul[data-v-7120ad78]{margin:0;font-size:14px}button[data-v-7120ad78],input[data-v-7120ad78],ol[data-v-7120ad78],ul[data-v-7120ad78]{padding:0}li[data-v-7120ad78],ol[data-v-7120ad78],ul[data-v-7120ad78]{list-style:none;list-style-type:none}h1[data-v-7120ad78],h2[data-v-7120ad78],h3[data-v-7120ad78],h4[data-v-7120ad78],h5[data-v-7120ad78]{font-size:100%}input[data-v-7120ad78]{border:0;margin:0}img[data-v-7120ad78]{width:100%}a[data-v-7120ad78],button[data-v-7120ad78],img[data-v-7120ad78],input[data-v-7120ad78],optgroup[data-v-7120ad78],select[data-v-7120ad78],textarea[data-v-7120ad78]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-7120ad78],img[data-v-7120ad78]{-webkit-touch-callout:none;border:0}body[data-v-7120ad78],html[data-v-7120ad78]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-7120ad78],img[data-v-7120ad78],input[data-v-7120ad78],textarea[data-v-7120ad78]{vertical-align:middle;outline:none}body[data-v-7120ad78]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-7120ad78]{border-collapse:collapse;border-spacing:0}a[data-v-7120ad78],table[data-v-7120ad78]{color:#333}a[data-v-7120ad78],a[data-v-7120ad78]:hover{text-decoration:none}a[data-v-7120ad78]:hover{color:#ff512b}.scrollbar-self[data-v-7120ad78]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-7120ad78]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-7120ad78]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.home-tabbar-fixed[data-v-7120ad78]{position:fixed;z-index:99;left:50%;margin-left:630px;border:1px solid #f8f8f8}.home-tabbar-fixed--change[data-v-7120ad78]{margin-left:390px}.home-tabbar-fixed .home-tabbar-fixed__qrcode[data-v-7120ad78]{width:230px;height:260px;background:#fff;box-shadow:0 4px 30px 1px rgba(0,0,0,.1);font-size:14px;color:#666;padding:22px 20px;margin-right:10px}.home-tabbar-fixed .home-tabbar-fixed__qrcode img[data-v-7120ad78]{width:186px;height:186px;margin-bottom:14px}.home-tabbar-fixed .home-tabbar-fixed__box[data-v-7120ad78]{width:60px;height:180px;background:#fff;border-radius:2px}.home-tabbar-fixed .home-tabbar-fixed__box--height-short[data-v-7120ad78]{height:120px}.home-tabbar-fixed .home-tabbar-fixed__box .tabbar-fixed-box__common[data-v-7120ad78]{height:60px;padding:0 15px;cursor:pointer;font-size:14px;color:#ff875b}.home-tabbar-fixed .home-tabbar-fixed__box .tabbar-fixed-box__common img[data-v-7120ad78]{width:22px;height:22px}.home-tabbar-fixed .home-tabbar-fixed__box .tabbar-fixed-box__line[data-v-7120ad78]{width:30px;height:1px;background:#eee;margin:0 auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(406);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4a8d4d94", content, true, context)
};

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

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/module/Seckill.vue?vue&type=template&id=b8ae4808&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"main"},[_vm._ssrNode("<div class=\"home-sckill-bar flex flex-middle\" data-v-b8ae4808><img"+(_vm._ssrAttr("src",__webpack_require__(287)))+" alt class=\"home-sckill-title\" data-v-b8ae4808> <div class=\"home-sckill-wrap\" data-v-b8ae4808><div class=\"home-sckill-wrap__tip\" data-v-b8ae4808>"+_vm._ssrEscape("\n        "+_vm._s(_vm.data.activityTimeVO.timeName)+" "+_vm._s(_vm.seckillText)+"\n      ")+"</div></div> <div class=\"home-sckill-wrap__countdown flex flex-middle flex-center\" data-v-b8ae4808><div class=\"sckill-wrap-countdown__time\" data-v-b8ae4808>"+_vm._ssrEscape(_vm._s(_vm.countdown.hour))+"</div> <span class=\"sckill-wrap-countdown--mark\" data-v-b8ae4808>:</span> <div class=\"sckill-wrap-countdown__time\" data-v-b8ae4808>"+_vm._ssrEscape("\n        "+_vm._s(_vm.countdown.minute)+"\n      ")+"</div> <span class=\"sckill-wrap-countdown--mark\" data-v-b8ae4808>:</span> <div class=\"sckill-wrap-countdown__time\" data-v-b8ae4808>"+_vm._ssrEscape("\n        "+_vm._s(_vm.countdown.second)+"\n      ")+"</div></div></div> "),_vm._ssrNode("<div class=\"home-sckill flex\" data-v-b8ae4808>","</div>",[_vm._ssrNode("<div class=\"home-sckill-carousel\" data-v-b8ae4808>","</div>",[_c('el-carousel',{attrs:{"height":"300px","arrow":"always","autoplay":false,"loop":false}},_vm._l((_vm.goodsList),function(item,index){return _c('el-carousel-item',{key:index},[_c('div',{staticClass:"carousel-goods flex"},_vm._l((item),function(itemChild,indexChild){return _c('div',{key:itemChild.productId,staticClass:"carousel-goods-box flex flex-middle"},[_c('div',{staticClass:"carousel-goods-box__item flex flex-column flex-middle"},[_c('img',{staticClass:"goods-box-item__cover",attrs:{"src":itemChild.productMainPicture}}),_vm._v(" "),_c('div',{staticClass:"goods-box-item__wrap"},[_c('p',{staticClass:"box-item-wrap__title"},[_vm._v("\n                    "+_vm._s(itemChild.productName)+"\n                  ")]),_vm._v(" "),_c('p',[_c('strong',{staticClass:"box-item-wrap__price"},[_vm._v("￥"+_vm._s(itemChild.activityPrice))]),_vm._v(" "),_c('span',{staticClass:"box-item-wrap__price2"},[_vm._v("￥"+_vm._s(itemChild.originalPrice))])])])])])}),0)])}),1)],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/module/Seckill.vue?vue&type=template&id=b8ae4808&scoped=true&

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(165);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/module/Seckill.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const CAROUSEL_COUNT = 5; // 走马灯每页展示商品数

/* harmony default export */ var Seckillvue_type_script_lang_js_ = ({
  name: "HomeSeckill",
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    list: {
      Type: Object,
      default: () => []
    },
    current: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      bkgUrl: __webpack_require__(288),
      goodsList: [],
      seckillTime: 0,
      // 秒杀时间
      seckillText: "",
      // 秒杀文案
      timeInterval: null // 倒计时定时器
    };
  },

  watch: {
    list: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val.length > 0) {
          this.setCarouselData(val);
        }
      }
    },
    data: {
      deep: true,
      immediate: true,
      handler(val) {
        const {
          activityTimeVO: {
            activityStartTime,
            activityEndTime
          }
        } = val;
        this.setTimerInterval({
          startTime: activityStartTime,
          endTime: activityEndTime
        });
      }
    }
  },
  computed: {
    // 秒杀活动倒计时
    countdown() {
      const data = parseInt(this.seckillTime / 1e3);
      const hour = Math.floor(data / 60 / 60);
      const minute = Math.floor(data / 60 % 60);
      const second = Math.floor(data % 60);
      return {
        hour: hour < 10 ? `0${hour}` : `${hour}`,
        minute: minute < 10 ? `0${minute}` : `${minute}`,
        second: second < 10 ? `0${second}` : `${second}`
      };
    }
  },
  destroyed() {
    clearInterval(this.timeInterval);
  },
  methods: {
    // 走马灯商品列表，五个商品为一组
    setCarouselData(list) {
      const listCopy = external_lodash_default.a.cloneDeep(list);
      const part = Math.ceil(listCopy.length / CAROUSEL_COUNT);
      if (part === 1) {
        this.goodsList = [listCopy.splice(0, CAROUSEL_COUNT)];
        return;
      }
      for (let i = 0; i < part; i++) {
        const goodsListItem = listCopy.splice(0, CAROUSEL_COUNT);
        this.goodsList.push(goodsListItem);
      }
    },
    // 获取秒杀倒计时时间
    setTimerInterval({
      startTime,
      endTime
    }) {
      startTime = startTime.replace(/\-/g, "/");
      endTime = endTime.replace(/\-/g, "/");
      startTime = new Date(startTime).getTime();
      endTime = new Date(endTime).getTime();
      if (this.current > startTime && this.current < endTime) {
        // 活动进行中
        this.seckillText = "距结束";
        this.seckillTime = endTime - this.current;
      } else {
        // 活动未开始
        this.seckillText = "距开始";
        this.seckillTime = startTime - this.current;
      }
      this.timeInterval = setInterval(() => {
        if (this.seckillTime <= 0) {
          clearInterval(this.timeInterval);
          this.$emit("refresh");
          return;
        }
        this.seckillTime -= 1000;
      }, 1e3);
    },
    onJumpSeckill() {
      window.open(`${location.origin}/seckill`);
    }
  }
});
// CONCATENATED MODULE: ./pages/index/module/Seckill.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_Seckillvue_type_script_lang_js_ = (Seckillvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index/module/Seckill.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(289)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_Seckillvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b8ae4808",
  "0851a70d"
  
)

/* harmony default export */ var Seckill = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/module/Pick.vue?vue&type=template&id=39091ea2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-pick flex flex-between"},[_vm._ssrNode(((_vm.showRecommend)?("<div class=\"home-pick-recommend\" data-v-39091ea2><div class=\"home-pick--label flex flex-middle\" data-v-39091ea2><strong data-v-39091ea2>甄选推荐</strong></div> <div class=\"home-pick-recommend__products flex flex-middle flex-between\" data-v-39091ea2><div class=\"pick-recommend-products__left\" data-v-39091ea2><strong class=\"home-pick-recommend--title\" data-v-39091ea2>"+_vm._ssrEscape(_vm._s(_vm.recommendGoodsOne.title))+"</strong> <p class=\"home-pick-recommend--subtitle\" data-v-39091ea2>"+_vm._ssrEscape("\n          "+_vm._s(_vm.recommendGoodsOne.subtitle)+"\n        ")+"</p> "+(_vm._ssrList((_vm.recommendGoodsOne.labelList),function(item){return ("<div class=\"home-pick-recommend--tag-wrap flex\" data-v-39091ea2><div"+(_vm._ssrClass(null,("tag-wrap__item tag-wrap__item--" + (item.code))))+" data-v-39091ea2>"+_vm._ssrEscape("\n            "+_vm._s(item.text)+"\n          ")+"</div></div>")}))+" <strong class=\"home-pick--price__18\" data-v-39091ea2>"+_vm._ssrEscape(_vm._s(_vm.recommendGoodsOne.startingPrice))+"</strong> <div class=\"recommend-products-left__cover\" data-v-39091ea2><img"+(_vm._ssrAttr("src",_vm.recommendGoodsOne.recommendPicture))+" data-v-39091ea2></div></div> <div class=\"pick-recommend-products__right flex flex-column flex-between\" data-v-39091ea2>"+(_vm._ssrList((_vm.recommendArray),function(item,index){return ("<div class=\"recommend-products-right__item flex flex-column\" data-v-39091ea2><strong class=\"home-pick-recommend--title2\" data-v-39091ea2>"+_vm._ssrEscape(_vm._s(item.title))+"</strong> <p class=\"home-pick-recommend--subtitle\" data-v-39091ea2>"+_vm._ssrEscape("\n            "+_vm._s(_vm.recommendGoodsOne.subtitle)+"\n          ")+"</p> "+(_vm._ssrList((_vm.recommendGoodsOne.labelList),function(itemLabel){return ("<div class=\"home-pick-recommend--tag-wrap flex\" data-v-39091ea2><div"+(_vm._ssrClass(null,("tag-wrap__item tag-wrap__item--" + (itemLabel.code))))+" data-v-39091ea2>"+_vm._ssrEscape("\n              "+_vm._s(itemLabel.text)+"\n            ")+"</div></div>")}))+" <strong class=\"home-pick--price__18\" data-v-39091ea2>"+_vm._ssrEscape(_vm._s(item.startingPrice))+"</strong> <div class=\"recommend-products-right__cover flex-1\" data-v-39091ea2><img"+(_vm._ssrAttr("src",item.recommendPicture))+" data-v-39091ea2></div></div>")}))+"</div></div></div>"):"<!---->")+" "+((_vm.showNew)?("<div class=\"home-pick-recommend\" data-v-39091ea2><div class=\"home-pick--label flex flex-middle\" data-v-39091ea2><strong data-v-39091ea2>新品上架</strong></div> <div class=\"home-pick-recommend__products flex flex-middle flex-between\" data-v-39091ea2><div class=\"pick-recommend-products__left\" data-v-39091ea2><strong class=\"home-pick-recommend--title\" data-v-39091ea2>"+_vm._ssrEscape("\n          "+_vm._s(_vm.newGoodsOne.name)+"\n        ")+"</strong> "+(_vm._ssrList((_vm.newGoodsOne.labelList),function(item){return ("<div class=\"home-pick-recommend--tag-wrap flex\" data-v-39091ea2><div"+(_vm._ssrClass(null,("tag-wrap__item tag-wrap__item--" + (item.code))))+" data-v-39091ea2>"+_vm._ssrEscape("\n            "+_vm._s(item.text)+"\n          ")+"</div></div>")}))+" <p class=\"home-pick-recommend--subtitle\" data-v-39091ea2>"+_vm._ssrEscape("\n          "+_vm._s(_vm.newGoodsOne.subtitle)+"\n        ")+"</p> <strong class=\"home-pick--price__18\" data-v-39091ea2>"+_vm._ssrEscape(_vm._s(_vm.newGoodsOne.startingPrice))+"</strong> <div class=\"recommend-products-left__cover\" data-v-39091ea2><img"+(_vm._ssrAttr("src",_vm.newGoodsOne.mainPicture))+" data-v-39091ea2></div></div> <div class=\"pick-recommend-products__right flex flex-column flex-between\" data-v-39091ea2>"+(_vm._ssrList((_vm.newArray),function(item,index){return ("<div class=\"recommend-products-right__item flex flex-column\" data-v-39091ea2><strong class=\"home-pick-recommend--title2\" data-v-39091ea2>"+_vm._ssrEscape(_vm._s(item.name))+"</strong> <p class=\"home-pick-recommend--subtitle\" data-v-39091ea2>"+_vm._ssrEscape("\n            "+_vm._s(item.subtitle)+"\n          ")+"</p> "+(_vm._ssrList((item.labelList),function(itemLabel){return ("<div class=\"home-pick-recommend--tag-wrap flex\" data-v-39091ea2><div"+(_vm._ssrClass(null,("tag-wrap__item tag-wrap__item--" + (itemLabel.code))))+" data-v-39091ea2>"+_vm._ssrEscape("\n              "+_vm._s(itemLabel.text)+"\n            ")+"</div></div>")}))+" <strong class=\"home-pick--price__18\" data-v-39091ea2>"+_vm._ssrEscape(_vm._s(item.startingPrice))+"</strong> <div class=\"recommend-products-right__cover flex-1\" data-v-39091ea2><img"+(_vm._ssrAttr("src",item.mainPicture))+" data-v-39091ea2></div></div>")}))+"</div></div></div>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/module/Pick.vue?vue&type=template&id=39091ea2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/module/Pick.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const RECOMMEND_MIN_COUNT = 3; // 甄选推荐商品数
const NEW_MIN_COUNT = 3; // 新品上架商品数

/* harmony default export */ var Pickvue_type_script_lang_js_ = ({
  name: "HomePick",
  props: {
    recommendData: {
      type: Array,
      default: () => []
    },
    newData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      recommendGoodsOne: null,
      recommendArray: [],
      showRecommend: false,
      newGoodsOne: null,
      newArray: [],
      showNew: false
    };
  },
  watch: {
    recommendData: {
      immediate: true,
      deep: true,
      handler(val) {
        if (val && val.length >= RECOMMEND_MIN_COUNT) {
          this.showRecommend = true;
          const [one, two, three] = val;
          this.recommendGoodsOne = one;
          this.recommendArray = [two, three];
        }
      }
    },
    newData: {
      immediate: true,
      deep: true,
      handler(val) {
        if (val && val.length >= NEW_MIN_COUNT) {
          this.showNew = true;
          this.newGoodsOne = val[0];
          this.newArray = val.slice(1, NEW_MIN_COUNT);
        }
      }
    }
  },
  methods: {
    onJumpGoodsDetail(id) {
      window.open(`${location.origin}/goods/detail/${id}`);
    }
  }
});
// CONCATENATED MODULE: ./pages/index/module/Pick.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_Pickvue_type_script_lang_js_ = (Pickvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index/module/Pick.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(291)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_Pickvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "39091ea2",
  "5ebfb99a"
  
)

/* harmony default export */ var Pick = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/module/TabbarFixed.vue?vue&type=template&id=7120ad78&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.tabBarVisible)?_c('div',{staticClass:"home-tabbar-fixed flex",style:(_vm.tabBarStyle)},[_vm._ssrNode("<div"+(_vm._ssrClass("home-tabbar-fixed__box flex flex-column flex-middle",{ 'home-tabbar-fixed__box--height-short': !_vm.showToTop }))+" data-v-7120ad78><div class=\"tabbar-fixed-box__common flex flex-middle\" data-v-7120ad78><span"+(_vm._ssrStyle(null,null, { display: (_vm.appHover) ? '' : 'none' }))+" data-v-7120ad78>下载APP</span> <img"+(_vm._ssrAttr("src",__webpack_require__(293)))+(_vm._ssrStyle(null,null, { display: (!_vm.appHover) ? '' : 'none' }))+" data-v-7120ad78></div> <div class=\"tabbar-fixed-box__line\" data-v-7120ad78></div> <div class=\"tabbar-fixed-box__common flex flex-middle\" data-v-7120ad78><span"+(_vm._ssrStyle(null,null, { display: (_vm.messageHover) ? '' : 'none' }))+" data-v-7120ad78>消息通知</span> <img"+(_vm._ssrAttr("src",__webpack_require__(294)))+(_vm._ssrStyle(null,null, { display: (!_vm.messageHover) ? '' : 'none' }))+" data-v-7120ad78></div> <div"+(_vm._ssrStyle(null,null, { display: (_vm.showToTop) ? '' : 'none' }))+" data-v-7120ad78><div class=\"tabbar-fixed-box__line\" data-v-7120ad78></div> <div class=\"tabbar-fixed-box__common flex flex-middle\" data-v-7120ad78><img"+(_vm._ssrAttr("src",__webpack_require__(295)))+(_vm._ssrStyle(null,null, { display: (_vm.totopHover) ? '' : 'none' }))+" data-v-7120ad78> <img"+(_vm._ssrAttr("src",__webpack_require__(296)))+(_vm._ssrStyle(null,null, { display: (!_vm.totopHover) ? '' : 'none' }))+" data-v-7120ad78></div></div></div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/module/TabbarFixed.vue?vue&type=template&id=7120ad78&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/module/TabbarFixed.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TabbarFixedvue_type_script_lang_js_ = ({
  name: "HomeTabbarFixed",
  props: {
    scrollTop: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      appHover: false,
      messageHover: false,
      totopHover: false,
      tabBarVisible: false,
      tabBarStyle: null
    };
  },
  computed: {
    showToTop() {
      return this.scrollTop > 400;
    }
  },
  mounted() {
    this.getTabBarVisible();
    this.getTabBarStyle();
  },
  methods: {
    getTabBarVisible() {
      const clientWidth = document.body.clientWidth;
      if (clientWidth >= 1200) {
        this.tabBarVisible = true;
      }
    },
    // 根据屏高计距离顶部高度
    getTabBarStyle() {
      const clientHeight = document.body.clientHeight;
      const TOP = 630;
      const NORMAL_HEIGHT = 1080;
      this.tabBarStyle = {
        top: `${TOP / NORMAL_HEIGHT * clientHeight}px`
      };
    },
    onOpenMessagePage() {
      if (!this.$isLoginValidate()) {
        return;
      }
      window.open(`${location.origin}/account/message`);
    },
    toPageTop() {
      document.querySelector("body").scrollIntoView({
        behavior: "smooth"
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/index/module/TabbarFixed.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_TabbarFixedvue_type_script_lang_js_ = (TabbarFixedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index/module/TabbarFixed.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(297)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_TabbarFixedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7120ad78",
  "cf5189d8"
  
)

/* harmony default export */ var TabbarFixed = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAsCAYAAAAjFjtnAAAAAXNSR0IArs4c6QAAAmtJREFUaEPtVz1s00AUft8RwZxkyFAJJJKwMdmJVEYWGNhA6la1Gwx0gxWxwtYOdGvFVgk2BlgYQUqciamNXYlKDBmSzBRzDzmKqzZtyPnu6h+BR/v9fN973717Bs15er3eGhE9YOYWMy9FZgB+AOgS0QfHcXbn+ab5HrPJOp3OmhDiJRFdXwDkSEr5ot1uZ0rkDAHP8zaJ6GnCCm65rruR0Mea+QkBTfAxkMxITAhMZbNjUhYp5XoWcpoQ8Dzvu4LmF/E7cl33xiIj298RTRtmNqp+DArAetrTKSLwjpkf2qgMgPeO4zyyEUs1BizJJ86XuozQ7XZDAFdUGf/Njpl/t1qtko1YqjGKT6DwEsrbIe73+8tCiFUiusvMN6c72CERfZZSvm02m19PyytXYzQIgjdE9HiB/rfr9fqTk9Gdl4vM9/2PAO6pHF5m/tRoNO5PupOHVUKx8rPcJp3IfJmbav6LSuVnbaSUdzJfpzWrH3PZzvyHJgiCfSK6pdMBIjo4RyAOlNYvpe/7vwBo3d7MHM4loFmRxG6FJ3BpEkpcSk0H64dYE4e2m9Uxqo3C0FGzC2cvMkMMxu5Gq4RxdksBFDtxfpmzlN9KmMTrtJWsGQbJ/CIz5f6fgGkFTf2NOjAajZ4x84oQ4nYEREr5DcBepVJ5bQpM1V+LwGAwqJdKpT0AzkWJmLkXhuFKrVYLVIHo2mkRGA6H3jzwMZCIRLVadXWBqfolJhDJhoheKSZ4ftlySkxApfppdiExgfF4/JOZr6p0AMBxuVy+pmKra/PvESi8hAp/iCOtqnQht2M0IlD4iyyeGHlYJf4A9wtqKtaXU0gAAAAASUVORK5CYII="

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAsCAYAAAAjFjtnAAAAAXNSR0IArs4c6QAAAnZJREFUaEPtVz1s00AUfu8IMCcZMiCBhJ0yMcVEgpEFBjaGbqjdYICtrIi13WCADcRWCTYGWBhBSuyJCWIjEYkhQ5IZ6t5DF8VuE1J8Pp/vHKkZsuTdy/d3z88IFfkEQbAFAHeI6BoRXRCwEPEXIvYB4H2n03m9Ciraxt/r9bYYY08B4GIGliHn/Em3210gYpWA7/vPAOBhThGfe573KDljjYAi+AR3SsIKgXlsXuVUfqGcc74t4mSFgO/7PyUyn8Vv6HneJeMExLQhokLqp/lH3LZB4C0R3c2SV+Z3RHxnnICm+CT8hsYJ9Pv9GBHPyCicVUNEh6cEslRa/r30CA0Gg+uMsXsAcJOILs93kh8A8Ilz/qbdbn/JC/p4fRAE5V3iKIpeAMD9DIAvHcd5oEqitDEahuEHRLwlA4yIPrque1umdlWNphgdPcgklV/GouyE1lVinvnPKmpyzm+o3glty5yi+glfZRdEA0USi+t0FEXfAGBDxQEA+O44zhXFs7NjhV9owjA8QMSaCggiil3XPatydvmM8itlVQioioC2I6QKPF2pbV7iouBnW4KtMaoD/IyA+FJ0odAI1UpANDO5SugCnzqQNJR0ohLKp5d4WY2y12md6v/jgO7mJvoZf6XUTeqUgG5F8/Yz6sBkMtkhok3G2FUBlHP+FRH3G43GXl7gJ04h1Ub/OzcajZxarbaPiJ1VdUQUxHG82Wq1orz/b8SB8XjsnwQ+ASxINJtNr3IERGwAYFcS2OO8cSrdARn1i7hQOoHpdPqbiM7JOICIf+r1+nmZWmOXeO0JrH2E1v4Si6zKuFDZMSoIrP2DLJkYZawSfwFImWk04DX/kQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_08e1e566_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(335);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_08e1e566_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_08e1e566_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_08e1e566_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_08e1e566_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-08e1e566]{display:flex}.flex-inline[data-v-08e1e566]{display:inline-flex}.flex-inline[data-v-08e1e566]:after,.flex-inline[data-v-08e1e566]:before,.flex[data-v-08e1e566]:after,.flex[data-v-08e1e566]:before{display:none}.flex-left[data-v-08e1e566]{justify-content:flex-start}.flex-center[data-v-08e1e566]{justify-content:center}.flex-right[data-v-08e1e566]{justify-content:flex-end}.flex-between[data-v-08e1e566]{justify-content:space-between}.flex-around[data-v-08e1e566]{justify-content:space-around}.flex-stretch[data-v-08e1e566]{align-items:stretch}.flex-top[data-v-08e1e566]{align-items:flex-start}.flex-middle[data-v-08e1e566]{align-items:center}.flex-bottom[data-v-08e1e566]{align-items:flex-end}.flex-baseline[data-v-08e1e566]{align-items:baseline}.flex-row[data-v-08e1e566]{flex-direction:row}.flex-row-reverse[data-v-08e1e566]{flex-direction:row-reverse}.flex-column[data-v-08e1e566]{flex-direction:column}.flex-column-reverse[data-v-08e1e566]{flex-direction:column-reverse}.flex-nowrap[data-v-08e1e566]{flex-wrap:nowrap}.flex-wrap[data-v-08e1e566]{flex-wrap:wrap}.flex-wrap-reverse[data-v-08e1e566]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-08e1e566]{align-content:stretch}.flex-wrap-top[data-v-08e1e566]{align-content:flex-start}.flex-wrap-middle[data-v-08e1e566]{align-content:center}.flex-wrap-bottom[data-v-08e1e566]{align-content:flex-end}.flex-wrap-between[data-v-08e1e566]{align-content:space-between}.flex-wrap-around[data-v-08e1e566]{align-content:space-around}.flex-first[data-v-08e1e566]{order:-1}.flex-last[data-v-08e1e566]{order:99}.flex-none[data-v-08e1e566]{flex:none}.flex-auto[data-v-08e1e566]{flex:auto}.flex-1[data-v-08e1e566]{flex:1}.hover-text[data-v-08e1e566]:hover{color:#ff875b}.expend-click[data-v-08e1e566]{position:relative}.expend-click[data-v-08e1e566]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-08e1e566],[data-v-08e1e566]:after,[data-v-08e1e566]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-08e1e566],dd[data-v-08e1e566],dl[data-v-08e1e566],figure[data-v-08e1e566],form[data-v-08e1e566],h1[data-v-08e1e566],h2[data-v-08e1e566],h3[data-v-08e1e566],h4[data-v-08e1e566],h5[data-v-08e1e566],ol[data-v-08e1e566],p[data-v-08e1e566],ul[data-v-08e1e566]{margin:0;font-size:14px}button[data-v-08e1e566],input[data-v-08e1e566],ol[data-v-08e1e566],ul[data-v-08e1e566]{padding:0}li[data-v-08e1e566],ol[data-v-08e1e566],ul[data-v-08e1e566]{list-style:none;list-style-type:none}h1[data-v-08e1e566],h2[data-v-08e1e566],h3[data-v-08e1e566],h4[data-v-08e1e566],h5[data-v-08e1e566]{font-size:100%}input[data-v-08e1e566]{border:0;margin:0}img[data-v-08e1e566]{width:100%}a[data-v-08e1e566],button[data-v-08e1e566],img[data-v-08e1e566],input[data-v-08e1e566],optgroup[data-v-08e1e566],select[data-v-08e1e566],textarea[data-v-08e1e566]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-08e1e566],img[data-v-08e1e566]{-webkit-touch-callout:none;border:0}body[data-v-08e1e566],html[data-v-08e1e566]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-08e1e566],img[data-v-08e1e566],input[data-v-08e1e566],textarea[data-v-08e1e566]{vertical-align:middle;outline:none}body[data-v-08e1e566]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-08e1e566]{border-collapse:collapse;border-spacing:0}a[data-v-08e1e566],table[data-v-08e1e566]{color:#333}a[data-v-08e1e566],a[data-v-08e1e566]:hover{text-decoration:none}a[data-v-08e1e566]:hover{color:#ff512b}.scrollbar-self[data-v-08e1e566]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-08e1e566]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-08e1e566]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.home[data-v-08e1e566]{background:#f8f8f8}.home .home-wrap[data-v-08e1e566]{width:1200px;margin:0 auto;padding:30px 0}.home .home-wrap .home-wrap-select[data-v-08e1e566]{margin-top:30px}.home .home-wrap .home-wrap-select__header[data-v-08e1e566]{font-size:24px;color:#333;margin-bottom:30px}.home .home-wrap .home-wrap-select__header img[data-v-08e1e566]{width:24px;height:22px}.home .home-wrap .home-wrap-select__header strong[data-v-08e1e566]{margin:0 10px}.home .home-wrap .home-wrap-select__content[data-v-08e1e566] .goods-item{margin-bottom:10px;width:19%}.home .home-wrap .home-wrap-select__content[data-v-08e1e566] .goods-item:not(:nth-child(5n)){margin-right:1.25%}.home .home-wrap .home-wrap-select__content[data-v-08e1e566] .goods-item img{width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/index.vue?vue&type=template&id=08e1e566&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('Banner',{attrs:{"data":_vm.bannerList}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"home-wrap\" data-v-08e1e566>","</div>",[(_vm.seckillData.activityTimeVO)?_c('Seckil',{attrs:{"data":_vm.seckillData,"list":_vm.sekillGoodsList,"current":_vm.currentTime},on:{"refresh":_vm.handleSeckillRefresh}}):_vm._e(),_vm._ssrNode(" "),_c('Pick',{attrs:{"recommend-data":_vm.recommendData,"new-data":_vm.newData}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"home-wrap-select\" data-v-08e1e566>","</div>",[_vm._ssrNode("<div class=\"home-wrap-select__header flex flex-center flex-middle\" data-v-08e1e566><img"+(_vm._ssrAttr("src",__webpack_require__(403)))+" data-v-08e1e566> <strong data-v-08e1e566>为你精选</strong> <img"+(_vm._ssrAttr("src",__webpack_require__(404)))+" data-v-08e1e566></div> "),_c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}]},[_vm._ssrNode("<div class=\"home-wrap-select__content flex flex-wrap\" data-v-08e1e566>","</div>",_vm._l((_vm.selectProducts),function(item){return _c('UiGoodsItem',{key:item.id,attrs:{"item":item}})}),1)])],2)],2),_vm._ssrNode(" "),_c('TabbarFixed',{attrs:{"scroll-top":_vm.scrollTop}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/index.vue?vue&type=template&id=08e1e566&scoped=true&

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(165);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: ./components/UiGoodsItem.vue + 4 modules
var UiGoodsItem = __webpack_require__(167);

// EXTERNAL MODULE: ./plugins/api/seckill.js
var seckill = __webpack_require__(41);

// EXTERNAL MODULE: ./plugins/api/goods.js
var goods = __webpack_require__(21);

// EXTERNAL MODULE: ./plugins/utils/index.js + 1 modules
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./plugins/dicts/ad.js
var ad = __webpack_require__(245);

// EXTERNAL MODULE: ./plugins/axios.js
var axios = __webpack_require__(4);

// EXTERNAL MODULE: ./plugins/config/env.js
var env = __webpack_require__(8);

// CONCATENATED MODULE: ./plugins/api/ad.js
/*
 * @Author: ch
 * @Date: 2022-05-31 11:17:38
 * @LastEditors: ch
 * @LastEditTime: 2022-06-01 15:53:53
 * @Description: file content
 */





const BASE_URL = `${env["a" /* default */].base_url}/mall/marketing`;

// 获取广告列表
const ApiGetAdList = params => Object(utils["f" /* ToAsyncAwait */])(axios["a" /* axios */].get(`${BASE_URL}/app/advertisement`, {
  params: {
    platform: ad["c" /* AD_PLATFORM */].PC,
    ...params
  }
}));
// EXTERNAL MODULE: ./pages/index/module/Banner.vue + 4 modules
var Banner = __webpack_require__(350);

// EXTERNAL MODULE: ./pages/index/module/Seckill.vue + 4 modules
var Seckill = __webpack_require__(351);

// EXTERNAL MODULE: ./pages/index/module/Pick.vue + 4 modules
var Pick = __webpack_require__(352);

// EXTERNAL MODULE: ./pages/index/module/TabbarFixed.vue + 4 modules
var TabbarFixed = __webpack_require__(353);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











const SECKILL_COUNT = 20; // 秒杀商品数
const NEW_COUNT = 5; // 新品上架商品数
const FOOTER_BAR_HEIGHT = 200; // 公共底部高度

/* harmony default export */ var indexvue_type_script_lang_js_ = ({
  components: {
    Banner: Banner["default"],
    Seckil: Seckill["default"],
    Pick: Pick["default"],
    UiGoodsItem: UiGoodsItem["default"],
    TabbarFixed: TabbarFixed["default"]
  },
  async asyncData({
    store
  }) {
    // 获取秒杀数据
    let seckillData = {
      activityTimeVO: null
    };
    let sekillGoodsList = [];
    const {
      result: seckillDataResult
    } = await Object(seckill["b" /* ApiGetHomeSeckill */])();
    if (seckillDataResult) {
      seckillData = seckillDataResult;
    }
    if (seckillData.activityTimeVO) {
      // 获取秒杀商品列表
      const {
        result
      } = await Object(seckill["c" /* ApiGetSeckillGoods */])({
        pageIndex: 1,
        length: SECKILL_COUNT,
        activityTimeId: seckillData.activityTimeVO.id
      });
      if (result) {
        sekillGoodsList = result.records;
      }
    }

    // 获取服务器当前时间
    const {
      result: currentTime
    } = await Object(seckill["a" /* ApiGetCurrentTime */])();

    // 获取甄选商品
    const {
      result: recommendData
    } = await Object(goods["f" /* ApiGetRecommendedGoodsList */])();

    // 获取新品上架商品
    let newData = [];
    const {
      result: newDataResult
    } = await Object(goods["d" /* ApiGetGoodsList */])({
      pageIndex: 1,
      length: NEW_COUNT
    });
    if (newDataResult) {
      newData = newDataResult.records || [];
    }
    let {
      result: bannerList
    } = await ApiGetAdList({
      location: ad["b" /* AD_LOCATION */].HOME_BANNER
    });
    bannerList = bannerList || [];
    return {
      currentTime,
      bannerList,
      newData,
      sekillGoodsList,
      seckillData,
      recommendData: recommendData || []
    };
  },
  data() {
    return {
      query: {
        pageIndex: 1,
        length: 20
      },
      selectProducts: [],
      total: 0,
      loading: false,
      currentPage: 0,
      scrollTop: 0,
      ticking: false
    };
  },
  created() {
    this.getSelectProducts();
  },
  async mounted() {
    let {
      result: bannerList
    } = await ApiGetAdList({
      location: ad["b" /* AD_LOCATION */].HOME_BANNER
    });
    // 监听滚动事件
    window.addEventListener("scroll", this.scrollEventMethod);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollEventMethod);
  },
  methods: {
    scrollEventMethod: external_lodash_default.a.debounce(function () {
      this.scrollTop = window.scrollY;
      const contentHeight = document.body.scrollHeight; // 内容高度
      const clientHeight = document.body.clientHeight; // 屏幕高度
      if (window.scrollY + clientHeight >= contentHeight - FOOTER_BAR_HEIGHT && this.total && this.selectProducts.length < this.total) {
        this.query.pageIndex += 1;

        // “为你精选”上拉加载
        this.getSelectProducts();
      }
    }, 200),
    // 刷新秒杀活动状态
    async handleSeckillRefresh() {
      const {
        result: seckillData
      } = await Object(seckill["b" /* ApiGetHomeSeckill */])();
      const {
        result: currentTime
      } = await Object(seckill["a" /* ApiGetCurrentTime */])();
      this.seckillData = seckillData;
      this.currentTime = currentTime;
    },
    // 获取“为你精选”数据
    async getSelectProducts() {
      this.loading = true;
      const {
        result
      } = await Object(goods["d" /* ApiGetGoodsList */])({
        ...this.query
      });
      this.loading = false;
      if (result) {
        const {
          total,
          records
        } = result;
        this.total = total;
        this.selectProducts = this.selectProducts.concat(records);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/index/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_indexvue_type_script_lang_js_ = (indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(405)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "08e1e566",
  "608d7041"
  
)

/* harmony default export */ var index = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UiGoodsItem: __webpack_require__(167).default})


/***/ })

};;
//# sourceMappingURL=index.js.map