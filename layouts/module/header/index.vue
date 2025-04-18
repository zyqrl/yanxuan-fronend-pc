<template>
  <div class="layout-header">
    <!-- 滚动吸顶头部 -->
    <div v-show="isSticky">
      <div
        class="sticky-bar-header"
        :class="{ 'sticky-bar-header--hide-shadow': hideBarShadow }"
      >
        <div class="sticky-bar-header__wrap flex flex-middle flex-between">
          <div class="flex flex-middle">
            <div class="bar-header-wrap__logo" @click="onOpenHomePage">
              <img src="~/assets/img/layout/logo-sticky.png" />
            </div>
            <HeaderCategory />
            <div class="header-box-wrap__right flex flex-middle">
              <div class="box-wrap-right__search flex">
                <div class="search-input">
                  <el-input
                    ref="searchInput"
                    v-model="searchContent"
                    clearable
                    placeholder="请输入商品名称"
                    @keyup.enter.native="onSearch"
                  >
                    <img
                      slot="suffix"
                      class="search-icon"
                      src="~/assets/img/layout/icon-search.png"
                    />
                  </el-input>
                </div>
              </div>
              <!-- 购物车 -->
              <HeaderCart />
            </div>
          </div>
        </div>
      </div>
    </div>
    <template>
      <HeaderInfoBar />
      <div class="default-bar-header">
        <div class="bar-header-box">
          <div class="bar-header-box__wrap flex flex-middle">
            <div class="header-box-wrap__logo" @click="onOpenHomePage">
              <img src="~/assets/img/layout/logo.png" />
            </div>
            <HeaderCategory />
            <div class="header-box-wrap__right flex flex-middle">
              <div class="box-wrap-right__search flex">
                <div class="search-input">
                  <el-input
                    ref="searchInput"
                    v-model="searchContent"
                    clearable
                    placeholder="请输入商品名称"
                    @keyup.enter.native="onSearch"
                  >
                    <img
                      slot="suffix"
                      class="search-icon"
                      src="~/assets/img/layout/icon-search.png"
                    />
                  </el-input>
                </div>
              </div>
              <!-- 购物车 -->
              <HeaderCart />
            </div>
          </div>
        </div>
      </div>
      <div v-if="!hideBarLine" class="layout-header-line"></div>
    </template>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { CATEGROY_LEVEL } from "@/constants";
import { ApiGetHomeSeckill } from "@/plugins/api/seckill";
import HeaderInfoBar from "./HeaderInfoBar.vue";
import HeaderCategory from "./HeaderCategory.vue";
import HeaderCart from "./HeaderCart.vue";

export default {
  name: "DefaultHeader",
  components: { HeaderInfoBar, HeaderCategory, HeaderCart },
  props: {
    // 是否置顶
    isSticky: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      searchContent: "",
      tabPath: "/",
      cartProductList: [], // 购物车列表
    };
  },
  computed: {
    ...mapState(["userInfo", "token", "seckillTabVisible", "cartProducts"]),
    cartCount() {
      return this.cartProducts.length;
    },
    tabList() {
      const defaultList = [
        { label: "首页", value: "/" },
        {
          label: "开发书籍",
          value: `/goods/list?id=6&levelType=${CATEGROY_LEVEL.ONE}`,
        },
      ];
      if (this.seckillTabVisible) {
        return [...defaultList, { label: "限时秒杀", value: "/seckill" }];
      }
      return defaultList;
    },

    // 是否隐藏吸顶tab底部阴影
    hideBarShadow() {
      return ["/seckill"].includes(this.$route.path);
    },

    // 是否隐藏底部黄色边框
    hideBarLine() {
      return ["/", "/seckill"].includes(this.$route.path);
    },
  },
  watch: {
    "$route.path"(val) {
      if (val !== "/goods/list") {
        this.searchContent = "";
      }
    },
  },
  created() {
    this.getSeckillData();
  },
  methods: {
    onEnterSearch() {
      document.querySelector("body").scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        this.$refs.searchInput.focus();
      }, 500);
    },
    async getSeckillData() {
      const { result } = await ApiGetHomeSeckill();
      if (result && result.activityTimeVO) {
        this.$store.commit("setSeckillTabVisible", true);
      }
    },
    onLoginClick() {
      this.$isLoginValidate();
    },
    onTabSelect(value) {
      this.tabPath = value;
      this.searchContent = "";
      window.open(`${location.origin}${value}`);
    },
    onSearch() {
      this.$router.push({
        path: "/goods/list",
        query: {
          keyword: this.searchContent,
        },
      });
    },
    onOpenCartPage() {
      if (!this.$isLoginValidate()) {
        return;
      }
      window.open(`${location.origin}/cart`);
    },
    onOpenHomePage() {
      if (this.$route.path === "/") {
        return;
      }
      window.open(`${location.origin}/`);
    },
  },
};
</script>
<style lang="scss" scoped>
.sticky-bar-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 10;
  background: #ffffff;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);

  &--hide-shadow {
    box-shadow: none;
    /deep/.el-menu {
      .is-active {
        border-bottom: none !important;
      }
    }
  }
  .sticky-bar-header__wrap {
    @include layout-box;
    height: 100%;
    > div {
      height: 100%;
      width: 100%;
    }
    .bar-header-wrap__logo {
      width: 160px;
      height: 40px;
      margin-right: 20px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .bar-header-wrap__icons {
      cursor: pointer;
      img {
        width: 24px;
        height: 24px;
      }
      .header-wrap-icons__shop {
        position: relative;
        margin-left: 20px;
        .wrap-icons-shop__tip {
          position: absolute;
          left: 18px;
          top: -4px;
          height: 14px;
          width: 14px;
          background: #ff512b;
          font-size: 10px;
          color: #ffffff;
          border-radius: 50%;
          &--more {
            width: unset;
            padding: 0 3px;
            border-radius: 7px;
          }
        }
      }
      .header-wrap-icons__login {
        margin-left: 47px;
        img {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      .header-wrap-icons__unlogin {
        font-size: 16px;
        color: #909399;
        margin-left: 30px;
      }
    }
    /deep/ .el-menu {
      height: 50px;
      color: #666666;
      .is-active {
        color: #ff7f39;
        border-bottom: 3px solid #ff823c;
      }
      .el-menu-item:hover {
        color: #ff7f39;
      }
      .el-menu-item {
        height: 100%;
        line-height: 50px;
        font-size: 16px;
        margin: 0 30px;
        padding: 0 5px;
      }
    }

    /deep/.tab-category-menu__right {
      top: 70px!important;
    }
  }
}
.header-box-wrap__right {
  margin-left: auto;
  .box-wrap-right__search {
    margin-right: 23px;
    .search-input {
      width: 240px;
      z-index: 1;
      border-radius: 4px;

      /deep/.el-input__suffix {
        display: flex;
        align-items: center;
        // margin-right: 16px;
      }
      .search-icon {
        width: 32px;
        height: 16px;
        padding-right: 16px;
        // margin-right: 16px;
        // margin-top: 12px;
      }
    }
  }
}

.default-bar-header {
  position: relative;
  z-index: 3;
  .bar-header-box {
    @include layout-box;
    background: #ffffff;
    .bar-header-box__wrap {
      height: 90px;
      font-size: 14px;
      cursor: pointer;
      .header-box-wrap__logo {
        width: 198px;
        height: 50px;
      }
    }
    .bar-header-box__tab {
      height: 38px;
      .header-box-tab__common--light {
        color: #ff7f39 !important;
      }
      .header-box-tab__common {
        margin-left: 78px;
        height: 100%;
        font-size: 16px;
        color: #666666;
        cursor: pointer;
        &:hover {
          color: #ff875b;
        }
      }
    }
  }
}
.layout-header-line {
  width: 100%;
  height: 2px;
  background: #ff875b;
}
</style>
