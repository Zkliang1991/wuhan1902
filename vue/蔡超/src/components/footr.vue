<template>
  <van-tabbar route>
    <van-tabbar-item replace to="/index/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/index/itemize" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item replace to="/index/collect" icon="star-o">收藏</van-tabbar-item>
    <van-tabbar-item replace to="/index/my" icon="contact">个人中心</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  name: "footr",
  mounted() {
    this.$store.dispatch("titleAdd", this.$route.name);
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch("titleAdd", to.name);
    }
  }
};
</script>
<style scoped>
</style>
