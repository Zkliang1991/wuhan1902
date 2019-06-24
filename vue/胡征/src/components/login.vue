<template>
    <div>

        <van-cell-group>
            <van-field v-model="arr.phone" required clearable label="手机号码" right-icon="question-o" placeholder="请输入手机号码"
                @click-right-icon="$toast('11位数字')" />
            <van-field v-model="arr.username" required clearable label="用户名" right-icon="question-o"
                placeholder="请输入用户名" @click-right-icon="$toast('非特殊字符和非汉字都可以')" />

            <van-field v-model="arr.password" type="password" label="密码" placeholder="请输入密码" required />
            <van-field v-model="arr.passwords" type="password" label="密码" placeholder="请确认密码" required />
        </van-cell-group>
        <van-button type="primary" size="large" @click="zhuce">注册</van-button>
        <van-button id="woyouzhanghao" type="primary" size="large" @click="denglu1">我有账号</van-button>
    </div>
</template>
<script>
    import { Dialog } from 'vant';
    import { bus } from "@/utils/bus.js"
    export default {
        data() {
            return {
                arr: {

                }
            }
        },
        methods: {
            zhuce() {
                this.$axios.post("/vue/register",
                    this.arr).then((res) => {
                        console.log(res)
                        if (!!res.data.type) {

                            Dialog.confirm({
                                title: '登陆成功',
                                message: '即将跳转首页'
                            }).then(() => {
                                bus.$emit("ajdfkl", 0)
                                this.arr = {}
                            }).catch(() => {
                                // on cancel
                            });
                        } else {
                            Dialog.alert({
                                message: '注册失败,账号已被注册'
                            }).then(() => {
                                // on close
                            });
                        }

                    })
            },
            denglu1() {
                bus.$emit("ajdfkl", 0)
                this.arr = {}
            }
        },
    }
</script>
<style lang="scss" scoped>
    #woyouzhanghao {
        background-color: #f66;
        border-color: #f66
    }
</style>