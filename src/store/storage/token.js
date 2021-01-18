const TokenKey = 'token';

/** 从本地存储中获取token */
export function getToken() {
  return uni.getStorageSync(TokenKey);
}

/**
 * 将token信息存入本地存储
 * @param {string} token token值
 */
export function setToken(token) {
  return uni.setStorageSync(TokenKey, token);
}

/** 清除本地存储中的token信息 */
export function removeToken() {
  return uni.removeStorageSync(TokenKey);
}
