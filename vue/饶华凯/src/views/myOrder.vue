<template>
    <div>
        <Head title="我的订单"></Head>
        <van-tabs v-model="active" animated>
            <van-tab  title="全部" >
            <h1>全部</h1>
            </van-tab>
            <van-tab v-for="(item,i) in myorders" :title="item.type" :key="i">
                内容 {{ item.type}}
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
    data(){
        return{
            myorders:[
                {type:"待付款",num:1,icon:"&#xe604;"},
                {type:"待发货",num:2,icon:"&#xe55e;"},
                {type:"待收货",num:3,icon:"&#xe608;"},
                {type:"待评价",num:4,icon:"&#xe639;"},
                {type:"退款/售后",num:5,icon:"&#xe64c;"}
            ],
            active:0
        }
    },
    mounted(){
        console.log(this.$route)
        this.active=this.$route.params.num
    }
}
</script>
