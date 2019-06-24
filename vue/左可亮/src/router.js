import Vue from 'vue'
import VueRouter from 'vue-router'


// 0 模块化 编程    Vue.use(Router)  全局声明 使用 router 模块 
Vue.use(VueRouter)

// 1. 创建路由组件  
import Home from './views/Home.vue'

// import Guide from '@/views/guide.vue'
// 2. 配置 routes 
const routes = [
  {
    path:"/",
    redirect:{name:'guide'}
  },
  {
    path:"/guide",
    name:'guide',
    component:()=>import("@/views/guide.vue")
  },
  {
    path:"/index",
    name:'index',
    component:()=>import("@/views/index.vue"),
    children:[
      {
        path:"",
        redirect:{name:'home'}
      },
      {
        path:"home",
        name:"home",
        component:Home
      },
      {
        path:"classify",
        name:"classify",
        component:()=>import("@/views/classify.vue")
      },
      {
        path:"cart",
        name:"cart",
        component:()=>import("@/views/cart.vue")
      },
      {
        path:"my",
        name:"my",
        component:()=>import("@/views/my.vue")
      },
    ]
  },
  {
    path:"/search",
    name:"search",
    component:()=>import("@/views/search.vue")
  },
  {
    path:"/login",
    name:"login",
    component:()=>import("@/views/login.vue")
  },
  {
    path:"/good/detail/:goodId",
    name:"good",
    component:()=>import("@/views/good.vue")
  },
  {
    path:"*",
    redirect:{name:'home'}
  }
]

// 3. 创建路由对象 
const router = new VueRouter({
    routes,
    mode:'hash',
    base:'/'
})

// 4. 挂载 根实例  
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
