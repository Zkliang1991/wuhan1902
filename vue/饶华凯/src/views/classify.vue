<template>
    <div>
        <Head title="主会场"></Head>
        <van-tabs v-model="active" animated background="rgba(0,0,0,0.5)"  title-inactive-color="white">
        <van-tab v-for="(item,i) in classfiy" :title="item.text" :key="i">
            <List :classfiy="item.text"></List>
            <div class="footdiv"></div>
        </van-tab>
        </van-tabs>

    </div>
</template>
<script>
import {mapState}from "vuex"
export default {
    data(){
        return {
            active:3,
           
        }
    },
    mounted (){
        this.$store.dispatch("classfiy")
    },
    computed: {
        ...mapState([
            "classfiy"
        ])
    }
}
</script>

<style lang="css">
div>.van-tabs__wrap{
    position:fixed;
    top:0.8rem;
    left:0;
    z-index: 99;
    overflow: hidden;
}
</style>
