<template>
    <div>
        <joinhome v-show="flag"></joinhome>
        <van-swipe :autoplay="3000" class="parent" @change="changeIndex">
            <van-swipe-item v-for="(img,i) in imgs" :key="i" class="parent">
                <img :src="img" alt="" class="img">
            </van-swipe-item>

        </van-swipe>
    </div>
</template>
<script>
    import { mapState } from "vuex"
    import joinhome from "@/components/guide.vue"
    export default {
        data() {
            return {
                flag: false
            }
        },
        components: {
            joinhome
        },
        computed: {
            ...mapState(['imgs',])
        },
        mounted() {
            console.log(this.flag)
            if (localStorage.num1) {
                localStorage.num1++;
                if (localStorage.num1 > 3) {
                    this.$router.push({ name: "home" })
                }
            } else {
                localStorage.num1 = 1
            }
        },
        methods: {
            tiaozhuan(i) {
                if (i == 4) {
                    // this.$router.push({name:"home"})
                    console.log(1)
                }
            },
            changeIndex(i) {
                // console.log(i);
                this.flag = (i == 4);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .img {
        width: 100vw;
        height: 100vh;
    }

    .parent {
        width: 100vw;
        height: 100vh;
    }
</style>