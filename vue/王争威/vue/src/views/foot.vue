<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item name="home" icon="home-o" :to="{name:'home'}">首页</van-tabbar-item>
            <van-tabbar-item name="tuijian" icon="hot-sale" :to="{name:'tuijian'}">推荐</van-tabbar-item>
            <van-tabbar-item name="search" icon="search" :to="{name:'search'}">搜索</van-tabbar-item>
            <van-tabbar-item name="cart" :info="num" icon="shopping-cart" :to="{name:'cart'}">购物车</van-tabbar-item>
            <van-tabbar-item name="my" icon="manager" :to="{name:'my'}">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
       import {mapActions,mapState} from "vuex"
export default {
 
    data(){
        return {
            active:"home"
        }
       
    },
    computed:{
        ...mapState(['num'])
    },
    mounted(){
        // console.log(this.$route.name)
        this.active=this.$route.name;
        this.getCartInfo({url:'/vue/getcar'})
    },
    watch:{
        '$route':function(to,from){
           this.active=to.name
        }
    },
    
    methods:{
         ...mapActions(['getCartInfo']),
        }
}
</script>