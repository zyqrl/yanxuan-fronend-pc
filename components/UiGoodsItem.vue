<template>
  <div class="goods-item" @click="onItem">
    <img class="goods-item__img" :src="item.mainPicture" alt="商品图片" />
    <div class="goods-item__title">
      <span class="goods-item__title-label" v-if="isLabel(item.labelList)">
        {{ getLabel(item.labelList) }}
      </span>
      {{ item.name }}
    </div>
    <div class="goods-item__price">
      <strong class="goods-item__price--txt">{{ item.startingPrice }}</strong>
    </div>
  </div>
</template>
<script>
import UiMoney from "@/components/UiMoney.vue";
export default {
  name: "UiGoodsItem",
  componetns: { UiMoney },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    isLabel(arr) {
      return arr.some((item) => item.code);
    },
    getLabel(arr) {
      let str = "";
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].code != "miaosha") {
          str = arr[i].text;
          break;
        }
      }
      return str;
    },
    onItem() {
      // this.$router.push({
      //   path: "/goods/detail/" + this.item.id,
      // });
      window.open("/goods/detail/" + this.item.id);
    },
  },
};
</script>
<style lang="scss" scoped>
.goods-item {
  width: 228px;
  height: 320px;
  cursor: pointer;
  background: #ffffff;
  transition: all 0.3s;
  padding: 30px;

  &:hover {
    box-shadow: 0px 4px 40px 1px rgba(0, 0, 0, 0.10000000149011612);
    margin-top: -3px;
  }

  &__img {
    width: 130px!important;
    height: 130px;
    display: block;
    margin: 0 auto 44px;
  }
  &__title {
    width: 170px;
    height: 45px;
    line-height: 22px;
    // margin: 17px auto 10px;
    margin-bottom: 10px;
    font-size: 14px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #333333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    &-label {
      display: inline-block;
      width: 40px;
      height: 18px;
      text-align: center;
      line-height: 18px;
      background: #FF6A19;
      font-size: 12px;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      font-weight: 400;
      color: #fff;
      text-align: center;
      margin-right: 8px;
    }
  }
  &__price {
    width: 200px;
    margin: 0 auto;

    &--txt {
      font-size: 16px;
      color: #ff512b;
      &::before {
        content: "￥";
        font-size: 14px;
      }
    }
  }
}
</style>
