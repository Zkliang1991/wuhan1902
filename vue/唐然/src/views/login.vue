<template>
    <div>

        <Head title="登录"></Head>
        <van-tabs v-model="active">
            <van-tab title="登录">
                <van-cell-group v-model="selected">
                    <van-field v-model="login.username" label="用户名" placeholder="请输入用户名" />
                    <van-field v-model="login.password" type="password" label="密码" placeholder="请输入密码" />
                    <van-button type="primary" size="large" round @click="loginTo">登录</van-button>
                </van-cell-group>
            </van-tab>
            <van-tab title="注册">
                <van-cell-group v-model="selected">
                    <van-field v-model="register.username" label="用户名" placeholder="请输入用户名" required />
                    <van-field v-model="register.password" type="password" label="密码" placeholder="请输入密码" required />
                    <van-field v-model="register.pwd" type="password" label="确认密码" placeholder="请确认密码" required />
                    <van-button type="primary" size="large" round @click="registerTo">注册</van-button>
                </van-cell-group>
            </van-tab>
        </van-tabs>

    </div>

</template>
<script>
    export default {
        name: 'login',
        data() {
            return {
                selected: 'login',
                login: {},
                selected: 'register',
                register: {},
                active: 2
            }
        },
        methods: {
            loginTo() {
                this.$axios.post("/vue/login", this.login).then(res => {
                    console.log(res)
                    if (!!res.data.type) {
                        sessionStorage.userInfo = JSON.stringify({ token: res.data.token });
                        this.$router.push({ name: 'user' })
                    } else {
                        sessionStorage.removeItem('userInfo');
                    }
                })
            },
            registerTo() {
                this.$axios.post("/vue/register", this.register)
                    .then(res => {
                        console.log(res)
                        if (res.data.type == 1) {
                            this.$router.push({ path: '/shop/user' })
                        }
                    })
            }
        }
    }
</script>
<style scoped>
    .but {
        padding-top: 0.5rem;
    }
</style>