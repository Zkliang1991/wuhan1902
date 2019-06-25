<template>
  <van-nav-bar>
    <!-- 标题 -->
    <p slot="title">
      <!-- 标题文字 -->
      <span v-if="titleshow">{{title}}</span>
      <!-- 标题搜索 -->
      <van-search
        v-model="value"
        class="headsearch"
        v-else
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
      >
        <div @click="getSearch" slot="action">搜索</div>
      </van-search>
    </p>
    <!-- 右侧选项 -->
    <!-- 收藏 -->
    <p slot="right" v-if="title == '收藏' ? true : false">
      <span @click="getdel(false)" v-if="btnshow">完成</span>
      <span @click="getdel(true)" v-else>管理</span>
    </p>
    <!-- 搜索 -->
    <van-icon
      v-if="((title == '首页' || title == '分类')&&titleshow) ? true : false"
      @click="goSearch"
      name="search"
      slot="right"
    />
    <!-- 注销 -->
    <p @click="getlogout" v-if="title=='个人中心' ? true : false" slot="right">
      <span v-show="!!outshow ? true : false">注销</span>
    </p>
  </van-nav-bar>
</template>
<script>
import { mapState } from "vuex";
import { Dialog } from "vant";
export default {
  name: "headr",
  data() {
    return {
      value: ""
    };
  },
  mounted() {},
  computed: {
    ...mapState(["title"]),
    // 收藏 显隐
    btnshow: {
      get() {
        return this.$store.state.collect.btnshow;
      },
      set(val) {
        this.$store.state.collect.btnshow = val;
      }
    },
    //注销显隐
    outshow: {
      get() {
        return this.$store.state.my.userid;
      },
      set(val) {
        this.$store.state.my.userid = val;
      }
    },
    // 头部显隐
    titleshow: {
      get() {
        return this.$store.state.titleshow;
      },
      set(val) {
        this.$store.state.titleshow = val;
      }
    }
  },
  methods: {
    getdel(val) {
      this.$store.commit("getBtnShow", val);
    },
    getlogout() {
      Dialog.confirm({
        title: "温馨提示",
        message: "你确定要注销当前账号吗？"
      })
        .then(() => {
          // on confirm
          sessionStorage.removeItem("userinfo");
          this.$router.go(0);
          console.log("注销成功");
        })
        .catch(() => {
          // on cancel
          console.log("已取消注销");
        });
    },
    goSearch() {
      this.$store.commit("getSearch", false);
    },
    getSearch() {
      this.$store.dispatch("addSearch", {
        url: "/vue/getsearch",
        params: { value: this.value }
      });
    }
  }
};
</script>
<style scoped>
.van-nav-bar__left,
.van-nav-bar__right,
.van-nav-bar__text {
  color: #1989fa;
  height: 8vh;
  line-height: 8vh;
}
.van-nav-bar__title {
  height: 8vh;
  line-height: 8vh;
}
.headsearch {
  position: absolute;
  left: 7vw;
  height: 8vh;
  width: 80vw;
  z-index: 1000000;
}
</style>

