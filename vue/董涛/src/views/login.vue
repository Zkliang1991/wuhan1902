<template>
    <div>
        <Head title="登录" :show="true"></Head>
        <van-cell-group>
            <van-field
                v-model="loginInfo.username"
                required
                clearable
                label="用户名"
                right-icon="question-o"
                placeholder="请输入用户名"
                @click-right-icon="$toast('请输入4到10位用户名')"
                @blur="loginName"
                :error-message="loginNameMsg"
            />

            <van-field
                v-model="loginInfo.pwd"
                type="password"
                label="密码"
                right-icon="question-o"
                placeholder="请输入密码"
                @click-right-icon="$toast('请输入6到10位密码')"
                required
                @blur="loginPwd"
                :error-message="loginPwdMsg"
            />
        </van-cell-group>

        <van-button type="danger" size="large" @click="login">登陆</van-button>
        <p><a @click="gotoRegister">没有账户?立即注册</a></p>
    </div>
</template>


<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            loginInfo:{},
            loginNameMsg:"",
            loginPwdMsg:"",

            loginNameFlag:false,
            loginPwdFlag:false,
        }
    },
    methods:{
        loginName(){
            if(this.loginInfo.username){
                this.loginNameFlag=true;
                this.loginNameMsg="";
            }else{
                this.loginNameMsg = "用户名不存在";
                this.loginNameFlag=false;
            }
        },
        loginPwd(){
            if(this.loginInfo.pwd){
                this.loginPwdFlag=true;
                this.loginPwdMsg="";
            }else{
                this.loginPwdMsg = "密码不存在";
                this.loginPwdFlag=false;
            }
        },
        login(){
            console.log(this.loginInfo)
            if(this.loginNameFlag==true && this.loginPwdFlag==true){
                // Toast.success('登录成功');
                this.$axios.post("/vue/login",this.loginInfo)
                .then(res=>{
                    console.log(res);
                    if(!!res.data.type){
                        sessionStorage.userInfo = JSON.stringify({token:res.data.token});
                        this.$router.push({name:'my'});
                        sessionStorage.username = this.loginInfo.username;
                    }else{
                        sessionStorage.removeItem('userInfo');
                    }
                })
            }
        },
        gotoRegister(){
            this.$router.push({name:'register'})
        }
    }

}
</script>


<style lang="scss" scoped>
.van-cell-group{
    padding-top: 50px;
    padding-bottom: 50px;
}
.van-cell {
    border: 1px solid #ccc;
    border-radius: 25px;
    margin: 20px 0;
    line-height: 30px;
}
p{
    text-align: center;
    margin: 20px 0;
    text-decoration: underline;
}
p a:hover{
    color: red;
}
.main-box{
    background: #fff;
}
</style>
