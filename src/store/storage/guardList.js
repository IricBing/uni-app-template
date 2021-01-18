const GuardListKey = 'guardList';

/** 从本地存储中获取用户权限列表 */
export function getGuardList() {
  return uni.getStorageSync(GuardListKey)
    ? JSON.parse(uni.getStorageSync(GuardListKey))
    : uni.getStorageSync(GuardListKey);
}

/**
 * 将用户权限列表存入本地存储中
 * @param {string[]} guardList 用户权限列表
 */
export function setGuardList(guardList) {
  return uni.setStorageSync(GuardListKey, JSON.stringify(guardList));
}

/** 清除本地存储中的用户权限信息 */
export function removeGuardList() {
  return uni.removeStorageSync(GuardListKey);
}
