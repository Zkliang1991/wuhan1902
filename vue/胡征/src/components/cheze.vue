<template>
    <div>
        <van-cell-group>
            <van-field v-model="arr.username" required clearable label="用户名" right-icon="question-o"
                placeholder="请输入用户名" @click-right-icon="$toast('question')" />

            <van-field v-model="arr.password" type="password" label="密码" placeholder="请输入密码" required />
        </van-cell-group>
        <van-button type="primary" @click="login">登录
        </van-button>
        <van-button type="primary" @click="zhuced">注册</van-button>
        <van-button type="primary" @click="asdef">返回主页</van-button>
    </div>
</template>
<script>
    import { Dialog } from 'vant';
    // Dialog({ message: '提示' });
    import { mapState, mapActions } from "vuex"
    import { bus } from "@/utils/bus.js"
    export default {
        data() {
            return {
                arr: {}
            }
        },
        methods: {
            ...mapActions(['zhucel']),
            login() {
                this.zhucel({
                    url: '/vue/login', data: this.arr, cb: (res) => {
                        console.log(111)
                        if (!!res.data.type) {
                            console.log(res)
                            Dialog.confirm({
                                title: '登陆成功',
                                message: '即将跳转首页'
                            }).then(() => {
                                this.arr = {}
                                this.$router.push({ name: 'home' })
                                sessionStorage.userInfo = JSON.stringify(res.data.token)
                            }).catch(() => {
                                // on cancel
                            });

                        }

                    }
                })
            },
            zhuced() {
                bus.$emit("ajdfkl", 1)
                this.arr = {}
            },
            asdef() {
                this.$router.push({ name: 'home' })
            }

        },

        // computed: {
        //     ...mapState(['flg'])
        // }
    }
</script>