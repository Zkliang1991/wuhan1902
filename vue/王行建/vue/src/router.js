import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)
//1.创建路由组件
import Home from './views/Home.vue'
//2.配置routes
const routes = [
  {
    path: "/",
    redirect: { name: 'guide' }
  },
  {
    path: "/guide",
    name: 'guide',
    component: () => import("@/views/guide.vue")
  },
  {
    path: "/index",
    name: "index",
    component: () => import("@/views/index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: Home
      },
      {
        path: "/cart",
        name: "cart",
        component: () => import("@/views/cart.vue")
      },
      {
        path: "/classify",
        name: "classify",
        component: () => import("@/views/classify.vue")
      },
      {
        path: "/my",
        name: "my",
        component: () => import("@/views/my.vue")
      }
    ]
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/search.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue")
  },
  {
    path: "/good/detail/:goodId",
    name: "good",
    component: () => import("@/views/good.vue")
  },
  {
    path: "/address",
    name: "address",
    component: () => import("@/views/address.vue")
  },
  {
    path: "/addressEdit",
    name: 'addressEdit',
    component: () => import("@/views/addressEdit.vue")
  },
  {
    path: "/setter",
    name: "setter",
    component: () => import("@/views/setter.vue")
  },
  {
    path: "*",
    redirect: { name: 'home' }
  }
]

//3.创建路由对象
const router = new VueRouter({
  routes,
  mode: 'hash',
  base: '/'
})

//4.挂载到根实例
export default router;
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })
