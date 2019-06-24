<template>
  <div>
    <Heade title="战绩" :show="true"></Heade>
    <div class="lol-main">
      <van-field
      readonly
      clickable
      label="模式"
      :value="value"
      placeholder="选择对战模式"
      @click="showPicker = true"
    />
    <RecordList :value="value" :Records="Records"></RecordList>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    </div>
    
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      value: "",
      showPicker: false,
      columns: ["全部对战"],
      Records: []
    };
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
      console.log(value);
      if (value === "全部对战") {
        this.$axios.get("/lol/getAllRecords").then(res => {
          console.log(res);
          this.Records = res.data.result;
        });
        toast();
      } else {
        this.$axios
          .get("/lol/getRecordByModes", {
            params: {
              value: this.value
            }
          })
          .then(res => {
            console.log(res);
            this.Records = res.data.result;
          });
          toast();
      }
      this.$store.dispatch("changeRecords", this.Records);
    }
  },
  created() {
    this.$axios.get("/lol/getRecordTypes").then(res => {
      console.log(res);
      var arr = this.columns.concat(res.data.result);
      this.columns = arr;
      console.log(this.columns);
    });
  },
  mounted() {
    this.$axios.get("/lol/getAllRecords").then(res => {
      console.log(res);
      this.Records = res.data.result;
    });
    toast();
  }
};

function toast() {
  const toast = Toast.loading({
    duration: 0, // 持续展示 toast
    forbidClick: true, // 禁用背景点击
    loadingType: "spinner",
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
  }, 700);
}
</script>

<style lang="scss" scoped>
#app {
  // text-align: left;
}
</style>
