


import axios from "axios";

// 若使用了代理就把基路径注释掉
// axios.defaults.baseURL = "http://0.0.0.0:2019/";

// 不想用代理就把token去掉，用了代理就把基路径去掉

// let token = "";
// axios.defaults.withCredentials = false;
// axios.defaults.headers.common['token'] = token;   // 请求头  token 空 
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头

import { Toast} from 'antd-mobile';

function loadingToast(msg) {
    Toast.loading(msg, 1, () => {
    //   console.log('');
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

import {history} from "&";

// 请求的拦截器 
axios.interceptors.request.use(function (config) {

    // let userInfo = window.sessionStorage.userInfo;
    // if(userInfo){
    //     userInfo = JSON.parse(userInfo);
    //     token = userInfo.token;
    // }
    // config.headers.common['token'] = token;   // headers.token 

    // ajax 请求发送之前 
    Toast.hide();
    loadingToast('请求中...');
    return config;
  }, function (error) {
    Toast.hide();
    failToast('请求失败');
    // ajax 请求无法发送  
    return Promise.reject(error);
});

// 响应的拦截器 
axios.interceptors.response.use(function (response) {
    // 成功接收到后台返回的数据 
    console.log(response)
   
    if(response.data.code=='401'){
        // 默认token 失效  
        history.push('/login');
    }
    
    setTimeout(()=>{
        successToast(response.data.msg);
    },500)
    return response;
}, function (error) { 
    // 后台数据返回失败 
   Toast.hide();
   failToast('响应失败');
    return Promise.reject(error);
});


export {axios} 