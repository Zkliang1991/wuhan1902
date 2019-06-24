import Vue from 'vue'
import Vuex from 'vuex'

import axios from '@/utils/ajax.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flg: true,
    usename: null,
    gle: true,
    goods: [],
    num: 3,
    zongjia: 0,
    touxiang: "",

  },

  actions: {

    tupianshagnc({ commit }, { url, method, contentType, processData, data }) {
      axios({ url, method, contentType, processData, data }).then(res => {
        var fat = res.data.avatarurl.replace(/public/, '');
        commit("tupianshagnc", fat)
      })
    },
    getGoods({ commit }, { url }) {
      axios.get(url).then(res => {
        commit('getGoods', res.data.result)
      })

    },
    zhucel({ commit }, { url, data, cb }) {
      console.log(data);
      axios.post(url, data).then(res => {
        cb(res)
        commit('zhucel', res)
      })

    },
    lies({ commit }, { url, data, cb }) {
      console.log(data)
    }
  },
  mutations: {

    xiugai1(state, data) {
      state.touxiang = data
    },

    tupianshagnc(state, data) {
      state.touxiang = data
      sessionStorage.touxiang = state.touxiang
      console.log(state.touxiang, "1", data, "2")
    },
    gaizhi(state, data) {
      state.zongjia = data
    },
    getGoods(state, data) {
      state.goods = data
    },
    changenum(state, num) {
      state.num += num
    },
    zhucel(state, res) {
      console.log(res, res.data.a)
      if (!!res.data.type) {
        state.flg = false
        state.usename = res.data.a
        sessionStorage.usename = res.data.a
      }
    }
  },
})
