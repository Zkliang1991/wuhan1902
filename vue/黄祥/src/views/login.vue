<template>
  <div>
    <Head2 title2="登录" :lico="lico" :rico="rico"></Head2>
    <van-tabs :active="active" background="#FFFDE4">
      <van-tab title="登录">
        <van-cell-group>
          <van-field
            v-model="login.username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
          />

          <van-field
            v-model="login.password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />
        </van-cell-group>
        <van-button type="danger" round size="large" @click="loginto">立即登录</van-button>
      </van-tab>


      <van-tab title="注册">
        <van-cell-group>
          <van-field id="ru"
            v-model="registe.username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
          />

          <van-field id="rp"
            v-model="registe.password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />
          <van-field id="rdp"
            v-model="registe.dbpassword"
            type="password"
            label="确认密码"
            placeholder="请再次输入密码"
            required
          />
        </van-cell-group>
        <van-button type="primary" round size="large" @click="registeto">注册</van-button>
      </van-tab>

    </van-tabs>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"

export default {
  name: "login",
  data() {
    return {
      login: {},
      registe: {},
      lico:"&#xe669;",
      rico:"",
    };
  },
  computed:{
    ...mapState([
      "active"
    ]),
    ...mapActions([
      'tologin',
      'toregiste'
    ]),
  },
  methods:{
    loginto(){
      this.$axios.post("/vue/login",this.login).then(res=>{
        console.log(res)
        if(!!res.data.type){
          sessionStorage.userInfo = JSON.stringify({token:res.data.token});
          this.$router.push({name:'home'})
        }else{
          sessionStorage.removeItem('userInfo');
          // this.$router.push({name:'login'})
          console.log(res)
        }
      })
    },
    registeto(){
      this.$axios.post("/vue/registe",this.registe).then(res=>{
        if(!!res.data.type){
          setTimeout((
            location.reload() 
          ),800)
        }else{
          ru.value = "";
          rp.value = "";
          rdp.value = "";
        }
      })
    }
  },
};
</script>

<style lang="scss" scoped>

</style>

