import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from "vant"
import 'vant/lib/index.css';
import "./style/index.scss";
import Foot from '@/views/foot.vue'
import Head from '@/components/heade.vue'
import ajax from '@/utils/ajax';
// import "./iconfont.js"
import Rende from '@/views/rende.vue';
import goodsList from '@/components/goodsList.vue';
Vue.component('goodsList',goodsList)
Vue.component('Rende',Rende)
Vue.prototype.$axios = ajax;
 Vue.use(Vant)

Vue.config.productionTip = false
Vue.component('Foot',Foot)
Vue.component("Head",Head)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
