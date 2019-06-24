<template>

    <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item> <img src="@/assets/img/a2.jpg" alt=""></van-swipe-item>
        <van-swipe-item> <img src="@/assets/img/a3.png" alt=""></van-swipe-item>
        <van-swipe-item><img src="@/assets/img/a4.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="@/assets/img/a5.jpg" alt=""></van-swipe-item>
    </van-swipe>
</template>
<script>
    export default {

    }
</script>
<style lang="scss" scoped>
    img {
        width: 100vw;
        height: 25vh;
    }

    .van-swipe {
        margin-top: 3vh !important;
    }
</style>