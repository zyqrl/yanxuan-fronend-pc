import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1f4c28cf = () => interopDefault(import('../pages/account/index.vue' /* webpackChunkName: "pages/account/index" */))
const _d0f03f98 = () => interopDefault(import('../pages/account/index/address.vue' /* webpackChunkName: "pages/account/index/address" */))
const _bd2f36dc = () => interopDefault(import('../pages/account/index/home/index.vue' /* webpackChunkName: "pages/account/index/home/index" */))
const _94d5fa72 = () => interopDefault(import('../pages/account/index/message.vue' /* webpackChunkName: "pages/account/index/message" */))
const _29292e89 = () => interopDefault(import('../pages/account/index/userInfo.vue' /* webpackChunkName: "pages/account/index/userInfo" */))
const _9f46ebb6 = () => interopDefault(import('../pages/account/index/order/detail/index.vue' /* webpackChunkName: "pages/account/index/order/detail/index" */))
const _bd3cdf1c = () => interopDefault(import('../pages/account/index/order/list/index.vue' /* webpackChunkName: "pages/account/index/order/list/index" */))
const _6a6a6e84 = () => interopDefault(import('../pages/account/index/home/module/LogisitcsInfo.vue' /* webpackChunkName: "pages/account/index/home/module/LogisitcsInfo" */))
const _84c52a98 = () => interopDefault(import('../pages/account/index/home/module/Message.vue' /* webpackChunkName: "pages/account/index/home/module/Message" */))
const _5685f25c = () => interopDefault(import('../pages/account/index/order/saleAfter/detail.vue' /* webpackChunkName: "pages/account/index/order/saleAfter/detail" */))
const _503a062e = () => interopDefault(import('../pages/account/index/order/saleAfter/list.vue' /* webpackChunkName: "pages/account/index/order/saleAfter/list" */))
const _41f1889e = () => interopDefault(import('../pages/account/index/order/detail/module/GoodsInfo.vue' /* webpackChunkName: "pages/account/index/order/detail/module/GoodsInfo" */))
const _9e6bdede = () => interopDefault(import('../pages/account/index/order/detail/module/LogisitcsInfo.vue' /* webpackChunkName: "pages/account/index/order/detail/module/LogisitcsInfo" */))
const _1d594894 = () => interopDefault(import('../pages/account/index/order/detail/module/StatusInfo.vue' /* webpackChunkName: "pages/account/index/order/detail/module/StatusInfo" */))
const _3bddbed4 = () => interopDefault(import('../pages/account/index/order/detail/module/StatusStep.vue' /* webpackChunkName: "pages/account/index/order/detail/module/StatusStep" */))
const _18b005e2 = () => interopDefault(import('../pages/account/index/order/list/module/Tab.vue' /* webpackChunkName: "pages/account/index/order/list/module/Tab" */))
const _10351bd4 = () => interopDefault(import('../pages/cart/index.vue' /* webpackChunkName: "pages/cart/index" */))
const _b34d6a54 = () => interopDefault(import('../pages/down/index.vue' /* webpackChunkName: "pages/down/index" */))
const _00287a18 = () => interopDefault(import('../pages/index/index.vue' /* webpackChunkName: "pages/index/index" */))
const _223d2b51 = () => interopDefault(import('../pages/seckill/index.vue' /* webpackChunkName: "pages/seckill/index" */))
const _70d47c1f = () => interopDefault(import('../pages/account/comment/index.vue' /* webpackChunkName: "pages/account/comment/index" */))
const _7160d712 = () => interopDefault(import('../pages/account/tradeSuccess.vue' /* webpackChunkName: "pages/account/tradeSuccess" */))
const _de9f6e2a = () => interopDefault(import('../pages/goods/list/index.vue' /* webpackChunkName: "pages/goods/list/index" */))
const _ee22bffa = () => interopDefault(import('../pages/order/payResult.vue' /* webpackChunkName: "pages/order/payResult" */))
const _3ef0626d = () => interopDefault(import('../pages/order/submit/index.vue' /* webpackChunkName: "pages/order/submit/index" */))
const _30edf990 = () => interopDefault(import('../pages/account/comment/success.vue' /* webpackChunkName: "pages/account/comment/success" */))
const _d2b7841e = () => interopDefault(import('../pages/index/module/Banner.vue' /* webpackChunkName: "pages/index/module/Banner" */))
const _a51738b4 = () => interopDefault(import('../pages/index/module/Pick.vue' /* webpackChunkName: "pages/index/module/Pick" */))
const _2849adba = () => interopDefault(import('../pages/index/module/Seckill.vue' /* webpackChunkName: "pages/index/module/Seckill" */))
const _5a622341 = () => interopDefault(import('../pages/index/module/TabbarFixed.vue' /* webpackChunkName: "pages/index/module/TabbarFixed" */))
const _39a1647e = () => interopDefault(import('../pages/seckill/module/DialogEnd.vue' /* webpackChunkName: "pages/seckill/module/DialogEnd" */))
const _9bbf7d40 = () => interopDefault(import('../pages/seckill/module/TabBar.vue' /* webpackChunkName: "pages/seckill/module/TabBar" */))
const _3be04ec0 = () => interopDefault(import('../pages/goods/detail/module/Comment.vue' /* webpackChunkName: "pages/goods/detail/module/Comment" */))
const _3094e0e7 = () => interopDefault(import('../pages/goods/detail/module/HeaderBar.vue' /* webpackChunkName: "pages/goods/detail/module/HeaderBar" */))
const _7f669fe6 = () => interopDefault(import('../pages/goods/list/module/SortItem.vue' /* webpackChunkName: "pages/goods/list/module/SortItem" */))
const _0f82af96 = () => interopDefault(import('../pages/order/submit/module/Amount.vue' /* webpackChunkName: "pages/order/submit/module/Amount" */))
const _10d4598e = () => interopDefault(import('../pages/order/submit/module/Message.vue' /* webpackChunkName: "pages/order/submit/module/Message" */))
const _7c5bab4e = () => interopDefault(import('../pages/order/submit/module/OrderInfo.vue' /* webpackChunkName: "pages/order/submit/module/OrderInfo" */))
const _44af8a46 = () => interopDefault(import('../pages/goods/detail/_id.vue' /* webpackChunkName: "pages/goods/detail/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _1f4c28cf,
    name: "account",
    children: [{
      path: "address",
      component: _d0f03f98,
      name: "account-index-address"
    }, {
      path: "home",
      component: _bd2f36dc,
      name: "account-index-home"
    }, {
      path: "message",
      component: _94d5fa72,
      name: "account-index-message"
    }, {
      path: "userInfo",
      component: _29292e89,
      name: "account-index-userInfo"
    }, {
      path: "order/detail",
      component: _9f46ebb6,
      name: "account-index-order-detail"
    }, {
      path: "order/list",
      component: _bd3cdf1c,
      name: "account-index-order-list"
    }, {
      path: "home/module/LogisitcsInfo",
      component: _6a6a6e84,
      name: "account-index-home-module-LogisitcsInfo"
    }, {
      path: "home/module/Message",
      component: _84c52a98,
      name: "account-index-home-module-Message"
    }, {
      path: "order/saleAfter/detail",
      component: _5685f25c,
      name: "account-index-order-saleAfter-detail"
    }, {
      path: "order/saleAfter/list",
      component: _503a062e,
      name: "account-index-order-saleAfter-list"
    }, {
      path: "order/detail/module/GoodsInfo",
      component: _41f1889e,
      name: "account-index-order-detail-module-GoodsInfo"
    }, {
      path: "order/detail/module/LogisitcsInfo",
      component: _9e6bdede,
      name: "account-index-order-detail-module-LogisitcsInfo"
    }, {
      path: "order/detail/module/StatusInfo",
      component: _1d594894,
      name: "account-index-order-detail-module-StatusInfo"
    }, {
      path: "order/detail/module/StatusStep",
      component: _3bddbed4,
      name: "account-index-order-detail-module-StatusStep"
    }, {
      path: "order/list/module/Tab",
      component: _18b005e2,
      name: "account-index-order-list-module-Tab"
    }]
  }, {
    path: "/cart",
    component: _10351bd4,
    name: "cart"
  }, {
    path: "/down",
    component: _b34d6a54,
    name: "down"
  }, {
    path: "/index",
    component: _00287a18,
    name: "index"
  }, {
    path: "/seckill",
    component: _223d2b51,
    name: "seckill"
  }, {
    path: "/account/comment",
    component: _70d47c1f,
    name: "account-comment"
  }, {
    path: "/account/tradeSuccess",
    component: _7160d712,
    name: "account-tradeSuccess"
  }, {
    path: "/goods/list",
    component: _de9f6e2a,
    name: "goods-list"
  }, {
    path: "/order/payResult",
    component: _ee22bffa,
    name: "order-payResult"
  }, {
    path: "/order/submit",
    component: _3ef0626d,
    name: "order-submit"
  }, {
    path: "/account/comment/success",
    component: _30edf990,
    name: "account-comment-success"
  }, {
    path: "/index/module/Banner",
    component: _d2b7841e,
    name: "index-module-Banner"
  }, {
    path: "/index/module/Pick",
    component: _a51738b4,
    name: "index-module-Pick"
  }, {
    path: "/index/module/Seckill",
    component: _2849adba,
    name: "index-module-Seckill"
  }, {
    path: "/index/module/TabbarFixed",
    component: _5a622341,
    name: "index-module-TabbarFixed"
  }, {
    path: "/seckill/module/DialogEnd",
    component: _39a1647e,
    name: "seckill-module-DialogEnd"
  }, {
    path: "/seckill/module/TabBar",
    component: _9bbf7d40,
    name: "seckill-module-TabBar"
  }, {
    path: "/goods/detail/module/Comment",
    component: _3be04ec0,
    name: "goods-detail-module-Comment"
  }, {
    path: "/goods/detail/module/HeaderBar",
    component: _3094e0e7,
    name: "goods-detail-module-HeaderBar"
  }, {
    path: "/goods/list/module/SortItem",
    component: _7f669fe6,
    name: "goods-list-module-SortItem"
  }, {
    path: "/order/submit/module/Amount",
    component: _0f82af96,
    name: "order-submit-module-Amount"
  }, {
    path: "/order/submit/module/Message",
    component: _10d4598e,
    name: "order-submit-module-Message"
  }, {
    path: "/order/submit/module/OrderInfo",
    component: _7c5bab4e,
    name: "order-submit-module-OrderInfo"
  }, {
    path: "/goods/detail/:id?",
    component: _44af8a46,
    name: "goods-detail-id"
  }, {
    path: "/",
    component: _00287a18,
    name: "custom"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
