<template>
  <div>
    <Head :title="$route.query.name"></Head>
    <div v-if="data.goodsOne.type" class="goodsBox">
      <img :src="data.goodsOne.img" alt width="100%" height="260px">
      <van-cell-group>
        <van-cell>
          <div class="goods-title">{{ data.goodsOne.name }}</div>
          <h2>型号:{{data.goodsOne.type.text}}</h2>
          <div class="goods-price">￥{{ data.goodsOne.price }}</div>
          <van-row type="flex" justify="left">
            数量:
            <van-stepper v-model="number" integer/>
          </van-row>
        </van-cell>
        <van-cell class="goods-express">
          <van-col span="10">包邮</van-col>
          <van-col span="14">剩余：456</van-col>
        </van-cell>
      </van-cell-group>
      <van-cell-group class="goods-cell-group">
        <van-cell value="进入店铺" icon="shop-o" is-link>
          <template slot="title">
            <span class="van-cell-text">我的店</span>
            <van-tag class="goods-tag" type="danger">官方</van-tag>
          </template>
        </van-cell>
        <van-cell title="线下门店" icon="location-o" is-link/>
      </van-cell-group>

      <van-cell-group class="goods-cell-group">
        <van-cell title="查看商品详情" is-link/>
      </van-cell-group>
    </div>
    <div class="box"></div>
    <van-goods-action>
      <van-goods-action-button type="warning" text="加入购物车" @click="addToCar"/>
      <van-goods-action-button type="danger" text="立即购买" @click="gotoBuy"/>
    </van-goods-action>
  </div>
</template>

<script>
import { Notify } from "vant";
import { mapState, mapActions } from "vuex";
export default {
  name: "goodDetail",
  data() {
    return {
      number: 1
    };
  },
  computed: {
    ...mapState(["data"])
  },
  methods: {
    ...mapActions(["getGoodOne"]),
    addToCar() {
      this.$axios
        .post("/vue/addToCar", {
          count: this.number,
          goodId: this.$route.params.goodId,
          good: JSON.stringify(this.$store.state.data.goodsOne),
          money: this.$store.state.data.goodsOne.price
        })
        .then(res => {
          Notify({
            message: res.data.msg,
            duration: 1000,
            background: "#1989fa"
          });
        });
    },
    gotoBuy() {
      this.$axios
        .post("/vue/addToCar", {
          count: this.number,
          goodId: this.$route.params.goodId,
          good: JSON.stringify(this.$store.state.data.goodsOne),
          money: this.$store.state.data.goodsOne.price
        })
        .then(res => {
          this.$router.push({ name: "cart" });
        });
    }
  },
  mounted() {
    this.getGoodOne({
      url: "/vue/getGoodOne",
      params: {
        goodId: this.$route.params.goodId
      }
    });
  }
};
</script>

<style scoped>
div {
  font-size: 16px;
}
.goods-price {
  color: #f00;
}
.goodsBox {
  margin-top: 0.8rem;
}
.box {
  width: 100%;
  height: 1rem;
}
.goods-title {
  font-size: 20px;
  font-weight: bold;
}
</style>


