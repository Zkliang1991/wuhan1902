
<template>
    <div>
        <van-nav-bar title="商品" left-arrow @click-left="back">
        <van-icon name="ellipsis" slot="right" />
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.back();
        }
    },
}
</script>

<style lang="scss" scoped>
.van-nav-bar .van-icon{
    color: #000;
}
</style>