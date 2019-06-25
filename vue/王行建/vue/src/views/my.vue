<template>
  <!-- <div>
    <Head title="个人中心"></Head>
    <div v-if="isLogin">
      <van-button type="danger" size="small" @click="loginOut" class="goOut">注销</van-button>
      <van-row class="my">
        <uploadImg class="img"></uploadImg>
        <van-col class="user">欢迎您:{{username}}</van-col>
      </van-row>
    </div>
    <van-row v-else type="flex" justify="center">
      <van-button plain hairline type="primary" @click="gotoLogin">马上登录</van-button>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col span="4">收藏夹</van-col>
      <van-col span="4">关注店铺</van-col>
      <van-col span="4">足迹</van-col>
    </van-row>
  </div>-->
  <div class="app">
    <header>
      <van-row class="my">
        <uploadImg class="img"></uploadImg>
        <div class="username">
          <van-col class="user">{{username}}</van-col>
          <i class="iconfont icon-weitao"></i>
          <span class="jin">京享值11172&emsp;></span>
        </div>
        <p class="loginOutBox">
          <span class="login" @click="gotoLogin">注销</span>
        </p>
        <p class="setBox">
          <span class="set" @click="goSetter">设置</span>
        </p>
      </van-row>
    </header>
    <nav>
      <p>
        <span>
          <van-icon name="pending-payment"/>
        </span>
        <span>待付款</span>
      </p>
      <p>
        <span>
          <van-icon name="tosend"/>
        </span>
        <span>待发货</span>
      </p>
      <p>
        <span>
          <van-icon name="logistics"/>
        </span>
        <span>已发货</span>
      </p>
      <p>
        <span>
          <van-icon name="comment-o"/>
        </span>
        <span>待评价</span>
      </p>
    </nav>
    <main>
      <div class="huiyuan">
        <div class="hy">
          <span>铂金会员</span>
          <span>淘气值888</span>
        </div>
        <div class="qy">
          <span>花小积分 兑大权益</span>
          <span>进入我的会员中心</span>
        </div>
        <div class="ali">升级会员</div>
      </div>
      <div class="dingdan">
        <div class="my">
          <span>我的订单</span>
          <span>查看全部订单 ></span>
        </div>
        <menu></menu>
      </div>
    </main>
  </div>
</template>

<script>
import uploadImg from "@/components/uploadImg.vue";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      isLogin: sessionStorage.userInfo
    };
  },
  components: {
    uploadImg
  },
  computed: {
    ...mapState(["username"])
  },
  methods: {
    gotoLogin() {
      this.$router.push({ name: "login" });
    },
    loginOut() {
      sessionStorage.removeItem("userInfo");
      this.$router.push({ name: "login" });
    },
    goSetter() {
      this.$router.push({ name: "setter" });
    },
    ...mapActions(["getUsername"])
  },
  mounted() {
    this.getUsername({
      url: "/vue/getUsername"
    });
  }
};
</script>
<style scoped>
.my {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-top: 0.2rem;
  padding-left: 0.2rem;
}
.img {
  margin-right: 20px;
}
.app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
}
.app header {
  width: 100vw;
  background-color: #f00;
  color: #fff;
}
.app header .jin {
  width: 2.14rem;
  height: 0.44rem;
  border-radius: 0.22rem;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.44rem;
  font-size: 0.2rem;
}
.app header .username {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app header .loginOutBox {
  margin-left: 1.9rem;
  width: 1rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.8rem;
  font-size: 0.25rem;
}
.app header .setBox {
  width: 1rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.8rem;
  font-size: 0.25rem;
}
.app header span .iconfont {
  width: 0.26rem;
  height: 0.22rem;
  font-size: 0.22rem;
  margin-right: 0.09rem;
}
.app main {
  flex: 1;
  background-color: #f2f2f2;
  overflow-y: scroll;
  position: relative;
}
.app nav {
  width: 7.5rem;
  height: 1.81rem;
  background-color: #f00;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.app nav p {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}
.app nav p span:first-child {
  margin-bottom: 0.24rem;
}
.app main .huiyuan {
  width: 7.02rem;
  height: 1.22rem;
  border-radius: 0.18rem;
  background-color: #fff;
  margin: 0 0.24rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.app main .huiyuan .hy {
  width: 1.63rem;
  height: 0.8rem;
  border-right: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.app main .huiyuan .hy span:first-child {
  font-size: 0.28rem;
  color: #d29862;
  margin-bottom: 0.15rem;
}
.app main .huiyuan .hy span:last-child {
  font-size: 0.2rem;
  color: #666666;
}
.app main .huiyuan .qy {
  width: 3.59rem;
  height: 0.7rem;
  display: flex;
  flex-direction: column;
  color: #767676;
  line-height: 0.35rem;
}
.app main .huiyuan .ali {
  width: 2rem;
  height: 0.7rem;
  border-radius: 0.11rem;
  background-color: #f7d0ab;
  color: #8a633e;
  line-height: 0.7rem;
  text-align: center;
  margin-right: 0.2rem;
}
.app main .dingdan {
  width: 7.02rem;
  height: 3.97rem;
  background-color: #fff;
  margin: 0 0.24rem;
  margin-top: 0.24rem;
  border-radius: 0.11rem;
}
.app main .dingdan .my {
  width: 7.02rem;
  height: 0.76rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eeeee7;
}
.app main .dingdan .my span:nth-child(1) {
  font-size: 0.26rem;
  margin-left: 0.24rem;
}
.app main .dingdan .my span:nth-child(2) {
  font-size: 0.26rem;
  color: #b7b7b7;
  margin-right: 0.3rem;
}
.app main .dingdan menu {
  width: 7.02rem;
  height: 1.43rem;
  padding: 0.01rem 0.24rem 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.app main .dingdan menu a {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.app main .dingdan menu img {
  margin-bottom: 0.23rem;
  width: 0.47rem;
  height: 0.38rem;
}
</style>
