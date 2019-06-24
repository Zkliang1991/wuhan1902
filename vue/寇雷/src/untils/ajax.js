

import axios from "axios";

// axios.defaults.baseURL = "http://localhost:1902/";   //如果有反向代理那么这局话就要删掉

//很强大  拦截器
import { Toast } from 'vant';

let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token ;  //请求头   token 空
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; //配置

import router from "@/router.js";

//请求的拦截器
axios.interceptors.request.use(function(config){
    let userInfo = window.sessionStorage.userInfo;
    if(userInfo){
        userInfo = JSON.parse(userInfo);
        token = userInfo.token;
    }
    config.headers.common['token'] = token;

    //ajax请求发送之前
    Toast.loading({
        mask: true,
        message: '加载中...'
    });
    return config;
},function(err){
    //ajax请求无法发送
    Toast.fail('加载失败,请稍后重试....');
    return Promise.reject(err);
})

//响应拦截器
axios.interceptors.response.use(function(response){
    //ajax成功接收到后台的数据
    Toast.clear();
    if(response.data.code == "401"){
        //默认token失效
        Toast.fail(response.data.msg);
        router.push({name:"login"});   //暂时注释  好写代码
    } else {
        if(response.data.type){
            if(response.data.type == 1){
                // Toast.success(response.data.msg);   屏蔽提示
            } else {
                Toast.fail(response.data.msg);
            }
        } else {
            Toast.success(response.data.msg);
        }
    }

    return response;
},function(error){
    //ajax无法接收到后台的数据
    Toast.fail('数据获取失败');
    Toast.clear();
    return Promise.reject(error);
})

export default axios;