import axios from "axios";

import { Toast } from 'vant';
import router from "../router";
// axios里的 请求头
let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common["token"] = token;
axios.defaults.headers.post["Content-Type"] = 'application/json;charset=UTF-8';

// 很强大  拦截器
// 请求的拦截器
axios.interceptors.request.use(function (config) {
    let userInfo = window.sessionStorage.userInfo;
    if (userInfo) {
        userInfo = JSON.parse(userInfo);
        token = userInfo.token;
    }
    // 将前端 sessionStorage 里面的 token取出来 传入 请求头中

    config.headers.common["token"] = token;

    // ajax 请求发送之前
    // Indicator.open({
    //     text: "加载中...",
    //     spinnerType: "double-bounce"
    // });
    return config;
}, function (error) {
    // Toast({
    //     message:"未知错误-req",
    //     duration:500
    // });
    Toast.fail('失败文案');
    // ajax 请求无法发送
    Indicator.close();
    return Promise.reject(error);
})

// 响应的拦截器
axios.interceptors.response.use(function (response) {
    // 成功接收到后台返回的数据
    // Indicator.close();
    // Toast({
    //     message:response.data.msg,
    //     duration:500
    // });
    if (response.data.code === 401) {
        // 默认token 失效
        Toast.fail('token不存在或已失效，请重新登录');
        router.push({ name: "login" });
    }
    return response;

}, function (error) {
    // 后台返回数据失败
    // Toast({
    //     message:"未知错误-res",
    //     duration:500
    // });
    


    // Indicator.close();
    return Promise.reject(error);
})

export default axios;