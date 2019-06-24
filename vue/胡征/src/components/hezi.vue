<template>
    <div class="box">
        <router-link to="longcaifu">
            <van-icon name="chat" />
            <div>龙财富</div>
        </router-link>
        <router-link to="longcaifu">
            <van-icon name="point-gift-o" />
            <div>转账</div>
        </router-link>
        <router-link to="longcaifu">
            <van-icon name="new-arrival-o" />
            <div>快贷</div>
        </router-link>
        <router-link to="{name:'longcaifu'}">
            <van-icon name="manager-o" />
            <div>龙支付</div>
        </router-link>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            };
        },

    }
</script>
<style lang="scss" scoped>
    .box {
        width: 100vw;
        /* height: 100vh; */
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        text-align: center;
        margin-top: 10px;
        color: aliceblue;

        a {
            margin-top: 8px;
            color: aliceblue;
        }
    }
</style>