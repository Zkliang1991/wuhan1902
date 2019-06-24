import Vue from "vue";
import Vuex from "vuex";
import axios from "@/utils/ajax";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 0,
    img:'',
    flag: false,
    good: {},
    type:[],
    imgs: [
      require("@/assets/images/1.jpg"),
      require("@/assets/images/2.jpg"),
      require("@/assets/images/2.jpeg"),
      require("@/assets/images/3.jpg"),
      require("@/assets/images/4.jpg")
    ],
    data: {
      goodList: [],
      tuijianGood: [],
      // cartGoods: []
    },
    cartGoods: [],
    quan: false
  },
  mutations: {
    shuaxin(state,data){
        state.data={...state.data,tuijianGood:data}
    },
    tupian(state,data){
        state.img=data.replace(/public/,"http://localhost:1902/")
    },
    fenlei(state,data){
        state.type=data
    },
    setQuan(state, quan) {
      state.quan = quan;
    },
    getCartInfo(state, res) {
      state.num = res.length;
      // console.log(res)
      state.cartGoods = res;
    },
    onSearch(state, res) {
      state.data = { ...state.data, goodList: res };
    },
    getGoods(state, res) {
      // console.log(res)
      state.good = res;
    },
    tuijian(state, tuijianGood) {
      state.data = { ...state.data, tuijianGood };
    }
  },
  actions: {
    fenlei({commit},{url}){
      axios.get(url).then(res=>{
        // console.log(res)
        commit('fenlei',res.data.result)
      })
        
    },
    getCartInfo({ commit }, { url }) {
      axios.get(url).then(res => {
        commit("getCartInfo", res.data.result);
      });
    },
    tuijian({ commit }, { url, params }) {
      // console.log(params)
      axios.get(url, { params }).then(res => {
        // console.log('result',res.data.result)
        commit("tuijian", res.data.result);
      });
    },
    onSearch({ commit }, { url, params }) {
      axios.get(url, { params }).then(res => {
        // console.log(res)
        commit("onSearch", res.data.result);
      });
    },
    getGoods({ commit }, { url, params }) {
      // console.log("ssss");
      axios.get(url, { params }).then(res => {
        // console.log(res);
        commit("getGoods", res.data.result[0]);
      });
    }
  }
});
