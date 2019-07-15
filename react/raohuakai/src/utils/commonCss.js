

export const css = {
    all:{
        padding:0,
        margin:0,
        listStyle:"none",
        boxSizing:"border-box"
    }
}


export const MyEvent = {
    some(){
        console.log("这是 react 全局 变量 函数  ")
    }
}




export const getQuery = (search)=>{
    var url = require("url");
    return url.parse(search,true).query;
}