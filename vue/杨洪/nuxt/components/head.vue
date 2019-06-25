


<template>
      <van-nav-bar title="火星人俱乐部" left-text="返回"  @click-left="onClickLeft"   @click-right="onClickRight" left-arrow>
        <van-icon name="search" slot="right" />
        </van-nav-bar>

</template>


<script>
import  Head from '~/components/head.vue'
export default {
   props:["title","show"],
   components:{
      Head
  },
   data() {
    return {
      active: 0
    }
  },
  methods:{
    onClickLeft(){
      history.go(-1)
    },
    onClickRight(){
      this.$router.push({name:"search"})
      
      },
    
  }
}
</script>