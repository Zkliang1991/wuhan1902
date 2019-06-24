<template>
    <div>

        <Head title="首页"></Head>
        <Swipe></Swipe>
        <homelist :goods="goods"></homelist>
    </div>

</template>
<script>
    import Swipe from "../components/swipe.vue"
    import homelist from "../components/homelist.vue"
    export default {
        data() {
            return {
                goods: []
            }
        },
        mounted() {
            this.$axios.get("/vue/getGoods")
                .then(res => {
                    console.log(res)
                    this.goods = res.data.result;
                })
        },
        components: {
            Swipe,
            homelist
        },
    }
</script>