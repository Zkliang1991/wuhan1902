<template>
  <div>
    <van-nav-bar :title="title2">
      <van-icon name="" slot="left">
        <i class="iconfont" v-html="lico" @click="licoclick"></i>
      </van-icon>
      <van-icon name="" slot="right">
        <i class="iconfont" v-html="rico" style="color:orange" @click="ricoclick"></i>
      </van-icon>
    </van-nav-bar>
  </div>
</template>

<script>

export default {
  props:["title2","lico","rico"],
  data() {
    return {

    };
  },
  methods:{
    licoclick(){
      history.go(-1)
    },
    ricoclick(){
      console.log("right")
    }
  }
}
</script>

