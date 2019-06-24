<template>
  <div>
    <div id="fixit">
      <!-- <Head2 title2="搜索" :lico="lico" :rico="rico"></Head2> -->
      <div id="searchbar">
        <i class="iconfont" v-html="lico" @click="back"></i>
        <input ref="one" type="text" name="" id="inp" placeholder="请输入搜索关键词">
        <span id="searchtap" @click="onSearch">搜索</span> 
      </div>
    </div>

    <List :xh="xh"></List>
  </div>
</template>

<script>
import List from "@/components/list.vue";
import {mapState} from "vuex";


export default {
  name: "search",
  data() {
    return {
      lico:"&#xe669;",
      rico:"",
      xh: [],
      tem:[]
    };
  },
  computed:{

  },
  methods: {
    onSearch() {
      this.xh = [];
      if (this.$refs.one.value) {
        // console.log(this.$refs.one.value)
        this.$axios
          .get("/vue/novels", {
            params: {
              keyword: this.$refs.one.value
            }
          })
          .then(res => {
            this.tem = res.data.result;
            this.tem.forEach((element)=>{
            // console.log(element)
              element.cover = (decodeURIComponent(element.cover).replace("/agent/",""))
              this.xh.push(element)
            });
          });
      }
    },
    back(){
      history.go(-1)
    }
  },
  watch: {

  },
  components:{
      List
  }
};
</script>

<style lang="scss" scoped>
.iconfont{
  float: left;
  margin-left: 5px;
}
#fixit{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
}
#searchbar{
  background:#FFFDE4;
  padding: 10px;
  overflow: hidden;
  line-height: 30px;
}
#inp{
  margin-left: 25px;
  width: 70%;
  height: 30px;
  float: left;
  text-indent: 10px;
  border: 2px solid #777;
  border-radius: 10px;
}
</style>

