<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <ul>
        <li v-for="(good,i) in goods" :key="i" class="item">
          <Item :good="good"></Item>
        </li>
      </ul>
    </van-pull-refresh>
  </div>
</template>
<script>
import Item from "./Item.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "classifyList",
  data() {
    return {
      isLoading: false,
      goods: this.$store.state.data.allGoods.filter(
        item => item.type.value == this.type.value
      )
    };
  },
  computed: {
    ...mapState(["data"])
  },
  components: {
    Item
  },
  props: {
    type: Object
  },
  methods: {
    onRefresh() {
      this.$axios
        .get("/vue/getGoodsByTypes", {
          params: {
            type: this.type.value
          }
        })
        .then(res => {
          setTimeout(() => {
            this.goods = res.data.result.reverse();
            this.$toast("刷新成功");
            this.isLoading = false;
          }, 500);
        });
    }
  }
};
</script>


<style scoped>
.item {
  width: 3rem;
  height: 5rem;
  float: left;
  box-sizing: border-box;
  margin: 0 0.3rem 0 0.4rem;
  text-align: center;
}
</style>
