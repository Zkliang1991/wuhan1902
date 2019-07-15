import { FENLEI,  PINGLUNSHUJU ,ADDSUBJECT, HUOQUJUTIFENLEI, SHUANGCHUANTOUXIANF, CHNENGJICHAXUN, HUOQUGERENXIANGMU,DELETESUBJECT} from "../actions";

const defaultStat={
    classify:[],  //科目分类
    addSubject:[],  //全部科目
    getAddcomment:[],//获取评论内容
    pageContent:[],//分类成功后的数据
    xiangqing:{},
    intiComment:[
        { username: "小王",content: "一个比较简单的轻量级项目"},
        { username: "翠花",content: "我自学前端开发，从这个项目中学到了很多"},
        { username: "张明",content: "前端没有bug，任何技术都是简单的，看一看就会了"},
        { username: "小刚",content: "都是些入门项目，我脚写vue，react，前端技术全部精通"},
    ],
    getSpecificClass:[],//改卷分类
    num:1,//辅助
    tiuxianglujin:"",//上传头像
    chengjiFind:[], //搜索结果
    MySubmitProject:[]  //获取我提交的项目
    

}
export const data=(state=defaultStat,action)=>{
    switch(action.type){
        
        case FENLEI:
            return {...state,classify:action.classify[0],addSubject:action.classify[1]}
        // break;

        case ADDSUBJECT:
            return {...state,addSubject:action.addSubject,num:--state.num}
        // break;

        case PINGLUNSHUJU:
            return{...state,getAddcomment:((action.getAddcomment.reverse()).concat(state.intiComment))}
        // break;

        case HUOQUJUTIFENLEI:
            return  {...state,getSpecificClass:action.getSpecificClass,num:++state.num};
        // break;
        
        case "XINGQING":
            return{...state,xiangqing:action.data}
        // break;

        case SHUANGCHUANTOUXIANF:
            return {...state,tiuxianglujin:action.tuxianglujin,num:++state.num}
        // break;

        case CHNENGJICHAXUN :
            return{...state,chengjiFind:action.chengjiFind}
        // break;

        case "pageContent":
            return{...state,pageContent:action.pageContent,num:++state.num}

        case HUOQUGERENXIANGMU:
            return {...state,MySubmitProject:action.MySubmitProject,num:++state.num}

        case DELETESUBJECT:
            return{...state,MySubmitProject:state.MySubmitProject}


        default:
            return state
        break;
    }
        
}