<template>
  <div>
    <van-swipe :id="id" :autoplay="3000" indicator-color="white" @change="onChange">
        <slot></slot>
      <!-- <van-swipe-item v-for="(item,i) in items" :key="i">
          <img :src="item" alt="" width="100%" height="200">
      </van-swipe-item> -->

    </van-swipe>
  </div>
</template>


<script>
export default {
    name:"swipe",
    props:["id"],
  methods: {
    onChange(index) {
        // 轮播图改变执行的操作
        //   console.log("当前 Swipe 索引：" + index);
    }
  }
};
</script>

