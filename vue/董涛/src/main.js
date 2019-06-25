import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import MintUI from "mint-ui";
Vue.use(MintUI); // 全局声明   还要引入样式 

import Vant from "vant";
Vue.use(Vant); //全局声明
import { Sku } from 'vant';
Vue.use(Sku);

import VueResource from "vue-resource";
Vue.use(VueResource); // 全局声明使用  this.$http

import ajax from "@/utils/ajax";
Vue.prototype.$axios = ajax; // this.$axios ===> axios



console.log("这是项目的启动入口文件");
import Head from "@/components/head.vue";
Vue.component("Head", Head);
import Foot from "@/components/foot.vue";
Vue.component("Foot", Foot);
import List from "@/components/list.vue";
Vue.component("List", List);


import "@/styles/index.scss";

new Vue({
    router,
    store, // this.$store
    mounted() {
        console.log("这是整个项目的根实例 ")
    },
    render: h => h(App) // 项目的根组件
}).$mount('#app')


// function render(h) {
//     return h(App)
// }