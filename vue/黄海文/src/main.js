import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/styles/index.scss'

Vue.config.productionTip = false

import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

import Vant from "vant";
Vue.use(Vant);

import { Lazyload } from 'vant';
// options 为可选参数，无则不传
Vue.use(Lazyload);

import VueResource from "vue-resource";
Vue.use(VueResource);

import ajax from "@/utils/ajax"
Vue.prototype.$axios = ajax;

import Head from "@/components/head.vue";
Vue.component("Head", Head);

import Foot from "@/components/footer.vue";
Vue.component("Foot", Foot);

import '@/styles/index.scss'
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
