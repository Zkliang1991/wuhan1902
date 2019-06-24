import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


import Home from './views/home.vue'


const routes = [
  {
    path:"/",
    redirect:{name:"guide"}
  },
  {
    path:"/guide",
    name:"guide",
    component:()=>import("@/views/guide.vue") 
  },
  {
    path:"/index",
    name:"index",
    component:()=>import("@/views/index.vue"),
    children:[
      {
        path:"home",
        name:"home",
        component:Home
      },
      {
        path:"select",
        name:"select",
        component:()=>import("@/views/select.vue"),
      },
      {
        path:"active",
        name:"active",
        component:()=>import("@/views/active.vue"),
      },
      {
        path:"message",
        name:"message",
        component:()=>import("@/views/message.vue"),
      }
    ]
  },
  {
    path:"/search",
    name:"search",
    component:()=>import("@/views/search.vue"),
  },
  {
    path:"/login",
    name:"login",
    component:()=>import("@/views/login.vue"),
  },
  {
    path:"/video/:av",
    name:"video",
    component:()=>import("@/views/video.vue"),
  },
  {
    path:"*",
    redirect:{name:"home"}
  }
]


const router = new VueRouter({
  routes,
  mode:"hash",
  base:"/"
})


export default router;
