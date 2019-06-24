<template>
    <van-nav-bar fixed v-bind:title="title" :left-text="back" :left-arrow="Boolean(left)" @click-left="onClickLeft" @click-right="onClickRight">
        <van-icon name="search" slot="right" v-if="hide"/>
    </van-nav-bar>
</template>


<script>
export default {
    props:["title","back","left","hide"],
    methods:{
        onClickLeft(){
            history.go(-1);
        },
        onClickRight(){
            this.$router.push({name:"search"});
        }
    }
}
</script>

<style scoped>
    img{
        width: 34px !important;
    }
</style>
