<!--
 * @Author: ch
 * @Date: 2022-05-04 17:49:21
 * @LastEditors: ch
 * @LastEditTime: 2022-05-27 15:40:36
 * @Description: file content
-->

<template>
  <div class="home-logisitcs">
    <div class="home-logisitcs-label">我的物流</div>
    <!-- 无物流信息 -->
    <div
      v-if="loadFinish && total === 0"
      class="home-logisitcs-empty flex flex-center flex-middle"
    >
      <img src="~/assets/img/account/home/logisitcs-empty.png" />
    </div>
    <!-- 有物流信息 -->
    <div v-else v-loading="loading">
      <div
        v-infinite-scroll="handleListload"
        class="home-logisitcs-content scrollbar-self"
      >
        <div
          v-for="item in list"
          :key="item.orderId"
          @click="onJumpOrderDetail(item.orderId)"
          class="home-logisitcs-content__item flex flex-middle flex-between"
        >
          <div class="logisitcs-content-item__info flex flex-start">
            <img :src="item.cover" />
            <div class="content-item-info__wrap flex-1">
              <p class="item-info-wrap__title">
                {{ item.logisticsContext }}
              </p>
              <div class="item-info-wrap__orderNo">
                <span v-if="item.logistics.companyName">{{
                  `${item.logistics.companyName }: ${item.logistics.trackingNo}`
                }}</span>
                <span class="item-info-wrap__orderNo--light">查看详情</span>
              </div>
            </div>
          </div>
          <UiButton
            type="yellow_line"
            :radius="true"
            @click="onOrderConfirm(item)"
            >确认收货</UiButton
          >
        </div>
      </div>
    </div>
    <UiConfirm
      title="确认收到货了吗？"
      :visible.sync="confirmOrderVisible"
      @confirm="handleOrderEnsure"
    />
  </div>
</template>
<script>
import { Message } from "element-ui";
import UiButton from "@/components/UiButton.vue";
import UiConfirm from "@/components/UiConfirm.vue";
import {
  ApiGetOrderLogisticsList,
  ApiPutOrderReceive,
} from "@/plugins/api/order";

export default {
  components: { UiButton, UiConfirm },
  data() {
    return {
      selectOrderId: 0,
      query: {
        pageIndex: 1,
        length: 15,
      },
      total: 0,
      confirmOrderVisible: false,
      list: [],
      loading: false,
      loadFinish: false,
    };
  },
  mounted() {
    this.getLogisticsList();
  },
  methods: {
    // 获取待收货物流信息
    async getLogisticsList() {
      this.loading = true;
      const { result } = await ApiGetOrderLogisticsList({ ...this.query });
      this.loading = false;
      this.loadFinish = true;
      if (result) {
        const { total, records } = result;
        this.total = total;
        if (records && records.length > 0) {
          const formatRecords = records.map((item) => {
            const goods = item.products || [{ productImageUrl: "" }];
            const logisticsList = item.logistics.logisticsDataList || [];
            return {
              ...item,
              cover: goods[0].productImageUrl, // 订单封面
              logisticsContext:
                (logisticsList.length > 0 && logisticsList[0].context) ||
                "暂无物流信息", // 物流详细信息
            };
          });
          this.list = this.list.concat(formatRecords);
        }
      }
    },
    onOrderConfirm({ orderId }) {
      this.selectOrderId = orderId;
      this.confirmOrderVisible = true;
    },
    // 上拉加载
    handleListload() {
      if (this.total > 0 && this.list.length < this.total) {
        // 执行接口请求
        this.query.pageIndex += 1;
        this.getLogisticsList();
      }
    },
    onJumpOrderDetail(id) {
      this.$router.push(`/account/order/detail?id=${id}`);
    },

    // 确认收货
    async handleOrderEnsure() {
      const { result } = await ApiPutOrderReceive({
        orderId: this.selectOrderId,
      });
      this.confirmOrderVisible = false;
      if (result) {
        Message.success("确认收货成功");
        this.list = [];
        this.query.pageIndex = 1;
        this.getLogisticsList();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.home-logisitcs {
  width: 620px;
  border: 1px solid #dddddd;
  .home-logisitcs-label {
    height: 42px;
    line-height: 42px;
    padding: 0 22px;
    border-bottom: 1px solid #dddddd;
    background: #f8f8f8;
    font-size: 14px;
    color: #333333;
  }
  .home-logisitcs-empty {
    height: 310px;
    img {
      width: 228px;
      height: 144px;
    }
  }
  .home-logisitcs-content {
    max-height: 620px;
    overflow: auto;
    padding: 30px;
    .home-logisitcs-content__item {
      margin-bottom: 30px;
      cursor: pointer;
      &:last-child {
        margin-bottom: 0;
      }
      .logisitcs-content-item__info {
        img {
          width: 60px;
          height: 60px;
          margin-right: 18px;
          border-radius: 2px;
        }
        .content-item-info__wrap {
          .item-info-wrap__title {
            width: 309px;
            font-size: 14px;
            color: #666666;
            margin-bottom: 8px;
            @include ellipses(2);
          }
          .item-info-wrap__orderNo {
            display: inline-block;
            color: #999999;
            font-size: 12px;
            span{

              margin-right: 30px;
            }
          }
          .item-info-wrap__orderNo--light {
            color: #ff875b;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
