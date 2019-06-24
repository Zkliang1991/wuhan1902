<template>
    <div class = 'guide'>
        <van-swipe :autoplay="2000" :loop = 'false' indicator-color="white">
            <van-swipe-item v-for = '(img,i) in imgs' :key = 'i'>
                <img :src="img" alt="" width = '100%' height = '100%' @click = 'goHome(i)'>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    name:'guide',
    data(){
        return {
            imgs:[
                require("@/assets/images/slide1.png"),
                require("@/assets/images/slide2.png"),
                require("@/assets/images/slide3.png"),
                require("@/assets/images/slide4.png")
            ]
        }
    },
    methods:{
        goHome(id){
            if(id == this.imgs.length-1){
                this.$router.push({name:'home'})
            }
        },
        mounted(){
            if(localStorage.visited){
                localStorage.visited++;
                if(localStorage.visited > 3){
                    this.$router.push({name:'home'})
                }
            }else{
                localStorage.visited = 1
            }
        }
    }
}
</script>

<style scoped>
   
</style>

