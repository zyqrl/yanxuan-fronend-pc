<template>
  <div
    v-if="tabBarVisible"
    class="home-tabbar-fixed flex"
    :style="tabBarStyle"
  >
    <!-- <div v-show="appHover" class="home-tabbar-fixed__qrcode">
      <img src="~/assets/img/common/app-qrcode.png" />
      <p>扫一扫上方二维码 下载APP</p>
    </div> -->
    <div
      class="home-tabbar-fixed__box flex flex-column flex-middle"
      :class="{ 'home-tabbar-fixed__box--height-short': !showToTop }"
    >
      <div
        @mouseenter="appHover = true"
        @mouseleave="appHover = false"
        @click="$router.push('/down')"
        class="tabbar-fixed-box__common flex flex-middle"
      >
        <span v-show="appHover">下载APP</span>
        <img v-show="!appHover" src="~/assets/img/home/icon-app.png" />
      </div>
      <div class="tabbar-fixed-box__line"></div>
      <div
        @mouseenter="messageHover = true"
        @mouseleave="messageHover = false"
        @click="onOpenMessagePage"
        class="tabbar-fixed-box__common flex flex-middle"
      >
        <span v-show="messageHover">消息通知</span>
        <img v-show="!messageHover" src="~/assets/img/home/icon-message.png" />
      </div>
      <div v-show="showToTop">
        <div class="tabbar-fixed-box__line"></div>
        <div
          @mouseenter="totopHover = true"
          @mouseleave="totopHover = false"
          @click="toPageTop"
          class="tabbar-fixed-box__common flex flex-middle"
        >
          <img
            v-show="totopHover"
            src="~/assets/img/home/icon-totop-light.png"
          />
          <img v-show="!totopHover" src="~/assets/img/home/icon-totop.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeTabbarFixed",
  props: {
    scrollTop: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      appHover: false,
      messageHover: false,
      totopHover: false,
      tabBarVisible: false,
      tabBarStyle: null,
    };
  },
  computed: {
    showToTop() {
      return this.scrollTop > 400;
    },
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
        top: `${(TOP / NORMAL_HEIGHT) * clientHeight}px`,
      };
    },
    onOpenMessagePage() {
      if (!this.$isLoginValidate()) {
        return;
      }
      window.open(`${location.origin}/account/message`);
    },
    toPageTop() {
      document.querySelector("body").scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
<style lang="scss" scoped>
.home-tabbar-fixed {
  position: fixed;
  z-index: 99;
  left: 50%;
  margin-left: 630px;
  border: 1px solid #f8f8f8;
  &--change {
    margin-left: 390px;
  }
  .home-tabbar-fixed__qrcode {
    width: 230px;
    height: 260px;
    background: #ffffff;
    box-shadow: 0px 4px 30px 1px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    color: #666666;
    padding: 22px 20px;
    margin-right: 10px;
    img {
      width: 186px;
      height: 186px;
      margin-bottom: 14px;
    }
  }
  .home-tabbar-fixed__box {
    width: 60px;
    height: 180px;
    background: #ffffff;
    border-radius: 2px;
    &--height-short {
      height: 120px;
    }
    .tabbar-fixed-box__common {
      height: 60px;
      padding: 0 15px;
      cursor: pointer;
      font-size: 14px;
      color: #ff875b;
      img {
        width: 22px;
        height: 22px;
      }
    }
    .tabbar-fixed-box__line {
      width: 30px;
      height: 1px;
      background: #eeeeee;
      margin: 0 auto;
    }
  }
}
</style>
