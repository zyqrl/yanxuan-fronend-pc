exports.ids = [54];
exports.modules = {

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(304);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("442b3c90", content, true, context)
};

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogEnd_vue_vue_type_style_index_0_id_33c6e79e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(252);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogEnd_vue_vue_type_style_index_0_id_33c6e79e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogEnd_vue_vue_type_style_index_0_id_33c6e79e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogEnd_vue_vue_type_style_index_0_id_33c6e79e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogEnd_vue_vue_type_style_index_0_id_33c6e79e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-33c6e79e]{display:flex}.flex-inline[data-v-33c6e79e]{display:inline-flex}.flex-inline[data-v-33c6e79e]:after,.flex-inline[data-v-33c6e79e]:before,.flex[data-v-33c6e79e]:after,.flex[data-v-33c6e79e]:before{display:none}.flex-left[data-v-33c6e79e]{justify-content:flex-start}.flex-center[data-v-33c6e79e]{justify-content:center}.flex-right[data-v-33c6e79e]{justify-content:flex-end}.flex-between[data-v-33c6e79e]{justify-content:space-between}.flex-around[data-v-33c6e79e]{justify-content:space-around}.flex-stretch[data-v-33c6e79e]{align-items:stretch}.flex-top[data-v-33c6e79e]{align-items:flex-start}.flex-middle[data-v-33c6e79e]{align-items:center}.flex-bottom[data-v-33c6e79e]{align-items:flex-end}.flex-baseline[data-v-33c6e79e]{align-items:baseline}.flex-row[data-v-33c6e79e]{flex-direction:row}.flex-row-reverse[data-v-33c6e79e]{flex-direction:row-reverse}.flex-column[data-v-33c6e79e]{flex-direction:column}.flex-column-reverse[data-v-33c6e79e]{flex-direction:column-reverse}.flex-nowrap[data-v-33c6e79e]{flex-wrap:nowrap}.flex-wrap[data-v-33c6e79e]{flex-wrap:wrap}.flex-wrap-reverse[data-v-33c6e79e]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-33c6e79e]{align-content:stretch}.flex-wrap-top[data-v-33c6e79e]{align-content:flex-start}.flex-wrap-middle[data-v-33c6e79e]{align-content:center}.flex-wrap-bottom[data-v-33c6e79e]{align-content:flex-end}.flex-wrap-between[data-v-33c6e79e]{align-content:space-between}.flex-wrap-around[data-v-33c6e79e]{align-content:space-around}.flex-first[data-v-33c6e79e]{order:-1}.flex-last[data-v-33c6e79e]{order:99}.flex-none[data-v-33c6e79e]{flex:none}.flex-auto[data-v-33c6e79e]{flex:auto}.flex-1[data-v-33c6e79e]{flex:1}.hover-text[data-v-33c6e79e]:hover{color:#ff875b}.expend-click[data-v-33c6e79e]{position:relative}.expend-click[data-v-33c6e79e]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-33c6e79e],[data-v-33c6e79e]:after,[data-v-33c6e79e]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-33c6e79e],dd[data-v-33c6e79e],dl[data-v-33c6e79e],figure[data-v-33c6e79e],form[data-v-33c6e79e],h1[data-v-33c6e79e],h2[data-v-33c6e79e],h3[data-v-33c6e79e],h4[data-v-33c6e79e],h5[data-v-33c6e79e],ol[data-v-33c6e79e],p[data-v-33c6e79e],ul[data-v-33c6e79e]{margin:0;font-size:14px}button[data-v-33c6e79e],input[data-v-33c6e79e],ol[data-v-33c6e79e],ul[data-v-33c6e79e]{padding:0}li[data-v-33c6e79e],ol[data-v-33c6e79e],ul[data-v-33c6e79e]{list-style:none;list-style-type:none}h1[data-v-33c6e79e],h2[data-v-33c6e79e],h3[data-v-33c6e79e],h4[data-v-33c6e79e],h5[data-v-33c6e79e]{font-size:100%}input[data-v-33c6e79e]{border:0;margin:0}img[data-v-33c6e79e]{width:100%}a[data-v-33c6e79e],button[data-v-33c6e79e],img[data-v-33c6e79e],input[data-v-33c6e79e],optgroup[data-v-33c6e79e],select[data-v-33c6e79e],textarea[data-v-33c6e79e]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-33c6e79e],img[data-v-33c6e79e]{-webkit-touch-callout:none;border:0}body[data-v-33c6e79e],html[data-v-33c6e79e]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-33c6e79e],img[data-v-33c6e79e],input[data-v-33c6e79e],textarea[data-v-33c6e79e]{vertical-align:middle;outline:none}body[data-v-33c6e79e]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-33c6e79e]{border-collapse:collapse;border-spacing:0}a[data-v-33c6e79e],table[data-v-33c6e79e]{color:#333}a[data-v-33c6e79e],a[data-v-33c6e79e]:hover{text-decoration:none}a[data-v-33c6e79e]:hover{color:#ff512b}.scrollbar-self[data-v-33c6e79e]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-33c6e79e]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-33c6e79e]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}[data-v-33c6e79e] .el-dialog .el-dialog__header{display:none}[data-v-33c6e79e] .el-dialog .el-dialog__body{padding:41px 0}[data-v-33c6e79e] .el-dialog .el-dialog__body .dialog-body-wrap{width:145px;font-size:16px;line-height:20px;text-align:center;color:rgba(0,0,0,.9);margin-bottom:20px}[data-v-33c6e79e] .el-dialog .el-dialog__body .ui-button{width:164px;height:30px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seckill/module/DialogEnd.vue?vue&type=template&id=33c6e79e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{attrs:{"center":"","width":"17%","visible":_vm.dialogVisible,"show-close":false,"close-on-press-escape":false,"close-on-click-modal":false},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('div',{staticClass:"flex flex-column flex-middle"},[_c('div',{staticClass:"dialog-body-wrap"},[_c('p',[_vm._v("本期秒杀活动已结束")]),_vm._v(" "),_c('p',[_vm._v("感谢你的参与")])]),_vm._v(" "),_c('UiButton',{attrs:{"type":"yellow_gradual","radius":true},on:{"click":_vm.onClose}},[_vm._v("好的")])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/seckill/module/DialogEnd.vue?vue&type=template&id=33c6e79e&scoped=true&

// EXTERNAL MODULE: ./components/UiButton.vue + 4 modules
var UiButton = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seckill/module/DialogEnd.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var DialogEndvue_type_script_lang_js_ = ({
  name: "SeckillDialogEnd",
  components: {
    UiButton: UiButton["default"]
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dialogVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit("update:visible", val);
      }
    }
  },
  methods: {
    onClose() {
      this.$emit("close");
      this.dialogVisible = false;
    }
  }
});
// CONCATENATED MODULE: ./pages/seckill/module/DialogEnd.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_DialogEndvue_type_script_lang_js_ = (DialogEndvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/seckill/module/DialogEnd.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(303)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_DialogEndvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "33c6e79e",
  "21246594"
  
)

/* harmony default export */ var DialogEnd = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UiButton: __webpack_require__(15).default})


/***/ })

};;
//# sourceMappingURL=DialogEnd.js.map