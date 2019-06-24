import Vue from 'vue'
import Vuex from 'vuex'
import { Stats } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:'home',
    active:'home',
    keyword:'',
    show:'搜索',
    detailGds:[],
    cartNumber:0,
    cartAllGoods:[],
    lists:[],
    data:{
      allGds:[]
    }
  },
  actions: {
   
   
  },
  mutations:{
    changeTitle(state,title){
      state.title = title;
    },
    changeActive(state,active){
      state.active = active;
    },
    getGds(state,allGds){
      state.data = {...state.data,allGds:allGds}
    },
    changeDetailGds(state,detailGds){
      state.detailGds = detailGds;
    },
    changeSearch(state,search){
      state.show = search;
    },
    changeCartNumber(state,cartNumber){
      state.cartNumber = cartNumber;
    },
    changeLists(state,lists){
      state.lists = lists;
    }

  },
  getters:{
   
  }
})
