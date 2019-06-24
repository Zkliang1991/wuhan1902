import Vue from 'vue'
import Router from 'vue-router'
//0 模块化 编程  Vue.use(Router) 全局声明 使用router 模块

Vue.use(Router)

//1.创建路由组件
import Home from './views/Home.vue'

//2配置routes
export default new Router({
  mode: 'hash',
  base:'/',
  routes: [
    {
      path:'/',
      redirect:{name:'guide'}
    },
    {
      path:"/guide",
      name:"guide",
      component:()=>import ("@/views/guide.vue"),
    
    },
    {
      path:"/good/dis/:goodId",
      name:"good",
      component:()=>import("@/views/good.vue"),
    },
    {
      path:'/search',
      name:'search',
      component:()=>import ("@/views/search.vue"),
    },
    {
      path:"/login",
      name:"login",
      component:()=>import ("@/views/login.vue")
    },
    {
      path:'/index',
      name:'index',
      component:()=>import("@/views/index.vue"),
      children:[
        {
          path:"home",
          name:"home",
          component:()=>import("@/views/Home.vue")
        },
        {
          path:'classify',
          name:'classify',
          component:()=>import("@/views/classify.vue")
        },
        {
          path:'cart',
          name:'cart',
          component:()=>import("@/views/cart.vue")
        },
        {
          path:'my',
          name:'my',
          component:()=>import("@/views/my.vue")
        },
      ]
    },
    {
      path:'*',
      redirect:{name:'home'}
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
