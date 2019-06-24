<template>
    <div class = "box">
        <div class = 'one' v-for = "(allGd,i) in data.allGds" :key = "i">
            <router-link :to = '{name:"detail",params:{keyword:allGd.id}}'>
                <img :src="allGd.img" alt="" style = 'width:100%;height:180px;border-radius:8px'>
            </router-link>  
            <div>
                <p>{{allGd.title}}</p>
                <p style = "color:#f00">价格￥RMB: {{ allGd.price }}元  /  正品 / 全场假一赔十</p>
            </div>
        </div>
        <div class="blank"></div>
    </div>
    
</template>

<script>
import {mapState} from 'vuex';
export default {
  name:'homeList',
  computed:{
    ...mapState(['data'])
  },
  mounted(){
    //   console.log(this.allGds)
  }
}
</script>

<style scoped>
    .one{
      width:45%;
      float:left;
      margin-left:3.3%;
    }
    .blank{
        width:100%;
        float:left;
        height:54px;
    }
</style>

