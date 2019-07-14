import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import { GET_IMG, GET_ALLGOODS, GET_GOODTYPES, GET_SEARCHGOODS } from "@/utils/moutes"
import axios from "@/utils/ajax"
export default new Vuex.Store({
  state: {// 对象就包含了全部的应用层级状态,作为存储数据仓库
    keyword: "",
    username: "",
    myMsg: [],
    cbMsg: "",
    data: {
      allGoods: [], types: [], searchGoods: [], goodsOne: [], carGoods: []
    }
  },
  actions: {
    //获取图片信息
    getImg({ commit }, { url, params }) {
      axios.get(url, { params: params }).then(res => {
        commit(GET_IMG, res.data.result)
      })
    },
    //获取所有商品信息
    getAllGoods({ commit }, { url }) {
      axios.get(url).then(res => {
        commit(GET_ALLGOODS, res.data.result)
      })
    },
    //获取商品类型
    getGoodTypes({ commit }, { url }) {
      axios.get(url).then(res => {
        commit(GET_GOODTYPES, res.data.result)
      })
    },
    //获取搜索数据
    getSearchGoods({ commit }, { url, params }) {
      axios.get(url, { params: params }).then(res => {
        commit(GET_SEARCHGOODS, res.data.result)
      })
    },
    //获取单个商品信息
    getGoodOne({ commit }, { url, params }) {
      axios.get(url, { params: params }).then(res => {
        console.log(res)
        commit("getGoodOne", res.data.result)
      })
    },
    showCarData({ commit }, { url }) {
      axios.get(url).then(res => {
        console.log(res)
        commit("showCarData", res.data.result)
      })
    },
    getUsername({ commit }, { url }) {
      axios.get(url).then(res => {
        commit("getUsername", res.data.username)
      })
    },
    getAddressMsg({ commit }, { url }) {
      axios.get(url).then(res => {
        commit("getAddressMsg", res.data)
      })
    },

  },
  mutations: {
    //mutation 更改Vuex的store中的状态唯一方法是提交mutation
    [GET_IMG](state, allGoods) {
      state.data = { ...state.data, allGoods }
    },
    [GET_ALLGOODS](state, allGoods) {
      state.data = { ...state.data, allGoods }
    },
    [GET_GOODTYPES](state, types) {
      state.data = { ...state.data, types }
    },
    [GET_SEARCHGOODS](state, searchGoods) {
      state.data = { ...state.data, searchGoods }
    },
    getKeyword(state, keyword) {
      state.keyword = keyword;
    },
    getGoodOne(state, goodsOne) {
      state.data = { ...state.data, goodsOne }
    },
    showCarData(state, carGoods) {
      state.data = { ...state.data, carGoods }
    },
    getUsername(state, username) {
      state.username = username;
    },
    getAddressMsg(state, myMsg) {
      state.myMsg = [];
      myMsg.forEach((item, index) => {
        item.myMsg.id = index;
        state.myMsg = [...state.myMsg, item.myMsg];
      })
    },
    submitMsg(state, cbMsg) {
      state.cbMsg = cbMsg;
    },
  },
})
