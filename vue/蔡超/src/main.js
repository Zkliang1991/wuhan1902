import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import { Toast } from 'vant';
Vue.use(Toast);

import VueClipboard from 'vue-clipboard2';
Vue.use(VueClipboard);


Vue.config.productionTip = false

import VueResource from 'vue-resource';
Vue.use(VueResource); //全局声明使用 this.$http

import ajax from '@/utils/ajax';
Vue.prototype.$axios = ajax; //this.$axios ==> axios


//路由组件
import Swipe from '@/components/swipe.vue';
Vue.component('Swipe', Swipe);

//路由项目组件
import SwipeItem from '@/components/swipe-item.vue';
Vue.component('swipe-item', SwipeItem);

//头部组件
import Headr from '@/components/headr.vue';
Vue.component('Headr', Headr);

//脚部组件
import Footr from '@/components/footr.vue';
Vue.component('Footr', Footr);

//详情页组件
import Detail from '@/components/detail.vue';
Vue.component('Detail', Detail);

//登录注册组件
import Users from '@/components/users.vue';
Vue.component('Users', Users);

//搜索组件
import Search from '@/components/search.vue';
Vue.component('Search', Search);

//排行组件
import Ranking from '@/components/ranking.vue';
Vue.component('Ranking', Ranking);

//我的评论组件
import Mydis from '@/components/mydis.vue';
Vue.component('Mydis', Mydis);


import "@/styles/index.scss";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
