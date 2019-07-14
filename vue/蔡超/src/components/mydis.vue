<template>
  <van-popup v-model="mydisshow" position="bottom" :overlay="false">
    <div class="box">
      <!-- 头部 -->
      <van-nav-bar title="我的评论">
        <p @click="back" slot="left">返回</p>
      </van-nav-bar>
      <!-- 列表 -->
      <van-list>
        <van-cell v-for="(dis,i) in mydislist" :key="i">
          <div style="float:left;width:18vw;height:12vh">
            <img :src="dis.bookimg" alt width="100%" height="100%" :onerror="errImg">
          </div>
          <div style="float:left;padding-left:1vw;box-sizing:border-box;width:70vw">
            <p>书名:{{dis.booktitle}}</p>
            <p>时间:{{dis.time}}</p>
            <p>评论内容:{{dis.userspeak}}</p>
          </div>
        </van-cell>
      </van-list>
    </div>
  </van-popup>
</template>
<script>
export default {
  name: "mydis",
  data() {
    return {
      errImg: 'this.src="' + require("@/assets/err.jpeg") + '"'
    };
  },
  computed: {
    // 页面显隐
    mydisshow: {
      get() {
        return this.$store.state.mydis.show;
      },
      set(val) {
        this.$store.state.mydis.show = val;
      }
    },
    // 列表获取
    mydislist: {
      get() {
        return this.$store.state.mydis.list;
      },
      set(val) {
        this.$store.state.mydis.list = val;
      }
    }
  },
  methods: {
    back() {
      this.$store.commit("getMyDisShow", false);
    }
  }
};
</script>
<style scoped>
.box {
  width: 100vw;
  height: 100vh;
}
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
</style>


