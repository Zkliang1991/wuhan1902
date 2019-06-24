<template>
  <div class="about">
    <Header title="商品列表"></Header>
    <div>
      <div v-for="(a,i) in arr" :key="i">
        <div class="aejin animated bounceInUp">
          <router-link :to="{name:'xiangqing',query:{id:a.id}}">
            <img :src="a.img" alt="">
            <!-- <p class="biaoti">{{a.name}}</p> -->
            <van-notice-bar :text="a.name" left-icon="volume-o" />
            <p class="jiage">$ = {{a.price}} 元</p>
          </router-link>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  export default {
    data() {
      return {
        arr: []
      }
    },
    mounted() {
      this.$axios.get("/vue/goodsidarr").then(res => {
        console.log(res)
        this.arr = res.data.result
      })
    }

  }
</script>
<style lang="scss" scoped>
  .about {
    padding-top: 46px;
  }

  img {
    width: 100vw;
    height: 50vh;
  }

  .baioti {
    width: 100vw;
    height: 10vh;
    line-height: 10vh
  }

  .jiage {
    line-height: 30px;
    border-top: 2px dashed rgb(158, 22, 22);
    border-bottom: 2px dashed rgb(158, 22, 22);
    margin: 5px 0;
    /* padding-left: 30px; */
    text-align: center;
    font-size: 20px;
    background-color: rgb(167, 228, 152);
  }


  .aejin {
    animation: bounceInUp 1.8s
  }
</style>