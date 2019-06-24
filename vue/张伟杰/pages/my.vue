<template>
    <div>

        <Head title="个人中心"></Head>

        <div v-if="isLogin">

            <uploadImg></uploadImg>
            <h4>欢迎,{{login.username}}大会员,已登录</h4>
        </div>

        <van-tabs v-model="active" v-if="status">
            <van-tab title="login">
                <van-cell-group>
                    <van-field v-model="login.username" required clearable label="用户名" right-icon="question-o"
                        placeholder="请输入用户名" @click-right-icon="$toast('question')" />

                    <van-field v-model="login.password" type="password" label="密码" placeholder="请输入密码" required />
                    <div class="aDiv">
                        <van-button type="primary" @click="gotoLogin">登录</van-button>
                    </div>

                </van-cell-group>
            </van-tab>
            <van-tab title="register">
                <van-cell-group>
                    <van-field v-model="register.username" required clearable label="用户名" right-icon="question-o"
                        placeholder="请输入用户名" @click-right-icon="$toast('question')" />

                    <van-field v-model="register.password" type="password" label="密码" placeholder="请输入密码" required />
                    <van-field v-model="register.dbpwd" type="password" label="请确认密码" placeholder="" required />
                    <div class="aDiv">
                        <van-button type="primary" @click="gotoRegister">注册</van-button>
                    </div>



                </van-cell-group>
            </van-tab>

        </van-tabs>


        <Foot></Foot>
    </div>
</template>


<script>
    import store from "~/store";
    import { Toast } from 'vant';
    import uploadImg from "~/components/uploadImg.vue"

    export default {
        name: "my",

        data() {
            return {


                active: 1,

                login: {},
                register: {},
                show: false,
                isLogin: false,
                status: true


            }
        },

        components: {
            uploadImg
        },

        methods: {

            //注册的后台提交
            gotoRegister() {

                console.log(this.register);
                //post请求，this.register必须是对象
                this.$axios.post("/api/register", this.register).then(res => {

                    console.log(res);
                })

                Toast('注册成功');



            },

            //登录的post提交后台
            gotoLogin() {
                console.log(this.login);
                this.$axios.post("/api/login", this.login).then(res => {
                    console.log(res);
                    if (!!res.data.type) {

                        sessionStorage.userInfo = JSON.stringify({ token: res.data.token });

                        Toast('登录成功');

                        this.isLogin = true;

                        this.status = false;

                        // this.$router.push({ name: "home" });

                    } else {
                        sessionStorage.removeItem('userInfo')
                    }

                })
            }
        }
    }
</script>

<style>
    .aDiv,
    .van-button {
        width: 100%;
        /* margin: 20px auto;
        width: 130px; */
    }
</style>