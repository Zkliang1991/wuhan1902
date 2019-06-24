

// 封装 全局的 组件  过滤器  指令  

import Vue from 'vue';
import Vant from 'vant';
import store from '../store'//引入store
import 'vant/lib/index.css';
import App from '@/layouts/default.vue';
Vue.use(Vant);

 



new Vue({

  store,//使用store
  render: h => h(App)
});