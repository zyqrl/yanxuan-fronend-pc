<!--
 * @Author: ch
 * @Date: 2022-05-04 17:48:12
 * @LastEditors: ch
 * @LastEditTime: 2022-05-20 10:19:35
 * @Description: file content
-->

<template>
  <main class="main flex flex-column flex-middle">
    <p class="main-title">售后订单</p>
    <img class="main-img" src="@/assets/img/common/app-qrcode.jpg" alt="" />
    <p class="main-txt">请前往移动端查看售后订单</p>
  </main>
</template>
<script>
export default {
  data() {
    return {};
  },

  methods: {},
};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  border: 1px solid #dddddd;

  &-title {
    width: 100%;
    height: 42px;
    background: #f8f8f8;
    border-bottom: 1px solid #dddddd;
    font-size: 14px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    color: #333333;
    line-height: 42px;
    padding-left: 24px;
  }

  &-img {
    width: 140px;
    height: 140px;
    margin: 110px 0 20px;
  }

  &-txt {
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #999999;
  }
}
</style>
