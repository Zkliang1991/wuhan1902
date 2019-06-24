<template>
    <div>
        <van-swipe :autoplay="3000" class="parent">
            <van-swipe-item v-for="(image, index) in images" :key="index" >
                <img :src="image" class="img"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
    import {mapActions,mapState} from 'vuex'
export default {
        data(){
            return {
                images:[
                "https://img.alicdn.com/bao/uploaded/i4/2115444791/TB1rLvmfbuWBuNjSszgXXb8jVXa_!!0-item_pic.jpg",
                "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/429153662/TB2EP0LocIrBKNjSZK9XXagoVXa_!!429153662.jpg_430x430q90.jpg",
                "https://img.alicdn.com/bao/uploaded/i2/TB19I8TLpXXXXXdXXXXYXGcGpXX_M2.SS2_240x240.jpg",
                "https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/420567757/TB1QViQmNTpK1RjSZFGXXcHqFXa_!!0-item_pic.jpg_460x460Q90.jpg_.webp",
                "https://img.alicdn.com/bao/uploaded/i4/1983644031/TB17aB5mFzqK1RjSZFCXXbbxVXa_!!0-item_pic.jpg",
                "https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/3524740410/O1CN011EtoptKafi5xAQ2_!!3524740410.jpg_250x250.jpg_.webp"

                ]
            }
        }
}   
</script>
<style>
    .parent{
        width: 100vw;
        height: 3rem;
    }
    .img{
        width: 100%;
        height: 100%;
    }
</style>