<template>
  <div id="app">
    <!-- 5.路由出口 -->
    <transition :name="transitionName">
      <router-view class="main-box"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transitionName: "slide-detail"
    };
  },
  watch: {
    $route: function(to, from) {
      var toLength = to.path.split("/").length;
      var fromLength = from.path.split("/").length;
      this.transitionName =
        to.length > fromLength ? "slide-detail" : "slide-list";
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
</style>
