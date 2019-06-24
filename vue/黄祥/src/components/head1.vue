<template>
  <div>
    <van-nav-bar :title="title1" style="background-color:#009FFF">
      <van-icon name="" slot="left">
        <i class="iconfont" v-html="lico" style="color:#fff" @click="licoclick"></i>
      </van-icon>
      <van-icon name="" slot="right">
        <i class="iconfont" v-html="rico" style="color:#fff" @click="ricoclick"></i>
      </van-icon>
    </van-nav-bar>
  </div>
</template>

<script>

export default {
  props:["title1","lico","rico"],
  data() {
    return {

    };
  },
  methods:{
    licoclick(){
      this.$router.push({name:'my'})
    },
    ricoclick(){
      this.$router.push({name:'search'})
    }
  }
}
</script>

<style>

 
</style>


