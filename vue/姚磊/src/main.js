import Vue from 'vue';
import App from './App.vue';
import store from './store';



import router from './router';

import { bus } from './uilt/bus'

Vue.config.productionTip = false;

console.log("----这是项目的启动的入口文件");

import Vant from "vant";
Vue.use(Vant); //全局声明

import VueResource from "vue-resource";
Vue.use(VueResource); //全局声明使用注册 this.$http

import Ajax from "@/uilt/ajax.js";
Vue.prototype.$axios = Ajax; //全局声明使用this.$axios

import Head from "@/components/head.vue";
Vue.component("Head", Head); //全局注册组件
import Foot from "@/components/foot.vue";
Vue.component("Foot", Foot);
import Swipe from "@/components/swipe.vue";
Vue.component("Swipe", Swipe);
import SwipeItem from "@/components/swipe-item.vue";
Vue.component("SwipeItem", SwipeItem);
import List from "@/components/List.vue";
Vue.component("List", List);

//导入样式
import "@/style/index.scss";
// import { prototype } from 'module';

new Vue({
    router,
    store,
    mounted() {
        console.log("这是小爷整个项目的根实例")
    },
    watch: {
        '$route': function(to) { //全局监听路由
            console.log(to)
            bus.$emit("gaolactive", to.name); //把获取的值发给bus
        }
    },
    render: h => h(App) //项目的跟组件
}).$mount('#app')

/* function render(h) {
    return h(App)
} */