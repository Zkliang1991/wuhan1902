import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

import Vant from "vant";

Vue.use(Vant);

import "@/style/index.scss"

import axios from "@/utils/axios"
Vue.prototype.$axios=axios//this.$axios

import Head from "@/components/head.vue"
Vue.component('Head',Head)
import Foot from "@/components/foot.vue"
Vue.component('Foot',Foot)
import Search from "@/views/search.vue"
Vue.component('Search',Search);
import Photo from "@/components/Photo.vue"
Vue.component('Photo',Photo);
import List from "@/components/List.vue"
Vue.component("List",List)


new Vue({
  router,
  store,
  watch:{
    '$route':function(to){
      // console.log(to);
      // bus.$emit("changeActive",to.name);
      store.commit('getActive',to.name);
    }
  },
 
  render: h => h(App)
}).$mount('#app')
