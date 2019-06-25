import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import $axios from "@/utils/ajax"
export default new Vuex.Store({
  state: {
    listgoods:[],//列表数据
    good:"", //详情数据
    buycar:[],//购物车数据
    addgoods:[],//全部商品数据
    classfiy:[],//分类的数组
    footTaobao:false,//foot淘宝的logo
    getAvatar:{},//当前用户的相关信息
  },
  mutations: {
    //列表的数据
    getclassfiy(state,data){
      // console.log(data)
      state.listgoods=data.result
    },
    //渲染详情页
    goodId(state,data){
      state.good=data.result[0]||[]
    },
    //查询购物车
    getgoods(state,data){
      state.buycar=data.result
    },
    //获取全部商品数据
    addgoods(state,data){
      state.addgoods=data.result
    },
    //更新页面数据
    cardelete(state,goodId){
      var index= state.buycar.findIndex((item,index)=>item.goodId==goodId);
      state.buycar.splice(index,1);
    },
    //分类数据
    classfiy(state,data){
      state.classfiy=data.result
    },
    //foot的淘宝logo
    footTaobao(state,data){
        state.footTaobao=data;
    },
    //用户信息
    getAvatar(state,data){
      state.getAvatar=data[0];
    }
  },
  actions: {
    //渲染列表页的请求
    getclassfiy({commit},value){
      $axios.get("/vue/goods",{  //注意这个页面不能用this.axios，需要再次引入
        params:{
            // limit:10,
            keyword:value
        }
    }).then(res=>{
      commit("getclassfiy",res.data)
    })
    },
    //渲染详情页的请求
    goodId({commit},value){
      $axios.get("/vue/goodsOne",{
        params:value
      }).then(res=>{
        commit("goodId",res.data)
      })
    },
    //详情页提交过来的购物车数据
    addToCar({commit},data){
      $axios.post("/vue/addToCar",data)
      .then(res=>{
        this.dispatch("getgoods")
      })
    },
    //查询购物车数据库
    getgoods({commit}){
      $axios.get("/vue/getCars")
      .then(res=>{
        commit("getgoods",res.data)
      })
    },
    //全部商品数据
    addgoods({commit}){
      $axios.get("/vue/allgoods")
      .then(res=>{
        commit("addgoods",res.data);
      })
    },
    //购物车数据提交
    carsGoods({commit},data){
      $axios.post("/vue/carsGoods",data)
      .then(res=>{
        // console.log(res);
      })
    },
    //删除购物车商品数据
    cardelete({commit},{data,goodId}){
      $axios.get("/vue/deletegoods",{
        params:data
      })
      .then(res=>{
        commit("cardelete",goodId);
      })
    },
    //商品分类
    classfiy({commit}){
      $axios.get("/vue/getGoodsType")
      .then(res=>{
        commit("classfiy",res.data)
      })
    },
    //删除购物车数据
    addDeletecar({commit},data){
      var id=data.map((item,i)=>item.goods._id);
      $axios.get("/vue/addDeletecar",{
        params:{
          ids:id
        }
      }).then((res)=>{
      })
    },
    //获取客户信息的请求
    getAvatar({commit}){
      $axios.get("/vue/getAvatar")
      .then((res)=>{
        commit("getAvatar",res.data.result)
      })
    }
  }
})
