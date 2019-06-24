<template>
  <div id="app" ref="one">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app",
  computed: {
    ...mapState(["data","bgcImg"])
  },
  mounted() {
    this.$refs.one.style.background = `url(${this.bgcImg}) no-repeat `;
    this.$refs.one.style.backgroundSize = `100% 100%`;
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
