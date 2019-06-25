//  vuex    采用集中式存储管理应用的所有组件的状态


import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//  每一个 Vuex 应用的核心就是 store（仓库） “store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)
// 1. Vuex 的状态存储是响应式的
// 2. 你不能直接改变 store 中的状态 。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation
// Vuex 使用单一状态树  一个对象就包含了全部的应用层级状态  所有组件的数据存储 一个对象 state 



const store = new Vuex.Store({
    state: { //对象就包含了全部的应用层级状态
        msg: "daydayup",
    },
    actions: {

    },
    mutations: {

    },
    getters: {

    }
})

export default store;

// export default new Vuex.Store({
//     state: {
//     },
//     mutations: {
//     },
//     actions: {
//     }
// })