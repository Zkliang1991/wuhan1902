<template>
    <div class="log">    
        <div class="van-skeleton__avatar--round">
            <img src="@/assets/images/pic.jpg" alt="">
        </div>
        <van-cell-group>
            <van-field v-model="register.username" placeholder="请输入用户名" label="用户名" left-icon="contact" icon="question" />
        </van-cell-group>
        <van-cell-group class="password">
            <van-field v-model="register.password" placeholder="请输入密码" label="密 码" left-icon="bag-o" icon="question" />
        </van-cell-group>
        <van-cell-group class="dbpassword">
            <van-field  placeholder="请确认密码" label="确认密码" left-icon="bag-o" icon="question" />
        </van-cell-group>
        <van-button round type="danger" @click="registers" class="btn2">注册</van-button>
    </div>
</template>


<script>
    import { mapState, mapActions } from "vuex"
    export default {
        name: 'register',
        computed: {
            register: {
                get() {
                    return this.$store.state.register
                },
                set(val) {
                    this.$store.commit("getregister", val)

                }
            }

        },
        methods: {
            ...mapActions(['registers']),
            
            gohome(){
                this.$router.push({name:'login'})
            }
        }




    }
</script>
<style scoped>
    .log {
        background: url(../assets/images/login.jpg);
        background-size: 100% 100%;
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
        left: 0;
        top: 1.2rem;
    }

    .dbpassword {
        top: 2.5rem;

    }

    .btn2 {
        position: absolute;
        left: 0.9rem;
        top: 13rem;
        border-radius: 0.36rem;
        width: 6rem;
    }
    .gohome{
        position: fixed;
        left: 0;
        bottom: 0;
    }
</style>