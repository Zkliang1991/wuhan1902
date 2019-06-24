
<template>
  <div>

    <Head :title="$route.query.name" :show="true"></Head>
    <div v-if="good.type" class="good">
      <img :src="good.img" alt="" width="100%">
      <h3 style="color: red">{{good.name}}</h3>
      <span>价格 : {{good.price}} / 折扣 {{good.discount }}</span> <br>
      <span> 分类 : {{good.type.text}}</span>
    </div>
    <div>
      <van-stepper v-model="count" input-width="100" />
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon :info="count" icon="cart-o" text="数量" />
      <van-goods-action-button type="warning" text="加入购物车" @click="gotocar" />
      <van-goods-action-button type="danger" text="立即购买" @click="adds" />
    </van-goods-action>

  </div>
</template>
<script>
  import { Toast, Dialog, Notify } from 'vant';
  import { mapState, mapActions } from "vuex"

  export default {
    name: "goods",
    data() {
      return {
        good: "",
        count: 1,
      }
    },
    computed:{
      // ...mapState(['good'])
    },
    methods: {
      // ...mapActions(['gotocar']),
      adds() {
        console.log(this.$route.query)
        this.$router.push({ name: 'myList',query:this.$route.query})

      },
      gotocar() {
        // console.log(this.good)
        this.$axios.post('/vue/gotocar', {

          num: this.count,
          id: this.$route.query.goodId,
          good: JSON.stringify(this.good),

        }).then(res => {
          Notify({
            message: '添加购物车成功',
            duration: 1000,
            background: '#1989fa'
          });
         
        })

      }

    },
    mounted() {
      // console.log(this.$route.params.goodId)
      this.$axios.get('/vue/goodsOne', {
        params: {
          goodId: this.$route.query.goodId,
        }
      }).then(res => {
        // console.log(res.data.result)
        this.good = res.data.result
      })
    }
  }
</script>

<style scoped>
  .good {
    margin-top: 0.93rem;
  }

  .van-stepper {
    position: absolute;
    right: 0.3rem;

    margin-top: 0.41rem;


  }
</style>