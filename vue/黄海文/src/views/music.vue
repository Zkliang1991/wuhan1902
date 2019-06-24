<template>
  <div>
    <van-search
      background="orange"
      v-model="changeMuisc"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <ul class="musics" :key="menuKey">
      <li v-for="(music,i) in data.musics" :key="i">
        <span class="sc">
          <van-icon name="star" @click="csmusic(i)"/>
        </span>
        <span class="play">
          <van-icon name="play-circle" @click="playMusic(i)"/>
        </span>
        <img v-lazy="music.pic" attempt="100">
        <div class="right">
          <p>{{music.author}}</p>
          <p>{{music.title}}</p>
        </div>
      </li>
    </ul>
    <img class="img" :src="data.scimg[0]" alt>
    <img class="img" :src="data.scimg[1]" alt>
    <img class="img" :src="data.scimg[2]" alt>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { Toast } from "vant";
import { setTimeout } from "timers";
export default {
  name: "music",
  data() {
    return {
      menuKey: 1
    };
  },
  watch: {
    data() {
      setTimeout(() => {
        ++this.menuKey;
      }, 400);
      setTimeout(() => {
        ++this.menuKey;
      }, 1000);
    }
  },
  methods: {
    onSearch() {
      if (this.changeMuisc !== "" && this.changeMuisc !== null) {
        this.$http
          .get("https://api.mlwei.com/music/api/wy/", {
            params: {
              key: 523077333,
              id: this.changeMuisc,
              type: "so",
              cache: 1,
              nu: 8
            }
          })
          .then(res => {
            console.log(res);
            Toast.success({
              duration: 500,
              message: "ok"
            });
            this.$store.commit("setMusic", res.data.Body);
          }),
          error => {
            console.error(error);
          };
      } else {
        Toast({
          text: "展示图片",
          icon: require("@/assets/img/musiclogo.jpg")
        });
      }
    },
    csmusic(i) {
      this.$axios
        .post("/vue/shoucang", {
          username: sessionStorage.username,
          musics: this.data.musics[i]
        })
        .then(res => {
          console.log(res);
          if (res.data.result.type == 1) {
            Toast.success({
              duration: 900,
              message: "收藏成功"
            });
          } else {
            Toast.success({
              duration: 900,
              message: "请勿收藏第二次"
            });
          }
        });
    },
    ...mapActions(["searchMusic"]),
    ...mapMutations(["playMusic"])
  },
  computed: {
    ...mapState(["data", "musiclogo"]),
    changeMuisc: {
      get() {
        return this.$store.state.changeMuisc;
      },
      set(val) {
        this.$store.commit("changeMuisc", val);
      }
    }
  },
  mounted() {}
};
</script>
<style scoped>
.musics li {
  height: 1.12rem;
  margin: 0.11rem 0.3rem;
  font-size: 0.2rem;
}
.musics img {
  width: 1.1rem;
  height: 1.1rem;
  float: left;
  border-radius: 20%;
}
.musics .right p {
  line-height: 0.56rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  padding: 0 0.5rem;
}
.play {
  float: right;
  color: rgba(15, 207, 198, 0.6);
  line-height: 1.22rem;
  font-size: 0.75rem;
  margin-right: 0.5rem;
}
.sc {
  float: right;
  color: rgba(158, 29, 29, 0.6);
  line-height: 1.22rem;
  font-size: 0.75rem;
  margin-right: 0.5rem;
}
.img {
  width: 100%;
}
</style>


