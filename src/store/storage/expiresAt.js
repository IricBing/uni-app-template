const ExpiresAtKey = 'expires_at';

/**
 * 从本地存储中获取token过期时间
 */
export function getExpiresAt() {
  return uni.getStorageSync(ExpiresAtKey) ? parseInt(uni.getStorageSync(ExpiresAtKey)) : null;
}

/**
 * 将token过期时间存入本地存储
 * @param {number} expiresIn token过期时间，精确到毫秒
 */
export function setExpiresAt(expiresAt) {
  return uni.setStorageSync(ExpiresAtKey, expiresAt);
}

/**
 * 清除本地存储中的token过期时间
 */
export function removeExpiresAt() {
  return uni.removeStorageSync(ExpiresAtKey);
}
