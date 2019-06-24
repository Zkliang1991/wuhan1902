<template>

    <div>

        <Head></Head>
        <van-steps :active="active">
            <van-step>买家下单</van-step>
            <van-step>商家接单</van-step>
            <van-step>买家提货</van-step>
            <van-step>交易完成</van-step>
        </van-steps>
        <div class="box"></div>
        <van-steps direction="vertical" :active="0">
            <van-step>
                <h3>【武汉】待发货</h3>
                <p>{{dateStr}}</p>
            </van-step>
            <van-step>
                <h3>【武汉】配送中</h3>
                <p></p>
            </van-step>
            <van-step>
                <h3>【武汉】未签收</h3>
                <p></p>
            </van-step>
            <van-step>
                <h3>快件已签收</h3>
                <p></p>
            </van-step>
        </van-steps>
        <!-- <Foot></Foot> -->
    </div>
</template>

<script>
    import { Step, Steps } from 'vant';
    export default {
        name: "order",

        data() {
            return {
                active: 0,
                dateStr: ""
            };
        },
        mounted() {
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();

            var hour = date.getHours();
            var minute = date.getMinutes();

            this.dateStr = year + "-" + month + "-" + day + " " + hour + ":" + minute;





        }
    }
</script>
<style>
    .box {
        width: 100%;
        height: 100px;
    }
</style>