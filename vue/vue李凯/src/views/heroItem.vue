<template>
  <div v-if="!!types">
    <van-nav-bar
      :title="$route.query.name"
      left-arrow
      @click-left="onClickLeft(1)"
      class="lol-head"
    ></van-nav-bar>
    <div class="lol-main">
      <a href="javascript:;" class="kongBox" @click="gg"></a>
      <p style="padding: 20px 30px;" class="nameP">{{hero.nikename}}&emsp;{{hero.name}}</p>
      <div v-for="(skills,i) in hero.Skill" :key="i" style="padding-bottom:10px;">
        <van-card :desc="skills.skillDetails" :title="skills.skillName" :thumb="imageURL"/>
      </div>
      <p style="font-size:12px;">人家也是有底线的哦...</p>
    </div>
  </div>
</template>
<script>
import { bus } from "@/utils/bus";
import { mapActions } from "vuex";
import { ImagePreview, Toast } from "vant";
export default {
  name: "heroItem",
  data() {
    return {
      hero: {},
      types: [],
      imageURL: require("@/assets/images/img1.jpg")
    };
  },
  props: ["title"],

  methods: {
    onClickLeft() {
      //   bus.$emit("typeBack", this.hero[0].type);
      this.$router.go(-1);
      console.log(this.hero.type);
      var index = this.types.indexOf(this.hero.type);
      console.log(index);
      this.$store.dispatch("changeActive", index);
    },
    // ...mapActions(["onClickLeft"])
    gg() {
      ImagePreview([
        require("@/assets/images/slide1.png"),
        require("@/assets/images/slide2.png"),
        require("@/assets/images/slide3.png"),
        require("@/assets/images/slide4.png")
      ]);
    }
  },
  created() {
    this.$axios.get("/lol/getHeroTypes").then(res => {
      console.log(res);
      this.types = res.data.result;
    });
  },
  mounted() {
    // console.log(this.$route);
    // console.log(this.$router);
    this.$axios
      .get("/lol/getHerosByName", {
        params: {
          name: this.$route.query.name
        }
      })
      .then(res => {
        console.log(res);
        this.hero = res.data.result[0];
      });

    const toast = Toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true, // 禁用背景点击
      loadingType: "spinner"
      // message: "倒计时 3 秒"
    });

    let second = 2;
    const timer = setInterval(() => {
      second--;
      if (second) {
        // toast.message = `倒计时 ${second} 秒`;
      } else {
        clearInterval(timer);
        Toast.clear();
      }
    }, 500);
  }
};
</script>

<style lang="scss" scoped>
.kongBox {
  background: #000;
  width: 100vw;
  height: 50vh;
  display: block;
}
.nameP {
  text-align: left;
}
.van-swipe
  .van-swipe__track
  .van-swipe-item
  .van-image-preview
  .van-image-preview__image {
  width: 100%;
  height: 100%;
}

#app .van-card__content {
  text-align: left;
}
#app .van-card__content .van-card__title {
  font-size: 18px;
  font-weight: bolder;
  line-height: 22px;
  max-height: none;
}
#app .van-card__content .van-card__desc {
  padding-top: 10px;
  max-height: none;
  white-space: normal;
}

.lol-head {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}
</style>
