import Vue from 'vue'
import App from './App.vue'
import store from './store'

import router from "./router";

Vue.config.productionTip = false;

import MintUI from "mint-ui";
Vue.use(MintUI);   // 全局声明   还要引入样式 

import VueResource from "vue-resource";
Vue.use(VueResource); // 全局声明使用  this.$http  

import ajax from "@/utils/ajax";
Vue.prototype.$axios = ajax;     // this.$axios ==> axios 


console.log("这是项目的启动的入口文件 ");

import Head from "@/components/head.vue";
Vue.component("Head",Head);   // 全局注册组件  
import Foot from "@/components/foot.vue"
Vue.component("Foot",Foot);
import Swipe from "@/components/swipe.vue";
Vue.component("Swipe",Swipe);
import SwipeItem from "@/components/swipe-item.vue";
Vue.component("SwipeItem",SwipeItem);
import List from "@/components/List.vue";
Vue.component("List",List);

import "@/styles/index.scss";

import {bus} from  "@/utils/bus";

new Vue({
  store,   // this.$store 
  router,
  mounted(){
    console.log("这是 整个 项目的根实例  ");
  },
  watch:{
    '$route':function(to){
      console.log(to);
      // bus.$emit("changeActive",to.name);
      store.commit('changeSele',to.name);
    }
  },
  render: h => h(App)   // 项目的根组件  
}).$mount('#app')


// function render(h){
//   return h(App)
// }
