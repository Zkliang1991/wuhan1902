<template>
    <div>
        <van-swipe :autoplay="2000"  class="wudi" :loop ="false" >
            <van-swipe-item v-for="(img,i) in images" :key="i" >
                <img v-lazy="img"  class="sha"  alt="" >
                <van-button type="info" v-if="i === 3 "  class="btn"  @click="onChange(i)">点我跳转</van-button>
            </van-swipe-item>
            
        </van-swipe>
    </div>
</template>
<script>
import { Toast } from 'vant';
import Vue from 'vue'
export default {
    name:"guide",
      data(){
          return{
              images:[
                'http://img2.imgtn.bdimg.com/it/u=2421881873,4125796645&fm=26&gp=0.jpg',
                'http://img.zcool.cn/community/014b2c573d883f6ac7253f9a468977.gif',
                'http://img4.imgtn.bdimg.com/it/u=2710300114,3673085866&fm=26&gp=0.jpg',
                'http://img.zcool.cn/community/013ef058491bc6a8012060c828adb5.gif',
              ],
              inde:false,
            
          }
      },
      methods: {
        onChange(index) {
            // Toast('当前 Swipe 索引：' + index);
            console.log(index)
            if(index == this.images.length-1){
                this.$router.push({name:'home'})
            }
         },
         
      
     },
 
  
      mounted(){
       if(localStorage.loopstorage){
           localStorage.loopstorage++
           if(localStorage.loopstorage>3){
               this.$router.push({name:"home"})
           }
       }else{
           localStorage.loopstorage=1
       }
    }
}
</script>
<style scoped>
div .wudi{
    width: 100%;
    height: 100%;
    position: relative;
    /* text-align: center; */
}
div .wudi .sha{
    width: 100%;
    height: 100%;
}
.btn{
    position: absolute;
    bottom: 5%;
    left: 38%;
}
</style>

