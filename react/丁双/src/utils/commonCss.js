


export const css = {
    all:{
        padding:0,
        margin:0,
        listStyle:"none",
        boxSizing:"border-box"
    }
}

export const myEvent = {
    some(){
        console.log("这是全局的 变量函数");
    }
}

export const getQuery = (search)=>{
    var url = require("url");
    return (
        url.parse(search,true).query
    )
}