

import axios from "axios";

//  axios.defaults.baseURL= "http://localhost:1902/";

// import route from "@/router"
import { Toast } from 'vant';
import router from "../router";//引入路由

let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common["token"] = token //请求头是空
axios.defaults.headers.post["'Content-type"] = "application/json:charset=UTF-8"

axios.interceptors.request.use(function (config) {
    // ajax 请求发送之前
    let userInfo = window.sessionStorage.userInfo
    if (userInfo) {
        userInfo = JSON.parse(userInfo);
        let token = userInfo;
        config.headers.common['token'] = token//把token放入到请求头中
    }
    // console.log(config, "8888")
    if (config.url != "/vue/cartJoinjiajia") {

        Toast.loading({
            mask: true,
            message: '加载中...'
        });
    }
    return config;
}, function (error) {
    Toast.fail('未知错误');
    Toast.clear();
    // ajax 请求无法发送  
    return Promise.reject(error);
});



//响应拦截器
axios.interceptors.response.use(function (response) {
    // 成功接收到后台返回的数据 

    Toast.clear();//关闭弹框

    if (response.data.code == '401') {
        //默认token失效 重定向到登录页面
        router.push({ name: "login" })
        sessionStorage.usename = ""
        sessionStorage.touxiang = ""


    }
    // console.log(response, "11111")
    if (response.data.msg !== "修改成功") {

        Toast.success({
            message: response.data.msg,
            duration: 1000
        });
    }


    return response;
}, function (error) {
    // 后台数据返回失败 
    Toast.fail({
        message: "未知错误-res",
        duration: 1000//弹出框的时间
    });
    Toast.clear();
    return Promise.reject(error);
});

export default axios;