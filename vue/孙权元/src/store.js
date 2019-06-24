import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

import axios from '@/utils/ajax.js'

export default new Vuex.Store({
  state: {
      active:"home",
      keyword:"裙",
      data:{
        active:"",
        goods:[],
        types:[],
        allGoods:[],
        username:localStorage.username,
      }
  },
  actions: {
    onSearch({commit},{url,cb,params}){
      console.log(url);
        axios.get(url,{
          params:params
        }).then(res=>{
          cb();
          commit("onSearch",res.data.result)
        })
    },
    getTypesAjax({commit},{url}){
      axios.get(url)
      .then(res=>{
        commit("getTypesAjax",res.data.result)
      })
    },
    getAllgoods({commit},{url,cb}){
      axios.get(url)
      .then((res)=>{
        // console.log(res.data.result)
        cb();
        commit("getAllgoods",res.data.result)
      })
    },
    
  },
  mutations: {
      getActive(state,active){
          state.active = active
      },
      getKeyword(state,keyword){
          state.keyword = keyword
      },
      onSearch(state,goods){
        state.data = {...state.data,goods}
      },
      getTypesAjax(state,types){
        state.data = {...state.data,types}
      },
      getAllgoods(state,allGoods){
        state.data = {...state.data,allGoods}
      },
     
  },
})
