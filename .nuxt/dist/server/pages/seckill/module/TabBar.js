exports.ids = [55];
exports.modules = {

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(302);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("84bed938", content, true, context)
};

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBar_vue_vue_type_style_index_0_id_2ca248bc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(251);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBar_vue_vue_type_style_index_0_id_2ca248bc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBar_vue_vue_type_style_index_0_id_2ca248bc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBar_vue_vue_type_style_index_0_id_2ca248bc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabBar_vue_vue_type_style_index_0_id_2ca248bc_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-2ca248bc]{display:flex}.flex-inline[data-v-2ca248bc]{display:inline-flex}.flex-inline[data-v-2ca248bc]:after,.flex-inline[data-v-2ca248bc]:before,.flex[data-v-2ca248bc]:after,.flex[data-v-2ca248bc]:before{display:none}.flex-left[data-v-2ca248bc]{justify-content:flex-start}.flex-center[data-v-2ca248bc]{justify-content:center}.flex-right[data-v-2ca248bc]{justify-content:flex-end}.flex-between[data-v-2ca248bc]{justify-content:space-between}.flex-around[data-v-2ca248bc]{justify-content:space-around}.flex-stretch[data-v-2ca248bc]{align-items:stretch}.flex-top[data-v-2ca248bc]{align-items:flex-start}.flex-middle[data-v-2ca248bc]{align-items:center}.flex-bottom[data-v-2ca248bc]{align-items:flex-end}.flex-baseline[data-v-2ca248bc]{align-items:baseline}.flex-row[data-v-2ca248bc]{flex-direction:row}.flex-row-reverse[data-v-2ca248bc]{flex-direction:row-reverse}.flex-column[data-v-2ca248bc]{flex-direction:column}.flex-column-reverse[data-v-2ca248bc]{flex-direction:column-reverse}.flex-nowrap[data-v-2ca248bc]{flex-wrap:nowrap}.flex-wrap[data-v-2ca248bc]{flex-wrap:wrap}.flex-wrap-reverse[data-v-2ca248bc]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-2ca248bc]{align-content:stretch}.flex-wrap-top[data-v-2ca248bc]{align-content:flex-start}.flex-wrap-middle[data-v-2ca248bc]{align-content:center}.flex-wrap-bottom[data-v-2ca248bc]{align-content:flex-end}.flex-wrap-between[data-v-2ca248bc]{align-content:space-between}.flex-wrap-around[data-v-2ca248bc]{align-content:space-around}.flex-first[data-v-2ca248bc]{order:-1}.flex-last[data-v-2ca248bc]{order:99}.flex-none[data-v-2ca248bc]{flex:none}.flex-auto[data-v-2ca248bc]{flex:auto}.flex-1[data-v-2ca248bc]{flex:1}.hover-text[data-v-2ca248bc]:hover{color:#ff875b}.expend-click[data-v-2ca248bc]{position:relative}.expend-click[data-v-2ca248bc]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-2ca248bc],[data-v-2ca248bc]:after,[data-v-2ca248bc]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-2ca248bc],dd[data-v-2ca248bc],dl[data-v-2ca248bc],figure[data-v-2ca248bc],form[data-v-2ca248bc],h1[data-v-2ca248bc],h2[data-v-2ca248bc],h3[data-v-2ca248bc],h4[data-v-2ca248bc],h5[data-v-2ca248bc],ol[data-v-2ca248bc],p[data-v-2ca248bc],ul[data-v-2ca248bc]{margin:0;font-size:14px}button[data-v-2ca248bc],input[data-v-2ca248bc],ol[data-v-2ca248bc],ul[data-v-2ca248bc]{padding:0}li[data-v-2ca248bc],ol[data-v-2ca248bc],ul[data-v-2ca248bc]{list-style:none;list-style-type:none}h1[data-v-2ca248bc],h2[data-v-2ca248bc],h3[data-v-2ca248bc],h4[data-v-2ca248bc],h5[data-v-2ca248bc]{font-size:100%}input[data-v-2ca248bc]{border:0;margin:0}img[data-v-2ca248bc]{width:100%}a[data-v-2ca248bc],button[data-v-2ca248bc],img[data-v-2ca248bc],input[data-v-2ca248bc],optgroup[data-v-2ca248bc],select[data-v-2ca248bc],textarea[data-v-2ca248bc]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-2ca248bc],img[data-v-2ca248bc]{-webkit-touch-callout:none;border:0}body[data-v-2ca248bc],html[data-v-2ca248bc]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-2ca248bc],img[data-v-2ca248bc],input[data-v-2ca248bc],textarea[data-v-2ca248bc]{vertical-align:middle;outline:none}body[data-v-2ca248bc]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-2ca248bc]{border-collapse:collapse;border-spacing:0}a[data-v-2ca248bc],table[data-v-2ca248bc]{color:#333}a[data-v-2ca248bc],a[data-v-2ca248bc]:hover{text-decoration:none}a[data-v-2ca248bc]:hover{color:#ff512b}.scrollbar-self[data-v-2ca248bc]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-2ca248bc]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-2ca248bc]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.seckill-tabbar[data-v-2ca248bc]{width:100%;height:60px;cursor:pointer;overflow:hidden}.seckill-tabbar .sckill-header-tabbar__item[data-v-2ca248bc]{width:100%;font-size:12px;background:#fff;color:#666}.seckill-tabbar .sckill-header-tabbar__item .header-tabbar-item__time[data-v-2ca248bc]{font-size:18px;color:#333;margin-right:22px}.seckill-tabbar .sckill-header-tabbar__item .header-tabbar-item__tip[data-v-2ca248bc]{width:69px;height:22px;line-height:22px;text-align:center;border:1px solid #999;border-radius:2px}.seckill-tabbar .sckill-header-tabbar__item--active[data-v-2ca248bc]{background:linear-gradient(270deg,#ffa25a,#ff7f39);color:#fff}.seckill-tabbar .sckill-header-tabbar__item--active .header-tabbar-item__time[data-v-2ca248bc]{font-size:24px;color:#fff}.seckill-tabbar .sckill-header-tabbar__item--active .header-tabbar-item__tip[data-v-2ca248bc]{border-color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seckill/module/TabBar.vue?vue&type=template&id=2ca248bc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"seckill-tabbar flex flex-between"},[_vm._ssrNode((_vm._ssrList((_vm.list),function(item){return ("<div"+(_vm._ssrClass("sckill-header-tabbar__item flex flex-middle flex-center",{
      'sckill-header-tabbar__item--active': item.id === _vm.tabId,
    }))+" data-v-2ca248bc><strong class=\"header-tabbar-item__time\" data-v-2ca248bc>"+_vm._ssrEscape(_vm._s(item.timeName))+"</strong> <div class=\"header-tabbar-item__tip\" data-v-2ca248bc>"+_vm._ssrEscape("\n      "+_vm._s(item.isInProgress ? "抢购中" : "即将开抢")+"\n    ")+"</div></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/seckill/module/TabBar.vue?vue&type=template&id=2ca248bc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seckill/module/TabBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TabBarvue_type_script_lang_js_ = ({
  name: "SeckillTabBar",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    tabId: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onTabClick(id) {
      // 点击同一个tab
      if (id === this.tabId) {
        return;
      }
      this.$emit("tab-change", id);
    }
  }
});
// CONCATENATED MODULE: ./pages/seckill/module/TabBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_TabBarvue_type_script_lang_js_ = (TabBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/seckill/module/TabBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(301)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_TabBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2ca248bc",
  "59d11b26"
  
)

/* harmony default export */ var TabBar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=TabBar.js.map