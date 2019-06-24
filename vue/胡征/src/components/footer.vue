<template>
    <van-tabbar v-model="active">
        <van-tabbar-item name="home" icon="home-o" :to="{name:'home'}">首页</van-tabbar-item>
        <van-tabbar-item name="about" icon="search" :to="{name:'about'}">商品列表</van-tabbar-item>
        <van-tabbar-item name="licai" icon="friends-o" :to="{name:'licai'}">购物车</van-tabbar-item>
        <van-tabbar-item name="daikuan" icon="setting-o" :to="{name:'daikuan'}">贷款</van-tabbar-item>
        <van-tabbar-item name="shenghuo" icon="coupon-o" :to="{name:'shenghuo'}">个人中西</van-tabbar-item>
    </van-tabbar>
</template>
<script>
    import { bus } from "@/utils/bus.js"
    export default {
        components: {
        },
        data() {
            return {
                active: 0,
                arr: [{ name: "home" }, { name: "about" }, { name: "licai" }, { name: "daikuan" }, { name: "shenghuo" }]
            }
        },
        mounted() {
            this.active = this.arr.findIndex(val => val.name == this.$route.name)
            console.log(this.$route.name)
            bus.$on("changeActive", name => {
                console.log(name)
                this.active = this.arr.findIndex(val => val.name == name)
            })
        },
    }




</script>
<style lang='scss' scoped>
    .van-tabbar--fixed {
        z-index: 999 !important;
        background-color: #000;
        color: #fff3
    }

    .van-tabbar-item--active {
        color: #fff;
        background-color: #333;
    }
</style>