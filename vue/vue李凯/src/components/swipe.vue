<template>
  <div class="swiper-container" :id="id">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
export default {
  name: "swipe",
  props: ["id", "Options"],
  mounted() {
      var mySwiper = new Swiper("#" + this.id, this.Options);
  },
  updated() {
      console.log("updated...");
    // this.$nextTick(() => { 

    //   var mySwiper = new Swiper("#" + this.id, this.Options);
    // });
  }
};
</script>