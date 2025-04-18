export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    // 获取用户信息
    const { token, userInfo } = app.store.state;
    if (token && Object.keys(userInfo).length === 0) {
      app.store.dispatch("getUserInfo");
    }
    next();
  });
};
