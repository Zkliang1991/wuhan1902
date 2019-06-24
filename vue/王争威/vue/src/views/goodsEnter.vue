<template>
    <div>

        <Head msg="订单提交"></Head>
          <Adress></Adress>
        
        <GoodsEnter></GoodsEnter>

    </div>
</template>
<script>
    import GoodsEnter from "@/components/goodsEnter.vue";
    import Adress from "@/components/adress.vue"
    export default {
        components: { GoodsEnter}
    }
</script>