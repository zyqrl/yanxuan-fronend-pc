<template>
  <div class="home-pick flex flex-between">
    <!-- 甄选推荐 -->
    <div v-if="showRecommend" class="home-pick-recommend">
      <div class="home-pick--label flex flex-middle">
        <strong>甄选推荐</strong>
      </div>
      <div class="home-pick-recommend__products flex flex-middle flex-between">
        <!-- 左侧商品一 -->
        <div
          @click="onJumpGoodsDetail(recommendGoodsOne.id)"
          class="pick-recommend-products__left"
        >
          <strong class="home-pick-recommend--title">{{
            recommendGoodsOne.title
          }}</strong>
          <p class="home-pick-recommend--subtitle">
            {{ recommendGoodsOne.subtitle }}
          </p>
          <!-- 商品标签 -->
          <div
            v-for="item in recommendGoodsOne.labelList"
            :key="item.code"
            class="home-pick-recommend--tag-wrap flex"
          >
            <div :class="`tag-wrap__item tag-wrap__item--${item.code}`">
              {{ item.text }}
            </div>
          </div>
          <strong class="home-pick--price__18">{{
            recommendGoodsOne.startingPrice
          }}</strong>
          <div class="recommend-products-left__cover">
            <img :src="recommendGoodsOne.recommendPicture" />
          </div>
        </div>
        <!-- 右侧商品 -->
        <div
          class="pick-recommend-products__right flex flex-column flex-between"
        >
          <div
            v-for="(item, index) in recommendArray"
            :key="index"
            @click="onJumpGoodsDetail(item.id)"
            class="recommend-products-right__item flex flex-column"
          >
            <strong class="home-pick-recommend--title2">{{
              item.title
            }}</strong>
            <p class="home-pick-recommend--subtitle">
              {{ recommendGoodsOne.subtitle }}
            </p>
            <!-- 商品标签 -->
            <div
              v-for="itemLabel in recommendGoodsOne.labelList"
              :key="itemLabel.code"
              class="home-pick-recommend--tag-wrap flex"
            >
              <div :class="`tag-wrap__item tag-wrap__item--${itemLabel.code}`">
                {{ itemLabel.text }}
              </div>
            </div>
            <strong class="home-pick--price__18">{{
              item.startingPrice
            }}</strong>
            <div class="recommend-products-right__cover flex-1">
              <img :src="item.recommendPicture" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 新品上架 -->
    <div v-if="showNew" class="home-pick-recommend">
      <div class="home-pick--label flex flex-middle">
        <strong>新品上架</strong>
      </div>
      <div class="home-pick-recommend__products flex flex-middle flex-between">
        <!-- 左侧商品一 -->
        <div
          @click="onJumpGoodsDetail(newGoodsOne.id)"
          class="pick-recommend-products__left"
        >
          <strong class="home-pick-recommend--title">
            {{ newGoodsOne.name }}
          </strong>
          <!-- 商品标签 -->
          <div
            v-for="item in newGoodsOne.labelList"
            :key="item.code"
            class="home-pick-recommend--tag-wrap flex"
          >
            <div :class="`tag-wrap__item tag-wrap__item--${item.code}`">
              {{ item.text }}
            </div>
          </div>
          <p class="home-pick-recommend--subtitle">
            {{ newGoodsOne.subtitle }}
          </p>
          <strong class="home-pick--price__18">{{
            newGoodsOne.startingPrice
          }}</strong>
          <div class="recommend-products-left__cover">
            <img :src="newGoodsOne.mainPicture" />
          </div>
        </div>
        <!-- 右侧商品 -->
        <div
          class="pick-recommend-products__right flex flex-column flex-between"
        >
          <div
            v-for="(item, index) in newArray"
            :key="index"
            @click="onJumpGoodsDetail(item.id)"
            class="recommend-products-right__item flex flex-column"
          >
            <strong class="home-pick-recommend--title2">{{ item.name }}</strong>
            <p class="home-pick-recommend--subtitle">
              {{ item.subtitle }}
            </p>
            <!-- 商品标签 -->
            <div
              v-for="itemLabel in item.labelList"
              :key="itemLabel.code"
              class="home-pick-recommend--tag-wrap flex"
            >
              <div :class="`tag-wrap__item tag-wrap__item--${itemLabel.code}`">
                {{ itemLabel.text }}
              </div>
            </div>
            <strong class="home-pick--price__18">{{
              item.startingPrice
            }}</strong>
            <div class="recommend-products-right__cover flex-1">
              <img :src="item.mainPicture" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const RECOMMEND_MIN_COUNT = 3; // 甄选推荐商品数
const NEW_MIN_COUNT = 3; // 新品上架商品数

export default {
  name: "HomePick",
  props: {
    recommendData: {
      type: Array,
      default: () => [],
    },
    newData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      recommendGoodsOne: null,
      recommendArray: [],
      showRecommend: false,
      newGoodsOne: null,
      newArray: [],
      showNew: false,
    };
  },
  watch: {
    recommendData: {
      immediate: true,
      deep: true,
      handler(val) {
        if (val && val.length >= RECOMMEND_MIN_COUNT) {
          this.showRecommend = true;
          const [one, two, three] = val;
          this.recommendGoodsOne = one;
          this.recommendArray = [two, three];
        }
      },
    },
    newData: {
      immediate: true,
      deep: true,
      handler(val) {
        if (val && val.length >= NEW_MIN_COUNT) {
          this.showNew = true;
          this.newGoodsOne = val[0];
          this.newArray = val.slice(1, NEW_MIN_COUNT);
        }
      },
    },
  },
  methods: {
    onJumpGoodsDetail(id) {
      window.open(`${location.origin}/goods/detail/${id}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.home-pick {
  color: #333333;
  margin-top: 30px;
  &--label {
    font-size: 24px;
    margin-bottom: 30px;
    img {
      width: 16px;
      height: 16px;
      margin-left: 10px;
    }
  }
  &--price {
    &__18 {
      margin-top: auto;
      font-size: 18px;
      color: #ff512b;
      &::before {
        content: "￥";
        font-size: 14px;
      }
    }
    &__16 {
      font-size: 16px;
      color: #ff512b;
      &::before {
        content: "￥";
        font-size: 14px;
      }
    }
    &__14 {
      font-size: 14px;
      color: #ff512b;
      &::before {
        content: "￥";
        font-size: 14px;
      }
    }
  }

  .home-pick-recommend {
    width: 50%;
    min-height: 340px;
    padding: 16px 20px 20px;
    border-radius: 4px;
    &--tag-wrap {
      margin-bottom: 8px;
      .tag-wrap__item {
        width: 40px;
        height: 20px;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        margin-right: 4px;
        &:last-child {
          margin-right: 0;
        }
        &--second_kill {
          color: #3083ff;
          background: rgba(48, 131, 255, 0.1);
        }
        &--recommended {
          color: #ff875b;
          background: rgba(255, 135, 91, 0.1);
        }
      }
    }
    &--title {
      display: block;
      width: 200px;
      font-size: 16px;
      margin-bottom: 6px;
      @include ellipsis;
    }
    &--title2 {
      display: block;
      width: 150px;
      font-size: 16px;
      margin-bottom: 6px;
      @include ellipsis;
    }
    &--subtitle {
      font-size: 12px;
      color: #999999;
      margin-bottom: 8px;
    }
    &__products {
      // height: 264px;
      cursor: pointer;
      .pick-recommend-products__left {
        position: relative;
        width: 292px;
        height: 302px;
        background: #fff;
        padding: 20px;
        margin-right: 16px;
        transition: all 0.3s;

        &:hover {
          box-shadow: 0px 4px 40px 1px rgba(0, 0, 0, 0.10000000149011612);
          margin-top: -3px;
        }
        .recommend-products-left__cover {
          position: absolute;
          right: 18px;
          bottom: 18px;
          width: 170px;
          height: 170px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .pick-recommend-products__right {
        width: 266px;
        height: 100%;
        .recommend-products-right__item {
          width: 284px;
          height: 144px;
          border-radius: 4px;
          position: relative;
          background: #fff;
          padding: 20px;

          transition: all 0.3s;

          &:hover {
            box-shadow: 0px 4px 40px 1px rgba(0, 0, 0, 0.10000000149011612);
          }
          &:nth-child(1) {
            margin-bottom: 16px;
          }
        }
        .recommend-products-right__cover {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translate(0, -50%);
          width: 110px;
          height: 110px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
