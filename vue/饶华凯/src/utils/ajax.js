import axios from "axios";

// axios.defaults.baseURL = "http://localhost:1902";
import { Toast } from 'vant';


let token = "";
axios.defaults.headers.common['token'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


import router from "@/router"


// 添加请求拦截器
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    let userInfo = window.sessionStorage.userInfo;
    if (userInfo) {
        // userInfo = JSON.parse(userInfo);
        // var token = userInfo.token;
        var token = userInfo;
        console.log(token)
        config.headers.common['token'] = token;
    };


    Toast.loading({
        mask: true,
        message: '加载中...',
        loadingType: "spinner",
        mask: false,
        // duration: 500
    });
    return config;
}, function(error) {
    // 对请求错误做些什么
    Toast.fail({
        message: '加载失败',
        duration: 2000
    });
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    Toast.success({
        message: response.data.msg,
        duration: 500
    });

    if (response.data.code === 401) {
        router.push({ name: "login" })
    }
    return response;
}, function(error) {
    // 对响应错误做点什么
    Toast.fail({
        message: '加载失败',
        duration: 500
    });
    return Promise.reject(error);
});

export default axios;