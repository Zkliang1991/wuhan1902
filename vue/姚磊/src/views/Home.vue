<template>
  <div class="home">
    <Head title="首页"></Head>
    <img alt="Vue logo" src="../assets/logo.png" v-if="false">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h2> home - home - home  首页 </h2>
    <Demo></Demo>
  
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Demo from "@/components/demo.vue"

export default {
  name: 'home',
  components: {
    Demo
  }
}
</script>
