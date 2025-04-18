<template>
  <!-- 购物车 -->
  <el-popover
    popper-class="header-cart-popover"
    trigger="hover"
    placement="bottom"
    width="330"
    :disabled="cartCount === 0"
  >
    <div
      slot="reference"
      class="header-cart-popover__refrence flex flex-middle"
      @click="onJumCartPage"
    >
      <img src="~/assets/img/layout/icon-shop.png" />
      <div
        v-if="cartCount > 0"
        class="wrap-right-cart__tip flex flex-middle flex-center"
        :class="{ 'wrap-right-cart__tip--more': cartCount > 9 }"
      >
        {{ cartCount }}
      </div>
    </div>
    <div class="header-cart-products scrollbar-self">
      <div
        v-for="item in products"
        :key="item.id"
        @click="onJumpGoodsDetail(item.product.id)"
        class="header-cart-products__wrap flex flex-middle"
      >
        <div class="cart_products-wrap_cover">
          <img :src="item.productMainPicture" />
        </div>
        <div class="cart-products-wrap_info">
          <div class="products-wrap-info__top flex flex-between">
            <p class="wrap-info-top__title">{{ item.productName }}</p>
            <UiMoney
              class="wrap-info-top__price"
              :float="true"
              :money="item.product.startingPrice"
            />
          </div>
          <div class="products-wrap-info__bottom flex flex-between">
            <span class="wrap-info-bottom__skuname">{{
              item.productSku ? item.productSku.name : '--'
            }}</span>
            <span class="wrap-info-bottom__count">{{ item.number }}</span>
          </div>
        </div>
      </div>
      <!-- 失效商品 -->
      <template v-if="failureProducts.length > 0">
        <div class="header-cart-products__bar">以下商品已失效</div>
        <div
          v-for="item in failureProducts"
          :key="item.id"
          @click="onJumpGoodsDetail(item.product.id)"
          class="header-cart-products__wrap flex flex-middle"
        >
          <div class="cart_products-wrap_cover">
            <img :src="item.productMainPicture" />
          </div>
          <div class="cart-products-wrap_info">
            <div class="products-wrap-info__top flex flex-between">
              <p
                class="wrap-info-top__title header-cart-products--failure-color"
              >
                {{ item.productName }}
              </p>
              <UiMoney
                class="header-cart-products--failure-color"
                :float="true"
                :money="item.product.startingPrice"
              />
            </div>
            <div class="products-wrap-info__bottom flex flex-between">
              <span class="wrap-info-bottom__skuname">{{
              item.productSku ? item.productSku.name : '--'
              }}</span>
              <span class="wrap-info-bottom__count">{{ item.number }}</span>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="header-cart-bottom flex flex-middle flex-between">
      <p>共{{ cartCount }}件商品</p>
      <UiButton type="red_panel" :radius="true" @click="onJumCartPage"
        >去购物车</UiButton
      >
    </div>
  </el-popover>
</template>
<script>
import { mapState } from "vuex";
import UiButton from "@/components/UiButton.vue";

export default {
  name: "HeaderCart",
  components: { UiButton },
  data() {
    return {
      products: [],
      failureProducts: [], // 失效商品
    };
  },
  computed: {
    ...mapState(["cartProducts", "token"]),
    cartCount() {
      return this.cartProducts.length;
    },
  },
  watch: {
    token: {
      immediate: true,
      handler(val) {
        if (val) {
          this.$store.dispatch("getCartProducts");
          return;
        }
        this.$store.commit("setCartProducts", []);
      },
    },
    cartProducts: {
      immediate: true,
      deep: true,
      handler(val) {
        this.products = [];
        this.failureProducts = [];
        val.forEach((item) => {
          if (item.product.isEnable) {
            if (item.productSku && item.productSku.stock > 0) {
              // 商品未失效且有库存
              this.products.push(item);
              return;
            }
            this.failureProducts.push(item);
            return;
          }
          this.failureProducts.push(item);
        });
      },
    },
  },
  methods: {
    onJumpGoodsDetail(id) {
      window.open(`${location.origin}/goods/detail/${id}`);
    },
    onJumCartPage() {
      if (!this.$isLoginValidate()) {
        return;
      }
      window.open(`${location.origin}/cart`);
    },
  },
};
</script>
<style lang="scss">
.header-cart-popover {
  padding: 16px 20px 50px 20px !important;
}
</style>
<style lang="scss" scoped>
.header-cart-popover__refrence {
  cursor: pointer;
  position: relative;
  .wrap-right-cart__tip {
    width: 16px;
    height: 16px;
    font-size: 10px;
    background: #ff512b;
    border-radius: 50%;
    color: #ffffff;
    left: 10px;
    top: -7px;
    position: absolute;
    &--more {
      // width: unset;
      top: -8px;
      right: 0px;
      padding: 5;
      border-radius: 7px;
      position: absolute;
    }
  }
  img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
}
.header-cart-popover {
  .header-cart-products {
    max-height: 360px;
    overflow: auto;
    padding: 0 10px 16px 0;
    &--failure-color {
      color: #999999 !important;
    }
    .header-cart-products__wrap {
      margin-bottom: 20px;
      cursor: pointer;
      &:last-child {
        margin-bottom: 0;
      }
      .cart_products-wrap_cover {
        width: 60px;
        height: 60px;
        padding: 3px;
        border: 1px solid #eeeeee;
        border-radius: 4px;
        margin-right: 11px;
        img {
          width: 54px;
          height: 54px;
        }
      }
      .cart-products-wrap_info {
        font-size: 12px;
        color: #999999;
        width: 100%;
        .products-wrap-info__top {
          .wrap-info-top__title {
            display: block;
            width: 120px;
            @include ellipsis;
            font-size: 14px;
            color: #333333;
            margin-bottom: 10px;
          }
          .wrap-info-top__price {
            color: #ff512b;
          }
        }
        .products-wrap-info__bottom {
          .wrap-info-bottom__skuname {
            display: block;
            width: 145px;
            @include ellipsis;
          }
          .wrap-info-bottom__count {
            &::before {
              content: "X";
              font-size: 8px;
            }
          }
        }
      }
    }
    .header-cart-products__bar {
      font-size: 14px;
      width: 298px;
      height: 40px;
      line-height: 40px;
      padding: 0 11px;
      background: #f8f8f8;
      color: #999999;
      margin-bottom: 20px;
    }
  }
  .header-cart-bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #eeeeee;
    padding: 0 16px;
    font-size: 14px;
    color: #666666;
    /deep/.ui-button {
      width: 84px;
      height: 30px;
      font-size: 14px;
      font-weight: normal;
      padding: 0;
    }
  }
}
</style>
