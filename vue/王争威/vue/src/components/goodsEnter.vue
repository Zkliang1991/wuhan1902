<template>
  <div>
     <Showdi></Showdi> 
    <van-card
      v-for="(good,i) in goods1"
      :key="i"
      :num="good.selectedNum"
      :price="good.price"
      :desc="good.goods.type.text"
      :title="good.goods.name"
      :thumb="good.goods.img"
    />
    <van-submit-bar :price="allprice" button-text="立即购买" @submit="onSubmit">
        <span class="span">共计 <span class="span1">{{goodsnum}}</span> 件</span>
      <span slot="tip">
        你的收货地址不支持同城送,
        <router-link :to="{name:'adress'}">修改地址</router-link>
      </span>
    </van-submit-bar>
		<van-popup v-model="show"  position="bottom" :overlay="false" @click="buyNow">
  <div class="div">
    <h1>购买成功</h1>
  </div>
</van-popup>
  </div>
</template>
<script>
import Showdi from "@/components/showdi.vue"
export default {
    components:{Showdi},
  data() {
    return {
      goods1: [],
      allprice: 0,
      goodsnum: 0,
			show:false,
// 			overlaystyle:{
// 				width:100vw,
// 				height:100vh,
// 			}
    };
  },
  mounted() {
    this.goods1 = JSON.parse(localStorage.goods)||"";
    // console.log(goods1)
    this.goods1.forEach(item => {
      this.allprice += item.price * 100;
      this.goodsnum += item.selectedNum * 1;
    });
  },
  methods: {
    // click(){
    //   closed()
    // },
    buyNow(){
      
      // 
      this.$axios.get('/vue/deleteGoods',{params:{type:1}}).then(res=>{
          // console.log(res)
          this.show=false
          localStorage.goods="";
         
      });
      var obj=JSON.parse(localStorage.goods)
          this.$axios.post('/vue/maiguo',obj).then(res=>{
                // console.log(111,res)
          })
    },
    onSubmit() {
			// console.log(111)
			this.show=true
		}
  }
};
</script>
<style scoped>
        .span{
            margin-left: 0.3rem;
        }
        .span1{
            color: darkorange;
            font-size: 0.4rem
        }
        .div{
          width: 100vw;
          height: 5rem;
          background-color: rgba(0,0,0,.3);
          text-align: center;
          font-size: 1rem;
          line-height: 5rem;
        }
</style>