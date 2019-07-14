<template>
  <div class="home">
    <!-- 轮播图 -->
    <Swipe class="swipe">
      <swipe-item class="swipe-item" v-for="(book,i) in bookswipe" :key="i">
        <img @click="godetail(book.title)" class="swipe-img" :src="book.img" :onerror="errImg" alt>
      </swipe-item>
    </Swipe>
    <!-- 排行 和一个凑数的选项 -->
    <van-tabbar
      :fixed="false"
      active-color="black"
      inactive-color="black"
      style="width:100vw;margin-top:3vh;"
    >
      <van-tabbar-item
        @click="goRanking"
        style="border-right:1px solid #ffefef;position:relative;font-weight:900;"
      >
        <van-icon name="fire-o" size="8vw" class="licon" color="red"></van-icon>
        <span style="font-size:4.8vw;padding-left:4vw;color:red">排行</span>
      </van-tabbar-item>
      <van-tabbar-item style="border-left:1px solid #ffefef;position:relative;font-weight:900;">
        <van-icon name="apps-o" size="8vw" class="licon"></van-icon>
        <span style="font-size:4.8vw;padding-left:4vw">分类</span>
      </van-tabbar-item>
    </van-tabbar>
    <!-- 精品阅读栏 ---- 可以局部刷新 -->
    <van-cell style="width:100vw;position:relative;">
      <p slot="title" style="font-size:5vw;padding:0 1vw;">
        精品阅读
        <a @click="newExcell" style="font-size:4vw;position:absolute;right:6vw">换一批</a>
      </p>

      <van-icon size="7vw" color="red" slot="icon" name="award-o"></van-icon>
      <div class="readRank" slot="label" v-if="exshow">
        <div class="bookbox" @click="godetail(cell.title)" v-for="(cell,i) in excell" :key="i">
          <p>
            <img :src="cell.img" alt style="width:15vw;height:12vh" :onerror="errImg">
          </p>
          <div class="van-ellipsis" style="width:15vw">{{cell.title}}</div>
        </div>
      </div>
    </van-cell>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "home",
  data() {
    return {
      errImg: 'this.src="' + require("@/assets/err.jpeg") + '"'
    };
  },
  computed: {
    //获取轮播图图片数据
    ...mapState(["bookswipe"]),
    //获取精品阅读数据
    excell: {
      get() {
        return this.$store.state.excell;
      },
      set(val) {
        this.$store.state.excell = val;
      }
    },
    //精品阅读局部刷新
    exshow: {
      get() {
        return this.$store.state.exshow;
      },
      set(val) {
        this.$store.state.exshow = val;
      }
    }
  },
  created() {
    //获取首页数据
    this.$store.dispatch("homeAddAjax", {
      url: "/vue/swipe",
      params: { swipelimit: 6, exlimit: 8 }
    });
  },
  updated() {
    //数据刷新 实例化轮播图
    this.$store.dispatch("swipeAdd", {
      swipeId: "home",
      swipeOptions: {
        effect: "coverflow",
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 1,
        coverflowEffect: {
          rotate: 0,
          stretch: 10,
          depth: 160,
          modifier: 2,
          slideShadows: true
        }
      }
    });
  },
  methods: {
    //点击换一批获得新的数据
    newExcell() {
      this.$store.dispatch("addExcellAjax", {
        url: "/vue/newexcell",
        params: { limit: 8 }
      });
    },
    //点击进入详情页
    godetail(title) {
      this.$store.dispatch("addDetailShow", {
        show: true,
        title: title,
        url: "/vue/detail"
      });
    },
    //进入排行
    goRanking() {
      this.$store.dispatch("addRanking", { url: "/vue/ranking" });
    }
  }
};
</script>
<style scoped>
.home {
  /* background: white; */
  box-sizing: border-box;
  padding-top: 3vh;
  overflow-y: scroll;
}
.swipe {
  width: 100vw;
  height: 25vh;
}
/* .swipe-item {
  width: 25vw;
  height: 30vh;
} */
.swipe-img {
  width: 100%;
  height: 100%;
}
.readRank {
  width: 100%;
}
.licon {
  position: absolute;
  left: 10vw;
  top: 50%;
  transform: translateY(-50%);
}
.bookbox {
  float: left;
  padding: 1vw;
  box-sizing: border-box;
  margin: 1.4vw;
  text-align: center;
}
</style>
