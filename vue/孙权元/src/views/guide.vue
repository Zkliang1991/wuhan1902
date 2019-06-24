<template>
    <div>
        <!-- <router-link to="index">入口</router-link> -->
        <van-swipe :autoplay="3000" :show-indicators="false" :loop="false">
            <van-swipe-item v-for="(image, index) in images" :key="index" class="box" @click="gotohome(index)">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>


<script>
// import Vue from 'vue';
// import { Lazyload } from 'vant';
// Vue.use(Lazyload);


export default {
    name:"guide",
    data(){
        return {
            images:[
                
                'http://img3.imgtn.bdimg.com/it/u=3537747658,2452099875&fm=15&gp=0.jpg',
                'http://img.zcool.cn/community/0173075bd9897ba80121ab5df2fee5.gif',
                'http://img.zcool.cn/community/01ac565a14e416a80121349029a502.gif',
                'http://img.zcool.cn/community/014b2c573d883f6ac7253f9a468977.gif',
            ]
        }
    },
    methods:{
        gotohome(i){
            if(i==this.images.length-1){
                this.$router.push({name:'home'})
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .box{
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>


