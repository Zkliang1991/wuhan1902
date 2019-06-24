<template>
  <div>
    <Head1 title1="书城" :lico="lico" :rico="rico"></Head1>

    <van-tabs v-model="active" animated>
        <van-tab title="玄幻"> 
          <Banner :fmimg="maleimg"></Banner>
          <Xuanhuan style="margin-bottom:80px"></Xuanhuan>
        </van-tab>
        <van-tab title="都市"> 
          <Banner :fmimg="femaleimg"></Banner>
          <Dushi style="margin-bottom:80px"></Dushi>
        </van-tab>
        <van-tab title="灵异"> 
          暂无数据
        </van-tab>
        <van-tab title="修真"> 
          暂无数据
        </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import Xuanhuan from "@/components/xuanhuan.vue"
import Dushi from "@/components/dushi.vue"
import {mapState,mapActions} from "vuex";

export default {
    props:["sel"],
  data() {
    return {
      active:"0",
      lico: '',
      rico: '&#xe67c;',
      
    }
  },
  computed:{
    ...mapState([
      "maleimg",
      "femaleimg"
    ])
  },
  components:{
    Xuanhuan,
    Dushi,
  }
}
</script>

<style lang="scss" scoped>
.van-tabs--line .van-tabs__wrap {
    // z-index: 10;
    // position: fixed;
    // top: 45px;
}
.van-nav-bar {
    // position: fixed;
    // top: 0;
    // left: 0;
    // width: 100%;
}
van-nav-bar{
  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}

</style>