export const isEmpty = (data) => {
  return data === "" || data === null || data === undefined || (typeof data === "number" && isNaN(data));
};

// 是不是链接
export const isUrl = (url) => {
  return /^https?:\/\/.+/.test(url);
};

// 是不是小程序地址
export const isMiniPath = (path = "") => {
  return /^\/?pages\/\w.+?\/\w.+?\/\w.+?/.test(path);
};

// 车牌号的正则
export const isCarNumber = (carNumber) => {
  if (typeof carNumber !== "string") {
    return false;
  }
  const regExp =
    /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Za-z]{1}[A-Za-z]{1}(([0-9]{5}[DFdf])|([DFdf]([A-HJ-NP-Za-hj-np-z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Za-z]{1}[A-Za-z]{1}[A-HJ-NP-Za-hj-np-z0-9]{4}[A-HJ-NP-Za-hj-np-z0-9挂学警港澳]{1})$/;
  return regExp.test(carNumber);
};

// 手机号码的正则
export const isPhoneNumber = (phone) => {
  const regExp = /^[1]([3-9])[0-9]{9}$/;
  return regExp.test(phone);
};

// 是不是数字
export const isNumberLike = (data) => {
  return /^[\d]+$/g.test(data) && Number(data) < Number.MAX_SAFE_INTEGER;
};

// json字符串
export const isJsonString = (str) => {
  try {
    if (typeof JSON.parse(str) === "object") {
      return true;
    }
  } catch (e) {}
  return false;
};

// 判断是不是IE浏览器
export const isIE = (() => !!window.ActiveXObject || "ActiveXObject" in window)();
// 判断是不是IOS
export const isIos = (() => /(iPhone|iPad|iPod|iOS|Safari)/i.test(navigator.userAgent))();
// 判断是不是Android
export const isAndroid = (() => /(Android)/i.test(navigator.userAgent))();
