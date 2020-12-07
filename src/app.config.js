export default {
  pages: [
    'pages/user/index',
    'pages/index/index',
    'pages/about/index',
    'pages/contact/index',
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/about/index',
        text: '关于'
      },
      {
        pagePath: 'pages/user/index',
        text: '我的'
      },
      {
        pagePath: 'pages/contact/index',
        text: '联系我们'
      },
    
    ]
  },
  
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
