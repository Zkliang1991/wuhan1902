<template>
    <div class="log">

        <van-tabs v-model="active"  >
            <van-tab title="登录">
                <div class="van-skeleton__avatar--round">
                    <img :src="pic" alt="">
                </div>
                <van-cell-group>
                    <van-field v-model="login.username" placeholder="请输入用户名" label="用户名" left-icon="contact"
                        icon="question" />
                </van-cell-group>
                <van-cell-group class="password">
                    <van-field v-model="login.password" placeholder="请输入密码" label="密 码" left-icon="bag-o"
                        icon="question" />
                </van-cell-group>
                <van-button type="primary" size="large" @click="logins" class="btn1">登录</van-button>
                <!-- <van-button round type="danger" @click="register" class="btn2">注册</van-button> -->

            </van-tab>
            <van-tab title="注册">
                    <register></register>

            </van-tab>
        </van-tabs>
        <br>


        <!-- <van-row type="flex" justify="center">
            <van-col span="12" tag="input">span: 6</van-col>
           
        </van-row> -->
    </div>
</template>


<script>
    import register from "@/views/register.vue"
    import { mapState, mapActions } from "vuex"
    export default {
        name: 'login',
        components:{
            register
        },
        data() {
            return {
                active: '登录',
                pic:'',
            }
        },
        computed: {
            ...mapState(['imgs']),
            login: {
                get() {
                    return this.$store.state.login
                },
                set(val) {
                    this.$store.commit("getlogin", val)

                }
            }
        },
        methods: {
            ...mapActions(['logins']),
            register() {
                this.$router.push({ name: 'register' })
            }
        },
        mounted(){
            if(localStorage.imgs){
                this.pic=localStorage.imgs
            }else{
                this.pic=this.imgs
            }
           
        }




    }
</script>
<style scoped>
    .log {
        background: url(../assets/images/login.jpg) no-repeat;
        background-size: 100% 100%;
        min-height: 100%;
    }

    .LandR {
        /* margin-top: 0.8rem; */
    }

    .van-skeleton__avatar--round {
        position: absolute;
        left: 2.3rem;
        top: 4.2rem;
        width: 2.3rem;
        height: 2.3rem;

    }

    .van-skeleton__avatar--round>img {
        display: inline;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid #ccc
    }

    .van-skeleton__title,
    .van-skeleton__content {
        display: none;
    }

    .van-cell {
        position: absolute;
        left: 0.9rem;
        top: 7.6rem;
        border-radius: 0.36rem;
        width: 6rem;
        background: rgba(250, 250, 250, 0.6);
    }

    .password {
        left: 0px;
        top: 1.4rem;
    }

    .btn1 {
        position: absolute;
        left: 0.9rem;
        top: 12rem;
        border-radius: 0.36rem;
        width: 6rem;
    }

    /* .btn2 {
        position: absolute;
        left: 0.9rem;
        top: 12.5rem;
        border-radius: 0.36rem;
        width: 6rem;
    } */
</style>