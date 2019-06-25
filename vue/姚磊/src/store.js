//vuex  采用集中式存储管理应用的所有组件的状态
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

//  每一个 Vuex 应用的核心就是 store（仓库） “store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)
// 1. Vuex 的状态存储是响应式的
// 2. 你不能直接改变 store 中的状态 。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation
// Vuex 使用单一状态树  一个对象就包含了全部的应用层级状态  所有组件的数据存储 一个对象 state 

import { GET_MSG, SHUJU } from "@/uilt/muta_type"

const store = new Vuex.Store({
    state: {
        count: 1998,
        city: "武汉",
        carNum: 21,
        numw: "新的实验对象",
        msg: "深圳",
        nums: 18,
        data: {
            mv: [],
        }
    },
    actions: {
        shuju1(content) {
            console.log("数据1");
            content.commit("shuju2")
        },
        shuju3(content, num) {
            console.log("数据3");
            content.commit(SHUJU, num)
        },
        /*  newsj(item, num) {
             console.log("新数据");
             item.commit("shujunew", num)
         }, */
        /* chagecity({ commit }, city) {
            commit("chagecity", city)
        }, */
        getMsg({ commit }, msg) {
            commit(GET_MSG, msg)
        },
        getMv({ commit }, mv) {
            commit("getMv", mv)
        }
    },
    mutations: {
        shuju2(state) {
            console.log("数据2")
            console.log(state);
            state.count++;
        },
        [SHUJU](state, num) {
            console.log("数据4SHUJU");
            state.count--;
        },
        shujunew(state, num) {
            console.log("新数据的mutatoins")
            state.carNum += num;
        },
        chagecity(state, city) {
            state.city = city;
        },
        [GET_MSG](state, msg) {
            state.msg = msg;
        },
        shulian(state) {
            state.nums += 2;
        },
        getMv(state, mv) {
            // vuex 数据是响应式   但是修改的数据要让vuex 可以监测   新对象替换老对象
            console.log(mv)
            state.data = {...state.data, mv: mv };
        }
    },
    /* getters:{   //  需要从 store 中的 state 中派生出一些状态
        newMv(state){
            return state.data.mv.filter((m,i)=>i%2==0);
        },
        newTypes(state){
            return state.data.types.map((item,i)=>{
                item.text = item.text +"_"+ i
                return item;
            })
        }
    } */
    getters: { //需要从store中的state中派生的一些状态
        newMv(state) {
            return state.data.mv.filter((m, i) => i % 2 == 0);
        }

    }
})

export default store;