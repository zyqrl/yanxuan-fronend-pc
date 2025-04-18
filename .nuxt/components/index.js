export const BsAddress = () => import('../../components/BsAddress.vue' /* webpackChunkName: "components/bs-address" */).then(c => wrapFunctional(c.default || c))
export const BsCancelOrder = () => import('../../components/BsCancelOrder.vue' /* webpackChunkName: "components/bs-cancel-order" */).then(c => wrapFunctional(c.default || c))
export const BsChosen = () => import('../../components/BsChosen.vue' /* webpackChunkName: "components/bs-chosen" */).then(c => wrapFunctional(c.default || c))
export const BsCommentFollowInfo = () => import('../../components/BsCommentFollowInfo.vue' /* webpackChunkName: "components/bs-comment-follow-info" */).then(c => wrapFunctional(c.default || c))
export const BsCommentInfo = () => import('../../components/BsCommentInfo.vue' /* webpackChunkName: "components/bs-comment-info" */).then(c => wrapFunctional(c.default || c))
export const BsCommentSubmit = () => import('../../components/BsCommentSubmit.vue' /* webpackChunkName: "components/bs-comment-submit" */).then(c => wrapFunctional(c.default || c))
export const BsLogin = () => import('../../components/BsLogin.vue' /* webpackChunkName: "components/bs-login" */).then(c => wrapFunctional(c.default || c))
export const BsPay = () => import('../../components/BsPay.vue' /* webpackChunkName: "components/bs-pay" */).then(c => wrapFunctional(c.default || c))
export const UIGoodsInfo = () => import('../../components/UIGoodsInfo.vue' /* webpackChunkName: "components/u-i-goods-info" */).then(c => wrapFunctional(c.default || c))
export const UiButton = () => import('../../components/UiButton.vue' /* webpackChunkName: "components/ui-button" */).then(c => wrapFunctional(c.default || c))
export const UiConfirm = () => import('../../components/UiConfirm.vue' /* webpackChunkName: "components/ui-confirm" */).then(c => wrapFunctional(c.default || c))
export const UiDialog = () => import('../../components/UiDialog.vue' /* webpackChunkName: "components/ui-dialog" */).then(c => wrapFunctional(c.default || c))
export const UiEmpty = () => import('../../components/UiEmpty.vue' /* webpackChunkName: "components/ui-empty" */).then(c => wrapFunctional(c.default || c))
export const UiGoodsItem = () => import('../../components/UiGoodsItem.vue' /* webpackChunkName: "components/ui-goods-item" */).then(c => wrapFunctional(c.default || c))
export const UiImgs = () => import('../../components/UiImgs.vue' /* webpackChunkName: "components/ui-imgs" */).then(c => wrapFunctional(c.default || c))
export const UiLineBox = () => import('../../components/UiLineBox.vue' /* webpackChunkName: "components/ui-line-box" */).then(c => wrapFunctional(c.default || c))
export const UiLoading = () => import('../../components/UiLoading.vue' /* webpackChunkName: "components/ui-loading" */).then(c => wrapFunctional(c.default || c))
export const UiMoney = () => import('../../components/UiMoney.vue' /* webpackChunkName: "components/ui-money" */).then(c => wrapFunctional(c.default || c))
export const UiPagination = () => import('../../components/UiPagination.vue' /* webpackChunkName: "components/ui-pagination" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
