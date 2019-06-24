import axios from "axios";

// axios.defaults.baseURL = "http://localhost:1902/"

import { Toast } from "vant";

import routre from "@/router"
let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/json;charsrt=UTF-8';


axios.interceptors.request.use((config) => {
    console.log(config);
    let Usertoken = window.sessionStorage.Usertoken;
    let token = "";
    if (Usertoken) {
        Usertoken = JSON.parse(Usertoken)
        token = Usertoken.token;
    }
    config.headers.common['token'] = token;
    Toast.loading({
        mask: true,
        duration: 500,
        message: "请稍后..."
    });
    return config;
}, (error) => {
    Toast.fail({
        duration: 200,
        message: "请求错误"
    });
    Toast.clear();
    return Promise.reject(error)
});

axios.interceptors.response.use((response) => {
    console.log(response);
    Toast.clear();
    if (response.data.code == '401') {
        routre.push({ name: 'login' })
    }
    Toast.success({
        duration: 500,
        message: response.data.msg
    });
    return response;
}, (error) => {
    Toast.fail({
        duration: 200,
        message: "响应错误"
    });
    Toast.clear();
    return Promise.reject(error);
})

export default axios;
