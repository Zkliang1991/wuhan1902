<template>
  <div>
   <!-- 轮播 -->
   <van-swipe :autoplay="2000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" style = 'width:100%;height:280px' />
    </van-swipe-item>
    </van-swipe>
    <div>
      <van-notice-bar color = "#f00" background = "#fff7cc"
        text="[天猫618]大牌狂欢,衣服,限时抢购,跨店满300减30,上不封顶,还有更多优惠!天猫理想生活狂欢季,全民'嗨'购!"
        left-icon="volume-o"
      />
      <HomeList></HomeList>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>

import {mapState,mapMutations} from 'vuex';
import HomeList from '@/components/homeList.vue';
export default {
  name: 'home',
  components:{
    HomeList
  },
  data() {
    return {
      images:[     
            require("@/assets/images/mv2.jpg"),
            require("@/assets/images/mv3.jpg"),
            require("@/assets/images/mv4.jpg"),
            require("@/assets/images/mv5.jpg"),
           
      ]
    }
  },
  computed:{
    ...mapState(['data'])
  },
  methods:{
    ...mapMutations([
            'changeTitle',
            'getGds'
        ]),

  },
  mounted(){
    this.$store.commit('changeTitle','首页');
    this.$axios.get('/vue/getGds')
    .then(res=>{
      // console.log(res);
      this.$store.commit('getGds',res.data.result);
    })
    // console.log(this.data.allGds)
  }

}
</script>

<style scoped>
  
</style>

