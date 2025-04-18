<template>
  <div class="error-page flex flex-middle flex-center">
    <img class="error-page-cover" src="~/assets/img/layout/error.png" />
    <div class="error-page-content">
      <div>此页面不存在或找不到</div>
      <div class="error-page-content__tip">
        <p>检查您的网址是否拼写正确</p>
        <p>检查您是否使用了错误的网址转接</p>
      </div>
      <UiButton :radius="true" type="yellow_gradual" @click="onJumpHomePage"
        >回到首页</UiButton
      >
    </div>
  </div>
</template>
<script>
import UiButton from "@/components/UiButton";
export default {
  name: "ErrorPage",
  components: { UiButton },
  methods: {
    onJumpHomePage() {
      this.$router.replace("/");
    },
  },
};
</script>
<style lang="scss" scoped>
.error-page {
  height: calc(100vh - 400px);
  .error-page-cover {
    width: 286px;
    height: 254px;
    margin-right: 109px;
  }
  .error-page-content {
    font-size: 20px;
    color: #666666;
  }
  .error-page-content__tip {
    font-size: 14px;
    line-height: 20px;
    color: #999999;
    margin: 30px 0;
  }
  /deep/.ui-button {
    width: 121px;
    height: 30px;
  }
}
</style>
