

import axios from "axios";

// axios.defaults.baseURL="http://localhost:1902/";//应用基路径,跨域不用

// 很强大  axios的拦截器 (search功能)

import {Toast} from 'vant';

//1.5： token   请求数据之前需要配置请求头
let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token;   // 请求头  token 空 
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头

import router from "@/router"

// 请求的拦截器 
axios.interceptors.request.use(function (config) {
    //4;
    // let userInfo = window.sessionStorage.userInfo;
    // if(userInfo){
    //     userInfo = JSON.parse(userInfo);
    //     token = userInfo.token;
    // }

    // 前端配置token
    // 使用的是username
    let user = window.sessionStorage.username;
    if(user){
        token=user;
    }   
    config.headers.common['token'] = token;  //headers.token
    // ajax 请求发送之前 
    // 提示关闭
    // Toast.loading({
    //     mask: false,
    //     message: '加载中...',
    //     duration:400
    //   });
    return config;
  }, function (error) {
    Toast.fail({
        message:"未知错误-req",
        duration:400
    });
    
    // ajax 请求无法发送  
    return Promise.reject(error);
});


// 响应的拦截器 
axios.interceptors.response.use(function (response) {
    // 成功 接收到后台返回的数据 
    console.log(response)//req接受数据

    
    if(response.data.code=='401'){
        // 默认token 失效  ,跳转登陆界面
        router.push({name:'login'})
    }
    // 请求成功提示关闭
    // Toast.success({
    //     message:response.data.msg,//成功信息
    //     duration:400
    // });
    return response;
}, function (error) {
    // 后台数据返回失败 
    Toast.fail({
        message:"未知错误-res",
        duration:400
    });
    

    return Promise.reject(error);
});

export default axios;