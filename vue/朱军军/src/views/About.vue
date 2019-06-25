<template>
  <div class="about">
    <div style="color:#fff;background:#fff;" >1</div>
    <div style="color:#fff;background:#fff;" >1</div>
    <div style="color:#fff;background:#fff;" >1</div>
    <div style="color:#fff;background:#fff;" >1</div>
    <h1>您登陆成功,这是一个点击触发的其他页面,下面只是一个动图</h1>
    <img class="img" :src="src" alt="">
  </div>
</template>

<script>
export default {
  name:"about",
  data(){
    return{
      src:require("@/assets/images/ajax-loader.gif"),
    }
  }
}
</script>
<style scoped>
.img{
  display:inline-block;
  margin:0 auto;
}
</style>
