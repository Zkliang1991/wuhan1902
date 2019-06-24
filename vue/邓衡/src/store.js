import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import router from "@/router"
import axios from "@/utils/axios.js";
import { LOGIN, GETPIC } from "@/utils/mutate-type";
import { Dialog } from 'vant';


export default new Vuex.Store({
  state: {
    login: {},
    register: {},
    active: "home",
    value: "",
    imgs: require('@/assets/images/pic.jpg'),
    good: [],
    num:0,
    data: {
      pic: [],
      movie: [],
      hot: [],
      goods: [],
      girl: [],
      man: [],
      CarGoods: [],


    }



  },
  actions: {
    // 登录
    logins({ commit }) {
      axios.post('/vue/user',
        this.state.login
      ).then(res => {
        if (!!res.data.type) {
          sessionStorage.userInfo = JSON.stringify({ token: res.data.token })
          sessionStorage.username = this.state.login.username
          // Dialog({message:'登陆成功，正在跳转首页......'})
          window.location.href = "http://localhost:8080/#/index/home"

        } else {
          Dialog({ message: "登录失败，请重新登录" })
          sessionStorage.removeItem("userInfo")
        }
        commit(LOGIN)
      })

    },
    // 注册
    registers({ commit }) {
      axios.post('/vue/register',
        this.state.register
      ).then(res => {
        if (!!res.data.type) {
          Dialog({ message: '注册成功，正在跳转首页......' })
          router.push({ name: 'home' })
        } else {
          Dialog({ message: '用户已存在，请重新注册！' })

        }
        commit('registers')
      })


    },
    //获取轮播图
    getActive({ commit }, val) {
      commit('getActive', val)
    },
    getPic({ commit }, { url, params }) {
      axios.get(url, {
        params: params,
      })
        .then(res => {
          // console.log(res)
          commit(GETPIC, res.data.result)
        })
    },
    // 获取
    getGoods({ commit }, { url, params }) {
      axios.get(url, {
        params: params,
      })
        .then(res => {
          console.log(res)
          commit('getGoods', res.data.result)
        })
    },
    // 获取hot
    getHot({ commit }, { url }) {
      axios.get(url, {

      }).then(res => {
        commit("getHot", res.data.result)
      })
    },
    searchGoods({ commit }, { url, params }) {
      axios.get(url, {
        params: params
      }).then(res => {
        // console.log(res)
        if (!!res.data.type) {
          commit('searchGoods', res.data.result)
        } else {
          Dialog({ message: res.data.msg });
        }
      })
    },
    // // 精选下拉更新
    // getNewMovie({commit},val){
    //   commit('getNewMovie',val)
    // }
    // 获取女装
    getGirl({ commit }, { url, params }) {
      axios.get(url, {
        params: params,
      }).then(res => {
        // console.log(res.data.result)
        commit("getGirl", res.data.result)
      })
    },
    // 获取男装
    getMan({ commit }, { url, params }) {
      axios.get(url, {
        params: params,
      }).then(res => {
        // console.log(res.data.result)
        commit("getMan", res.data.result)
      })
    },
    // 获取商品详情
    // getOneGoods({commit},{url,params}){
    //   axios.get(url,{
    //     params:params,
    //   }).then(res=>{
    //     console.log(res.data.result)
    //     commit('getOneGoods',res.data.result)
    //   })
    // },
    // 获取购物车数据
    getCarGoods({ commit }, { url }) {
      axios.post(url)
        .then(res => {
          console.log(res.data.msg)
          if (!!res.data.type) {
            
            sessionStorage.num=res.data.result.length
            commit('getCarGoods',res.data.result)
          } else {
            Dialog({ message: res.data.msg })
          }
        })
    }

  },
  mutations: {
    [LOGIN](state) {
      state.login = {}
    },
    getlogin(state, val) {
      state.login = { ...state.login, val }
    },
    getActive(state, active) {
      state.active = active
    },
    [GETPIC](state, pic) {
      state.data = { ...state.data, pic }
    },
    getGoods(state, movie) {
      state.data = { ...state.data, movie }

    },
    getregister(state, val) {
      state.register = { ...state.register, val }
    },
    registers(state) {
      // console.llog(val)
      state.register = {}

    },
    getHot(state, hot) {
      state.data = { ...state.data, hot }
    },
    // 获取头像
    // getImgs(state, imgs) {
    //   state.imgs = imgs
    // },
    // 上传图片后
    upImg(state, imgs) {
      state.imgs = imgs
    },
    // 获取搜索value值
    getValue(state, value) {
      state.value = value
    },
    // 搜索下拉刷新
    getNewGoods(state, goods) {
      state.data = { ...state.data, goods }
    },
    searchGoods(state, goods) {
      state.data = { ...state.data, goods }

    },
    // 精选下拉更新
    getNewMovie(state, movie) {
      state.data = { ...state.data, movie }
    },
    // 获取女装
    getGirl(state, girl) {
      state.data = { ...state.data, girl }
    },
    // 下拉获取女装
    getNewGirl(state, girl) {
      state.data = { ...state.data, girl }
    },
    // 获取男装
    getMan(state, man) {
      state.data = { ...state.data, man }
    },
    getNewMan(state, man) {
      state.data = { ...state.data, man }
    },
    // getOneGoods(state,OneGood){
    //   state.OneGood=OneGood
    // }
    getCarGoods(state,CarGoods){
      state.data={...state.data,CarGoods}
    }



  },
  getters: {
    // pics(state){
    //   console.log(111)
    //   return state.data.pic.filter((m,i)=>i%2==0);

    // },
    newMv(state) {
      return state.data.pic.filter((m, i) => i % 2 == 0);
    },
  }
})
