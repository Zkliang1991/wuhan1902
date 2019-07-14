<template>
    <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index" >
            <img v-lazy="image" style="height:240px">
        </van-swipe-item>
    </van-swipe>
</template>

<script>

export default {
    data(){
        return{
            images: [
                'https://static.21cake.com//upload/images/409d1eb55ed5e6de82fcd28bc566b50b.jpg',
                'https://static.21cake.com//upload/images/444a40b0ec8cff28a74e721a6421e1d9.jpg',
                'https://static.21cake.com//upload/images/edbc5627bc036071b5c8c72c86ddfe43.gif',
            ]
        }
    }
}
</script>



<style lang="scss" scoped>
    img {
        display: block;
        box-sizing: border-box;
        width: 100%;
        min-height: 170px;
        // padding: 30px 60px;
        pointer-events: none;
        background: #eee;
    }
    // .van-search{
    //     margin-top: 50px;
    // }
    
</style>
