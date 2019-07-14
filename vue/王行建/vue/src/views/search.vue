<template>
  <div>
    <Head title="搜索"></Head>
    <form action="/" v-if="flag" class="search">
      <van-search v-model="keyword" placeholder="请输入搜索关键词" show-action @cancel="onCancel"/>
    </form>
    <List :goods="data.searchGoods" v-if="keyword!==''"></List>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "search",
  data() {
    return {
      flag: true
    };
  },
  computed: {
    ...mapState(["data"]),
    keyword: {
      get() {
        return this.$store.state.keyword;
      },
      set(val) {
        this.$store.commit("getKeyword", val);
      }
    }
  },
  methods: {
    onCancel() {
      this.flag = !this.flag;
    },
    ...mapActions(["getSearchGoods"])
  },
  watch: {
    keyword(newVal) {
      this.getSearchGoods({
        url: "/vue/getGoodsData",
        params: {
          keyword: newVal
        }
      });
    }
  }
};
</script>
<style scoped>
.search {
  margin-top: 0.8rem;
}
</style>


