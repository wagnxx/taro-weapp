export default {
  pages: [
    "pages/lazy/index",
    "pages/about/index",
    "pages/contact/index",
    "pages/user/index",
    "pages/index/index",
  ],
  tabBar: {
    list: [
      {
        pagePath: "pages/lazy/index",
        text: "首页",
      },
      {
        pagePath: "pages/about/index",
        text: "关于",
      },
      {
        pagePath: "pages/user/index",
        text: "我的",
      },
      {
        pagePath: "pages/contact/index",
        text: "联系我们",
      },
    ],
  },

  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
};
