import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//Vant Ui
import MintUI from "mint-ui";
Vue.use(MintUI);
import 'mint-ui/lib/style.css'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import VueResource from "vue-resource";
Vue.use(VueResource);


import ajax from "@/utils/ajax";
Vue.prototype.$axios = ajax;

// 全局 css  

import "@/styles/index.scss";


// 全局注册组件  
import Head from "@/components/Head.vue";
Vue.component("Head", Head);
import Foot from "@/components/Foot.vue"
Vue.component("Foot", Foot);
import Swipe from "@/components/swipe.vue"
Vue.component("Swipe", Swipe);
import List from "@/components/List.vue"
Vue.component("List", List);
import Slist from "@/components/Slist.vue"
Vue.component("Slist", Slist);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
