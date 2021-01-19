const config = {
  // 开发环境配置
  development: {
    assetsPath: '/static', // 静态资源路径
    baseUrl: 'http//127.0.0.1:3000/'
  },
  // 生产环境配置
  production: {
    assetsPath: '/static', // 静态资源路径
    baseUrl: 'http//127.0.0.1:3000/' // 后台接口请求地址
  }
};

export default config[process.env.NODE_ENV];
