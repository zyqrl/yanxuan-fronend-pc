exports.ids = [4,13];
exports.modules = {

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


/***/ })

};;
//# sourceMappingURL=bs-comment-follow-info.js.map