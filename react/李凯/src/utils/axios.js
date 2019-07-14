import axios from "axios";
import { Toast } from "antd-mobile";
import { history } from "@/utils/history"

function loadingToast(msg) {
  Toast.loading(msg, 1, () => {
    // console.log("Load complete !!!");
  });
}

function showToastNoMask(msg) {
  Toast.info(msg, 2, null, false);
}

function successToast(msg) {
  Toast.success(msg, 1);
}

function failToast(msg) {
  Toast.fail(msg, 1);
}

// 应用的基路径
//  ！！！如果使用了 反向代理来解决 跨域问题时 就不要设置基路径  使用代理的路径
axios.defaults.baseURL = "http://47.93.13.72:1902/";

// axios里的 请求头
// let token = "";
// axios.defaults.withCredentials = false;
// axios.defaults.headers.common["token"] = token;
// axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

// 很强大  拦截器
// 请求的拦截器
axios.interceptors.request.use(
  function(config) {
    // let userInfo = window.sessionStorage.userInfo;
    // if (userInfo) {
    //   userInfo = JSON.parse(userInfo);
    //   token = userInfo.token;
    // }
    // 将前端 sessionStorage 里面的 token取出来 传入 请求头中

    // config.headers.common["token"] = token;

    // ajax 请求发送之前
    Toast.hide();
    loadingToast("请求中...");
    return config;
  },
  function(error) {
    // ajax 请求无法发送
    failToast("请求失败");
    return Promise.reject(error);
  }
);

// 响应的拦截器
axios.interceptors.response.use(
  function(response) {
    // 成功接收到后台返回的数据

    if (response.data.code === 401) {
      // 默认token 失效
      history.push("/login");
    }
    console.log(response);
    successToast(response.data.msg);
    return response;
  },
  function(error) {
    // 后台返回数据失败
    failToast("响应失败");
    return Promise.reject(error);
  }
);

export  {axios};
