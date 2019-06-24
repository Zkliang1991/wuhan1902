<template>
    <div>
        <van-swipe :autoplay="3000"  class="guide" indicator-color="white">
            <van-swipe-item v-for="(img,i) in imgs" :key="i">
                <img :src="img" alt="" @click="goHome(i)">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    name:"guide",
    data(){
        return {
            imgs:[
               require("@/assets/images/logo1.jpg"),
               require("@/assets/images/logo2.jpg"),
               require("@/assets/images/logo3.jpg"),
               require("@/assets/images/logo4.jpg")
            ]
        }
    },
    methods:{
        goHome(id){
            if(id==this.imgs.length-1){
                this.$router.push({name:"home"})
            }
        }
    },
    mounted(){
        if(localStorage.visitCount){
            localStorage.visitCount++;
            if(localStorage.visitCount>3){
                this.$router.push({name:"home"})
                localStorage.visitCount = 0

            }
        } else {
            localStorage.visitCount = 1;
        }
    }
}
</script>


<style scoped>
.guide{
    width: 100%;
    height: 100%;
}
img{
    width: 100%;
    height: 100%;
}
</style>





