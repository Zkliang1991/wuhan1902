import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Vant from "vant";
Vue.use(Vant)

import ajax from '@/utils/ajax';//全局声明 axios
Vue.prototype.$axios = ajax;

import countDown from '@/components/count_down.vue';//倒计时广告
Vue.component('my-interval',countDown)

import myFoot from '@/components/footer.vue';//尾部
Vue.component('my-foot',myFoot)

import myHead1 from '@/components/head1.vue';//头部1
Vue.component('my-head1',myHead1)

import myHead2 from '@/components/head2.vue';//头部2
Vue.component('my-head2',myHead2)

import myHead3 from '@/components/head3.vue';//头部3
Vue.component('my-head3',myHead3)

import myHead5 from '@/components/head5.vue';//头部5
Vue.component('my-head5',myHead5)

import headNav from '@/components/head_nav.vue';//首页导航
Vue.component('headNav',headNav)

import headClassify from '@/components/head_classify.vue';//首页导航
Vue.component('headClassify',headClassify)

//mine页面
import userLogin from '@/components/userlogin.vue'//我的登录之后
Vue.component('userlogin',userLogin)

import Attention from '@/components/attention.vue'//关注店铺
Vue.component('attention',Attention)

import Goodstate from '@/components/goodstate.vue'//关注店铺
Vue.component('goodstate',Goodstate)

import Zhuxiao from '@/components/mine_zhuxiao.vue'//注销登陆
Vue.component('Zhuxiao',Zhuxiao)

//singel页面
import singelHead from '@/components/singel_head.vue'//详情页头部
Vue.component('singelHead',singelHead)

import singelGood from '@/components/singel_good.vue'//详情页商品信息
Vue.component('singelGood',singelGood)

import singelTicket from '@/components/singel_ticket.vue'//详情页优惠券
Vue.component('singelTicket',singelTicket)

import singelBottom from '@/components/singel_bottom.vue'//详情页底部
Vue.component('singelBottom',singelBottom)

//login页面
import headLogReg from '@/components/head_logreg.vue'//注册登录页头部
Vue.component('headLogReg',headLogReg)

//购物车页面
import buycartGoods from '@/components/buycart_goods.vue'//购物车商品
Vue.component('buycartGoods',buycartGoods)

import buycartJiesuan from '@/components/buycart_jiesuan.vue'//购物车结算组件
Vue.component('buycartJiesuan',buycartJiesuan)

import buycartHead from '@/components/buycart_head.vue'//购物车头部
Vue.component('buycartHead',buycartHead)

//空尾部
import footerEmpty from '@/components/footer_empty.vue'
Vue.component("footerEmpty",footerEmpty)





import('@/style/index.scss')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
