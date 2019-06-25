<template>
  <div>
    <Head title="地址编辑"></Head>
    <div class="address">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-set-default
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import areaList from "../utils/data.js";
import { Notify } from "vant";
export default {
  data() {
    return {
      areaList,
      searchResult: []
    };
  },
  methods: {
    onSave(content) {
      var myMsg = content;
      this.$axios.post("/vue/address", myMsg).then(res => {
        Notify({
          message: res.data.msg,
          duration: 1000,
          background: "#1989fa"
        });
        if (!!res.data.type) {
          this.$router.push({ path: "/address" });
        }
      });
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>

<style scoped>
.address {
  margin-top: 0.8rem;
}
</style>
