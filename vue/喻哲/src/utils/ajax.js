
import axios from 'axios';


// axios.defaults.baseURL="http://localhost:1995";


import {
    Toast
} from 'vant'; //loading

let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token; // 请求头 token 空
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

import router from '@/router'

// 请求的拦截器
axios.interceptors.request.use(function (config) {
    let userInfo = window.sessionStorage.userInfo || "";
    if (userInfo) {
        userInfo = JSON.parse(userInfo);
        token = userInfo.token;
        config.headers.common['token'] = token;
    }

    // ajax 请求发送之前
    Toast.loading({
        duration: 0,
        mask: false,
        message: '加载中'
    });


    return config;
}, function (error) {
    // 请求无法发送
    Toast({
        fail: '未知错误',
        icon: "clear"
    });
    return Promise.reject(error);
});

// 响应的拦截器
axios.interceptors.response.use(function (response) {
    // 成功接收到后台的返回数据
    if (response.data.code == 401) {
        router.push({
            name: "login"
        })
    }
    if (response.data.type == 1) {
        Toast.success(response.data.msg)
    } else {
        Toast.fail(response.data.msg)
    }
    // console.log(response)
    return response;
}, function (error) {
    //  后台数据返回失败
    Toast({
        fail: '未知错误-res',
        icon: "clear"
    });
    return Promise.reject(error);
})

export default axios;