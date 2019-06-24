import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import "@/styles/index.scss";
 
 import Vant from 'vant';
 import 'vant/lib/index.css';
 Vue.use(Vant);

 import { Lazyload } from 'vant';
 Vue.use(Lazyload);

 import VueResource from "vue-resource";
 Vue.use(VueResource); // 全局声明使用  this.$http  

 import ajax from "@/utils/ajax";
 // import axios from "axios";
  Vue.prototype.$axios = ajax;   
  
 import Head from "@/components/head.vue";
 Vue.component('Head',Head); 
 import Foot from "@/components/foot.vue";
 Vue.component('Foot',Foot);
 import List from "@/components/List.vue";
 Vue.component('List',List);
 import {bus} from "@/utils/bus";
new Vue({
  router,
  store,
  watch:{
    '$route':function(to){
      // console.log(to);
      bus.$emit("changeActive",to.name);
    }
  },
  render: h => h(App)
}).$mount('#app')
