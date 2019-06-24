<template>
    <div>
       <van-notice-bar color = "#f00" background = "#fff7cc"
        text="[天猫618]大牌狂欢,衣服,限时抢购,跨店满300减30,上不封顶,还有更多优惠!天猫理想生活狂欢季,全民'嗨'购!"
        left-icon="volume-o"
      />
      <div class = 'wrap'>
        <div class = 'box' v-for = '(newGood,i) in newGoods' :key = 'i'>
            <router-link :to = '{name:"detail",params:{keyword:newGood.id}}'>
                <img :src="newGood.img" alt="" style = 'width:100%;height:180px;border-radius:6px'>
            </router-link>  
            <p>{{newGood.title}}</p>
            <p style = "color:#f00">价格￥RMB: {{ newGood.price }}  新品</p>
        </div>
      </div>
      
      <!-- wipe轮播 -->
       
      <van-swipe 
      :autoplay="3000" 
      indicator-color="white"
      style = "margin-bottom:10px"
      >
        <van-swipe-item  v-for = '(w,i) in wipeGoods' :key = 'i'>
          <img :src="w.img" alt="" width = "100%" height = "260">
        </van-swipe-item>      
      </van-swipe>
      <!-- 列表 -->
      <div>
        <div class="one" v-for = "(good,i) in allGoods" :key = 'i'>
          <router-link :to = '{name:"detail",params:{keyword:good.id}}'>
                <img :src="good.img" alt="" style = 'width:100%;height:180px;border-radius:6px'>
          </router-link>  
          <div>
              <p>{{good.title}}</p>
              <p style = "color:#f00">价格￥RMB: {{ good.price }}  新品</p>
          </div>
          <div class="blank"></div>
        </div>
      </div>
        <Foot></Foot>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
var mySwiper = new Swiper('.swiper-container', {
	autoplay: true,//可选选项，自动滑动
})
export default {
    name:'weitao',
    data(){
      return {
        newGoods:[],
        wipeGoods:[],
        allGoods:[]
       
      }
    },
    methods:{
      ...mapMutations(['changeTitle'])
  },
  mounted(){
    this.$store.commit('changeTitle','微淘');
    this.$axios.get('/vue/getGds')
      .then(res=>{
          this.newGoods = res.data.result.splice(8,2);
          this.wipeGoods = res.data.result.splice(5,4);
          this.allGoods = res.data.result;
      })
  }
}
</script>

<style scoped>
  .wrap{
    height:320px;
  }
  .box{
    width:45%;
    float:left;
    margin-left:3.3%;
  }
  .swiper-slide{
    width:100%;
    height:240px;
    background-color:yellow;
  }
  .one{
      width:45%;
      float:left;
      margin-left:3.3%;
  }
  .blank{
      width:100%;
      float:left;
      height:54px;
  }
</style>


