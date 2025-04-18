<template>
  <div class="info-bar-header">
    <div
      class="info-bar-header-wrap layout-center flex flex-between flex-middle"
    >
      <div class="header-wrap__logo">马士兵严选欢迎你！</div>
      <div class="header-wrap__content flex flex-middle">
        <div class="header-wrap-content__login">
          <!-- 已登录 -->
          <el-dropdown
            v-if="token"
            @visible-change="menuVisible = $event"
            @command="handleCommandClick"
          >
            <div
              class="wrap-content-login__info flex flex-middle flex-center"
              :class="{ 'wrap-content-login__info--hover': menuVisible }"
            >
              <span>你好，{{ userInfo.nickname }}</span>
              <img class="content-login-info__logo" :src="menuIcon" />
            </div>
            <el-dropdown-menu slot="dropdown" class="header-info-bar__dropdown">
              <!-- <div class="menu-item__wrap flex flex-middle">
                <img class="menu-item-wrap__avatar" :src="userInfo.avatar" />
                <span>{{ userInfo.nickname }}</span>
              </div> -->
              <div class="menu-item__line"></div>
              <el-dropdown-item
                class="flex flex-between flex-middle"
                v-for="item in menuList"
                :key="item.value"
                :command="item.value"
              >
                <span> {{ item.label }}</span>
                <img src="~/assets/img/layout/icon-arrow.png" />
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- 未登录 -->
          <div v-else class="wrap-content-login__text flex">
            <span>请先</span>
            <span class="content-login-text--light" @click="onLoginClick">
              登录/注册
            </span>
          </div>
        </div>
        <template>
          <div v-if="!menuVisible" class="header-wrap-content--line"></div>
          <div
            class="header-wrap-content__common hover-text flex flex-middle"
            @click="onJumpPersonalPage('message')"
            @mouseenter="messageHover = true"
            @mouseleave="messageHover = false"
          >
            <img
              v-show="messageHover"
              src="~/assets/img/layout/icon-message-light.png"
            />
            <img
              v-show="!messageHover"
              src="~/assets/img/layout/icon-message.png"
            />
            <span>消息</span>
            <div
              v-if="unreadCount > 0"
              class="wrap-content-message__tip flex flex-center flex-middle"
              :class="{ 'wrap-content-message__tip--more': unreadCount > 9 }"
            >
              {{ unreadCount }}
            </div>
          </div>
        </template>
        <div class="header-wrap-content--line"></div>
        <div
          class="header-wrap-content__common hover-text flex flex-middle"
          @click="onJumpPersonalPage('order/list')"
          @mouseenter="orderHover = true"
          @mouseleave="orderHover = false"
        >
          <img
            v-show="orderHover"
            src="~/assets/img/layout/icon-order-light.png"
          />
          <img v-show="!orderHover" src="~/assets/img/layout/icon-order.png" />
          <span>我的订单</span>
        </div>
        <div class="header-wrap-content__common flex flex-middle down" 
          @click="$router.push('/down')">
            <img class="down--icon" src="~/assets/img/layout/icon-phone.png"/>
            <img class="down--icon__hover" src="~/assets/img/layout/icon-phone-light.png"/>
            <span>下载app</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import {Im, ImInit} from '@/plugins/chat'
const MENU_VALUE = {
  PERSONAL: 1,
  ADDRESS: 2,
  LOGON_OUT: 3,
};

export default {
  name: "HeaderInfoBar",
  data() {
    return {
      menuVisible: false,
      orderHover: false,
      messageHover: false,
      menuList: [
        {
          label: "个人中心",
          value: MENU_VALUE.PERSONAL,
        },
        {
          label: "收货地址",
          value: MENU_VALUE.ADDRESS,
        },
        {
          label: "退出登录",
          value: MENU_VALUE.LOGON_OUT,
        },
      ],
    };
  },
  computed: {
    ...mapState(["userInfo", "token", "unreadCount"]),
    menuIcon() {
      return this.menuVisible
        ? require("~/assets/img/layout/icon-up-light.png")
        : require("~/assets/img/layout/icon-up.png");
    },
  },
  mounted() {
    
    this.initSocket();
  },
  methods: {
    initSocket(){
      if(!this.userInfo.id){
        setTimeout(()=>{
          this.initSocket();
        },1000)
        return false;
      }
      // 初始化IM
			 ImInit().then(() => {
          // 获取到会话列表
          Im.getSessionList();
        }).catch(e => {});
    },
    onLoginClick() {
      this.$isLoginValidate();
    },
    handleCommandClick(event) {
      switch (event) {
        case MENU_VALUE.PERSONAL:
          window.open(`${location.origin}/account/home`);
          break;
        case MENU_VALUE.ADDRESS:
          window.open(`${location.origin}/account/address`);
          break;
        case MENU_VALUE.LOGON_OUT:
          this.$store.dispatch("logout");
          Im.close();
      }
    },

    // 跳转个人中心页面
    onJumpPersonalPage(path) {
      if (!this.$isLoginValidate()) {
        return;
      }
      window.open(`${location.origin}/account/${path}`);
    },
  },
};
</script>
<style lang="scss">
.header-info-bar__dropdown,
.header-info-bar__popover {
  .popper__arrow {
    display: none !important;
  }
}
.header-info-bar__popover {
  padding: 22px !important;
  margin-top: 8px !important;
}
</style>
<style lang="scss" scoped>
.header-info-bar__dropdown {
  width: 200px;
  margin-top: 0 !important;
  padding-bottom: 0;
  .el-dropdown-menu__item:hover {
    background: #f8f9fb;
    color: #666666;
  }
  .el-dropdown-menu__item {
    height: 42px;
    font-size: 14px;
    img {
      width: 6px;
      height: 12px;
    }
  }
  .menu-item__wrap {
    padding: 16px 24px;
    font-size: 14px;
    .menu-item-wrap__avatar {
      width: 50px;
      height: 50px;
      margin-right: 13px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .menu-item__line {
    width: 100%;
    height: 1px;
    background: #eeeeee;
    border-radius: 0px 0px 0px 0px;
  }
}
.header-info-bar__popover {
  .info-bar-popover__qrcode {
    font-size: 14px;
    color: #666666;
    text-align: center;
    width: 186px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 186px;
      margin-bottom: 15px;
    }
  }
}
.info-bar-header {
  height: 40px;
  color: #969696;
  background: #333333;
  font-size: 12px;
  .info-bar-header-wrap {
    height: 100%;
    @include layout-box;
    .header-wrap__content {
      .header-wrap-content__login {
        .wrap-content-login__text {
          padding: 0 18px;
          .content-login-text--light {
            margin-left: 6px;
            color: #969696;
            cursor: pointer;
          }
        }
        .wrap-content-login__info {
          position: relative;
          padding: 0 18px;
          height: 30px;
          font-size: 12px;
          color: #999999;
          cursor: pointer;
          .content-login-info__logo {
            width: 8px;
            height: 4px;
            margin-left: 4px;
          }
        }
        .wrap-content-login__info--hover {
          background: #ffffff;
          color: #ff875b;
        }
      }
      .wrap-content-message__tip {
        width: 14px;
        height: 14px;
        font-size: 10px;
        color: #ffffff;
        background: #ff512b;
        border-radius: 50%;
        margin-left: 4px;
        &--more {
          width: unset;
          padding: 0 3px;
          border-radius: 7px;
        }
      }
      .header-wrap-content--line {
        width: 1px;
        height: 10px;
        background: #969696;
      }
      .header-wrap-content__common {
        cursor: pointer;
        padding: 0 18px;
        .wrap-content-common--light {
          color: #ff875b;
        }
        img {
          width: 14px;
          height: 14px;
          margin-right: 4px;
        }
      }
      .down{
        background:#474747;
        padding: 0 10px;
        height: 26px;
        display: flex;
        align-items: center;
        border-radius: 4px;
        .down--icon__hover{
          display: none;
        }
        &:hover{
          color: #ff875b;
          .down--icon{
            display: none;
          }
          .down--icon__hover{
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>
