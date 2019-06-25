<template>
  <footer>
    <div v-for="(foot,i) in foots" :key="i">
      <router-link :to="{name:foot.name}">
        <i class="icon iconfont" v-html="foot.icon"></i>
        <span>{{foot.txt}}</span>
      </router-link>
    </div>
  </footer>
</template>


<script>
export default {
  data() {
    return {
      foots: [
        { txt: "首页", path: "/index/home", name: "home", icon: "&#xe603;" },
        {
          txt: "分类",
          path: "/index/classify",
          name: "classify",
          icon: "&#xe641;"
        },
        // { txt: "发现", path: "/index/msg", name: "msg", icon: "&#xe605;" },
        { txt: "购物车", path: "/index/cart", name: "cart", icon: "&#xe602;" },
        { txt: "我的", path: "/index/my", name: "my", icon: "&#xe64d;" }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
footer {
  position: fixed;
  width: 100%;
  height: 0.9rem;
  left: 0;
  bottom: 0;
  background: #fff;
  display: flex !important;
  z-index: 100;
  div {
    flex: 1;
    height: 0.9rem;
    a {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: 0.06rem 0;
      text-align: center;
      font-family: "微软雅黑";
      color: #999;
      position: relative;
      i {
        width: 100%;
        height: 0.45rem;
        line-height: 0.45rem;
        font-size: 0.42rem !important;
      }
      span {
        width: 100%;
        height: 0.35rem;
        line-height: 0.35rem;
        font-size: 0.26rem;
      }
      .hot {
        position: absolute;
        top: 0;
        left: 60%;
        display: inline;
      }
    }
    .nav-active,
    .router-link-exact-active {
      color: #f00;
      border-color: #f00;
    }
  }
}
</style>