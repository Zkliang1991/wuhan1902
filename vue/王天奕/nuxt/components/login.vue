<template>
    

    <div>
      <van-cell-group>


      <van-field
        
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('中文,数字,字母8位以下')"
        v-model="login.username"
      />

      <van-field
        
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        right-icon="question-o"
        @click-right-icon="$toast('数字,字母6-12位')"
        v-model="login.password"
      />
    
      </van-cell-group>
      <p>
      <van-button slot="button" size="small" type="primary"  @click="loginAction">登录</van-button>
      </p>
    </div>
</template>

<script>
export default {
  
  data(){
    return{
      selected:"login",
            login:{},
            register:{}
    }
  },
    methods:{
        loginAction(){
            this.$axios.post("/login",this.login)
            .then(res=>{
                if(!!res.data.type){
                    //sessionStorage.userInfo = JSON.stringify({token:res.data.token});
                    this.$router.push({name:'home'});
                    localStorage.username=res.data.username
                }else{
                    console.log('登录失败')
                }
                console.log(res);
            })
        },
        
        
    }
}


</script>
<style scoped>
  p{
    text-align: center
  }
</style>

