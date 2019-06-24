<template>
  <div class="home">
        <Head title="掌中财富" :show="true" class="title"></Head>
        
    <div class="quanbu">
        <!-- 轮播图 -->
        <Swipe id=banner :swiperOptions="options">
            <div class="swiper-slide" v-for="(b,i) in banners" :key="i">
                <img :src="b" alt="" width="100%" height="240">
            </div>
        </Swipe>


        <!-- 累计成交 -->
        <van-row class="row">
            <van-col span="12">
                <div class="van"><img src="../assets/images/1.gif" alt=""></div>
                <div class="p1p2">
                    <p class="p1">累计成交</p>
                    <p class="p2">{{leiji1*1+dingdan1*1}}单</p>
                </div>
            </van-col>

            <van-col span="12">
                <div class="van"><img src="../assets/images/2.gif" alt=""></div>
                <div class="p1p2">
                    <p class="p1">累计赚取</p>
                    <p class="p2">{{zhuanqu1}}元</p>
                </div>
            </van-col>
        </van-row> 
         

        <!-- 新手礼  第一个    -->
        <div class="hui"></div> 
        <div class="xin" @click="toOne">
              <ul class="one">
                  <li>
                      <span class="shou">新手礼</span>
                      <span><van-tag round color="#f2826a" plain>新手专享</van-tag></span>
                  </li>
                  <li>
                      <p class="ten">{{10}}%</p>
                      <p class="ten1"><van-tag plain round color="#f2826a">+4% </van-tag></p>
                  </li>
                  <li class="wang">往期年利率</li>
              </ul>
              <ul class="two">
                  <li class="two1">3个月</li>
                  <li class="wang">项目期限</li>
              </ul>
              <ul class="three">
                  <van-tag color="#ffb200" size="large">立即加入</van-tag>
              </ul>
        </div>

    <!-- 季安心  第二个     -->
        <div class="hui"></div> 
          <div class="xin1" @click="toAnxin">
              <ul class="one1">
                  <li>
                      <span class="shou">季安心</span>
                      <span><van-tag round color="#f2826a" plain>全程加息0.5%</van-tag></span>
                  </li>
                  <li>
                      <p class="ten">10%</p>
                      <p class="ten1"><van-tag plain round color="#f2826a">+0.5% </van-tag></p>
                  </li>
                  <li class="wang">往期年利率</li>
              </ul>
              <ul class="two">
                  <li class="two1">3个月</li>
                  <li class="wang">项目期限</li>
              </ul>
              <ul class="three">
                  <van-tag color="#ffb200" size="large">立即加入</van-tag>
              </ul>
        </div> 

       
      <div class="hui"></div> 
      <!-- 第三个  年舒心 -->
          <div class="xin2" @click='toShuxin'>
              <ul class="one" >
                  <li>
                      <span class="shou">年舒心</span>
                      <span><van-tag round color="#f2826a" plain>全程加息0.5%</van-tag></span>
                  </li>
                  <li>
                      <p class="ten">11%</p>
                      <p class="ten1"><van-tag plain round color="#f2826a">+0.5% </van-tag></p>
                  </li>
                  <li class="wang">往期年利率</li>
              </ul>
              <ul class="two">
                  <li class="two1">12个月</li>
                  <li class="wang">项目期限</li>
              </ul>
              <ul class="three">
                  <van-tag color="#ffb200" size="large">立即加入</van-tag>
              </ul>
        </div> 

      

     </div> 
  </div>
</template>



<script>
export default {
  name:'home',
    data(){
        return {
            options:{
                loop:true,
                autoplay:true,
                speed:4,
                initialSlide:1,
            },
            leiji1:this.$store.state.leiji,
            dingdan1:this.$store.state.dingdan,  //累计成交总金额
            zhuanqu1:this.$store.state.zhuanqu,  //每一单的利润
            banners:[
                 require("@/assets/images/girlbig1.jpg"),
                 require("@/assets/images/girlbig2.jpg"),
                 require("@/assets/images/girlbig3.jpg"),
                 require("@/assets/images/girlbig4.jpg"), 
            ],
        }
    },
    methods:{
        toOne(){
            this.$router.push({name:"buy"})
        },
        toAnxin(){
            this.$router.push({name:"anxin"})
        },
        toShuxin(){
            this.$router.push({name:"shuxin"})
        }
    }
}
</script>

<style lang="scss" scoped>

 .quanbu{
     padding-bottom: 40px;  
 }


    /* 累计成交 */
   .van-col{
       height: 15vh;
       overflow: hidden;
       background-color: white;      
   }
  .p1{
     color:black;
     padding-top: 3vh;
     padding-bottom: 6px;
     font-size:100%;
     width: 30vw;
     box-sizing: border-box;
  }
  .p2{
     color:red;
     width: 30vw;
     size:60%; 
  }
  .van,.p1p2{
      float: left;
  }
  .van{
      padding:3vh 4vw 0 4vw;    
      size:60px;
      box-sizing: border-box;
  }
  .van img{
      width: 10vw;
      height: 6vh;
  }

  .hui{
      width: 100%;
      height: 10px;
      background-color: #f5f5f5;
  }


  /* 新手礼 */
  .xin{
      width: 100%;
      height: 130px;
      background-color: white;
      overflow: hidden;
  }
  .xin ul{
      float: left;
      width: 30%; 
  }
  .xin>ul>li{
      padding-left: 20px;
      box-sizing: border-box;

  }
  .one>li{
      line-height:40px;
      overflow: hidden;
  }
  .xin>.one{
      width: 39%
  }

  .shou{
      padding-right:10px;
      color:black;
      font-size: 15px;
      box-sizing: border-box;
  }
  .ten{
      padding-right:10px;
      font-size: 25px;
      color:red;
      float: left;
      box-sizing: border-box;
  }
  .ten1{
      float: left;
  }
  .wang{
      color:grey
  }
  /* 第一列的样式 */

.two1{
    padding-top: 50px;
    padding-bottom: 18px;
    color:darkolivegreen;
    box-sizing: border-box;
}
.three{
    text-align: center;
    line-height:130px;
}







  /* 新手礼   第二个*/
  .xin1{
      width: 100%;
      height: 130px;
      background-color: white;
      overflow: hidden;
  }
  .xin1 ul{
      float: left;
      width: 30%; 
  }
  .xin1>ul>li{
      padding-left: 20px;

  }
  .one1>li{
      line-height:40px;
      overflow: hidden;
  }
  .xin1>.one1{
      width: 39%
  }



// 第三个   年舒心
.xin2{
      width: 100%;
      height: 130px;
      background-color: white;
      overflow: hidden;
  }
  .xin2 ul{
      float: left;
      width: 30%; 
  }
  .xin2>ul>li{
      padding-left: 20px;
      box-sizing: border-box;

  }
  .one>li{
      line-height:40px;
      overflow: hidden;
  }
  .xin2>.one{
      width: 39%
  }



</style>

