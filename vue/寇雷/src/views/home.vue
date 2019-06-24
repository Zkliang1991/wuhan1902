<template>
    <div>
        <van-nav-bar title="bilibili" fixed  @click-left="onClickLeft" @click-right="onClickRight" style="backgroundColor:#409EFF">
            <van-icon name="wap-nav" slot="left" color="#000000" size="25px"/>
            <van-icon name="scan" slot="right" color="#000000" size="25px"/>
        </van-nav-bar>
        <div style="margin-top:50px">
            <!--轮播图组件-->
            <van-swipe :autoplay="3000" indicator-color="white" >
                <van-swipe-item v-for="(lunbo , i) in lunbotu" :key="i">
                    <img :src="lunbo.pic" alt="" width="100%" height="200px">
                </van-swipe-item>
            </van-swipe>
            <!--推荐视频列表-->
            <van-swipe-cell :right-width="60" :left-width="60" disabled style="text-align:left;margin-top:10px">
                <van-cell  :border="false" title="猜你喜欢"/>
            </van-swipe-cell>
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <ul>
                    <li v-for="(video , i) in videos" :key="i" height="150px">
                        <router-link :to="{name:'video',params:{av:video.aid},query:{name:video.title}}" class="item">
                            <van-row type="flex" justify="center">
                                <van-col span="10">
                                    <img :src="video.pic" alt="" width="90%" height="100px">
                                </van-col>
                                <van-col span="12">
                                    <p class="p1">{{video.title}}</p>
                                    <p class="p2">UP主:{{video.owner.name}}</p>
                                    <p class="p3">简介:{{video.dynamic}}</p>
                                </van-col>
                            </van-row>
                        </router-link>
                    </li>
                </ul>
            </van-pull-refresh>
            <!--分页-->
            <van-pagination v-model="currentPage" :items-per-page="one" :total-items="allT" :show-page-size="3" force-ellipses :page-count="allY" @change="changepage"/>




        </div>

        <!--左边的菜单弹出层-->
        <div v-if="show==true?false:true">   
            <van-popup v-model="show"  position="left" :overlay="false" >内容</van-popup>
            <div class="box1" >
                <div class="personal" >
                    <div id="photo">
                        <img :src="userhead" alt="" class="tou">
                    </div>
                </div>
                <van-sidebar :active-key="activeKey" @change="onChange">
                    <van-sidebar-item title="首页" />
                    <van-sidebar-item title="历史记录" info="0" />
                    <van-sidebar-item title="离线缓存" info="0" />
                    <van-sidebar-item title="我的收藏" info="0" @click="gotosc"/>
                    <van-sidebar-item title="我的关注" />
                    <van-sidebar-item title="稍后再看" />
                    <van-sidebar-item title="创作中心" />
                    <hr>  
                    <van-sidebar-item title="直播中心" />
                    <van-sidebar-item title="我的大会员" />
                    <van-sidebar-item title="联系客服" />
                </van-sidebar>
                <div class="setting">
                    <van-button type="primary" size="small" class="btn">设置</van-button>
                    <van-button type="info" size="small" class="btn">主题</van-button>
                    <van-button type="warning" size="small" class="btn">夜间</van-button>
                </div>
            </div>
            <div class="shadow" @click="btn" v-if="show==true?false:true">

            </div>

        </div>
    </div>
</template>


<script>
import { Toast } from 'vant';
export default {
    name:"home",
    data(){
        return {
            keyword:"",
            videos:[],
            show: true,
            activeKey: 0,
            userhead:require("@/assets/images/user.jpg"),
            isLoading:false,
            lunbotu:[],
            currentPage: 1,
            one:10,
            allT:1000,
            allY:100,

        }
    },
    mounted(){
        if(localStorage.touxiang){
            this.userhead = (localStorage.touxiang).replace(/localhost:1902/,"47.103.81.2")
        } else {
            this.userhead = require("@/assets/images/user.jpg")
        }
        this.$axios.get("/vue/bilibili",{
            params:{
                pageNo:1
            }
        }).then(res=>{
            this.videos = res.data.result
            this.allT = res.data.total
            this.allY = res.data.totalPage
            this.one = res.data.pageSize
        }),
        this.$axios.get("/vue/anima").then(res=>{
            this.lunbotu = res.data.result
        })
    },
    methods:{
        onClickLeft(){
            if(!this.show){
                this.show = true;
            } else {
                this.show = false;
            }
        },
        onClickRight(){

        },
        onChange(key){
            this.activeKey = key;
        },
        btn(){
            if(!this.show){
                this.show = true;
            } else {
                this.show = false;
            }
        },
        gologin(){
            this.$router.push({name:"login"})
        },
        onRefresh() {
            setTimeout(() => {
                Toast.success('刷新成功');
                this.isLoading = false;
                this.videos = this.videos.reverse();
            }, 500);
        },
        changepage(){
            this.$axios.get("/vue/bilibili",{
            params:{
                pageNo:this.currentPage
            }
        }).then(res=>{
            this.videos = res.data.result
        })
        },
        gotosc(){
            this.$router.push({name:"active"})
        }
    }
}
</script>

<style scoped>
.box1{
        position:fixed;
        top:0;
        left:0;
        z-index:9999;
        width:70%;
        height:100%;
        background-color: #fff;
        animation: slideInLeft 0.5s;
    }
    .personal{
        width: 100%;
        height: 15%;
        background-color: #409EFF;
    }
    van-sidebar{
        width: 100%;
        height: 70%;
    }
    .setting{
        width: 70%;
        height: 7%;
        position:fixed;
        left:0;
        bottom:0;
    }
    .shadow{
        position:fixed;
        top:0;
        right:0;
        z-index:9998;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.1);
    }
    .van-sidebar{
        width: 100% !important;
        text-align:left;
    }
    .van-sidebar-item{
        padding:14px 12px 14px 9px;
    }
    .btn{
        width: 33.3%;
        height: 100%;
        line-height:100%;
        text-align:center;
    }
    #photo{
        width: 100%;
        height: 70px;
    }
    .tou{
        width: 30%;
        height: 100%;
        border-radius:50%;
        padding:6% 35%;
    }
    .hiddenInput{
        display:none;
    }
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
