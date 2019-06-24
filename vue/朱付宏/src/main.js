import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';    //安装并引入 vant UI 
Vue.use(Vant);

import  VueResource  from 'vue-resource'
Vue.use(VueResource)              //引入服务

import { Dialog } from 'vant';
Vue.use(Dialog);


import ajax from '@/utils/ajax';
Vue.prototype.$axios=ajax     //以后可以用this.$axios指向ajax

Vue.config.productionTip = false
console.log("这是项目启动的入口文件")

import Head from "@/components/head.vue";
Vue.component("Head",Head);            //全局注册head这个组件
import Foot from "@/components/foot.vue";
Vue.component("Foot",Foot);

import Swipe from "@/components/swipe.vue";
Vue.component("Swipe",Swipe);

import List from "@/components/list.vue";
Vue.component("List",List);




//判断用户是否登录
router.beforeEach((to,from,next) => {   
  if(to.matched.some( m => m.meta.auth)){     
       // 对路由进行验证     
        if(store.state.isLogin=='100'){    // 已经登陆      
            next()      // 正常跳转到你设置好的页面 
            console.log('已经登录') 
            //next({name:'chongzhi',query:{ Rurl: to.fullPath} }) 
        }
        else{       
       // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；   
          // next({name:'login'})        //这一步没问题
          next({name:'login',query:{ Rurl: to.fullPath} })
          console.log('未登录')
          Dialog({ message: '您还未登录,请先登录' }); 
         } 
    }else{ 
      next() 
   } 
})





import '@/styles/index.scss';   

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
