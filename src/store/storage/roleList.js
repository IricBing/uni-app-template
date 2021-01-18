const RoleListKey = 'roleList';

/** 从本地存储中获取RoleList */
export function getRoleList() {
  return uni.getStorageSync(RoleListKey)
    ? JSON.parse(uni.getStorageSync(RoleListKey))
    : uni.getStorageSync(RoleListKey);
}

/**
 * 将用户角色信息存入uni中
 * @param {string[]} roleList 用户角色列表
 */
export function setRoleList(roleList) {
  return uni.setStorageSync(RoleListKey, JSON.stringify(roleList));
}

/** 清除本地存储中的用户角色信息 */
export function removeRoleList() {
  return uni.removeStorageSync(RoleListKey);
}
