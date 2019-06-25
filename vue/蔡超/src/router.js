import Vue from 'vue'
import Router from 'vue-router'

//0  模块化 变成 Vue.use(Router) 全局声明使用router模块
Vue.use(Router)

//1.创建路由组件
//2.配置routes
const routes = [
  {
    path: '/',
    redirect: '/guide'
  },
  {
    path: '/guide',
    name: 'guide',
    component: () => import('@/views/Guide.vue')
  },
  {
    path: '/index',
    name: 'index',
    redirect: 'index/home',
    component: () => import('@/views/Index.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/My.vue')
      },
      {
        path: 'collect',
        name: 'collect',
        component: () => import('@/views/Collect.vue')
      },
      {
        path: 'itemize',
        name: 'itemize',
        component: () => import('@/views/Itemize.vue')
      }
    ]
  }, {
    path: '*',
    redirect: '/guide',
  }
]

//3.创建路由对象

const router = new Router({
  routes,
  mode: 'hash',
  base: '/'
})

//4.挂载到根实例
export default router