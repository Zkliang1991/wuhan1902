<template>
    <div class="shenghuo">
        <Header title="个人中心"></Header>
        <div class="att">
            <img :src='touxiang' alt="上传头像" @click="upload" class="tou">
            <van-button type="danger" class="aeio" @click="lise">注销</van-button>
            <input class="akjlk" type="file" ref="one" name="" id="" accept="image/*" @change="shangchuan">
            <span class="biaoti">欢迎用户：{{username}}：登录</span>
        </div>
        <div class="edx">

        </div>
        <div class="asdf">
            敬请期待：暂未开放
        </div>

    </div>
</template>
<script>
    import { mapState, mapActions, mapMutations } from "vuex"
    export default {
        data() {
            return {
                // touxiang: ""
                username: sessionStorage.usename
            }
        },
        computed: {
            ...mapState(['touxiang']),
        },
        mounted() {
            if (sessionStorage.touxiang) {
                this.xiugai1(sessionStorage.touxiang)

            } else {
                this.xiugai1(require('@/assets/img/a2.jpg'))
            }
            var a = sessionStorage.usename;
            if (a != "") {
            } else {
                this.username = "游客"
            }
        },
        methods: {
            ...mapActions(['tupianshagnc']),
            ...mapMutations(['xiugai1']),
            upload() {
                this.$refs.one.click();
            },
            shangchuan() {
                let file = this.$refs.one.files[0];
                let data = new FormData();
                data.append('avatar', file);
                this.tupianshagnc({
                    url: '/vue/upload',
                    method: 'POST',
                    contentType: false,
                    processData: false,
                    data: data
                })
            },
            lise() {
                sessionStorage.userInfo = ""
                sessionStorage.usename = ""
                sessionStorage.touxiang = ""
                sessionStorage.goods = ""
                this.$router.push({ name: 'login' })
            }

        },


    }
</script>
<style lang="scss" scoped>
    .shenghuo {
        padding-top: 46px;
    }

    .att {
        /* padding-top: 50px; */
        width: 100vw;
        height: 20vh;
        background-color: #6ff;
        padding-top: 20px;
        padding-left: 20px;
        position: relative;

        >img {

            width: 80px;
            height: 80px;
            border-radius: 50%
        }
    }

    .edx {
        height: 10px;
        background-color: #333;
    }

    .akjlk {
        display: none
    }




    .biaoti {
        font-size: 30px;
        font-weight: 900;
        color: crimson;
        display: inline;
        float: left;
    }

    .aeio {
        position: absolute;
        right: 10px;
        bottom: 10px;
    }


    .asdf {
        width: 100vw;
        background-color: #777;
        line-height: 300px;
        text-align: center;
        font-size: 40px
    }
</style>