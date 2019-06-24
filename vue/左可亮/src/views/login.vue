<template>
    <div>
        <Head title="登录&注册" :show="true" ></Head>
        <mt-navbar v-model="selected">
                <mt-tab-item id="login">登录</mt-tab-item>
                <mt-tab-item id="register">注册</mt-tab-item>
        </mt-navbar>
        <div >
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="login">
                    <mt-field label="用户名" placeholder="请输入用户名" type="text" v-model="login.username"></mt-field>
                    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="login.password"></mt-field>
                    <mt-button type="primary" size="large" icon="login" @click="loginAction" >登录</mt-button>
                </mt-tab-container-item>
                <mt-tab-container-item id="register">
                    <mt-field label="用户名" placeholder="请输入用户名" type="text" v-model="register.username"></mt-field>
                    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="register.password"></mt-field>
                    <mt-field label="确认密码" placeholder="请输入确认密码" type="password" v-model="register.dbpwd"></mt-field>
                    <mt-button type="danger" size="large" icon="login" >马上注册</mt-button>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return {
            selected:"login",
            login:{},
            register:{}
        }
    },
    methods:{
        loginAction(){
            this.$axios.post("/vue/login",this.login)
            .then(res=>{
                console.log(res);
                if(!!res.data.type){
                    sessionStorage.userInfo = JSON.stringify({token:res.data.token});
                    this.$router.push({name:'my'});
                }else{
                    sessionStorage.removeItem('userInfo');
                }
            })
        }
    }
}
</script>

<style scoped>
.l-box{
    width:100%;
    box-sizing: border-box;
    padding:0 10px;
}
</style>
