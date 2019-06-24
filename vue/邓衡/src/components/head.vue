<template>
    <div>
        <van-nav-bar :title="title" left-text="返回" left-arrow  @click-left="onClickLeft"   @click-right="onClickRight">
            <van-icon name="search" slot="right" v-show="show"/>
        </van-nav-bar>
        
    </div>
</template>

<script>
    export default {
        name: 'heads',
        props: ['title','show'],
        methods:{
            onClickLeft(){
                history.go(-1)
            },
            onClickRight(){
                this.$router.push({name:'search'})
            }

        }
    }

</script>

<style scoped>
    .van-hairline--bottom{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 11 !important;
        
    }

</style>