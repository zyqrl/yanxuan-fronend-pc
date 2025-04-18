<!--
 * @Author: ch
 * @Date: 2022-05-08 17:48:36
 * @LastEditors: ch
 * @LastEditTime: 2022-05-16 17:45:46
 * @Description: file content
-->
<template>
<div>
  <div class="account flex">
    <div class="account-nav-wrap flex flex-column flex-center flex-middle">
      <ul
        v-for="(item, index) in navTabs"
        :key="index"
        class="account-nav-wrap__ul"
      >
        <div class="nav-wrap-ul__title">{{ item.label }}</div>
        <li
          class="nav-wrap-ul__li"
          :class="{ 'nav-wrap-ul__li--light': itemChild.value === $route.path }"
          v-for="itemChild in item.list"
          :key="itemChild.value"
        >
          <nuxt-link :to="itemChild.value"> {{ itemChild.label }}</nuxt-link>
        </li>
      </ul>
    </div>
    <nuxt-child class="account-main-wrap" />
  </div>

    <BsChosen v-if="showChosenPage.includes($route.path)"/>
    </div>
</template>
<script>
import BsChosen from '../../components/BsChosen.vue';
export default {
	components: { BsChosen },
  name: "Account",
  data() {
    return {
      navTabs: [
        {
          label: "个人中心",
          list: [
            { label: "我的主页", value: "/account/home" },
            { label: "消息通知", value: "/account/message" },
          ],
        },
        {
          label: "订单中心",
          list: [
            { label: "我的订单", value: "/account/order/list" },
            { label: "售后订单", value: "/account/order/saleAfter/list" },
          ],
        },
        {
          label: "账户管理",
          list: [
            { label: "个人资料", value: "/account/userInfo" },
            { label: "收货地址", value: "/account/address" },
          ],
        },
      ],
      showChosenPage : ['/account/order/list','/account/order/detail']
    };
  },
  mounted(){
    console.log(this.$route);
    // 
  }
};
</script>
<style lang="scss" scoped>
.account {
  @include layout-box;
  padding: 40px 0;
  background: #ffffff;
  .account-nav-wrap {
    width: 170px;
    height: 402px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 30px;
    font-size: 14px;
    .account-nav-wrap__ul {
      &:last-child {
        margin-bottom: 0;
      }
      margin-bottom: 30px;
      .nav-wrap-ul__title {
        font-size: 16px;
        color: #333333;
        margin-bottom: 12px;
      }
      .nav-wrap-ul__li--light {
        a {
          color: #ff875b !important;
        }
      }
      .nav-wrap-ul__li {
        margin-bottom: 14px;
        a {
          color: #666666;
        }
        cursor: pointer;
        &:hover {
          a {
            color: #ff875b;
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  &--main {
    flex: 1;
  }
}
</style>
