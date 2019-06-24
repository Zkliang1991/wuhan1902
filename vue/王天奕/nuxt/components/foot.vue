
<template>
    


    <div>
       
       <van-tabbar route >
            <van-tabbar-item
                replace
                to="/home"
                icon="home-o"
            >
                首页
            </van-tabbar-item>
            <van-tabbar-item
                replace
                to="/classify"
                icon="search"
            >分类
            </van-tabbar-item>
            <van-tabbar-item
                replace
                to="/cart"
                icon="cart-o"
                :info="su"
            >
                购物车
            </van-tabbar-item>
            <van-tabbar-item
                replace
                to="/friends"
                icon="friends-o"
            >
                个人中心
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>


<script>
export default {
  
  data() {
    return {
       flag:false,
      active: 0,
      icon: {
        normal: '//img.yzcdn.cn/icon-normal.png',
        active: '//img.yzcdn.cn/icon-active.png'
      },
      fixed:true
    }
  },
  computed:{
      su(){
          return this.$store.state.su;
          
      }
  }


}
</script>
