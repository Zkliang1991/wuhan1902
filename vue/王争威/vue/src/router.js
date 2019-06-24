import Vue from "vue";
import Router from "vue-router";
// import Home from './views/Home.vue'
import VueRouter from "vue-router";

Vue.use(Router);

const routes = [
  { path: "", redirect: { name: "guide" } },
  {
    path: "/guide",
    component: () => import("@/views/guide.vue"),
    name: "guide"
  },
  { path: "/index", component: () => import("@/views/index.vue"), name: "index" ,
  children:[
    {path:"home",component:()=>import("@/views/home.vue"),name:"home"},
    {path:"tuijian",component:()=>import("@/views/tuijian.vue"),name:"tuijian"},
    {path:"search",component:()=>import('@/views/search.vue'),name:"search"},
    {path:"goods",component:()=>import('@/views/goods.vue'),name:"goods"},
    {path:"my",component:()=>import("@/views/my.vue"),name:"my"},
    {path:"cart",component:()=>import('@/views/cart.vue'),name:"cart"},
    {path:"*",redirect:{name:"home"}}
  ]
},
{path:"/more",component:()=>import('@/views/more.vue'),name:'more'},
{path:'/login',component:()=>import('@/views/login.vue'),name:"login"},
{path:'/register',component:()=>import('@/views/register.vue'),name:"register"},
{path:'/goodsEnter',component:()=>import('@/views/goodsEnter.vue'),name:"goodsEnter"},
{path:"/adress",component:()=>import('@/components/adress.vue'),name:"adress"},
{path:"/changePwd",component:()=>import('@/views/changePwd.vue'),name:"changePwd"}
];
const router = new VueRouter({
  routes,
  mode: "hash",
  base: "/"
});
export default router;
