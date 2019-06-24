<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item name="home" icon="home-o" to='/home'>首页</van-tabbar-item>
            <van-tabbar-item name="weitao" icon="star-o" to = '/weitao'>微淘</van-tabbar-item>
            <van-tabbar-item name="cart" icon="shopping-cart-o" to = '/cart'>购物车</van-tabbar-item>
            <van-tabbar-item name="my" icon="manager-o" to = '/my'>我的淘宝</van-tabbar-item>
        </van-tabbar>
    </div>
  
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return {
            foots:[
            {txt:"首页",path:"/index/home",name:"home",icon:"home-o"},
            {txt:"微淘",path:"/index/weitao",name:"weitao",icon:"star-o"},
            {txt:"购物车",path:"/index/cart",name:"cart",icon:"shopping-cart-o"},
            {txt:"我的淘宝",path:"/index/my",name:"my",icon:"manager-o"}

        ],
    }
    },
    computed:{
        ...mapState([
            'active'
        ]),
        active:{
          get(){
              return this.$store.state.active;
          },
          set(val){
            // console.log(val);
            this.$store.commit('changeActive',val);
          }
      },
    },
    mathods:{
      ...mapMutations([
          'changeActive'
      ]),
    },
    updated(){
   
    }
}

</script>

<style>
    .van-tabbar--fixed{
        bottom:-1px
    }
</style>
