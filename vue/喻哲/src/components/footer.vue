
<template>
    <div>
        <van-tabbar v-model="active" active-color="#3173e4" inactive-color="#000" route :border="false">
            <van-tabbar-item replace  name="home" to="/index/home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item replace  name="classify" to="/index/classify" icon="apps-o">分类</van-tabbar-item>
            <van-tabbar-item replace  name="video" to="/index/jdvideo" icon="video-o">视频</van-tabbar-item>
            <van-tabbar-item replace  name="buycart" to="/index/buycart" icon="cart-o">购物车</van-tabbar-item>
            <van-tabbar-item replace  name="mine" to="/index/mine" icon="manager-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active:"home"
        }
    },
}
</script>