<template>
    <div>
        <van-nav-bar right-text="帮助" :title="title" :border="false" @click-left="back" class="head">
                <van-icon name="cross" slot="left" />
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props:['title'],
    methods:{
        back(){
            this.$router.back()
        },
    },
    mounted() {
    },
}
</script>


<style lang="scss" scoped>
.van-nav-bar .van-icon {
    color: #000;
}
.van-nav-bar__text{
    color: #000;
    font-size: .25rem;
    text-decoration: underline;
}
</style>
