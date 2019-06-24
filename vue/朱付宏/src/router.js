import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)   //这个地方记得修改

// 1. 创建路由组件  
import home from './views/home.vue'

// 2. 配置 routes 
const routes = [
    {
      path:"/",   
      redirect:{name:'home'}  //根路径   页面打开就进入这个页面
    },
    {
      path: 'login',
      name: 'login',
      component:()=>import("@/views/login.vue"),
    },
    {
      path: 'register',
      name: 'register',
      component:()=>import("@/views/register.vue"),
    },
    {
      path: 'good/:goodId',
      name: 'good',
      component:()=>import("@/views/good.vue"),
    },
    {
      path: 'anxin',
      name: 'anxin',
      component:()=>import("@/views/anxin.vue"),
    },
    {
      path: 'shuxin',
      name: 'shuxin',
      component:()=>import("@/views/shuxin.vue"),
    },
    {
      path: 'changxin',
      name: 'changxin',
      component:()=>import("@/views/changxin.vue"),
    },
    {
      path: 'buy',
      name: 'buy',
      component:()=>import("@/views/buy.vue"),
    },
    {
      path: 'tixian',
      name: 'tixian',
      meta: {auth: true,},  // 添加该字段，表示进入这个路由是需要登录的
      component:()=>import("@/views/tixian.vue"),
    },
    {
      path: 'chongzhi',
      name: 'chongzhi',
      meta: {auth: true,},  // 添加该字段，表示进入这个路由是需要登录的
      component:()=>import("@/views/chongzhi.vue"),
    },
    {
      path: 'jiaru',
      name: 'jiaru',
      component:()=>import("@/views/jiaru.vue"),
    },
  
     {
    path: '/index',
    name: 'index',
    component:()=>import("@/views/index.vue"),
    children:[
      {
        path:"",
        redirect:{name:'home'}
      },
      {
        path: 'home',
        name: 'home',
        component:()=>import("@/views/home.vue"),
      },
      {
        path: 'find',
        name: 'find',
        component:()=>import("@/views/find.vue"),
      },
      {
        path: 'jie',
        name: 'jie',
        component:()=>import("@/views/jie.vue"),
      },
      {
        path: 'my',
        name: 'my',
        //meta: {auth: true},
        component:()=>import("@/views/my.vue"),
       
      },
    ]  
  },

  
  {
    path:"*",
    redirect:{name:'home'}   //重定向  路径错误的时候就进入guide
  }
]


// 3. 创建路由对象 
const router = new VueRouter({
  routes,
  mode:'hash',
  base:'/'
})

// 4. 挂载到根实例上   第四步去main.js里面挂载   第五步在App.vue里面  
export default router;