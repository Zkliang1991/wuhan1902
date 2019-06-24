<template>
    <div>
            <Head msg="注册页面">商品列表</Head>
        <van-cell-group>
            <van-field v-model="register.username" label="用户名" placeholder="请输入用户名"  :error-message="a"/>
            <van-field v-model="register.password" label="密码" placeholder="请输入密码"  :error-message="b"/>
            <van-field v-model="register.passwordEnter" label="确认密码" placeholder="请输入密码" :error-message="c"/>
        </van-cell-group>
        <van-button type="warning" size="large" @click="registerNow">立即注册</van-button>
    </div>
</template>
<script>
    import { Dialog } from 'vant';
    export default {
        data() {
            return {
                register: {},
                a:"",
                b:"",
                c:""
            }
        },
        methods:{
            registerNow(){
                if(this.register.username){
                    if(this.register.password){
                        if(this.register.passwordEnter){
                            if(this.register.passwordEnter===this.register.password){
                                this.$axios.post('/vue/register',this.register).then(res=>{
                                    this.$router.push({name:"login"})
                                })
                            }else{
                                Dialog.alert({
                                    title: '注册失败',
                                    message: '密码输入不一致'
                                })
                            }
                        }else{
                            this.c="请输入用密码"
                        }
                    }else{
                        this.b="请输入用密码" 
                    }
                }else{
                    this.a="请输入用户名"
                }
            }
        }
    }
</script>