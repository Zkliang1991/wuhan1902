<template>
  <van-popup v-model="searchshow" position="bottom" :overlay="false">
    <div class="box">
      <!-- 关闭搜索按钮 -->
      <van-button class="backbtn" @click="back" type="info">关闭搜索</van-button>
      <!-- 搜索列表 -->
      <van-list>
        <van-cell v-for="(item,i) in searchlist" :key="i">
          <van-card @click="godetail(item.title)" :desc="item.tags" :title="item.title">
            <img slot="thumb" :src="item.img" alt :onerror="errImg" width="80%" height="100%">
            <span slot="tags">
              <van-tag
                v-for="(tag,i) in item.catalog.split(' ').splice(0,item.catalog.split(' ').length-1)"
                plain
                :key="i"
                type="danger"
                style="margin-right:1vw;"
              >{{tag}}</van-tag>
            </span>
            <span slot="num" style="color:#9f9f9f;">
              <span>查看详情</span>
              <span class="iconfont">&#xe600;</span>
            </span>
          </van-card>
        </van-cell>
      </van-list>
    </div>
  </van-popup>
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      errImg: 'this.src="' + require("@/assets/err.jpeg") + '"'
    };
  },
  computed: {
    // 搜索页面显示与关闭
    searchshow: {
      get() {
        return this.$store.state.search.show;
      },
      set(val) {
        this.$store.state.search.show = val;
      }
    },
    // 搜索列表的获取
    searchlist: {
      get() {
        return this.$store.state.search.list;
      },
      set(val) {
        this.$store.state.search.list = val;
      }
    }
  },
  methods: {
    // 返回
    back() {
      this.$store.commit("getSearch", true);
      this.$store.commit("getSearchShow", false);
    },
    // 点击进入详情
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
.box {
  box-sizing: border-box;
  width: 100vw;
  height: 92vh;
  background: white;
  overflow-y: scroll;
}
.backbtn {
  font-size: 2vw;
  width: 100vw;
  height: 3vh;
  line-height: 3vh;
}
</style>


