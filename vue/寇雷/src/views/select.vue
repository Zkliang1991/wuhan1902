<template>
    <div v-if="show">
        <van-nav-bar title="分区" fixed  @click-left="onClickLeft" @click-right="onClickRight" style="backgroundColor:#409EFF;">
            <van-icon name="arrow-left" slot="left" color="#000000" size="25px"/>
            <van-icon name="search" slot="right" color="#000000" size="25px"/>
        </van-nav-bar>
        <div style="margin-top:50px">
            <van-tabs >
                <van-tab  v-for="(type,i) in types" :key="i" :title="type">
                    
                    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                        <!-- <ul>
                            <li v-for="(video , i) in allvideos" :key="i" height="150px">
                                <router-link to="" class="item">
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
                        </ul> -->
                        <List :type=type :allGoods="allGoods" :goods="allGoods.filter(item=>item.tname==type)">   
                        </List>
                    </van-pull-refresh>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>


<script>
export default {
    name:"elect",
    data(){
        return {
            types:[],
            allGoods:[],
            show:false,
            isLoading:true
        }
    },
    methods:{
        onClickLeft(){
            history.go(-1)
        },
        onClickRight(){
            this.$router.push({name:"search"})
        },
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
                this.allGoods = this.allGoods.reverse();
            }, 500);
        }
    },
    created(){
        this.$axios.get("/vue/messagesTypes").then(res=>{
            this.types = res.data.result;
        })
    },
    mounted(){
        this.$axios.get("/vue/messages").then(res=>{
            this.allGoods = res.data.result;
            this.$nextTick(()=>{
                this.show = true
            })
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
    .van-nav-bar--fixed{
        z-index:999 !important;
    }
</style>


