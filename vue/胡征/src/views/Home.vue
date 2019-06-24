<template>
  <div class="home">
    <div class="bgc">
      <h1>下午好！{{username}}</h1>
      <van-button v-if="cdd" round type="danger" @click="changge">登录/注册</van-button>
      <van-button v-if="!cdd" round type="danger" @click="changge1">查询余额</van-button>
      <Hezi></Hezi>
    </div>
    <Hezi2></Hezi2>
    <Swiper></Swiper>

  </div>
</template>

<script>
  import store from "vuex"
  import Hezi from "@/components/hezi.vue"
  import Hezi2 from "@/components/hezi2.vue"
  import Swiper from "@/components/swiper.vue"
  export default {
    name: 'home',
    data() {
      return {
        username: sessionStorage.usename,
        cdd: this.$store.state.flg
      }
    },
    components: {
      Hezi, Hezi2, Swiper
    },
    methods: {
      changge() {
        this.$router.push({ name: "login" })
      },
      changge1() {

      }
    },
    mounted() {
      var a = sessionStorage.usename;
      if (a != "") {
        this.cdd = false
      }else{
        this.username = "游客"
      }

    }
  }
</script>
<style lang="scss" scoped>
  .home {
    padding-top: 45px;
  }

  .bgc {
    height: 4.6rem;
    background-color: blue;
  }

  h1 {
    font-size: 32px;
    padding: 24px 0 14px 14px;
    color: aliceblue;

  }

  .van-hairline::after {
    border-color: blue !important;
  }

  .van-button--normal {
    background-color: rgb(136, 133, 133);
    width: 116px;
    height: 30px;
    margin-left: 14px;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
    border: none;
    color: blue;
    margin-bottom: 30px;
  }
</style>