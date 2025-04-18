<!--
 * @Author: ch
 * @Date: 2022-05-03 22:14:16
 * @LastEditors: ch
 * @LastEditTime: 2022-06-13 10:28:21
 * @Description: file content
-->
<template>
  <div class="home">
    <Banner :data="bannerList"/>
    <div class="home-wrap">
      <Seckil
        v-if="seckillData.activityTimeVO"
        :data="seckillData"
        :list="sekillGoodsList"
        :current="currentTime"
        @refresh="handleSeckillRefresh"
      />
      <Pick :recommend-data="recommendData" :new-data="newData" />
      <div class="home-wrap-select">
        <div class="home-wrap-select__header flex flex-center flex-middle">
          <img src="~/assets/img/common/icon-select.png" />
          <strong>为你精选</strong>
          <img src="~/assets/img/common/icon-select-turn.png" />
        </div>
        <div v-loading="loading">
          <div class="home-wrap-select__content flex flex-wrap">
            <UiGoodsItem
              :item="item"
              v-for="item in selectProducts"
              :key="item.id"
            ></UiGoodsItem>
          </div>
        </div>
      </div>
    </div>
    <TabbarFixed :scroll-top="scrollTop" />
  </div>
</template>

<script>
import _ from "lodash";
import UiGoodsItem from "@/components/UiGoodsItem.vue";
import {
  ApiGetHomeSeckill,
  ApiGetCurrentTime,
  ApiGetSeckillGoods,
} from "@/plugins/api/seckill";
import {
  ApiGetRecommendedGoodsList,
  ApiGetGoodsList,
} from "@/plugins/api/goods";
import {
  ApiGetAdList
} from "@/plugins/api/ad";
import Banner from "./module/Banner.vue";
import Seckil from "./module/Seckill.vue";
import Pick from "./module/Pick.vue";
import { AD_LOCATION } from '@/plugins/dicts/ad';
import TabbarFixed from "./module/TabbarFixed.vue";
const SECKILL_COUNT = 20; // 秒杀商品数
const NEW_COUNT = 5; // 新品上架商品数
const FOOTER_BAR_HEIGHT = 200; // 公共底部高度

export default {
  components: { Banner, Seckil, Pick, UiGoodsItem, TabbarFixed },
  async asyncData({ store }) {
    // 获取秒杀数据
    let seckillData = { activityTimeVO: null };
    let sekillGoodsList = [];
    const { result: seckillDataResult } = await ApiGetHomeSeckill();
    if (seckillDataResult) {
      seckillData = seckillDataResult;
    }
    if (seckillData.activityTimeVO) {
      // 获取秒杀商品列表
      const { result } = await ApiGetSeckillGoods({
        pageIndex: 1,
        length: SECKILL_COUNT,
        activityTimeId: seckillData.activityTimeVO.id,
      });
      if (result) {
        sekillGoodsList = result.records;
      }
    }

    // 获取服务器当前时间
    const { result: currentTime } = await ApiGetCurrentTime();

    // 获取甄选商品
    const { result: recommendData } = await ApiGetRecommendedGoodsList();

    // 获取新品上架商品
    let newData = [];
    const { result: newDataResult } = await ApiGetGoodsList({
      pageIndex: 1,
      length: NEW_COUNT,
    });
    if (newDataResult) {
      newData = newDataResult.records || [];
    }
    
      let {result:bannerList} = await ApiGetAdList({
        location : AD_LOCATION.HOME_BANNER
      });
       bannerList = bannerList || [];
      

    return {
      currentTime,
      bannerList,
      newData,
      sekillGoodsList,
      seckillData,
      recommendData: recommendData || [],
    };
  },
  data() {
    return {
      query: {
        pageIndex: 1,
        length: 20,
      },
      selectProducts: [],
      total: 0,
      loading: false,
      currentPage: 0,
      scrollTop: 0,
      ticking: false,
    };
  },
  created() {
    this.getSelectProducts();
  },
  async mounted() {
    let {result:bannerList} = await ApiGetAdList({
        location : AD_LOCATION.HOME_BANNER
      });
    // 监听滚动事件
    window.addEventListener("scroll", this.scrollEventMethod);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollEventMethod);
  },
  methods: {
    scrollEventMethod: _.debounce(function () {
      this.scrollTop = window.scrollY;
      const contentHeight = document.body.scrollHeight; // 内容高度
      const clientHeight = document.body.clientHeight; // 屏幕高度
      if (
        window.scrollY + clientHeight >= contentHeight - FOOTER_BAR_HEIGHT &&
        this.total &&
        this.selectProducts.length < this.total
      ) {
        this.query.pageIndex += 1;

        // “为你精选”上拉加载
        this.getSelectProducts();
      }
    }, 200),

    // 刷新秒杀活动状态
    async handleSeckillRefresh() {
      const { result: seckillData } = await ApiGetHomeSeckill();
      const { result: currentTime } = await ApiGetCurrentTime();
      this.seckillData = seckillData;
      this.currentTime = currentTime;
    },

    // 获取“为你精选”数据
    async getSelectProducts() {
      this.loading = true;
      const { result } = await ApiGetGoodsList({ ...this.query });
      this.loading = false;
      if (result) {
        const { total, records } = result;
        this.total = total;
        this.selectProducts = this.selectProducts.concat(records);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  background: #f8f8f8;
  .home-wrap {
    @include layout-box;
    padding: 30px 0;
    .home-wrap-select {
      margin-top: 30px;
      &__header {
        font-size: 24px;
        color: #333333;
        margin-bottom: 30px;
        img {
          width: 24px;
          height: 22px;
        }
        strong {
          margin: 0 10px;
        }
      }
      &__content {
        /deep/.goods-item {
          margin-bottom: 10px;
          width: 19%;
          &:not(:nth-child(5n)) {
            margin-right: calc(5% / 4);
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
