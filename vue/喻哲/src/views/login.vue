
<template>
    <div id="wrap">
        <div id="login" >
            <div class="head">
                <headLogReg title="登陆"></headLogReg>
            </div>

            <div class="logo">
                <img src="../assets/images/black.jpg" alt="">
            </div>

            <div class="shuru">
                <input type="text" placeholder="用户名/邮箱/手机号" v-model="login.username" @input="checkLogin">
                <input type="password" placeholder="请输入密码" v-model="login.password">
            </div>
            <button class="btn" @click="tologin">登录</button>
            <div class="reg">
                <div>
                    <span>忘记密码？</span>
                    <span @click="goRegister">新用户注册</span>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import {Toast} from 'vant'
import { mapActions, mapMutations } from 'vuex';
export default {
    name:"login",
    data() {
        return {
            value:"",
            login:{},
        }
    },
    methods: {
        goRegister(){
            this.$router.push({name:"register"})
        },
        tologin(){
            const toast = Toast.loading({
                duration: 0,       // 持续展示 toast
                forbidClick: true, // 禁用背景点击
                loadingType: 'spinner',
                message:"加载中"
            });

            this.gotoLogin({
                url:"/vue/login",
                login:this.login,
                cb:(res=>{
                    sessionStorage.userInfo = JSON.stringify({token:res.data.token});
                    console.log(res)
                    if(!!res.data.type){
                        this.$router.push({name:"mine"})
                    } 
                }),
            });

            
        },
        ...mapActions(['gotoLogin']),

        checkLogin(){
            // var reg = /^\w{6,20}$/ ; 
            // if(reg.test(this.login.username)){
            //     console.log(111)
            // }else{

            // }
        }
    },
    mounted() {
        // console.log(this.$route)
        // this.$nextTick().then(()=>{

        // })
        
    },
}
</script>

<style lang="scss" scoped>
#wrap{
    width: 100%;
    height: 100%;
    background-color: #fff;
}
.login{
    width: 100%;
    height: 100%;
}
// .head{
//     color: #747474;
// }
.van-nav-bar{
    background-color:transparent;
}
.btn{
    width: 6.5rem;
    height: .65rem;
    border-radius: .3rem;
    border: none;
    background-color: #000;
    color: #fff;
    font-size: .25rem;
    margin: .7rem 0 .4rem
}
.shuru{
    >input{
        border-left: none;
        border-top: none;
        border-right: none;
        border-bottom: .01rem solid #747474;
        width: 6rem;
        height: .7rem;
        margin: .2rem 0;
        font-size: .25rem;
        background-color: transparent;
    }
}
.reg{
    >div{
        display: flex;
        justify-content: space-between;
        padding: 0 .4rem;
        font-size: .25rem;
    }
}
</style>
