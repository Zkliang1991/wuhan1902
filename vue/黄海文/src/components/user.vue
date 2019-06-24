<template>
  <div class="user">
    <!-- <input class="zhuceinp" type="text" v-model="zhuce.username" placeholder="请输入用户名">
    <input class="zhuceinp" type="password" v-model="zhuce.password" placeholder="请输入密码">-->
    <p>
      用户名
      <input class="userinp" type="text" v-model="user.username" placeholder="请输入用户名">
    </p>
    <p>
      密码&ensp;&ensp;
      <input
        class="userinp"
        type="password"
        v-model="user.password"
        placeholder="请输入密码"
      >
    </p>
    <p>
      确认密码
      <input class="userinp" type="password" v-model="user.pwd" placeholder="请输入用户名">
    </p>
    <van-button class="userbtn" type="primary" @click="userzhuce">注册</van-button>
    <van-button class="userbtn" type="danger" @click="gologin">已有账户前去登陆</van-button>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "user",
  computed: {
    ...mapState(["user"])
  },
  methods: {
    gologin() {
      this.$router.push({ name: "login" });
    },
    ...mapActions(["userzhuce"])
  }
};
</script>
<style lang="postcss" scoped>
.userinp {
  border: 0.07rem solid #ccc;
  padding: 0.12rem 0.12rem;
  border-radius: 0.1rem;
  padding-left: 0.08rem;
  font-size: 0.25rem;
  margin: 0.25rem 0.2rem;
  -webkit-box-shadow: inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
.userinp:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
.userbtn {
  margin-bottom: 0.2rem;
  width: 5rem;
  height: 0.7rem;
  line-height: 0.7rem;
  color: bisque;
}
.user {
  margin-top: 1rem;
  color: #000;
}
</style>


