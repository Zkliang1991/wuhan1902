import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from "vant";
Vue.use(Vant); 
import "@/style/index.scss";

import VueResource from "vue-resource";
Vue.use(VueResource); 
import ajax from "@/untils/ajax.js";
Vue.prototype.$axios = ajax;

Vue.config.productionTip = false

import Head from "@/components/head.vue";
Vue.component("Head",Head)

import Foot from "@/components/foot.vue";
Vue.component("Foot",Foot)

import List from "@/components/List.vue";
Vue.component("List",List)

import {bus} from "@/untils/bus.js";
new Vue({
  router,
  store,
  watch:{
    '$route':function(to){
      bus.$emit("changeActive",to.name)
    }
  },
  render: h => h(App)
}).$mount('#app')
