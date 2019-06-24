<template>
  <div>
    <Head :title="title" />
    <nuxt />
    <Foot />
  </div>
</template>

<script>

import Head from '~/components/head.vue'
import Foot from '~/components/foot.vue'
export default {
  data(){
    return{
      
      title:''
    }
  },
  components: {
    Head,
    Foot
  },
  
  watch:{
    $route(to,from){
      
              if(to.path=='/search'){
                this.title="搜索"
              }else if(to.path=='/cart'){
                this.title="购物车"
              }else if(to.path=='/classify'){
                this.title="分类"
              }else if(to.path=='/friends'){
                this.title="个人中心"
              }else if(to.path=='/zuche'){
                 this.title="注册"
              }else{
                this.title="首页"
              }
  }
},

}
</script>
