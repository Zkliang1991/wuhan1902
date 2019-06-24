import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);        //全局声明使用router模块

//1.创建路由组件
import Home from './views/Home.vue'

//2.配置routes
const routes = [
    {
        path:'/',
        redirect:{name:'home'}
    },
    {
        path:'/index',
        name:'index',
        component:()=>import("@/views/index.vue"),
        children:[
          {
            path: '',
            redirect:{name:'home'}
          },
          {
            path: 'home',
            name: 'home',
            component:Home
          },
          {
            path: 'classify',
            name: 'classify',
            component:()=>import('@/views/classify.vue'), 
          },
          {
            path: 'rank',
            name: 'rank',
            component:()=>import('@/views/rank.vue'),
          },
        ]
      },
    {
        path: '/my',
        name: 'my',
        component:()=>import('@/views/my.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component:()=>import('@/views/login.vue'),
    },
    {
        path: '/search',
        name: 'search',
        component:()=>import('@/views/search.vue'),
    },
    {
      path: '/bookInt/:bookid',
      name: 'bookInt',
      component:()=>import('@/views/bookInt.vue'),
    },
    {
        path:'*',
        redirect:{name:'home'}
    },
]

//3.创建路由对象
const router = new VueRouter({
    routes,
    mode:'hash',
    base:'/'
})

//4.挂载
export default router
