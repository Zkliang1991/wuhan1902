<template>
  <div>
    <div class="zhuceTop">
      <img :src="zhuceLogo" alt>
    </div>
    <van-tabs
      :animated="true"
      :duration="0.5"
      swipeable
      @click="onClick"
      background="rgba(51,51,51,0.5)"
      title-inactive-color="grey"
      title-active-color="#fff"
      :border="false"
    >
      <van-tab title="用户名注册">
          <user></user>
      </van-tab>
      <van-tab title="手机号注册">
        <phone></phone>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { mapState } from "vuex";
import phone from "@/components/phone.vue";
import user from "@/components/user.vue";
export default {
  name: "zhuce",
  components: {
    phone,
    user
  },
  computed: {
    ...mapState(["zhuceLogo"])
  },
  methods: {
    onClick() {}
  }
};
</script>
<style scoped>
.zhuceTop img {
  width: 100%;
  height: 3rem;
}
</style>
