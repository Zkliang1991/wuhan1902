<template>
    <div>
        <van-cell-group>
            <van-field
                v-model="loginData.username"
                required
                clearable
                label="用户名"
                right-icon="question-o"
                placeholder="请输入用户名"
                @click-right-icon="$toast('请输入用户名')"
            />
            <van-field
                v-model="loginData.password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
            />
        </van-cell-group>
        <van-button size="large"  type="primary" @click = 'login'>登录</van-button>
        <div class = 'box' @click = "pushZhuce" style = "text-align:center;color:#999;line-heigth:24px;margin-top:20px">
            <span>快速注册 ></span>
        </div>
        
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data(){
        return {
            loginData:{}
        }
    },
    methods:{
        login(){
            this.$axios.post('/vue/login',this.loginData)
            .then(res=>{
                if(!!res.data.type){
                    sessionStorage.userInfo = JSON.stringify({token:res.data.token});
                    sessionStorage.nickname = JSON.stringify({nickname:res.data.nickname});
                    this.$router.push({name:'my'});
                     Toast({
                        message:'登录成功...',
                        duration:300
                    })
                }else{
                    sessionStorage.removeItem('userInfo');
                    Toast({
                        message:'用户名或密码不正确...',
                        duration:300
                    })
    }
            })
        },
        pushZhuce(){
            this.$router.push({name:'zhuce'});
        }
    }
}
</script>
