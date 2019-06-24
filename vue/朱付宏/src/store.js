import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//import axios from "@/utils/ajax"

export default new Vuex.Store({
  state: {
       count:10,
       jia:0.5,
       huadong:"136**********预约:￥2324.45 --------------   3小时前//136**********预约:￥2324.45 --------------   3小时前" ,
       leiji:3435345 ,   //累计的成交量
       zhuanqu:7872218,   //累计赚取
       jinri:0 ,
       jine:0,
       zongjine:100000,   //账户总金额
       dingdan:0,        //订单数  (今日成交的数量)
       ding:0,          //订单总金额
       zongshouyi:0,     //预计总收益
       chongzhi:0,       //充值的金额
       tixian:0,         //提现的金额
       isLogin:0,     //初始时候给一个 isLogin=0 表示用户未登录  判断用户登录的


  },
  actions: {
    shouyiAdd(context){
      context.commit("shouyiAdd",num);
    },
    // //异步的axios请求
    // getZhanghu({commit},{url,cb,params}){
    //   axios.post(url,{
    //      params: params    //传递的参数

    //   }).then(res=>{
    //     cb();   //可能执行的一些回调
    //     commit('getZhanghu',res.data.result)
    //   })
    // }
          
  },
  mutations: {
    shouyiAdd(state,num){
      state.count*10;
      },
    zongjine(state,add){
          state.jine=add
    },
    changeLogin(state,data){  //判断用户是否登录
      state.isLogin = data;
    },
    dingdanAdd(state){   
      state.dingdan +=1     //订单数量的增加
      state.leiji +1       //累计订单数量的增加
    },
    zongjineDesc(state,n){   //账户总金额的减少
      state.zongjine-=n
    },
    ding(state,n){            //以购买的订单总金额
      state.ding += n
    },
    zongshouyi(state,m){      //预计总收益
      state.zongshouyi += m
    },
    chongzhi(state,add){       //充值的金额
      state.chongzhi += add
      console.log(add)
    },
    tixian(state,desc){       //提现金额
      state.tixian -= desc
      console.log(desc)
      console.log(state.tixian)
    },
    // getZhanghu(state,goods){
    //   state.data={...state.data.goods}
    // }
    zhuanqu(state,lirun){
      state.zhuanqu +=lirun   //每单的利润
    }

  }
  
})
