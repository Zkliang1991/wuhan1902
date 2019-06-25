<template>
    <div class="home">
        <Head title="廿一客" :show="false"></Head>
        <Swipe></Swipe>

        <div class="main-home">
            <ul class="rights-box">
                <li>
                   <van-icon name="fire" />新客满198元赠冰淇淋
                </li>
                <li>
                    <van-icon name="fire" />满100包邮 
                </li>
                <li>
                    <van-icon name="fire" />全程冷链配送
                </li>
            </ul>
            <ul class="home-menu-box">
                <li>
                    <img src="https://static.21cake.com//upload/images/7dd9f161ea87f4d44f7a506a8c08100e.png" alt="">
                    面包
                </li>
                <li>
                    <img src="https://static.21cake.com//upload/images/b24fa9c0d277b79493fead122afe8e73.png" alt="">
                    蛋糕
                </li>
                <li>
                    <img src="https://static.21cake.com//upload/images/dda23404c8cba348580acd684114ade3.png" alt="">
                    下午茶
                </li>
                <li>
                    <img src="https://static.21cake.com//upload/images/6d777e1d3aa1681d58ea1640f53e2920.png" alt="">
                    企业专区
                </li>
            </ul>
            <div class="home-goods">
                <HomeList :goods="goods">

                </HomeList>
                <!-- <ul>
                    <li v-for="(good,i) in goods" :key="i">
                        <Item :good="good"></Item>
                    </li>
                </ul> -->
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Swipe from "@/components/swipe.vue";
import HomeList from "@/components/homelist.vue";
export default {
    name: 'home',
    data(){
        return{
            goods:[]
        }
    },
    components: {
        Swipe,
        HomeList
    },
    created(){
        this.$axios.get("/vue/getGoodList",{
            params:{
                limit:11
            }
        })
        .then(res=>{
            console.log(res);
            this.goods  = res.data.result;
        })

    },

}
</script>

<style lang="scss" scoped>
.main-home{
    margin: 0 20px;
    padding-bottom: 60px;
}
.rights-box{
    overflow: hidden;
    text-align: center;
    margin: 9px 0;
    height: 18px;
}
.rights-box li{
    line-height: 18px;
    color: #C69C6D;
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
}
.rights-box li:first-child{
    float: left;
    margin-top: 1px;
}
.rights-box li:last-child{
    float: right;
    margin-top: 1px;
}
.home-menu-box{
    overflow: hidden;
    font-size: 12px;
}
.home-menu-box{
    box-sizing: border-box;
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1px solid #C69C6D;
    margin-bottom: 10px;
}
.home-menu-box li {
    float: left;
    width: 21%;
    line-height: 16px;
    text-align: center;
    margin: 5px 4% 5px 0;
}
.home-menu-box li img {
    width: 70%;
    display: block;
    min-height: 40px;
    margin: 0 auto;
}
// li[data-v-227179ae] {
//     padding: 0 !important;
// }
// .item img{
//     height: 240px !important;
// }
</style>
