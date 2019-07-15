


// export const axios = "axios";


// class Promise{

//     then(){

//     }

//     catch(){
        
//     }
// }

// resolve 成功回调   then
// reject 失败回调   catch
// var p = new Promise(function(resolve,reject){

// })

// p.then();

var querystring = require("querystring");

export const ajax = {
    get:function(url,params){
        console.log(params);
        var obj = null;
        if(params){
            var obj = params.params;
            obj = querystring.stringify(obj);
        }
        console.log(obj)
        
        const promise = new Promise(function(resolve,reject){
            const handler = function(){
                if(this.readyState!==4){
                    return ;
                }
                if(this.status == 200){
                    resolve({data:this.response});  // 成功 得到响应的数据 
                }else{
                    reject(new Error(this.statusText))
                }
            }

            const client = new XMLHttpRequest();  // 创建请求头 
            client.open("GET",url+"?"+obj,true);
            client.onreadystatechange = handler;
            client.responseType = "json";
            client.setRequestHeader("Accept","application/json");
            client.send();

            
        })

        return promise;
    },
    post:function(){

    }
}



