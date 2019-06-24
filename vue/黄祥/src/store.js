import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        maleimg:[
            require("@/assets/img/m1.jpg"),
            require("@/assets/img/m2.jpg"),
            require("@/assets/img/m3.jpg"),
            require("@/assets/img/m4.jpg"),
            require("@/assets/img/m5.jpg")
        ],
        femaleimg:[
            require("@/assets/img/f1.jpg"),
            require("@/assets/img/f2.jpg"),
            require("@/assets/img/f3.jpg"),
            require("@/assets/img/f4.jpg"),
            require("@/assets/img/f5.jpg")
        ],
        tem:[],
        active:0,
    },
    actions:{
        tologin(context){
            context.commit("tologin")
        } ,
        toregiste(context){
            context.commit("toregiste")
        },
    },
    mutations:{
        tologin(state) {
            router.push({ name: "login" });
            state.active = 0
        },
        toregiste(state) {
            router.push({ name: "login" });
            state.active = 1
        },
    }
})
