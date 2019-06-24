<template>
    <footer>
        <!-- <van-tabbar v-for="(foot,i) in foots" :key="i">
            <van-tabbar-item>
                <nuxt-link to="{name:foot.name}">
                    <i class="icon iconfont" v-html="foot.icon"></i>
                    <span>{{foot.text}}</span>
                </nuxt-link>
            </van-tabbar-item>
        </van-tabbar> -->


        <!-- <van-tabbar-item>标签</van-tabbar-item> -->
        <div>
            <van-tabbar v-model="active">
                <van-tabbar-item icon="home-o" name='home' to="/home">首页</van-tabbar-item>
                <van-tabbar-item icon="search" name="classify" to="/classify">分类</van-tabbar-item>
                <van-tabbar-item icon="friends-o" name="cart" to="/cart">购物车</van-tabbar-item>
                <van-tabbar-item icon="setting-o" name="my" to="/my">我</van-tabbar-item>
            </van-tabbar>
        </div>



    </footer>
</template>


<script>
    import { mapState, mapActions } from "vuex";
    export default {
        computed: {

            ...mapState(["active"]),

            active: {

                get() {
                    return this.$store.state.active
                },
                set(val) {

                    this.$store.commit("change", val)

                }
            }



        }



    }

</script>