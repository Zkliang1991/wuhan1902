import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';

import axios from "@/utils/ajax";
// import axios from "axios";
Vue.prototype.$axios=axios;

import '@/style/index.scss';
Vue.use(Vant);

Vue.config.productionTip = false
//头部组件
import Head from "@/components/head.vue";
Vue.component("Head",Head);

//w尾部组件
import Foot from "@/components/foot.vue";
Vue.component("Foot",Foot)
//轮播图组件
import Banner from "@/components/banner.vue";
Vue.component("Banner",Banner)

//列表组件
import List from "@/components/list.vue"
Vue.component("List",List)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
