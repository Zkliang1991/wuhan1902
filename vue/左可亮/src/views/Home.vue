<template>
  <div class="home">
     <Head title="首页" :show="true"></Head>
    <img alt="Vue logo" src="../assets/logo.png" v-if="false">
    <h2> home - home - home  首页 </h2>
    <hr>
    <Demo v-if="false"></Demo>
    <div class="h-box">适配rem</div>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
    
  </div>
</template>

   
<script>
// @ is an alias to /src


import Demo from "@/components/demo.vue"
export default {
  name: 'home',
  components: {
    Demo
  },
  mounted(){
    console.log('手机设备宽度:  ' + document.documentElement.clientWidth)
  }
}
</script>

<style scoped>
.h-box{
  width:2rem;
  height:2rem;
  background: orange;
}
</style>



