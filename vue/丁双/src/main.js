import Vue from 'vue'
import App from './App.vue'
// 4.挂载到根实例上（引入）
import router from './router'
// vuex 导入
import store from './store'

// 引入 vant  导入所有组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);    //全局声明

import Head from "@/components/head.vue";
Vue.component('Head',Head);  //全局注册  声明使用


import Foot from "@/components/foot.vue";
Vue.component('Foot',Foot);  //全局注册  声明使用

import VueResource from "vue-resource";
Vue.use(VueResource); //全局声明   this.$http

import axios from "@/utils/ajax.js";
Vue.prototype.$axios = axios;   //this.$axios ===> axios   全局声明


import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);

import { Icon } from 'vant';
Vue.use(Icon);            //iconfont 字体图标

import { Swipe, SwipeItem,Search,NoticeBar,DropdownMenu, DropdownItem,Field,Popup,Tab, Tabs} from 'vant';
Vue.use(Swipe).use(SwipeItem);  //轮播


Vue.use(NoticeBar);         //首页公告

Vue.use(Search);  //搜索框


Vue.use(DropdownMenu).use(DropdownItem);  //下拉菜单

Vue.use(Field); //输入框

Vue.use(Popup);  //弹框

Vue.use(Tab).use(Tabs);//登录注册切换

import { Toast } from 'vant';

Vue.use(Toast);

Vue.config.productionTip = false


// 4.router 挂载到根实例上
new Vue({
  router,
  store,
  // 全局监听
  watch:{
    '$route':function(to){
      this.$store.commit('changeActive',to.name);
    }
  },
  render: h => h(App)
}).$mount('#app')
