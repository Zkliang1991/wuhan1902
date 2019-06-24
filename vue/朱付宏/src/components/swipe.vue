<template>
  <div class="swiper-container" :id="id">
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: "swipe",
  props:['id','swiperOptions'],  //传递参数

  mounted(){
      var mySwiper =new Swiper("#"+this.id,this.swiperOptions);  //静态的轮播图
  },
  // updated(){    //数据更新阶段 
  //   this.$nextTick(()=>{
  //     var mySwiper =new Swiper("#"+this.id,this.swiperOptions);  //动态的轮播图
  //   })
  // }
};
</script>
 