module.exports = {
  baseUrl: 'pages/user/',
  children: [
    {
      path: 'register',
      title: '注册',
      name: 'register',
      home: true,
      style: {
        navigationBarTextStyle: 'black'
      },
      meta: {
        guard: ['userRegister']
      }
    },
    {
      path: 'login',
      title: '登录',
      name: 'login'
    }
  ]
};
