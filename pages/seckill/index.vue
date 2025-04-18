<!--
 * @Author: ch
 * @Date: 2022-05-04 17:25:41
 * @LastEditors: ch
 * @LastEditTime: 2022-05-04 17:26:08
 * @Description: file content
-->
<template>
  <div class="seckill">
    <div v-show="isSticky" class="seckill-header-sticky">
      <TabBar
        :tab-id="query.activityTimeId"
        :list="tabList"
        @tab-change="handleTabChange"
      />
    </div>
    <!-- 秒杀时间段 -->
    <div
      class="seckill-header"
      :style="{ backgroundImage: `url(${bkgSckill})` }"
    >
      <div class="seckill-header-tabbar">
        <TabBar
          :tab-id="query.activityTimeId"
          :list="tabList"
          @tab-change="handleTabChange"
        />
      </div>
    </div>
    <!-- 倒计时展示 -->
    <div
      v-if="tabList.length > 0"
      class="seckill-bar flex flex-middle flex-center"
    >
      <p>{{ seckillTip }}</p>
      <div class="seckill-bar-countdown flex flex-middle">
        <div class="seckill-bar-countdown__time">{{ countdown.hour }}</div>
        <span class="seckill-bar-countdown--mark">:</span>
        <div class="seckill-bar-countdown__time">{{ countdown.minute }}</div>
        <span class="seckill-bar-countdown--mark">:</span>
        <div class="seckill-bar-countdown__time">{{ countdown.second }}</div>
      </div>
    </div>
    <!-- 秒杀商品列表 -->
    <div v-loading="loading">
      <div class="seckill-products flex flex-wrap">
        <div
          v-for="item in goodsList"
          :key="item.productId"
          @click="onJumpGoodsDetail(item.productId)"
          class="seckill-products-wrap"
        >
          <div class="seckill-products-wrap__cover">
            <img :src="item.productMainPicture" />
            <div
              v-if="item.percentage === 100"
              class="products-wrap-cover__sold flex flex-middle flex-center"
            >
              已售罄
            </div>
          </div>
          <div class="seckill-products-wrap__content">
            <p class="products-wrap-content__title">{{ item.productName }}</p>
            <div class="products-wrap-content__price">
              <strong>￥{{ item.activityPrice }}</strong>
              <del>￥{{ item.originalPrice }}</del>
            </div>
            <div
              class="products-wrap-content__footer flex flex-middle flex-between"
            >
              <div class="wrap-content-footer__stock">
                <el-progress
                  :percentage="item.percentage"
                  :show-text="false"
                ></el-progress>
                <p>仅剩{{ item.stock }}件</p>
              </div>
              <div
                v-if="item.percentage === 100"
                class="wrap-content-footer__btn wrap-content-footer__btn--gray"
              >
                已售罄
              </div>
              <div v-else class="wrap-content-footer__btn">
                {{ goodsBtnText }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <div class="seckill-pagination flex flex-right">
      <UiPagination
        :current-page="currentPage"
        :page-size="query.length"
        :total="total"
        @current-change="handleCurrentChange"
      >
        <el-button class="btn-confirm">确定</el-button>
      </UiPagination>
    </div>
    <DialogEnd :visible="seckillEndVisible" @close="handleClose" />
  </div>
</template>
<script>
import UiPagination from "@/components/UiPagination.vue";
import {
  ApiGetSeckillTimes,
  ApiGetSeckillGoods,
  ApiGetCurrentTime,
} from "@/plugins/api/seckill";
import { SECKILL_STATUS } from "@/constants";
import TabBar from "./module/TabBar.vue";
import DialogEnd from "./module/DialogEnd.vue";
const PAGE_SIZE = 16;

export default {
  name: "Sckill",
  components: { TabBar, DialogEnd, UiPagination },
  data() {
    return {
      bkgSckill: require("~/assets/img/sckill/bkg-large.png"),
      tabList: [], // 秒杀时间段
      goodsList: [], // 商品列表
      total: 0,
      currentPage: 0,
      loading: false,
      query: {
        pageIndex: 1,
        length: PAGE_SIZE,
        activityTimeId: 0,
      },
      isSticky: false,
      timeInterval: null, // 倒计时定时器
      seckillTip: "", // 秒杀提示文案
      seckillTime: 0, // 秒杀时间
      seckillEndVisible: false, //秒杀结束弹窗
      seckillStatus: SECKILL_STATUS.NOT_START, // 当前秒杀时间段状态
      inProgressId: 0, // 秒杀中的活动id
    };
  },
  computed: {
    countdown() {
      const data = parseInt(this.seckillTime / 1e3);
      const hour = Math.floor(data / 60 / 60);
      const minute = Math.floor((data / 60) % 60);
      const second = Math.floor(data % 60);
      return {
        hour: hour < 10 ? `0${hour}` : `${hour}`,
        minute: minute < 10 ? `0${minute}` : `${minute}`,
        second: second < 10 ? `0${second}` : `${second}`,
      };
    },
    goodsBtnText() {
      return this.query.activityTimeId === this.inProgressId
        ? "立即开抢"
        : "即将开抢";
    },
  },
  watch: {
    // 切换秒杀时间段
    "query.activityTimeId": {
      immediate: true,
      handler(val) {
        if (val === 0) {
          return;
        }
        clearImmediate(this.timeInterval);
        const tabItem = this.tabList.find((item) => item.id === val);
        if (tabItem) {
          const { activityStartTime, activityEndTime } = tabItem;
          this.setTimerInterval({
            startTime: activityStartTime,
            endTime: activityEndTime,
          });
        }
      },
    },
  },

  created() {
    this.getSeckillTimes();
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener("scroll", this.scrollEventMethod);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollEventMethod);
    clearInterval(this.timeInterval);
  },
  methods: {
    scrollEventMethod() {
      this.isSticky = window.scrollY > 400;
    },
    async getSeckillTimes() {
      const { result } = await ApiGetSeckillTimes();
      if (result && result.length > 0) {
        this.tabList = result;
        const inProgressItem = result.find((item) => item.isInProgress);
        if (inProgressItem) {
          this.inProgressId = inProgressItem.id;
          this.query.activityTimeId = inProgressItem.id;
        } else {
          this.query.activityTimeId = result[0].id;
        }
        this.getGoodsList();
        return;
      }
      this.seckillEndVisible = true;
    },
    async getGoodsList() {
      this.loading = true;
      const { result } = await ApiGetSeckillGoods({ ...this.query });
      this.loading = false;
      if (result) {
        this.total = result.total;
        this.goodsList = result.records.map((item) => {
          // 售出数量
          const saleNumber = item.number - item.stock;
          return {
            ...item,
            percentage:
              saleNumber === 0
                ? 0
                : (saleNumber / item.number).toFixed(3) * 100,
          };
        });
      }
    },

    // 设置定时器
    async setTimerInterval({ startTime, endTime }) {
      clearInterval(this.timeInterval);

      // 获取服务器当前时间
      const { result } = await ApiGetCurrentTime();
      const current = result || Date.now();

      startTime = new Date(startTime).getTime();
      endTime = new Date(endTime).getTime();
      if (current > endTime) {
        // 秒杀结束
        this.getSeckillTimes();
        this.queryDataReset();
        return;
      }
      if (startTime < current && endTime > current) {
        // 秒杀进行中
        this.seckillTime = endTime - current;
        this.seckillTip = "本场正在秒杀中，好物转瞬即逝，不要错过哦~距结束仅剩";
        this.seckillStatus = SECKILL_STATUS.GOING;
      } else {
        // 秒杀未开始
        this.seckillTime = startTime - current;
        this.seckillTip = "本场秒杀即将开抢，距开始还剩";
        this.seckillStatus = SECKILL_STATUS.NOT_START;
      }

      this.timeInterval = setInterval(() => {
        if (this.seckillTime <= 0) {
          clearInterval(this.timeInterval);

          // 仅有一个进行中的秒杀时间段，倒计时完成展示结束弹窗
          if (
            this.tabList.length === 1 &&
            this.seckillStatus === SECKILL_STATUS.GOING
          ) {
            this.seckillEndVisible = true;
            this.$store.commit("setSeckillTabVisible", false);
            return;
          }

          // 秒杀开始，activityTimeId重置，触发watch
          this.query.activityTimeId = 0;
          this.getSeckillTimes();
          return;
        }
        this.seckillTime -= 1e3;
      }, 1e3);
    },

    // 重置分页等数据
    queryDataReset() {
      Object.assign(this.query, {
        pageIndex: 1,
        length: PAGE_SIZE,
      });
    },
    onJumpGoodsDetail(id) {
      window.open(`${location.origin}/goods/detail/${id}`);
    },
    handleCurrentChange(page) {
      this.query.pageIndex = page;
      this.getGoodsList();
    },
    handleTabChange(id) {
      this.query.activityTimeId = id;
      this.queryDataReset();
      this.getGoodsList();
    },

    // 离开活动页面
    handleClose() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
.seckill {
  background: #f8f8f8;
  padding-bottom: 60px;
  .seckill-header-sticky {
    position: fixed;
    left: 50%;
    transform: translate(-50%);
    top: 50px;
    z-index: 1;
    @include layout-box;
  }
  .seckill-header {
    position: relative;
    width: 100%;
    height: 156px;
    background-size: 100% 100%;
    .seckill-header-tabbar {
      @include layout-box;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%);
    }
  }
  .seckill-bar {
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 14px;
    color: #666666;
    .seckill-bar-countdown {
      margin-left: 25px;
      font-weight: bold;
      &__time {
        width: 22px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        font-size: 14px;
        color: #ffffff;
        background: #2f3430;
      }
      &--mark {
        display: block;
        margin: 0 7px;
        color: #2f3430;
      }
    }
  }
  .seckill-products,
  .seckill-pagination {
    @include layout-box;
  }
  .seckill-products {
    .seckill-products-wrap {
      width: 24%;
      background: #ffffff;
      margin-bottom: 16px;
      cursor: pointer;
      &:not(:nth-child(4n)) {
        margin-right: calc(4% / 3);
      }
      &:hover {
        box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
      }
      .seckill-products-wrap__cover {
        position: relative;
        width: 100%;
        height: 288px;
        padding: 20px;
        img {
          width: 100%;
          height: 100%;
        }
        .products-wrap-cover__sold {
          position: absolute;
          width: 110px;
          height: 110px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.5);
          font-size: 24px;
          color: #ffffff;
          border-radius: 50%;
        }
      }
      .seckill-products-wrap__content {
        padding: 20px 16px;
        .products-wrap-content__title {
          @include ellipsis;
          color: #333333;
          font-size: 16px;
          margin-bottom: 10px;
        }
        .products-wrap-content__price {
          font-size: 12px;
          color: #999999;
          margin-bottom: 7px;
          strong {
            font-size: 18px;
            color: #ff512b;
            margin-right: 14px;
          }
        }
        .products-wrap-content__footer {
          .wrap-content-footer__stock {
            font-size: 12px;
            color: #666666;
            /deep/.el-progress {
              width: 100px;
              height: 6px;
              background: #dddddd;
              border-radius: 4px;
              margin-bottom: 8px;
            }
          }
          .wrap-content-footer__btn {
            width: 100px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            background: #ff512b;
            font-size: 14px;
            color: #ffffff;
            &--gray {
              color: #999999;
              background: #eeeeee;
            }
          }
        }
      }
    }
  }
  .seckill-pagination {
    .btn-confirm {
      width: 81px;
      height: 32px;
      border-radius: 2px;
      margin-left: 14px;
    }
  }
}
</style>
