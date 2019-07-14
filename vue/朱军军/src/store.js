// 1:
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 1. Vuex 的状态存储是响应式的
// 2. 你不能直接改变 store 中的状态 。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation

import axios from "@/utils/axios.js"

import {CHANGE_CARNUM} from "@/utils/mutate_types"
export default new Vuex.Store({
  state: {//如果state都报错undefined   那么就可能是main.js没有全局引入注册
    // vue全部数据科在此处管理, 不相关 兄弟 组件交互方便
    roitCoin:1,
    // 3:
    data:{
      projects:[],
    }
  },
  actions: {
      changeCarNumber({commit},num){//num为5参数
        commit(CHANGE_CARNUM,num)
    },
    // 4:
    getProjects({commit},{url,cb,params}){//params
      axios.get(url,{
        params:params//params
      }).then(res=>{
        cb();
        commit("getProjects",res.data.result);//res.data.result数据传递给mutations,里面的goods行参
        console.log(res.data.result);
      })
    }
  },
  mutations:{
    [CHANGE_CARNUM](state,num){//方法函数
      switch(state.roitCoin){
        // case 0:
        //     state.roitCoin += num;
        //     break;
        case 1:
            state.roitCoin -=num;
            break;
        case -1:
            state.roitCoin +=num;
            break;  
            default:break;   
      }
        
    },
    // 5
    getProjects(state,projects){//
          state.data = {...state.data,projects}//
      }
  }
  
})
