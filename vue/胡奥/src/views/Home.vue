<template>
  <div class="home">
    <Head title="首页"></Head>
       <div>
           <van-swipe :autoplay="2000"  class="war"  >
              <van-swipe-item v-for="(img,i) in images" :key="i">
                  <img v-lazy="img"  class="par"  alt="">
              </van-swipe-item>
              
          </van-swipe>
       </div>

       <div class="fixer">
            <div v-for="(tu,ind) in imgs" :key="ind"  class="ming">
                <img :src="tu.img" alt="" class="pian">
                <span class="pan">{{tu.text}}</span>
            </div>
            <!-- <span v-for="(wen,index) in tesx" :key="index">
                {{wen.text}}
            </span> -->
       </div>
       <div class="din">
         <div class="shan">
           <h3>淘抢购</h3>
           <div class="leftl">
              <img :src="one" alt="" srcset="">
              <img :src="two" alt="" srcset="">
           </div>
           
         </div>
         <div class="xia">
           <h3>有好货</h3>
           <div class="leftl">
             <img :src="niezi" alt="">
             <img :src="yonzi" alt="">
           </div>
         </div>
       </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return{
        one:require("@/assets/images/img1.jpg"),
        two:require('@/assets/images/img2.jpg'),
        // niezi:require('@assets/images/img3.jpg'),
        niezi:require('@/assets/images/img3.jpg'),
        yonzi:require('@/assets/images/img4.jpg'),
        images:[
                require('@/assets/images/lunbo1.jpg'),
                require('@/assets/images/lunbo2.jpg'),
                require('@/assets/images/lunbo3.jpg'),
                require('@/assets/images/lunbo4.jpg'),
              ],
         imgs:[
            {img:require('@/assets/images/tm1.png'),text:"天猫"},
            {img:require('@/assets/images/tm2.png'),text:"聚划算"},
            {img:require('@/assets/images/tm3.png'),text:"天猫国际"},
            {img:require('@/assets/images/tm4.png'),text:"外卖"},
            {img:require('@/assets/images/tm5.png'),text:"天猫超市"},
            {img:require('@/assets/images/tm6.png'),text:"充值"},
            {img:require('@/assets/images/tm7.png'),text:"旅行"},
            {img:require('@/assets/images/tm8.png'),text:"领金币"},
            {img:require('@/assets/images/tm9.png'),text:"拍卖"},
            {img:require('@/assets/images/tm10.png'),text:"分类"},
         ],
        //  tesx:[
        //    {text:"天猫"},
        //    {text:"聚划算"},
        //    {text:"天猫国际"},
        //    {text:"外卖"},
        //    {text:"天猫超市"},
        //    {text:"充值中心"},
        //    {text:"天猫旅行"},
        //    {text:"领金币"},
        //    {text:"拍卖"},
        //    {text:"分类"},
        //  ]

            
    }
  },
  components: {
    HelloWorld
  }
}
</script>
<style lang="css" scoped>
    .war{
      width: 100%;
      height: 2.7rem;
    }
    .par{
      width: 100%;
      height: 100%;
    }
    .fixer{
      display: flex;
      flex-wrap:wrap;
      justify-content:space-around;
    }
    .ming{
      width: 1.3rem;
      height: 1.1rem;
      margin: 0.3rem 0;
    }
    .pian{
      width: 100%;
      height: 100%;
    }
    h3{
      margin-left:0.2rem;
      margin-top:0.2rem; 
      color: brown; 
    }
    .pan{
      display: block;
      width: 1.3rem;
      text-align: center;
      margin-top:0.15rem; 
    }
    .din{
      width: 100%;
      margin-top:0.6rem; 
    }
    .xia{
      margin-top:0.5rem; 
    }
    .leftl{
      display: flex;
      width: 50%;
      height: 2.7rem;
    }
    .leftl img{
      margin-top:0.2rem; 
      width: 100%;
      height: 100%;
    }
</style>

