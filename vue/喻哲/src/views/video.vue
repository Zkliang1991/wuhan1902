
<template>
    <div>
        <my-head3></my-head3>
        <div class="nav">
            <van-tabs v-model="seleted" background="#fd295f" color="#fff" type="line" :border="false" title-active-color="#fff" title-inactive-color="#ffd5df" line-width=".4rem" line-height="0.1rem" >
                <van-tab title="精选" class="titel">
                   <iframe height=400 width="100%" src='http://player.youku.com/embed/XNDIzMTMzMTM0NA==' frameborder='allowfullscreen'></iframe>
                </van-tab>
                <van-tab title="科技范" class="titel">
                   <iframe height=498 width=510 src='http://player.youku.com/embed/XMzgyOTI0ODIyNA==' frameborder='allowfullscreen'></iframe>
                </van-tab>
                <van-tab title="搞笑" class="titel">
                   <iframe height=498 width="100%" src='http://player.youku.com/embed/XNDIzMzE3MDk0OA==' frameborder='allowfullscreen'></iframe>
                </van-tab>
                <van-tab title="时尚圈" class="titel">
                   <iframe height=498 width=510 src='http://player.youku.com/embed/XMzk0MDUyOTAyMA==' frameborder='allowfullscreen'></iframe>
                </van-tab>
                <van-tab title="游戏" class="titel">
                   <iframe height=498 width=510 src='http://player.youku.com/embed/XMjc2MzA3NDM0NA==' frameborder='allowfullscreen'></iframe>
                </van-tab>
                <van-tab title="生活家" class="titel">
                   <iframe height=498 width="100%" src='http://player.youku.com/embed/XNDIzMTMzMTM0NA==' frameborder='allowfullscreen'></iframe>
                </van-tab>
                <van-tab title="直播" class="titel">
                   <iframe height=498 width=510 src='http://player.youku.com/embed/XNDIzNzM5Njg2MA==' frameborder='allowfullscreen'></iframe>
                </van-tab>
            </van-tabs>
        </div>
        <div class="footer">
            <footerEmpty></footerEmpty>
        </div>
    </div>
</template>

<script>
export default {
    name:"jdvideo",
    data() {
        return {
            seleted:0,
        }
    },
}
</script>

<style lang="scss" scoped>
.nav{
    font-size: 0.3rem;
}
.van-tabs__wrap{
    height: 2rem;
}
.titel{
    width: 100%;
}
</style>
