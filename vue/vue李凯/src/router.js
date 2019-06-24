import Vue from 'vue'
import Router from 'vue-router'

// 全局声明使用 router 模块
Vue.use(Router);

// 引入创建了的 路由组件
import Index from "./views/index.vue";
 

const routes= [
    {
      path:"/",
      redirect:{name:"login"}
    },
    {
      path:'/login',
      name:"login",
      component:() => import("@/views/login.vue")
    },
    {
      path:"/index",
      name:"index",
      component:Index,
      children:[
        {
          path:"",
          redirect:{
            name:"home"
          }
        },
        {
          path: "home",
          name: "home",
          component:() => import("@/views/home.vue")
        },
        {
          path:"hero",
          name:"hero",
          component:() => import("@/views/hero.vue")
        },
        {
          path:"store",
          name:"store",
          component:() => import("@/views/store.vue")
        },
        {
          path:"summoner",
          name:"summoner",
          component:() => import("@/views/summoner.vue")
        },
      ]
    },
    {
      path:"/heroItem",
      name:"heroItem",
      component:() => import("@/views/heroItem.vue")
    },
    {
      path:"*",
      redirect:{
        name:"login"
      }
    }
  ]

// 创建路由对象 router
const router = new Router({
  routes,
  mode:"hash",
  base:"/"
})

// 挂载到根实例
export default router;

