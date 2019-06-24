<template>
    <div>

        <div class="user" v-if="isLogin">
            <div class="header">
                <div class="header-img">
                    <img src="" alt="">
                </div>
                <div class="header-name" style="width: 100%">
                    <span style=" float: left">154548787</span>
                    <van-button size="mini" round @click="logout"
                        style="float: right;  background-color: #f37d0f;color: #fff;">注销
                    </van-button>
                </div>
            </div>
            <router-link class="order" to="">
                <div class="my-order">我的订单</div>
                <div class="all-order">全部订单</div>
            </router-link>
            <ul class="state">
                <li>
                    <i class="iconfont icon-gouwuche1"></i>
                    <span>待付款</span>
                </li>
                <li>
                    <i class="iconfont icon-wodeyouhuiquan"></i>
                    <span>优惠劵</span>
                </li>
                <li>
                    <i class="iconfont icon-collection_fill"></i>
                    <span>收藏</span>
                </li>
            </ul>
            <ul class="items">
                <li>
                    <i class="iconfont icon-jushoucang"></i>
                    <div class="items-info">会员中心</div>
                </li>
                <router-link to="" tag="li">
                    <i class="iconfont icon-shouhuodizhi"></i>
                    <div class="items-info">收货地址</div>
                </router-link>
            </ul>
            <ul class="items">
                <router-link to="" tag="li">
                    <i class="iconfont icon-wodeyouhuiquan"></i>
                    <div class="items-info">我的优惠</div>
                </router-link>
                <li>
                    <i class="iconfont icon-wodefankui"></i>
                    <div class="items-info">我的意见</div>
                </li>
            </ul>
            <ul class="items">
                <li>
                    <i class="iconfont icon-shijian"></i>
                    <div class="items-info">浏览记录</div>
                </li>
            </ul>
            <ul class="items">
                <li>
                    <i class="iconfont icon-erweima"></i>
                    <div class="items-info">我的名片</div>
                </li>
            </ul>
        </div>
        <div v-else>
            <van-button type="primary" size="large" @click="goTologin" class="box">立即登录</van-button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isLogin: sessionStorage.userInfo,
                name: ""
            }
        },

        methods: {
            goToregister() {
                this.$router.push({ name: "register" })
            },
            goTologin() {
                this.$router.push({ name: "login" })
            },
            logout() {
                sessionStorage.removeItem('userInfo')
                history.go(0);
            }
        }
    }
</script>
<style scoped>

</style>