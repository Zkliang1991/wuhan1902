<template>
  <div>
    <Head title="设置"></Head>
    <div class="setBox">
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item title="个人中心" name="1">
          <van-row type="flex" justify="space-between">
            <van-col span="4">
              <span>头像</span>
            </van-col>
            <van-col span="4">
              <uploadImg class="img"></uploadImg>
            </van-col>
          </van-row>
          <van-row type="flex" justify="space-between" class="username">
            <van-col span="4">
              <span>用户名</span>
            </van-col>
            <van-col span="4">{{username}}</van-col>
          </van-row>
          <van-row type="flex" justify="space-between" class="nickName">
            <van-col span="4">
              <span>昵称</span>
            </van-col>
            <van-col span="4">游客1</van-col>
          </van-row>
          <van-row type="flex" justify="space-between" class="sex">
            <van-col span="4">
              <span>性别</span>
            </van-col>
            <van-col span="4">男</van-col>
          </van-row>
        </van-collapse-item>
        <van-collapse-item title="地址管理" name="2">
          <van-address-list v-model="chosenAddressId" :list="myMsg" @add="onAdd"/>
        </van-collapse-item>
        <van-collapse-item title="功能反馈" name="3">
          <van-row>
            <textarea class="text" placeholder="请提交内容" v-model="cbMsg"></textarea>
            <van-button type="primary" size="large" @click="send">发送</van-button>
          </van-row>
        </van-collapse-item>
        <van-collapse-item title="关于APP" name="4">V.0.1</van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>
<script>
import uploadImg from "@/components/uploadImg.vue";
import { mapState, mapActions } from "vuex";
import { Notify } from "vant";
export default {
  name: "setter",
  data() {
    return {
      activeName: "1",
      chosenAddressId: "0"
    };
  },
  components: {
    uploadImg
  },
  computed: {
    ...mapState(["username", "myMsg"]),
    cbMsg: {
      get() {
        return this.$store.state.cbMsg;
      },
      set(val) {
        this.$store.commit("submitMsg", val);
      }
    }
  },
  methods: {
    ...mapActions(["getAddressMsg", "getUsername"]),
    onAdd() {
      this.$router.push({ path: "/addressEdit" });
    },
    send() {
      var content = this.$store.state.cbMsg;
      console.log(content);
      this.$axios
        .post("/vue/submitMsg", {
          content
        })
        .then(res => {
          Notify({
            message: res.data.msg,
            duration: 1000,
            background: "#1989fa"
          });
        });
    }
  },
  created() {
    this.getAddressMsg({
      url: "/vue/getAddressMsg"
    });
  },
  mounted() {
    this.getUsername({
      url: "/vue/getUsername"
    });
  }
};
</script>
<style scoped>
.setBox {
  margin-top: 0.85rem;
}
.username {
  margin-top: 0.3rem;
}
.nickName {
  margin-top: 0.3rem;
}
.sex {
  margin-top: 0.3rem;
}
.text {
  width: 92vw;
  height: 5rem;
}
</style>
