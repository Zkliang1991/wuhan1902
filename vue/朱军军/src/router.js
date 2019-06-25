import Vue from 'vue'
import Router from 'vue-router'//vue-router



// 0:模块化编程
Vue.use(Router)
// 1:创建路由组件
import Home from '@/views/Home.vue'
// 2:配置路由参数
const routes=[
  // views文件下新添文件,此处就需要配置路由
  {
    path:'/',
    redirect:{name:'home'}//跟路由 重定向到 home
  },
  {
    name:"index",
    path:"/index",
    component:()=>import("@/views/index.vue"),//路由组件再此创建
    children:[//index之下的子组件路由配置
      {
        path:"",
        redirect:{name:"home"}
      },
      { 
        path:"home",
        name:"home",
        component:Home,
      },
      {
        path:"loan",
        name:"loan",
        component:()=>import("@/views/loan.vue")
      },
      {
        path:"more",
        name:"more",
        component:()=>import("@/views/more.vue")
      },
      {
        path:"my",
        name:"my",
        component:()=>import("@/views/my.vue")
      },
    ]
  },
  {
    path:"/login",
    name:"login",
    component:()=>import("@/views/login.vue")
  },
  {
    path:"/about",
    name:"about",
    component:()=>import("@/views/About.vue")
  },
  {
    path:'*',
    redirect:{name:"home"}
  }
]

//3:创建路由对象
const router=new Router({
  routes,
  mode:"hash",//路由对象有hash  所以根目录为 #/   首页#/home   
  base:"/"
})

// 4:挂载根实例,此处暴露接口
export default router;


