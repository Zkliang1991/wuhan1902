<template>
  
  <footer>

    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" route fixed>
      <van-tabbar-item v-for="(foot,i) in foots" :key="i" :name="foot.name" :to="foot.path">
        <i slot="icon" class="icon iconfont" v-html="foot.icon"></i>
        {{foot.txt}}
      </van-tabbar-item>
    </van-tabbar>
  </footer>
</template>

<script>
export default {
  name: "foot",
  data() {
    return {
      foots: [
        { txt: "首页", path: "/index/home", name: "home", icon: "&#xe601;" },
        {
          txt: "英雄",
          path: "/index/hero",
          name: "hero",
          icon: "&#xe64f;"
        },
        { txt: "战绩", path: "/index/store", name: "store", icon: "&#xe640;" },
        {
          txt: "召唤师",
          path: "/index/summoner",
          name: "summoner",
          icon: "&#xe646;"
        }
      ],
      active: "home"
    };
  }
};
</script>