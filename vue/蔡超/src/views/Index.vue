<template>
  <div>
    <!-- 头部 -->
    <Headr class="heads"></Headr>
    <!-- 路由出口 -->
    <router-view v-if="isAllShow" class="index-route"></router-view>
    <!-- 尾部 -->
    <Footr class="foots"></Footr>
    <!-- 详情页 -->
    <Detail></Detail>
    <!-- 用户登陆注册 -->
    <Users></Users>
    <!-- 查询 -->
    <Search class="search"></Search>
    <!-- 排行 -->
    <Ranking></Ranking>
    <!-- 我的评论 -->
    <Mydis></Mydis>
  </div>
</template>
<script>
export default {
  name: "index",
  components: {},
  computed: {
    // 局部刷新
    isAllShow: {
      get() {
        return this.$store.state.reload.isAllShow;
      },
      set(val) {
        this.$store.state.reload.isAllShow = val;
      }
    }
  }
};
</script>
<style scoped>
.heads {
  width: 100%;
  height: 8vh;
  z-index: 1000;
}
.index-route {
  width: 100%;
  height: 84vh;
  overflow-y: scroll;
}
.foots {
  width: 100%;
  height: 8vh;
}
.search {
  position: absolute;
  top: 8vh;
}
</style>
