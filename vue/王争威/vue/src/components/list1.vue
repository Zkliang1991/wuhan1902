<template>
    <div>
        <!-- <van-swipe :autoplay="3000" indicator-color="white"> -->
        <!-- <van-swipe-item></van-swipe-item> -->

        <van-row type="flex" justify="space-between" class="top">
            <van-col span="6">
                <i class="iconfont icon-GamingConsole"></i>
                <span>圣诞有礼</span>
            </van-col>
            <van-col span="6">
                <i class="iconfont icon-Train"></i>
                <span>心理情感</span>
            </van-col>
            <van-col span="6">
                <i class="iconfont icon-VehicleEmissionControl"></i>
                <span>培训考试</span>
            </van-col>
            <van-col span="6">
                <i class="iconfont icon-WindEnergy"></i>
                <span>生活研修</span>
            </van-col>
            <van-col span="6">
                <i class="iconfont icon-DroneSurveillance"></i>
                <span>健康学堂</span>
            </van-col>
        </van-row>
        <van-row type="flex" justify="space-between" class="top">
            <van-col span="6">
                <i class="iconfont icon-SmokeSensor"></i>
                <span>科技科普</span>
            </van-col>
            <van-col span="6">
                <i class="iconfont icon-HouseholdCarbonFootprint"></i>
                <span>人文艺术</span>
            </van-col>
            <van-col span="6">
                <i class="iconfont icon-UserDrivenInnovation"></i>
                <span>现金签到</span>
            </van-col>
            <van-col span="6">
                <i class="iconfont icon-SmartGlasses"></i>
                <span>健康学堂</span>
            </van-col>
            <van-col span="6">
                <i class="iconfont icon-VirtualCircuit"></i>
                <span>任务中心</span>
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
        color: darkorange
    }

    .iconfont {
        margin-bottom: 0.1rem;
        font-size: 0.8rem;
        color: fuchsia
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