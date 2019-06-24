<template>
  <div class="index">
        <!-- <router-view class="main-router"></router-view> -->
        <Foot class="foot"></Foot>
  </div>
</template>

<script>
export default {
    name:"index"
}
</script>


<style lang="scss" scoped>
.foot{
  width: 100vw;
  height: 8vh;
}
.main-router{
  width: 100%;
  height: 92vh;
}
</style>
