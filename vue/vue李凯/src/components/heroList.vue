<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="(hero,i) in heros" :key="i">
        <router-link :to="{name:'heroItem',query:{name:hero.name}}">{{hero.name}}</router-link>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "heroList",
  data() {
    return {
      heros: [],
      loading: false,
      finished: false
    };
  },
  props: ["type", "allHeros"],
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.heros.push(this.heros.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.heros.length >= 10) {
          this.finished = true;
        }
      }, 1000);
    }
  },
  mounted() {
    const toast = Toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true, // 禁用背景点击
      loadingType: "spinner",
      // message: "倒计时 3 秒"
    });

    let second = 1;
    const timer = setInterval(() => {
      second--;
      if (second) {
        // toast.message = `倒计时 ${second} 秒`;
      } else {
        clearInterval(timer);
        Toast.clear();
        this.heros = this.allHeros.filter(item => item.type == this.type);
      }
    }, 1000);
    // Toast.loading({
    //   mask: false,
    //   message: "加载中...",
    //   forbidClick:true,
    //   loadingType:"spinner",
    // });
  },
  updated() {
    //   this.onLoad();
  }
};
</script>

