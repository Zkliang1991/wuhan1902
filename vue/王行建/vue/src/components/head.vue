<template>
  <div class="header">
    <van-nav-bar
      :title="title"
      :left-text="name"
      :left-arrow="flags"
      @click-left="goback"
      @click-right="goSearch"
    >
      <van-icon name="search" slot="right" v-if="flag"/>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    goback() {
      this.$router.go(-1);
    },
    goSearch() {
      this.$router.push({ name: "search" });
    }
  },
  data() {
    return {
      flag: true,
      name: "",
      flags: true
    };
  },
  mounted() {
    this.flag = this.$route.name == "search" ? false : true;
    this.flag = this.$route.name == "login" ? false : true;
    this.name = this.$route.name == "login" ? "" : "返回";
    this.flags = this.$route.name == "login" ? false : true;
  }
};
</script>
<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}
</style>

