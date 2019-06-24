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
        label=" 密 码"
        placeholder="请输入密码"
        required
        right-icon="question-o"
        @click-right-icon="$toast('数字,字母6-12位')"
        v-model="login.password"
      />
      <van-field
        
        type="password"
        label="确认密码"
        placeholder="请输入密码"
        required
        right-icon="question-o"
        @click-right-icon="$toast('数字,字母6-12位')"
        
      />
    
      </van-cell-group>
      <p>
      <van-button slot="button" size="small" type="primary"  @click="goZuche">注册</van-button>
      </p>
    </div>
</template>

<script>
import {Toast} from"vant"
export default {
  
  data(){
    return{
     
      selected:"login",
            login:{},
            register:{}
    }
  },
    methods:{
        
        goZuche(){
             this.$axios.post("/zuche",this.login)
            .then(res=>{
                console.log(res);
                if(!!res.data.result.type){
                    //sessionStorage.userInfo = JSON.stringify({token:res.data.token});
                    //this.$router.push({name:'login'});

                    Toast('注册成功请登录') 
                }else{
                  Toast(res.data.result.msg)
                    sessionStorage.removeItem('userInfo');
                }
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
