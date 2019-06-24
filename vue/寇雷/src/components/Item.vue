<template>
    <div class="item-move">
        <router-link :to="{name:'video',params:{av:good.aid},query:{name:good.title}}" class="item">
            <van-row type="flex" justify="center">
                <van-col span="10">
                    <img :src="good.pic" alt="" width="90%" height="100px">
                </van-col>
                <van-col span="12">
                    <p class="p1">{{good.title}}</p>
                    <p class="p2">UP主:{{good.owner.name}}</p>
                    <p class="p3">简介:{{good.dynamic}}</p>
                </van-col>
            </van-row>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"item",
    props:["good"]
}
</script>

<style scoped>
    .p1{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color:black;
    line-height:20px;
    font-size:14px;
    font-weight: bold;
    text-align:left;
    }
    .p2{
    color:#2196F3;
    margin-top:10px;
    text-align:left;
    font-size:14px;
    }
    .p3{
    margin-top:10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align:left;
    font-size:12px;
    color:#ADADAD;
    letter-spacing: 1px;
    }

    .item-move{
    animation: slideInUp 0.5s;
    }
</style>


