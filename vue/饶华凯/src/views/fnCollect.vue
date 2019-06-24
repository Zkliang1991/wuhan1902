<template>
    <div>
        <Head :title="txt"></Head>
         <van-tabs v-model="active" animated @click="changetap">
            <van-tab v-for="(item,index) in functions" :title="item.txt" :key="index">
                内容 {{ item.txt}}
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
    data(){
        return{
            txt:"功能",
            functions:[
                {txt:"收藏夹",num:0,content:520},
                {txt:"关注店铺",num:1,content:1314},
                {txt:"足迹",num:2,content:668},
                {txt:"红包卡券",num:3,content:999},
            ],
            active:0
        }
    },
    methods:{
        changetap(index,title){
            this.txt=title
        }
    },
    mounted(){
        this.txt=this.$route.query.txt;
        this.active=this.$route.params.num;
    }
}
</script>
