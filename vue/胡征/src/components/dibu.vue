<template>
    <div>
        <van-submit-bar :price="zongjia" button-text="提交订单" @submit="onSubmit" top />
    </div>
</template>
<script>
    import { Toast } from 'vant';
    import { mapState } from "vuex"
    export default {
        data() {
            return {

            }
        },
        methods: {
            onSubmit() {
                if (this.zongjia != 0) {

                    this.$router.push({ name: 'daikuan' })
                } else {
                    Toast('请选择需要购买的商品');
                }
            }
        },
        computed: {
            ...mapState(['zongjia'])
        },
    }
</script>
<style lang="scss" scoped>
    .van-submit-bar {
        bottom: 50px;
    }
</style>