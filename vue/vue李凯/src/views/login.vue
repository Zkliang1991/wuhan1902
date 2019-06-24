<template>
  <div class="login">
    <van-cell-group>
      <van-tabs v-model="active" @change="changeValue">
        <van-tab title="登录">
          <div slot="title">登录</div>
          <div>
            <van-field
              v-model="logUsername"
              required
              clearable
              label="用户名"
              right-icon="question-o"
              @click-right-icon="$toast('用户名格式为6-12的大小写字母')"
              placeholder="请输入用户名"
            />

            <van-field
              v-model="logPassword"
              type="password"
              label="密码"
              placeholder="请输入密码"
              required
              right-icon="question-o"
              @click-right-icon="$toast('密码格式为6-12大小写的字母和或数字')"
            />

            <van-button
              class="bigBtn"
              type="primary"
              size="large"
              :loading="loading"
              @click="login"
            >
              <i class="icon iconfont gg">&#xe709;</i> 用户登录
            </van-button>
          </div>
        </van-tab>

        <van-tab title="注册">
          <div slot="title">注册</div>
          <div>
            <van-field
              v-model="regUsername"
              required
              clearable
              label="用户名"
              right-icon="question-o"
              @click-right-icon="$toast('用户名格式为6-12的大小写字母')"
              placeholder="请输入用户名"
            />

            <van-field
              v-model="regPassword"
              type="password"
              label="密码"
              placeholder="请输入密码"
              required
              right-icon="question-o"
              @click-right-icon="$toast('密码格式为6-12大小写的字母和或数字')"
            />

            <van-field v-model="rePwd" type="password" label="确认密码" placeholder="请确认密码" required/>
            <van-button
              class="bigBtn"
              type="primary"
              size="large"
              :loading="loading"
              @click="register"
            >
              <i class="icon iconfont gg">&#xe709;</i> 用户注册
            </van-button>
          </div>
        </van-tab>
      </van-tabs>
    </van-cell-group>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      logUsername: "",
      logPassword: "",
      regUsername: "",
      regPassword: "",
      rePwd: "",
      loading: false,
      active: 0
    };
  },
  methods: {
    login() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      console.log(this.logUsername);
      console.log(this.logPassword);
      this.$axios
        .post("/lol/login", {
          data: {
            username: this.logUsername,
            password: this.logPassword
          }
        })
        .then(res => {
          console.log(res);
          if (!!res.data.type) {
            //  将 后端传来的token 存储到前端的 sessionStorage中
            sessionStorage.userInfo = JSON.stringify({ token: res.data.token });
            Toast({
              type: "success",
              message: res.data.msg,
              duration: 1000,
              onClose: () => {
                console.log("sssssssss");
                this.$router.push({ name: "home" });
              }
            });
          } else {
            Toast({
              type: "fail",
              message: res.data.msg,
              duration: 1000
            });
            console.log(true);
            sessionStorage.removeItem("userInfo");
          }
        });
    },
    register() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.active = 0;
      }, 2000);
      console.log(this.regUsername);
      console.log(this.regPassword);
      this.$axios
        .post("/lol/register", {
          data: {
            username: this.regUsername,
            password: this.regPassword,
            dbpwd: this.rePwd
          }
        })
        .then(res => {
          console.log(res);
          Toast({
            type: "success",
            message: res.data.msg,
            duration: 1000
          });
        });
    },
    changeValue() {
      this.logUsername = "";
      this.logPassword = "";
      this.regUsername = "";
      this.regPassword = "";
      this.rePwd = "";
    }
  },
  created() {
    let userInfo = window.sessionStorage.userInfo;
    // console.log("kk", userInfo);
    if (userInfo) {
      // this.$router.push({ name: "home" });
    }
  },
  mounted() {
    // let userInfo = window.sessionStorage.userInfo;
    //   // console.log("kk", userInfo);
    //   if (userInfo) {
    //   } else {
    //     this.$router.push({ name: "login" });
    //   }
  },
  updated() {
    // console.log(this.username);
    // console.log(this.password);
  }
};
</script>

<style lang="scss" scoped>
// <van-button class="bigBtn" type="primary" size="large">
//       <i class="icon iconfont gg">&#xe709;</i> 用户登录
//     </van-button>
// .van-button--large{
//   width: 65%;
//   height: 40px;
//   line-height: 40px;
//   color:#e6dc52;
//   font-weight: bolder;
// }

// .bigBtn{
//   position: absolute;
//   left: 0;
//   top: 85%;
// }

// .van-button__text .gg{
//   font-size: 19px;
//   color:#c7be3c;
// }
</style>
