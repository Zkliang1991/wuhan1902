<template>
    <div>
            <Head msg="请登录">商品列表</Head>
        <div class="img"><img :src="img" alt=""></div>
        <van-cell-group>
            <van-field v-model="login.username" required clearable label="用户名" right-icon="question-o"
                placeholder="请输入用户名" @click-right-icon="$toast('question')" />

            <van-field v-model="login.password" type="password" label="密码" placeholder="请输入密码" required />
        </van-cell-group>
        <van-button type="primary" size="large" @click="login1">点击登录</van-button>
        <div class="register">
                <router-link :to="{name:'register'}"><van-button round type="danger" class="right">点击注册</van-button></router-link>
                <van-button round type="danger" class="right" @click="$router.push({name:'changePwd'})">修改密码</van-button>
                <van-button round type="danger" >问题反馈</van-button>
        </div>
    </div>
</template>
<script>
    import { Dialog } from 'vant';
    import {mapMutations} from 'vuex'
    export default {
        data() {
            return {
                login: {},
                img:require('@/assets/6.jpg')
            }
        },
        methods: {

        //    ...mapMutations(['tupian']),
            login1() {
                if (this.login.username) {
                    Dialog.alert({
                        title: '错误',
                        message: '请输入用户名'
                    })
                    if (this.login.password) {
                        Dialog.close();
                        this.$axios.post('/vue/login', this.login).then(res => {
                            console.log(res.data)
                            if (!!res.data.type) {
                                console.log(res)
                                localStorage.img=res.data.result.avatar.replace(/public/,"")
                                // this.tupian(img)
                                sessionStorage.username=res.data.a;
                                sessionStorage.userInfo=JSON.stringify({token:res.data.token})

                                Dialog.confirm({
                                    title: '用户名密码正确',
                                    message: '点击确定跳转首页'
                                }).then(() => {
                                    // on confirm
                                   this.$router.push({name:'home'})
                                }).catch(() => {
                                    // on cancel
                                    console.log(2)
                                });

                            } else {
                                Dialog.alert({
                                    title: '登录失败',
                                    message: '请检查用户名和密码,或者点击下方注册惊醒注册'
                                })
                            }

                        })


                    } else {
                        Dialog.alert({
                            title: '错误',
                            message: '请输入密码'
                        })
                    }
                } else {
                    Dialog.alert({
                        title: '错误',
                        message: '请输入用户名'
                    })
                }
            }
        }
    }
</script>
<style lang="scss" scoped> 
.register{
    margin-top: 0.3rem;
    padding: 0 0.3rem;
    .right{
        margin-right: 0.6rem;
    }
}
    .img{
        width: 3rem;
        height: 3rem;
        
        margin-left: 2rem;
        margin-bottom: 0.3rem;
        >img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
</style>