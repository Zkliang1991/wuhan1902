<template>
    <div>
        <div class="box">
            <router-link to="longcaifu">
                <van-icon name="chat" />
                <div>账户</div>
            </router-link>
            <router-link to="longcaifu">
                <van-icon name="point-gift-o" />
                <div>素盈</div>
            </router-link>
            <router-link to="longcaifu">
                <van-icon name="new-arrival-o" />
                <div>理财产品</div>
            </router-link>
            <router-link to="{name:'longcaifu'}">
                <van-icon name="manager-o" />
                <div>小微快贷</div>
            </router-link>
        </div>
        <div class="box">
            <router-link to="longcaifu">
                <van-icon name="chat" />
                <div>付款码</div>
            </router-link>
            <router-link to="longcaifu">
                <van-icon name="point-gift-o" />
                <div>扫一扫</div>
            </router-link>
            <router-link to="longcaifu">
                <van-icon name="new-arrival-o" />
                <div>善融商务</div>
            </router-link>
            <router-link to="{name:'longcaifu'}">
                <van-icon name="manager-o" />
                <div>龙支付</div>
            </router-link>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .box {
        width: 100vw;
        /* height: 100vh; */
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        text-align: center;
        margin-top: 10px;
        color: rgb(56, 19, 190);

        a {
            width: 25%;
            margin-top: 8px;
            color: rgb(56, 19, 190);

            >div {
                color: black
            }
        }
    }
</style>