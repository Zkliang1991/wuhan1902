<template>
    <div class="login-register">
        <h2>登录--login</h2>
        <Head title="登录&注册" :show="true"></Head>

        <h2>1</h2>
        <br>

        <img class="img" src="@/assets/images/login.jpg" width="200" alt="">
        <van-tabs color="#1A6BE6" type="card" @click="onClick">
            <van-tab title="登录" id="login">
                <van-cell-group>
                <van-field
                    v-model="login.username"           
                    clearable
                    label="用户名"
                    placeholder="请输入用户名/手机号"
                    
                />
                <van-field
                    v-model="login.password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                   
                />
                </van-cell-group>
                <van-button type="info" size="large" @click="loginAction">登录</van-button>

            </van-tab>

            <van-tab title="注册">
                <van-cell-group>
                <van-field
                    v-model="register.username"
                     
                    label="手机号/昵称"
                    placeholder="请输入手机号/昵称"
                    error-message=""
                />
                <!-- error-message -->
                <van-field
                    v-model="register.sms"
                    center
                    clearable
                    label="短信验证码"
                    placeholder="请输入短信验证码"
                >
                <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                </van-field>

                 <van-field
                    v-model="register.password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                />         
                <van-field v-model="register.value" label="邀请码" placeholder="邀请码(选填)" />
                </van-cell-group>

                <van-button type="info" size="large" @click="registerAction">注册</van-button>

            </van-tab>
        </van-tabs>

        
    </div>
</template>


<script>
export default {
    name:"login",
    data(){
        return{
            login:{},
            register:{},
            
        }
    },
    methods: {
        onClick(index, title) {
            // console.log(title);
            // this.$toast(title);
        },
        loginAction(){
            // data=this.login
            this.$axios.post("/vue/login",this.login)
            .then(res=>{
                console.log(res);
                if(!!res.data.type){
                    sessionStorage.username=res.data.token;
                        // key:username    value:   69b2a4333c63471d56adcd66236892df
                    // sessionStorage.userInfo = JSON.stringify({token:res.data.token});
                        // key: userInfo    value:  {"token":"69b2a4333c63471d56adcd66236892df"}
                    //登陆跳转
                    this.$router.push({name:'my'});
                }else{
                    sessionStorage.removeItem('username');
                }
            })
        },
        registerAction(){
            // data=this.register
            this.$axios.post("/vue/register",this.register)
            .then(res=>{
                console.log(res);
                this.$toast.success({
                    message:"注册成功",//成功信息
                    duration:400
                });
                
            })
        }

    }
}
</script>


<style scoped>

.login-register{
    text-align: center;
    background-color: #fff;
    height:100%;
    padding:0 20px;
}
.img{
    display: inline-block;
    margin:20px 0;
}
</style>
