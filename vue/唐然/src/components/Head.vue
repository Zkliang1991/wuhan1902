<template>
    <header>
        <van-nav-bar v-bind:title="title" left-text="返回" left-arrow @click-left="goBack">
            <van-icon v-if="flag" name="search" slot="right" @click="goSearch" />
        </van-nav-bar>
    </header>

</template>
<script>
    export default {
        props: ["title"],
        data() {
            return {
                flag: true

            }
        },
        mounted() {
            this.flag = this.$route.name == 'search' ? false : true
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            goSearch() {
                this.$router.push({ name: 'search' })
            },
        }
    }
</script>
<style scoped>
    header {
        z-index: 50000;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
</style>