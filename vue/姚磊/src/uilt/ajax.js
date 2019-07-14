import axios from "axios";

axios.defaults.baseURL = 'http://localhost:1902'; //应用的基路径

//axois 很强大，有拦截器的功能
export default axios; //default 默认

// 添加请求拦截器
/* import { Toast } from 'vant';
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    Toast.loading({
        mask: true,
        loadingType: 'spinner',
        message: '加载中...'
    });
    return config;
}, function(error) {
    // 对请求错误做些什么
    Toast({
        message: "未知错误-req",
        duration: 400
    })
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    Toast({
        message: response.data.msg,
        duration: 400
    });
    return response;
}, function(error) {
    Toast({
        message: "未知错误-res",
        duration: 400
    });
    // 对响应错误做点什么
    return Promise.reject(error);
}); */