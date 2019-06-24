<template>
    <div>
      <div>
        <van-notice-bar color = "#f00" background = "#fff7cc"
        text="[天猫618]大牌狂欢,衣服,限时抢购,跨店满300减30,上不封顶,还有更多优惠!天猫理想生活狂欢季,全民'嗨'购!"
        left-icon="volume-o"
      />
      </div>
      <Buycar></Buycar>
      <Foot></Foot>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
import Buycar from '@/components/buycar.vue';
export default {
    name:'cart',
    components:{
      Buycar
    },
    data(){
      return {
        cartAllGoods:[]
      }
    },
    methods:{
      ...mapMutations([
      'changeTitle'
    ])
  },
  mounted(){
    this.$store.commit('changeTitle','购物车');
    this.$axios.get('/vue/getAllGoods')
    .then(res=>{
      this.cartAllGoods = res.data.result;
    })
  },
}
</script>

