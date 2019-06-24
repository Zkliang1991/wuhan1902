<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-row gutter="20">
        <van-col span="8" v-for="(m,i) in xh" :key="i">
          <router-link :to="{name:'bookInt',params:{bookid:m._id},query:{name:m.title}}" class="item">
            <img :src="m.cover" alt="" width="100%" height="150px">
            <p id="tit">{{m.title}}</p>
            <p id="aut">{{m.author}}</p>
          </router-link>
        </van-col>
      </van-row>
    </van-pull-refresh>
  </div>
</template>

<script>

export default {
  data(){
    return{
      xh:[],
      isLoading: false,
      tem:[]
    }
  },
  computed:{

  },
  methods:{
    onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.xh.reverse()
        }, 500);
    },
  },
  created(){
    this.xh = [];
    this.tem = [];
    this.$axios.get("/vue/novels",{
      params:{
        keyword:"都市",
        limit:20,
      }
    }).then(res=>{
      this.tem = res.data.result;
      this.tem.forEach((element,index)=>{
      // console.log(element)
        element.cover = (decodeURIComponent(element.cover).replace("/agent/",""))
        this.xh.push(element)
      })
    })
  },
}
</script>

<style lang="scss" scoped>
.van-col--8 {
    margin-top: 15px;
}
#tit{
  font-size: 16px;
  color: #000;
  margin:5px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
#aut{
  font-size: 14px;
  color: #777;
}
</style>




