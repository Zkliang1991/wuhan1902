import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:1902';

import { Toast } from 'vant';

//设置请求头
let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token; //请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'//配置请求头
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    let userInfo = window.sessionStorage.userinfo;
    if (userInfo) {
        userInfo = JSON.parse(userInfo);
        token = userInfo.token;
    }
    config.headers.common['token'] = token;
    Toast.loading({
        mask: true,
        message: '加载中...'
    });
    return config;
}, function (error) {
    Toast.fail('请求失败');
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    Toast.success(response.data.msg);
    return response;
}, function (error) {
    Toast.fail('未知错误');
    // 对响应错误做点什么
    return Promise.reject(error);
});



export default axios;

