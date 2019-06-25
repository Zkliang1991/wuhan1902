import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from '@/utils/ajax'
import { stat } from 'fs';

export default new Vuex.Store({
  state: {
    mine:{
      changebg:"notlogin",
      isLogin:false,
      username:"",
      headpic:"../assets/images/pic1.jpg",
      arr:{
          countShou:"--",
          countDian:"--",
          countZu:"--",
          countQuan:"--",   
      }
    },
    singel:{
      good:{},

    },
    buycart:{
      goods:"",
      deleteShow:true,
      manage:"管理"

    },
    collections:{
      goods:{},
      count:"",
    }
  },
  actions: {
    gotoLogin({commit},{url,login,cb}){
      axios.post(url,login).then(res=>{
        cb(res);
        commit('gotoLogin',res.data)
      })
    },
    getOneGood({commit},{url,params,cb}){
      axios.get(url,{params}).then(res=>{
        cb(res);
        commit('getOneGood',res.data.result)
      })
    },
    randerCart({commit},{url,cb}){
      axios.get(url).then(res=>{
        cb(res);
        commit('randerCart',res.data.result)
      })
    },
    changeTf({commit}){
      commit('changeTf')
    },
    getCollections({commit},{url,cb}){
      axios.get(url).then(res=>{
        cb(res);
        commit("getCollections",res.data.result)
      })
    }
    
  },
  mutations: {
    gotoLogin(state,result){
      if(!!result.type){
        console.log(result)
        state.mine = {
          ...state.mine,
          isLogin:true,
          username:result.username,
          arr:{
            countDian:5,
            countZu:10,
            countQuan:2
          }
        }
      }
    },
    getOneGood(state,result){
      state.singel = {...state.singel,good:result}
    },
    randerCart(state,result){
      state.buycart = {...state.buycart,goods:result}
    },
    changeTf(state){
      state.buycart.deleteShow = !state.buycart.deleteShow;
      if(state.buycart.deleteShow==true){
        state.buycart.manage = "管理"
      }else{
        state.buycart.manage = "完成"
      }
    },
    getCollections(state,result){
      var count = result.length;
      state.collections = {...state.collections,goods:result,count}
    }

  },
  getters: {
    
  }
  
})
