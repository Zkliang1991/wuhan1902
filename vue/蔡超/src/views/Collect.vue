<template>
  <div>
    <!-- 第一个轮播  与下面的轮播双向控制 -->
    <div class="swiper-container topbox" id="swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide topslide" v-for="(book,i) in books" :key="i">
          <div>
            <p style="font-size:3.5vh;padding-bottom:3vh;">《{{book.title}}》</p>
            <p>
              <van-tag
                v-for="(tag,i) in book.catalog.split(' ').splice(0,book.catalog.split(' ').length-1)"
                plain
                :key="i"
                type="danger"
                style="margin-right:1vw;"
              >{{tag}}</van-tag>
            </p>
            <p style="font-size:1.5vh;padding-top:3vh;">{{book.tags}}</p>
          </div>
        </div>
        <div class="swiper-slide topslide" style="box-sizing:border-box;">
          <p>《广告位招租》</p>
          <p>QQ：1419056388</p>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!-- 第二个轮播 与上面的轮播双向控制 -->
    <div class="swiper-container bottombox" id="swiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide bottomslide" v-for="(book,i) in books" :key="i">
          <img @click="godetail(book.title)" :src="book.img" alt width="100%" height="100%">
          <div class="btnBox" v-if="btnshow">
            <van-button @click="setDel(book.title)" class="deleteBtn" type="info">删除</van-button>
          </div>
        </div>
        <div
          @click="goitemize"
          class="swiper-slide bottomslide"
          style="position:relative;box-sizing:border-box;border:3px solid #afafaf"
        >
          <p class="lasttitle">添加新的书</p>
          <p class="timg">+</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  name: "collect",
  created() {
    this.$store.dispatch("addCollectSet", { url: "/vue/setcollect" });
  },
  updated() {
    // 数据更新实例化轮播图
    var Swiper1 = new Swiper("#swiper1", {
      slidesPerView: "auto",
      spaceBetween: 10,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
        //type: 'fraction',
        //type : 'progressbar',
        //type : 'custom',
      }
    });
    var Swiper2 = new Swiper("#swiper2", {
      slidesPerView: "auto",
      spaceBetween: 10,
      centeredSlides: true,
      controller: {
        control: Swiper1,
        inverse: false,
        by: "slide"
      }
    });
    Swiper1.controller.control = Swiper2;
  },
  computed: {
    // 获取收藏数据
    books: {
      get() {
        return this.$store.state.collect.books;
      },
      set(val) {
        this.$store.state.collect.books = val;
      }
    },
    //管理删除的显示隐藏
    btnshow: {
      get() {
        return this.$store.state.collect.btnshow;
      },
      set(val) {
        this.$store.state.collect.btnshow = val;
      }
    }
  },
  methods: {
    // 删除收藏数据
    setDel(title) {
      Dialog.confirm({
        title: "《" + title + "》",
        message: "你确认要从你的收藏中删除这本书吗？"
      })
        .then(() => {
          // on confirm
          this.$store.dispatch("addCollectDel", {
            url: "/vue/delcollect",
            title: title
          });
          console.log("删除成功");
        })
        .catch(() => {
          // on cancel
          console.log("删除取消");
        });
    },
    //进入分类页
    goitemize() {
      this.$router.push({ name: "itemize" });
    },
    //获取详情
    godetail(title) {
      this.$store.dispatch("addDetailShow", {
        show: true,
        title: title,
        url: "/vue/detail"
      });
    }
  }
};
</script>
<style scoped>
.topbox {
  top: 10vh;
  position: absolute;
  width: 100vw;
  height: 35vh;
}
.bottombox {
  position: absolute;
  top: 50vh;
  width: 100vw;
  height: 35vh;
}
.topslide,
.bottomslide {
  position: relative;
  width: 50vw;
  transition: all 0.2s;
}
.topslide {
  box-sizing: border-box;
  text-align: center;
  padding-top: 7vh;
}
.swiper-slide:not(.swiper-slide-active) {
  transform: scale(0.6);
}
.swiper-pagination {
  position: absolute;
  top: 2vh;
}
.timg {
  font-size: 20vw;
  color: #afafaf;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.deleteBtn {
  width: 20vw;
  height: 5vh;
  line-height: 5vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.btnBox {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.lasttitle {
  font-size: 3.5vw;
  color: #afafaf;
  position: absolute;
  bottom: 6vh;
  left: 50%;
  transform: translateX(-50%);
}
</style>
