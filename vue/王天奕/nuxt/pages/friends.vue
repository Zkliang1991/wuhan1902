<template>
  
  <div>
    <van-tabs type="card" >
  <van-tab title="个人信息" >
    
    <Zhongxin />
    
    </van-tab>
  <van-tab title="登录"  >
    <Login />
  </van-tab>
  <van-tab title="注册"  >
    <Zuche />
  </van-tab>
</van-tabs>


  </div>
</template>
<script>

import Login from "~/components/login.vue"
import Zuche from "~/components/zuche.vue"
import Zhongxin from '~/components/zhongxin.vue'
export default {
  components: {
      Zhongxin,
      Login,
      Zuche
  },
  data() {
    return {
      
      flag:true,
    };
  },
  methods:{

  }
}
</script>
