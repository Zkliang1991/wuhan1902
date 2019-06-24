<template>
     <div>
        <Head title="登陆&注册" :show="true"></Head>
        <van-tabs v-model="active">
            <van-tab title="登陆">
                <van-cell-group>
                <van-field
                    v-model="user.username"
                    required
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="请输入用户名"
                    @click-right-icon="$toast('随便登陆')"
                />

                <van-field
                    v-model="user.password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
                />
            </van-cell-group>
            <van-button type="primary" @click="loginAction">用户登陆</van-button>


            </van-tab>
            <van-tab title="注册">
                <van-cell-group>
                <van-field
                    v-model="users.username"
                    required
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="请输入用户名"
                    @click-right-icon="$toast('随便注册')"
                />

                <van-field
                    v-model="users.password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
                />

                <van-field
                    v-model="users.repwd"
                    type="password"
                    label="验证密码"
                    placeholder="请再次输入密码"
                    required
                />
                </van-cell-group>
                <van-button type="info" @click="registerActive">用户注册</van-button>

            </van-tab>
            
        </van-tabs>

    </div>
</template>


<script>
import { Toast } from 'vant';


export default {
    name:'login',
    data(){
        return {
            username:"",
            password:"",
            repwd:"",
            user:{},
            users:{},
            active:"注册",
        }
    },
    methods:{
        loginAction(){
            this.$axios.post("/vue/login",this.user)
            .then((res)=>{
                if(!!res.data.type){
                    Toast("登录成功")
                    sessionStorage.userInfo = JSON.stringify({token:res.data.token})
                    localStorage.username = res.data.username
                    this.$router.push({name:"my"})
                    
                }else{
                    sessionStorage.removeItem("userInfo")
                }
            })
        },
        registerActive(){
           
            if(this.users.password == this.users.repwd){
                this.$axios.post("/vue/register",this.users)
                .then((res)=>{
                    if(!!res.data.result.type){
                        this.active = ""
                    }
                    Toast(res.data.result.msg);
                })
            }else{
                Toast('密码不一致');
            }
           
    }
}}
</script>
