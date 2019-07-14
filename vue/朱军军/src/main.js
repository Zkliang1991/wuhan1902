import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 2:
import store from './store'

Vue.config.productionTip = false

// 全局注册在main.js   ,局部注册在各views的.vue文件中

// 映入Vant  UI控件
import Vant from 'vant';
Vue.use(Vant);
// UI插件引入,--引入样式(有在其他全局声组件之后的必要吗?)  css改变,
import "@/styles/index.scss";//index.scss里面引入了vant.css和其他样式
import "@/styles/fonts/iconfont.js"

// 全局注册
import MFoot from "@/components/mFoot.vue";
Vue.component("MFoot",MFoot);

import Head from "@/components/head.vue";
Vue.component("Head",Head);

// 全局注册组件 
import Swipe from "@/components/swipe.vue";
Vue.component("Swipe",Swipe);

import Tabbar from "@/components/tabbar.vue";
Vue.component("Tabbar",Tabbar);

import TabbarItem from "@/components/tabbar-item.vue";
Vue.component("TabbarItem",TabbarItem);

// 通信
import VueResource from "vue-resource";  //VueResource是VUe体系的
Vue.use(VueResource); // 全局声明使用  this.$http  

import axios from "@/utils/axios";//由于 axios不是Vue体系的,前后端交互工具,所以定义为拓展方法Vue.prototype.$axios = axios;
Vue.prototype.$axios = axios;     // this.$axios ==> axios 

import { Toast } from 'vant';
Vue.use(Toast);//this.$toast

// 下拉刷新vant
import { PullRefresh } from 'vant';
Vue.use(PullRefresh);

// 导入bus
import {bus} from "@/utils/bus";

console.log("这是项目启动的入口文件");

new Vue({
  router, //4:挂载根实例,

  store, //this.$store

  watch:{
    //路由信息发送,
    '$route':function(to){
      // to 路由信息
      console.log(to);// to 路由信息
      // 自定义的事件changeActive,放送 信息,,(前面引入bus)
      bus.$emit("changeActive",to.name); //解决mFoot回退高亮问题,
    }
  },
  render: h => h(App) //箭头函数  项目的根组件app  ,渲染位置
}).$mount('#app')//#app在public中的index.html中
