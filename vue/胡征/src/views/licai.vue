<template>
    <div class="licai">
        <Header title="购物车"></Header>
        <chouiwu></chouiwu>
        <dibu></dibu>
    </div>
</template>
<script>
    import chouiwu from "@/components/gouwuche.vue"
    import dibu from "@/components/dibu.vue"
    export default {
        components: {
            chouiwu,
            dibu

        }
    }
</script>
<style lang="scss" scoped>
    .licai {
        padding-top: 46px;
        padding-bottom: 110px;
    }
</style>