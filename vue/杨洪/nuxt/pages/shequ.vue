



<template>
    <div>
        <van-tabs v-model="active">
        <van-tab title="官方公告 ">官方公告</van-tab>
        <van-tab title="火星编程 ">火星编程</van-tab>
        <van-tab title="视频讨论 ">视频讨论</van-tab>
        <van-tab title="炫酷实验 ">炫酷实验</van-tab>
        </van-tabs>
        <h1>count==={{count}}</h1>
          <h2>count========={{city}}</h2>
    </div>
</template>


<script>
import store from "../store/index"
export default {
     name:"shequ",
     data(){
         return{
             active:1,
             count:this.$store.state.count+1000,
             city:this.$store.state.city
         }
     },
     mounted(){
         console.log(this.$store)
     }
}
</script>
