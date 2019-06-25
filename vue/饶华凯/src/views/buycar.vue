<template>
    <div>
        <Head title="购物车" ></Head>
        
            <div v-if="addgoods.length>0&&buycar.length>0">
              <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
                <div class="item-animetion">

                <van-card
                v-for="(item,i) in buycar" :key="i"
                :num="item.count"
                :thumb-link="http+item.goods.id"
                :tag="addgoods.filter((item2,i)=>item2._id==item.goodId)[0].type.text"
                :price="addgoods.filter((item2,i)=>item2._id==item.goodId)[0].price"
                desc="折扣价:"  
                :title="addgoods.filter((item2,i)=>item2._id==item.goodId)[0].name"
                :thumb="addgoods.filter((item2,i)=>item2._id==item.goodId)[0].img"
                :origin-price="addgoods.filter((item2,i)=>item2._id==item.goodId)[0].price+2000"
                >
                  

                <div slot="footer">
                  <p class="xiaoji" >小计:<span class="xiaoji_span">{{item.count*addgoods.filter((item2,i)=>item2._id==item.goodId)[0].price}}</span>元</p>
                  <van-stepper v-model="item.count" min="1" max="999" integer @change="changeInput({ goodone:{_id:item.goodId} , count: item.count })"/>
                  <van-button size="mini" @click="cardelete({ goodId:item.goodId},item.goodId)">删除</van-button>
                  <van-button size="mini">付款</van-button>
                </div>
              </van-card>
              </div>
              </van-pull-refresh>
            </div>
            <div v-else class="kong">购物车空空如也，快去添加您喜爱的商品吧...</div>
        
        
        <van-submit-bar
        :price="addgoodsnum*100"
        button-text="提交订单"
        :disabled="flag"
        @submit="onSubmit"
      >
        <span slot="tip">
          你的收货地址不支持同城送, <span>修改地址</span>
        </span>
      </van-submit-bar>
      <div class="footdiv"></div>
      <div class="footdiv"></div>
      <div class="footdiv"></div>
      <div class="footdiv"></div>
    </div>
</template>
<script>
import {mapState}from "vuex";
import { SubmitBar } from 'vant'
export default {
  data(){
    return{
      checked:"",
       isLoading: false,
       addgoodsnum:0,
        http:"http://localhost:8080/[object%20Object]#/good/",

    }
  },
  created(){
    this.$store.dispatch("getgoods");
    this.$store.dispatch("addgoods")
  },
  mounted(){
  },
  computed:{
    ...mapState([
      "buycar",
      "addgoods",
    ]),
    flag(){
      return this.buycar.length>0?false:true;
    }
  },
  methods:{
    changeInput(data){
      this.$store.dispatch("carsGoods",data).then(()=>{
        this.addgoodsnum2()
      })
    },
    cardelete(data,goodId){
      this.$store.dispatch("cardelete",{data,goodId})
    },
    onSubmit(){
      this.$router.push({name:"submitorder"})
    },
    onRefresh() {
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
    },
    addgoodsnum2(){
      let num=0;
      for(let i=0;i<this.buycar.length;i++){
        let goodOne=this.buycar[i];
        let count=goodOne.count
        let price=goodOne.goods.price
          num+=price*count;
        }
      this.addgoodsnum= num
    }
  },
  watch:{
    addgoods(data){
    this.addgoodsnum2()
    },
    buycar(data){
      // this.flag=data.length>0?true:false;
      this.addgoodsnum2();
    },
    addgoodsnum(data){
      // console.log(111)
      // console.log(data)
    }
  },
  
}
</script>
<style lang="scss" scoped>
.xiaoji{
  font-size:0.26rem;
  color:red;
}
.van-pull-refresh__track,.van-pull-refresh{
  overflow: visible;
}
.van-submit-bar{
  bottom:0.8rem;
}
.item-animetion{
  animation: slideInUp .8s;
}
.kong{
  font-size: 0.3rem;
  color:gray;
  font-family:"楷体";
  line-height: 8rem;
  height: 8rem;
  text-align: center;
}
</style>
