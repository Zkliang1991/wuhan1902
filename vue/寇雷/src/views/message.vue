<template>
    <div>
        <van-nav-bar title="个人中心" fixed  @click-left="onClickLeft" @click-right="onClickRight" style="backgroundColor:#409EFF;">
            <van-icon name="arrow-left" slot="left" color="#000000" size="25px"/>
            <van-icon name="search" slot="right" color="#000000" size="25px"/>
        </van-nav-bar>
        <div style="margin-top:50px">
            <div class="backimg">
                <img width="100%" class="user-poster" src="http://img4.duitang.com/uploads/item/201609/14/20160914230240_eFZJM.jpeg">
                <UpLoadImg></UpLoadImg>
            </div>
            <van-row class="user-links">
            <van-col span="6">
                <van-icon name="clock-o" />
                历史观看
            </van-col>
            <van-col span="6">
                <van-icon name="user-o" />
                我的好友
            </van-col>
            <van-col span="6">
                <van-icon name="balance-o" />
                我的钱包
            </van-col>
            <van-col span="6">
                <van-icon name="question-o" />
                帮助中心
            </van-col>
            </van-row>

            <van-cell-group class="user-group">
            <van-cell icon="records" title="我的评论" is-link />
            </van-cell-group>

            <van-cell-group>
            <van-cell icon="points" title="我的硬币" is-link />
            <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
            <van-cell icon="gift-o" title="我收到的礼物" is-link />
            </van-cell-group>
        </div>
    </div>
  
</template>

<script>
import UpLoadImg from "@/components/uploadimg.vue"
export default {
    components:{
        UpLoadImg
    },
    methods:{
        onClickLeft(){
            history.go(-1)
        },
        onClickRight(){
            this.$router.push({name:"search"})
        }
    }
}
</script>






<style scoped>
.user-links{
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
}
.van-icon{
    display: block;
    font-size: 24px;
}
.van-nav-bar__left, .van-nav-bar__right{
    bottom:9px !important;
}
.tx{
    padding:10px 20px;
}
</style>
