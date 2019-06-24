import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import axios from "@/utils/ajax"

export default new Vuex.Store({
  state: {
    active: 0,
    records: [],
    userPic: "",
  },
  actions: {
    changeActive({ commit }, index) {
      commit("changeActive", index);
    },
    changeRecords({ commit }, records) {
      commit("changeRecords", records);
    },
    upload({ commit }, parent) {
      axios(parent)
        .then(res => {
          console.log(res);
          var userPic = res.data.avatarurl.replace(/public/, 'http://localhost:2333/');
          // localStorage.userPic = this.userPic;
          commit("upload",userPic);
        })
    }
  },
  mutations: {
    changeActive(state, index) {
      state.active = index
    },
    changeRecords(state, records) {
      state.records = records;
    },
    upload(state,userPic){
      state.userPic = userPic;
    }
  },
})
