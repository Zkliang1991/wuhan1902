<template>
  <div>
    <header>
      <div class="search_box">
        <div class="scan">
          <p>
            <i class="iconfont icon-richscan_icon"></i>
            <span>扫一扫</span>
          </p>
          <p></p>
        </div>
        <div class="search">
          <i class="iconfont icon-sousuo-copy"></i>
          <input type="text" placeholder="寻找宝贝店铺" @click="goSearch">
          <i class="iconfont icon-xiangji"></i>
        </div>
      </div>
      <div class="vip">
        <p>
          <i class="iconfont icon-xiaoxi"></i>
          <span>消息</span>
        </p>
      </div>
    </header>
    <div class="home">
      <Swiper id="goods" :swiperOptions="options">
        <SwiperItem v-for="(good,i) in data.allGoods" :key="i">
          <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}">
            <img :src="good.img" alt="图片" width="100%" height="180px">
          </router-link>
        </SwiperItem>
      </Swiper>
    </div>
    <main>
      <nav>
        <p>
          <img src="../assets/images/pic1.png" alt>
          <span>某猫</span>
        </p>
        <p>
          <img src="../assets/images/pic2.png" alt>
          <span>健康</span>
        </p>
        <p>
          <img src="../assets/images/pic3.png" alt>
          <span>淘金币</span>
        </p>
        <p>
          <img src="../assets/images/pic4.png" alt @click="goClassify">
          <span @click="goClassify">分类</span>
        </p>
      </nav>
    </main>
    <div>
      <ul>
        <li v-for="(good,i) in data.allGoods" :key="i" class="item">
          <Item :good="good"></Item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Item from "../components/Item.vue";
export default {
  name: "home",
  data() {
    return {
      options: {
        loop: true,
        autoplay: true,
        speed: 2000
      }
    };
  },
  components: {
    Item
  },
  computed: {
    ...mapState(["data"])
  },
  methods: {
    ...mapActions(["getImg", "getAllGoods"]),
    goClassify() {
      this.$router.push({ path: "/classify" });
    },
    goSearch() {
      this.$router.push({ path: "/search" });
    }
  },
  mounted() {
    this.getImg({
      url: "/vue/getGoodsData",
      params: {
        limit: 6
      }
    });
    this.getAllGoods({
      url: "/vue/getGoodsData"
    });
  }
};
</script>

<style scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
}
.home {
  margin-top: 0.8rem;
}
header {
  width: 100%;
  height: 0.87rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #cd0303;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
header .search_box {
  width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
header .search_box .scan {
  display: flex;
  justify-content: space-between;
}
header .search_box .scan p {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}
header .search_box .scan p .iconfont {
  width: 0.41rem;
  height: 0.4rem;
  font-size: 0.4rem;
  margin-bottom: 0.03rem;
}
header .search_box .scan p span {
  font-size: 0.17rem;
}
header .search_box .search {
  width: 5rem;
  height: 0.64rem;
  background-color: #ff3636;
  border-radius: 0.32rem;
  display: flex;
  align-items: center;
  color: #fff;
  margin-left: 0.2rem;
}
header .search_box .search .iconfont:first-child {
  width: 0.3rem;
  height: 0.3rem;
  font-size: 0.3rem;
  margin: 0 0.1rem 0 0.2rem;
}
header .search_box .search .iconfont:last-child {
  width: 0.3rem;
  height: 0.3rem;
  font-size: 0.3rem;
}
header .search_box .search input {
  width: 3.9rem;
  height: 0.64rem;
  outline: none;
  border: none;
  background-color: #ff3636;
  font-size: 0.26rem;
}
header .vip {
  display: flex;
  justify-content: space-between;
}
header .vip p {
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #fff;
}
header .vip p span {
  font-size: 0.17rem;
}
header .vip .iconfont {
  width: 0.41rem;
  height: 0.4rem;
  font-size: 0.4rem;
}
main {
  flex: 1;
  background-color: #f2f2f2;
  overflow-y: scroll;
}
main .banner {
  width: 7.5rem;
  height: 2.8rem;
}
.banner img {
  width: 100%;
  height: 100%;
}
main nav {
  width: 7.5rem;
  height: 2.24rem;
  display: flex;
  justify-content: space-around;
  padding-top: 0.38rem;
}
main nav p {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #666666;
}
main nav p img {
  width: 1.05rem;
  height: 1.05rem;
  margin-bottom: 0.22rem;
}
main .banner nav a span {
  font-size: 23rem;
}
.item {
  width: 3rem;
  height: 6rem;
  float: left;
  box-sizing: border-box;
  margin: 0 0.3rem 0 0.4rem;
  text-align: center;
}
</style>

