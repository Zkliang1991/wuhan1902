import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/index.vue'
import { homedir } from 'os';

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: "/",
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
      children: [
        { path: "home", name: "home", component: () => import("./views/Home.vue") },
        { path: "about", name: "about", component: () => import("./views/About.vue") },
        { path: "daikuan", name: "daikuan", component: () => import('./views/daikuan.vue') },
        { path: "shenghuo", name: "shenghuo", component: () => import('./views/shenghuo.vue') },
        { path: "licai", name: "licai", component: () => import('./views/licai.vue') },
        { path: "", redirect: { name: 'home' } }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    { path: '/login', name: 'login', component: () => import('./views/dengluce.vue') },
    { path: '/longcaifu', name: 'longcaifu', component: () => import('./views/longcaifu.vue') },
    {
      path: '/sousuo', name: 'sousuo', component: () => import('./views/sousuo.vue')
    },
    {
      path: '/xiangqing', name: 'xiangqing', component: () => import('./views/xiangqingye.vue')
    },


  ]
})
