import axios from "axios";

// axios.defaults.baseURL = "http://localhost:1902"; // 项目应用的基路径


// 前端 数据请求  配置 header  添加 token 
// 很强大  拦截器 

let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token; // 请求头  token 空 
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; //配置请求头


import router from "@/router"

import { Toast } from 'vant';
// 请求的拦截器 
axios.interceptors.request.use(function(config) {

    let userInfo = window.sessionStorage.userInfo;
    if (userInfo) {
        userInfo = JSON.parse(userInfo);
        token = userInfo.token;
    }
    config.headers.common['token'] = token; // headers.token 

    // ajax 请求发送之前
    Toast.loading({
        message: '加载中...'
    });
    return config;
}, function(error) {
    // ajax 请求无法发送
    Toast.fail('未知错误');
    Toast.clear();
    return Promise.reject(error);
});

// 响应的拦截器 
axios.interceptors.response.use(function(response) {
    // 成功接收到后台返回的数据
    console.log(response);
    Toast.clear();
    Toast(response.data.msg);
    if (response.data.code == '401') {
        // 默认token 失效
        router.push({ name: 'login' });
    }
    return response;
}, function(error) {
    // 后台数据返回失败
    Toast.fail('未知错误');
    // Toast.clear();
    return Promise.reject(error);
});




export default axios;