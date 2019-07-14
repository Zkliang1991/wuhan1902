<template>
  <van-popup v-model="usershow" position="bottom" :overlay="false">
    <div class="item">
      <!-- 头部 -->
      <van-nav-bar>
        <div @click="back" slot="left">返回</div>
        <div slot="title">{{active ==0 ? '登录':'注册'}}</div>
      </van-nav-bar>
      <!-- 登录 -->
      <van-tabs v-model="active" animated class="users">
        <van-tab>
          <div v-show="false" slot="title">登录</div>
          <van-cell-group class="loginbox">
            <van-field
              placeholder="请输入手机号"
              v-model="login.username"
              label="用户名"
              left-icon="contact"
              :error-message="logerr.usererr"
              clearable
            />
            <van-field
              type="password"
              v-model="login.password"
              placeholder="请输入密码"
              label="密码"
              left-icon="edit"
              :error-message="logerr.usererr"
              clearable
            />
            <van-button @click="gologin" class="login" type="primary">登录</van-button>
            <van-row>
              <van-col class="downbtn" offset="14" span="10">
                <span @click="getActive(1)">还没有账号？立即注册</span>
              </van-col>
            </van-row>
          </van-cell-group>
        </van-tab>
        <!-- 注册 -->
        <van-tab>
          <div v-show="false" slot="title">注册</div>
          <van-cell-group>
            <van-field
              v-model="register.username"
              placeholder="请输入11位手机号码"
              label="用户名"
              left-icon="contact"
              :error-message="regerr.usererr"
              clearable
            />
            <van-field
              type="password"
              v-model="register.password"
              placeholder="请输入6~18位密码"
              label="密码"
              left-icon="edit"
              :error-message="regerr.pwderr"
              clearable
            />
            <van-field
              type="password"
              v-model="register.repeat"
              placeholder="请再次输入密码"
              label="重复密码"
              left-icon="edit"
              :error-message="regerr.reperr"
              clearable
            />
            <van-button @click="goreg" class="login" type="warning">注册</van-button>
            <van-row>
              <van-col class="downbtn" offset="15" span="9">
                <span @click="getActive(0)">已有账号？立即登录</span>
              </van-col>
            </van-row>
          </van-cell-group>
        </van-tab>
      </van-tabs>
    </div>
  </van-popup>
</template>
<script>
export default {
  name: "users",
  data() {
    return {
      login: {
        username: "",
        password: ""
      },
      logerr: {
        usererr: "",
        pwderr: ""
      },
      register: {
        username: "",
        password: "",
        repeat: ""
      },
      regerr: {
        usererr: "",
        pwderr: "",
        reperr: ""
      }
    };
  },
  computed: {
    // 登录注册显隐
    usershow: {
      get() {
        return this.$store.state.users.usershow;
      },
      set(val) {
        this.$store.state.users.usershow = val;
      }
    },
    // 切换选项卡
    active: {
      get() {
        return this.$store.state.users.active;
      },
      set(val) {
        this.$store.state.users.active = val;
      }
    }
  },
  methods: {
    // 点击返回
    back() {
      this.$store.commit("getUserShow", false);
      this.$store.commit("getReLoad", false);
      this.$nextTick(function() {
        this.$store.commit("getReLoad", true);
      });
    },
    // 点击切换选项
    getActive(val) {
      this.$store.commit("getUsersActive", val);
    },
    // 点击登录
    gologin() {
      var username = this.login.username;
      var password = this.login.password;
      var telStr = /^[1]([3-9])[0-9]{9}$/;
      if (telStr.test(username)) {
        this.logerr.usererr = "";
        if (password.length >= 6 && password.length <= 18) {
          this.logerr.pwderr = "";
          this.$store.dispatch("addLogAjax", {
            url: "/vue/login",
            log: this.login
          });
        } else {
          this.logerr.pwderr = "请输入6~18位长度的密码";
        }
      } else {
        this.logerr.usererr = "请输入正确的11位手机号码！";
      }
    },
    // 点击注册
    goreg() {
      var username = this.register.username;
      var password = this.register.password;
      var repeat = this.register.repeat;
      //   手机号正则
      var telStr = /^[1]([3-9])[0-9]{9}$/;
      if (telStr.test(username)) {
        this.regerr.usererr = "";
        // 密码
        if (password.length >= 6 && password.length <= 18) {
          this.regerr.pwderr = "";
          if (password === repeat) {
            this.regerr.reperr = "";
            this.$store.dispatch("addRegAjax", {
              url: "/vue/register",
              reg: this.register
            });
          } else {
            this.regerr.reperr = "密码输入错误！请重新输入！";
          }
        } else {
          this.regerr.pwderr = "请查看密码长度是否正确！";
        }
      } else {
        this.regerr.usererr = "请输入正确的手机号码！";
      }
    }
  }
};
</script>

<style>
.item {
  width: 100vw;
  height: 100vh;
}
.van-nav-bar__left,
.van-nav-bar__right,
.van-nav-bar__text {
  color: #1989fa;
  height: 8vh;
  line-height: 8vh;
}
.van-nav-bar__title {
  height: 8vh;
  line-height: 8vh;
}
.login {
  width: 100vw;
}
.users {
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: 0;
}
.downbtn {
  color: #1989fa;
  text-decoration: underline;
  padding-top: 1.3vh;
  font-size: 2vw;
}
</style>

