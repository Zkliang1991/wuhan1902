<template>
  <div class="about">
    <Head></Head>
    <h2>This is an about page</h2>
    <Demo></Demo>
    <h2> {{word}}--- {{keys}} </h2>
    <Foot></Foot>
  </div>
</template>

<script>
import Demo from "@/components/demo.vue";
const {word} = require("@/utils/demo.js");
import obj from "@/utils/es6";
export default {
    data(){
        return{
          word,
          keys:obj.keys
        }
    },
    components:{
        Demo
    }
}
</script>
