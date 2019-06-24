<template>
  <div ref="one" class="uu">
    <div class="login">
      <input class="logininp" type="text" v-model="login.username" placeholder="请输入用户名">
      <input class="logininp" type="password" v-model="login.password" placeholder="请输入密码">
      <van-button class="loginbtn" type="primary" @click="logins">登陆</van-button>
      <van-button class="loginbtn" type="danger" @click="gozhuce">注册</van-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "login",
  computed: {
    ...mapState(["juziImg", "loginimg", "login"])
  },
  mounted() {
    this.$refs.one.style.background = `url(${this.loginimg}) no-repeat`;
    this.$refs.one.style.backgroundSize = `100% 100%`;
    this.$refs.one.style.minHeight = `100vh`;
    if (sessionStorage.Usertoken) {
      this.$router.push({ name: "head" });
    }
  },
  methods: {
    gozhuce() {
      this.$router.push({ name: "zhuce" });
    },
    ...mapActions(["logins"])
  }
};
</script>
<style scoped>
.login {
  border-radius: 10%;
  position: fixed;
  bottom: 1rem;
  left: 2rem;
  width: 50%;
  color: #000;
}
.logininp {
  border: 0.07rem solid #ccc;
  padding: 7px 0px;
  border-radius: 0.1rem;
  padding-left: 0.08rem;
  font-size: 0.25rem;
  margin: 0.2rem;
  -webkit-box-shadow: inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
.logininp:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
.loginbtn {
  width: 3.3rem;
  height: 0.7rem;
  line-height: 0.7rem;
  color: bisque;
}
</style>




