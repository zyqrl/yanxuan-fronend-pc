<!--
 * @Author: ch
 * @Date: 2022-05-26 10:41:45
 * @LastEditors: ch
 * @LastEditTime: 2022-06-15 15:43:49
 * @Description: file content
-->
<template>
  <div class="chosen">
    <div class="chosen-title flex flex-between flex-middle">
      <h3 class="chosen-title--txt">为你精选</h3>
      <div class="chosen-title--btn flex" @click="onRest()">
        <img src="@/assets/img/goods/each.png" alt="切换推荐" />
        <span>换一组</span>
      </div>
    </div>
    <div class="chosen-list">
      <UiGoodsItem
        :item="item"
        v-for="item in recommendedData"
        :key="item.id"
      ></UiGoodsItem>
    </div>
  </div>
</template>
<script>
import { ApiGetGoodsList } from "@/plugins/api/goods";
import UiGoodsItem from "@/components/UiGoodsItem.vue";
export default {
  components: { UiGoodsItem },
  data() {
    return {
      pages: 0,
      pageIndex: 1,
      recommendedData: [],
    };
  },
  created() {
    this.getRecommendedGoodsList();
  },
  methods: {
    onRest() {
      this.pageIndex < this.pages ? this.pageIndex++ : (this.pageIndex = 1);
      this.getRecommendedGoodsList();
    },
    async getRecommendedGoodsList() {
      let vm = this;
      let res = await ApiGetGoodsList({
        length: 20,
        pageIndex: vm.pageIndex,
        name: "",
        categoryId: "",
        order: "",
      });
      vm.recommendedData = res.result.records;
      vm.pages = res.result.pages;
    },
  },
};
</script>

<style lang="scss" scoped>
.chosen {
  width: 100%;
  padding: 30px 0 40px;
  background: #f8f8f8;

  &-title {
    @include layout-box;
    &--txt {
      font-size: 24px;
      font-family: Microsoft YaHei-Bold, Microsoft YaHei;
      font-weight: bold;
      color: #333333;
    }
    &--btn {
      width: 140px;
      cursor: pointer;
      img {
        width: 27px;
        height: 27px;
        margin-right: 5px;
      }
      span {
        font-size: 18px;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #999999;
      }
    }
  }
  &-list {
    @include layout-box;
    padding-top: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 232px);
    justify-content: space-between;
    grid-row-gap: 10px;
  }
}
</style>
