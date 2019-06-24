// 项目的入口文件

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

// 引入 components 中的公共组件(模板)
import Foot from "@/components/Footer.vue";
import Heade from "@/components/Head.vue";
import Popup from "@/components/Popup.vue";
import Swipe from "@/components/swipe.vue";
import Swipeitem from "@/components/swipe-item.vue";
import RecordList from "@/components/recordList.vue";


// 全局注册组件   注册后其他组件不用导入该组件 可以直接使用
Vue.component("Foot",Foot);
Vue.component("Heade",Heade);
Vue.component("Popup",Popup);
Vue.component("Swipe",Swipe);
Vue.component("Swipeitem",Swipeitem);
Vue.component("RecordList",RecordList);


// 引入插件 并全局声明使用
import vant from "vant";
Vue.use(vant);
import ajax from "@/utils/ajax"; 
Vue.prototype.$axios = ajax; 


// 引入 全局样式
import "./styles/index.scss";
import "vant/lib/index.css";

// 引入 utils 中的定义的公共模块
import {bus} from "@/utils/bus";


// 根实例
new Vue({
  router,
  store,
  render: h => h(App) // 渲染项目的根组件 App.vue
}).$mount('#app')
