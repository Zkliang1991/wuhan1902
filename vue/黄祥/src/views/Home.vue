<template>
    <div>
        <Head1 title1="我的书架" :lico="lico" :rico="rico"></Head1>
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
  name: 'home',
   data() {
    return {
      lico:"&#xe78b;",
      rico:"&#xe67c;",
      xh:[],
      isLoading: false,
      tem:[]
    };
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
  mounted(){
      if(sessionStorage.userInfo){
      this.$axios.get("/vue/bookshelf").then(res=>{
        // console.log(res)
        this.tem = res.data.shelf;console.log(this.tem)
        this.tem.forEach((element,index)=>{
          // console.log(element)
          element.cover = (decodeURIComponent(element.cover).replace("/agent/",""))
          this.xh.push(element);
        })
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.van-nav-bar__title {
  color:#fff
}
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

