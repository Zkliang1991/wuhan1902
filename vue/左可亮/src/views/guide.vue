<template>
    <div>
        <!-- <h2> guide -guide -guide </h2>
        <img :src="one" alt="" width=100 height=100> -->

        <mt-swipe :auto="4000" class="guide" :continuous="false" :show-indicators="false">
            <mt-swipe-item   v-for="(img,i) in imgs" :key="i">
                <img :src="img" alt="" class="g-img" @click="gotoHome(i)">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    name:'guide',
    data(){
        return {
            one:require("@/assets/images/photo.png"),
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
            if(localStorage.visitCount>3){
                this.$router.push({name:'home'})
            }
        }else{
            localStorage.visitCount = 1;
        }
    },
}
</script>

<style scoped>
.guide , .g-img{
    width:100%;
    height:100%;
}
</style>
