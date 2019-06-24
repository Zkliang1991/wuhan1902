<template>
  <div>
    <p class="second" @click="gohome">跳过</p>
    <van-swipe :autoplay="2000" :show-indicators="false" :touchable="false" class="guide">
      <van-swipe-item v-for="(img,i) in data.stImgs" :key="i">
        <img class="g-img" :src="img">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "guide",
  data() {
    return {
      times: 0
    };
  },
  computed: {
    ...mapState(["data"])
  },
  methods:{
      gohome(){
          this.$router.push({name:'login'})
      }
  }
};
</script>
<style scoped>
.second {
  position: fixed;
  left: 80%;
  top: 1%;
  text-align: center;
  border-radius: 30%;
  line-height: 0.6rem;
  font-size: 13px;
  width: 1.3rem;
  height: 0.6rem;
  background-color: rgba(15, 15, 15, 0.4);
  color: #fff;
  z-index: 9999;
}
.guide,
.g-img {
  width: 100%;
  height: 100%;
}
</style>


