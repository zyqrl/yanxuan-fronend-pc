(window.webpackJsonp=window.webpackJsonp||[]).push([[38,9,17],{594:function(t,e,f){"use strict";f.r(e);f(10);var n={name:"UiGoodsItem",componetns:{UiMoney:f(387).default},props:{item:{type:Object,default:function(){}}},data:function(){return{}},methods:{isLabel:function(t){return t.some((function(t){return t.code}))},getLabel:function(t){for(var e="",i=0;i<t.length;i++)if("miaosha"!=t[i].code){e=t[i].text;break}return e},onItem:function(){window.open("/goods/detail/"+this.item.id)}}},o=(f(599),f(14)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,f=t._self._c||e;return f("div",{staticClass:"goods-item",on:{click:t.onItem}},[f("img",{staticClass:"goods-item__img",attrs:{src:t.item.mainPicture,alt:"商品图片"}}),t._v(" "),f("div",{staticClass:"goods-item__title"},[t.isLabel(t.item.labelList)?f("span",{staticClass:"goods-item__title-label"},[t._v("\n      "+t._s(t.getLabel(t.item.labelList))+"\n    ")]):t._e(),t._v("\n    "+t._s(t.item.name)+"\n  ")]),t._v(" "),f("div",{staticClass:"goods-item__price"},[f("strong",{staticClass:"goods-item__price--txt"},[t._v(t._s(t.item.startingPrice))])])])}),[],!1,null,"034b1b21",null);e.default=component.exports},595:function(t,e,f){"use strict";f.d(e,"e",(function(){return d})),f.d(e,"b",(function(){return l})),f.d(e,"a",(function(){return v})),f.d(e,"d",(function(){return x})),f.d(e,"c",(function(){return m})),f.d(e,"g",(function(){return h})),f.d(e,"f",(function(){return w})),f.d(e,"l",(function(){return y})),f.d(e,"j",(function(){return k})),f.d(e,"k",(function(){return _})),f.d(e,"h",(function(){return O})),f.d(e,"i",(function(){return A}));f(30);var n=f(38),o=f(4),r=f(37),c="".concat(r.a.base_url,"/mall/trade"),d=function(t){return Object(o.f)(n.a.get("".concat(c,"/app/tradeOrder/page"),{params:t}))},l=function(t){return Object(o.f)(n.a.get("".concat(c,"/app/tradeOrder/buyAdvanceOrder"),{params:t}))},v=function(t){return Object(o.f)(n.a.get("".concat(c,"/app/tradeOrder/cartAdvanceOrder"),{params:t}))},x=function(t){return Object(o.f)(n.a.get("".concat(c,"/app/tradeOrder/").concat(t)))},m=function(t){return Object(o.f)(n.a.get("".concat(c,"/app/tradeOrder/listOrderProductWaitComment"),{params:t}))},h=function(t){var e=t.orderId;return Object(o.f)(n.a.get("".concat(c,"/app/tradeOrder/payResult/").concat(e)))},w=function(t){return Object(o.f)(n.a.get("".concat(c,"/app/tradeOrder/listReceiveOrder"),{params:t}))},y=function(data){return Object(o.f)(n.a.put("".concat(c,"/app/tradeOrder/receive"),data))},k=function(data){return Object(o.f)(n.a.post("".concat(c,"/app/tradeOrder/submitOrder"),data))},_=function(data){return Object(o.f)(n.a.put("".concat(c,"/app/tradeOrder/cancel"),data))},O=function(){return Object(o.f)(n.a.get("".concat(c,"/app/tradeOrder/statistics")))},A=function(data){return Object(o.f)(n.a.put("".concat(c,"/app/refundOrder/statistics"),data))}},596:function(t,e,f){var content=f(600);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,f(23).default)("bf76e63a",content,!0,{sourceMap:!1})},597:function(t,e,f){var content=f(606);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,f(23).default)("fd7040b6",content,!0,{sourceMap:!1})},599:function(t,e,f){"use strict";f(596)},600:function(t,e,f){var n=f(22)(!1);n.push([t.i,'.flex[data-v-034b1b21]{display:flex}.flex-inline[data-v-034b1b21]{display:inline-flex}.flex-inline[data-v-034b1b21]:after,.flex-inline[data-v-034b1b21]:before,.flex[data-v-034b1b21]:after,.flex[data-v-034b1b21]:before{display:none}.flex-left[data-v-034b1b21]{justify-content:flex-start}.flex-center[data-v-034b1b21]{justify-content:center}.flex-right[data-v-034b1b21]{justify-content:flex-end}.flex-between[data-v-034b1b21]{justify-content:space-between}.flex-around[data-v-034b1b21]{justify-content:space-around}.flex-stretch[data-v-034b1b21]{align-items:stretch}.flex-top[data-v-034b1b21]{align-items:flex-start}.flex-middle[data-v-034b1b21]{align-items:center}.flex-bottom[data-v-034b1b21]{align-items:flex-end}.flex-baseline[data-v-034b1b21]{align-items:baseline}.flex-row[data-v-034b1b21]{flex-direction:row}.flex-row-reverse[data-v-034b1b21]{flex-direction:row-reverse}.flex-column[data-v-034b1b21]{flex-direction:column}.flex-column-reverse[data-v-034b1b21]{flex-direction:column-reverse}.flex-nowrap[data-v-034b1b21]{flex-wrap:nowrap}.flex-wrap[data-v-034b1b21]{flex-wrap:wrap}.flex-wrap-reverse[data-v-034b1b21]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-034b1b21]{align-content:stretch}.flex-wrap-top[data-v-034b1b21]{align-content:flex-start}.flex-wrap-middle[data-v-034b1b21]{align-content:center}.flex-wrap-bottom[data-v-034b1b21]{align-content:flex-end}.flex-wrap-between[data-v-034b1b21]{align-content:space-between}.flex-wrap-around[data-v-034b1b21]{align-content:space-around}.flex-first[data-v-034b1b21]{order:-1}.flex-last[data-v-034b1b21]{order:99}.flex-none[data-v-034b1b21]{flex:none}.flex-auto[data-v-034b1b21]{flex:auto}.flex-1[data-v-034b1b21]{flex:1}.hover-text[data-v-034b1b21]:hover{color:#ff875b}.expend-click[data-v-034b1b21]{position:relative}.expend-click[data-v-034b1b21]:after{content:"";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-034b1b21],[data-v-034b1b21]:after,[data-v-034b1b21]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-034b1b21],dd[data-v-034b1b21],dl[data-v-034b1b21],figure[data-v-034b1b21],form[data-v-034b1b21],h1[data-v-034b1b21],h2[data-v-034b1b21],h3[data-v-034b1b21],h4[data-v-034b1b21],h5[data-v-034b1b21],ol[data-v-034b1b21],p[data-v-034b1b21],ul[data-v-034b1b21]{margin:0;font-size:14px}button[data-v-034b1b21],input[data-v-034b1b21],ol[data-v-034b1b21],ul[data-v-034b1b21]{padding:0}li[data-v-034b1b21],ol[data-v-034b1b21],ul[data-v-034b1b21]{list-style:none;list-style-type:none}h1[data-v-034b1b21],h2[data-v-034b1b21],h3[data-v-034b1b21],h4[data-v-034b1b21],h5[data-v-034b1b21]{font-size:100%}input[data-v-034b1b21]{border:0;margin:0}img[data-v-034b1b21]{width:100%}a[data-v-034b1b21],button[data-v-034b1b21],img[data-v-034b1b21],input[data-v-034b1b21],optgroup[data-v-034b1b21],select[data-v-034b1b21],textarea[data-v-034b1b21]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-034b1b21],img[data-v-034b1b21]{-webkit-touch-callout:none;border:0}body[data-v-034b1b21],html[data-v-034b1b21]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-034b1b21],img[data-v-034b1b21],input[data-v-034b1b21],textarea[data-v-034b1b21]{vertical-align:middle;outline:none}body[data-v-034b1b21]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-034b1b21]{border-collapse:collapse;border-spacing:0}a[data-v-034b1b21],table[data-v-034b1b21]{color:#333}a[data-v-034b1b21],a[data-v-034b1b21]:hover{text-decoration:none}a[data-v-034b1b21]:hover{color:#ff512b}.scrollbar-self[data-v-034b1b21]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-034b1b21]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-034b1b21]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.goods-item[data-v-034b1b21]{width:228px;height:320px;cursor:pointer;background:#fff;transition:all .3s;padding:30px}.goods-item[data-v-034b1b21]:hover{box-shadow:0 4px 40px 1px rgba(0,0,0,.1);margin-top:-3px}.goods-item__img[data-v-034b1b21]{width:130px!important;height:130px;display:block;margin:0 auto 44px}.goods-item__title[data-v-034b1b21]{width:170px;height:45px;line-height:22px;margin-bottom:10px;font-size:14px;color:#333;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.goods-item__title[data-v-034b1b21],.goods-item__title-label[data-v-034b1b21]{font-family:Microsoft YaHei-Regular,Microsoft YaHei;font-weight:400}.goods-item__title-label[data-v-034b1b21]{display:inline-block;width:40px;height:18px;line-height:18px;background:#ff6a19;font-size:12px;color:#fff;text-align:center;margin-right:8px}.goods-item__price[data-v-034b1b21]{width:200px;margin:0 auto}.goods-item__price--txt[data-v-034b1b21]{font-size:16px;color:#ff512b}.goods-item__price--txt[data-v-034b1b21]:before{content:"￥";font-size:14px}',""]),t.exports=n},603:function(t,e,f){"use strict";f.r(e);var n=f(6),o=(f(47),f(135)),r={components:{UiGoodsItem:f(594).default},data:function(){return{pages:0,pageIndex:1,recommendedData:[]}},created:function(){this.getRecommendedGoodsList()},methods:{onRest:function(){this.pageIndex<this.pages?this.pageIndex++:this.pageIndex=1,this.getRecommendedGoodsList()},getRecommendedGoodsList:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var f,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f=t,e.next=3,Object(o.d)({length:20,pageIndex:f.pageIndex,name:"",categoryId:"",order:""});case 3:n=e.sent,f.recommendedData=n.result.records,f.pages=n.result.pages;case 6:case"end":return e.stop()}}),e)})))()}}},c=(f(605),f(14)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chosen"},[n("div",{staticClass:"chosen-title flex flex-between flex-middle"},[n("h3",{staticClass:"chosen-title--txt"},[t._v("为你精选")]),t._v(" "),n("div",{staticClass:"chosen-title--btn flex",on:{click:function(e){return t.onRest()}}},[n("img",{attrs:{src:f(604),alt:"切换推荐"}}),t._v(" "),n("span",[t._v("换一组")])])]),t._v(" "),n("div",{staticClass:"chosen-list"},t._l(t.recommendedData,(function(t){return n("UiGoodsItem",{key:t.id,attrs:{item:t}})})),1)])}),[],!1,null,"7f35ffa7",null);e.default=component.exports;installComponents(component,{UiGoodsItem:f(594).default})},604:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAApJJREFUSEvdlT9oE1Ecx7+/5AbpYscEIxhcFBw6ZHDQoaCgoENxUVRakN7L5QQbpKiDeEKHFgqxkKT3joKVCg46CBYc6uBQUHCoo4OgQ8ldwKGDFIfk/eSFu3L9Q5M0oaBvOu693+/zft/3ft9HOMRBh8jCvwPzPO8aMz/c3Ny8WCwWN9qpdODKSqXS4MDAwA8AgwBWfd8fdhynsR9wX5iU8iiAU0R0ZK8kzHwOwFQ491IIcbtrmJRylJnvElGunTQ75h0hxFP9T0pp+74v49Vuq6xSqaQMw3gNQO84Gr8B/OoUyswWEZ0EUGbmN0EQ3IiAW7DwDD5p2Zi5QURlvUEhxLdOQdG6UJkFIjIAbFW7BZNSvgJwHYCu5LIQYrVbSHy9lPI+gFm98WQymR0fH19vwSqVypBhGGv6Wyl11bKs5V5AOtZxHCOVSq0R0ZmouhZMSlkCMKGvsBDifK+gKN7zvAfMPB3ljWBfAOSIaMI0zbl+wVzXvURE7wH8FEJkI5huzhNKqWHLsj72C1atVi8kk8mVPWEARoQQb/sFiy7JNhld131HRFcATAshHvURpi/dEBFNmab5uCWj53n3mPkZMwdBEGQdx/nTK9B13TtEtKCvfrPZPG3b9vcWLG6qzOzm83mrF5jneTeVUou6qZl5Np/PT+p88aYeBbAYQrqSU/dUJpM5ppTKKaXGwiMBES3XarWRXXYV7zfd2NpJiGgltJyDFFr2fX8yfiS7nphqtXq2UCh81tnn5+fHEonE8y5I68z8odlsztm2/XVnXNvHU0r5RNtNGOgopV7sBa/X6+s9PZ4xF18CcAvARqPROG7btjbrrkfbyiJTTafTS0Q0Y5rmLnk6pXYE6zRZu3X/L+wv47YgK/BhS00AAAAASUVORK5CYII="},605:function(t,e,f){"use strict";f(597)},606:function(t,e,f){var n=f(22)(!1);n.push([t.i,'.flex[data-v-7f35ffa7]{display:flex}.flex-inline[data-v-7f35ffa7]{display:inline-flex}.flex-inline[data-v-7f35ffa7]:after,.flex-inline[data-v-7f35ffa7]:before,.flex[data-v-7f35ffa7]:after,.flex[data-v-7f35ffa7]:before{display:none}.flex-left[data-v-7f35ffa7]{justify-content:flex-start}.flex-center[data-v-7f35ffa7]{justify-content:center}.flex-right[data-v-7f35ffa7]{justify-content:flex-end}.flex-between[data-v-7f35ffa7]{justify-content:space-between}.flex-around[data-v-7f35ffa7]{justify-content:space-around}.flex-stretch[data-v-7f35ffa7]{align-items:stretch}.flex-top[data-v-7f35ffa7]{align-items:flex-start}.flex-middle[data-v-7f35ffa7]{align-items:center}.flex-bottom[data-v-7f35ffa7]{align-items:flex-end}.flex-baseline[data-v-7f35ffa7]{align-items:baseline}.flex-row[data-v-7f35ffa7]{flex-direction:row}.flex-row-reverse[data-v-7f35ffa7]{flex-direction:row-reverse}.flex-column[data-v-7f35ffa7]{flex-direction:column}.flex-column-reverse[data-v-7f35ffa7]{flex-direction:column-reverse}.flex-nowrap[data-v-7f35ffa7]{flex-wrap:nowrap}.flex-wrap[data-v-7f35ffa7]{flex-wrap:wrap}.flex-wrap-reverse[data-v-7f35ffa7]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-7f35ffa7]{align-content:stretch}.flex-wrap-top[data-v-7f35ffa7]{align-content:flex-start}.flex-wrap-middle[data-v-7f35ffa7]{align-content:center}.flex-wrap-bottom[data-v-7f35ffa7]{align-content:flex-end}.flex-wrap-between[data-v-7f35ffa7]{align-content:space-between}.flex-wrap-around[data-v-7f35ffa7]{align-content:space-around}.flex-first[data-v-7f35ffa7]{order:-1}.flex-last[data-v-7f35ffa7]{order:99}.flex-none[data-v-7f35ffa7]{flex:none}.flex-auto[data-v-7f35ffa7]{flex:auto}.flex-1[data-v-7f35ffa7]{flex:1}.hover-text[data-v-7f35ffa7]:hover{color:#ff875b}.expend-click[data-v-7f35ffa7]{position:relative}.expend-click[data-v-7f35ffa7]:after{content:"";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-7f35ffa7],[data-v-7f35ffa7]:after,[data-v-7f35ffa7]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-7f35ffa7],dd[data-v-7f35ffa7],dl[data-v-7f35ffa7],figure[data-v-7f35ffa7],form[data-v-7f35ffa7],h1[data-v-7f35ffa7],h2[data-v-7f35ffa7],h3[data-v-7f35ffa7],h4[data-v-7f35ffa7],h5[data-v-7f35ffa7],ol[data-v-7f35ffa7],p[data-v-7f35ffa7],ul[data-v-7f35ffa7]{margin:0;font-size:14px}button[data-v-7f35ffa7],input[data-v-7f35ffa7],ol[data-v-7f35ffa7],ul[data-v-7f35ffa7]{padding:0}li[data-v-7f35ffa7],ol[data-v-7f35ffa7],ul[data-v-7f35ffa7]{list-style:none;list-style-type:none}h1[data-v-7f35ffa7],h2[data-v-7f35ffa7],h3[data-v-7f35ffa7],h4[data-v-7f35ffa7],h5[data-v-7f35ffa7]{font-size:100%}input[data-v-7f35ffa7]{border:0;margin:0}img[data-v-7f35ffa7]{width:100%}a[data-v-7f35ffa7],button[data-v-7f35ffa7],img[data-v-7f35ffa7],input[data-v-7f35ffa7],optgroup[data-v-7f35ffa7],select[data-v-7f35ffa7],textarea[data-v-7f35ffa7]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-7f35ffa7],img[data-v-7f35ffa7]{-webkit-touch-callout:none;border:0}body[data-v-7f35ffa7],html[data-v-7f35ffa7]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-7f35ffa7],img[data-v-7f35ffa7],input[data-v-7f35ffa7],textarea[data-v-7f35ffa7]{vertical-align:middle;outline:none}body[data-v-7f35ffa7]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-7f35ffa7]{border-collapse:collapse;border-spacing:0}a[data-v-7f35ffa7],table[data-v-7f35ffa7]{color:#333}a[data-v-7f35ffa7],a[data-v-7f35ffa7]:hover{text-decoration:none}a[data-v-7f35ffa7]:hover{color:#ff512b}.scrollbar-self[data-v-7f35ffa7]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-7f35ffa7]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-7f35ffa7]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.chosen[data-v-7f35ffa7]{width:100%;padding:30px 0 40px;background:#f8f8f8}.chosen-title[data-v-7f35ffa7]{width:1200px;margin:0 auto}.chosen-title--txt[data-v-7f35ffa7]{font-size:24px;font-family:Microsoft YaHei-Bold,Microsoft YaHei;font-weight:700;color:#333}.chosen-title--btn[data-v-7f35ffa7]{width:140px;cursor:pointer}.chosen-title--btn img[data-v-7f35ffa7]{width:27px;height:27px;margin-right:5px}.chosen-title--btn span[data-v-7f35ffa7]{font-size:18px;font-family:Microsoft YaHei-Regular,Microsoft YaHei;font-weight:400;color:#999}.chosen-list[data-v-7f35ffa7]{width:1200px;margin:0 auto;padding-top:40px;display:grid;grid-template-columns:repeat(auto-fill,232px);justify-content:space-between;grid-row-gap:10px}',""]),t.exports=n},655:function(t,e,f){t.exports=f.p+"img/pay_success.e89156c.png"},760:function(t,e,f){var content=f(874);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,f(23).default)("4d69930a",content,!0,{sourceMap:!1})},873:function(t,e,f){"use strict";f(760)},874:function(t,e,f){var n=f(22)(!1);n.push([t.i,'.flex[data-v-1acfa98c]{display:flex}.flex-inline[data-v-1acfa98c]{display:inline-flex}.flex-inline[data-v-1acfa98c]:after,.flex-inline[data-v-1acfa98c]:before,.flex[data-v-1acfa98c]:after,.flex[data-v-1acfa98c]:before{display:none}.flex-left[data-v-1acfa98c]{justify-content:flex-start}.flex-center[data-v-1acfa98c]{justify-content:center}.flex-right[data-v-1acfa98c]{justify-content:flex-end}.flex-between[data-v-1acfa98c]{justify-content:space-between}.flex-around[data-v-1acfa98c]{justify-content:space-around}.flex-stretch[data-v-1acfa98c]{align-items:stretch}.flex-top[data-v-1acfa98c]{align-items:flex-start}.flex-middle[data-v-1acfa98c]{align-items:center}.flex-bottom[data-v-1acfa98c]{align-items:flex-end}.flex-baseline[data-v-1acfa98c]{align-items:baseline}.flex-row[data-v-1acfa98c]{flex-direction:row}.flex-row-reverse[data-v-1acfa98c]{flex-direction:row-reverse}.flex-column[data-v-1acfa98c]{flex-direction:column}.flex-column-reverse[data-v-1acfa98c]{flex-direction:column-reverse}.flex-nowrap[data-v-1acfa98c]{flex-wrap:nowrap}.flex-wrap[data-v-1acfa98c]{flex-wrap:wrap}.flex-wrap-reverse[data-v-1acfa98c]{flex-wrap:wrap-reverse}.flex-wrap-stretch[data-v-1acfa98c]{align-content:stretch}.flex-wrap-top[data-v-1acfa98c]{align-content:flex-start}.flex-wrap-middle[data-v-1acfa98c]{align-content:center}.flex-wrap-bottom[data-v-1acfa98c]{align-content:flex-end}.flex-wrap-between[data-v-1acfa98c]{align-content:space-between}.flex-wrap-around[data-v-1acfa98c]{align-content:space-around}.flex-first[data-v-1acfa98c]{order:-1}.flex-last[data-v-1acfa98c]{order:99}.flex-none[data-v-1acfa98c]{flex:none}.flex-auto[data-v-1acfa98c]{flex:auto}.flex-1[data-v-1acfa98c]{flex:1}.hover-text[data-v-1acfa98c]:hover{color:#ff875b}.expend-click[data-v-1acfa98c]{position:relative}.expend-click[data-v-1acfa98c]:after{content:"";position:absolute;left:-10px;top:-10px;right:-10px;bottom:-10px}*[data-v-1acfa98c],[data-v-1acfa98c]:after,[data-v-1acfa98c]:before{box-sizing:border-box;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}body[data-v-1acfa98c],dd[data-v-1acfa98c],dl[data-v-1acfa98c],figure[data-v-1acfa98c],form[data-v-1acfa98c],h1[data-v-1acfa98c],h2[data-v-1acfa98c],h3[data-v-1acfa98c],h4[data-v-1acfa98c],h5[data-v-1acfa98c],ol[data-v-1acfa98c],p[data-v-1acfa98c],ul[data-v-1acfa98c]{margin:0;font-size:14px}button[data-v-1acfa98c],input[data-v-1acfa98c],ol[data-v-1acfa98c],ul[data-v-1acfa98c]{padding:0}li[data-v-1acfa98c],ol[data-v-1acfa98c],ul[data-v-1acfa98c]{list-style:none;list-style-type:none}h1[data-v-1acfa98c],h2[data-v-1acfa98c],h3[data-v-1acfa98c],h4[data-v-1acfa98c],h5[data-v-1acfa98c]{font-size:100%}input[data-v-1acfa98c]{border:0;margin:0}img[data-v-1acfa98c]{width:100%}a[data-v-1acfa98c],button[data-v-1acfa98c],img[data-v-1acfa98c],input[data-v-1acfa98c],optgroup[data-v-1acfa98c],select[data-v-1acfa98c],textarea[data-v-1acfa98c]{outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a[data-v-1acfa98c],img[data-v-1acfa98c]{-webkit-touch-callout:none;border:0}body[data-v-1acfa98c],html[data-v-1acfa98c]{position:absolute;min-height:100%;height:100%;width:100%}button[data-v-1acfa98c],img[data-v-1acfa98c],input[data-v-1acfa98c],textarea[data-v-1acfa98c]{vertical-align:middle;outline:none}body[data-v-1acfa98c]{font-family:PingFang SC,Microsoft YaHei,Helvetica,STHeiTi,sans-serif!important;color:#333;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;overflow-anchor:none}table[data-v-1acfa98c]{border-collapse:collapse;border-spacing:0}a[data-v-1acfa98c],table[data-v-1acfa98c]{color:#333}a[data-v-1acfa98c],a[data-v-1acfa98c]:hover{text-decoration:none}a[data-v-1acfa98c]:hover{color:#ff512b}.scrollbar-self[data-v-1acfa98c]::-webkit-scrollbar{width:4px;background-color:none}.scrollbar-self[data-v-1acfa98c]::-webkit-scrollbar-track{background-color:none}.scrollbar-self[data-v-1acfa98c]::-webkit-scrollbar-thumb{background:#ddd;border-radius:10px}.main[data-v-1acfa98c]{width:1200px;margin:0 auto;text-align:center;padding:100px 0 40px}.icon[data-v-1acfa98c]{width:239px}b[data-v-1acfa98c]{display:block}p[data-v-1acfa98c]{margin:10px 0 25px;color:#999}button[data-v-1acfa98c]{margin:0 10px 30px}',""]),t.exports=n},906:function(t,e,f){"use strict";f.r(e);var n=f(92),o=(f(595),{components:{UiButton:n.default},data:function(){return{orderId:this.$route.query.orderId}},mounted:function(){},methods:{}}),r=(f(873),f(14)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"main"},[n("img",{staticClass:"icon",attrs:{src:f(655)}}),t._v(" "),n("p",[t._v("交易成功")]),t._v(" "),n("div",[n("UiButton",{attrs:{type:"grey",radius:!0},on:{click:function(e){return t.$router.replace("/")}}},[t._v("返回首页")]),t._v(" "),n("UiButton",{attrs:{type:"yellow_gradual",radius:!0},on:{click:function(e){return t.$router.replace("./comment?orderId="+t.orderId)}}},[t._v("去评价")])],1)]),t._v(" "),n("BsChosen",{staticClass:"chosen"})],1)}),[],!1,null,"1acfa98c",null);e.default=component.exports;installComponents(component,{UiButton:f(92).default,BsChosen:f(603).default})}}]);