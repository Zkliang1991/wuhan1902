import axios from "axios";
import { Toast } from "vant";
import router from "@/router"

// axios.defaults.baseURL = "http://localhost:1902/"       //基路径

//配置请求头
let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token;   //请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

//拦截器
axios.interceptors.request.use(function(config){

  //每次发动前取token值
  let userInfo = window.sessionStorage.userInfo;
  if(userInfo){
    userInfo = JSON.parse(userInfo);
    token = userInfo.token;
  }
  config.headers.common['token'] = token;

    // ajax 请求发送前
    Toast.loading({
        mask: true,
        message: "请稍等...",
      });
    return config;
},function(error){
    Toast.loading({
        mask: true,
        message: "请求遇到未知错误",
        duration: 700
      });
    // ajax 请求无法发送
    return Promise.reject(error);
})

axios.interceptors.response.use(function(response){
    Toast.success({
        mask: true,
        message: response.data.msg,
        duration: 700
      });
    // 成功接受到后台返回的数据
    if(response.data.code == "401"){    //token失效，跳转登录
      router.push({name:"login"})
    }
    return response;
},function(error){
    Toast.loading({
        mask: true,
        message: "未知错误-res",
        duration: 700
      });
    // 后台返回数据失败
    return Promise.reject(error);
})






export default axios;