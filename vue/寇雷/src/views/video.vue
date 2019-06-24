<template>
    <div>
        <van-nav-bar :title="$route.query.name" fixed  @click-left="onClickLeft" @click-right="onClickRight" style="backgroundColor:#409EFF;z-index:99999;">
            <van-icon name="arrow-left" slot="left" color="#000000" size="25px"/>
            <van-icon name="search" slot="right" color="#000000" size="25px"/>
        </van-nav-bar>
        <div style="margin-top:50px" class="video">
            <iframe :src="'//player.bilibili.com/player.html?aid='+ssr+'&cid='+ur+'&page=1'" scrolling="no" ref="two" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
            <div style="margin-top:20px" v-if="av.stat">
                <van-row gutter="20">
                    <van-col span="8">
                        <van-icon :name="icon" :info="av.stat.like" size="30px" @click="like"/>喜欢
                    </van-col>
                    <van-col span="8">
                        <van-icon name="closed-eye" :info="av.stat.view" size="30px"/>播放量
                    </van-col>
                    <van-col span="8">
                        <van-icon :name="icon1" :info="av.stat.favorite" size="30px" @click="save"/>收藏
                    </van-col>
                </van-row>
            </div>
            <p  style="padding:20px 25px;color:#757575;font-size:14px;text-align:left">视频简介:{{av.desc}}</p>
            <div v-if="av.owner" style="background:#E5E9EF">
                <van-row>
                    <van-col span="8" style="height:120px">
                        <img :src="av.owner.face" alt="" width="80px" height="80px" style="margin:20px 20px">
                    </van-col>
                    <van-col span="14" style="text-align:left">
                        <van-button plain type="primary" disabled style="margin:20px 0;height:30px;width:80px;line-height:30px">UP</van-button><span style="color:#FC96B3;font-size:16px;margin-left:20px">{{av.owner.name}}</span>
                        <p style="letter-spacing:1px;font-size:14px;text-align:left">标签:{{av.dynamic}}</p>
                    </van-col>
                </van-row>   
            </div>
            <van-cell-group style="margin-top:20px;" v-if="av.stat">
                <van-cell icon="refund-o" title="该视频所获得的硬币数" :value="av.stat.coin" />
                <van-cell icon="chat-o" title="评论数量" :value="av.duration" />
                <van-cell icon="share" title="分享数量" :value="av.stat.share" />
                <van-cell icon="coupon-o" title="弹幕数量" :value="av.stat.danmaku" />
            </van-cell-group>
            <van-panel title="评论" desc="给该视频留言">
                    <van-cell-group>
                        <van-field v-model="message"  type="textarea" placeholder="请输入评论" rows="4" autosize />
                    </van-cell-group>
                    <div slot="footer" style="text-align:right">
                        <van-button size="small" style="margin-right:50px;">取消</van-button>
                        <van-button size="small" type="danger">确定</van-button>
                    </div>
            </van-panel>
            <van-goods-action>
                <van-goods-action-icon icon="thumb-circle-o" @click="ck1">
                    评分
                </van-goods-action-icon>
                <van-goods-action-icon icon="after-sale" @click="onClickCart">
                    点击投币
                </van-goods-action-icon>
                <van-goods-action-button type="warning" @click="ck2">
                    点击下载
                </van-goods-action-button>
                <van-goods-action-button type="danger" @click="ck3">
                    立即观看
                </van-goods-action-button>
            </van-goods-action>
            <van-action-sheet v-model="show" title="标题">
                <van-rate v-model="value" allow-half void-icon="star" void-color="#eee" style="height:100px" size="50px"/>
            </van-action-sheet>
        </div>
    </div>
</template>

<script>
import { Notify } from 'vant';
export default {
    name:"av",
    data(){
        return {
            av:{},
            icon:"like-o",
            icon1:"star-o",
            count:0,
            ssr:"",
            ur:"",
            show:false,
            value:0,
            message:""
        }
    },
    methods:{
        onClickLeft(){
            history.go(-2)
        },
        onClickRight(){
            this.$router.push({name:"search"})
        },
        like(){
            if(this.icon=="like-o"){
                this.icon = "like"
                Notify({
                    message: '已添加到我的最爱中',
                    duration: 1000,
                    background: '#FF0066'
                });
            } else {
                Notify('真的不在考虑一下吗？');
                this.icon="like-o"
            }
        },
        save(){
            if(this.icon1=="star-o"){
                this.icon1 = "star"
                this.$axios.post("/vue/addlike",{
                    avNum:this.$route.params.av,
                    av:JSON.stringify(this.av),
                    count:this.count+1
                }).then(res=>{
                    Notify({
                    message: '已添加到我的收藏中',
                    duration: 1000,
                    background: '#FF0066'
                    });
                })
            } else {
                this.$axios.post("/vue/delete",{
                    avNum:this.$route.params.av,
                }).then(res=>{
                    Notify('从我的收藏中移除');
                    this.icon1 ="star-o";
                })
            }
        },
        ck1(){
            this.show = true
        },
        ck2(){

        },
        ck3(){
            this.$refs.two.click()
        },
        onClickCart(){

        },
    },
    mounted(){
        this.ssr = this.$route.params.av
        this.$axios.get("/vue/getAv",{
            params:{
                av: this.$route.params.av
            }
        }).then(res=>{
            this.av = res.data.result;
            var ak = res.data.result.cid
            this.ur = ak
        }),
        this.$axios.post("/vue/addlikepagenon",{
            avNum:this.$route.params.av*1,
        }).then(res=>{
            if(res.data.type==1){
                this.icon1 = "star"
            } else {
                this.icon1 = "star-o"
            }
        })
    }
}
</script>


<style scoped>
.van-cell__title{
    text-align:left;
    font-size:14px;
    color:#3B3B3B;
}
.van-cell__value{
    font-size:18px;
    color:#FF0000;
}
.video{
    padding-bottom:50px;
}
</style>

