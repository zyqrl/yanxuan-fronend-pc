<!--
 * @Author: ch
 * @Date: 2022-05-04 17:56:39
 * @LastEditors: ch
 * @LastEditTime: 2022-06-25 10:10:25
 * @Description: file content
-->
<template>
  <div class="layout">
    <BsLogin :visible.sync="loginVisible" />
    <Header :is-sticky="isSticky" />
    <div class="layout-content">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
import BsLogin from "@/components/BsLogin.vue";
import Header from "./module/header/index.vue";
import Footer from "./module/footer/index.vue";

export default {
  name: "Layout",
  components: { Header, Footer, BsLogin },
  data() {
    return {
      isSticky: false,
    };
  },
  computed: {
    loginVisible: {
      get() {
        return this.$store.state.loginVisible;
      },
      set(val) {
        this.$store.commit("setLoginVisible", val);
      },
    },
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener("scroll", this.scrollEventMethod);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollEventMethod);
  },
  methods: {
    scrollEventMethod() {
      this.isSticky = window.scrollY > 300;
    },
  },
};
</script>
<style lang="scss" scoped>
.layout {
  .layout-content {
    min-height: calc(100vh - 400px);
  }
}
</style>
