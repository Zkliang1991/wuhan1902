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
  props: ["id", "swiperOptions"],
  mounted() {
    this.$nextTick(() => {
      var mySwiper = new Swiper("#" + this.id, this.swiperOptions);
    });
  },
  updated() {
    this.$nextTick(() => {
      var mySwiper = new Swiper("#" + this.id, this.swiperOptions);
    });
  }
};
</script>

