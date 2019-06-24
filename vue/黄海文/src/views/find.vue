<template>
  <div slot="find">
    <div class="swiper-container swiper-no-swiping">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(lb,i) in data.nlImg" :key="i">
          <img :src="lb">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <p class="ph">排行榜</p>
    <ul class="phb">
      <li v-for="(phb,i) in data.phbimg" :key="i" @click="gophb(i)">
        <img :src="phb" alt>
        <span>{{data.phbtitle[i]}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
import router from "vue-router";
export default {
  name: "find",
  data() {
    return {
      phbid: [
        "3778678",
        "3779629",
        "2884035",
        "2847251561",
        "2250011882",
        "991319590"
      ]
    };
  },
  computed: {
    ...mapState(["data"])
  },
  methods: {
    gophb(i) {
      this.$router.push({
        name: "musiclist",
        params: {
          id: this.phbid[i]
        }
      });
      console.log(this.phbid[i]);
    }
  },
  mounted() {
    console.log(this.$router);
    console.log(this.data.phbimg);
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        bulletElement: "li",
        clickable: true,
        clickableClass: "my-pagination-clickable"
      },
      speed: 1800,
      effect: "fade"
    });
  }
};
</script>
<style scoped>
.swiper-no-swiping {
  margin-top: 0.4rem;
}
.ph {
  height: 1rem;
  line-height: 1rem;
}
.phb {
  width: 7.5rem;
  height: 8.06rem;
}
.phb span {
  display: block;
  font-size: 0.25rem;
  margin: 0.1rem 0;
}
.phb img {
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 20%;
}
.phb li {
  width: 1.8rem;
  height: 2.2rem;
  float: left;
  text-align: center;
  margin: 0.1rem 0.34rem 0.6rem 0.34rem;
}
</style>



