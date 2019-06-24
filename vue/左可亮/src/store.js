

//  vuex    采用集中式存储管理应用的所有组件的状态

import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

// store 拆分
const selectModule  = {
    state:{
        sele:"home",
    },
    actions:{

    },
    mutations:{
        changeSele(state,sele){
            state.sele = sele;
        }
    },
    getters:{

    }
}

//  每一个 Vuex 应用的核心就是 store（仓库） “store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)
// 1. Vuex 的状态存储是响应式的
// 2. 你不能直接改变 store 中的状态 。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation
// Vuex 使用单一状态树  一个对象就包含了全部的应用层级状态  所有组件的数据存储 一个对象 state 

import {CHANGE_MSG,CHANGE_CARNUM} from "@/utils/mutate_types"

import axios from "@/utils/ajax"

// 合并到store 
const store = new Vuex.Store({
    modules:{
        selected:selectModule
    },
    state:{   // 对象就包含了全部的应用层级状态
        count:1902,
        city:"china-武汉",
        msg:"daydayup",
        login:{},
        good:{},
        carNum:11,
        keyword:"123",
    
        data:{
            mv:[],
            goods:[],
            types:[],
            allGoods:[]
        }
    },
    actions:{   
        // Action 提交的是 mutation，而不是直接变更状态  Action 可以包含任意异步操作  ajax 

        countAdd(context){     // context  vuex 注入 store 负责 提交 mutation
            console.log("action do!");
            context.commit("countAddLove")  // commit 提交mutation type 
        },
        countDesc(context,num){
            context.commit("countDesc",num);
        },
        increment(context,num){
            context.commit("increment",num)
        },
        changeCity({commit},city){  //context== {commit:commit} = {commit }
            commit("changeCity",city)
        },
        changeMsgBy({commit},msg){
            commit(CHANGE_MSG,msg);
        },
        changeCarNumber({commit},num){
            commit(CHANGE_CARNUM,num)
        },
        getMv({commit},mv){
            commit("getMv",mv);
        },
        getSearchGoods({commit},{url,cb,params}){
            axios.get(url,{
                params:params
            }).then(res=>{
                cb(); // 执行一些回调 
                commit("getSearchGoods",res.data.result);
            })
        },
        changeCityAjax({commit},{url,cb}){
            axios.get(url)  
            .then(res=>{
                cb();
                commit("changeCityAjax",res.data.msg)
            })
        },
        getTypesAjax({commit},{url}){
            axios.get(url)  
            .then(res=>{
                commit("getTypesAjax",res.data.result);
            })
        },
        getAllGoodsAjax({commit},{url,cb}){
            axios.get(url)  
            .then(res=>{
                cb();
                commit("getAllGoodsAjax",res.data.result);
            })
        }

    },
    mutations:{
        // Mutation  更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
        countAddLove(state){   // state ==> store.state 
            console.log("mutations do");
            console.log(state);
            state.count++;
        },
        countDesc(state,num){
            state.count-=num;
        },
        increment(state,num){
            state.count+=num;
        },
        changeCity(state,city){
            state.city = city;
        },
        [CHANGE_MSG](state,msg){  // route[pathname](req,res)   changeMsg:function(){}
            state.msg = msg;
        },
        [CHANGE_CARNUM](state,num){
            state.carNum += num;
        },
        getMv(state,mv){
            // vuex 数据是响应式   但是修改的数据要让vuex 可以监测   新对象替换老对象
            console.log(mv);
            state.data = {...state.data,mv:mv};
        },
        getSearchGoods(state,goods){
            state.data = {...state.data,goods}
        },
        changeCityAjax(state,city){
            state.city = city;
        },
        getTypesAjax(state,types){
            state.data = {...state.data,types}
        },
        getAllGoodsAjax(state,allGoods){
            state.data = {...state.data,allGoods}
        },
        getKeyword(state,keyword){
            state.keyword = keyword;
        }
    },
    getters:{   //  需要从 store 中的 state 中派生出一些状态
        newMv(state){
            return state.data.mv.filter((m,i)=>i%2==0);
        },
        newTypes(state){
            return state.data.types.map((item,i)=>{
                item.text = item.text +"_"+ i
                return item;
            })
        }
    }
})

export default store;