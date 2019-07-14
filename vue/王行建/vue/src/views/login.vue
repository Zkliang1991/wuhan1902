<template>
  <div>
    <Head title="登录与注册"></Head>
    <van-tabs v-model="active" class="loginBox">
      <van-tab title="登录">
        <van-cell-group>
          <van-field
            v-model="login.username"
            required
            clearable
            label="用户名"
            placeholder="请输入用户名"
            right-icon="question-o"
            @click-right-icon="$toast('用户名在6-12位,包含字母数字')"
          />
          <van-field
            v-model="login.password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />
          <van-button round type="primary" size="large" @click="gotoLogin">登录</van-button>
        </van-cell-group>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field
            v-model="register.username"
            required
            clearable
            label="用户名"
            placeholder="请输入用户名"
            right-icon="question-o"
            @click-right-icon="$toast('用户名在6-12位,包含字母数字')"
          />
          <van-field
            v-model="register.password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />
          <van-field
            v-model="register.repwd"
            type="password"
            label="确认密码"
            placeholder="请输入密码"
            required
          />
          <van-button round type="danger" size="large" @click="gotoRegister">注册</van-button>
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Notify } from "vant";
export default {
  name: "login",
  data() {
    return {
      login: {},
      register: {},
      active: 0
    };
  },
  methods: {
    //登录
    gotoLogin() {
      this.$axios.post("/vue/login", this.login).then(res => {
        console.log(res);
        if (!!res.data.type) {
          Notify({
            message: res.data.msg,
            duration: 1000,
            background: "#1989fa"
          });
          sessionStorage.userInfo = JSON.stringify({ token: res.data.token });
          this.$router.push({ name: "home" });
        } else {
          Notify({
            message: res.data.msg,
            duration: 1000,
            background: "#f00"
          });
          this.login = "";
          sessionStorage.removeItem("userInfo");
        }
      });
    },
    //注册
    gotoRegister() {
      this.$axios.post("/vue/register", this.register).then(res => {
        if (res.data.type == "0") {
          Notify({
            message: res.data.msg,
            duration: 1000,
            background: "#f00"
          });
          this.active = 0;
        } else {
          Notify({
            message: res.data.msg,
            duration: 1000,
            background: "#1989fa"
          });
          this.active = 0;
        }
      });
    }
  }
};
</script>
<style scoped>
.loginBox {
  margin-top: 0.7rem;
}
</style>
