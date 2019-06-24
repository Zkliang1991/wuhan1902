<template>
    <div>
        <!-- <van-swipe :autoplay="3000" indicator-color="white"> -->
        <!-- <van-swipe-item></van-swipe-item> -->

        <van-row type="flex" justify="space-between" class="top">
            <van-col span="6">
                <i class="iconfont icon-CPU"></i>
                <span>限时秒杀</span>
            </van-col>
            <van-col span="6">
                <i class="iconfont icon-WirelessMouse"></i>
                <span>断码清仓</span>
            </van-col>
            <van-col span="6">
                <i class="iconfont icon-WeatherForecast"></i>
                <span>品牌馆</span>
            </van-col>
            <van-col span="6">
                <i class="iconfont icon-Train"></i>
                <span>特卖</span>
            </van-col>
            <van-col span="6">
                <i class="iconfont icon-VirtualCircuit"></i>
                <span>多多果园</span>
            </van-col>
        </van-row>
        <van-row type="flex" justify="space-between" class="top">
            <van-col span="6">
                <i class="iconfont icon-SmartTVBox"></i>
                <span>充值中心</span>
            </van-col>
            <van-col span="6">
                <i class="iconfont icon-HouseholdCarbonFootprint"></i>
                <span>爱逛街</span>
            </van-col>
            <van-col span="6">
                <i class="iconfont icon-UserDrivenInnovation"></i>
                <span>现金签到</span>
            </van-col>
            <van-col span="6">
                <i class="iconfont icon-SmokeSensor"></i>
                <span>食品超市</span>
            </van-col>
            <van-col span="6">
                <i class="iconfont icon-VehicleEmissionControl"></i>
                <span>电器城</span>
            </van-col>
        </van-row>


        <!-- <van-row gutter="20">
            <van-col span="8">span: 8</van-col>
            <van-col span="8">span: 8</van-col>
            <van-col span="8">span: 8</van-col>
        </van-row> -->


    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    span {
        /* margin-top: 0.3rem; */
    }

    .iconfont {
        margin-bottom: 0.1rem;
        font-size: 0.8rem;
        color: brown
    }

    .van-col {
        /* height: 1.3rem; */
        text-align: center;
        display: flex;
        flex-direction: column;
        margin-bottom: 0.1rem;
    }

    .top {
        margin-top: 0.5rem;
    }
</style>