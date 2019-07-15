
import {axios} from "&"


//请求科目分类
export const FENLEI="FENLEI";
export  async function getClassify(url,cb){
    const res=await axios(url);
    cb();   
    if(res.data.code!==401){
       
        return {
            type:FENLEI,
            classify:res.data.result
        }
    }else{
        return
    }
    
}

//请求全部科目数据
export const ADDSUBJECT="ADDSUBJECT";
export async function getAddSubject(url){
    const res=await axios.get(url);
    console.log("请求全部科目数据",res)
    if(res.data.code!==401){
        return{
            type:ADDSUBJECT,
            addSubject:res.data.result
        }
    }
   
};
//请求评论数据
export const PINGLUNSHUJU="PINGLUNSHUJU";
export async function getAddcomment(url,params){
    
    const res=await axios.get(url,params);
    console.log("评论",res)
    if(res.data.code!==401){
        return{
            type:PINGLUNSHUJU,
            getAddcomment:res.data.result
        }
    }
}


//获取具体分类成绩
export const HUOQUJUTIFENLEI="HUOQUJUTIFENLEI";
export async function getSpecificClass(url,params){
    const res=await axios.get(url,params);
    console.log("res",res)
    if(res.data.code!==401){
        console.log("---getClassify---",HUOQUJUTIFENLEI,res.data.result)
        return{
            type:HUOQUJUTIFENLEI,
            getSpecificClass:res.data.result
        }
    }
}

//上传头像后保存本地
export const SHUANGCHUANTOUXIANF="SHUANGCHUANTOUXIANF";
export const shangchuantouxiang=(tuxianglujin)=>{
        return{
            type:SHUANGCHUANTOUXIANF,
            tuxianglujin
        }
}

//搜索成绩
export const CHNENGJICHAXUN="CHNENGJICHAXUN";
export async function chengjiFind(url,params){
    var res=await axios(url,params);
    console.log(res);
    if(res.data.code!==401){
        return{
            type:CHNENGJICHAXUN,
            chengjiFind:res.data.result
        }
    }
}

//成绩分析分类
export const CHENGJIFENXI="CHENGJIFENXI";
export async function resultAnalyse(url){
    var res =await axios(url);
    console.log("成绩分析分类",res);
    if(res.data.code!==401){
        return{
            type:CHENGJIFENXI,
            resultAnalyse:res.data.result
        }
    }
}


//获取个人提交的项目
export const HUOQUGERENXIANGMU="HUOQUGERENXIANGMU";
export async function MySubmitProject(url){
    var res=await axios(url);
    console.log("获取个人提交的项目",res);
    if(res.data.code!==401){
        return{
            type:HUOQUGERENXIANGMU,
            MySubmitProject:res.data.result
        }
    }
}

//删除用户提交的成绩
export const DELETESUBJECT="DELETESUBJECT";
export async function deleteSubject(url,params,cb){
    var res=await axios(url,params);
    console.log("删除用户提交成绩",res);
    if(res.data.code!==401){
        cb()
        return{
            type:DELETESUBJECT,
            // deleteSubject:res.data.result
        }
    }
}