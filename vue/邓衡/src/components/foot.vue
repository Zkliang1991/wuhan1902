<template>

    <van-tabbar v-model="active">
        <van-tabbar-item name="home" icon="wap-home" to='/index/home'>首页</van-tabbar-item>
        <van-tabbar-item name="hot" icon="hot-o" to='/index/hot'>热点</van-tabbar-item>
        <van-tabbar-item name="buyCar" icon="cart-o" to='/index/buyCar'>购物车</van-tabbar-item>
        <van-tag round type="danger" >{{data.CarGoods.length}}</van-tag>
        <van-tabbar-item name="my" icon="setting-o" to='/index/my'>我的</van-tabbar-item>
    </van-tabbar>

</template>

<script>
    import { mapState, mapActions } from "vuex"
    export default {
        name: "foot",
        methods: {
            ...mapActions(['getActive'])
        },
        computed: {
            ...mapState(['data']),
            
            // num:{
            //     get(){
            //         if(sessionStorage.num){
            //             return sessionStorage.num

            //         }else{
            //             return 0

            //         }
            //     }
            // },

            active: {
                get() {
                    return this.$store.state.active
                },
                set(val) {
                    // this.$store.commit('getActive', val)
                    this.getActive(val)
                }
            }
        },

        watch: {
            active(val) {
                // console.log(val);
                this.$router.push({ name: val })
            },

        },
        mounted() {
            // console.log(this.$route.name)
            // this.active = this.$route.name
            this.getActive(this.$route.name)
        }






    }

</script>

<style lang="scss" scoped>
    .active_tab img {
        width: 0.54rem;
        height: 0.54rem;
    }

    .van-tabbar-item--active {
        color: #e10f02;
    }
    .van-tag{
        position: absolute;
        left: 5rem;
        top: 0.06rem;
    }
</style>