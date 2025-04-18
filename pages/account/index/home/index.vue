<!--
 * @Author: ch
 * @Date: 2022-05-04 17:27:37
 * @LastEditors: ch
 * @LastEditTime: 2022-06-28 16:38:18
 * @Description: file content
-->

<template>
  <div class="account-home">
    <div class="account-home-head flex">
      <div
        class="account-home-head__info flex"
        :style="{ backgroundImage: `url(${userInfoBkg})` }"
      >
        <img class="home-head-info__avatar" :src="userInfo.avatar" />
        <div class="home-head-info__wrap">
          <span class="head-info-wrap__title">{{ userInfo.nickname }}</span>
          <span>第一个青春是上帝给的...</span>
        </div>
      </div>
      <div class="account-home-head__order flex flex-middle flex-between">
        <div
          v-for="(item, index) in orderTypes"
          :key="index"
          @click="$router.push(item.path)"
          class="account-home-content__item flex flex-column flex-middle"
        >
          <img :src="item.icon" />
          <span>{{ item.label }}</span>
          <div v-if="item.count > 0" class="account-home-content__item--count">
            {{ item.count }}
          </div>
        </div>
      </div>
    </div>
    <div class="account-home-content flex">
      <LogisitcsInfo />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { ORDER_STATUS } from "@/constants";
import {
  ApiGetOrderStatistics,
  ApiGetRefundStatistisc,
} from "@/plugins/api/order";
import LogisitcsInfo from "./module/LogisitcsInfo.vue";

export default {
  name: "AccountHome",
  components: { LogisitcsInfo },
  data() {
    function getOrderTypeIcon(path) {
      return require(`~/assets/img/account/home/${path}.png`);
    }
    return {
      userInfoBkg: require("~/assets/img/account/home/bkg-user-info.png"),
      orderTypes: [
        {
          key: "unpaidCount",
          label: "待付款",
          icon: getOrderTypeIcon("icon-order1"),
          path: `/account/order/list?type=${ORDER_STATUS.WAIT_PAY}`,
          count: 0,
        },
        {
          key: "waitDeliveryCount",
          label: "待发货",
          icon: getOrderTypeIcon("icon-order2"),
          path: `/account/order/list?type=${ORDER_STATUS.WAIT_SEND}`,
          count: 0,
        },
        {
          key: "deliveredCount",
          label: "待收货",
          icon: getOrderTypeIcon("icon-order3"),
          path: `/account/order/list?type=${ORDER_STATUS.WAIT_RECEIVE}`,
          count: 0,
        },
        {
          key: "waitComment",
          label: "待评价",
          icon: getOrderTypeIcon("icon-order4"),
          path: `/account/order/list?type=${ORDER_STATUS.WAIT_COMMENT}`,
          count: 0,
        },
        {
          key: "progressCount",
          label: "退款/售后",
          icon: getOrderTypeIcon("icon-order5"),
          path: "/account/order/saleAfter/list",
          count: 0,
        },
        {
          key: "",
          label: "全部订单",
          icon: getOrderTypeIcon("icon-order6"),
          path: "/account/order/list",
        },
      ],
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  created() {
    this.getOrderStatisticsData();
  },
  methods: {
    // 获取订单统计数据
    async getOrderStatisticsData() {
      const [{ result }, { result: resultRefund }] = await Promise.all([
        ApiGetOrderStatistics(),
        ApiGetRefundStatistisc(),
      ]);
      const resultData = Object.assign({}, result, resultRefund);
      this.orderTypes.forEach((item) => {
        if (resultData[item.key] > 0) {
          Object.assign(item, { count: resultData[item.key] });
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.account-home {
  .account-home-head {
    margin-bottom: 30px;
    .account-home-head__info {
      width: 338px;
      height: 164px;
      background-size: 100% 100%;
      padding: 49px 26px;
      margin-right: 30px;
      border: 1px solid #ffffff;
      box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.06);
      border-radius: 4px;
      .home-head-info__avatar {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        margin-right: 16px;
        object-fit: cover;
      }
      .home-head-info__wrap {
        color: #666666;
        font-size: 14px;
        .head-info-wrap__title {
          font-size: 20px;
          color: #333333;
          margin-bottom: 14px;
        }
        span {
          display: block;
        }
      }
    }
    .account-home-head__order {
      width: 630px;
      height: 164px;
      padding: 0 58px;
      background: #ffffff;
      border-radius: 4px;
      box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.06);
      cursor: pointer;
      .account-home-content__item {
        position: relative;
        font-size: 14px;
        color: #333333;
        text-align: center;
        &:last-child {
          padding-right: 0;
        }
        .account-home-content__item--count {
          position: absolute;
          top: -3px;
          right: -3px;
          width: 24px;
          height: 24px;
          font-size: 14px;
          background: #ff512b;
          color: #ffffff;
          border-radius: 14px 14px 14px 14px;
          border: 2px solid #ffffff;
        }
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
</style>
