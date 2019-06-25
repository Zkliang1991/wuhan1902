<template>
  <div>
    <Head title="商品详情"></Head>
    <div v-if="good">
      <img :src="good.img" alt style="width:100%;height:6rem">
      <h1>{{good.name}}</h1>
      <p>价格:{{good.price}}</p>
      <p>风格:{{good.type.text}}</p>
      <van-stepper v-model="numbre" integer/>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon1"/>
        <van-goods-action-icon :info="goodnum" icon="cart-o" text="购物车" @click="onClickIcon2"/>
        <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton1"/>
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton2"/>
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
        numbre: 1,
        goodnum:"",
    };
  },
  mounted() {
    var goodId = this.$route.params;
    this.$store.dispatch("goodId", goodId);
    this.$store.dispatch("getgoods");
  },
  computed: {
    ...mapState(["good","buycar"])
  },
  watch: {
    buycar(data){
        var num=0;
        this.buycar.map((item,i)=>num+=item.count)
        this.goodnum=num;
    }
  },
  methods: {
    onClickIcon1() {},
    onClickIcon2() {
      this.$router.push({ name: "buycar" });
    },
    onClickButton1() {
      var goodone = { goodone: this.good, count: this.numbre };
      this.$store.dispatch("addToCar", goodone);
    },
    onClickButton2() {}
  }
};
</script>
<style lang="scss" scoped>
h1 {
  font-size: 0.4rem;
}
p {
  font-size: 0.3rem;
}
img {
  width: 100vw;
}
</style>
