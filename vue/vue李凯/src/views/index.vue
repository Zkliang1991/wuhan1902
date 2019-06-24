<template>
  <div>
    <router-view></router-view>
    <Popup></Popup>
    <!-- <van-popup v-model="show" position="left" :overlay="false">内容</van-popup> -->
    <Foot></Foot>
  </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    }
};
</script>

<style lang="scss" scoped>
// <van-button class="bigBtn" type="primary" size="large">
//       <i class="icon iconfont gg">&#xe709;</i> 用户登录
//     </van-button>
// .van-button--large{
//   width: 65%;
//   height: 40px;
//   line-height: 40px;
//   color:#e6dc52;
//   font-weight: bolder;
// }

// .bigBtn{
//   position: absolute;
//   left: 0;
//   top: 85%;
// }

// .van-button__text .gg{
//   font-size: 19px;
//   color:#c7be3c;
// }
</style>

