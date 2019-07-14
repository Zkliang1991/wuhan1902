


export const COUNTADD = "countAdd";
export const countAdd = count=>{
    return {
        type:COUNTADD,
        count
    }
}


import {axios} from '&';
export const GETBANNER = "getBanner";
export async function getBanner({url,params}){
    const res = await axios.get(url,{params});

    return {
        type:GETBANNER,
        banner:res.data.result
    }
}

//所有商品
export const GETALLGOODS = "GETALLGOODS";
export async function getAllGoods({url}){
    const res = await axios.get(url);
    const data = res.data.result.map((item)=>{
        item.name = item.title;
        return item
    })
    return {
        type:GETALLGOODS,
        allGoods:data
    }
}


// 获取分类
export const GETGOODTYPES = "getGoodTypes";
export async function getGoodTypes({url}){
    const res = await axios.get(url);
    const data = res.data.result.map((item)=>{
        item.title = item.text
        return item
    })
    return {
        type:GETGOODTYPES,
        types:data
    }
}

//商品详细
export const GETDETAILGOOD = "getDetailGood";
export async function getDetailGood({url,params}){
    const res = await axios.get(url,{params});
    return {
        type:GETDETAILGOOD,
        good:res.data.result
    }
}

// 搜索商品
export const GETSEARCH = "getSearch";
export async function getSearchGoods({url,params}){
    const res = await axios.get(url,{params});
    return {
        type:GETSEARCH,
        data:res.data.result
    }
}

export const SETTAB = "setTab";
export const setTab = tab=>{
    return {
        type:SETTAB,
        tab
    }
}

// 设置当前URL的值 
export const SETNEWURL = "setNewUrl";
export const setNewUrl = url=>{
    return {
        type:SETNEWURL,
        url
    }
}

// 设置oldUrl
export const SETOLDURL = "SETOLDURL";
export const setOldUrl = url=>{
    return {
        type:SETOLDURL,
        url
    }
}

// 列表商品反转
export const REVERSEGOODS = "reverseGoods";
export const reverseGoods = ()=>{
    return {
        type:REVERSEGOODS
    }
}

// 搜索商品翻转
export const REVERSESEARCHGOODS = "REVERSESEARCHGOODS";
export const reverseSearchGoods = ()=>{
    return {
        type:REVERSESEARCHGOODS
    }
}

// 获取购物车所有商品
export const GETCARTALLGOODS = "getCartAllGoods";
export async function getCartAllGoods({url,params}){
    const res = await axios.get(url,{params});
    res.data.result.map((item,i)=>{
        return (
            item.checked = true
        )
    })
    return {
        type:GETCARTALLGOODS,
        allCartGoods:res.data.result
    }
}

// 单选
export const CHACKONE = "checkOne";
export  function checkOne(allCartGoods,checked,id){
    // console.log(allCartGoods,!checked,id);
    allCartGoods = allCartGoods.map((item)=>{
        if(item.goodId == id){
            item.checked = !checked;
        }
        return item
    })
    // console.log(allCartGoods);
    return {
        type:CHACKONE,
        allCartGoods
    }
}

// 单选控制全选
export const CHANGEQUAN = "changeQuan";
export function changeQuan(allCartGoods){
    var flag = true;
    allCartGoods.map((item)=>{
        if(item.checked == false){
            flag = false;
        }
        return flag
    })
    return {
        type:CHANGEQUAN,
        flag
    }
}



// 全选
export const QUANXUAN = "quan";
export function quanxuan(allCartGoods,checked){
    allCartGoods = allCartGoods.map((item)=>{
        item.checked = !checked;
        return item
    })
    console.log(!checked)
    console.log(allCartGoods)
    return {
        type:QUANXUAN,
        checked:!checked,
        allCartGoods
    }
}
