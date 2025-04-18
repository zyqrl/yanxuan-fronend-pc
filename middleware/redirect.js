export default function ({ app, route, redirect }) {
  if (!app.store.state.token) {
    // 未登录直接打开需要登录的页面，跳转首页
    const needLoginPage = [/\/account/, /\/cart/];
    const result = needLoginPage.some((item) => item.test(route.path));
    if (result) {
      redirect("/");
    }
  }
}
