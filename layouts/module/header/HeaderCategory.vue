<template>
  <div class="header-category">
    <!-- 热门分类 -->
    <div
      class="header-box-tab__category"
      @mouseenter="handleCategoryChange(true)"
      @mouseleave="handleCategoryChange(false)"
    >
      <!-- <div class="tab-category__label flex flex-middle">
        <img src="~/assets/img/layout/icon-category.png" />
        <span>热门分类</span>
      </div> -->
      <div
        class="tab-category__menu"
        @mouseenter="handleCategoryTwoChange(true)"
        @mouseleave="handleCategoryTwoChange(false)"
      >
        <!-- 左侧一级分类 -->
        <div class="tab-category-menu__left flex flex-between flex-middle">
          <div
            v-for="item in categroyData"
            :key="item.id"
            @mouseenter="handleCategoryHover(item.id)"
            @click="onCategoryClick(item.id, CATEGROY_LEVEL.ONE)"
            class="menu-left__item flex flex-middle"
            :class="{
              'menu-left__item--light': item.id === currentCategroyId,
            }"
          >
            <span>{{ item.name }}</span>
            <div class="menu-left__item--bottom"></div>
            <!-- 右侧二级分类 -->
            <div class="tab-category-menu__right flex-1 flex-wrap flex-between">
              <div
                v-for="itemList in getList(item.id)"
                :key="itemList.id"
                class="menu-right-wrap__item"
                @click="onCategoryClick(itemList.id, CATEGROY_LEVEL.TWO)"
              >
                <img :src="itemList.picture" alt="商品分类" />
                {{ itemList.name }}
              </div>
              <!-- <div
                v-for="item in list"
                :key="item.id"
                @mouseenter="handleCategoryHover(item.id)"
                class="category-menu-right__wrap"
                v-show="item.id === currentCategroyId"
              ></div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { ApiGetCategoryTwoAndGoods } from "@/plugins/api/goods";
import { CATEGROY_LEVEL } from "@/constants";
const CATEGROY_HIDE_PAGES = [/\/account/]; // 隐藏热门分类tab的页面

export default {
  name: "HeaderCategory",
  data() {
    return {
      CATEGROY_LEVEL,
      categroyTwoVisible: false, // 是否展示二级分类
      categroyVisible: true, // 是否展示一级分类
      currentCategroyId: 0, // 当前鼠标悬停的一级分类id
      list: [],
    };
  },
  computed: {
    ...mapState(["categroyData"]),
    showCategroyTab() {
      return !CATEGROY_HIDE_PAGES.some((reg) => {
        return reg.test(this.$route.path);
      });
    },

    // 热门分类默认打开
    isCategroyOpen() {
      return this.$route.path === "/";
    },
  },
  watch: {
    categroyData: {
      immediate: true,
      handler(val) {
        if (val.length > 0) {
          this.getCategroyData();
        }
      },
    },
  },
  methods: {
    getList(id) {
      let list = this.list.filter((item) => item && item.id == id);
      // console.log(`list[0]?.list`, list[0]?.list);
      return list[0]?.list || [];
    },
    // 获取热门分类信息
    async getCategroyData() {
      this.list = await Promise.all(
        this.categroyData.map(async (item) => {
          const { result: resultGoods } = await ApiGetCategoryTwoAndGoods({
            categoryId: item.id,
          });
          if (resultGoods && resultGoods.length > 0) {
            return {
              ...item,
              list: resultGoods,
            };
          }
        })
      );
    },
    // 一级分类鼠标悬停
    handleCategoryHover(id) {
      this.currentCategroyId = id;
    },
    // 分类点击
    onCategoryClick(id, levelType) {
      this.categroyVisible = false;
      this.categroyTwoVisible = false;
      window.open(
        `${location.origin}/goods/list?id=${id}&levelType=${levelType}`
      );
    },
    // 一级分类是否可见
    handleCategoryChange(val) {
      this.categroyVisible = val;
      if (!val) {
        this.currentCategroyId = 0;
      }
    },
    // 二级分类是否可见
    handleCategoryTwoChange(val) {
      this.categroyTwoVisible = val;
    },
  },
};
</script>
<style lang="scss" scoped>
.header-category {
  height: 100%;
  width: 700px;
  .header-box-tab__category {
    position: relative;
    height: 100%;
    width: 700px;
    .tab-category__label {
      width: 190px;
      height: 100%;
      padding-left: 41px;
      background: linear-gradient(270deg, #ffa25a 0%, #ff7f39 100%);
      border-radius: 4px 4px 0px 0px;
      font-weight: bold;
      color: #ffffff;
      cursor: pointer;
      img {
        width: 20px;
        height: 20px;
        margin-right: 16px;
      }
    }
    .tab-category__menu {
      // position: absolute;
      // top: 38px;
      // left: 0;
      // height: 360px;
      // font-size: 14px;
      // color: #333333;
      width: 100%;
      height: 100%;
      padding: 0 55px;
      .tab-category-menu__left {
        width: 100%;
        height: 100%;
        .menu-left__item {
          height: 100%;
          font-size: 16px;
          font-weight: 400;
          color: #333333;
          position: relative;
          cursor: pointer;

          .menu-left__item--bottom {
            width: 68px;
            height: 3px;
            background: #ff6a19;
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            display: none;
          }
          &:hover,
          &--light {
            color: #ff6a19;
            .tab-category-menu__right,
            .menu-left__item--bottom {
              display: flex;
            }
          }
        }
      }
      .tab-category-menu__right {
        position: absolute;
        top: 90px;
        left: -54px;
        width: 350px;
        padding: 25px 25px 9px;
        background: #ffffff;
        box-shadow: 0px 0px 40px 1px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        display: none;

        .menu-right-wrap__item {
          width: 140px;
          height: 40px;
          cursor: pointer;
          color: #333;
          margin-bottom: 16px;
          img {
            height: 40px;
            width: 40px;
          }
          &:hover {
            color: #ff875b;
          }
        }
      }
    }
  }
}
</style>
