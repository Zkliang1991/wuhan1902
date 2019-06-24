<template >
  <div class="head">
    <van-nav-bar
      :title="title"
      left-text
      :right-text="rightText"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <!-- <van-icon name="search" slot="left"/> -->
      <van-image
        class="kk"
        width="0.80rem"
        height="0.80rem"
        :src="userPic"
        slot="left"
        style="border-radius:50%;border:1px solid #ccc;overflow:hidden;position:absolute;left:0;top:0;"
      />
    </van-nav-bar>
  </div>
</template>

<script>
import { bus } from "@/utils/bus";
import { aesDecrypt, keys } from "@/utils/index";
export default {
  name: "heade",
  props: ["title"],
  data() {
    return {
      rightText: "请登录"
      // userPic:""
    };
  },
  computed: {
    userPic: {
      get() {
        return this.$store.state.userPic;
      },
      set(val) {
        return (this.$store.state.userPic = val);
      }
    }
  },
  methods: {
    onClickLeft() {
      bus.$emit("changeShow", true);
    },
    onClickRight() {
      let userInfo = window.sessionStorage.userInfo;
      // console.log("kk", userInfo);
      if (userInfo) {
      } else {
        this.$router.push({ name: "login" });
      }
    }
  },
  created() {
    let userInfo = window.sessionStorage.userInfo;
    // console.log("kk", JSON.parse(userInfo));
    // console.log(typeof userInfo)

    if (userInfo) {
      this.rightText = "已登录";
    }
  },
  mounted() {
    // bus.$on("changeLogin", code => {
    //   console.log(typeof code);
    //   if (code == 200) {
    //     this.rightText = "已登录";
    //   }
    // });
    // if (localStorage.userPic) {

    //   this.userPic = localStorage.userPic;
    // } else {
    //   console.log(window.localStorage);
    //   this.userPic = require("@/assets/images/duanwei.jpg");
    // }
    let userInfo = JSON.parse(window.sessionStorage.userInfo);
    var username = aesDecrypt(userInfo.token, keys);
    console.log(username);
    this.$axios.get("/lol/getUserPic", { params: { username } }).then(res => {
      console.log(res.data.result.userPic);
      if (res.data.result.userPic) {
        var userPic = res.data.result.userPic;
        this.userPic = userPic.replace(/public/, "http://localhost:2333/");
      } else {
        this.userPic = require("@/assets/images/duanwei.jpg");
      }
    });
  },
  updated() {}
};
</script>

<style lang="scss" scoped>
#app .van-nav-bar__left {
  position: relative;
  top: 2px;
}

// #app .van-nav-bar__left .van-image{
//     line-height: 46px;
// }

// #app .van-nav-bar__left .van-image img{
//     width: 30px;
//     height: 30px;
// }
</style>
