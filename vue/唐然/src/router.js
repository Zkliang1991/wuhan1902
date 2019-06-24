import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)




const routes = [
  {
    path: "",
    redirect: { name: 'home' }
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("@/views/Shop.vue"),
    children: [
      {
        path: "",
        redirect: { name: 'home' }
      },
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home.vue")
      },
      {
        path: "classify",
        name: "classify",
        component: () => import("@/views/classify.vue")
      },
      {
        path: "carts",
        name: "carts",
        component: () => import("@/views/carts.vue")
      },
      {
        path: "user",
        name: "user",
        component: () => import("@/views/user.vue")
      },
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: () => import("@/views/search.vue")
  },
  {
    path: '/dl',
    name: 'dl',
    component: () => import("@/views/dl.vue")
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/login.vue")
  },
  {
    path: '/good/:goodId',
    name: 'good',
    component: () => import("@/views/good.vue")
  },
]
const router = new VueRouter({
  routes,
  mode: 'hash',
  base: '/'
})


export default router;



