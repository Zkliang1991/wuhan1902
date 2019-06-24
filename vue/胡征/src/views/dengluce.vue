<template>
    <van-tabs v-model="active" animated background="#6ff" title-active-color="red">
        <van-tab title='登录 '>
            <Cheze></Cheze>
        </van-tab>
        <van-tab title='注册 '>
            <Login></Login>
        </van-tab>
    </van-tabs>
</template>
<script>
    import Login from "@/components/login.vue"
    import Cheze from "@/components/cheze.vue"
    import { bus } from "@/utils/bus.js"
    import store from "vuex"
    import { mapState, mapActions } from "vuex"
    export default {
        components: {
            Login,
            Cheze
        },
        data() {
            return {
                active: 0
            }
        },
        mounted() {
                // console.log(this.gle, ',....')
            bus.$on("ajdfkl", val => {
                // console.log(111, val)
                this.active = val

            })
        },
        watch: {
            active(newVal, oldVal) {
                console.log(newVal, oldVal)
               
                    console.log(1)

                    // gle = !gle
                
               
            }
        },
        // computed: {
        //     ...mapState["gle"]
        // },
    }
</script>
<style lang="scss" scoped>
    .van-tabs__nav {
        background-color: #6ff !important;
    }
</style>