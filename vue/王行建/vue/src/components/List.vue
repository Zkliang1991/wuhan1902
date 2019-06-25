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
export default {
  name: "list",
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    Item
  },
  props: {
    goods: {
      type: Array
    },
    type: Object,
    allGoods: Array
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  }
};
</script>
<style scoped>
.item {
  width: 3rem;
  height: 6rem;
  float: left;
  box-sizing: border-box;
  margin: 0 0.3rem 0 0.4rem;
  text-align: center;
}
</style>







