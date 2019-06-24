

import axios from "axios"


// axios.defaults.baseURL = "http://localhost:1902/";   // 应用的基路径 



let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token;   // 请求头  token 空 
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头




import router from "@/router"
import { Toast } from 'vant';

// 请求的拦截器  // 很强大  拦截器 
axios.interceptors.request.use(function (config) {

    let userInfo = window.sessionStorage.userInfo;
    // console.log(userInfo)
    if(userInfo){
        userInfo = JSON.parse(userInfo);
        token = userInfo.token;
    }
    config.headers.common['token'] = token;

    // ajax 请求发送之前 
    // Indicator.open({
    //     text: '加载中...',
    //     spinnerType: 'triple-bounce'
    // });
    // Toast.loading({
    //     mask: true,
    //     message: '加载中...'
    //   });
    return config;
  }, function (error) {
    // Toast({
    //     message:"未知错误-req",
    //     duration:400
    // });
    Toast.loading({
        mask: true,
        message: '未知错误-req'
      });
      Toast.clear();
    // Indicator.close();
    // ajax 请求无法发送  
    return Promise.reject(error);
});

// 响应的拦截器 
axios.interceptors.response.use(function (response) {
    // 成功接收到后台返回的数据 
    // console.log(111111111111)

    // console.log(response)
    Toast.clear();

    // Indicator.close();
    if(response.data.code=='401'){
       Toast.loading({
        mask: true,
        message: response.data.msg
      });
        // 默认token 失效  
        router.push({name:'login'})
    }
    // Toast.loading({
    //     mask: true,
    //     message: response.data.msg
    //   });
    // Toast({
    //     message:response.data.msg,
    //     iconClass: 'icon iconfont icon-success',
    //     duration:400
    // });


    return response;
}, function (error) {
    // 后台数据返回失败 
    Toast.loading({
        mask: true,
        message: '未知错误-res'
      });
      Toast.clear();
    // Toast({
    //     message:"未知错误-res",
    //     duration:400
    // });
    // Indicator.close();
    return Promise.reject(error);
});



export default axios