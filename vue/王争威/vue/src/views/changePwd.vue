<template>
    <div>

        <Head msg="修改密码"></Head>
        <van-cell-group>
            <van-field v-model="change.username" label="用户名" placeholder="请输入用户名" :error-message="a" />
            <van-field v-model="change.password" label="密码" placeholder="请输入密码" :error-message="b" />
            <van-field v-model="change.passwordEnter" label="确认密码" placeholder="请输入密码" :error-message="c" />
            
        </van-cell-group>
        <van-button type="warning" size="large" @click="changePwd">点击修改</van-button>
    </div>
</template>
<script>
    import {Dialog} from "vant"
    export default {
        data() {
            return {
                a: "",
                b: "",
                c: "",
                change: {},
            }
        },
        methods: {
            changePwd() {
                // console.log(11)
                if(this.change.username){
                    if(this.change.password){
                        if(this.change.passwordEnter){
                            if(this.change.passwordEnter===this.change.password){
                                this.$axios.post('/vue/pwdchange',this.change).then(res=>{
                                    // this.$router.push({name:"login"})
                                    console.log(res)

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