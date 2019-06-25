import Vue from 'vue'
import vueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(vueRouter)
const routes = [
  {
    path:"/",
    redirect:{name:"guide"}
  },
  {
    path:"/guide",
    name:"guide",
    component:()=>import('@/views/guide.vue')
  },
  {
    path:"/index",
    name:"index",
    component:()=>import('@/views/index.vue'),
    children:[
      {
        path:"",
        redirect:{name:"home"}
      },{
        path:"home",
        name:"home",
        component:Home,
      },{
        path:"classify",
        name:"classify",
        component:()=>import('@/views/classify.vue')
      },{
        path:"jdvideo",
        name:"jdvideo",
        component:()=>import('@/views/video.vue')
      },{
        path:"buycart",
        name:"buycart",
        component:()=>import('@/views/buycart.vue')
      },,{
        path:"mine",
        name:"mine",
        component:()=>import('@/views/mine.vue')
      }
    ],
  },
  {
    path:"/search",
    name:"search",
    component:()=>import('@/views/search.vue')
  },
  {
    path:"/login",
    name:"login",
    component:()=>import('@/views/login.vue')
  },
  {
    path:"/register",
    name:"register",
    component:()=>import('@/views/register.vue')
  },
  {
    path:"/singel/:id",
    name:"singel",
    component:()=>import('@/views/singel.vue')
  },
  {
    path:"/collection",
    name:"collection",
    component:()=>import('@/components/collection.vue')
  },
  {
    path:"*",
    redirect:{name:"home"}
  }
]

const router = new vueRouter({
  routes,
  mode:"hash",
  base:"/"

})

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
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })
