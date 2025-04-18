exports.ids = [38,3,4,5,6,11,12,13,39,40];
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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UiImgs.vue?vue&type=template&id=574ae6f2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"preview-imgs"},[_vm._ssrNode("<ul data-v-574ae6f2>"+(_vm._ssrList((_vm.list),function(i,idx){return ("<li"+(_vm._ssrClass(null,{'active' : _vm.curIndex == idx}))+" data-v-574ae6f2><img"+(_vm._ssrAttr("src",i))+" data-v-574ae6f2></li>")}))+"</ul> "+((_vm.curIndex > -1)?("<p data-v-574ae6f2><img"+(_vm._ssrAttr("src",_vm.list[_vm.curIndex]))+" data-v-574ae6f2> "+((_vm.curIndex > 0)?("<span class=\"prev\" data-v-574ae6f2></span>"):"<!---->")+" "+((_vm.curIndex < _vm.list.length-1)?("<span class=\"next\" data-v-574ae6f2></span>"):"<!---->")+"</p>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UiImgs.vue?vue&type=template&id=574ae6f2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UiImgs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var UiImgsvue_type_script_lang_js_ = ({
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      curIndex: -1
    };
  },
  methods: {
    next() {
      this.curIndex++;
    },
    prev() {
      this.curIndex--;
    }
  }
});
// CONCATENATED MODULE: ./components/UiImgs.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UiImgsvue_type_script_lang_js_ = (UiImgsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/UiImgs.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(197)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UiImgsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "574ae6f2",
  "fc057398"
  
)

/* harmony default export */ var UiImgs = __webpack_exports__["default"] = (component.exports);

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

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("ca4bbb84", content, true, context)
};

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("672828ac", content, true, context)
};

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ApiGetCommentList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiGetCommentCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ApiGetCommentTabCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ApiGetOrderCommentDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ApiGetProductSatisfaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ApiGetCommentDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ApiPostComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ApiPutCommentUseful; });
/* harmony import */ var _axiosTk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/*
 * @Author: ch
 * @Date: 2022-06-20 11:38:48
 * @LastEditors: ch
 * @LastEditTime: 2022-06-30 11:48:53
 * @Description: file content
 */





const BASE_URL = `${_config_env__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].base_url}/mall/comment`;

/**
 * 根据商品获取评论列表未
 * @param {*} param0 
 */
const ApiGetCommentList = params => Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].get(`${BASE_URL}/app/comment`, {
  params,
  headers: {
    notVerifyToken: true
  }
}));

/**
 * 根据商品获取评论总数
 * @param {*} param0 
 */
const ApiGetCommentCount = ({
  productId
}) => Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].get(`${BASE_URL}/app/comment/getAllCommentCountByProductId/${productId}`, {
  headers: {
    notVerifyToken: true
  }
}));
/**
 * 根据商品获取标签评论总数
 * @param {*} param0 
 */
const ApiGetCommentTabCount = ({
  productId
}) => Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].get(`${BASE_URL}/app/comment/listCommentLabel/${productId}`, {
  headers: {
    notVerifyToken: true
  }
}));
/**
 * 获取订单评论详情
 * @param {*} param0 
 */
const ApiGetOrderCommentDetail = ({
  orderId
}) => Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].get(`${BASE_URL}/app/comment/listOrderCommentByOrderId/${orderId}`));
/**
 * 获取商品满意度
 * @param {*} param0 
 */
const ApiGetProductSatisfaction = ({
  productId
}) => Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* ToAsyncAwait */ "f"])(_axios__WEBPACK_IMPORTED_MODULE_1__[/* axios */ "a"].get(`${BASE_URL}/app/comment/getProductSatisfaction/${productId}`));
/**
 * 获取评论详情
 * @param {*} param0 
 */
const ApiGetCommentDetail = ({
  commentId
}) => Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].get(`${BASE_URL}/app/comment/getCommentDetail/${commentId}`, {
  headers: {
    notVerifyToken: true
  }
}));
/**
 * 新增评论
 * @param {*} param0 
 */
const ApiPostComment = data => Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].post(`${BASE_URL}/app/comment`, data));

/**
 * 更新评论有用数
 * @param {*} param0 
 */
const ApiPutCommentUseful = data => Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].put(`${BASE_URL}/app/comment/updateUsefulCount`, data));

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

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(205);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("232d7886", content, true, context)
};

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(207);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("12cf2d86", content, true, context)
};

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

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UiEmpty.vue?vue&type=template&id=e76432ba&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-empty"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.icon))+" class=\"ui-empty--icon\" data-v-e76432ba> <p class=\"ui-empty--desc\" data-v-e76432ba>"+_vm._ssrEscape(_vm._s(_vm.desc))+"</p> "),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UiEmpty.vue?vue&type=template&id=e76432ba&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UiEmpty.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var UiEmptyvue_type_script_lang_js_ = ({
  props: {
    title: String,
    desc: String,
    icon: String
  }
});
// CONCATENATED MODULE: ./components/UiEmpty.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UiEmptyvue_type_script_lang_js_ = (UiEmptyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/UiEmpty.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(191)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UiEmptyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e76432ba",
  "4e66e059"
  
)

/* harmony default export */ var UiEmpty = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BsCommentFollowInfo.vue?vue&type=template&id=7c58d46e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"follow"},[_vm._ssrNode("<b class=\"follow--title\" data-v-7c58d46e>"+_vm._ssrEscape(_vm._s(_vm.day)+"追评:")+"</b> <p class=\"follow--ctx\" data-v-7c58d46e>"+_vm._ssrEscape(_vm._s(_vm.followComment.commentContent))+"</p> "),(_vm.imgs.length)?_c('UiImgs',{staticClass:"follow--imgs",attrs:{"list":_vm.imgs}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BsCommentFollowInfo.vue?vue&type=template&id=7c58d46e&scoped=true&

// EXTERNAL MODULE: ./components/UiImgs.vue + 4 modules
var UiImgs = __webpack_require__(169);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BsCommentFollowInfo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var BsCommentFollowInfovue_type_script_lang_js_ = ({
  components: {
    UiImgs: UiImgs["default"]
  },
  props: {
    followComment: {
      type: Object,
      default: () => ({})
    },
    commentTime: {
      type: String,
      default: ''
    }
  },
  computed: {
    day() {
      const followTime = new Date(this.followComment.createTime).getTime();
      const commentTime = new Date(this.commentTime).getTime();
      const day = Math.floor((followTime - commentTime) / (24 * 60 * 60 * 1000));
      return day > 0 ? `${day}天后` : `当天`;
    },
    imgs() {
      let urls = this.followComment.pictureUrl || '';
      return urls ? urls.split(',') : [];
    }
  }
});
// CONCATENATED MODULE: ./components/BsCommentFollowInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BsCommentFollowInfovue_type_script_lang_js_ = (BsCommentFollowInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BsCommentFollowInfo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(204)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BsCommentFollowInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7c58d46e",
  "559f4aad"
  
)

/* harmony default export */ var BsCommentFollowInfo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UiImgs: __webpack_require__(169).default})


/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BsCommentSubmit.vue?vue&type=template&id=69777706&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"submit"},[(_vm.type === _vm.COMMENT.TYPE.COMMENT)?_vm._ssrNode("<p class=\"rate-box\" data-v-69777706>","</p>",[_vm._ssrNode("<b data-v-69777706>满意度评分</b> "),_c('el-rate',{model:{value:(_vm.rate),callback:function ($$v) {_vm.rate=$$v},expression:"rate"}}),_vm._ssrNode(" <span data-v-69777706>"+_vm._ssrEscape(_vm._s(_vm.reteDesc))+"</span>")],2):_vm._e(),_vm._ssrNode(" "),_c('el-input',{staticClass:"textarea",attrs:{"type":"textarea","placeholder":"从多个维度评价，可以帮助更多想买的人哦~","show-word-limit":"","maxlength":500,"rows":6},model:{value:(_vm.commentContent),callback:function ($$v) {_vm.commentContent=$$v},expression:"commentContent"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"operation\" data-v-69777706>","</div>",[_c('el-upload',{attrs:{"list-type":"picture-card","on-remove":_vm.handleRemove,"limit":6,"action":_vm.uploadAction,"data":_vm.uploadData,"before-upload":_vm.handleBeforeUpload,"on-exceed":_vm.handleUploadExceed,"on-error":_vm.handleUploadError}},[_c('i',{staticClass:"el-icon-plus"}),_vm._v(" "),_c('p',{staticClass:"upload-txt"},[_vm._v("我要晒图")])]),_vm._ssrNode(" "),_c('UiButton',{staticClass:"upload-btn",attrs:{"disabled":_vm.isDisabled},on:{"click":_vm.handleSubmit}},[_vm._v("发表评论")])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BsCommentSubmit.vue?vue&type=template&id=69777706&scoped=true&

// EXTERNAL MODULE: ./plugins/api/comment.js
var comment = __webpack_require__(177);

// EXTERNAL MODULE: ./plugins/api/oss.js
var oss = __webpack_require__(193);

// EXTERNAL MODULE: ./constants/index.js
var constants = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BsCommentSubmit.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var BsCommentSubmitvue_type_script_lang_js_ = ({
  props: {
    type: {
      type: String | Number,
      default: constants["b" /* COMMENT */].TYPE.COMMENT
    },
    commentDetail: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      COMMENT: constants["b" /* COMMENT */],
      rate: 5,
      commentContent: '',
      uploadData: {},
      uploadAction: '',
      fileList: []
    };
  },
  computed: {
    isEdit() {
      return this.commentContent || this.fileList.length > 0 ? true : false;
    },
    reteDesc() {
      return constants["b" /* COMMENT */].RATE_LEVEL[this.rate];
    },
    isDisabled() {
      let status = false;
      if (this.type === constants["b" /* COMMENT */].TYPE.COMMENT) {
        status = !this.rate || !this.commentContent.trim();
      }
      if (this.type === constants["b" /* COMMENT */].TYPE.FOLLOW_COMMENT) {
        status = !this.commentContent.trim();
      }
      return status;
    }
  },
  watch: {
    isEdit(val) {
      this.$emit('editStatusChange', val);
    }
  },
  methods: {
    async handleSubmit() {
      let data = {
        commentContent: this.commentContent,
        commentType: this.type,
        orderProductId: this.commentDetail.orderProductId,
        pictureUrl: this.fileList.map(i => i.url).join(',')
      };
      if (this.type === constants["b" /* COMMENT */].TYPE.COMMENT) {
        data.productId = this.commentDetail.productId;
        data.commentScore = this.rate;
      } else if (this.type === constants["b" /* COMMENT */].TYPE.FOLLOW_COMMENT) {
        data.originId = data.parentId = this.commentDetail.id;
      }
      const {
        error,
        result
      } = await Object(comment["g" /* ApiPostComment */])(data);
      if (error) {
        this.$message.error(error.message);
        return false;
      }
      this.commentContent = '';
      this.fileList = [];
      this.$nextTick(() => {
        this.$emit('submit', result);
      });
    },
    /**
     * 获取OSS鉴权信息
     * configId 自定义文件夹 图片存储的文件夹名称
     * serviceName 服务名
     */
    async getOssCon() {
      const {
        error,
        result
      } = await Object(oss["a" /* ApiPostGetOssConfig */])({
        configId: 'account-comment/',
        serviceName: 'comment'
      });
      if (error) {
        this.$message.error(error.message);
        return false;
      }
      return result;
    },
    async handleBeforeUpload(file) {
      let result = await this.getOssCon();
      if (result) {
        this.uploadAction = result.host;
        this.uploadData = {
          ...this.uploadData,
          policy: result.policy,
          OSSAccessKeyId: result.accessId,
          success_action_status: 200,
          signature: result.signature
        };
      }
      Object.assign(this.uploadData, {
        key: `${result.dir}${"${filename}"}`,
        name: file.name
      });
      this.fileList.push({
        url: `${result.host}/${result.dir}${file.name}`,
        uid: file.uid
      });
    },
    handleUploadError(error, file) {
      this.handleRemove(file);
    },
    handleRemove(file) {
      this.fileList = this.fileList.filter(i => i.uid != file.uid);
    },
    handleUploadExceed() {
      this.$message.warning('最多只能上传6张照片哦~');
    }
  }
});
// CONCATENATED MODULE: ./components/BsCommentSubmit.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BsCommentSubmitvue_type_script_lang_js_ = (BsCommentSubmitvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BsCommentSubmit.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(206)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BsCommentSubmitvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "69777706",
  "3d563d46"
  
)

/* harmony default export */ var BsCommentSubmit = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UiButton: __webpack_require__(15).default})


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiEmpty_vue_vue_type_style_index_0_id_e76432ba_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiEmpty_vue_vue_type_style_index_0_id_e76432ba_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiEmpty_vue_vue_type_style_index_0_id_e76432ba_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiEmpty_vue_vue_type_style_index_0_id_e76432ba_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiEmpty_vue_vue_type_style_index_0_id_e76432ba_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-e76432ba]{display:flex}.flex-inline[data-v-e76432ba]{display:inline-flex}.flex-inline[data-v-e76432ba]:after,.flex-inline[data-v-e76432ba]:before,.flex[data-v-e76432ba]:after,.flex[data-v-e76432ba]:before{display:none}.flex-left[data-v-e76432ba]{justify-content:flex-start}.flex-center[data-v-e76432ba]{justify-content:center}.flex-right[data-v-e76432ba]{justify-content:flex-end}.flex-between[data-v-e76432ba]{justify-content:space-between}.flex-around[data-v-e76432ba]{justify-content:space-around}.flex-stretch[data-v-e76432ba]{align-items:stretch}.flex-top[data-v-e76432ba]{align-items:flex-start}.flex-middle[data-v-e76432ba]{align-items:center}.flex-bottom[data-v-e76432ba]{align-items:flex-end}.flex-baseline[data-v-e76432ba]{align-items:baseline}.flex-row[data-v-e76432ba]{flex-direction:row}.flex-row-reverse[data-v-e76432ba]{flex-direction:row-reverse}.flex-column[data-v-e76432ba]{flex-direction:column}.flex-column-reverse[data-v-e76432ba]{flex-direction:column-reverse}.flex-nowrap[data-v-e76432ba]{flex-wrap:nowrap}.flex-wrap[data-v-e76432ba]{flex-wrap:wrap}.flex-wrap-reverse[data-v-e76432ba]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-e76432ba]{align-content:stretch}.flex-wrap-top[data-v-e76432ba]{align-content:flex-start}.flex-wrap-middle[data-v-e76432ba]{align-content:center}.flex-wrap-bottom[data-v-e76432ba]{align-content:flex-end}.flex-wrap-between[data-v-e76432ba]{align-content:space-between}.flex-wrap-around[data-v-e76432ba]{align-content:space-around}.flex-first[data-v-e76432ba]{order:-1}.flex-last[data-v-e76432ba]{order:99}.flex-none[data-v-e76432ba]{flex:none}.flex-auto[data-v-e76432ba]{flex:auto}.flex-1[data-v-e76432ba]{flex:1}.hover-text[data-v-e76432ba]:hover{color:#ff875b}.expend-click[data-v-e76432ba]{position:relative}.expend-click[data-v-e76432ba]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-e76432ba],[data-v-e76432ba]:after,[data-v-e76432ba]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-e76432ba],dd[data-v-e76432ba],dl[data-v-e76432ba],figure[data-v-e76432ba],form[data-v-e76432ba],h1[data-v-e76432ba],h2[data-v-e76432ba],h3[data-v-e76432ba],h4[data-v-e76432ba],h5[data-v-e76432ba],ol[data-v-e76432ba],p[data-v-e76432ba],ul[data-v-e76432ba]{margin:0;font-size:14px}button[data-v-e76432ba],input[data-v-e76432ba],ol[data-v-e76432ba],ul[data-v-e76432ba]{padding:0}li[data-v-e76432ba],ol[data-v-e76432ba],ul[data-v-e76432ba]{list-style:none;list-style-type:none}h1[data-v-e76432ba],h2[data-v-e76432ba],h3[data-v-e76432ba],h4[data-v-e76432ba],h5[data-v-e76432ba]{font-size:100%}input[data-v-e76432ba]{border:0;margin:0}img[data-v-e76432ba]{width:100%}a[data-v-e76432ba],button[data-v-e76432ba],img[data-v-e76432ba],input[data-v-e76432ba],optgroup[data-v-e76432ba],select[data-v-e76432ba],textarea[data-v-e76432ba]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-e76432ba],img[data-v-e76432ba]{-webkit-touch-callout:none;border:0}body[data-v-e76432ba],html[data-v-e76432ba]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-e76432ba],img[data-v-e76432ba],input[data-v-e76432ba],textarea[data-v-e76432ba]{vertical-align:middle;outline:none}body[data-v-e76432ba]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-e76432ba]{border-collapse:collapse;border-spacing:0}a[data-v-e76432ba],table[data-v-e76432ba]{color:#333}a[data-v-e76432ba],a[data-v-e76432ba]:hover{text-decoration:none}a[data-v-e76432ba]:hover{color:#ff512b}.scrollbar-self[data-v-e76432ba]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-e76432ba]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-e76432ba]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.ui-empty[data-v-e76432ba]{margin-top:30px;text-align:center;padding:80px 0}.ui-empty--icon[data-v-e76432ba]{width:228px}.ui-empty--desc[data-v-e76432ba]{margin:20px 0;color:#999}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiPostGetOssConfig; });
/* harmony import */ var _axiosTk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/*
 * @Author: ch
 * @Date: 2022-05-04 18:24:03
 * @LastEditors: ch
 * @LastEditTime: 2022-05-07 10:30:17
 * @Description: file content
 */



const BASE_URL = `${_config_env__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].base_url}/oss/oss`;

/**
 * 获取OOS信息
 * @param {*} data 
 */
const ApiPostGetOssConfig = data => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* ToAsyncAwait */ "f"])(_axiosTk__WEBPACK_IMPORTED_MODULE_0__[/* axiosTk */ "a"].post(`${BASE_URL}/generateOssSignature`, data));

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiImgs_vue_vue_type_style_index_0_id_574ae6f2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiImgs_vue_vue_type_style_index_0_id_574ae6f2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiImgs_vue_vue_type_style_index_0_id_574ae6f2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiImgs_vue_vue_type_style_index_0_id_574ae6f2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiImgs_vue_vue_type_style_index_0_id_574ae6f2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-574ae6f2]{display:flex}.flex-inline[data-v-574ae6f2]{display:inline-flex}.flex-inline[data-v-574ae6f2]:after,.flex-inline[data-v-574ae6f2]:before,.flex[data-v-574ae6f2]:after,.flex[data-v-574ae6f2]:before{display:none}.flex-left[data-v-574ae6f2]{justify-content:flex-start}.flex-center[data-v-574ae6f2]{justify-content:center}.flex-right[data-v-574ae6f2]{justify-content:flex-end}.flex-between[data-v-574ae6f2]{justify-content:space-between}.flex-around[data-v-574ae6f2]{justify-content:space-around}.flex-stretch[data-v-574ae6f2]{align-items:stretch}.flex-top[data-v-574ae6f2]{align-items:flex-start}.flex-middle[data-v-574ae6f2]{align-items:center}.flex-bottom[data-v-574ae6f2]{align-items:flex-end}.flex-baseline[data-v-574ae6f2]{align-items:baseline}.flex-row[data-v-574ae6f2]{flex-direction:row}.flex-row-reverse[data-v-574ae6f2]{flex-direction:row-reverse}.flex-column[data-v-574ae6f2]{flex-direction:column}.flex-column-reverse[data-v-574ae6f2]{flex-direction:column-reverse}.flex-nowrap[data-v-574ae6f2]{flex-wrap:nowrap}.flex-wrap[data-v-574ae6f2]{flex-wrap:wrap}.flex-wrap-reverse[data-v-574ae6f2]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-574ae6f2]{align-content:stretch}.flex-wrap-top[data-v-574ae6f2]{align-content:flex-start}.flex-wrap-middle[data-v-574ae6f2]{align-content:center}.flex-wrap-bottom[data-v-574ae6f2]{align-content:flex-end}.flex-wrap-between[data-v-574ae6f2]{align-content:space-between}.flex-wrap-around[data-v-574ae6f2]{align-content:space-around}.flex-first[data-v-574ae6f2]{order:-1}.flex-last[data-v-574ae6f2]{order:99}.flex-none[data-v-574ae6f2]{flex:none}.flex-auto[data-v-574ae6f2]{flex:auto}.flex-1[data-v-574ae6f2]{flex:1}.hover-text[data-v-574ae6f2]:hover{color:#ff875b}.expend-click[data-v-574ae6f2]{position:relative}.expend-click[data-v-574ae6f2]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-574ae6f2],[data-v-574ae6f2]:after,[data-v-574ae6f2]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-574ae6f2],dd[data-v-574ae6f2],dl[data-v-574ae6f2],figure[data-v-574ae6f2],form[data-v-574ae6f2],h1[data-v-574ae6f2],h2[data-v-574ae6f2],h3[data-v-574ae6f2],h4[data-v-574ae6f2],h5[data-v-574ae6f2],ol[data-v-574ae6f2],p[data-v-574ae6f2],ul[data-v-574ae6f2]{margin:0;font-size:14px}button[data-v-574ae6f2],input[data-v-574ae6f2],ol[data-v-574ae6f2],ul[data-v-574ae6f2]{padding:0}li[data-v-574ae6f2],ol[data-v-574ae6f2],ul[data-v-574ae6f2]{list-style:none;list-style-type:none}h1[data-v-574ae6f2],h2[data-v-574ae6f2],h3[data-v-574ae6f2],h4[data-v-574ae6f2],h5[data-v-574ae6f2]{font-size:100%}input[data-v-574ae6f2]{border:0;margin:0}img[data-v-574ae6f2]{width:100%}a[data-v-574ae6f2],button[data-v-574ae6f2],img[data-v-574ae6f2],input[data-v-574ae6f2],optgroup[data-v-574ae6f2],select[data-v-574ae6f2],textarea[data-v-574ae6f2]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-574ae6f2],img[data-v-574ae6f2]{-webkit-touch-callout:none;border:0}body[data-v-574ae6f2],html[data-v-574ae6f2]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-574ae6f2],img[data-v-574ae6f2],input[data-v-574ae6f2],textarea[data-v-574ae6f2]{vertical-align:middle;outline:none}body[data-v-574ae6f2]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-574ae6f2]{border-collapse:collapse;border-spacing:0}a[data-v-574ae6f2],table[data-v-574ae6f2]{color:#333}a[data-v-574ae6f2],a[data-v-574ae6f2]:hover{text-decoration:none}a[data-v-574ae6f2]:hover{color:#ff512b}.scrollbar-self[data-v-574ae6f2]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-574ae6f2]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-574ae6f2]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.preview-imgs ul[data-v-574ae6f2]{display:flex}.preview-imgs li[data-v-574ae6f2]{width:46px;height:46px;border:1px solid #eee;margin-right:10px;padding:1px;cursor:pointer}.preview-imgs li img[data-v-574ae6f2]{width:42px;height:42px;-o-object-fit:contain;object-fit:contain}.preview-imgs li.active[data-v-574ae6f2]{border-color:#ff512b;position:relative}.preview-imgs li.active[data-v-574ae6f2]:after{content:\"\";height:3px;width:3px;bottom:-7px;left:17px;display:block;position:absolute;border:3px solid transparent;border-top-color:#ff512b}.preview-imgs p[data-v-574ae6f2]{width:300px;margin-top:20px;position:relative;border:1px solid #eee}.preview-imgs p img[data-v-574ae6f2]{width:300px;height:300px;-o-object-fit:contain;object-fit:contain;cursor:zoom-out}.preview-imgs p:hover span[data-v-574ae6f2]{display:block}.preview-imgs p span[data-v-574ae6f2]{display:none;position:absolute;width:40px;height:40px;background:rgba(0,0,0,.5);top:130px;cursor:pointer}.preview-imgs p span[data-v-574ae6f2]:after,.preview-imgs p span[data-v-574ae6f2]:before{position:absolute;display:block;content:\"\";background:#fff;height:20px;width:4px;border-radius:4px;left:16px;top:4px;transform:rotate(45deg)}.preview-imgs p span[data-v-574ae6f2]:after{transform:rotate(-45deg);top:16px}.preview-imgs p span.prev[data-v-574ae6f2]{left:10px}.preview-imgs p span.next[data-v-574ae6f2]{right:10px}.preview-imgs p span.next[data-v-574ae6f2]:after{left:20px;transform:rotate(45deg)}.preview-imgs p span.next[data-v-574ae6f2]:before{left:20px;transform:rotate(-45deg)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(221);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7ed397ad", content, true, context)
};

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCommentFollowInfo_vue_vue_type_style_index_0_id_7c58d46e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCommentFollowInfo_vue_vue_type_style_index_0_id_7c58d46e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCommentFollowInfo_vue_vue_type_style_index_0_id_7c58d46e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCommentFollowInfo_vue_vue_type_style_index_0_id_7c58d46e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCommentFollowInfo_vue_vue_type_style_index_0_id_7c58d46e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-7c58d46e]{display:flex}.flex-inline[data-v-7c58d46e]{display:inline-flex}.flex-inline[data-v-7c58d46e]:after,.flex-inline[data-v-7c58d46e]:before,.flex[data-v-7c58d46e]:after,.flex[data-v-7c58d46e]:before{display:none}.flex-left[data-v-7c58d46e]{justify-content:flex-start}.flex-center[data-v-7c58d46e]{justify-content:center}.flex-right[data-v-7c58d46e]{justify-content:flex-end}.flex-between[data-v-7c58d46e]{justify-content:space-between}.flex-around[data-v-7c58d46e]{justify-content:space-around}.flex-stretch[data-v-7c58d46e]{align-items:stretch}.flex-top[data-v-7c58d46e]{align-items:flex-start}.flex-middle[data-v-7c58d46e]{align-items:center}.flex-bottom[data-v-7c58d46e]{align-items:flex-end}.flex-baseline[data-v-7c58d46e]{align-items:baseline}.flex-row[data-v-7c58d46e]{flex-direction:row}.flex-row-reverse[data-v-7c58d46e]{flex-direction:row-reverse}.flex-column[data-v-7c58d46e]{flex-direction:column}.flex-column-reverse[data-v-7c58d46e]{flex-direction:column-reverse}.flex-nowrap[data-v-7c58d46e]{flex-wrap:nowrap}.flex-wrap[data-v-7c58d46e]{flex-wrap:wrap}.flex-wrap-reverse[data-v-7c58d46e]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-7c58d46e]{align-content:stretch}.flex-wrap-top[data-v-7c58d46e]{align-content:flex-start}.flex-wrap-middle[data-v-7c58d46e]{align-content:center}.flex-wrap-bottom[data-v-7c58d46e]{align-content:flex-end}.flex-wrap-between[data-v-7c58d46e]{align-content:space-between}.flex-wrap-around[data-v-7c58d46e]{align-content:space-around}.flex-first[data-v-7c58d46e]{order:-1}.flex-last[data-v-7c58d46e]{order:99}.flex-none[data-v-7c58d46e]{flex:none}.flex-auto[data-v-7c58d46e]{flex:auto}.flex-1[data-v-7c58d46e]{flex:1}.hover-text[data-v-7c58d46e]:hover{color:#ff875b}.expend-click[data-v-7c58d46e]{position:relative}.expend-click[data-v-7c58d46e]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-7c58d46e],[data-v-7c58d46e]:after,[data-v-7c58d46e]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-7c58d46e],dd[data-v-7c58d46e],dl[data-v-7c58d46e],figure[data-v-7c58d46e],form[data-v-7c58d46e],h1[data-v-7c58d46e],h2[data-v-7c58d46e],h3[data-v-7c58d46e],h4[data-v-7c58d46e],h5[data-v-7c58d46e],ol[data-v-7c58d46e],p[data-v-7c58d46e],ul[data-v-7c58d46e]{margin:0;font-size:14px}button[data-v-7c58d46e],input[data-v-7c58d46e],ol[data-v-7c58d46e],ul[data-v-7c58d46e]{padding:0}li[data-v-7c58d46e],ol[data-v-7c58d46e],ul[data-v-7c58d46e]{list-style:none;list-style-type:none}h1[data-v-7c58d46e],h2[data-v-7c58d46e],h3[data-v-7c58d46e],h4[data-v-7c58d46e],h5[data-v-7c58d46e]{font-size:100%}input[data-v-7c58d46e]{border:0;margin:0}img[data-v-7c58d46e]{width:100%}a[data-v-7c58d46e],button[data-v-7c58d46e],img[data-v-7c58d46e],input[data-v-7c58d46e],optgroup[data-v-7c58d46e],select[data-v-7c58d46e],textarea[data-v-7c58d46e]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-7c58d46e],img[data-v-7c58d46e]{-webkit-touch-callout:none;border:0}body[data-v-7c58d46e],html[data-v-7c58d46e]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-7c58d46e],img[data-v-7c58d46e],input[data-v-7c58d46e],textarea[data-v-7c58d46e]{vertical-align:middle;outline:none}body[data-v-7c58d46e]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-7c58d46e]{border-collapse:collapse;border-spacing:0}a[data-v-7c58d46e],table[data-v-7c58d46e]{color:#333}a[data-v-7c58d46e],a[data-v-7c58d46e]:hover{text-decoration:none}a[data-v-7c58d46e]:hover{color:#ff512b}.scrollbar-self[data-v-7c58d46e]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-7c58d46e]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-7c58d46e]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.follow[data-v-7c58d46e]{margin-top:30px}.follow--title[data-v-7c58d46e]{color:#ff6a19;font-weight:400}.follow--ctx[data-v-7c58d46e]{line-height:24px;word-break:break-all}.follow--imgs[data-v-7c58d46e]{margin-top:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCommentSubmit_vue_vue_type_style_index_0_id_69777706_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(181);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCommentSubmit_vue_vue_type_style_index_0_id_69777706_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCommentSubmit_vue_vue_type_style_index_0_id_69777706_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCommentSubmit_vue_vue_type_style_index_0_id_69777706_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCommentSubmit_vue_vue_type_style_index_0_id_69777706_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-69777706]{display:flex}.flex-inline[data-v-69777706]{display:inline-flex}.flex-inline[data-v-69777706]:after,.flex-inline[data-v-69777706]:before,.flex[data-v-69777706]:after,.flex[data-v-69777706]:before{display:none}.flex-left[data-v-69777706]{justify-content:flex-start}.flex-center[data-v-69777706]{justify-content:center}.flex-right[data-v-69777706]{justify-content:flex-end}.flex-between[data-v-69777706]{justify-content:space-between}.flex-around[data-v-69777706]{justify-content:space-around}.flex-stretch[data-v-69777706]{align-items:stretch}.flex-top[data-v-69777706]{align-items:flex-start}.flex-middle[data-v-69777706]{align-items:center}.flex-bottom[data-v-69777706]{align-items:flex-end}.flex-baseline[data-v-69777706]{align-items:baseline}.flex-row[data-v-69777706]{flex-direction:row}.flex-row-reverse[data-v-69777706]{flex-direction:row-reverse}.flex-column[data-v-69777706]{flex-direction:column}.flex-column-reverse[data-v-69777706]{flex-direction:column-reverse}.flex-nowrap[data-v-69777706]{flex-wrap:nowrap}.flex-wrap[data-v-69777706]{flex-wrap:wrap}.flex-wrap-reverse[data-v-69777706]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-69777706]{align-content:stretch}.flex-wrap-top[data-v-69777706]{align-content:flex-start}.flex-wrap-middle[data-v-69777706]{align-content:center}.flex-wrap-bottom[data-v-69777706]{align-content:flex-end}.flex-wrap-between[data-v-69777706]{align-content:space-between}.flex-wrap-around[data-v-69777706]{align-content:space-around}.flex-first[data-v-69777706]{order:-1}.flex-last[data-v-69777706]{order:99}.flex-none[data-v-69777706]{flex:none}.flex-auto[data-v-69777706]{flex:auto}.flex-1[data-v-69777706]{flex:1}.hover-text[data-v-69777706]:hover{color:#ff875b}.expend-click[data-v-69777706]{position:relative}.expend-click[data-v-69777706]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-69777706],[data-v-69777706]:after,[data-v-69777706]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-69777706],dd[data-v-69777706],dl[data-v-69777706],figure[data-v-69777706],form[data-v-69777706],h1[data-v-69777706],h2[data-v-69777706],h3[data-v-69777706],h4[data-v-69777706],h5[data-v-69777706],ol[data-v-69777706],p[data-v-69777706],ul[data-v-69777706]{margin:0;font-size:14px}button[data-v-69777706],input[data-v-69777706],ol[data-v-69777706],ul[data-v-69777706]{padding:0}li[data-v-69777706],ol[data-v-69777706],ul[data-v-69777706]{list-style:none;list-style-type:none}h1[data-v-69777706],h2[data-v-69777706],h3[data-v-69777706],h4[data-v-69777706],h5[data-v-69777706]{font-size:100%}input[data-v-69777706]{border:0;margin:0}img[data-v-69777706]{width:100%}a[data-v-69777706],button[data-v-69777706],img[data-v-69777706],input[data-v-69777706],optgroup[data-v-69777706],select[data-v-69777706],textarea[data-v-69777706]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-69777706],img[data-v-69777706]{-webkit-touch-callout:none;border:0}body[data-v-69777706],html[data-v-69777706]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-69777706],img[data-v-69777706],input[data-v-69777706],textarea[data-v-69777706]{vertical-align:middle;outline:none}body[data-v-69777706]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-69777706]{border-collapse:collapse;border-spacing:0}a[data-v-69777706],table[data-v-69777706]{color:#333}a[data-v-69777706],a[data-v-69777706]:hover{text-decoration:none}a[data-v-69777706]:hover{color:#ff512b}.scrollbar-self[data-v-69777706]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-69777706]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-69777706]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.rate-box[data-v-69777706]{display:flex}.rate-box b[data-v-69777706]{font-weight:400;margin-right:10px;color:#666}.rate-box span[data-v-69777706]{color:#ff6a19;margin-left:10px}.textarea[data-v-69777706]{height:138px;margin-top:30px}.operation[data-v-69777706]{display:flex;justify-content:space-between;align-items:center;margin-top:15px}.operation .upload-txt[data-v-69777706]{font-size:12px;color:#999}.operation .upload-btn[data-v-69777706]{height:40px;width:100px;border-radius:4px;font-size:14px;padding:0}[data-v-69777706] .el-upload--picture-card,[data-v-69777706] .el-upload-list__item{height:70px!important;width:70px!important;line-height:20px}[data-v-69777706] .el-upload--picture-card{padding-top:10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BsCommentInfo.vue?vue&type=template&id=6f926f9e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-info"},[(_vm.source == 'detail')?_vm._ssrNode("<div class=\"side-user\" data-v-6f926f9e>","</div>",[_c('el-avatar',{attrs:{"size":55,"src":_vm.commentDetail.userAvatar}}),_vm._ssrNode(" <p data-v-6f926f9e>"+_vm._ssrEscape(_vm._s(_vm.commentDetail.userName))+"</p>")],2):_vm._ssrNode(("<div class=\"side-product\" data-v-6f926f9e><img"+(_vm._ssrAttr("src",_vm.commentDetail.productPicture))+" data-v-6f926f9e> <p data-v-6f926f9e>"+_vm._ssrEscape(_vm._s(_vm.commentDetail.productName))+"</p> <span data-v-6f926f9e>"+_vm._ssrEscape(_vm._s(_vm.commentDetail.skuName))+"</span></div>")),_vm._ssrNode(" "),_vm._ssrNode("<main data-v-6f926f9e>","</main>",[(!_vm.commentDetail.id)?_c('BsCommentSubmit',{attrs:{"commentDetail":_vm.commentDetail},on:{"submit":_vm.handleSubmit,"editStatusChange":_vm.editStatusChange}}):[_c('div',{staticClass:"top"},[_c('el-rate',{attrs:{"value":_vm.commentDetail.commentScore,"disabled":""}}),_vm._v(" "),_c('span',{staticClass:"time"},[_vm._v(_vm._s(_vm.FormatDate(_vm.commentDetail.createTime, 'yyyy-mm-dd hh:ii')))])],1),_vm._v(" "),(_vm.commentDetail.skuName)?_c('p',{staticClass:"sku"},[_vm._v("已购买："+_vm._s(_vm.commentDetail.skuName))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"ctx"},[_vm._v(_vm._s(_vm.commentDetail.commentContent))]),_vm._v(" "),(_vm.imgs.length)?_c('UiImgs',{staticClass:"imgs",attrs:{"list":_vm.imgs}}):_vm._e(),_vm._v(" "),(_vm.isCanFollowComment && !_vm.showFollowForm)?_c('UiButton',{staticClass:"follow-btn",attrs:{"type":"yellow_line","radius":"4px"},on:{"click":function($event){_vm.showFollowForm = true}}},[_vm._v("发起追评")]):_vm._e(),_vm._v(" "),(_vm.showFollowForm && !_vm.followComment)?_c('BsCommentSubmit',{attrs:{"type":_vm.COMMENT.TYPE.FOLLOW_COMMENT,"commentDetail":_vm.commentDetail},on:{"submit":_vm.handleSubmitFollow,"editStatusChange":_vm.editStatusChange}}):_vm._e(),_vm._v(" "),(_vm.followComment)?_c('BsCommentFollowInfo',{attrs:{"followComment":_vm.followComment,"commentTime":_vm.commentDetail.commentTime}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"operation"},[_c('div',[_c('span',{staticClass:"operation--chat",on:{"click":function($event){_vm.answerVisible = !_vm.answerVisible}}},[(_vm.replyCount)?[_vm._v(_vm._s(_vm.replyCount)+"条")]:_vm._e(),_vm._v("评论\n\t\t\t\t\t")],2),_vm._v(" "),(_vm.answerCommentList.length)?_c('span',{staticClass:"operation--show",on:{"click":function($event){_vm.answerVisible = !_vm.answerVisible}}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.answerVisible ? '收起' : '展开')+"\n\t\t\t\t\t")]):_vm._e()]),_vm._v(" "),_c('span',{staticClass:"operation--thumb",class:{'operation--thumb__active':_vm.isLike},on:{"click":_vm.handleUseful}},[_vm._v(_vm._s(_vm.usefulCount || '有用'))])]),_vm._v(" "),(_vm.showAnswerBox)?_c('div',{staticClass:"answer"},[_c('b',{staticClass:"answer--title"},[_vm._v("全部评论("+_vm._s(_vm.replyCount)+")")]),_vm._v(" "),_c('ul',[(_vm.commentDetail.merchantComment)?_c('li',{staticClass:"answer--item"},[_c('div',{staticClass:"answer--name"},[_c('b',[_vm._v(_vm._s(_vm.commentDetail.merchantComment.userName)+"：")]),_c('span',[_vm._v(_vm._s(_vm.commentDetail.merchantComment.createTime))])]),_vm._v(" "),_c('p',{staticClass:"answer--ctx"},[_vm._v(_vm._s(_vm.commentDetail.merchantComment.commentContent))])]):_vm._e(),_vm._v(" "),(_vm.answerVisible)?_vm._l((_vm.answerCommentList),function(item,idx){return _c('li',{key:idx,staticClass:"answer--item"},[_c('div',{staticClass:"answer--name"},[_c('b',[_vm._v(_vm._s(item.userName)+" "+_vm._s(item.parentId !== _vm.commentDetail.id ? (" 回复 " + (item.parentUserName)) : '')+"：")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.FormatDate(item.createTime, 'yyyy-mm-dd hh:ii')))])]),_vm._v(" "),_c('p',{staticClass:"answer--ctx"},[_vm._v(_vm._s(item.commentContent))]),_vm._v(" "),_c('span',{staticClass:"answer--answer",on:{"click":function($event){return _vm.handleAnswer(item)}}},[_vm._v("回复")])])}):_vm._e()],2),_vm._v(" "),(_vm.answerVisible)?_c('div',{staticClass:"answer--form"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.answerContent),expression:"answerContent"}],staticClass:"answer--input",attrs:{"maxlength":"500","placeholder":_vm.answerPlaceholder},domProps:{"value":(_vm.answerContent)},on:{"keydown":_vm.handleClearAnswer,"input":function($event){if($event.target.composing){ return; }_vm.answerContent=$event.target.value}}}),_vm._v(" "),_c('UiButton',{staticClass:"answer--btn",attrs:{"disabled":!_vm.answerContent.trim(),"radius":"4px","type":"red_panel"},on:{"click":_vm.handleSubmitAnswer}},[_vm._v("发表")])],1):_vm._e()]):_vm._e()]],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BsCommentInfo.vue?vue&type=template&id=6f926f9e&scoped=true&

// EXTERNAL MODULE: ./components/BsCommentFollowInfo.vue + 4 modules
var BsCommentFollowInfo = __webpack_require__(189);

// EXTERNAL MODULE: ./plugins/api/comment.js
var comment = __webpack_require__(177);

// EXTERNAL MODULE: ./plugins/utils/index.js + 1 modules
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./components/UiImgs.vue + 4 modules
var UiImgs = __webpack_require__(169);

// EXTERNAL MODULE: ./components/UiButton.vue + 4 modules
var UiButton = __webpack_require__(15);

// EXTERNAL MODULE: ./components/BsCommentSubmit.vue + 4 modules
var BsCommentSubmit = __webpack_require__(190);

// EXTERNAL MODULE: ./constants/index.js
var constants = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BsCommentInfo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var BsCommentInfovue_type_script_lang_js_ = ({
  components: {
    BsCommentFollowInfo: BsCommentFollowInfo["default"],
    UiImgs: UiImgs["default"],
    UiButton: UiButton["default"],
    BsCommentSubmit: BsCommentSubmit["default"]
  },
  props: {
    // 来源 comment从我的订单来是需要操作评价，detail游客从商品中来只要显示评价详情
    source: {
      type: String,
      default: 'comment'
    },
    // 是否默认打开追评，只有在无追评时有用
    isFollowForm: {
      type: Boolean,
      default: false,
      require: true
    },
    commentDetail: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      COMMENT: constants["b" /* COMMENT */],
      answerCommentList: this.commentDetail.answerCommentList || [],
      answerVisible: false,
      answerContent: '',
      answer: null,
      isLike: this.commentDetail.isLike,
      usefulCount: this.commentDetail.usefulCount,
      replyCount: this.commentDetail.replyCount,
      showFollowForm: this.isFollowForm,
      followComment: this.commentDetail.followComment || null
    };
  },
  computed: {
    showAnswerBox() {
      return this.commentDetail.merchantComment || this.answerVisible ? true : false;
    },
    answerPlaceholder() {
      return this.answer ? `回复：${this.answer.userName}` : '说点什么吧？';
    },
    imgs() {
      let imgs = this.commentDetail.pictureUrl;
      return imgs ? imgs.split(',') : [];
    },
    /**
     * 是否需要显示追评按钮
     * 如果是在订单里进来的，且没有追评则显示
     */
    isCanFollowComment() {
      let status = !this.followComment && this.source === 'comment';
      return status;
    }
  },
  watch: {
    commentDetail: {
      handler() {
        this.followComment = this.commentDetail.followComment;
        this.replyCount = this.commentDetail.replyCount || 0;
        this.answerCommentList = this.commentDetail.answerCommentList || [];
        this.isLike = this.commentDetail.isLike;
        this.usefulCount = this.commentDetail.usefulCount;
      },
      deep: true
    }
  },
  mounted() {
    this.answerCommentList = this.commentDetail.answerCommentList || [];
  },
  methods: {
    FormatDate: utils["c" /* FormatDate */],
    /**
     * 评价成功后，抛出事件，方便父组件做数据处理
     */
    handleSubmit(result) {
      this.$emit('submit', result);
    },
    /**
     * 追评提交成功，抛出事件，方便父组件做数据处理
     */
    handleSubmitFollow(result) {
      this.followComment = result;
    },
    handleAnswer(item) {
      this.answer = item;
    },
    /**
     * 有回复用户时，取消回复对象
     * 输入框没有内容后再按一次退格，删除回复对象，直接回复评价
     */
    handleClearAnswer(e) {
      if (e.code === 'Backspace' && !this.answerContent && this.answer) {
        this.answer = null;
      }
    },
    /**
     * 评论回复，请求成功往列表添加一条记录
     */
    async handleSubmitAnswer() {
      let data = {
        commentContent: this.answerContent,
        commentType: 3,
        originId: this.commentDetail.id,
        parentId: this.answer ? this.answer.id : this.commentDetail.id
      };
      const {
        error,
        result
      } = await Object(comment["g" /* ApiPostComment */])(data);
      if (error) {
        this.$message.error(error.message);
        return false;
      }
      this.answerCommentList.unshift({
        ...result,
        userName: this.$store.state.userInfo.nickname,
        parentUserName: this.answer ? this.answer.userName : ''
      });
      this.answerContent = '';
      this.replyCount++;
      this.$message.success('评论成功!');
    },
    /**
     * 点击点赞，做防抖处理
     */
    handleUseful() {
      this.isLike = !this.isLike;
      if (this.isLike) {
        this.usefulCount++;
      } else {
        this.usefulCount--;
      }
      if (!this.debounce) {
        this.debounce = Object(utils["b" /* Debounce */])(this.updateUseFul, 500);
      }
      this.debounce();
    },
    /**
     * 更新点赞请求
     */
    async updateUseFul() {
      if (this.isLike === this.commentDetail.isLike) {
        return false;
      }
      const {
        error,
        result
      } = await Object(comment["h" /* ApiPutCommentUseful */])({
        commentId: this.commentDetail.id,
        isLike: this.isLike
      });
      this.commentDetail.isLike = this.isLike;
    },
    /**
     * 动态监听是否有输入内容的评价或追评
     */
    editStatusChange(val) {
      this.$emit('editStatusChange', val);
    }
  }
});
// CONCATENATED MODULE: ./components/BsCommentInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BsCommentInfovue_type_script_lang_js_ = (BsCommentInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BsCommentInfo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(220)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BsCommentInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6f926f9e",
  "211bd45c"
  
)

/* harmony default export */ var BsCommentInfo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BsCommentSubmit: __webpack_require__(190).default,UiImgs: __webpack_require__(169).default,UiButton: __webpack_require__(15).default,BsCommentFollowInfo: __webpack_require__(189).default})


/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCommentInfo_vue_vue_type_style_index_0_id_6f926f9e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCommentInfo_vue_vue_type_style_index_0_id_6f926f9e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCommentInfo_vue_vue_type_style_index_0_id_6f926f9e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCommentInfo_vue_vue_type_style_index_0_id_6f926f9e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BsCommentInfo_vue_vue_type_style_index_0_id_6f926f9e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(40);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(222);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(223);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(224);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(225);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-6f926f9e]{display:flex}.flex-inline[data-v-6f926f9e]{display:inline-flex}.flex-inline[data-v-6f926f9e]:after,.flex-inline[data-v-6f926f9e]:before,.flex[data-v-6f926f9e]:after,.flex[data-v-6f926f9e]:before{display:none}.flex-left[data-v-6f926f9e]{justify-content:flex-start}.flex-center[data-v-6f926f9e]{justify-content:center}.flex-right[data-v-6f926f9e]{justify-content:flex-end}.flex-between[data-v-6f926f9e]{justify-content:space-between}.flex-around[data-v-6f926f9e]{justify-content:space-around}.flex-stretch[data-v-6f926f9e]{align-items:stretch}.flex-top[data-v-6f926f9e]{align-items:flex-start}.flex-middle[data-v-6f926f9e]{align-items:center}.flex-bottom[data-v-6f926f9e]{align-items:flex-end}.flex-baseline[data-v-6f926f9e]{align-items:baseline}.flex-row[data-v-6f926f9e]{flex-direction:row}.flex-row-reverse[data-v-6f926f9e]{flex-direction:row-reverse}.flex-column[data-v-6f926f9e]{flex-direction:column}.flex-column-reverse[data-v-6f926f9e]{flex-direction:column-reverse}.flex-nowrap[data-v-6f926f9e]{flex-wrap:nowrap}.flex-wrap[data-v-6f926f9e]{flex-wrap:wrap}.flex-wrap-reverse[data-v-6f926f9e]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-6f926f9e]{align-content:stretch}.flex-wrap-top[data-v-6f926f9e]{align-content:flex-start}.flex-wrap-middle[data-v-6f926f9e]{align-content:center}.flex-wrap-bottom[data-v-6f926f9e]{align-content:flex-end}.flex-wrap-between[data-v-6f926f9e]{align-content:space-between}.flex-wrap-around[data-v-6f926f9e]{align-content:space-around}.flex-first[data-v-6f926f9e]{order:-1}.flex-last[data-v-6f926f9e]{order:99}.flex-none[data-v-6f926f9e]{flex:none}.flex-auto[data-v-6f926f9e]{flex:auto}.flex-1[data-v-6f926f9e]{flex:1}.hover-text[data-v-6f926f9e]:hover{color:#ff875b}.expend-click[data-v-6f926f9e]{position:relative}.expend-click[data-v-6f926f9e]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-6f926f9e],[data-v-6f926f9e]:after,[data-v-6f926f9e]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-6f926f9e],dd[data-v-6f926f9e],dl[data-v-6f926f9e],figure[data-v-6f926f9e],form[data-v-6f926f9e],h1[data-v-6f926f9e],h2[data-v-6f926f9e],h3[data-v-6f926f9e],h4[data-v-6f926f9e],h5[data-v-6f926f9e],ol[data-v-6f926f9e],p[data-v-6f926f9e],ul[data-v-6f926f9e]{margin:0;font-size:14px}button[data-v-6f926f9e],input[data-v-6f926f9e],ol[data-v-6f926f9e],ul[data-v-6f926f9e]{padding:0}li[data-v-6f926f9e],ol[data-v-6f926f9e],ul[data-v-6f926f9e]{list-style:none;list-style-type:none}h1[data-v-6f926f9e],h2[data-v-6f926f9e],h3[data-v-6f926f9e],h4[data-v-6f926f9e],h5[data-v-6f926f9e]{font-size:100%}input[data-v-6f926f9e]{border:0;margin:0}img[data-v-6f926f9e]{width:100%}a[data-v-6f926f9e],button[data-v-6f926f9e],img[data-v-6f926f9e],input[data-v-6f926f9e],optgroup[data-v-6f926f9e],select[data-v-6f926f9e],textarea[data-v-6f926f9e]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-6f926f9e],img[data-v-6f926f9e]{-webkit-touch-callout:none;border:0}body[data-v-6f926f9e],html[data-v-6f926f9e]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-6f926f9e],img[data-v-6f926f9e],input[data-v-6f926f9e],textarea[data-v-6f926f9e]{vertical-align:middle;outline:none}body[data-v-6f926f9e]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-6f926f9e]{border-collapse:collapse;border-spacing:0}a[data-v-6f926f9e],table[data-v-6f926f9e]{color:#333}a[data-v-6f926f9e],a[data-v-6f926f9e]:hover{text-decoration:none}a[data-v-6f926f9e]:hover{color:#ff512b}.scrollbar-self[data-v-6f926f9e]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-6f926f9e]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-6f926f9e]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.comment-info[data-v-6f926f9e]{display:flex;border-top:1px solid #f2f2f2;padding:35px 20px 50px 0}.comment-info main[data-v-6f926f9e]{flex:1}.side-user[data-v-6f926f9e]{width:170px;text-align:center}.side-user p[data-v-6f926f9e]{margin-top:10px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.side-product[data-v-6f926f9e]{width:230px;padding:0 45px;text-align:left}.side-product img[data-v-6f926f9e]{width:140px;height:140px;-o-object-fit:contain;object-fit:contain}.side-product p[data-v-6f926f9e]{margin-top:10px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.side-product span[data-v-6f926f9e]{margin-top:5px;display:block;color:#999;font-size:12px}.top[data-v-6f926f9e]{display:flex;justify-content:space-between;margin-bottom:10px}.top[data-v-6f926f9e] .el-rate__icon{margin-right:0;font-size:24px}.sku[data-v-6f926f9e],.time[data-v-6f926f9e]{color:#999;font-size:12px}.ctx[data-v-6f926f9e]{word-break:break-all;line-height:24px;margin-top:8px}.imgs[data-v-6f926f9e]{margin-top:10px}.follow[data-v-6f926f9e],.follow-btn[data-v-6f926f9e]{margin-top:30px}.follow--title[data-v-6f926f9e]{color:#ff6a19;font-weight:400}.operation[data-v-6f926f9e]{color:#999;display:flex;justify-content:space-between;margin-top:30px}.operation--show[data-v-6f926f9e]{color:#3083ff;margin-left:28px;cursor:pointer}.operation--chat[data-v-6f926f9e],.operation--thumb[data-v-6f926f9e]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 0;background-size:16px;padding-left:24px;cursor:pointer}.operation--chat[data-v-6f926f9e]:hover,.operation--chat__active[data-v-6f926f9e],.operation--thumb[data-v-6f926f9e]:hover,.operation--thumb__active[data-v-6f926f9e]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");color:#ff6a19}.operation--thumb[data-v-6f926f9e]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")}.operation--thumb[data-v-6f926f9e]:hover,.operation--thumb__active[data-v-6f926f9e]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")}.answer[data-v-6f926f9e]{background:#f8f8f8;margin-top:14px;padding:0 24px 20px}.answer--item[data-v-6f926f9e]{border-top:1px solid #eee;padding:20px 0}.answer--title[data-v-6f926f9e]{height:54px;line-height:54px;font-weight:400;color:#666}.answer--name[data-v-6f926f9e]{color:#999;font-size:12px;display:flex;justify-content:space-between}.answer--ctx[data-v-6f926f9e]{color:#666;margin:15px 0 0;word-break:break-all}.answer--answer[data-v-6f926f9e]{font-size:12px;color:#666;text-align:right;cursor:pointer;display:block}.answer--form[data-v-6f926f9e]{display:flex}.answer--input[data-v-6f926f9e]{flex:1;height:40px;border:1px solid #eee;border-radius:4px;margin-right:15px;padding:0 20px}.answer--btn[data-v-6f926f9e]{height:40px;font-size:14px}.answer[data-v-6f926f9e] .ui-button__disabled{background:#eee;color:#999}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAFRQTFRFAAAAn5+fn5+fn5+fnp6en5+fnp6en5+fnp6enZ2dnZ2dn5+fnZ2dn5+fnp6en5+fnp6enZ2dnp6enp6enp6enp6enp6enp6enp6enp6enp6enp6eTc2L1gAAABt0Uk5TABAgMD9AT1BfYHB/gI+Qn6CvsL/Az9Df4O/wdpReUQAAAPBJREFUOMu9k1tvhCAYRAeUugtovbDezv//n32wu1mjmKZpOi+QzIEwXwZJkopbqIdhYtMyDEMIt0JPuQenerjNrwHmlGKMMTrnY4yxTwmgliQP493oqGoEL1lIZ7Yk04NVw2qVkV1pNNEqq55J4PNABIH7GWDLdx0Bu+xm5A+AWXdA9Ys3/AOwxSy2bZGPeZfstmRiVpJd/zxmdQ2sxDzQMqtlyvpmoZW7aMwnOKmHcNpa20EvyYywdN+MKcuPEEIIoRuA0UiSaYCtum7ataJ93mx9AitTv6w5pRTfv4OBR5hgdhcjARqTn4mfSWfHvwBg/R6S/7WFxgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAFRQTFRFAAAA/3Ag/2gY/2ob/2kY/2wY/2sa/2ka/2kY/2oY/2sZ/2oY/2oa/2kZ/2oZ/2oa/2sa/2oZ/2oZ/2kZ/2oZ/2oZ/2kZ/2oZ/2oZ/2oZ/2oa/2oZ5TzDvgAAABt0Uk5TABAgMD9AT1BfYHB/gI+Qn6CvsL/Az9Df4O/wdpReUQAAAPBJREFUOMu9k1tvhCAYRAeUugtovbDezv//n32wu1mjmKZpOi+QzIEwXwZJkopbqIdhYtMyDEMIt0JPuQenerjNrwHmlGKMMTrnY4yxTwmgliQP493oqGoEL1lIZ7Yk04NVw2qVkV1pNNEqq55J4PNABIH7GWDLdx0Bu+xm5A+AWXdA9Ys3/AOwxSy2bZGPeZfstmRiVpJd/zxmdQ2sxDzQMqtlyvpmoZW7aMwnOKmHcNpa20EvyYywdN+MKcuPEEIIoRuA0UiSaYCtum7ataJ93mx9AitTv6w5pRTfv4OBR5hgdhcjARqTn4mfSWfHvwBg/R6S/7WFxgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAEhQTFRFAAAAn5+fl5eXmpqal5eXmJiYmZmZmZmZmpqamZmZmZmZmJiYmJiYmZmZmZmZmpqamZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZYx0QagAAABd0Uk5TABAgMEBPUF9gcICQn6CvsMDP0N/g7/AIqEK3AAAAxUlEQVQ4y63SwZKDIBBF0QcyjMEkEpTc///TLNCpimOTTd6SPgU0tHSMu9Z6H2SnAFRv1kdW72ZmE9yYpMBigpUoBYpV9+ClRLZAokiamKwNKqOkzOW87h7tcDh9iPBbWb2kyPNtfeEvxbVWW+rVt8a25HncW91TvSQIkhLp/5ULty5QpPZBgD4YyX2QPt0hk/qgEPugPbkNBlAXxP3rLJDaaNpgbms2aE3YoM2nDdxjG91z4H8WnsNhPA7Z6grnoiSnr+QF1TgVQtxR94kAAAAASUVORK5CYII="

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAEhQTFRFAAAA/3Ag/2gY/2ob/2wY/2sa/2ka/2kY/2oY/2sZ/2oa/2oZ/2oa/2sa/2oZ/2oZ/2oZ/2oZ/2kZ/2oZ/2oZ/2oZ/2oa/2oZuezpgAAAABd0Uk5TABAgMEBPUF9gcICQn6CvsMDP0N/g7/AIqEK3AAAAxUlEQVQ4y63SwZKDIBBF0QcyjMEkEpTc///TLNCpimOTTd6SPgU0tHSMu9Z6H2SnAFRv1kdW72ZmE9yYpMBigpUoBYpV9+ClRLZAokiamKwNKqOkzOW87h7tcDh9iPBbWb2kyPNtfeEvxbVWW+rVt8a25HncW91TvSQIkhLp/5ULty5QpPZBgD4YyX2QPt0hk/qgEPugPbkNBlAXxP3rLJDaaNpgbms2aE3YoM2nDdxjG91z4H8WnsNhPA7Z6grnoiSnr+QF1TgVQtxR94kAAAAASUVORK5CYII="

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(319);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("cf5c89da", content, true, context)
};

/***/ }),

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

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/none.cd2a8b1.png";

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/empty.da38ff2.png";

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_7df352d1_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(258);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_7df352d1_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_7df352d1_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_7df352d1_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_id_7df352d1_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-7df352d1]{display:flex}.flex-inline[data-v-7df352d1]{display:inline-flex}.flex-inline[data-v-7df352d1]:after,.flex-inline[data-v-7df352d1]:before,.flex[data-v-7df352d1]:after,.flex[data-v-7df352d1]:before{display:none}.flex-left[data-v-7df352d1]{justify-content:flex-start}.flex-center[data-v-7df352d1]{justify-content:center}.flex-right[data-v-7df352d1]{justify-content:flex-end}.flex-between[data-v-7df352d1]{justify-content:space-between}.flex-around[data-v-7df352d1]{justify-content:space-around}.flex-stretch[data-v-7df352d1]{align-items:stretch}.flex-top[data-v-7df352d1]{align-items:flex-start}.flex-middle[data-v-7df352d1]{align-items:center}.flex-bottom[data-v-7df352d1]{align-items:flex-end}.flex-baseline[data-v-7df352d1]{align-items:baseline}.flex-row[data-v-7df352d1]{flex-direction:row}.flex-row-reverse[data-v-7df352d1]{flex-direction:row-reverse}.flex-column[data-v-7df352d1]{flex-direction:column}.flex-column-reverse[data-v-7df352d1]{flex-direction:column-reverse}.flex-nowrap[data-v-7df352d1]{flex-wrap:nowrap}.flex-wrap[data-v-7df352d1]{flex-wrap:wrap}.flex-wrap-reverse[data-v-7df352d1]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-7df352d1]{align-content:stretch}.flex-wrap-top[data-v-7df352d1]{align-content:flex-start}.flex-wrap-middle[data-v-7df352d1]{align-content:center}.flex-wrap-bottom[data-v-7df352d1]{align-content:flex-end}.flex-wrap-between[data-v-7df352d1]{align-content:space-between}.flex-wrap-around[data-v-7df352d1]{align-content:space-around}.flex-first[data-v-7df352d1]{order:-1}.flex-last[data-v-7df352d1]{order:99}.flex-none[data-v-7df352d1]{flex:none}.flex-auto[data-v-7df352d1]{flex:auto}.flex-1[data-v-7df352d1]{flex:1}.hover-text[data-v-7df352d1]:hover{color:#ff875b}.expend-click[data-v-7df352d1]{position:relative}.expend-click[data-v-7df352d1]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-7df352d1],[data-v-7df352d1]:after,[data-v-7df352d1]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-7df352d1],dd[data-v-7df352d1],dl[data-v-7df352d1],figure[data-v-7df352d1],form[data-v-7df352d1],h1[data-v-7df352d1],h2[data-v-7df352d1],h3[data-v-7df352d1],h4[data-v-7df352d1],h5[data-v-7df352d1],ol[data-v-7df352d1],p[data-v-7df352d1],ul[data-v-7df352d1]{margin:0;font-size:14px}button[data-v-7df352d1],input[data-v-7df352d1],ol[data-v-7df352d1],ul[data-v-7df352d1]{padding:0}li[data-v-7df352d1],ol[data-v-7df352d1],ul[data-v-7df352d1]{list-style:none;list-style-type:none}h1[data-v-7df352d1],h2[data-v-7df352d1],h3[data-v-7df352d1],h4[data-v-7df352d1],h5[data-v-7df352d1]{font-size:100%}input[data-v-7df352d1]{border:0;margin:0}img[data-v-7df352d1]{width:100%}a[data-v-7df352d1],button[data-v-7df352d1],img[data-v-7df352d1],input[data-v-7df352d1],optgroup[data-v-7df352d1],select[data-v-7df352d1],textarea[data-v-7df352d1]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-7df352d1],img[data-v-7df352d1]{-webkit-touch-callout:none;border:0}body[data-v-7df352d1],html[data-v-7df352d1]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-7df352d1],img[data-v-7df352d1],input[data-v-7df352d1],textarea[data-v-7df352d1]{vertical-align:middle;outline:none}body[data-v-7df352d1]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-7df352d1]{border-collapse:collapse;border-spacing:0}a[data-v-7df352d1],table[data-v-7df352d1]{color:#333}a[data-v-7df352d1],a[data-v-7df352d1]:hover{text-decoration:none}a[data-v-7df352d1]:hover{color:#ff512b}.scrollbar-self[data-v-7df352d1]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-7df352d1]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-7df352d1]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.title[data-v-7df352d1]{margin-top:30px;width:100%;height:40px;line-height:40px;background:#f7f7f7;border:1px solid #f2f2f2;padding:0 16px;font-size:14px;font-family:Microsoft YaHei-Regular,Microsoft YaHei;font-weight:400;color:#666;display:flex;justify-content:space-between}.title--sort[data-v-7df352d1]{margin-right:30px;cursor:pointer}.title--sort[data-v-7df352d1]:hover{color:#ff512b}.ctx[data-v-7df352d1]{border:1px solid #f2f2f2;border-top:0;overflow:hidden;margin-bottom:40px}.ctx--top[data-v-7df352d1]{display:flex}.ctx--top-rate[data-v-7df352d1]{width:170px;height:136px;text-align:center;padding-top:26px;color:#666;position:relative}.ctx--top-rate b[data-v-7df352d1]{font-weight:400;display:block;height:14px}.ctx--top-rate p[data-v-7df352d1]{font-size:40px;height:40px;line-height:40px;font-weight:700;margin-top:6px}.ctx--top-rate[data-v-7df352d1]:after{content:\"\";display:block;height:90px;width:1px;background:#eee;position:absolute;right:0;top:26px}.ctx--top-rate[data-v-7df352d1] .el-rate__icon{margin-right:0;font-size:24px}.ctx--top-tabs[data-v-7df352d1]{margin:34px 0;padding-left:40px;display:flex;align-items:center}.ctx--top-tabs span[data-v-7df352d1]{display:inline-block;height:24px;line-height:22px;border:1px solid #eee;color:#999;padding:0 12px;font-size:12px;border-radius:4px;margin-right:16px;cursor:pointer}.ctx--top-tabs span.active[data-v-7df352d1]{background:#ff6a19;border-color:#ff6a19;color:#fff}.loading[data-v-7df352d1],.more[data-v-7df352d1]{color:#999;text-align:center;margin-bottom:40px}.more[data-v-7df352d1]{cursor:pointer}.pagination[data-v-7df352d1]{margin:50px 0}.pagination[data-v-7df352d1] .el-pager{margin-left:8px}.pagination[data-v-7df352d1] .btn-quicknext,.pagination[data-v-7df352d1] .btn-quickprev,.pagination[data-v-7df352d1] .number,.pagination[data-v-7df352d1] button{width:32px;height:32px;text-align:center;line-height:32px;margin-left:8px;border-radius:2px 2px 2px 2px;border:1px solid rgba(0,0,0,.15);font-size:14px;font-family:Microsoft YaHei-Regular,Microsoft YaHei;font-weight:400;color:rgba(0,0,0,.65)}.pagination[data-v-7df352d1] .active{background:#ff512b;color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(428);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4b16cead", content, true, context)
};

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/goods/detail/module/Comment.vue?vue&type=template&id=7df352d1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"title\" data-v-7df352d1>","</div>",[_vm._ssrNode("<b data-v-7df352d1>商品评价</b> "),_vm._ssrNode("<div data-v-7df352d1>","</div>",[_c('el-dropdown',{staticClass:"title--sort",on:{"command":_vm.handleCommand}},[_c('span',[_vm._v(_vm._s(_vm.sortActive.label)),_c('i',{staticClass:"el-icon-arrow-down el-icon--right"})]),_vm._v(" "),_c('el-dropdown-menu',{attrs:{"slot":"dropdown"},slot:"dropdown"},_vm._l((_vm.sortData),function(item){return _c('el-dropdown-item',{key:item.val,attrs:{"command":item}},[_vm._v(_vm._s(item.label))])}),1)],1),_vm._ssrNode(" "),_c('el-checkbox',{on:{"change":_vm.handledContent},model:{value:(_vm.isContent),callback:function ($$v) {_vm.isContent=$$v},expression:"isContent"}},[_vm._v("有内容评价")])],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"ctx\" data-v-7df352d1>","</div>",[_vm._ssrNode("<div class=\"ctx--top\" data-v-7df352d1>","</div>",[(_vm.productRate)?_vm._ssrNode("<div class=\"ctx--top-rate\" data-v-7df352d1>","</div>",[_vm._ssrNode("<b data-v-7df352d1>商品满意度</b> <p data-v-7df352d1>"+_vm._ssrEscape(_vm._s(_vm.productRate))+"</p> "),_c('el-rate',{attrs:{"value":_vm.productRate,"disabled":"","size":"16px"}})],2):_vm._e(),_vm._ssrNode(" "+((_vm.tabs.length > 1)?("<div class=\"ctx--top-tabs\" data-v-7df352d1>"+(_vm._ssrList((_vm.tabs),function(i){return ("<span"+(_vm._ssrClass(null,{'active':i.labelType == _vm.tabActive}))+" data-v-7df352d1>"+_vm._ssrEscape("\n\t\t\t\t\t\t"+_vm._s(i.labelName)+"("+_vm._s(i.commentCount)+")\n\t\t\t\t\t")+"</span>")}))+"</div>"):"<!---->"))],2),_vm._ssrNode(" "),(!_vm.list.length && _vm.loading=='finish')?_c('UiEmpty',{attrs:{"icon":__webpack_require__(317),"desc":"暂时没有评论"}}):_vm._l((_vm.list),function(item){return _c('BsCommentInfo',{key:item.id,attrs:{"commentDetail":item,"source":"detail"}})}),_vm._ssrNode(" "+((_vm.loading === 'loading')?("<div class=\"loading\" data-v-7df352d1>数据加载中....</div>"):"<!---->")+" "+((_vm.loading === 'finish')?("<div class=\"more\" data-v-7df352d1>查看更多&gt;</div>"):"<!---->"))],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/goods/detail/module/Comment.vue?vue&type=template&id=7df352d1&scoped=true&

// EXTERNAL MODULE: ./plugins/api/comment.js
var comment = __webpack_require__(177);

// EXTERNAL MODULE: ./components/BsCommentInfo.vue + 4 modules
var BsCommentInfo = __webpack_require__(209);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/goods/detail/module/Comment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Commentvue_type_script_lang_js_ = ({
  components: {
    BsCommentInfo: BsCommentInfo["default"]
  },
  props: {},
  data() {
    return {
      productId: this.$route.params.id,
      tabActive: -1,
      sortData: [{
        val: 1,
        label: '默认排序'
      }, {
        val: 2,
        label: '按时间排序'
      }],
      sortActive: {
        val: 1,
        label: '默认排序'
      },
      productRate: 0,
      isContent: true,
      pageIndex: 1,
      pageSize: 10,
      total: 0,
      tabs: [{
        labelName: '全部',
        labelType: -1,
        commentCount: 0
      }],
      pageSize: 10,
      list: [],
      loading: 'finish'
    };
  },
  mounted() {
    this.getList();
    this.getTabCount();
    this.getProductSatisfaction();
    this.getCount();
  },
  methods: {
    async getList() {
      if (this.loading === 'loading') {
        return false;
      }
      this.loading = 'loading';
      const {
        error,
        result
      } = await Object(comment["c" /* ApiGetCommentList */])({
        pageIndex: this.pageIndex,
        length: this.pageSize,
        productId: this.productId,
        commentLabel: this.tabActive == -1 ? null : this.tabActive,
        sortType: this.sortActive.val,
        isContent: this.isContent || null
      });
      this.loading = 'finish';
      if (error) {
        return false;
      }
      this.list = this.list.concat(result.records);
      // 如果当前页数据为空，且不是最后一页则再查一次下一页，因过滤条件后端接口无法实现分页。所以这么做的。
      if (result.records.length == 0 && this.pageIndex < result.pages) {
        this.next();
        return false;
      }
      if (this.pageIndex === result.pages) {
        this.loading = 'nomore';
      }
      // this.total = result.total
    },

    next() {
      this.pageIndex++;
      this.getList();
    },
    async getTabCount() {
      const {
        error,
        result
      } = await Object(comment["d" /* ApiGetCommentTabCount */])({
        productId: this.productId
      });
      if (error) {
        return false;
      }
      this.tabs = this.tabs.concat(result.filter(i => i.commentCount > 0));
    },
    async getCount() {
      const {
        error,
        result
      } = await Object(comment["a" /* ApiGetCommentCount */])({
        productId: this.productId
      });
      if (error) {
        return false;
      }
      this.$set(this.tabs[0], 'commentCount', result.allCommentCount);
    },
    async getProductSatisfaction() {
      const {
        error,
        result
      } = await Object(comment["f" /* ApiGetProductSatisfaction */])({
        productId: this.productId
      });
      if (error) {
        return false;
      }
      this.productRate = Number(result.productSatisfaction);
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.getList();
    },
    handleTabChanage(i) {
      if (this.tabActive == i.labelType) {
        return false;
      }
      this.tabActive = i.labelType;
      this.pageIndex = 1;
      this.list = [];
      this.getList();
    },
    handleCommand(val) {
      this.sortActive = val;
      this.pageIndex = 1;
      this.list = [];
      this.getList();
    },
    handledContent() {
      this.pageIndex = 1;
      this.list = [];
      this.getList();
    }
  }
});
// CONCATENATED MODULE: ./pages/goods/detail/module/Comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_Commentvue_type_script_lang_js_ = (Commentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/goods/detail/module/Comment.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(318)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_Commentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7df352d1",
  "489fc20d"
  
)

/* harmony default export */ var Comment = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UiEmpty: __webpack_require__(187).default,BsCommentInfo: __webpack_require__(209).default})


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


/***/ }),

/***/ 423:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAiCAYAAABfqvm9AAAAAXNSR0IArs4c6QAAAStJREFUSEut1qFSBDEMBuA/q5FIXgVRieAJAIFEgTgPM+AQx2MgeAAEAoHaTRyCx7iZYnfDLMPd3HHdbdN2baffJG2SLaHgE5EzVX0AcAjgbRiGK8r1mPkawNP2flV9zQJD2B+8MoMzGIjo2QTOYQA+AbhkMIJ9eO9PnHPfSWAqNp5jFLRgUdCKzYLM/AhgMVGnmzP7vx5Mueu6JRHdWLFghCXYHliK7YA1sA1YC/sFReRWVe9yLiC0h5jZAzgILL547y/HdrKMuPpg9ZTHdERkqapZhTzZKbXQndarge71cikaHA4l6OSAzb392YlddcCuy8GKRv8pI2xBk8BE9NQ5Z3s5RCL9AnCcHGHKmZqfIgmoLeXtQVD1ObeG27Y9b5rmHsAREb33fX/xA1pQKgB5gjOLAAAAAElFTkSuQmCC"

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAiCAYAAABfqvm9AAAAAXNSR0IArs4c6QAAATFJREFUSEu11qFSxDAQBuB/W5tWneAR8EkcAoE4yaNw7nAgcYdGYmAqkAhEfSd9CyQO/DLp3DHD0TabNMTvN7ubtLvUdd1JURQPAM4BfBDRVmv9jMRDfd+/MfPFUfyVMeY+xSTn3CcANRKchHrwBcDlRDbRKO172AI4zYGSR5xzKwA+07Ol6AD607atqqrqdSn6A+ZCf4E50D+gBCWiG6317Vi/R0EJysw7a+3mGJ0EU9FZMAUNgrGoCIxBxaAE9bcfBR7Quq4bZl6PPJuvJFAp1RDRcjD0vUeVLMB2WuuNqGQp5nsaBGOwIBiLzYIp2CQYwgBsjTF3ot+XAJudhP83ApZmdih/yHA/m5ulE2+4lOyDPvsqkn1Zyr7O+R6WZfnIzH7hfGfma2vtU8pu6GO+Afukxp2ofI+dAAAAAElFTkSuQmCC"

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAATBJREFUKFOVUrFKxEAQnbfXnElrYSF+gZVYpLGwEsEDBQsRwUK4TbhCiH7AiYWFepa7kw8Qe22sbC3Eyi8QiyssvZgi2ZENBg/xwNtiF97M23kzb0DfZzAYzARBkADYFZFFDwN4EZHrPM9NmqafNeYvZl4gonsAw6qqLpVSjx53zkWtVutIROaIaE1r/Qr/cxiGz0R0o7U+aSqOv1mWnYrI9mg0WoK1NlVKdbrd7qpPMsbsKKUOyrLc6vV6Hw0xy7IH59wtmPnJOddPkuSuCVprzwFEZVmuNyRjzIZSqu8rFADmtdbvv2QcikhMRCs+xsyzIvI2PeEvScx8RUTLkySlRNSJ47hu2lq7B2B/YtP/GSsznxHRZj3WceNEZAjgot1u18YVRRGJyDGAH+OmXY0vjsfJlc0gS2UAAAAASUVORK5CYII="

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAeNJREFUOE+tlLGLE0EUxr+XmICwgqW9B2ohks3bJlrcop0naHdi4RXeH+BfYitooaB4nYJaiWwKDcK8bLA6wbO3FFxQdk2evHNm3RxLguA0AzNvfvO+9+YbQsvI8/zyYrHYBrAJ4JQP+Qpg3Ol09uI4fnv0GDUXnHNniOi+B7TdEdbGAO4w85ewUINms9nF+Xz+CsBJVf1JRE8AvAbwyQefBXAVwA6AYwC+dbvdrcFg8N72D0E+kw8eIlVV3RyNRge2JyKnbQ63TyaTjV6v94yI2GBlWSYWewgSkczkqKoURZGmaVqElEXkuwedCGtZlkVRFGUeNmbmlJxzV4jojcmpqup8yKQBUg9aqqdl1u/3902mqqYkIg+scAAeMvPu0QqLSCvIK6nPGugzgA0AN5j5xT+CrgN4DuDAQFaDCMA5Zg4dqnlrMrJOmrziv4LWSbvti/24RfaStJXFzvP8ggHiOP7YAvpb7HXtd879MECSJMebIP8w94noT/vXPcjpdHrPYobD4d2VD9I2/eNywSJEtN00ZDMTs4yq7rVaxGd1CcBLD/tFRI9U1Uxcm5aItlR1x+SYzwBcY+Z3tWnDjT4zK6D9Q6vGuCzL3aadlvwTTjrnNonoVtvHpqpPkySx/2hp/AZf5RqOZWlG1AAAAABJRU5ErkJggg=="

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_8ba21f5e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(343);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_8ba21f5e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_8ba21f5e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_8ba21f5e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_8ba21f5e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(40);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(429);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-8ba21f5e]{display:flex}.flex-inline[data-v-8ba21f5e]{display:inline-flex}.flex-inline[data-v-8ba21f5e]:after,.flex-inline[data-v-8ba21f5e]:before,.flex[data-v-8ba21f5e]:after,.flex[data-v-8ba21f5e]:before{display:none}.flex-left[data-v-8ba21f5e]{justify-content:flex-start}.flex-center[data-v-8ba21f5e]{justify-content:center}.flex-right[data-v-8ba21f5e]{justify-content:flex-end}.flex-between[data-v-8ba21f5e]{justify-content:space-between}.flex-around[data-v-8ba21f5e]{justify-content:space-around}.flex-stretch[data-v-8ba21f5e]{align-items:stretch}.flex-top[data-v-8ba21f5e]{align-items:flex-start}.flex-middle[data-v-8ba21f5e]{align-items:center}.flex-bottom[data-v-8ba21f5e]{align-items:flex-end}.flex-baseline[data-v-8ba21f5e]{align-items:baseline}.flex-row[data-v-8ba21f5e]{flex-direction:row}.flex-row-reverse[data-v-8ba21f5e]{flex-direction:row-reverse}.flex-column[data-v-8ba21f5e]{flex-direction:column}.flex-column-reverse[data-v-8ba21f5e]{flex-direction:column-reverse}.flex-nowrap[data-v-8ba21f5e]{flex-wrap:nowrap}.flex-wrap[data-v-8ba21f5e]{flex-wrap:wrap}.flex-wrap-reverse[data-v-8ba21f5e]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-8ba21f5e]{align-content:stretch}.flex-wrap-top[data-v-8ba21f5e]{align-content:flex-start}.flex-wrap-middle[data-v-8ba21f5e]{align-content:center}.flex-wrap-bottom[data-v-8ba21f5e]{align-content:flex-end}.flex-wrap-between[data-v-8ba21f5e]{align-content:space-between}.flex-wrap-around[data-v-8ba21f5e]{align-content:space-around}.flex-first[data-v-8ba21f5e]{order:-1}.flex-last[data-v-8ba21f5e]{order:99}.flex-none[data-v-8ba21f5e]{flex:none}.flex-auto[data-v-8ba21f5e]{flex:auto}.flex-1[data-v-8ba21f5e]{flex:1}.hover-text[data-v-8ba21f5e]:hover{color:#ff875b}.expend-click[data-v-8ba21f5e]{position:relative}.expend-click[data-v-8ba21f5e]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-8ba21f5e],[data-v-8ba21f5e]:after,[data-v-8ba21f5e]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-8ba21f5e],dd[data-v-8ba21f5e],dl[data-v-8ba21f5e],figure[data-v-8ba21f5e],form[data-v-8ba21f5e],h1[data-v-8ba21f5e],h2[data-v-8ba21f5e],h3[data-v-8ba21f5e],h4[data-v-8ba21f5e],h5[data-v-8ba21f5e],ol[data-v-8ba21f5e],p[data-v-8ba21f5e],ul[data-v-8ba21f5e]{margin:0;font-size:14px}button[data-v-8ba21f5e],input[data-v-8ba21f5e],ol[data-v-8ba21f5e],ul[data-v-8ba21f5e]{padding:0}li[data-v-8ba21f5e],ol[data-v-8ba21f5e],ul[data-v-8ba21f5e]{list-style:none;list-style-type:none}h1[data-v-8ba21f5e],h2[data-v-8ba21f5e],h3[data-v-8ba21f5e],h4[data-v-8ba21f5e],h5[data-v-8ba21f5e]{font-size:100%}input[data-v-8ba21f5e]{border:0;margin:0}img[data-v-8ba21f5e]{width:100%}a[data-v-8ba21f5e],button[data-v-8ba21f5e],img[data-v-8ba21f5e],input[data-v-8ba21f5e],optgroup[data-v-8ba21f5e],select[data-v-8ba21f5e],textarea[data-v-8ba21f5e]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-8ba21f5e],img[data-v-8ba21f5e]{-webkit-touch-callout:none;border:0}body[data-v-8ba21f5e],html[data-v-8ba21f5e]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-8ba21f5e],img[data-v-8ba21f5e],input[data-v-8ba21f5e],textarea[data-v-8ba21f5e]{vertical-align:middle;outline:none}body[data-v-8ba21f5e]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-8ba21f5e]{border-collapse:collapse;border-spacing:0}a[data-v-8ba21f5e],table[data-v-8ba21f5e]{color:#333}a[data-v-8ba21f5e],a[data-v-8ba21f5e]:hover{text-decoration:none}a[data-v-8ba21f5e]:hover{color:#ff512b}.scrollbar-self[data-v-8ba21f5e]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-8ba21f5e]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-8ba21f5e]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.nav[data-v-8ba21f5e]{width:100%;height:40px;background:#f2f4f6;margin-bottom:14px}.nav__crumbs[data-v-8ba21f5e]{width:1200px;color:#666;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-right:970px}.main[data-v-8ba21f5e]{width:1200px;margin:0 auto}.main__preview[data-v-8ba21f5e]{width:456px;margin-right:30px}.main__preview-big[data-v-8ba21f5e]{width:456px;height:456px;margin-bottom:24px}.main__preview-control[data-v-8ba21f5e]{width:100%;height:58px;position:relative;overflow:hidden;padding-left:43px}.main__preview-control[data-v-8ba21f5e]:before{left:0;z-index:1}.main__preview-control[data-v-8ba21f5e]:after,.main__preview-control[data-v-8ba21f5e]:before{content:\"\";width:43px;height:58px;background:#fff;position:absolute;top:0}.main__preview-control[data-v-8ba21f5e]:after{right:0}.main__preview-control--left[data-v-8ba21f5e],.main__preview-control--right[data-v-8ba21f5e]{width:20px;height:34px;position:absolute;top:12px;z-index:1;cursor:pointer}.main__preview-control--left[data-v-8ba21f5e]{left:0}.main__preview-control--right[data-v-8ba21f5e]{right:0}.main__preview-control--imgs[data-v-8ba21f5e]{width:1500px}.main__preview-control--imgs img[data-v-8ba21f5e]{width:58px;height:58px;margin-right:20px;cursor:pointer}.main__preview-control--imgs .img-active[data-v-8ba21f5e]{border:1px solid #ff512b}.main__details[data-v-8ba21f5e]{width:714px;padding-top:10px}.main__details-title[data-v-8ba21f5e]{font-size:16px;color:#333;padding-bottom:20px}.main__details-title[data-v-8ba21f5e],.main__details-title--label[data-v-8ba21f5e]{font-family:Microsoft YaHei-Regular,Microsoft YaHei;font-weight:400}.main__details-title--label[data-v-8ba21f5e]{display:inline-block;font-size:12px;color:#3083ff;padding:4px 8px;margin-right:6px;background:rgba(48,131,255,.1)}.main__details-skill[data-v-8ba21f5e]{width:100%;height:32px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:contain;padding:0 20px}.main__details-skill[data-v-8ba21f5e],.main__details-skill span[data-v-8ba21f5e]{font-size:14px;font-family:PingFang SC-常规体,PingFang SC;font-weight:400;color:#fff}.main__details-skill span[data-v-8ba21f5e]{width:22px;height:22px;background:#e83710;border-radius:2px;margin-left:10px;line-height:22px;text-align:center}.main__details-msg[data-v-8ba21f5e]{width:714px;min-height:127px;background:#f8f8f8;padding:30px 20px}.main__details-msg .msg-txt[data-v-8ba21f5e]{font-size:14px;font-family:Microsoft YaHei-Regular,Microsoft YaHei;font-weight:400;color:#9e9e9e;margin-right:20px}.main__details-msg .msg-price[data-v-8ba21f5e]{font-size:22px;color:#ff512b}.main__details-msg .msg-price[data-v-8ba21f5e]:before{content:\"￥\";font-size:14px}.main__details-msg .msg-service[data-v-8ba21f5e]{font-size:14px;font-family:Microsoft YaHei-Regular,Microsoft YaHei;font-weight:400;color:#666}.main__details-msg .msg-icon[data-v-8ba21f5e]{margin-left:6px;width:12px;height:12px;cursor:pointer}.main__details-msg--price[data-v-8ba21f5e]{padding-bottom:30px}.main__details-msg--skill[data-v-8ba21f5e]{margin-left:auto}.main__details-msg--skill .skill-1[data-v-8ba21f5e]{font-size:16px;font-family:PingFang SC-常规体,PingFang SC;font-weight:400;color:#e83710}.main__details-msg--skill .skill-2[data-v-8ba21f5e]{margin-top:6px}.main__details-msg--skill .skill-2 span[data-v-8ba21f5e]{display:inline-block;width:22px;height:22px;background:#e83710;border-radius:2px;font-size:14px;font-family:PingFang SC-常规体,PingFang SC;font-weight:400;color:#fff;text-align:center;line-height:22px}.main__details-msg .hr[data-v-8ba21f5e]{width:673px;height:1px;background:#ddd}.main__details-msg--service[data-v-8ba21f5e]{padding-top:16px}.main__details-option[data-v-8ba21f5e]{padding-top:24px}.main__details-option--line[data-v-8ba21f5e]{margin-bottom:6px}.main__details-option--line .line-txt[data-v-8ba21f5e]{font-size:14px;font-family:Microsoft YaHei-Regular,Microsoft YaHei;font-weight:400;color:#9e9e9e;margin-left:20px;margin-right:33px}.main__details-option--line .line-btns[data-v-8ba21f5e]{width:600px}.main__details-option--line .line-btns[data-v-8ba21f5e] .ui-button__yellow_line{background:#fff;margin-right:14px;color:#666;margin-bottom:6px;border-color:#ccc}.main__details-option--line .line-btns .attr-item__active[data-v-8ba21f5e]{border:1px solid #ff512b}.main__details-option--line .line-btns .attr-item__disabled[data-v-8ba21f5e]{color:#999;background:#eee}.main__details-none[data-v-8ba21f5e]{width:713px;height:40px;background:#f3f3f3;margin-top:20px;padding:0 20px}.main__details-none img[data-v-8ba21f5e]{width:18px;height:18px;margin-right:12px}.main__details-none span[data-v-8ba21f5e]{font-size:14px;font-family:Microsoft YaHei-Regular,Microsoft YaHei;font-weight:400;color:#666}.main__details-pay[data-v-8ba21f5e]{margin-top:40px}.main__details-pay button[data-v-8ba21f5e]{width:144px;height:46px;margin-right:30px;font-size:18px}.main__details-pay button[data-v-8ba21f5e]:first-child{background:#fff}.main__details-pay button[data-v-8ba21f5e]:nth-child(2){border:none}.main-none-img[data-v-8ba21f5e]{display:block;width:228px;height:144px;margin:60px auto 20px}.main-none-txt[data-v-8ba21f5e]{width:100%;text-align:center;font-size:14px;font-family:PingFang SC-常规体,PingFang SC;font-weight:400;color:#999;margin-bottom:50px}.section[data-v-8ba21f5e]{width:1200px;margin:64px auto 0}.section-recommend[data-v-8ba21f5e]{width:228px;margin-right:30px}.section-recommend[data-v-8ba21f5e] .goods-item{border:1px solid #f2f2f2}.section-details[data-v-8ba21f5e]{width:938px}.section-details--none img[data-v-8ba21f5e]{display:block;width:228px;height:144px;margin:133px auto 20px}.section-details--none p[data-v-8ba21f5e]{text-align:center;font-family:PingFang SC-常规体,PingFang SC;color:#999}.section-details--none p[data-v-8ba21f5e],.section-title[data-v-8ba21f5e]{width:100%;font-size:14px;font-weight:400}.section-title[data-v-8ba21f5e]{height:40px;line-height:40px;background:#f7f7f7;border:1px solid #f2f2f2;padding-left:16px;font-family:Microsoft YaHei-Regular,Microsoft YaHei;color:#666}.service-item[data-v-8ba21f5e]{margin-bottom:25px;padding-left:30px}.service-item h3[data-v-8ba21f5e]{font-size:18px;font-family:Microsoft YaHei-Regular,Microsoft YaHei;font-weight:400;color:#333;position:relative}.service-item h3[data-v-8ba21f5e]:before{content:\"\";position:absolute;left:-10px;top:50%;margin-top:-3px;height:6px;width:6px;background:#ff875b;border-radius:50%}.service-item p[data-v-8ba21f5e]{font-size:14px;font-family:Microsoft YaHei-Regular,Microsoft YaHei;font-weight:400;color:#666;padding-top:10px}.service-btn[data-v-8ba21f5e]{width:272px;height:36px;background:linear-gradient(90deg,#ff7f39,#ffa35b);border-radius:4px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/skill.ce57868.png";

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/goods/detail/_id.vue?vue&type=template&id=8ba21f5e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.pageLoading)?_c('div',[_vm._ssrNode("<main class=\"main\" data-v-8ba21f5e>","</main>",[_c('el-skeleton',{staticStyle:{"width":"100%","padding":"40px"},attrs:{"loading":true,"animated":""}},[_c('template',{slot:"template"},[_c('div',{staticClass:"flex"},[_c('el-skeleton-item',{staticStyle:{"width":"456px","height":"456px"},attrs:{"variant":"image"}}),_vm._v(" "),_c('div',{staticStyle:{"flex":"1","padding":"0 20px"}},[_c('el-skeleton-item',{staticStyle:{"width":"100%"},attrs:{"variant":"h1"}}),_vm._v(" "),_c('el-skeleton-item',{staticStyle:{"width":"100%","height":"130px","margin-top":"20px"},attrs:{"variant":"h2"}}),_vm._v(" "),_c('el-skeleton-item',{staticStyle:{"margin-top":"34px","width":"90%"},attrs:{"variant":"h3"}}),_vm._v(" "),_c('el-skeleton-item',{staticStyle:{"margin-top":"34px","width":"70%"},attrs:{"variant":"h3"}}),_vm._v(" "),_c('el-skeleton-item',{staticStyle:{"margin-top":"34px","width":"50%"},attrs:{"variant":"h3"}}),_vm._v(" "),_c('el-skeleton-item',{staticStyle:{"margin-top":"34px","width":"50%"},attrs:{"variant":"h3"}}),_vm._v(" "),_c('el-skeleton-item',{staticStyle:{"margin-top":"34px","width":"100%"},attrs:{"variant":"h3"}})],1)],1)])],2)],1)]):_c('div',[_c('HeaderBar',{directives:[{name:"show",rawName:"v-show",value:(_vm.showHeaderBar),expression:"showHeaderBar"}],attrs:{"tabKey":_vm.headerKey},on:{"jump":_vm.handleJump,"addCart":_vm.addCart}}),_vm._ssrNode(" <nav class=\"nav flex flex-middle flex-center\" data-v-8ba21f5e><p class=\"nav__crumbs\" data-v-8ba21f5e>\n      全部商品\n      <i class=\"el-icon-arrow-right\" data-v-8ba21f5e></i>"+_vm._ssrEscape("\n      "+_vm._s(_vm.detailData.name)+"\n    ")+"</p></nav> "),(_vm.detailData.isEnable)?_vm._ssrNode("<main class=\"main flex\" data-v-8ba21f5e>","</main>",[_vm._ssrNode("<aside class=\"main__preview\" data-v-8ba21f5e><img"+(_vm._ssrAttr("src",_vm.detailData.pictureList[_vm.activeImg]))+" alt=\"商品大图\" class=\"main__preview-big\" data-v-8ba21f5e> <div class=\"main__preview-control\" data-v-8ba21f5e><img"+(_vm._ssrAttr("src",__webpack_require__(423)))+" alt=\"左侧切换\" class=\"main__preview-control--left\" data-v-8ba21f5e> <div class=\"main__preview-control--imgs\""+(_vm._ssrStyle(null,_vm.activeImg > 4
              ? 'transform: translateX(-' + (_vm.activeImg - 4) * 78 + 'px);'
              : '', null))+" data-v-8ba21f5e>"+(_vm._ssrList((_vm.detailData.pictureList),function(item,index){return ("<img"+(_vm._ssrAttr("src",item))+" alt"+(_vm._ssrClass(null,index == _vm.activeImg ? 'img-active' : ''))+" data-v-8ba21f5e>")}))+"</div> <img"+(_vm._ssrAttr("src",__webpack_require__(424)))+" alt=\"右侧切换\" class=\"main__preview-control--right\" data-v-8ba21f5e></div></aside> "),_vm._ssrNode("<article class=\"main__details\" data-v-8ba21f5e>","</article>",[_vm._ssrNode("<p class=\"main__details-title\" data-v-8ba21f5e><span class=\"main__details-title--label\" data-v-8ba21f5e>新品</span>"+_vm._ssrEscape("\n        "+_vm._s(_vm.detailData.name)+"\n      ")+"</p> "+((_vm.detailData.productActivityVO.isStartActivity)?("<div class=\"main__details-skill flex flex-right flex-middle\" data-v-8ba21f5e>\n        距结束仅剩\n        <span data-v-8ba21f5e>"+_vm._ssrEscape(_vm._s(_vm.surplus.lefth))+"</span> <span data-v-8ba21f5e>"+_vm._ssrEscape(_vm._s(_vm.surplus.leftm))+"</span> <span data-v-8ba21f5e>"+_vm._ssrEscape(_vm._s(_vm.surplus.lefts))+"</span></div>"):"<!---->")+" <div class=\"main__details-msg\" data-v-8ba21f5e><div class=\"main__details-msg--price flex flex-middle\" data-v-8ba21f5e><span class=\"msg-txt\" data-v-8ba21f5e>售价</span> <strong class=\"msg-price\" data-v-8ba21f5e>"+_vm._ssrEscape(_vm._s(_vm.getPrice))+"</strong> "+((
              _vm.detailData.productActivityVO.isActivity &&
              !_vm.detailData.productActivityVO.isStartActivity
            )?("<div class=\"main__details-msg--skill flex flex-column flex-bottom\" data-v-8ba21f5e><span class=\"skill-txt\" data-v-8ba21f5e>即将开始秒杀</span> "+((_vm.isToday())?("<div class=\"skill-2\" data-v-8ba21f5e><span data-v-8ba21f5e>"+_vm._ssrEscape(_vm._s(_vm.surplus.lefth))+"</span> <span data-v-8ba21f5e>"+_vm._ssrEscape(_vm._s(_vm.surplus.leftm))+"</span> <span data-v-8ba21f5e>"+_vm._ssrEscape(_vm._s(_vm.surplus.lefts))+"</span></div>"):("<span class=\"skill-1\" data-v-8ba21f5e>"+_vm._ssrEscape(_vm._s(_vm.getBeginTime()))+"</span>"))+"</div>"):"<!---->")+"</div> <div class=\"hr\" data-v-8ba21f5e></div> <div class=\"main__details-msg--service flex flex-middle\" data-v-8ba21f5e><span class=\"msg-txt\" data-v-8ba21f5e>服务</span> <span class=\"msg-service\" data-v-8ba21f5e>假一赔四 · 全国包邮 · 不支持7天无理由退换</span> <img"+(_vm._ssrAttr("src",__webpack_require__(425)))+" alt=\"服务\" class=\"msg-icon\" data-v-8ba21f5e></div></div> "),(_vm.isStock())?_vm._ssrNode("<div class=\"main__details-option\" data-v-8ba21f5e>","</div>",[_vm._l((_vm.detailData.attributeGroupList),function(item,index){return _vm._ssrNode("<div class=\"main__details-option--line flex flex-middle\" data-v-8ba21f5e>","</div>",[_vm._ssrNode("<span class=\"line-txt\" data-v-8ba21f5e>"+_vm._ssrEscape(_vm._s(item.name))+"</span> "),_vm._ssrNode("<div class=\"line-btns\" data-v-8ba21f5e>","</div>",_vm._l((item.attributes),function(val){return _c('UiButton',{key:val.symbol,class:{
                'attr-item__active': val.active,
                'attr-item__disabled': val.disabled,
              },attrs:{"type":"yellow_line"},on:{"click":function($event){return _vm.handleAttrItem(val, index)}}},[_vm._v(_vm._s(val.name))])}),1)],2)}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"main__details-option--line flex flex-middle\" data-v-8ba21f5e>","</div>",[_vm._ssrNode("<span class=\"line-txt\" data-v-8ba21f5e>数量</span> "),_vm._ssrNode("<div class=\"line-btns\" data-v-8ba21f5e>","</div>",[_c('el-input-number',{attrs:{"min":1,"max":_vm.maxBuyNum},model:{value:(_vm.curBuyNum),callback:function ($$v) {_vm.curBuyNum=$$v},expression:"curBuyNum"}})],1)],2)],2):_vm._ssrNode(("<div class=\"main__details-none flex flex-middle\" data-v-8ba21f5e><img"+(_vm._ssrAttr("src",__webpack_require__(426)))+" alt data-v-8ba21f5e> <span data-v-8ba21f5e>此商品暂无库存啦~看看其他的吧</span></div>")),_vm._ssrNode(" "),(_vm.isStock())?_vm._ssrNode("<div class=\"main__details-pay\" data-v-8ba21f5e>","</div>",[_c('UiButton',{attrs:{"type":"yellow_line"},on:{"click":_vm.addCart}},[_vm._v("加入购物车")]),_vm._ssrNode(" "),_c('UiButton',{attrs:{"type":"yellow_panel"},on:{"click":_vm.buyNow}},[_vm._v("立即购买")])],2):_vm._e()],2)],2):_vm._ssrNode(("<main class=\"main\" data-v-8ba21f5e><img"+(_vm._ssrAttr("src",__webpack_require__(261)))+" alt class=\"main-none-img\" data-v-8ba21f5e> <p class=\"main-none-txt\" data-v-8ba21f5e>商品已下架啦，去逛逛别的吧~</p></main>")),_vm._ssrNode(" "),(_vm.detailData.isEnable)?_vm._ssrNode("<section class=\"section flex\" data-v-8ba21f5e>","</section>",[_vm._ssrNode("<div class=\"section-recommend\" data-v-8ba21f5e>","</div>",[_vm._ssrNode("<p class=\"section-title\" data-v-8ba21f5e>看了又看</p> "),_vm._l((_vm.recommendedData),function(item){return _c('UiGoodsItem',{key:item.id,attrs:{"item":item}})})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"section-details\" data-v-8ba21f5e>","</div>",[_vm._ssrNode("<p class=\"section-title\" data-v-8ba21f5e>商品详情</p> "+((_vm.detailData.detail)?("<div class=\"rich\" data-v-8ba21f5e>"+(_vm._s(_vm.detailData.detail))+"</div>"):("<div class=\"section-details--none\" data-v-8ba21f5e><img"+(_vm._ssrAttr("src",__webpack_require__(261)))+" alt data-v-8ba21f5e> <p data-v-8ba21f5e>暂无详情</p></div>"))+" "),_c('Comment',{ref:"commentRef"})],2)],2):_c('BsChosen'),_vm._ssrNode(" "),_c('el-dialog',{attrs:{"title":"服务详情","visible":_vm.showService,"width":"380px","center":""},on:{"update:visible":function($event){_vm.showService=$event}}},[_c('section',{staticClass:"service__section flex flex-column"},[_c('div',{staticClass:"service-item"},[_c('h3',[_vm._v("假一赔四")]),_vm._v(" "),_c('p',[_vm._v("正品保障，假一赔四")])]),_vm._v(" "),_c('div',{staticClass:"service-item"},[_c('h3',[_vm._v("全国包邮")]),_vm._v(" "),_c('p',[_vm._v("偏远地区（青海、西藏、新疆）除外")])]),_vm._v(" "),_c('div',{staticClass:"service-item"},[_c('h3',[_vm._v("不支持7天退换")]),_vm._v(" "),_c('p',[_vm._v("此商品不支持七天无理由退换")])])]),_vm._v(" "),_c('div',{staticClass:"flex flex-center"},[_c('UiButton',{attrs:{"type":"yellow_panel service-btn"},on:{"click":function($event){_vm.showService = false}}},[_vm._v("确定")])],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/goods/detail/_id.vue?vue&type=template&id=8ba21f5e&scoped=true&

// EXTERNAL MODULE: ./components/UiMoney.vue + 4 modules
var UiMoney = __webpack_require__(76);

// EXTERNAL MODULE: ./components/UiButton.vue + 4 modules
var UiButton = __webpack_require__(15);

// EXTERNAL MODULE: ./components/UiGoodsItem.vue + 4 modules
var UiGoodsItem = __webpack_require__(167);

// EXTERNAL MODULE: ./components/BsChosen.vue + 4 modules
var BsChosen = __webpack_require__(178);

// EXTERNAL MODULE: ./pages/goods/detail/module/Comment.vue + 4 modules
var Comment = __webpack_require__(360);

// EXTERNAL MODULE: ./plugins/api/cart.js
var cart = __webpack_require__(42);

// EXTERNAL MODULE: ./plugins/api/goods.js
var goods = __webpack_require__(21);

// EXTERNAL MODULE: ./pages/goods/detail/module/HeaderBar.vue + 4 modules
var HeaderBar = __webpack_require__(361);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/goods/detail/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  components: {
    UiMoney: UiMoney["default"],
    UiButton: UiButton["default"],
    UiGoodsItem: UiGoodsItem["default"],
    BsChosen: BsChosen["default"],
    Comment: Comment["default"],
    HeaderBar: HeaderBar["default"]
  },
  data() {
    return {
      pageLoading: true,
      curBuyNum: 1,
      activeImg: 0,
      recommendedData: [],
      skuData: [],
      detailData: {
        isEnable: false,
        pictureList: [],
        productActivityVO: {}
      },
      surplus: {},
      timer: null,
      startTime: "",
      endTime: "",
      showService: false,
      showHeaderBar: false,
      headerKey: 'detail'
    };
  },
  async created() {
    let vm = this;
    let id = this.$route.params.id;
    let res1 = await Object(goods["c" /* ApiGetGoodsDetail */])({
      id
    });
    let res2 = await Object(goods["e" /* ApiGetGoodsSkus */])({
      productId: id
    });
    let res3 = await Object(goods["d" /* ApiGetGoodsList */])({
      length: 3,
      pageIndex: 1,
      name: "",
      categoryId: "",
      order: ""
    });
    vm.detailData = res1.result;
    vm.skuData = res2.result;
    vm.recommendedData = res3.result ? res3.result.records : [];
    vm.pageLoading = false;
    if (vm.detailData.productActivityVO.isActivity && !vm.detailData.productActivityVO.isStartActivity && vm.isToday()) {
      vm.startTime = new Date(vm.detailData.productActivityVO.currentTime).getTime();
      vm.endTime = new Date(vm.detailData.productActivityVO.activityStartTime).getTime();
      vm.setSurplus();
    } else if (vm.detailData.productActivityVO.isStartActivity) {
      vm.startTime = new Date(vm.detailData.productActivityVO.currentTime).getTime();
      vm.endTime = new Date(vm.detailData.productActivityVO.activityEndTime).getTime();
      vm.setSurplus();
    }
  },
  computed: {
    /**
     * 当前选中SKU，根据选中规格计算
     */
    curSku() {
      return this.skuData.find(i => i.attributeSymbolList === this.selectedSymbol.join(",")) || {};
    },
    // [1,.,3]
    selectedSymbol() {
      return this.detailData.attributeGroupList.map(item => {
        const activeAttr = item.attributes.find(i => i.active);
        return activeAttr ? activeAttr.symbol : ".";
      }).filter(i => i); //.sort();
    },

    /**
     * 最大可购买数量
     * 1、有限购则对比限购跟库存，取最小值
     * 2、没限购取库存
     */
    maxBuyNum() {
      const singleBuyLimit = this.detailData.singleBuyLimit;
      const stock = this.curSku.stock;
      return singleBuyLimit ? Math.min(singleBuyLimit, stock || 1) : stock;
    },
    getPrice() {
      if (this.curSku.sellPrice) {
        return this.curSku.sellPrice;
      } else {
        return this.detailData.productActivityVO.isStartActivity ? this.detailData.productActivityVO.activityPrice : this.detailData.startingPrice;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.setHeaderBar);
    this.setHeaderBar();
  },
  destroyed() {
    window.removeEventListener("scroll", this.setHeaderBar);
  },
  methods: {
    setHeaderBar() {
      const y = window.scrollY;
      this.showHeaderBar = y > 700;
      if (this.showHeaderBar) {
        const dY = this.$refs.detailRef.offsetTop;
        const cY = this.$refs.commentRef.$el.offsetTop;
        if (y >= cY) {
          this.headerKey = 'comment';
        } else if (y > dY) {
          this.headerKey = 'detail';
        }
      }
    },
    handleJump(val) {
      if (val === 'detail') {
        this.$refs.detailRef.scrollIntoView();
      } else {
        this.$refs.commentRef.$el.scrollIntoView();
      }
      this.headerKey = val;
    },
    onShowService() {
      this.showService = true;
    },
    addCart() {
      let ids = [this.detailData.id];
      this.$router.push({
        path: `/orderSubmit`,
        query: {
          mode: "cart",
          ids
        }
      });
    },
    isStock() {
      return this.skuData.some(item => item.stock > 0);
    },
    /* 获取倒计时 */
    getSurplus(startTime, endTime) {
      let nowtime = new Date(startTime),
        //获取当前时间
        endtime = new Date(endTime); //定义结束时间
      let leftObj = {};
      leftObj["lefttime"] = endtime.getTime() - nowtime.getTime(); //距离结束时间的毫秒数
      leftObj["leftd"] = Math.floor(leftObj["lefttime"] / (1000 * 60 * 60 * 24)); //计算天数
      leftObj["lefth"] = Math.floor(leftObj["lefttime"] / (1000 * 60 * 60) % 24); //计算小时数
      leftObj["leftm"] = Math.floor(leftObj["lefttime"] / (1000 * 60) % 60); //计算分钟数
      leftObj["lefts"] = Math.floor(leftObj["lefttime"] / 1000 % 60); //计算秒数
      return leftObj;
    },
    setSurplus() {
      let vm = this;
      vm.surplus = vm.getSurplus(vm.startTime, vm.endTime);
      if (vm.timer) {
        return false;
      }
      vm.timer = setInterval(() => {
        vm.startTime += 1000;
        vm.surplus = vm.getSurplus(vm.startTime, vm.endTime);
        if (vm.surplus.lefttime <= 0) {
          clearInterval(vm.timer);
          if (location) {
            var _location;
            (_location = location) === null || _location === void 0 ? void 0 : _location.reload();
          }
        }
      }, 1000);
    },
    isToday() {
      let vm = this;
      let begin = new Date(vm.detailData.productActivityVO.activityStartTime).getTime();
      let now = new Date(vm.detailData.productActivityVO.currentTime).getTime();
      if (new Date(begin).toDateString() === new Date(now).toDateString()) {
        return true;
      } else if (new Date(begin) < new Date()) {
        return false;
      }
    },
    getBeginTime() {
      let vm = this;
      let begin = new Date(vm.detailData.productActivityVO.activityStartTime).getTime();
      let timestr = new Date(begin);
      let month = timestr.getMonth() + 1;
      let date = timestr.getDate();
      let hour = timestr.getHours();
      let minute = timestr.getMinutes();
      let datetime = `${month}月${date}日 ${hour}:${minute} 开始`;
      return datetime;
    },
    onActiveImg(i) {
      this.activeImg = i;
    },
    onImgLeft() {
      let vm = this;
      if (vm.activeImg > 0) {
        vm.activeImg--;
      }
    },
    onImgRight() {
      let vm = this;
      if (vm.activeImg < vm.detailData.pictureList.length - 1) {
        vm.activeImg++;
      }
    },
    /**
     * 点击属性项，设置选中和禁用项
     */
    handleAttrItem(item, groupIndex) {
      let vm = this;
      // 禁用选项
      if (item.disabled) {
        return false;
      }
      // 每次重选规格，购买数量都置为1
      vm.curBuyNum = 1;
      const active = item.active;
      // 把当前选项组的装先置为未选状态
      vm.detailData.attributeGroupList[groupIndex].attributes.forEach(item => {
        this.$set(item, "active", false);
      });
      // 设置当前点击选项选中
      this.$set(item, "active", !active);
      this.setDisabledItem(item, groupIndex);
    },
    /**
     * 每次点击选项属性时，计算不可选属性
     */
    setDisabledItem(item, groupIndex) {
      let vm = this;
      vm.detailData.attributeGroupList.forEach((group, idx) => {
        // 拿到已选项数组，这个是按照项组顺序排序好的缓存数组
        let symbolCache = Object.assign([], this.selectedSymbol);
        // 跳过当前属性组
        if (groupIndex === idx) return false;
        // 遍历其他选项组中的选项
        group.attributes.forEach(item => {
          // 根据选项组下标，补位选项属性
          symbolCache[idx] = item.symbol;
          const reg = new RegExp(symbolCache.join(","));
          // 根据补位选项寻找是否有有效SKU，有则可选，没有则禁用
          const res = vm.skuData.filter(i => reg.test(i.attributeSymbolList)).find(i => i.stock > 0);
          if (res) {
            item.disabled = false;
          } else {
            item.disabled = true;
          }
        });
      });
    },
    buyNow() {
      if (!this.$isLoginValidate()) {
        return;
      }
      if (!this.curSku.skuId) {
        this.$message.error("请选择规格~");
        return false;
      }
      let query = {
        mode: "buyNow",
        skuId: this.curSku.skuId,
        num: this.curBuyNum,
        productType: this.detailData.productType,
        activityType: 1
      };
      this.$router.push({
        path: "/order/submit",
        query
      });
    },
    /**
     * 加入购物车
     */
    async addCart() {
      if (!this.$isLoginValidate()) {
        return;
      }
      if (!this.curSku.skuId) {
        this.$message.error("请选择规格~");
        return false;
      }
      const {
        error,
        result
      } = await Object(cart["c" /* ApiPutAddCart */])({
        productSkuId: this.curSku.skuId,
        productId: this.detailData.id,
        number: this.curBuyNum
      });
      if (error) {
        this.$message.error(error.message);
        return false;
      }
      this.$message.success("加入购物车成功~");
      this.$store.dispatch("getCartProducts");
      // this.$Router.push('/cart');
    }
  }
});
// CONCATENATED MODULE: ./pages/goods/detail/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var detail_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/goods/detail/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(427)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  detail_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8ba21f5e",
  "4b11b5ce"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UiButton: __webpack_require__(15).default,UiGoodsItem: __webpack_require__(167).default,BsChosen: __webpack_require__(178).default})


/***/ })

};;
//# sourceMappingURL=_id.js.map