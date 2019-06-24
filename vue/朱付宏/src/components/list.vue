<template>
    <div>
        <ul v-if="goods.length>0">
             <li v-for="(good,i) in goods" :key="i">
                 <!-- 遍历得到的数据goods -->
                  <router-link :to="{name:'good',params:{goodId:good.id},query:{name:good.name}}">
                           <div class="left">
                               <h3 class="name">{{good.name}}</h3>
                               <h3>价格:￥{{good.price}}</h3>
                               <h3>折扣：{{good.discount}}</h3>
                           </div>
                           <div class="right">
                                <img :src="good.img" alt="" width="80vw" height="60vh">
                           </div>
                  </router-link>
             </li>
        </ul>
    </div>
</template>


<script>
export default {
    name:"list",
    props:{   //用props来接收find传过来的goods
        goods:{
            type:Array,
        }
    }
}
</script>


<style>
  .con{
      overflow: hidden;
  }
 .left,.right{
    float: left;
    height: 15vh;
}
.left{
    width: 60vw;
}
.right{
    padding-top: 2vh;
    padding-left: 10vw;
    box-sizing: border-box;  /*灵魂代码*/
}







</style>
  


