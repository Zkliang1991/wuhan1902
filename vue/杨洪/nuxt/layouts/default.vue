<template>
  <div>
       <van-nav-bar title="火星人俱乐部" left-text="返回"  @click-left="onClickLeft"   @click-right="onClickRight" left-arrow>
        <van-icon name="search" slot="right" />
        </van-nav-bar>
      
     

        <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/app">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/kecheng">课程</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/bianji">课程详情</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/car">购物车</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/wod">我的</van-tabbar-item>
        </van-tabbar>
    <nuxt />
  </div>
</template>

<script>


export default {
 
   data() {
    return {
      active:0
    }
  },
  methods:{
    onClickLeft(){
      history.go(-1)
      
    },
    onClickRight(){
      this.$router.push({name:"search"})
      
      },
    
  },
  // watch:{
  //   active(newVal){
  //     console.log(newVal)
  //       this.$router.push({name:newVal})
  //   }
  // },
  // mounted(){
  //   this.active=this.$route.name
  // }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
  div.van-nav-bar{
  background-color: greenyellow;
}
#__layout.ki>ul{
  height: 100px;
  border: 1px solid;

} 
 .van-tab__pane ul li{
   
   
   border: 1px solid greenyellow;
 }
 /* .van-tab__pane ul li h2{
  
   color: blueviolet
 } */
 .mk h2{
      color: aquamarine;
 }
 .mk h3{
     color: chartreuse;
     text-align: center;
 }


 .van-stepper .van-stepper__minus {
   height: 40px;
   width: 100px;
 }
  .van-stepper .van-stepper__plus{
      height: 40px;
      width: 100px;
  }
    .van-stepper  .van-stepper__input{
       height: 40px;
      width: 100px;
    }

    .van-submit-bar {
      margin-bottom: 50px
    }
</style>
