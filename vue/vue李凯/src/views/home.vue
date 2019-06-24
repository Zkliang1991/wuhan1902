<template>
  <div>
    <Heade title="首页" :show="true" style=""></Heade>
    <div style="" class="lol-main">
      <Swipe id="banner" :Options="options">
        <Swipeitem v-for="(b,i) in banners" :key="i">
          <img :src="b" alt width="100%" height="200px">
        </Swipeitem>
      </Swipe>
      <div class="news">
        <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o" :scrollable="true">
          通知内容
          通知内容
          通知内容
          通知内容
          通知内容
          通知内容
          通知内容
          通知内容
          通知内容
          通知内容
          通知内容
          通知内容
          通知内容
          通知内容
          通知内容
          通知内容
          通知内容
          通知内容
        </van-notice-bar>
      </div>
      <div class="news">
        <van-card desc="描述信息" title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题" :thumb="imageURL"/>
        <van-card desc="描述信息" title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题" :thumb="imageURL"/>
        <van-card desc="描述信息" title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题" :thumb="imageURL"/>
        <van-card desc="描述信息" title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题" :thumb="imageURL"/>
        <van-card desc="描述信息" title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题" :thumb="imageURL"/>
        <van-card desc="描述信息" title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题" :thumb="imageURL"/>
        <van-card desc="描述信息" title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题" :thumb="imageURL"/>
        <van-card desc="描述信息" title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题" :thumb="imageURL"/>
        <van-card desc="描述信息" title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题" :thumb="imageURL"/>
        <van-card desc="描述信息" title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题" :thumb="imageURL"/>
        <van-card desc="描述信息" title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题" :thumb="imageURL"/>
        <van-card desc="描述信息" title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题" :thumb="imageURL"/>
        <van-card desc="描述信息" title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题" :thumb="imageURL"/>
        <van-card desc="描述信息" title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题" :thumb="imageURL"/>
      </div>
    </div>
  </div>
</template>

<script>
import { NoticeBar } from "vant";
export default {
  name: "heade",
  data() {
    return {
      banners: [
        require("@/assets/images/img1.jpg"),
        require("@/assets/images/img2.jpg"),
        require("@/assets/images/img3.jpg"),
        require("@/assets/images/img4.jpg")
      ],
      options: {
        loop: true,
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        speed: 1500,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
          hide: true
        },
      },
      imageURL: require("@/assets/images/img1.jpg"),
      
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.news {
  padding: 5px 0 0 0;
  overflow: auto;
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
}
</style>

