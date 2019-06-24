<template>
  <div class="about">
    <Head></Head>
    <h2>This is an about page</h2>
    <Demo></Demo>
    <h2> {{word}}--- {{msg}}----{{keys}}</h2>
    <Foot></Foot>
  </div>
</template>

<script>
import Demo from "@/components/demo.vue"
const {word} = require("@/utils/demo.js");
const {msg} = require("@/utils/msg");
import obj from "@/utils/es6"; 
console.log(obj);
export default {
    data(){
      return {
        word,
        msg,
        keys:obj.keys
      }
    },
    components:{
      Demo
    }
}
</script>

<style lang="scss" scoped>
h2{
  color:pink;
}
</style>
