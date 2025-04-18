exports.ids = [46];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=Seckill.js.map