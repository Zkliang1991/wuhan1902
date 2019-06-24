import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axjx from '@/utils/ajax.js'
Vue.prototype.$axios = axjx
Vue.config.productionTip = false
import { bus } from "@/utils/bus.js"
import Vant from "vant"
Vue.use(Vant)
import Footer from "@/components/footer.vue"
Vue.component("Footer", Footer)

import Goodsa from "@/components/GoodsAction.vue"
Vue.component("Goodsa", Goodsa)

import Header from "@/components/header.vue"
Vue.component("Header", Header)
import "@/styles/index.scss"


new Vue({
  router,
  store,
  watch: {
    '$route': function (to) {
      // console.log(to.name)
      bus.$emit("changeActive", to.name);
    }
  },

  render: h => h(App)
}).$mount('#app')
