import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';

import { Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.use(Vant);

// import Foot from "@/components/Foot.vue";
// Vue.component(Foot)

import "@/styles/index.scss"


import List from "@/components/List.vue"
Vue.component("List",List);

import Item from "@/components/Item.vue"
Vue.component("Item",Item)

import Head from "@/components/Head.vue"
Vue.component("Head",Head)
Vue.config.productionTip = false

import axios from "@/utils/ajax.js";
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
