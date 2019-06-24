<template>
  <header>
    <p class="headp">网易云音乐</p>
    <van-tabs
      :animated="true"
      :duration="0.5"
      v-model="active"
      swipeable
      @click="onClick"
      background="rgba(51,51,51,0.5)"
      title-inactive-color="grey"
      title-active-color="#fff"
      :border="false"
    >
      <van-tab title="发现">
        <find name="find"></find>
      </van-tab>
      <van-tab title="音乐搜索">
        <music></music>
      </van-tab>
      <van-tab title="推荐歌单">
        <musicdan></musicdan>
      </van-tab>
      <van-tab title="个人中心">
        <my :msg="msg" ref="one"></my>
      </van-tab>
    </van-tabs>
    <Foot></Foot>
  </header>
</template>

<script>
import find from "@/views/find.vue";
import my from "@/views/my.vue";
import music from "@/views/music.vue";
import musicdan from "@/views/musicdan.vue";
export default {
  name: "headr",
  data() {
    return {
      active: 0,
      msg: "您还没有收藏过歌曲 请前去搜索收藏哟"
    };
  },
  components: {
    find,
    my,
    music,
    musicdan
  },
  watch: {
    active() {
      if (this.active == 3) {
        this.$axios.get("/vue/mymusic").then(res => {
          this.$store.commit("mymusic", res.data.result);
            if (res.data.result.length >= 1) {
              this.msg = "我的收藏";
            }
          console.log(res.data.result);
        });
      }
    }
  },
  computed: {},
  methods: {
    onClick() {}
  }
};
</script>
<style lang="scss" scoped>
.headp {
  font-size: 0.25rem;
  height: 0.5rem;
  line-height: 0.5rem;
  background-color: rgba(163, 27, 27, 0.8);
}
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>