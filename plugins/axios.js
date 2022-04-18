import { Message } from "element-ui";
import config from "../config";
import { getCookie, removeToken } from "@/utils";

export default function ({ $axios, store }) {
  // 数据访问前缀
  $axios.defaults.baseURL = config[process.env.NODE_ENV].VUE_APP_BASE_API;
  // request拦截器
  $axios.onRequest((config) => {    
    // 将获取到token加入到请求头中
    config.headers["WEB-TOKEN"] = getCookie("TOMS_TOKEN") || getCookie("token");
    config.headers["TOMS-LANG"] =
      store.state.locale || "en-US";
  });
  // response拦截器，数据返回后，可以先在这里进行一个简单的判断
  $axios.interceptors.response.use(
    (response) => {
      const res = response.data;
      return res;
    },
    (error) => {
      const status = error.response.status;
      if (status === 401) {
        removeToken();
        return Promise.reject(error);
      }
      let errorMessage;
      if (error.response.data.message) {
        errorMessage = error.response.data.message;
      } else {
        errorMessage = error.message;
      }
      Message({
        message: errorMessage,
        type: "error",
        duration: 5 * 1000,
      });
      return Promise.reject(error);
    }
  );
}
