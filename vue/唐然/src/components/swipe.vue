<template>
    <div>
        <van-swipe :autoplay="3000" :show-indicators="false">
            <van-swipe-item v-for=" (img,i) in imgs " :key="i">
                <img :src="img" alt="" class="g-img">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgs: [
                    require("@/assets/images/photo04.jpg"),
                    require("@/assets/images/photo05.jpg"),
                    require("@/assets/images/photo06.jpg"),
                    require("@/assets/images/photo08.webp"),
                    require("@/assets/images/photo09.webp"),
                ]
            }
        }
    }

</script>


<style scoped>
    .g-img {
        width: 100%;
        height: 100%;
    }
</style>