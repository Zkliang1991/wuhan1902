<template>
    <van-goods-action>
        <van-goods-action-mini-btn icon="chat-o" text="客服" @click="" />
        <van-goods-action-mini-btn icon="cart-o" text="购物车" @click="onClickBigBtn" />
        <van-goods-action-big-btn text="加入购物车" @click="onClickMiniBtn" />
        <van-goods-action-big-btn primary text="立即购买" @click="onClickBigBtn" />
    </van-goods-action>
</template>
<script>
    import { mapState } from "vuex"
    export default {
        props: ['errt'],
        methods: {
            onClickMiniBtn() {
                var id = this.$route.query.id
                console.log(sessionStorage.usename, this.errt, id, this.errt.price)
                this.$axios.post('/vue/cartJoin', {
                    username: sessionStorage.usename,
                    goods: this.errt,
                    selectedNum: 1,
                    id: id,
                    price: this.errt.price,
                    lirr: false
                }).then(res => {
                    console.log(res)
                })
            },
            onClickBigBtn() {
                this.$router.push({name:"licai"})
            },
          
        },
        computed: {
            ...mapState(['username'])
        }
    }
</script>
<style lang="scss">

</style>