<template>
  <div class="seckill-tabbar flex flex-between">
    <div
      v-for="item in list"
      :key="item.id"
      @click="onTabClick(item.id)"
      class="sckill-header-tabbar__item flex flex-middle flex-center"
      :class="{
        'sckill-header-tabbar__item--active': item.id === tabId,
      }"
    >
      <strong class="header-tabbar-item__time">{{ item.timeName }}</strong>
      <div class="header-tabbar-item__tip">
        {{ item.isInProgress ? "抢购中" : "即将开抢" }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SeckillTabBar",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    tabId: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    onTabClick(id) {
      // 点击同一个tab
      if (id === this.tabId) {
        return;
      }
      this.$emit("tab-change", id);
    },
  },
};
</script>
<style lang="scss" scoped>
.seckill-tabbar {
  width: 100%;
  height: 60px;
  cursor: pointer;
  overflow: hidden;
  .sckill-header-tabbar__item {
    width: 100%;
    font-size: 12px;
    background: #ffffff;
    color: #666666;
    .header-tabbar-item__time {
      font-size: 18px;
      color: #333333;
      margin-right: 22px;
    }
    .header-tabbar-item__tip {
      width: 69px;
      height: 22px;
      line-height: 22px;
      text-align: center;
      border: 1px solid #999999;
      border-radius: 2px;
    }
    &--active {
      background: linear-gradient(270deg, #ffa25a 0%, #ff7f39 100%);
      color: #ffffff;
      .header-tabbar-item__time {
        font-size: 24px;
        color: #ffffff;
      }
      .header-tabbar-item__tip {
        border-color: #ffffff;
      }
    }
  }
}
</style>
