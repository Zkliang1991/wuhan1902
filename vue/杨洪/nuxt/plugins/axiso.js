

import axios from "axios"

// axios.defaults.baseURL = "http://localhost:1902/";   // 应用的基路径 
// import { Toast } from 'vant';
// axios.interceptors.request.use(function(config){
   
//     return config
// },function(error){
//     Toast({
//         message:"未知错误-req",
//         duration:400
//     });
//     Indicator.close();
//     // ajax 请求无法发送  
//     return Promise.reject(error)
// });


// axios.interceptors.response.use(function(response){
//     console.log(response)
 
//     return response
// },function(error){
//     return Promise.reject(error)
//     // Toast({
//     //     message:"未知错误-res",
//     //     duration:400
//     // });
//     // Indicator.close();
//     // // ajax 请求无法发送  
// })

export default axios;