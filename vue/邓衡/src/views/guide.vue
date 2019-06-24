<template>
  <div>
    <van-swipe  :show-indicators="false" :continuous="false" :loop="false">
      <van-swipe-item v-for="(img,i) in imgs" :key="i">
        <img :src="img" alt="" width="100%" height="100%" @click="gotoHome(i)">
      </van-swipe-item>

    </van-swipe>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'guide',
    data() {
      return {
        imgs: [
          require("@/assets/images/slide1.png"),
          require("@/assets/images/slide2.png"),
          require("@/assets/images/slide3.png"),
          require("@/assets/images/slide4.png"),
        ],
      }
    },
    methods: {
            gotoHome(id){
                if(id==this.imgs.length-1){
                    this.$router.push({name:'login'})
                }
            }
        },
    mounted(){
      if(localStorage.num){
        localStorage.num++;
          if(localStorage.num>4){
            this.$router.push({name:'login'})
          }
      }else{
        localStorage.num=1
      }
    },
    components: {

    }
  }
</script>