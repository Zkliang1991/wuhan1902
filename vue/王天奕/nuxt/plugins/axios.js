



import axios from "axios";



// 很强大  拦截器 

// import { Indicator ,Toast} from 'mint-ui';


// let token = "";
// axios.defaults.withCredentials = false;
// axios.defaults.headers.common['token'] = token;   // 请求头  token 空 
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头


// import router from "@/router"

// // 请求的拦截器 
// axios.interceptors.request.use(function (config) {

//     let userInfo = window.sessionStorage.userInfo;
//     if(userInfo){
//         userInfo = JSON.parse(userInfo);
//         token = userInfo.token;
//     }
//     config.headers.common['token'] = token;   // headers.token 

//     // ajax 请求发送之前 
//     Indicator.open({
//         text: '加载中...',
//         spinnerType: 'triple-bounce'
//     });
//     return config;
//   }, function (error) {
//     Toast({
//         message:"未知错误-req",
//         duration:400
//     });
//     Indicator.close();
//     // ajax 请求无法发送  
//     return Promise.reject(error);
// });

// // 响应的拦截器 
// axios.interceptors.response.use(function (response) {
//     // 成功接收到后台返回的数据 
//     console.log(response)
//     Indicator.close();
//     if(response.data.code=='401'){
//         // 默认token 失效  
//         router.push({name:'login'})
//     }
//     Toast({
//         message:response.data.msg,
//         duration:400
//     });


//     return response;
// }, function (error) {
//     // 后台数据返回失败 
//     Toast({
//         message:"未知错误-res",
//         duration:400
//     });
//     Indicator.close();
//     return Promise.reject(error);
// });



export default axios;