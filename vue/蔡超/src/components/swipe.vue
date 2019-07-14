/* eslint-disable no-unused-vars */
<template>
  <div class="swiper-container" :id="swipeId">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import store from "@/store";
import { mapState } from "vuex";
export default {
  name: "swipe",
  computed: {
    ...mapState(["swipeId", "swipeOptions"])
  },
  updated() {
    this.$nextTick(() => {
      new Swiper("#" + this.swipeId, this.swipeOptions);
    });
  }
};
</script>
