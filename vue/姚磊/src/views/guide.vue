<template>
    <div>
        <!-- <h2> guide -guide -guide </h2>
        <img :src="one" alt="" width=100 height=100> -->
        <van-swipe :autoplay="0" class="ginde" indicator-color="white" :loop="false">
            <van-swipe-item v-for="(img,i ) in imgs" :key="i">
                <img :src="img" alt="" class="imgss" @click="gohome(i)">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

 <script>
export default {
    name:'guide',
    data(){
        return {
            one:require("@/assets/images/photo.png"),
            imgs:[
                require("@/assets/images/img1.jpg"),
                require("@/assets/images/img2.jpg"),
                require("@/assets/images/img3.jpg"),
            ]
        }
    },
    methods:{
        gohome(id){
            if(id==this.imgs.length-1){
                this.$router.push({name:"home"})
            }
        }
    }
}
</script> 
<style>
.ginde,.imgss{
    width: 100%;
    height: 100%;
}
</style>
