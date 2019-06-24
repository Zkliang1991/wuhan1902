<template>
      <div class="item-move">
          <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}" class="item">
         <van-card
            
            :price="good.price"
            :desc="good.type.text"  
            :title="good.name"
            :thumb="good.img"
            />
            <!-- <img :src="good.img" alt="" width="100%" height="240px">
            <h2>{{good.name}} ￥RMB{{good.price}}  {{good.type.text}}</h2> -->
     </router-link>
    </div>
</template>
<script>
export default {
     name:'item',
    props:['good']
}
</script>
<style scoped>
    h2{
        height: 45px;
        color: black;
        padding: 10px 0;
        font-size: 16px;
    }
    .item-move{
        animation: flipOutX .5s;
    }
</style>



