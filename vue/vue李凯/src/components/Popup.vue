<template>
  <van-popup v-model="show" position="left" :overlay="true">
    <van-nav-bar right-text="返回" @click-right="onClickRight"></van-nav-bar>
    <!-- <router-link :to="{name:'summoner'}" >
    <van-image width="100" height="100" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
    </router-link>-->
    <div class="lol-main">
      <a href="javascript:;" @click="close">
        <van-image
          width="100"
          height="100"
          fit="cover"
          :src="userPic"
          style="border-radius:50%;border:2px solid #ccc;overflow:hidden;"
        />
      </a>
      <!-- <van-cell title="活动中心" style="text-align:left;" icon="send-gift-o"/>
    <van-cell title="我的订单" style="text-align:left;" icon="bill-o"/>
    <van-cell title="我的任务" style="text-align:left;" icon="completed"/>
      <van-cell title="我的收藏" style="text-align:left;" icon="bookmark-o"/>-->
      <van-row>
        <van-col offset="4" span="10">
          <van-cell title="与我相关" style="text-align:left;" icon="envelop-o"/>
        </van-col>
      </van-row>
      <van-row>
        <van-col offset="4" span="10">
          <van-cell title="活动中心" style="text-align:left;" icon="send-gift-o"/>
        </van-col>
      </van-row>
      <van-row>
        <van-col offset="4" span="10">
          <van-cell title="我的订单" style="text-align:left;" icon="bill-o"/>
        </van-col>
      </van-row>
      <van-row>
        <van-col offset="4" span="10">
          <van-cell title="我的任务" style="text-align:left;" icon="completed"/>
        </van-col>
      </van-row>
      <van-row>
        <van-col offset="4" span="10">
          <van-cell title="我的收藏" style="text-align:left;" icon="bookmark-o"/>
        </van-col>
      </van-row>
    </div>
  </van-popup>
</template>

<script>
import { bus } from "@/utils/bus";
export default {
  data() {
    return {
      show: false
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
    onClickRight() {
      this.show = false;
    },
    close() {
      this.$router.push({ name: "summoner" });
      this.show = false;
      console.log(false);
    }
  },
  mounted() {
    if (localStorage.userPic) {
      this.userPic = localStorage.userPic;
    } else {
      this.userPic = require("@/assets/images/duanwei.jpg");
    }

    bus.$on("changeShow", show => {
      this.show = show;
    });
  },
  updated() {
    console.log(this.$route);
    console.log(this.$router);
  }
};
</script>

<style lang="scss" scoped>
.van-popup--left {
  width: 80%;
  height: 100%;
}
</style>
