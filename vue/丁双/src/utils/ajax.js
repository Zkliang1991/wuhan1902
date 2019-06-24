

import axios from "axios";

// axios.defaults.baseURL = "http://localhost:1902/";   // 应用的基路径 

// 很强大  拦截器 

import { Toast} from 'vant';


let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token;   // 请求头  token 空 
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头


import router from "@/router"

// 请求的拦截器 
axios.interceptors.request.use(function (config) {

    let userInfo = window.sessionStorage.userInfo;
    if(userInfo){
        userInfo = JSON.parse(userInfo);
        token = userInfo.token;
    }
    config.headers.common['token'] = token;   // headers.token 

    // ajax 请求发送之前 
    Toast({
        message:"努力加载中...",
        duration:400
    });
    return config;
  }, function (error) {
    Toast({
        message:"未知错误-req",
        duration:400
    });
    // ajax 请求无法发送  
    return Promise.reject(error);
});

// 响应的拦截器 
axios.interceptors.response.use(function (response) {
    // 成功接收到后台返回的数据 
    // console.log(response)
    if(response.data.code=='401'){
        // 默认token 失效  
        router.push({name:'login'})
    }
    Toast({
        message:'刷新成功',
        duration:400
    });


    return response;
}, function (error) {
    // 后台数据返回失败 
    Toast({
        message:"未知错误-res",
        duration:400
    });
    return Promise.reject(error);
});



export default axios;