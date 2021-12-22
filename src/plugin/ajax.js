import flyio from "flyio";
import config from "@/config";
import { useTokenModel } from "@/store/user";
import { filterObject, getType } from "@/helper";
import { isRealEmpty } from "@/helper/validate";

// request拦截器
flyio.interceptors.request.use(conf => {
  conf.baseURL = config.baseURL;
  conf.headers["Content-Type"] = "application/json;charset=UTF-8";
  conf.timeout = 0;
  const { token } = useTokenModel.data;
  if (token) {
    conf.headers.token = token;
  }
  // 参数处理
  if (conf.body && getType(conf.body) === "object") {
    let { __filterEmpty = 1, ...query } = conf.body;
    if (__filterEmpty) {
      query = filterObject(query);
    }
    conf.body = isRealEmpty(query) ? undefined : query;
  }
  return conf;
});

// respone拦截器
flyio.interceptors.response.use(
  ({ data }) => {
    const status = Number(data.status);
    if (status !== config.successCode) {
      alert(data.message);
      return Promise.reject(data);
    }
    return data;
  },
  error => {
    // 这里是返回状态码不为200时候的错误处理
    const messages = {
      400: "请求错误",
      401: "未授权，请登录",
      403: "拒绝访问",
      404: `请求地址出错 ${error?.response?.config?.url}`,
      408: "请求超时",
      500: "服务器内部错误",
      501: "服务未实现",
      502: "网关错误",
      503: "服务不可用",
      504: "网关超时",
      505: "HTTP版本不受支持",
    };
    let message = error?.response?.data?.message;
    if (!message) {
      message = messages[error.status];
    }
    alert(message);
    return Promise.reject(error);
  }
);
