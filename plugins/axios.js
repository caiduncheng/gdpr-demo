import { Message } from "element-ui";
import { getCookie, removeToken } from "@/utils";

export default function ({ $axios, store }) {
  // 数据访问前缀
  $axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
  // request拦截器
  $axios.onRequest((config) => {    
    // if (!config.headers["WEB-TOKEN"]) {
    //   config.headers["WEB-TOKEN"] = store.getters.token;
    // }
    // 将获取到token加入到请求头中
    config.headers["LANG"] = store.state.locale || "en-US";
  });
  // response拦截器，数据返回后，可以先在这里进行一个简单的判断
  $axios.interceptors.response.use(
    (response) => {
      const res = response.data;
      return res;
    },
    (error) => {
      if (error.message.indexOf('timeout') !== -1) {
        return Promise.reject('Connection timeout')
      }
      if (error.response) {
        const status = error.response.status;
        if (status === 401) {
          removeToken();
          return Promise.reject(error);
        }
        let errorMessage;
        if (error.response.data.message) {
          let message = error.response.data.message
          let code = error.response.data.code
          errorMessage = { message, code };
        } else {
          let message = error.message
          let code = error.code
          errorMessage = { message, code };
        }
        return Promise.reject(errorMessage);
      }
      return Promise.reject('Network Error')
      // Message({
      //   message: errorMessage,
      //   type: "error",
      //   duration: 5 * 1000,
      // });
    }
  );
}
