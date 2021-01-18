const ExpiresInKey = 'expires_in';

/**
 * 从本地存储中获取token有效期
 */
export function getExpiresIn() {
  return uni.getStorageSync(ExpiresInKey) ? parseInt(uni.getStorageSync(ExpiresInKey)) : null;
}

/**
 * 将token有效期存入本地存储
 * @param {number} expiresIn token有效期，单位：毫秒
 */
export function setExpiresIn(expiresIn) {
  return uni.setStorageSync(ExpiresInKey, expiresIn);
}

/**
 * 清除本地存储中的token有效期
 */
export function removeExpiresIn() {
  return uni.removeStorageSync(ExpiresInKey);
}
