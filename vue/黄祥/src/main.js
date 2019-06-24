import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Vant from 'vant';      //Vue全家桶里的内容，可以直接use
Vue.use(Vant);      //全局声明

import VueResource from "vue-resource";
Vue.use(VueResource)      //全局声明使用  this.$http

import ajax from "@/utils/ajax";     //引入将axios定义为ajax的文件
Vue.prototype.$axios = ajax       //this.$axios 指向 axios

import Banner from '@/components/banner.vue';
Vue.component('Banner',Banner)

import Head1 from '@/components/head1.vue';     //全局注册（局部注册在加载对应的父级vue文件中注册）
Vue.component('Head1',Head1)

import Head2 from '@/components/head2.vue'; 
Vue.component('Head2',Head2)

import Foot1 from '@/components/foot1.vue';
Vue.component('Foot1',Foot1)

import "@/styles/index.scss";

import { bus } from '@/utils/bus';

new Vue({
  router,
  store,
  watch:{
    '$route':function(to){
      // console.log(to);
      bus.$emit("changeact",to.name)
    }
  },
  render: h => h(App),
}).$mount('#app')
