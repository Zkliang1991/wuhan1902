<template>
  <div class="item-move">
    <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}" class="item">
      <img :src="good.img" alt="图片" width="100%" height="150px">
      <p class="goodsName">{{good.name}}</p>
      <p class="goodsPrice">￥{{good.price}}元</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "item",
  props: ["good"]
};
</script>

<style scoped>
.item-move {
  animation: zoomInDown 0.5s;
}
.item {
  padding: 20px;
  color: #000;
  font-size: 16px;
}
.goodsName {
  margin-bottom: 0.1rem;
}
.goodsPrice {
  color: #f00;
}
</style>


