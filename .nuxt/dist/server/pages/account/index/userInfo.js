exports.ids = [34];
exports.modules = {

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

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(379);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2d8d7d5a", content, true, context)
};

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_style_index_0_id_46872c68_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(328);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_style_index_0_id_46872c68_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_style_index_0_id_46872c68_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_style_index_0_id_46872c68_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_style_index_0_id_46872c68_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex[data-v-46872c68]{display:flex}.flex-inline[data-v-46872c68]{display:inline-flex}.flex-inline[data-v-46872c68]:after,.flex-inline[data-v-46872c68]:before,.flex[data-v-46872c68]:after,.flex[data-v-46872c68]:before{display:none}.flex-left[data-v-46872c68]{justify-content:flex-start}.flex-center[data-v-46872c68]{justify-content:center}.flex-right[data-v-46872c68]{justify-content:flex-end}.flex-between[data-v-46872c68]{justify-content:space-between}.flex-around[data-v-46872c68]{justify-content:space-around}.flex-stretch[data-v-46872c68]{align-items:stretch}.flex-top[data-v-46872c68]{align-items:flex-start}.flex-middle[data-v-46872c68]{align-items:center}.flex-bottom[data-v-46872c68]{align-items:flex-end}.flex-baseline[data-v-46872c68]{align-items:baseline}.flex-row[data-v-46872c68]{flex-direction:row}.flex-row-reverse[data-v-46872c68]{flex-direction:row-reverse}.flex-column[data-v-46872c68]{flex-direction:column}.flex-column-reverse[data-v-46872c68]{flex-direction:column-reverse}.flex-nowrap[data-v-46872c68]{flex-wrap:nowrap}.flex-wrap[data-v-46872c68]{flex-wrap:wrap}.flex-wrap-reverse[data-v-46872c68]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-46872c68]{align-content:stretch}.flex-wrap-top[data-v-46872c68]{align-content:flex-start}.flex-wrap-middle[data-v-46872c68]{align-content:center}.flex-wrap-bottom[data-v-46872c68]{align-content:flex-end}.flex-wrap-between[data-v-46872c68]{align-content:space-between}.flex-wrap-around[data-v-46872c68]{align-content:space-around}.flex-first[data-v-46872c68]{order:-1}.flex-last[data-v-46872c68]{order:99}.flex-none[data-v-46872c68]{flex:none}.flex-auto[data-v-46872c68]{flex:auto}.flex-1[data-v-46872c68]{flex:1}.hover-text[data-v-46872c68]:hover{color:#ff875b}.expend-click[data-v-46872c68]{position:relative}.expend-click[data-v-46872c68]:after{content:\"\";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-46872c68],[data-v-46872c68]:after,[data-v-46872c68]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-46872c68],dd[data-v-46872c68],dl[data-v-46872c68],figure[data-v-46872c68],form[data-v-46872c68],h1[data-v-46872c68],h2[data-v-46872c68],h3[data-v-46872c68],h4[data-v-46872c68],h5[data-v-46872c68],ol[data-v-46872c68],p[data-v-46872c68],ul[data-v-46872c68]{margin:0;font-size:14px}button[data-v-46872c68],input[data-v-46872c68],ol[data-v-46872c68],ul[data-v-46872c68]{padding:0}li[data-v-46872c68],ol[data-v-46872c68],ul[data-v-46872c68]{list-style:none;list-style-type:none}h1[data-v-46872c68],h2[data-v-46872c68],h3[data-v-46872c68],h4[data-v-46872c68],h5[data-v-46872c68]{font-size:100%}input[data-v-46872c68]{border:0;margin:0}img[data-v-46872c68]{width:100%}a[data-v-46872c68],button[data-v-46872c68],img[data-v-46872c68],input[data-v-46872c68],optgroup[data-v-46872c68],select[data-v-46872c68],textarea[data-v-46872c68]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-46872c68],img[data-v-46872c68]{-webkit-touch-callout:none;border:0}body[data-v-46872c68],html[data-v-46872c68]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-46872c68],img[data-v-46872c68],input[data-v-46872c68],textarea[data-v-46872c68]{vertical-align:middle;outline:none}body[data-v-46872c68]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-46872c68]{border-collapse:collapse;border-spacing:0}a[data-v-46872c68],table[data-v-46872c68]{color:#333}a[data-v-46872c68],a[data-v-46872c68]:hover{text-decoration:none}a[data-v-46872c68]:hover{color:#ff512b}.scrollbar-self[data-v-46872c68]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-46872c68]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-46872c68]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.account-user-info[data-v-46872c68]{width:1000px;border:1px solid #ddd;font-size:14px;color:#333}.account-user-info .account-user-info__label[data-v-46872c68]{height:42px;line-height:42px;padding-left:24px;border-bottom:1px solid #ddd;background:#f8f8f8}.account-user-info .account-user-info__content[data-v-46872c68]{padding:44px 69px;background:#fff}.account-user-info .account-user-info__content[data-v-46872c68] .el-form .el-form-item__label{margin-right:40px;color:#333}.account-user-info .account-user-info__content[data-v-46872c68] .el-form .user-info-content__avatar{margin-top:-13px}.account-user-info .account-user-info__content[data-v-46872c68] .el-form .user-info-content__avatar .el-image{width:70px;height:70px;margin-right:30px;border-radius:50%}.account-user-info .account-user-info__content[data-v-46872c68] .el-form .user-info-content__avatar .el-button{width:89px;height:30px;border-radius:15px 15px 15px 15px;border:1px solid #eee}.account-user-info .account-user-info__content[data-v-46872c68] .el-form .form-item__nickname{margin-left:-10px}.account-user-info .account-user-info__content[data-v-46872c68] .el-form .user-info-content__nickname{height:35px;width:210px}.account-user-info .account-user-info__content[data-v-46872c68] .el-form .user-info-content__nickname .el-input__inner{border:1px solid #eee}.account-user-info .account-user-info__content[data-v-46872c68] .el-form .ui-button{width:136px;height:36px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index/userInfo.vue?vue&type=template&id=46872c68&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"account-user-info"},[_vm._ssrNode("<div class=\"account-user-info__label\" data-v-46872c68>个人资料</div> "),_vm._ssrNode("<div class=\"account-user-info__content\" data-v-46872c68>","</div>",[_c('el-form',{ref:"ruleForm",attrs:{"model":_vm.form,"rules":_vm.rules},nativeOn:{"submit":function($event){$event.preventDefault();}}},[_c('el-form-item',{attrs:{"label":"头像"}},[_c('div',{staticClass:"user-info-content__avatar flex flex-middle"},[_c('el-image',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.uploadLoading),expression:"uploadLoading"}],attrs:{"fit":"cover","src":_vm.form.avatar,"preview-src-list":[_vm.form.avatar]}}),_vm._v(" "),_c('el-upload',{attrs:{"action":_vm.ossUploadUrl,"data":_vm.uploadData,"show-file-list":false,"on-success":_vm.handleUploadSuccess,"before-upload":_vm.handleBeforeUpload,"on-error":_vm.handleUploadError}},[_c('el-button',[_vm._v("修改头像")])],1)],1)]),_vm._v(" "),_c('el-form-item',{staticClass:"form-item__nickname",attrs:{"label":"昵称","prop":"nickname"}},[_c('el-input',{staticClass:"user-info-content__nickname",attrs:{"placeholder":"请输入昵称"},model:{value:(_vm.form.nickname),callback:function ($$v) {_vm.$set(_vm.form, "nickname", $$v)},expression:"form.nickname"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"性别"}},[_c('el-radio',{attrs:{"label":_vm.SEX_TYPE.MALE},model:{value:(_vm.form.gender),callback:function ($$v) {_vm.$set(_vm.form, "gender", $$v)},expression:"form.gender"}},[_vm._v("男")]),_vm._v(" "),_c('el-radio',{attrs:{"label":_vm.SEX_TYPE.FEMALE},model:{value:(_vm.form.gender),callback:function ($$v) {_vm.$set(_vm.form, "gender", $$v)},expression:"form.gender"}},[_vm._v("女")])],1),_vm._v(" "),_c('el-form-item',[_c('UiButton',{attrs:{"type":"yellow_gradual","radius":true},on:{"click":_vm.onSubmit}},[_vm._v("确认保存")])],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/index/userInfo.vue?vue&type=template&id=46872c68&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/element-ui.common.js
var element_ui_common = __webpack_require__(17);

// EXTERNAL MODULE: ./components/UiButton.vue + 4 modules
var UiButton = __webpack_require__(15);

// EXTERNAL MODULE: ./constants/index.js
var constants = __webpack_require__(3);

// EXTERNAL MODULE: ./plugins/api/account.js
var account = __webpack_require__(19);

// EXTERNAL MODULE: ./plugins/api/oss.js
var oss = __webpack_require__(193);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/index/userInfo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var userInfovue_type_script_lang_js_ = ({
  name: "AccountUserInfo",
  components: {
    UiButton: UiButton["default"]
  },
  data() {
    return {
      SEX_TYPE: constants["e" /* SEX_TYPE */],
      form: {
        nickname: "",
        gender: constants["e" /* SEX_TYPE */].MALE,
        avatar: ""
      },
      rules: {
        nickname: [{
          required: true,
          message: "请输入昵称",
          trigger: "blur"
        }, {
          min: 1,
          max: 10,
          message: "请输入1-10个字符",
          trigger: "blur"
        }]
      },
      ossUploadUrl: "",
      ossDirName: "",
      // oss路径名
      fileName: "",
      // 图片文件名
      uploadData: {},
      // oss上传图片参数
      uploadLoading: false
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(["userInfo", "token"])
  },
  watch: {
    userInfo: {
      deep: true,
      handler(val) {
        if (val && Object.keys(val).length > 0) {
          this.initData();
        }
      }
    }
  },
  created() {
    this.getOssConfig();
    if (this.userInfo && Object.keys(this.userInfo).length > 0) {
      this.initData();
    }
  },
  methods: {
    initData() {
      if (this.token) {
        const {
          nickname,
          gender,
          avatar
        } = this.userInfo;
        Object.assign(this.form, {
          nickname,
          gender: gender === constants["e" /* SEX_TYPE */].UNKNOW ? constants["e" /* SEX_TYPE */].MALE : gender,
          // 默认性别显示男
          avatar
        });
      }
    },
    async getOssConfig() {
      const {
        result
      } = await Object(oss["a" /* ApiPostGetOssConfig */])({
        configId: "account-avatar/",
        serviceName: "uc"
      });
      if (result) {
        const {
          dir,
          host,
          policy,
          accessId,
          signature
        } = result;
        this.ossUploadUrl = host;
        this.ossDirName = dir;
        Object.assign(this.uploadData, {
          policy,
          OSSAccessKeyId: accessId,
          success_action_status: 200,
          signature
        });
      }
    },
    // 获取文件名
    handleBeforeUpload(file) {
      this.uploadLoading = true;
      this.fileName = file.name;
      Object.assign(this.uploadData, {
        key: `${this.ossDirName}${"${filename}"}`,
        name: file.name
      });
    },
    handleUploadSuccess() {
      this.uploadLoading = false;
      this.form.avatar = `${this.ossUploadUrl}/${this.ossDirName}${this.fileName}`;
    },
    handleUploadError() {
      this.uploadLoading = false;
    },
    onSubmit() {
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          const {
            result
          } = await Object(account["e" /* ApiPutUser */])({
            ...this.form
          });
          if (result) {
            element_ui_common["Message"].success("修改成功");
            this.$store.dispatch("getUserInfo");
          }
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/account/index/userInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_userInfovue_type_script_lang_js_ = (userInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/account/index/userInfo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(378)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_userInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "46872c68",
  "27181f1c"
  
)

/* harmony default export */ var userInfo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {UiButton: __webpack_require__(15).default})


/***/ })

};;
//# sourceMappingURL=userInfo.js.map