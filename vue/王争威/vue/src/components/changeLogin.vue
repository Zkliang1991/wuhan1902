<template>
    <div>

        <div class="parent">
            <div class="div">
                <img :src="img" alt="">
                <slot></slot>
            </div>
             <div class="change">
            <h2 v-if="flag">当前未登录 <router-link :to="{name:'login'}">请登录</router-link>
            </h2>
            <h2 v-else>欢迎您<span>{{username}}</span></h2>
            <router-link :to="{name:'login'}">切换账号</router-link>
        </div>
        </div>


       

    </div>
</template>
<script>
    export default {
        props: ['img'],
        data() {
            return {
                username: "",
                flag: true,
            }
        },
        mounted() {
            var username = sessionStorage.username || "";
            if (username) {
                this.username = username;
                this.flag = false;
            }
            // console.log(username)
        },
        methods: {

        }
    }
</script>
<style scoped lang="scss">
    .change {
        padding: 0 0.3rem;
    }
    .parent{
          background-color: orange;
    }
    .div {
        display: flex;
        
        
        padding: 0.2rem 0.2rem 0 0.2rem;

        /* justify-content: space-between; */
        >img {
            height: 1rem;
            width: 1rem;
            border-radius: 50%;
        }

        >.van {
            margin-left: 0.3rem;
            margin-top: 0.5rem;
        }
    }

    h2>span {
        color: fuchsia;
        font-size: 0.5rem;
        margin-left: 0.3rem;
    }
</style>