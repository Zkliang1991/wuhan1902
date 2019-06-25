import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Vant from 'vant';
Vue.use(Vant);//全局声明

import ajax from "@/utils/ajax";
Vue.prototype.$axios = ajax;//this.$axios==>axios

//全局注册组件
//头部组件
import Head from "@/components/head.vue";
Vue.component("Head", Head);
//底部组件
import Foot from "@/components/foot.vue";
Vue.component("Foot", Foot);
//轮播图组件
import Swiper from "@/components/swiper.vue";
Vue.component("Swiper", Swiper)
//轮播图子组件
import SwiperItem from "@/components/swiper-item.vue";
Vue.component("SwiperItem", SwiperItem)
//商品列表组件
import List from "@/components/List.vue";
Vue.component("List", List)
//导入全局样式
import "@/styles/index.scss";

import { bus } from "@/utils/bus";

new Vue({
  router,
  store,
  watch: {
    '$route': function (to) {
      bus.$emit("changeActive", to.name);
    },
  },
  render: h => h(App)
}).$mount('#app')
