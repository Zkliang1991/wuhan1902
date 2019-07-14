<template>
  <div>
    <!-- 上半部分 -->
    <div class="top">
      <!-- 头像部分  根据登录状态完美显隐切换 -->
      <img class="headimg" v-if="!!headimg ? false : true" src="@/assets/head.jpg" alt>
      <img class="headimg" v-else :src="headimg" alt>
      <div
        v-if="(userid && !headimg) ? true : false"
        class="headimg"
        @click.stop="uploadImg"
        style="font-size:1vw;line-height:25vw;color:#8f8f8f"
      >
        点击上传头像
        <input type="file" ref="one" accept="image/*" @change="shangchuan" v-show="false">
      </div>
      <!-- 用户名部分 ----点击进入登录页面 -->
      <p class="title" v-if="userid ? false : true" @click="goUsers">点击此处登录</p>
      <p class="title" v-else>{{userid}}</p>
    </div>
    <!-- 下半部分----暂时一个功能---剩下的还在想---想到什么做什么 -->
    <van-cell @click="goMyDis" title="我的评论"/>
  </div>
</template>
<script>
import { Uploader } from "vant";
export default {
  name: "my",
  data() {
    return {
      // uploadshow: false
    };
  },
  computed: {
    // 用户名
    userid: {
      get() {
        return this.$store.state.my.userid;
      },
      set(val) {
        this.$store.state.my.userid = val;
      }
    },
    // 头像
    headimg: {
      get() {
        return this.$store.state.my.headimg;
      },
      set(val) {
        this.$store.state.my.headimg = val;
      }
    }
  },
  mounted() {
    // 载入时当userid不存在时才加载
    if (!this.userid) {
      this.$store.dispatch("addMyUserId", { url: "/vue/my" });
    }
  },
  methods: {
    //点击登录
    goUsers() {
      this.$store.commit("getUserShow", true);
    },
    //上传头像
    uploadImg() {
      this.$refs.one.click(); //DOM对象 click
    },
    shangchuan() {
      console.log("准备上传");
      let file = this.$refs.one.files[0]; //需要上传图片
      let data = new FormData(); //新建 表单对象   <from></from>
      data.append("avatar", file);
      this.$store.dispatch("addHeadImg", {
        url: "/vue/getheadimg",
        type: "POST",
        contentType: false,
        processData: false,
        data: data
      });
    },
    //进入我的评论
    goMyDis() {
      this.$store.dispatch("addMyDisAjax", { url: "/vue/mydis" });
    }
  }
};
</script>
<style scoped>
.top {
  position: relative;
  width: 100vw;
  height: 28vh;
  background-image: url(../assets/back.jpg);
  background-size: 100%;
  box-sizing: border-box;
  padding-top: 3vh;
  text-align: center;
}
.top .headimg {
  border: 2px solid white;
  position: absolute;
  width: 25vw;
  height: 25vw;
  border-radius: 50%;
  left: 50%;
  transform: translate(-50%);
}
.top .title {
  color: white;
  width: 100vw;
  position: absolute;
  bottom: 3vh;
}
</style>

