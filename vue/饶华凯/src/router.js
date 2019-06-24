import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)


  var routes= [
    {path:"",
      redirect:{name:"guide"}
    },
    {
      path:"/guide",
      name:"guide",
      component:()=>import("@/views/guide.vue")
    },
    {
      path: '/index',
      name: 'index',
      component: ()=>import("@/views/index.vue"),
      children:[
        {
          path:"home",
          name:"home",
          component:()=>import("@/views/home.vue")
        },
        {
          path:"classify",
          name:"classify",
          component:()=>import("@/views/classify.vue")
        },
        {
          path:"buycar",
          name:"buycar",
          component:()=>import("@/views/buycar.vue")
        },
        {
          path:"my",
          name:"my",
          component:()=>import("@/views/my.vue")
        },

      ]
    },{
      path:"/login",
      name:"login",
      component:()=>import("@/views/login.vue")
    },{
      path:"/serch",
      name:"serch",
      component:()=>import("@/views/serch.vue")
    },{
      path:"/good/:id",
      name:"good",
      component:()=>import("@/views/good.vue")
    },{
      path:"/setup",
      name:"setup",
      component:()=>import("@/views/setup.vue")
    },{
      path:"/submitorder",
      name:"submitorder",
      component:()=>import("@/views/submitOrder.vue")
    },{
      path:"/addressedit",
      name:"addressedit",
      component:()=>import("@/views/addressEdit.vue")
    },{
      path:"/myorder/:num",
      name:"myorder",
      component:()=>import("@/views/myOrder.vue")
    },{
      path:"/fncollect/:num",
      name:"fncollect",
      component:()=>import("@/views/fnCollect.vue")
    },
    {
      path:"*",
      redirect:{name:"home"}
    }
  ]
//3.创建路由实例
const router = new Router({
  routes,
  mode: "hash",
  base:"/"
});

//4.挂载到根实例上
export default router;