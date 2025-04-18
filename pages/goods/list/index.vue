<!--
 * @Author: ch
 * @Date: 2022-05-04 17:28:28
 * @LastEditors: ch
 * @LastEditTime: 2022-05-04 17:28:48
 * @Description: file content
-->

<template>
  <div v-if="pageloading" class="main flex">
    <el-skeleton
      v-for="item in 5"
      :key="item"
      style="width: 230px; margin-right: 20px"
      :loading="true"
      animated
    >
      <template slot="template">
        <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
        <div style="padding: 14px">
          <el-skeleton-item variant="h3" style="width: 50%" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <el-skeleton-item variant="text" style="margin-right: 16px" />
            <el-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
  <div v-else :class="listData && listData.length ? 'page' : ''">
    <main class="main" v-if="listData && listData.length">
      <nav class="main__nav">
        <!-- <p class="main__nav-crumbs">
          全部商品
          <i class="el-icon-arrow-right"></i>
          <span v-if="levelType == 2">{{}}</span>
        </p> -->
        <div class="main__nav-sort flex flex-middle" v-if="levelType == 1">
          <span class="main__nav-sort-txt">分类 :</span>
          <span
            class="main__nav-sort-btn"
            :class="levelActive == index ? 'main__nav-sort-active' : ''"
            @click="onLevelClick(index)"
            v-for="(item, index) in categoryOneList"
            :key="item.id"
          >
            {{ item.name }}
          </span>
        </div>
        <div class="main__nav-sort flex flex-middle">
          <span class="main__nav-sort-txt">排序 :</span>
          <span
            class="main__nav-sort-btn"
            :class="navActive == 0 ? 'main__nav-sort-active' : ''"
            @click="onNavClick(0)"
            >综合</span
          >
          <Sort
            :class="navActive == 1 ? 'main__nav-sort-active' : ''"
            sortText="价格"
            :sortType="sortType"
            @onSort="onSort"
          ></Sort>
          <span
            :class="navActive == 3 ? 'main__nav-sort-active' : ''"
            class="main__nav-sort-btn"
            @click="onNavClick(3)"
            >上新</span
          >
        </div>
      </nav>
      <div class="main__content">
        <UiGoodsItem
          :item="item"
          v-for="item in listData"
          :key="item.id"
        ></UiGoodsItem>
      </div>
      <el-pagination
        class="main__pagination flex flex-right"
        @current-change="handleCurrentChange"
        :current-page.sync="params.pageIndex"
        :page-size="20"
        layout="prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </main>
    <main v-else class="main">
      <img class="main-none-img" src="@/assets/img/goods/none.png" alt="" />
      <p class="main-none-txt">没有搜到你想要的商品哦，换个关键词试试</p>
    </main>
    <BsChosen v-if="!listData || !listData.length"></BsChosen>
  </div>
</template>
<script>
import {
  ApiGetGoodsList,
  ApiGetCategoryOneList,
  ApiGetCategoryTwoAndGoods,
} from "@/plugins/api/goods";
import Sort from "./module/SortItem.vue";
import UiGoodsItem from "@/components/UiGoodsItem.vue";
import BsChosen from "@/components/BsChosen.vue";
export default {
  components: { Sort, UiGoodsItem, BsChosen },
  data() {
    return {
      pageloading: true,
      navActive: 0,
      levelActive: 0,
      listData: [],
      total: 0,
      // 0:综合,1:desc,2:asc,3:上新
      sortType: 0,
      categoryOneList: [],
      levelType: "",
      levelId: "",
      params: {
        length: 20,
        pageIndex: 1,
        name: "",
        categoryId: "",
        order: "",
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.params.name = this.$route.query.keyword;
      this.levelType = this.$route.query.levelType || "";
      this.levelId = this.$route.query.id || "";
      this.levelType == 2 ? (this.params.categoryId = this.levelId) : "";
      if (this.levelType == 1) {
        this.getCategoryTwoAndGoods();
      } else {
        this.getGoodsListData();
      }
    },
    async getCategoryOneList() {
      let res = await ApiGetCategoryOneList();
      this.categoryOneList = res.result;
    },
    async getCategoryTwoAndGoods() {
      let res = await ApiGetCategoryTwoAndGoods({ categoryId: this.levelId });
      this.categoryOneList = res.result;
      this.getGoodsListData();
    },
    onNavClick(i) {
      let vm = this;
      vm.sortType = i;
      vm.navActive = i;
      vm.getGoodsListData();
    },
    onLevelClick(i) {
      let vm = this;
      vm.levelActive = i;
      vm.getGoodsListData();
    },
    onSort() {
      let vm = this;
      vm.navActive = 1;
      vm.sortType < 2 ? vm.sortType++ : (vm.sortType = 1);
      vm.getGoodsListData();
    },
    // 获取商品列表
    async getGoodsListData() {
      let vm = this;
      switch (vm.sortType) {
        case 0:
          vm.$set(vm.params, "order", "");
          break;
        case 1:
          vm.$set(vm.params, "order", "starting_price:desc");
          break;
        case 2:
          vm.$set(vm.params, "order", "starting_price:asc");
          break;
        case 3:
          vm.$set(vm.params, "order", "create_time:desc");
          break;
      }
      if (vm.levelType == 1) {
        vm.params.categoryId = vm.categoryOneList[vm.levelActive].id;
      }
      if (vm.params.name) {
        vm.params.categoryId = "";
      }
      let res = await ApiGetGoodsList(vm.params);
      vm.pageloading = false;
      if (res.error) {
        vm.$message.error(res.error.message);
        return false;
      }
      vm.total = res.result.total;
      vm.listData = res.result.records;
    },
    handleCurrentChange(val) {
      let vm = this;
      vm.$set(vm.params, "pageIndex", val);
      vm.getGoodsListData();
    },
  },
  watch: {
    $route: {
      handler() {
        this.init();
      },
      deep: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  background: #f8f8f8;
  width: 100%;
  min-height: 600px;
}

.main {
  @include layout-box;
  padding-top: 14px;
  padding-bottom: 60px;

  &__nav {
    padding-top: 24px;
    &::after {
      display: block;
      width: 1200px;
      content: "";
      height: 1px;
      background: #eee;
    }
    &-crumbs {
      .el-icon-arrow-right {
        margin: 0 10px;
      }
    }
    &-sort {
      width: 100%;
      height: 50px;
      padding: 0 30px;
      &-txt {
        color: #999999;
        margin-right: 30px;
      }
      &-btn {
        margin-right: 50px;
        cursor: pointer;
        &:hover {
          color: #ff512b;
        }
      }
      &-active {
        color: #ff512b;
      }
    }
  }
  &__content {
    margin-top: 30px;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, 232px);
    justify-content: space-between;
    grid-row-gap: 10px;
  }
  &__pagination {
    margin-top: 60px;
    /deep/.el-pager {
      margin-left: 8px;
    }

    /deep/button,
    /deep/.number,
    /deep/.btn-quicknext,
    /deep/.btn-quickprev {
      width: 32px;
      height: 32px;
      text-align: center;
      line-height: 32px;
      margin-left: 8px;
      border-radius: 2px 2px 2px 2px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      font-size: 14px;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.65);
    }

    /deep/.active {
      background: #ff512b;
      color: #fff;
    }
  }
  &-none-img {
    display: block;
    width: 228px;
    height: 144px;
    margin: 60px auto 20px;
  }
  &-none-txt {
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-family: PingFang SC-常规体, PingFang SC;
    font-weight: normal;
    color: #999999;
  }
}
</style>
