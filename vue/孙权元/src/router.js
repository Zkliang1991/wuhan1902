import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base:'/',
  routes: [
    {
      path: '/',
      redirect:{name:"guide"},      
    },
    {
      path:"/guide",
      name:"guide",
      component:()=>import("@/views/guide.vue")
    },
    {
      path:"/index",
      name:"index",
      component:()=>import("./views/index.vue"),
      children:[
        {
          path:"",
          redirect:{name:"home"},
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
        }
      ]
    },
    {
      path:"/login",
      name:"login",
      component:()=>import("@/views/login.vue")
    },
    {
      path:"/search",
      name:"search",
      component:()=>import("@/views/search.vue")
    },
    {
      path:"/good/:goodId",
      name:"good",
      component:()=>import("@/views/good.vue")
    },
  ]
})
