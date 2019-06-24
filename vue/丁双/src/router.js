// 导入vue  和vue-router
import Vue from 'vue'

import VueRouter from 'vue-router'


Vue.use(VueRouter)

// 1.创建路由组件
import Home from '@/views/Home.vue';


// 2.配置路由参数
const routes = [
  {
    path:'/',
    redirect:{name:'guide'}               //路由重定向
  },
  {
    path:'/',
    name:'index',
    component:()=>import('@/views/index.vue'),
    children:[

      {
        path:'home',
        name:'home',
        // component:()=>import('@/views/Home.vue')       // 等同于第一步（创建了路由组件）
        component:Home,
      },
      {
        path:'weitao',
        name:'weitao',
        component:()=>import('@/views/weitao.vue')
      },
      {
        path:'cart',
        name:'cart',
        component:()=>import('@/views/cart.vue')
      },
      {
        path:'my',
        name:'my',
        component:()=>import('@/views/my.vue')
      }
    ]
  },
  {
    path:'/zhuce',
    name:'zhuce',
    component:()=>import('@/views/zhuce.vue')
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/login.vue')
  },
  {
    path:'/search',
    name:'search',
    component:()=>import('@/views/search.vue'),
  },
  {
    path:'/detail/detail/:keyword',
    name:'detail',
    component:()=>import('@/views/detail.vue')
  },
  {
    path:'/guide',
    name:'guide',
    component:()=>import('@/views/guide.vue')
  },
  {
    path:'/order',
    name:'order',
    component:()=>import('@/views/order.vue')
  },
  {
    path:'*',
    redirect:{name:'guide'}                //路由重定向
  }
]

// 3.创建路由对象
 const  router = new VueRouter({
   routes,          //挂载路由配置参数
   mode:"hash",
   base:'/'
 })

//  4.挂载到 根实例  main.js联动（导出--引入）

export default router;

