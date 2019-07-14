
<template>
    <div>
        <div class="head">
            <van-nav-bar title="乐享视频" :border="false" >
                <van-icon name="chat-o" slot="right" color="#fff" />
            </van-nav-bar>
        </div>
    </div>
</template>

<script>
export default {
    name:"head3"
}
</script>

<style lang="scss" scoped>
    // .head{
    //     background-color: rgb(235,41,95);
    // }
    .van-nav-bar{
        background-color:#fd295f;
    }
    .van-nav-bar__right{
        font-size: .4rem;
    }
    .van-nav-bar__title{
        color: #fff;
    }
</style>
