/*
 * @Author: ch
 * @Date: 2022-05-04 20:35:20
 * @LastEditors: ch
 * @LastEditTime: 2022-06-10 10:56:09
 * @Description: file content
 */
import { TOKEN_KEY,UUID_KEY } from "@/constants";
import { ApiGetCurrentUser, ApiPostLogout } from "@/plugins/api/account";
import { ApiGetCartList } from "@/plugins/api/cart";
import { ApiGetCategoryOneList } from "@/plugins/api/goods";
const ONE_DAY = 86400000; // 一天的毫秒数 24 * 60 * 60 * 1000;

const state = () => ({
  token: "",
  uuid : '',
  userInfo: {},
  loginVisible: false, // 是否展示登录弹窗
  seckillTabVisible: false, // 公共头是否展示秒杀tab
  cartProducts: [], // 购物车列表
  categroyData: [], // 公共页头分类数据
  unreadCount:0, //未读消息数量
  socketMsgData: [], //消息数据对象
});
const mutations = {
  setUserInfo(state, info) {
    state.userInfo = info;
  },

  setUUID(state, uuid) {
    state.uuid = uuid;
    this.$cookies.set(UUID_KEY, uuid, {
      path: "/",
      maxAge: ONE_DAY,
    });
  },
  setToken(state, token) {
    state.token = token;
    this.$cookies.set(TOKEN_KEY, token, {
      path: "/",
      maxAge: ONE_DAY,
    });
  },
  setLoginOut(state) {
    state.token = "";
    state.userInfo = {};
    this.$cookies.remove(TOKEN_KEY);
  },
  setLoginVisible(state, visible) {
    state.loginVisible = visible;
  },
  setSeckillTabVisible(state, visible) {
    state.seckillTabVisible = visible;
  },
  setCartProducts(state, val) {
    state.cartProducts = val;
  },
  setCategroyData(state, val) {
    state.categroyData = val;
  },
  setUnreadCount(state, val){
    state.unreadCount = val;
  },
  setSocketMsgData(state, val){
    state.socketMsgData = val;
    console.log(state.socketMsgData)
  }
};
const actions = {
  async nuxtServerInit({ state, commit, dispatch }) {
    // 设置uuid
    const uuid =  this.$cookies.get(UUID_KEY);
    if (!state.uuid && uuid) {
      commit("setUUID", uuid);
    }
    // 设置token数据
    const token = this.$cookies.get(TOKEN_KEY);
    if (!state.token && token) {
      commit("setToken", token);
    }
    // 获取分类数据
    const { result } = await ApiGetCategoryOneList();
    if (result) {
      commit("setCategroyData", result);
    }
  },
  async getUserInfo({ commit }) {
    const { result } = await ApiGetCurrentUser();
    if (result) {
      commit("setUserInfo", result);
    }
  },

  // 退出登录
  async logout({ commit }) {
    await ApiPostLogout();
    commit("setLoginOut");
  },

  // 获取购物车数据
  async getCartProducts({ commit }) {
    const { result } = await ApiGetCartList();
    if (result) {
      commit("setCartProducts", result);
    }
  },
};

export { state, mutations, actions };
