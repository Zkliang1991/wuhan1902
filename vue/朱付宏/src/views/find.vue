<template>
  <div class="find">
    <Head title="发现" :show="true"></Head> 

    <!-- 四条公告 -->
    <van-row>
        <van-col span="6"><router-link to=/index/home >
           <p><van-icon name="label"/></p>
           <p class="gong">公告</p>
        </router-link></van-col>
        <van-col span="6"><router-link to=/index/home >
           <p><van-icon name="chat"/></p>
           <p class="gong">消息</p>
        </router-link></van-col>
        <van-col span="6"><router-link to=/index/home >
            <p><van-icon name="stop-circle"/></p>
            <p class="gong">活动</p>
        </router-link></van-col>
        <van-col span="6"><router-link to=/index/home >
            <p><van-icon name="printer"/></p>
            <p class="gong">帮助</p>
        </router-link></van-col>  
    </van-row>
    <!-- 四条公告 -->

    <div class="hui"></div>

    <!-- 热点新闻 -->
     <div class="content">
       <p class="re">热点新闻</p>
     
        <!-- 新闻列表 --> 
      <List :goods="goods"></List>
      <!-- List是全局注册的 传给list一个goods参数-->
   </div>
  </div>

</template>



<script>

export default {
    name: "find",
    data(){
      return{
        goods:[]
      }
  },
  mounted(){
    this.$axios.get("/vue/getGoods",
    ).then(res=>{
        console.log(res)
        this.goods=res.data.result;
        
    })
  }

};
</script>




<style lang="scss" scoped>

 /* 四条公告 */
 .van-col--6{
      height: 10vh; 
      background-color: white;
      text-align: center;
      font-size: 6vw;
      padding-top: 1vh;
      
 }
 .gong{
     color:darkolivegreen
 }
 /* 四条公告 */


.hui{
  width: 100vw;
  height: 3vh;
  background-color:darkgrey;
}

/* 热点新闻 */
.content{
  width: 100vw;
  padding:1vh 3vw 0 3vw;
  box-sizing: border-box;  /*灵魂代码*/
}
 .re{
   padding-bottom: 2vh;
   color: skyblue;
 }








</style>

