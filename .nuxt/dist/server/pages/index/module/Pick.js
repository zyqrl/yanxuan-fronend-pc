exports.ids = [45];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=Pick.js.map