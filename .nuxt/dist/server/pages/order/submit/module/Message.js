exports.ids = [51];
exports.modules = {

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(314);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("26768c8b", content, true, context)
};

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_37d7066d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(256);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_37d7066d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_37d7066d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_37d7066d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_37d7066d_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-37d7066d]{display:flex}.flex-inline[data-v-37d7066d]{display:inline-flex}.flex-inline[data-v-37d7066d]:after,.flex-inline[data-v-37d7066d]:before,.flex[data-v-37d7066d]:after,.flex[data-v-37d7066d]:before{display:none}.flex-left[data-v-37d7066d]{justify-content:flex-start}.flex-center[data-v-37d7066d]{justify-content:center}.flex-right[data-v-37d7066d]{justify-content:flex-end}.flex-between[data-v-37d7066d]{justify-content:space-between}.flex-around[data-v-37d7066d]{justify-content:space-around}.flex-stretch[data-v-37d7066d]{align-items:stretch}.flex-top[data-v-37d7066d]{align-items:flex-start}.flex-middle[data-v-37d7066d]{align-items:center}.flex-bottom[data-v-37d7066d]{align-items:flex-end}.flex-baseline[data-v-37d7066d]{align-items:baseline}.flex-row[data-v-37d7066d]{flex-direction:row}.flex-row-reverse[data-v-37d7066d]{flex-direction:row-reverse}.flex-column[data-v-37d7066d]{flex-direction:column}.flex-column-reverse[data-v-37d7066d]{flex-direction:column-reverse}.flex-nowrap[data-v-37d7066d]{flex-wrap:nowrap}.flex-wrap[data-v-37d7066d]{flex-wrap:wrap}.flex-wrap-reverse[data-v-37d7066d]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-37d7066d]{align-content:stretch}.flex-wrap-top[data-v-37d7066d]{align-content:flex-start}.flex-wrap-middle[data-v-37d7066d]{align-content:center}.flex-wrap-bottom[data-v-37d7066d]{align-content:flex-end}.flex-wrap-between[data-v-37d7066d]{align-content:space-between}.flex-wrap-around[data-v-37d7066d]{align-content:space-around}.flex-first[data-v-37d7066d]{order:-1}.flex-last[data-v-37d7066d]{order:99}.flex-none[data-v-37d7066d]{flex:none}.flex-auto[data-v-37d7066d]{flex:auto}.flex-1[data-v-37d7066d]{flex:1}.hover-text[data-v-37d7066d]:hover{color:#ff875b}.expend-click[data-v-37d7066d]{position:relative}.expend-click[data-v-37d7066d]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-37d7066d],[data-v-37d7066d]:after,[data-v-37d7066d]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-37d7066d],dd[data-v-37d7066d],dl[data-v-37d7066d],figure[data-v-37d7066d],form[data-v-37d7066d],h1[data-v-37d7066d],h2[data-v-37d7066d],h3[data-v-37d7066d],h4[data-v-37d7066d],h5[data-v-37d7066d],ol[data-v-37d7066d],p[data-v-37d7066d],ul[data-v-37d7066d]{margin:0;font-size:14px}button[data-v-37d7066d],input[data-v-37d7066d],ol[data-v-37d7066d],ul[data-v-37d7066d]{padding:0}li[data-v-37d7066d],ol[data-v-37d7066d],ul[data-v-37d7066d]{list-style:none;list-style-type:none}h1[data-v-37d7066d],h2[data-v-37d7066d],h3[data-v-37d7066d],h4[data-v-37d7066d],h5[data-v-37d7066d]{font-size:100%}input[data-v-37d7066d]{border:0;margin:0}img[data-v-37d7066d]{width:100%}a[data-v-37d7066d],button[data-v-37d7066d],img[data-v-37d7066d],input[data-v-37d7066d],optgroup[data-v-37d7066d],select[data-v-37d7066d],textarea[data-v-37d7066d]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-37d7066d],img[data-v-37d7066d]{-webkit-touch-callout:none;border:0}body[data-v-37d7066d],html[data-v-37d7066d]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-37d7066d],img[data-v-37d7066d],input[data-v-37d7066d],textarea[data-v-37d7066d]{vertical-align:middle;outline:none}body[data-v-37d7066d]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-37d7066d]{border-collapse:collapse;border-spacing:0}a[data-v-37d7066d],table[data-v-37d7066d]{color:#333}a[data-v-37d7066d],a[data-v-37d7066d]:hover{text-decoration:none}a[data-v-37d7066d]:hover{color:#ff512b}.scrollbar-self[data-v-37d7066d]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-37d7066d]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-37d7066d]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.message[data-v-37d7066d]{height:110px;border:1px solid #ddd;border-top:0;padding:20px 40px 20px 20px;justify-content:space-between}.message[data-v-37d7066d],.message--left[data-v-37d7066d]{display:flex}.message--left label[data-v-37d7066d]{margin:11px 16px 0 0}.message label[data-v-37d7066d]{color:#666}.message p[data-v-37d7066d]{display:flex;justify-content:space-between;width:308px;margin:11px 0}[data-v-37d7066d] .textarea{display:inline-block;width:467px}[data-v-37d7066d] .textarea textarea{height:70px;background:#f8f8f8;border:none;resize:none}[data-v-37d7066d] .textarea textarea::-moz-placeholder{color:#999;font-size:12px}[data-v-37d7066d] .textarea textarea::placeholder{color:#999;font-size:12px}[data-v-37d7066d] .textarea span{background:#f8f8f8}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/order/submit/module/Message.vue?vue&type=template&id=37d7066d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"message"},[_vm._ssrNode("<div class=\"message--left\" data-v-37d7066d>","</div>",[_vm._ssrNode("<label data-v-37d7066d>买家留言</label> "),_c('el-input',{staticClass:"textarea",attrs:{"type":"textarea","placeholder":"填写您想要备注的信息，50字以内","show-word-limit":"","maxlength":50},model:{value:(_vm.myMsg),callback:function ($$v) {_vm.myMsg=$$v},expression:"myMsg"}})],2),_vm._ssrNode(" <div data-v-37d7066d><p data-v-37d7066d><label data-v-37d7066d>商品总额</label> <b data-v-37d7066d>"+_vm._ssrEscape("￥"+_vm._s(_vm.orderInfo.totalAmount))+"</b></p> <p data-v-37d7066d><label data-v-37d7066d>运费</label> <b data-v-37d7066d>"+_vm._ssrEscape("￥"+_vm._s(_vm.orderInfo.shippingAmount))+"</b></p></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/order/submit/module/Message.vue?vue&type=template&id=37d7066d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/order/submit/module/Message.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Messagevue_type_script_lang_js_ = ({
  props: {
    orderInfo: {
      type: Object,
      defautl: () => ({})
    },
    message: {
      type: String,
      default: ''
    }
  },
  computed: {
    myMsg: {
      get() {
        return this.message;
      },
      set(val) {
        this.$emit('update:message', val);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/order/submit/module/Message.vue?vue&type=script&lang=js&
 /* harmony default export */ var module_Messagevue_type_script_lang_js_ = (Messagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/order/submit/module/Message.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(313)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  module_Messagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "37d7066d",
  "04554686"
  
)

/* harmony default export */ var Message = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Message.js.map