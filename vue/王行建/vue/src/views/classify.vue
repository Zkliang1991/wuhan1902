<template>
  <div>
    <Head title="商品分类"></Head>
    <van-tabs class="classify">
      <van-tab :id="type.value" v-for="(type,i) in data.types" :key="i" :title="type.text">
        <classifyList :type="type"></classifyList>
      </van-tab>
    </van-tabs>
    <div class="box"></div>
  </div>
</template>

<script>
import classifyList from "@/components/classify-list.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "classify",
  components: {
    classifyList
  },
  data() {
    return {
      active: 0
    };
  },
  computed: {
    ...mapState(["data"])
  },
  methods: {
    ...mapActions(["getAllGoods", "getGoodTypes"])
  },
  created() {
    this.getGoodTypes({
      url: "/vue/getGoodTypes"
    });
  },
  mounted() {
    this.getAllGoods({
      url: "/vue/getGoodsData"
    });
  }
};
</script>
<style scoped>
.classify {
  margin-top: 0.8rem;
}
.box {
  width: 100%;
  height: 1.6rem;
}
</style>


