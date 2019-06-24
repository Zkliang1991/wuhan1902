<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="(record,i) in Records" :key="i" class="cell">
        <span style="padding:0 10px">{{record.mode}}</span>
        <!-- <span v-if="(record.result == '失败')" style="color:red;">{{record.result}}</span>
        <span v-else-if="(record.result == '胜利')" style="color:green;">{{record.result}}</span>-->
        <span
          :style="record.result == '失败' ? 'color:red;padding:0 10px;' : 'color:green;padding:0 10px;'"
        >{{record.result}}</span>
        <span style="padding:0 10px">{{record.battleDamage}}</span>
        <!-- <router-link :to="{name:'heroItem',query:{name:hero.name}}">{{hero.name}}</router-link> -->
        <span style="padding:0 10px;float:right;">{{record.startTime}}</span>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "recordList",
  data() {
    return {
      // records: [],
      loading: false,
      finished: false
    };
  },
  props: ["value", "Records"],
  computed: {
    records: {
      get() {
        return this.$store.state.records;
      },
      set(val) {
        return (this.$store.state.records = val);
      }
    }
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.records.push(this.records.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.records.length >= 10) {
          this.finished = true;
        }
      }, 3000);
    }
  },
  mounted() {
    //   console.log(this.Records);
    // this.records = this.Records;
    // if(this.value == "全部对战"){
    // }else{
    //     this.records = this.Records.filter(item => item.mode == this.value);
    // }
  },
  updated() {
    console.log("R", this.Records);
    //   this.records = this.Records;
    console.log("r", this.records);
  }
};
</script>

<style lang="scss" scoped>
</style>
