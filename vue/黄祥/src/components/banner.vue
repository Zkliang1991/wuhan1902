<template>
  <div>
    <van-swipe :autoplay="2000" :img="fmimg">
      <van-swipe-item v-for="(b,i) in fmimg" :key="i">
        <img :src="b" alt width="100%" height="200px">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
    props:["fmimg"],
    data(){
        return{
            
        }
    },
}
</script>