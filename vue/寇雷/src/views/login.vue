<template>
  <div>
    <Head  title="欢迎" back="返回" left="1" hide="true"></Head>
    <div style="margin-top:50px">
        <div id="swiper">

        </div>
        <van-tabs v-model="$store.state.active1" animated>
        <van-tab title="登录">
            <van-cell-group  class="lr">
            <van-field v-model="login.username"  clearable label="用户名" type="text" placeholder="请输入账号" />
            <van-field v-model="login.password" type="password" label="密码" placeholder="请输入密码" />
            <van-button type="primary" size="large" @click="loginAction">登录</van-button>
            </van-cell-group>
        </van-tab>
        <van-tab title="注册">
            <van-cell-group  class="lr">
            <van-field v-model="register.username"  clearable label="用户名" placeholder="请输入账号"  required/>
            <van-field v-model="register.password" type="password" label="密码" placeholder="请输入密码" required/>
            <van-field v-model="register.dbpwd" type="password" label="确认密码" placeholder="请重新输入密码"  required/>
            <van-button type="info" size="large" @click="regAction">注册</van-button>
            </van-cell-group>
        </van-tab>
        </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
    name:"login",
    computed:{
        login(){
            return  this.$store.state.login
        },
        register(){
            return  this.$store.state.register
        }
    },
    methods:{
      loginAction(){
        this.$store.dispatch("loginAction")
      },
      regAction(){
        this.$store.dispatch("regAction")
      }
    },
}
</script>

<style lang="scss" scoped>
.lr{
    width: 100%;
    box-sizing: border-box;
    padding:0 20px;
}
</style>
