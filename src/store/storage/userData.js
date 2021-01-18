const UserDataKey = 'user_data';

/** 从本地存储中获取用户信息 */
export function getUserData() {
  return uni.getStorageSync(UserDataKey)
    ? JSON.parse(uni.getStorageSync(UserDataKey))
    : uni.getStorageSync(UserDataKey);
}

/**
 * 将用户信息存进本地存储中
 * @param {object} userData 用户信息
 */
export function setUserData(userData) {
  return uni.setStorageSync(UserDataKey, JSON.stringify(userData));
}

/** 清除本地存储中的用户信息 */
export function removeUserData() {
  return uni.removeStorageSync(UserDataKey);
}
