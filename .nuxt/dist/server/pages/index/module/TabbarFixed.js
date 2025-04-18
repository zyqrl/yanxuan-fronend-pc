exports.ids = [47];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=TabbarFixed.js.map