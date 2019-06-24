<template>
  <div>
    <div>
      <img class="myp" :src="myphoto" alt="上传头像" @click.stop="uploadImg">
      <input class="hide" ref="one" type="file" accept="image/*" @change="shangchuan">
      <span class="wyy">
        欢迎
        <span class="name">{{name}}</span>来到网易云音乐
      </span>
      <van-button class="out" type="danger" @click="outlogin">退出登陆</van-button>
      <p class="mysc">{{msg}}</p>
      <ul class="mymusic">
        <li v-for="(mym,i) in data.mymusics" :key="i">
          <span class="num">{{i}}</span>
          <img v-lazy="mym.musics.pic" attempt="100">
          <div class="fix">
            <dd>{{mym.musics.author}}</dd>
            <dd>{{mym.musics.title}}</dd>
          </div>
          <span class="play">
            <van-icon name="play-circle" @click="playscMusic(i)"/>
          </span>
          <span class="clear">
            <van-icon name="clear" @click="clear(mym.musics.id)"/>
          </span>
        </li>
        <i class="lost"></i>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { Toast } from "vant";
export default {
  props: ["msg"],
  data() {
    return {
      name: sessionStorage.username,
      myphoto: require("@/assets/img/tm.png")
    };
  },
  name: "my",
  computed: {
    ...mapState(["login", "data"])
  },
  methods: {
    uploadImg() {
      this.$refs.one.click();
    },
    shangchuan() {
      console.log("准备上传");
      let file = this.$refs.one.files[0];
      let data = new FormData();
      data.append("avatar", file);
      this.$axios({
        url: "/vue/uploadAvatar",
        method: "POST",
        contentType: false,
        processData: false,
        data: data
      }).then(res => {
        console.log(res);
        this.myphoto = res.data.avatarurl.replace(/public/, "");
        // localStorage.myphoto = this.myphoto
      });
    },
    clear(id) {
      this.$axios.post("/vue/clear", { id }).then(res => {
        console.log(res);
        if (res.data.type == 1) {
          this.$axios.get("/vue/mymusic").then(res => {
            this.$store.commit("mymusic", res.data.result);
            Toast.success({
              duration: 300,
              message: "删除成功"
            });
          });
        }
      });
    },
    ...mapMutations(["outlogin", "playscMusic"])
  },
  mounted() {
    this.$axios.get("/vue/photo").then(res => {
      console.log(res);
      if (res.data.result[0].avatar) {
        this.myphoto = res.data.result[0].avatar.replace(/public/, "");
      } else {
        this.myphoto = require("@/assets/img/nophoto.jpg");
      }
      console.log(this.myphoto);
    });
    console.log(this.data.mymusics);
    if (!sessionStorage.Usertoken) {
      // this.$axios.get("/vue/mymusic").then(res => {
      //   console.log(res);
      //   this.myscMusic = res.data.result;
      // });
      this.$router.push({ name: "login" });
    }
  }
};
</script>
<style scoped>
.myp {
  width: 1.6rem;
  height: 1.6rem;
  margin: 0 auto;
  border-radius: 50%;
}
.mymusic {
  height: 7.34rem;
  overflow: auto;
}
.mymusic li {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.25rem;
  background-color: rgba(128, 128, 128, 0.2);
}
.mymusic li .num {
  height: 0.9rem;
  line-height: 0.9rem;
}
.mymusic li img {
  width: 1rem;
  height: 1rem;
  border-radius: 10%;
}
.mymusic li dd {
  line-height: 0.5rem;
  font-size: 0.25rem;
  margin: 0.03rem 0 0 0.25rem;
  text-align: left;
  width: 3.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mymusic li span {
  margin: 0.1rem;
}
.mysc {
  height: 0.6rem;
  line-height: 0.6rem;
  color: rgba(10, 206, 231, 0.795);
}
.lost {
  height: 0.5rem;
  display: block;
}
.play {
  color: rgba(33, 145, 5, 0.6);
  height: 1rem;
  line-height: 1rem;
  font-size: 0.65rem;
}
.clear {
  height: 1rem;
  line-height: 1rem;
  font-size: 0.65rem;
}
.hide {
  display: none;
}
.name {
  font-size: 0.3rem;
  color: gold;
  margin: 0 0.1rem;
}

.wyy {
  color: rgb(65, 194, 26);
  margin: 0.08rem 0;
  display: block;
}
</style>


