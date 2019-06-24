<template>
  <div id="app">
    <!-- 5.路由出口 -->
    <transition :name = "transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  watch:{
    '$route':function(to,from){
      var tolength = to.path.split('/').length;
      var fromlength = from.path.split('/').length;
      // 详情 4 > 列表 3
      this.transitionName = tolength>fromlength? 'slide-detail' : 'slide-list' 
    }
  },
  data(){
    return {
      transitionName:'slide-detail'
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
