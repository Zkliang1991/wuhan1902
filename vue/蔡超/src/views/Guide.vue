<template>
  <div>
    <!-- 轮播 -->
    <Swipe class="swipe">
      <swipe-item class="swipe-item" v-for="(img,i) in imgs" :key="i">
        <img :src="img" alt style="width:100vw;height:100vh">
        <van-button
          class="gohome"
          @click="gohome"
          v-if="i==imgs.length-1 ? true : false"
          type="primary"
        >进入首页</van-button>
      </swipe-item>
    </Swipe>
  </div>
</template>
<script>
export default {
  name: "guide",
  data() {
    return {
      imgs: [
        require("@/assets/p1.png"),
        require("@/assets/p2.png"),
        require("@/assets/p3.png"),
        require("@/assets/p4.png")
      ]
    };
  },
  mounted() {
    this.$store.dispatch("swipeAdd", {
      swipeId: "guide",
      swipeOptions: {
        effect: "fade",
        speed: 1000,
        delay: 300,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar"
        }
      }
    });
    if (sessionStorage.count) {
      sessionStorage.count++;
      if (sessionStorage.count >= 2) {
        this.$router.push({ name: "home" });
      }
    } else {
      sessionStorage.count = 0;
    }
  },
  methods: {
    gohome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style scoped>
.swipe,
.swope-item {
  width: 100vw;
  height: 100vh;
}
.gohome {
  position: absolute;
  width: 100vw;
  bottom: 0vh;
  transform: translateX(-50%);
  left: 50%;
  z-index: 10;
}
</style>


