<template>
    <div class="item-move">


          <router-link :to="{name:'good',params:{goodId:good.id},query:{name:good.name}}">    
                  <!-- router-link的 to 属性 跳转到good 商品详情页面  传了一个params参数 -->
                    <img  :src="good.img" alt="" width="100%" height="=200">
                    <h3>{{good.name}}---价格{{good.price}}----{{good.type.text}}</h3>  
                <hr>                 
         </router-link>
            <!-- 根据关键字搜索的数据渲染到页面上 -->      

    \
    </div>
</template>


<script>
export default {
     name:"item",
     props:["good"],   //接收list中传过来的goods数据

    data() {   
    return {
      count: 0,

    }
  },
  //  methods: {   //下拉刷新
  //      xinWen(){
  //          this.$router.push({name:'good'})
  //      }
       
  //  }
    
}
</script>


<style>
  .item-move{    
        /* 添加搜索到商品之后的动画 */
       animation: fadeInDown .8s
  }

</style>
