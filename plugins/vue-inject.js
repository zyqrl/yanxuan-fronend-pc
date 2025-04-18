import Vue from "vue";
import { TOKEN_KEY } from "@/constants";

const injectOptions = {
  // 是否需要登录拦截，如果未登录，会默认唤起登录弹窗
  $isLoginValidate() {
    if (this.$cookies.get(TOKEN_KEY)) {
      return true;
    }
    this.$store.commit("setLoginVisible", true);
    return false;
  },
};

for (let key in injectOptions) {
  Vue.prototype[key] = injectOptions[key];
}
