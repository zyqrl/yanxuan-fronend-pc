exports.ids = [41,3,12,42];
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

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(184);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("fd7040b6", content, true, context)
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

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BsChosen.vue?vue&type=template&id=7f35ffa7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"chosen"},[_vm._ssrNode("<div class=\"chosen-title flex flex-between flex-middle\" data-v-7f35ffa7><h3 class=\"chosen-title--txt\" data-v-7f35ffa7>为你精选</h3> <div class=\"chosen-title--btn flex\" data-v-7f35ffa7><img"+(_vm._ssrAttr("src",__webpack_require__(182)))+" alt=\"切换推荐\" data-v-7f35ffa7> <span data-v-7f35ffa7>换一组</span></div></div> "),_vm._ssrNode("<div class=\"chosen-list\" data-v-7f35ffa7>","</div>",_vm._l((_vm.recommendedData),function(item){return _c('UiGoodsItem',{key:item.id,attrs:{"item":item}})}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BsChosen.vue?vue&type=template&id=7f35ffa7&scoped=true&

// EXTERNAL MODULE: ./plugins/api/goods.js
var goods = __webpack_require__(21);

// EXTERNAL MODULE: ./components/UiGoodsItem.vue + 4 modules
var UiGoodsItem = __webpack_require__(167);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BsChosen.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var BsChosenvue_type_script_lang_js_ = ({
  components: {
    UiGoodsItem: UiGoodsItem["default"]
  },
  data() {
    return {
      pages: 0,
      pageIndex: 1,
      recommendedData: []
    };
  },
  created() {
    this.getRecommendedGoodsList();
  },
  methods: {
    onRest() {
      this.pageIndex < this.pages ? this.pageIndex++ : this.pageIndex = 1;
      this.getRecommendedGoodsList();
    },
    async getRecommendedGoodsList() {
      let vm = this;
      let res = await Object(goods["d" /* ApiGetGoodsList */])({
        length: 20,
        pageIndex: vm.pageIndex,
        name: "",
        categoryId: "",
        order: ""
      });
      vm.recommendedData = res.result.records;
      vm.pages = res.result.pages;
    }
  }
});
// CONCATENATED MODULE: ./components/BsChosen.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BsChosenvue_type_script_lang_js_ = (BsChosenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BsChosen.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(183)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BsChosenvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7f35ffa7",
  "33c8aa13"
  
)

/* harmony default export */ var BsChosen = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UiGoodsItem: __webpack_require__(167).default})


/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAApJJREFUSEvdlT9oE1Ecx7+/5AbpYscEIxhcFBw6ZHDQoaCgoENxUVRakN7L5QQbpKiDeEKHFgqxkKT3joKVCg46CBYc6uBQUHCoo4OgQ8ldwKGDFIfk/eSFu3L9Q5M0oaBvOu693+/zft/3ft9HOMRBh8jCvwPzPO8aMz/c3Ny8WCwWN9qpdODKSqXS4MDAwA8AgwBWfd8fdhynsR9wX5iU8iiAU0R0ZK8kzHwOwFQ491IIcbtrmJRylJnvElGunTQ75h0hxFP9T0pp+74v49Vuq6xSqaQMw3gNQO84Gr8B/OoUyswWEZ0EUGbmN0EQ3IiAW7DwDD5p2Zi5QURlvUEhxLdOQdG6UJkFIjIAbFW7BZNSvgJwHYCu5LIQYrVbSHy9lPI+gFm98WQymR0fH19vwSqVypBhGGv6Wyl11bKs5V5AOtZxHCOVSq0R0ZmouhZMSlkCMKGvsBDifK+gKN7zvAfMPB3ljWBfAOSIaMI0zbl+wVzXvURE7wH8FEJkI5huzhNKqWHLsj72C1atVi8kk8mVPWEARoQQb/sFiy7JNhld131HRFcATAshHvURpi/dEBFNmab5uCWj53n3mPkZMwdBEGQdx/nTK9B13TtEtKCvfrPZPG3b9vcWLG6qzOzm83mrF5jneTeVUou6qZl5Np/PT+p88aYeBbAYQrqSU/dUJpM5ppTKKaXGwiMBES3XarWRXXYV7zfd2NpJiGgltJyDFFr2fX8yfiS7nphqtXq2UCh81tnn5+fHEonE8y5I68z8odlsztm2/XVnXNvHU0r5RNtNGOgopV7sBa/X6+s9PZ4xF18CcAvARqPROG7btjbrrkfbyiJTTafTS0Q0Y5rmLnk6pXYE6zRZu3X/L+wv47YgK/BhS00AAAAASUVORK5CYII="

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsChosen_vue_vue_type_style_index_0_id_7f35ffa7_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsChosen_vue_vue_type_style_index_0_id_7f35ffa7_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsChosen_vue_vue_type_style_index_0_id_7f35ffa7_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsChosen_vue_vue_type_style_index_0_id_7f35ffa7_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsChosen_vue_vue_type_style_index_0_id_7f35ffa7_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-7f35ffa7]{display:flex}.flex-inline[data-v-7f35ffa7]{display:inline-flex}.flex-inline[data-v-7f35ffa7]:after,.flex-inline[data-v-7f35ffa7]:before,.flex[data-v-7f35ffa7]:after,.flex[data-v-7f35ffa7]:before{display:none}.flex-left[data-v-7f35ffa7]{justify-content:flex-start}.flex-center[data-v-7f35ffa7]{justify-content:center}.flex-right[data-v-7f35ffa7]{justify-content:flex-end}.flex-between[data-v-7f35ffa7]{justify-content:space-between}.flex-around[data-v-7f35ffa7]{justify-content:space-around}.flex-stretch[data-v-7f35ffa7]{align-items:stretch}.flex-top[data-v-7f35ffa7]{align-items:flex-start}.flex-middle[data-v-7f35ffa7]{align-items:center}.flex-bottom[data-v-7f35ffa7]{align-items:flex-end}.flex-baseline[data-v-7f35ffa7]{align-items:baseline}.flex-row[data-v-7f35ffa7]{flex-direction:row}.flex-row-reverse[data-v-7f35ffa7]{flex-direction:row-reverse}.flex-column[data-v-7f35ffa7]{flex-direction:column}.flex-column-reverse[data-v-7f35ffa7]{flex-direction:column-reverse}.flex-nowrap[data-v-7f35ffa7]{flex-wrap:nowrap}.flex-wrap[data-v-7f35ffa7]{flex-wrap:wrap}.flex-wrap-reverse[data-v-7f35ffa7]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-7f35ffa7]{align-content:stretch}.flex-wrap-top[data-v-7f35ffa7]{align-content:flex-start}.flex-wrap-middle[data-v-7f35ffa7]{align-content:center}.flex-wrap-bottom[data-v-7f35ffa7]{align-content:flex-end}.flex-wrap-between[data-v-7f35ffa7]{align-content:space-between}.flex-wrap-around[data-v-7f35ffa7]{align-content:space-around}.flex-first[data-v-7f35ffa7]{order:-1}.flex-last[data-v-7f35ffa7]{order:99}.flex-none[data-v-7f35ffa7]{flex:none}.flex-auto[data-v-7f35ffa7]{flex:auto}.flex-1[data-v-7f35ffa7]{flex:1}.hover-text[data-v-7f35ffa7]:hover{color:#ff875b}.expend-click[data-v-7f35ffa7]{position:relative}.expend-click[data-v-7f35ffa7]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-7f35ffa7],[data-v-7f35ffa7]:after,[data-v-7f35ffa7]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-7f35ffa7],dd[data-v-7f35ffa7],dl[data-v-7f35ffa7],figure[data-v-7f35ffa7],form[data-v-7f35ffa7],h1[data-v-7f35ffa7],h2[data-v-7f35ffa7],h3[data-v-7f35ffa7],h4[data-v-7f35ffa7],h5[data-v-7f35ffa7],ol[data-v-7f35ffa7],p[data-v-7f35ffa7],ul[data-v-7f35ffa7]{margin:0;font-size:14px}button[data-v-7f35ffa7],input[data-v-7f35ffa7],ol[data-v-7f35ffa7],ul[data-v-7f35ffa7]{padding:0}li[data-v-7f35ffa7],ol[data-v-7f35ffa7],ul[data-v-7f35ffa7]{list-style:none;list-style-type:none}h1[data-v-7f35ffa7],h2[data-v-7f35ffa7],h3[data-v-7f35ffa7],h4[data-v-7f35ffa7],h5[data-v-7f35ffa7]{font-size:100%}input[data-v-7f35ffa7]{border:0;margin:0}img[data-v-7f35ffa7]{width:100%}a[data-v-7f35ffa7],button[data-v-7f35ffa7],img[data-v-7f35ffa7],input[data-v-7f35ffa7],optgroup[data-v-7f35ffa7],select[data-v-7f35ffa7],textarea[data-v-7f35ffa7]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-7f35ffa7],img[data-v-7f35ffa7]{-webkit-touch-callout:none;border:0}body[data-v-7f35ffa7],html[data-v-7f35ffa7]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-7f35ffa7],img[data-v-7f35ffa7],input[data-v-7f35ffa7],textarea[data-v-7f35ffa7]{vertical-align:middle;outline:none}body[data-v-7f35ffa7]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-7f35ffa7]{border-collapse:collapse;border-spacing:0}a[data-v-7f35ffa7],table[data-v-7f35ffa7]{color:#333}a[data-v-7f35ffa7],a[data-v-7f35ffa7]:hover{text-decoration:none}a[data-v-7f35ffa7]:hover{color:#ff512b}.scrollbar-self[data-v-7f35ffa7]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-7f35ffa7]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-7f35ffa7]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.chosen[data-v-7f35ffa7]{width:100%;padding:30px 0 40px;background:#f8f8f8}.chosen-title[data-v-7f35ffa7]{width:1200px;margin:0 auto}.chosen-title--txt[data-v-7f35ffa7]{font-size:24px;font-family:Microsoft YaHei-Bold,Microsoft YaHei;font-weight:700;color:#333}.chosen-title--btn[data-v-7f35ffa7]{width:140px;cursor:pointer}.chosen-title--btn img[data-v-7f35ffa7]{width:27px;height:27px;margin-right:5px}.chosen-title--btn span[data-v-7f35ffa7]{font-size:18px;font-family:Microsoft YaHei-Regular,Microsoft YaHei;font-weight:400;color:#999}.chosen-list[data-v-7f35ffa7]{width:1200px;margin:0 auto;padding-top:40px;display:grid;grid-template-columns:repeat(auto-fill,232px);justify-content:space-between;grid-row-gap:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(310);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1b06b15c", content, true, context)
};

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/none.cd2a8b1.png";

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAADCAYAAACwAX77AAAAAXNSR0IArs4c6QAAAEFJREFUGFdjZGBgYNi/fz8LLy/vchD78+fPkY6Ojn8Y9+/fzwMV9AFJ/P//f8eXL19CGc+cObOfgYHBASSIBA4AAJQRFnANMs+GAAAAAElFTkSuQmCC"

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAADCAYAAACwAX77AAAAAXNSR0IArs4c6QAAAEFJREFUGFdjZGBgYPjf4MDCwCa9HMRm+PU0krHhwB/G/w2hPAzsbCBBH7AEA8MOhp+/Qhn/t0fvZ2BgcIAKwqgDALU3EIT750CJAAAAAElFTkSuQmCC"

/***/ }),

/***/ 307:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAADCAYAAACwAX77AAAAAXNSR0IArs4c6QAAAEBJREFUGFdjPHPmzH4GBgYHBlRwgHH//v08fHx8q////+8BlVvz+fPnREYQZ//+/Sy8vLzLQezPnz9HOjo6/gEA6tAWcLXtJLQAAAAASUVORK5CYII="

/***/ }),

/***/ 308:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAADCAYAAACwAX77AAAAAXNSR0IArs4c6QAAAD9JREFUGFdj/N8evZ+BgcGBARUcYPzfEMrDwM62moGBwQMs959hDcOvX4mMYHaDAwsDm/RysMSvp5GMDQf+AAAsUxGEoxA4nQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SortItem_vue_vue_type_style_index_0_id_fce4a22a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SortItem_vue_vue_type_style_index_0_id_fce4a22a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SortItem_vue_vue_type_style_index_0_id_fce4a22a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SortItem_vue_vue_type_style_index_0_id_fce4a22a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SortItem_vue_vue_type_style_index_0_id_fce4a22a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-fce4a22a]{display:flex}.flex-inline[data-v-fce4a22a]{display:inline-flex}.flex-inline[data-v-fce4a22a]:after,.flex-inline[data-v-fce4a22a]:before,.flex[data-v-fce4a22a]:after,.flex[data-v-fce4a22a]:before{display:none}.flex-left[data-v-fce4a22a]{justify-content:flex-start}.flex-center[data-v-fce4a22a]{justify-content:center}.flex-right[data-v-fce4a22a]{justify-content:flex-end}.flex-between[data-v-fce4a22a]{justify-content:space-between}.flex-around[data-v-fce4a22a]{justify-content:space-around}.flex-stretch[data-v-fce4a22a]{align-items:stretch}.flex-top[data-v-fce4a22a]{align-items:flex-start}.flex-middle[data-v-fce4a22a]{align-items:center}.flex-bottom[data-v-fce4a22a]{align-items:flex-end}.flex-baseline[data-v-fce4a22a]{align-items:baseline}.flex-row[data-v-fce4a22a]{flex-direction:row}.flex-row-reverse[data-v-fce4a22a]{flex-direction:row-reverse}.flex-column[data-v-fce4a22a]{flex-direction:column}.flex-column-reverse[data-v-fce4a22a]{flex-direction:column-reverse}.flex-nowrap[data-v-fce4a22a]{flex-wrap:nowrap}.flex-wrap[data-v-fce4a22a]{flex-wrap:wrap}.flex-wrap-reverse[data-v-fce4a22a]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-fce4a22a]{align-content:stretch}.flex-wrap-top[data-v-fce4a22a]{align-content:flex-start}.flex-wrap-middle[data-v-fce4a22a]{align-content:center}.flex-wrap-bottom[data-v-fce4a22a]{align-content:flex-end}.flex-wrap-between[data-v-fce4a22a]{align-content:space-between}.flex-wrap-around[data-v-fce4a22a]{align-content:space-around}.flex-first[data-v-fce4a22a]{order:-1}.flex-last[data-v-fce4a22a]{order:99}.flex-none[data-v-fce4a22a]{flex:none}.flex-auto[data-v-fce4a22a]{flex:auto}.flex-1[data-v-fce4a22a]{flex:1}.hover-text[data-v-fce4a22a]:hover{color:#ff875b}.expend-click[data-v-fce4a22a]{position:relative}.expend-click[data-v-fce4a22a]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-fce4a22a],[data-v-fce4a22a]:after,[data-v-fce4a22a]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-fce4a22a],dd[data-v-fce4a22a],dl[data-v-fce4a22a],figure[data-v-fce4a22a],form[data-v-fce4a22a],h1[data-v-fce4a22a],h2[data-v-fce4a22a],h3[data-v-fce4a22a],h4[data-v-fce4a22a],h5[data-v-fce4a22a],ol[data-v-fce4a22a],p[data-v-fce4a22a],ul[data-v-fce4a22a]{margin:0;font-size:14px}button[data-v-fce4a22a],input[data-v-fce4a22a],ol[data-v-fce4a22a],ul[data-v-fce4a22a]{padding:0}li[data-v-fce4a22a],ol[data-v-fce4a22a],ul[data-v-fce4a22a]{list-style:none;list-style-type:none}h1[data-v-fce4a22a],h2[data-v-fce4a22a],h3[data-v-fce4a22a],h4[data-v-fce4a22a],h5[data-v-fce4a22a]{font-size:100%}input[data-v-fce4a22a]{border:0;margin:0}img[data-v-fce4a22a]{width:100%}a[data-v-fce4a22a],button[data-v-fce4a22a],img[data-v-fce4a22a],input[data-v-fce4a22a],optgroup[data-v-fce4a22a],select[data-v-fce4a22a],textarea[data-v-fce4a22a]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-fce4a22a],img[data-v-fce4a22a]{-webkit-touch-callout:none;border:0}body[data-v-fce4a22a],html[data-v-fce4a22a]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-fce4a22a],img[data-v-fce4a22a],input[data-v-fce4a22a],textarea[data-v-fce4a22a]{vertical-align:middle;outline:none}body[data-v-fce4a22a]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-fce4a22a]{border-collapse:collapse;border-spacing:0}a[data-v-fce4a22a],table[data-v-fce4a22a]{color:#333}a[data-v-fce4a22a],a[data-v-fce4a22a]:hover{text-decoration:none}a[data-v-fce4a22a]:hover{color:#ff512b}.scrollbar-self[data-v-fce4a22a]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-fce4a22a]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-fce4a22a]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.sort-item[data-v-fce4a22a]{margin-right:50px;display:flex;align-items:center;cursor:pointer}.sort-item .sort-item-txt[data-v-fce4a22a]{margin-right:6px;display:flex;align-items:center;font-size:14px}.sort-item .sort-img-box[data-v-fce4a22a]{display:flex;align-items:center;justify-content:center;flex-direction:column}.sort-item img[data-v-fce4a22a]{width:6px;height:3px;margin:3px 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(416);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("c957c832", content, true, context)
};

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/goods/list/module/SortItem.vue?vue&type=template&id=fce4a22a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sort-item",on:{"click":_vm.onSort}},[_vm._ssrNode("<span class=\"sort-item-txt\" data-v-fce4a22a>"+_vm._ssrEscape(_vm._s(_vm.sortText))+"</span> <div class=\"sort-img-box\" data-v-fce4a22a>"+((_vm.sortType === 0 || _vm.sortType === 1)?("<img"+(_vm._ssrAttr("src",__webpack_require__(305)))+" alt=\"sort\" data-v-fce4a22a>"):"<!---->")+" "+((_vm.sortType === 2)?("<img"+(_vm._ssrAttr("src",__webpack_require__(306)))+" alt=\"sort\" data-v-fce4a22a>"):"<!---->")+" "+((_vm.sortType === 0 || _vm.sortType === 2)?("<img"+(_vm._ssrAttr("src",__webpack_require__(307)))+" alt=\"sort\" data-v-fce4a22a>"):"<!---->")+" "+((_vm.sortType === 1)?("<img"+(_vm._ssrAttr("src",__webpack_require__(308)))+" alt=\"sort\" data-v-fce4a22a>"):"<!---->")+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/goods/list/module/SortItem.vue?vue&type=template&id=fce4a22a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/goods/list/module/SortItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SortItemvue_type_script_lang_js_ = ({
  name: "SortItem",
  props: {
    sortText: {
      type: String,
      default: ""
    },
    /* 
      0:未选中
      1:desc
      2:asc
    */
    sortType: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  methods: {
    onSort() {
      this.$emit("onSort");
    }
  }
});
// CONCATENATED MODULE: ./pages/goods/list/module/SortItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_SortItemvue_type_script_lang_js_ = (SortItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/goods/list/module/SortItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(309)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_SortItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fce4a22a",
  "555b1f20"
  
)

/* harmony default export */ var SortItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_969d9510_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(339);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_969d9510_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_969d9510_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_969d9510_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_969d9510_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-969d9510]{display:flex}.flex-inline[data-v-969d9510]{display:inline-flex}.flex-inline[data-v-969d9510]:after,.flex-inline[data-v-969d9510]:before,.flex[data-v-969d9510]:after,.flex[data-v-969d9510]:before{display:none}.flex-left[data-v-969d9510]{justify-content:flex-start}.flex-center[data-v-969d9510]{justify-content:center}.flex-right[data-v-969d9510]{justify-content:flex-end}.flex-between[data-v-969d9510]{justify-content:space-between}.flex-around[data-v-969d9510]{justify-content:space-around}.flex-stretch[data-v-969d9510]{align-items:stretch}.flex-top[data-v-969d9510]{align-items:flex-start}.flex-middle[data-v-969d9510]{align-items:center}.flex-bottom[data-v-969d9510]{align-items:flex-end}.flex-baseline[data-v-969d9510]{align-items:baseline}.flex-row[data-v-969d9510]{flex-direction:row}.flex-row-reverse[data-v-969d9510]{flex-direction:row-reverse}.flex-column[data-v-969d9510]{flex-direction:column}.flex-column-reverse[data-v-969d9510]{flex-direction:column-reverse}.flex-nowrap[data-v-969d9510]{flex-wrap:nowrap}.flex-wrap[data-v-969d9510]{flex-wrap:wrap}.flex-wrap-reverse[data-v-969d9510]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-969d9510]{align-content:stretch}.flex-wrap-top[data-v-969d9510]{align-content:flex-start}.flex-wrap-middle[data-v-969d9510]{align-content:center}.flex-wrap-bottom[data-v-969d9510]{align-content:flex-end}.flex-wrap-between[data-v-969d9510]{align-content:space-between}.flex-wrap-around[data-v-969d9510]{align-content:space-around}.flex-first[data-v-969d9510]{order:-1}.flex-last[data-v-969d9510]{order:99}.flex-none[data-v-969d9510]{flex:none}.flex-auto[data-v-969d9510]{flex:auto}.flex-1[data-v-969d9510]{flex:1}.hover-text[data-v-969d9510]:hover{color:#ff875b}.expend-click[data-v-969d9510]{position:relative}.expend-click[data-v-969d9510]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-969d9510],[data-v-969d9510]:after,[data-v-969d9510]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-969d9510],dd[data-v-969d9510],dl[data-v-969d9510],figure[data-v-969d9510],form[data-v-969d9510],h1[data-v-969d9510],h2[data-v-969d9510],h3[data-v-969d9510],h4[data-v-969d9510],h5[data-v-969d9510],ol[data-v-969d9510],p[data-v-969d9510],ul[data-v-969d9510]{margin:0;font-size:14px}button[data-v-969d9510],input[data-v-969d9510],ol[data-v-969d9510],ul[data-v-969d9510]{padding:0}li[data-v-969d9510],ol[data-v-969d9510],ul[data-v-969d9510]{list-style:none;list-style-type:none}h1[data-v-969d9510],h2[data-v-969d9510],h3[data-v-969d9510],h4[data-v-969d9510],h5[data-v-969d9510]{font-size:100%}input[data-v-969d9510]{border:0;margin:0}img[data-v-969d9510]{width:100%}a[data-v-969d9510],button[data-v-969d9510],img[data-v-969d9510],input[data-v-969d9510],optgroup[data-v-969d9510],select[data-v-969d9510],textarea[data-v-969d9510]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-969d9510],img[data-v-969d9510]{-webkit-touch-callout:none;border:0}body[data-v-969d9510],html[data-v-969d9510]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-969d9510],img[data-v-969d9510],input[data-v-969d9510],textarea[data-v-969d9510]{vertical-align:middle;outline:none}body[data-v-969d9510]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-969d9510]{border-collapse:collapse;border-spacing:0}a[data-v-969d9510],table[data-v-969d9510]{color:#333}a[data-v-969d9510],a[data-v-969d9510]:hover{text-decoration:none}a[data-v-969d9510]:hover{color:#ff512b}.scrollbar-self[data-v-969d9510]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-969d9510]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-969d9510]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.page[data-v-969d9510]{background:#f8f8f8;width:100%;min-height:600px}.main[data-v-969d9510]{width:1200px;margin:0 auto;padding-top:14px;padding-bottom:60px}.main__nav[data-v-969d9510]{padding-top:24px}.main__nav[data-v-969d9510]:after{display:block;width:1200px;content:\"\";height:1px;background:#eee}.main__nav-crumbs .el-icon-arrow-right[data-v-969d9510]{margin:0 10px}.main__nav-sort[data-v-969d9510]{width:100%;height:50px;padding:0 30px}.main__nav-sort-txt[data-v-969d9510]{color:#999;margin-right:30px}.main__nav-sort-btn[data-v-969d9510]{margin-right:50px;cursor:pointer}.main__nav-sort-active[data-v-969d9510],.main__nav-sort-btn[data-v-969d9510]:hover{color:#ff512b}.main__content[data-v-969d9510]{margin-top:30px;display:grid;width:100%;grid-template-columns:repeat(auto-fill,232px);justify-content:space-between;grid-row-gap:10px}.main__pagination[data-v-969d9510]{margin-top:60px}.main__pagination[data-v-969d9510] .el-pager{margin-left:8px}.main__pagination[data-v-969d9510] .btn-quicknext,.main__pagination[data-v-969d9510] .btn-quickprev,.main__pagination[data-v-969d9510] .number,.main__pagination[data-v-969d9510] button{width:32px;height:32px;text-align:center;line-height:32px;margin-left:8px;border-radius:2px 2px 2px 2px;border:1px solid rgba(0,0,0,.15);font-size:14px;font-family:Microsoft YaHei-Regular,Microsoft YaHei;font-weight:400;color:rgba(0,0,0,.65)}.main__pagination[data-v-969d9510] .active{background:#ff512b;color:#fff}.main-none-img[data-v-969d9510]{display:block;width:228px;height:144px;margin:60px auto 20px}.main-none-txt[data-v-969d9510]{width:100%;text-align:center;font-size:14px;font-family:PingFang SC-常规体,PingFang SC;font-weight:400;color:#999}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/goods/list/index.vue?vue&type=template&id=969d9510&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.pageloading)?_c('div',{staticClass:"main flex"},_vm._l((5),function(item){return _c('el-skeleton',{key:item,staticStyle:{"width":"230px","margin-right":"20px"},attrs:{"loading":true,"animated":""}},[_c('template',{slot:"template"},[_c('el-skeleton-item',{staticStyle:{"width":"240px","height":"240px"},attrs:{"variant":"image"}}),_vm._v(" "),_c('div',{staticStyle:{"padding":"14px"}},[_c('el-skeleton-item',{staticStyle:{"width":"50%"},attrs:{"variant":"h3"}}),_vm._v(" "),_c('div',{staticStyle:{"display":"flex","align-items":"center","justify-items":"space-between","margin-top":"16px","height":"16px"}},[_c('el-skeleton-item',{staticStyle:{"margin-right":"16px"},attrs:{"variant":"text"}}),_vm._v(" "),_c('el-skeleton-item',{staticStyle:{"width":"30%"},attrs:{"variant":"text"}})],1)],1)],1)],2)}),1):_c('div',{class:_vm.listData && _vm.listData.length ? 'page' : ''},[(_vm.listData && _vm.listData.length)?_vm._ssrNode("<main class=\"main\" data-v-969d9510>","</main>",[_vm._ssrNode("<nav class=\"main__nav\" data-v-969d9510>","</nav>",[_vm._ssrNode(((_vm.levelType == 1)?("<div class=\"main__nav-sort flex flex-middle\" data-v-969d9510><span class=\"main__nav-sort-txt\" data-v-969d9510>分类 :</span> "+(_vm._ssrList((_vm.categoryOneList),function(item,index){return ("<span"+(_vm._ssrClass("main__nav-sort-btn",_vm.levelActive == index ? 'main__nav-sort-active' : ''))+" data-v-969d9510>"+_vm._ssrEscape("\n          "+_vm._s(item.name)+"\n        ")+"</span>")}))+"</div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"main__nav-sort flex flex-middle\" data-v-969d9510>","</div>",[_vm._ssrNode("<span class=\"main__nav-sort-txt\" data-v-969d9510>排序 :</span> <span"+(_vm._ssrClass("main__nav-sort-btn",_vm.navActive == 0 ? 'main__nav-sort-active' : ''))+" data-v-969d9510>综合</span> "),_c('Sort',{class:_vm.navActive == 1 ? 'main__nav-sort-active' : '',attrs:{"sortText":"价格","sortType":_vm.sortType},on:{"onSort":_vm.onSort}}),_vm._ssrNode(" <span"+(_vm._ssrClass("main__nav-sort-btn",_vm.navActive == 3 ? 'main__nav-sort-active' : ''))+" data-v-969d9510>上新</span>")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"main__content\" data-v-969d9510>","</div>",_vm._l((_vm.listData),function(item){return _c('UiGoodsItem',{key:item.id,attrs:{"item":item}})}),1),_vm._ssrNode(" "),_c('el-pagination',{staticClass:"main__pagination flex flex-right",attrs:{"current-page":_vm.params.pageIndex,"page-size":20,"layout":"prev, pager, next, jumper","total":_vm.total},on:{"current-change":_vm.handleCurrentChange,"update:currentPage":function($event){return _vm.$set(_vm.params, "pageIndex", $event)},"update:current-page":function($event){return _vm.$set(_vm.params, "pageIndex", $event)}}})],2):_vm._ssrNode(("<main class=\"main\" data-v-969d9510><img"+(_vm._ssrAttr("src",__webpack_require__(261)))+" alt class=\"main-none-img\" data-v-969d9510> <p class=\"main-none-txt\" data-v-969d9510>没有搜到你想要的商品哦，换个关键词试试</p></main>")),_vm._ssrNode(" "),(!_vm.listData || !_vm.listData.length)?_c('BsChosen'):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/goods/list/index.vue?vue&type=template&id=969d9510&scoped=true&

// EXTERNAL MODULE: ./plugins/api/goods.js
var goods = __webpack_require__(21);

// EXTERNAL MODULE: ./pages/goods/list/module/SortItem.vue + 4 modules
var SortItem = __webpack_require__(356);

// EXTERNAL MODULE: ./components/UiGoodsItem.vue + 4 modules
var UiGoodsItem = __webpack_require__(167);

// EXTERNAL MODULE: ./components/BsChosen.vue + 4 modules
var BsChosen = __webpack_require__(178);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/goods/list/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Sort: SortItem["default"],
    UiGoodsItem: UiGoodsItem["default"],
    BsChosen: BsChosen["default"]
  },
  data() {
    return {
      pageloading: true,
      navActive: 0,
      levelActive: 0,
      listData: [],
      total: 0,
      // 0:综合,1:desc,2:asc,3:上新
      sortType: 0,
      categoryOneList: [],
      levelType: "",
      levelId: "",
      params: {
        length: 20,
        pageIndex: 1,
        name: "",
        categoryId: "",
        order: ""
      }
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.params.name = this.$route.query.keyword;
      this.levelType = this.$route.query.levelType || "";
      this.levelId = this.$route.query.id || "";
      this.levelType == 2 ? this.params.categoryId = this.levelId : "";
      if (this.levelType == 1) {
        this.getCategoryTwoAndGoods();
      } else {
        this.getGoodsListData();
      }
    },
    async getCategoryOneList() {
      let res = await Object(goods["a" /* ApiGetCategoryOneList */])();
      this.categoryOneList = res.result;
    },
    async getCategoryTwoAndGoods() {
      let res = await Object(goods["b" /* ApiGetCategoryTwoAndGoods */])({
        categoryId: this.levelId
      });
      this.categoryOneList = res.result;
      this.getGoodsListData();
    },
    onNavClick(i) {
      let vm = this;
      vm.sortType = i;
      vm.navActive = i;
      vm.getGoodsListData();
    },
    onLevelClick(i) {
      let vm = this;
      vm.levelActive = i;
      vm.getGoodsListData();
    },
    onSort() {
      let vm = this;
      vm.navActive = 1;
      vm.sortType < 2 ? vm.sortType++ : vm.sortType = 1;
      vm.getGoodsListData();
    },
    // 获取商品列表
    async getGoodsListData() {
      let vm = this;
      switch (vm.sortType) {
        case 0:
          vm.$set(vm.params, "order", "");
          break;
        case 1:
          vm.$set(vm.params, "order", "starting_price:desc");
          break;
        case 2:
          vm.$set(vm.params, "order", "starting_price:asc");
          break;
        case 3:
          vm.$set(vm.params, "order", "create_time:desc");
          break;
      }
      if (vm.levelType == 1) {
        vm.params.categoryId = vm.categoryOneList[vm.levelActive].id;
      }
      if (vm.params.name) {
        vm.params.categoryId = "";
      }
      let res = await Object(goods["d" /* ApiGetGoodsList */])(vm.params);
      vm.pageloading = false;
      if (res.error) {
        vm.$message.error(res.error.message);
        return false;
      }
      vm.total = res.result.total;
      vm.listData = res.result.records;
    },
    handleCurrentChange(val) {
      let vm = this;
      vm.$set(vm.params, "pageIndex", val);
      vm.getGoodsListData();
    }
  },
  watch: {
    $route: {
      handler() {
        this.init();
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./pages/goods/list/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var goods_listvue_type_script_lang_js_ = (listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/goods/list/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(415)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  goods_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "969d9510",
  "2677e3be"
  
)

/* harmony default export */ var list = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UiGoodsItem: __webpack_require__(167).default,BsChosen: __webpack_require__(178).default})


/***/ })

};;
//# sourceMappingURL=index.js.map