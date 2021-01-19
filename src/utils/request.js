import Request from 'luch-request';
import indexConfig from '../config';

const server = new Request();

server.setConfig(config => {
  config.baseURL = indexConfig.baseUrl;
  const systemInfo = uni.getSystemInfoSync();
  config.header = Object.assign(config.header, {
    'device-name': systemInfo.brand, // 设备名称
    width: systemInfo.screenWidth, // 屏幕宽度
    height: systemInfo.screenHeight, // 屏幕高度
    os: systemInfo.platform, // 客户端平台
    'os-version': systemInfo.system // 操作系统版本
  });
  return config;
});

/** 请求之前拦截器 */
server.interceptors.request.use(
  config => {
    // config.header['Authorization'] = store.state.accessToken;
    return config;
  },
  error => Promise.reject(error)
);

/** 返回拦截器 */
server.interceptors.response.use(
  response => response.data,
  error => Promise.reject('请求出错')
);

export default server;
