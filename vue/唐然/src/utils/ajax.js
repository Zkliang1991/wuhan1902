

import axios from "axios";


// 很强大  拦截器 


let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token;   // 请求头  token 空 
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头


import router from "@/router"

// 请求的拦截器 
axios.interceptors.request.use(function (confing) {
    let userInfo = window.sessionStorage.userInfo;
    if (userInfo) {
        userInfo = JSON.parse(userInfo);
        token = userInfo.token;
    }
    confing.headers.common['token'] = token;
    //ajax 请求之前

    return confing
}, function (error) {

    // ajax 请求无法发送 
    return Promise.reject(error);
})



// 响应的拦截器 
axios.interceptors.response.use(function (response) {
    // 成功接收到后台返回的数据 
    console.log(response)
    if (response.data.code == '401') {
        // 默认token 失效  
        router.push({ name: 'user' })
        // sessionStorage.removeItem('userInfo')
        // history.go(0);
    }


    return response;
}, function (error) {
    // 后台数据返回失败 
    return Promise.reject(error);
});

export default axios;