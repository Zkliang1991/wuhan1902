 import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import router from './router'
import { Notify } from 'vant';

import ajax from "@/untils/ajax.js";
Vue.prototype.$axios = ajax;

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active1:0,
    login:{},
    register:{},
    userError:"",
    pwdError:"",
  },
  mutations: {
    loginAction(){

    },
    regAction(){

    }
  },
  actions: {
    loginAction(context){
      axios.post("/vue/login",context.state.login).then(res=>{
        if(res.data.type==1){
            sessionStorage.userInfo = JSON.stringify({token:res.data.token})
            if(res.data.result.avatar){
              localStorage.touxiang = res.data.result.avatar.replace(/public/,"http://localhost:1902/")
            }
            router.push({name:"home"})
        }else{
            sessionStorage.removeItem ("userInfo");
        }
    })
    context.commit("loginAction")
    },
    regAction(context){
      if(context.state.register.username&&context.state.register.password&&context.state.register.dbpwd){
        if(context.state.register.password === context.state.register.dbpwd){
              axios.post("/vue/reg",context.state.register).then(res=>{
                console.log(res.data)
                  if(res.data.type==1){
                    sessionStorage.userInfo = JSON.stringify({token:res.data.token})
                    router.push({name:"home"})
                  }
              })
        } else {
            Notify({
              message: '注册失败,请确认两次填写的密码是否相同',
              duration: 1000,
              background: '#FF0000'
              });
        }
      } else {
        Notify({
              message: '注册失败,请确认填写完整',
              duration: 1000,
              background: '#FF0000'
              });
      }
      context.commit("regAction")
    }
  }
})
