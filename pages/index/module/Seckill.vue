<!--
 * @Author: ch
 * @Date: 2022-05-04 17:51:11
 * @LastEditors: ch
 * @LastEditTime: 2022-05-04 22:15:37
 * @Description: file content
-->

<template>
  <main class="main">
    <div class="home-sckill-bar flex flex-middle">
      <img
        class="home-sckill-title"
        src="~/assets/img/sckill/title.png"
        alt=""
      />
      <div class="home-sckill-wrap">
        <div class="home-sckill-wrap__tip">
          {{ data.activityTimeVO.timeName }} {{ seckillText }}
        </div>
      </div>
      <div class="home-sckill-wrap__countdown flex flex-middle flex-center">
        <div class="sckill-wrap-countdown__time">{{ countdown.hour }}</div>
        <span class="sckill-wrap-countdown--mark">:</span>
        <div class="sckill-wrap-countdown__time">
          {{ countdown.minute }}
        </div>
        <span class="sckill-wrap-countdown--mark">:</span>
        <div class="sckill-wrap-countdown__time">
          {{ countdown.second }}
        </div>
      </div>
    </div>
    <div class="home-sckill flex" @click="onJumpSeckill">
      <div class="home-sckill-carousel">
        <el-carousel
          height="300px"
          arrow="always"
          :autoplay="false"
          :loop="false"
        >
          <el-carousel-item v-for="(item, index) in goodsList" :key="index">
            <div class="carousel-goods flex">
              <div
                v-for="(itemChild, indexChild) in item"
                :key="itemChild.productId"
                class="carousel-goods-box flex flex-middle"
              >
                <div
                  class="carousel-goods-box__item flex flex-column flex-middle"
                >
                  <img
                    class="goods-box-item__cover"
                    :src="itemChild.productMainPicture"
                  />
                  <div class="goods-box-item__wrap">
                    <p class="box-item-wrap__title">
                      {{ itemChild.productName }}
                    </p>
                    <p>
                      <strong class="box-item-wrap__price"
                        >￥{{ itemChild.activityPrice }}</strong
                      >
                      <span class="box-item-wrap__price2"
                        >￥{{ itemChild.originalPrice }}</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </main>
</template>
<script>
import _ from "lodash";

const CAROUSEL_COUNT = 5; // 走马灯每页展示商品数

export default {
  name: "HomeSeckill",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    list: {
      Type: Object,
      default: () => [],
    },
    current: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      bkgUrl: require("~/assets/img/sckill/bkg-small.png"),
      goodsList: [],
      seckillTime: 0, // 秒杀时间
      seckillText: "", // 秒杀文案
      timeInterval: null, // 倒计时定时器
    };
  },
  watch: {
    list: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val.length > 0) {
          this.setCarouselData(val);
        }
      },
    },
    data: {
      deep: true,
      immediate: true,
      handler(val) {
        const {
          activityTimeVO: { activityStartTime, activityEndTime },
        } = val;
        this.setTimerInterval({
          startTime: activityStartTime,
          endTime: activityEndTime,
        });
      },
    },
  },
  computed: {
    // 秒杀活动倒计时
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
  },
  destroyed() {
    clearInterval(this.timeInterval);
  },
  methods: {
    // 走马灯商品列表，五个商品为一组
    setCarouselData(list) {
      const listCopy = _.cloneDeep(list);
      const part = Math.ceil(listCopy.length / CAROUSEL_COUNT);
      if (part === 1) {
        this.goodsList = [listCopy.splice(0, CAROUSEL_COUNT)];
        return;
      }
      for (let i = 0; i < part; i++) {
        const goodsListItem = listCopy.splice(0, CAROUSEL_COUNT);
        this.goodsList.push(goodsListItem);
      }
    },

    // 获取秒杀倒计时时间
    setTimerInterval({ startTime, endTime }) {
      startTime = startTime .replace(/\-/g, "/");
      endTime = endTime .replace(/\-/g, "/");
      startTime = new Date(startTime).getTime();
      endTime = new Date(endTime).getTime();
      if (this.current > startTime && this.current < endTime) {
        // 活动进行中
        this.seckillText = "距结束";
        this.seckillTime = endTime - this.current;
      } else {
        // 活动未开始
        this.seckillText = "距开始";
        this.seckillTime = startTime - this.current;
      }

      this.timeInterval = setInterval(() => {
        if (this.seckillTime <= 0) {
          clearInterval(this.timeInterval);
          this.$emit("refresh");
          return;
        }
        this.seckillTime -= 1000;
      }, 1e3);
    },
    onJumpSeckill() {
      window.open(`${location.origin}/seckill`);
    },
  },
};
</script>
<style lang="scss" scoped>
.home-sckill-bar {
  width: 100%;
  padding-bottom: 28px;
  .home-sckill-title {
    width: 110px;
    height: 26px;
    margin-right: 20px;
  }
  .home-sckill-wrap {
    .home-sckill-wrap__tip {
      font-size: 18px;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      font-weight: 400;
      color: #999999;
      margin-right: 10px;
    }
  }

  .home-sckill-wrap__countdown {
    .sckill-wrap-countdown__time {
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #ffffff;
      font-size: 18px;
      font-weight: bold;
      background: #2f3430;
    }
    .sckill-wrap-countdown--mark {
      display: block;
      font-size: 20px;
      margin: 0 8px;
    }
  }
}
.home-sckill {
  height: 300px;
  cursor: pointer;
  margin-bottom: 60px;
  .home-sckill-carousel {
    /deep/.el-carousel {
      width: 1200px;
      border-radius: 4px;
      .el-carousel__container {
        padding: 0 10px;
        background: #ffffff;
        .el-carousel__arrow {
          border-radius: 45%;
          i {
            font-size: 14px;
            font-weight: bold;
          }
          &--left {
            left: -11px;
            i {
              margin-left: 5px;
            }
          }
          &--right {
            right: -11px;
            i {
              margin-right: 5px;
            }
          }
        }
      }
      .carousel-goods {
        height: 100%;
        background: #f8f8f8;
        .carousel-goods-box {
          margin-right: 15px;
          width: 228px;
          height: 300px;
          background: #ffffff;
          border-radius: 4px;
          .carousel-goods-box__item {
            width: 100%;
            padding: 20px 24px;
            transition: all .3s;

            &:hover {
              transform: translateY(-3px);
            }

            .goods-box-item__cover {
              width: 140px;
              height: 140px;
              object-fit: productMainPicture;
              margin-bottom: 24px;
            }
            .goods-box-item__wrap {
              font-size: 16px;
              color: #333333;
              text-align: center;
              width: 100%;
              .box-item-wrap__title {
                @include ellipsis;
                margin-bottom: 20px;
              }
              .box-item-wrap__price {
                color: #ff512b;
                text-align: center;
                margin-right: 15px;
              }
              .box-item-wrap__price2 {
                color: #999999;
                text-decoration: line-through;
              }
            }
          }
        }
      }
    }
  }
}
</style>
