<template>
  <van-popup v-model="rankshow" position="top" :overlay="false">
    <div class="box">
      <!-- 排行返回 -->
      <van-button class="backbtn" type="danger" @click="back">返回</van-button>
      <van-tabs class="tabs" type="card">
        <!-- 阅读榜 -->
        <van-tab title="阅读排行 ↓">
          <van-list>
            <van-cell v-for="(read,i) in readrank" :key="i">
              <div
                style="float:left;height: 15vh;font-size:6vw;line-height:15vh;margin:0 3vw;"
              >{{i+1}}</div>
              <div style="float:left;height:15vh;width:20vw;margin-right:1vw;">
                <img :src="read.img" alt width="100%" height="100%" :onerror="errImg">
              </div>
              <div style="float:left;height: 15vh;width:40vw">
                <p>{{read.title}}</p>
                <p>
                  <van-tag
                    v-for="(tag,i) in read.catalog.split(' ').splice(0,read.catalog.split(' ').length-1)"
                    plain
                    :key="i"
                    type="danger"
                    style="margin-right:1vw;"
                  >{{tag}}</van-tag>
                </p>
              </div>
              <div
                style="float:right;height: 15vh;box-sizing:border-box;width:16vw;text-align:center;padding-top:2vh"
              >
                <p>阅读量</p>
                <p>{{read.reading}}</p>
                <p></p>
              </div>
            </van-cell>
          </van-list>
        </van-tab>
        <!-- 收藏榜 -->
        <van-tab title="收藏排行 ↓">
          <van-list>
            <van-cell v-for="(col,i) in colrank" :key="i">
              <div
                style="float:left;height: 15vh;font-size:6vw;line-height:15vh;margin:0 3vw;"
              >{{i+1}}</div>
              <div style="float:left;height:15vh;width:20vw;margin-right:1vw;">
                <img :src="col.img" alt width="100%" height="100%" :onerror="errImg">
              </div>
              <div style="float:left;height: 15vh;width:40vw">
                <p>{{col.title}}</p>
                <p>
                  <van-tag
                    v-for="(tag,i) in col.catalog.split(' ').splice(0,col.catalog.split(' ').length-1)"
                    plain
                    :key="i"
                    type="danger"
                    style="margin-right:1vw;"
                  >{{tag}}</van-tag>
                </p>
              </div>
              <div
                style="float:right;height: 15vh;box-sizing:border-box;width:16vw;text-align:center;padding-top:2vh"
              >
                <p>收藏量</p>
                <p>{{col.colnum}}</p>
                <p></p>
              </div>
            </van-cell>
          </van-list>
        </van-tab>
        <!-- 评论榜 -->
        <van-tab title="评论排行 ↓">
          <van-list>
            <van-cell v-for="(dis,i) in disrank" :key="i">
              <div
                style="float:left;height: 15vh;font-size:6vw;line-height:15vh;margin:0 3vw;"
              >{{i+1}}</div>
              <div style="float:left;height:15vh;width:20vw;margin-right:1vw;">
                <img :src="dis.img" alt width="100%" height="100%" :onerror="errImg">
              </div>
              <div style="float:left;height: 15vh;width:40vw">
                <p>{{dis.title}}</p>
                <p>
                  <van-tag
                    v-for="(tag,i) in dis.catalog.split(' ').splice(0,dis.catalog.split(' ').length-1)"
                    plain
                    :key="i"
                    type="danger"
                    style="margin-right:1vw;"
                  >{{tag}}</van-tag>
                </p>
              </div>
              <div
                style="float:right;height: 15vh;box-sizing:border-box;width:16vw;text-align:center;padding-top:2vh"
              >
                <p>评论量</p>
                <p>{{dis.disnum}}</p>
                <p></p>
              </div>
            </van-cell>
          </van-list>
        </van-tab>
      </van-tabs>
    </div>
  </van-popup>
</template>
<script>
export default {
  name: "ranking",
  data() {
    return {
      errImg: 'this.src="' + require("@/assets/err.jpeg") + '"'
    };
  },
  computed: {
    // 排行页显隐
    rankshow: {
      get() {
        return this.$store.state.ranking.show;
      },
      set(val) {
        this.$store.state.ranking.show = val;
      }
    },
    // 阅读页显隐
    readrank: {
      get() {
        return this.$store.state.ranking.readrank;
      },
      set(val) {
        this.$store.state.ranking.readrank = val;
      }
    },
    // 收藏页显隐
    colrank: {
      get() {
        return this.$store.state.ranking.colrank;
      },
      set(val) {
        this.$store.state.ranking.colrank = val;
      }
    },
    //评论排行
    disrank: {
      get() {
        return this.$store.state.ranking.disrank;
      },
      set(val) {
        this.$store.state.ranking.disrank = val;
      }
    }
  },
  methods: {
    // 返回
    back() {
      this.$store.commit("getRankShow", false);
    }
  }
};
</script>
<style scoped>
.box {
  padding-top: 5vh;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: white;
  position: relative;
  overflow-y: scroll;
  padding-bottom: 5vh;
}
.backbtn {
  position: fixed;
  top: 95vh;
  width: 100vw;
  height: 5vh;
  line-height: 5vh;
  z-index: 100;
}
.minibox {
  float: left;
  height: 15vh;
}
</style>


