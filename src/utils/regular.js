/**
 * 正则检查手机号是否正确
 * @param {string} phone 手机号
 */
export const regularPhoneNumber = phone => /^1[3456789]\d{9}$/.test(phone);

/**
 * 检查UUID格式是否正确
 * @param {string} uuid UUID字符串
 */
export const regularUUID = uuid => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid);
