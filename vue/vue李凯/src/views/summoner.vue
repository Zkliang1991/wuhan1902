<template>
  <div>
    <Heade title="召唤师" :show="true"></Heade>
    <div class="lol-main">
      <div class="top">
        <!-- <van-uploader v-model="fileList" :multiple="false" :max-count="1" upload-text="上传图片" :before-read="kk"/> -->
        <uploadImg></uploadImg>
        <p>{{username}}</p>
        <span class="g">游戏离线</span>
      </div>
      <div class="task">
        <van-row style="background-color:#fcfcfc;padding:5px 0">
          <van-col span="7" style="border-right:1px solid #ddd8d8">
            <van-image width="100" height="100" fit="cover" :src="img"/>
          </van-col>
          <van-col span="15" offset="1">
            <van-tabbar
              :fixed="false"
              :border="false"
              :inactive-color="color"
              style="background-color:#fcfcfc"
            >
              <van-tabbar-item icon="home-o" info="233">
                <i slot="icon" class="icon iconfont">&#xe65f;</i>
                超神
              </van-tabbar-item>
              <van-tabbar-item icon="search" info="1">
                <i slot="icon" class="icon iconfont">&#xe6f9;</i>
                最高连胜
              </van-tabbar-item>
              <van-tabbar-item icon="friends-o" info="99">
                <i slot="icon" class="icon iconfont">&#xe60a;</i>
                MVP
              </van-tabbar-item>
            </van-tabbar>
            <van-tabbar
              :fixed="false"
              :border="false"
              :inactive-color="color"
              style="background-color:#fcfcfc"
            >
              <van-tabbar-item icon="home-o" info="0">
                <i slot="icon" class="icon iconfont">&#xe660;</i>
                五杀
              </van-tabbar-item>
              <van-tabbar-item icon="search" info="233">
                <i slot="icon" class="icon iconfont">&#xe61d;</i>
                三杀
              </van-tabbar-item>
              <van-tabbar-item icon="friends-o" info="9999">
                <i slot="icon" class="icon iconfont">&#xe64e;</i>
                死亡
              </van-tabbar-item>
            </van-tabbar>
          </van-col>
        </van-row>
      </div>
      <div class="task">
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item title="游戏任务一" name="1">
            在一局对战中使用
            <strong>
              <em>疾风剑豪</em>
            </strong>
            击杀数小于1,死亡数大于10,并且获得胜利
          </van-collapse-item>
          <van-collapse-item title="游戏任务二" name="2">
            在一局对战中对方英雄存在
            <strong>
              <em>迅捷斥候</em>
            </strong>
            时,击杀其英雄大于100次,并且获得胜利
          </van-collapse-item>
          <van-collapse-item title="游戏任务三" name="3">
            在一局对战中使用
            <strong>
              <em>魔法猫咪</em>
            </strong>
            击杀数大于10,死亡数小于1,并且获得胜利
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import { aesDecrypt, keys } from "@/utils/index";
import { Toast } from "vant";
import uploadImg from "@/components/uploadImg.vue";
export default {
  data() {
    return {
      img: require("@/assets/images/duanwei.jpg"),
      username: "",
      color: "#1989fa",
      activeName: "0",
      fileList: []
    };
  },
  components: {
    uploadImg
  },
  mounted() {
    let userInfo = window.sessionStorage.userInfo;
    console.log("kk", userInfo);
    console.log(typeof userInfo);
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
      console.log(typeof userInfo);
      this.username = aesDecrypt(userInfo.token, keys);
    }
  },
  updated() {
    // console.log(this.fileList);
  },
  methods: {
    kk() {
      const toast = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: "spinner"
        // message: "倒计时 3 秒"
      });

      let second = 2;
      const timer = setInterval(() => {
        second--;
        if (second) {
          // toast.message = `倒计时 ${second} 秒`;
        } else {
          clearInterval(timer);
          Toast.clear();
        }
      }, 500);
    },
    uploadImg() {}
  }
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 100%;
  font-size: 24px;
  line-height: 28px;
  color: rgb(14, 71, 124);
  font-weight: bolder;
  // background-color: rgb(24, 132, 233);
  // background-image: url(require("@/assets/images/topBg.jpg"));
}
.g {
  font-size: 12px;
  font-weight: normal;
  color: rgb(70, 71, 126);
}
.task {
  padding-top: 10px;
}
#app .van-uploader .van-uploader__wrapper .van-uploader__upload {
  margin: 0;
}
</style>
