<template>
  <div class="layout-footer">
    <div class="layout-footer-wrap">
      <div class="layout-footer-wrap__promise flex flex-middle flex-between">
        <div
          v-for="(item, index) in promiseList"
          :key="index"
          class="wrap-promise-item flex flex-middle"
        >
          <img :src="item.icon" />
          <div class="wrap-promise-item__info">
            <strong>{{ item.label }}</strong>
            <p class="promise-item-info__desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
      <div class="layout-footer-wrap__line"></div>
      <div class="layout-footer-wrap__address">
        © 2020 马士兵（北京）教育科技有限公司
        地址：北京市海淀区北三环中路44号4号楼1层114 京ICP备17012835号-1
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LayoutFooter",
  data() {
    return {
      promiseList: [
        {
          label: "马士兵严选",
          desc: "甄选优品",
          icon: require("~/assets/img/layout/footer-1.png"),
        },
        {
          label: "100%正品",
          desc: "正品保障",
          icon: require("~/assets/img/layout/footer-2.png"),
        },
        {
          label: "365天质保",
          desc: "品质护航 购物无忧",
          icon: require("~/assets/img/layout/footer-3.png"),
        },
        {
          label: "售后无忧",
          desc: "无忧退货",
          icon: require("~/assets/img/layout/footer-4.png"),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.layout-footer {
  background: #eeeeee;
  .layout-footer-wrap {
    @include layout-box;
    .layout-footer-wrap__promise {
      padding: 42px 72px;
      .wrap-promise-item {
        img {
          width: 48px;
          height: 48px;
          margin-right: 20px;
        }
        .wrap-promise-item__info {
          color: #999999;
          font-size: 18px;
          .promise-item-info__desc {
            margin-top: 6px;
            font-size: 14px;
          }
        }
      }
    }
    .layout-footer-wrap__line {
      width: 100%;
      height: 1px;
      background: #cccccc;
    }
    .layout-footer-wrap__address {
      width: 496px;
      margin: 0 auto;
      padding: 20px 0;
      font-size: 12px;
      color: #999999;
      text-align: center;
      line-height: 20px;
    }
  }
}
</style>
