<template>
    <div>
        <van-nav-bar title="我的收藏" fixed  @click-left="onClickLeft" @click-right="onClickRight" style="backgroundColor:#409EFF">
            <van-icon name="arrow-left" slot="left" color="#000000" size="25px"/>
            <van-icon name="search" slot="right" color="#000000" size="25px"/>
        </van-nav-bar>
        <div style="margin-top:50px">
            <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
                点击进入详情页就可以进行取消收藏操作
            </van-notice-bar>
            <ul >
                <li v-for="(like , i) in likeArr" :key="i" height="150px">
                    <router-link :to="{name:'video',params:{av:like.av.aid},query:{name:like.av.title}}" class="item">
                        <van-row type="flex" justify="center">
                            <van-col span="10">
                                <img :src="like.av.pic" alt="" width="90%" height="100px">
                            </van-col>
                            <van-col span="12">
                                <p class="p1">{{like.av.title}}</p>
                                <p class="p2">UP主:{{like.av.owner.name}}</p>
                                <p class="p3">简介:{{like.av.dynamic}}</p>
                            </van-col>
                        </van-row>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            likeArr:[],
            checkedGoods:""
        }
    },
    methods:{
        onClickLeft(){
            history.go(-1)
        },
        onClickRight(){
            this.$router.push({name:"search"})
        }
    },
    mounted(){
        this.$axios.post("/vue/addlikepage").then(res=>{
            this.likeArr = res.data.result;
        })
    }
}
</script>


<style scoped>
li{
    margin:10px 0;
    background-color: #fff;
    }
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



