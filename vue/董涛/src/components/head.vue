<template>
    <header>
        <van-nav-bar v-bind:title="title" >
            <van-icon name="arrow-left" slot="left" @click="goback" v-if="show">返回</van-icon>
            <van-icon name="search" slot="right" v-if="searchShow" @click="goSearch"/>
        </van-nav-bar>
    </header>
</template>

<script>
export default {
    props:["title","show"],
    data(){
        return{
            searchShow:true
        }
    },
    mounted(){
        this.searchShow = this.$route.name == 'search' ? false : true; 
    },
    methods:{
        goback(){
            this.$router.go(-1);
        },
        goSearch(){
            this.$router.push({name:'search'})
        }
    }
}
</script>

<style scoped>
header,.van-nav-bar{
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.10);
    position: fixed;
    left: 0;
    top: 0;
    z-index:1000;
    width:100%;
}
.van-nav-bar__title{
    font-size: 18px ;
    font-weight: 600;
}
.van-nav-bar__left,.van-nav-bar__right i{
    display: inline-block;
    vertical-align: middle;
    font-size: 18px ;
    margin: auto;
}
</style>
