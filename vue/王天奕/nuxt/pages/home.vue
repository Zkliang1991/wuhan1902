<template>
    

    <div>
        <van-swipe :autoplay="2000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src='image' alt="" class="image">
        </van-swipe-item>
        </van-swipe>
        
    </div>
</template>
<script>

export default {
  
  data() {
    return {
      images: [
               'http://s0.hao123img.com/res/r/image/2014-07-21/202a702145bf5bfc87471e8acf36e4b4.gif',
               'http://img.zcool.cn/community/01928a554b5f02000001bf7217b7d6.jpg',
               'http://img0.imgtn.bdimg.com/it/u=2823513971,3482135045&fm=26&gp=0.jpg',
               
          
               
      ],
     
    }
  },
  
}
</script>
<style scoped>
.image{
  width: 375px;

}
</style>

