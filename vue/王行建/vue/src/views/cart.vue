<template>
  <div class="cartPar">
    <Head title="购物车" class="carBox"></Head>
    <div v-if="data.carGoods.length>0" class="goodsBox">
      <van-card
        v-for="(g,i) in data.carGoods"
        :key="i"
        :num="g.count"
        :price="g.good.price"
        :desc="g.good.type.text"
        :title="g.good.name"
        :thumb="g.good.img"
        :thumb-link="http+g.goodId"
      >
        <div slot="footer" class="foot">
          <van-checkbox v-model="g.check" class="check"></van-checkbox>
          <van-stepper v-model="g.count" @change="onChange(g.count,g.goodId)"/>
          <van-button class="del" size="mini" @click="deleteGood(g.goodId)">删除</van-button>
        </div>
      </van-card>
      <div class="box"></div>
      <div>
        <van-submit-bar :price="money" button-text="提交订单">
          <van-checkbox v-model="checkedAll">全选</van-checkbox>
          <span slot="tip">
            你的收货地址不支持同城送,
            <span @click="changeAddr">修改地址</span>
          </span>
        </van-submit-bar>
      </div>
    </div>
    <div v-else>
      <p class="isNull">您还未添加商品到购物车</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Notify } from "vant";
export default {
  name: "cart",
  data() {
    return {
      number: 0,
      money: 0,
      // http: "http://localhost:8080/#/good/"
      http: "http://182.92.171.203/projects/vue/#/good/detail/"
    };
  },
  computed: {
    ...mapState(["data"]),
    checkedAll: {
      get() {
        var flag = true;
        this.money = 0;
        this.$store.state.data.carGoods.forEach(item => {
          if (!item.check) {
            flag = false;
          } else {
            this.money += item.count * item.good.price * 100;
          }
        });
        return flag;
      },
      set(newVal) {
        this.$store.state.data.carGoods.forEach(item => {
          item.check = newVal;
        });
      }
    }
  },
  methods: {
    ...mapActions(["showCarData", "deleteGood", "changeGoodsData"]),
    deleteGood(goodId) {
      this.$axios.post("/vue/removeGoodsData", { goodId }).then(res => {
        const index = this.$store.state.data.carGoods.findIndex(
          index => index.goodId == res.data.goodId
        );
        this.$store.state.data.carGoods.splice(index, 1);
        Notify(res.data.msg);
      });
    },
    onChange(count, goodId) {
      this.$axios.post("/vue/changeGoodsData", { count, goodId }).then(res => {
        console.log(res);
      });
    },
    changeAddr() {
      this.$router.push({ path: "/address" });
    }
  },
  mounted() {
    this.showCarData({
      url: "/vue/showCarData"
    });
  }
};
</script>
<style scoped>
.isNull {
  position: absolute;
  left: 33%;
  top: 50%;
  color: #f00;
}
.foot {
  background-color: #fff;
  height: 50px;
}
.check {
  float: left;
  margin-top: 3px;
}
.del {
  float: right;
}
.goodsBox {
  height: 100%;
  margin-top: 0.9rem;
}
.box {
  width: 100%;
  height: 2.5rem;
}
</style>
<style scoped>
.cartPar {
  user-select: none;
}
.van-submit-bar {
  bottom: 1rem;
}
</style>
