

// export const axios = "axios";

// class Promise{
//     then(){

//     }

//     catch(){

//     }
// }

// resolve 成功回调
// reject 失败回调
// var p = new Promise(function(resolve,reject){

// })
// p.then();
var querystring = require("querystring");
export const ajax = {
    get:function(url,params){
        // console.log(params);
        var obj = null;
        if(params){
            var obj = params.params;
            obj = querystring.stringify(obj);
        }
        console.log(obj)
        const promise = new Promise(function(resolve,reject){
            const client = new XMLHttpRequest();  //创建请求头
            client.open("GET",url+"?"+obj,true);  // 创建连接  true 表异步
            var handler = function(){
                if(this.readyState !== 4){
                    return ;
                }
                if(this.status == 200){
                    resolve({data:this.response});  //成功回调  得到响应的数据
                }else{
                    reject(new Error(this.statusText)) // 失败回调
                }
            }
            client.onreadystatechange = handler;
            client.responseType = "json"; //设置拿回数据格式
            client.setRequestHeader("Accept","application/json");  //设置请求头
            client.send();
        })
        return promise;
    },
    post:function(){

    }
}