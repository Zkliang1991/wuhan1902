import axios from "axios";
import router from "@/router";
import { Toast } from 'vant';
let token = "";
axios.defaults.withCredentials = false;
//默认请求头为空
axios.defaults.headers.common['token'] = token;
//配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(function (config) {
    let userInfo = sessionStorage.userInfo;
    if (userInfo) {
        userInfo = JSON.parse(userInfo);
        token = userInfo.token;
    }
    config.headers.common['token'] = token;
    //ajax请求发送之前

    // Toast.loading({
    //     mask: true,
    //     message: '加载中...'
    // });
    return config;
}, function (error) {
    Toast.fail('未知错误!');
    return Promise.reject(error);
});

// 响应的拦截器 
axios.interceptors.response.use(function (response) {
    // 成功接收到后台返回的数据 
    Toast.clear({
        mask: false,
    });
    if (response.data.code == '401') {
        // 默认token 失效  
        router.push({ name: 'login' })
    }
    return response;
}, function (error) {
    // 后台数据返回失败 
    Toast.fail('未知错误!');
    return Promise.reject(error);
});

export default axios;