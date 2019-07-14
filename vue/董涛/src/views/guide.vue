<template>
    <div>
        <van-swipe :autoplay="3000" :show-indicators="false" :loop="false" class="guide">
            <van-swipe-item v-for="(img,i) in imgs" :key="i" >
                <img :src="img" alt="" class="img" @click="gotoHome(i)">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    name:'guide',
    data(){
        return{
            imgs:[
                require("@/assets/images/slide1.png"),
                require("@/assets/images/slide2.png"),
                require("@/assets/images/slide3.png"),
                require("@/assets/images/slide4.png"),
            ]
        }
    },
    methods:{
        gotoHome(id){
            if(id==this.imgs.length-1){
                this.$router.push({name:'home'})
            }
        }
    },
    mounted(){
        if(localStorage.visitCount){
            localStorage.visitCount++;
            if(localStorage.visitCount>5){
                this.$router.push({name:'home'})
            }
        }else{
            localStorage.visitCount = 1;
        }
    }
}
</script>

<style lang="scss" scoped>
.guide,.img{
    width: 100%;
    height: 100%;
}
</style>
