<template>
    <div>
        <van-nav-bar title="视频搜索" fixed  @click-left="onClickLeft"  style="backgroundColor:#409EFF">
            <van-icon name="arrow-left" slot="left" color="#000000" size="25px"/>
        </van-nav-bar>
        <div style="margin-top:50px">
            <van-search placeholder="请输入搜索关键词" v-model="keyword"  show-action style="margin-top:50px"/>
            <List :goods="goods"></List>
        </div>
    </div>
</template>


<script>
export default {
    name:"search",
    data(){
        return {
            keyword:"",
            goods:[]
        }
    },
    watch:{
        keyword(newVal){
            if(newVal){
                this.$axios.get("/vue/messages",{
                    params:{
                        keyword:newVal
                    }
                }).then(res=>{
                    this.goods = res.data.result;
                })
            }
        }
    },
    methods:{
        onClickLeft(){
            history.go(-1)
        },
    }
}
</script>