<template>
    <div class="vant-header">
            <van-nav-bar  :title="title" >
                
                <van-icon name="arrow-left" v-if="show" slot="left" @click="goback"/>
                <!-- <slot></slot> -->
                <!-- <van-icon v-if="flag1" name="search" slot="right" /> -->
            </van-nav-bar>
    </div>
</template>

<script>
export default {
    // title是变量,不过在props传递时要加引号  error 1  !!!!!!!!!
    props:["title","show"],//传参数,在调用Head插件时可以传实参
    data(){
        return{
            flag1:true
        }
    },
    methods:{
        goback(){
            console.log("成功返回上一页");
            this.$router.push({name:'home'});
            // history.go(-1);
            
        }
    }
    // mounted(){
  

    // }
}
</script>

<style scoped>
.vant-header{
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
    width: 100%;
}
</style>



