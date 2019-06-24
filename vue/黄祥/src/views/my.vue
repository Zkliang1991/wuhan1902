<template>
    <div>
        <Head2 title2="我的" :lico="lico" :rico="rico"></Head2>

        <div>
            <div v-if="!isLogin">
                <h2>请先登录</h2>
                <van-button type="primary" size="large" @click="tologin">登录</van-button>
                <van-button type="info" size="large" @click="toregiste">注册</van-button>
            </div>
            <div v-else id="my_body">
                <Uploadimg></Uploadimg>
                <div>
                  <van-button type="danger" id="quit" @click="toquit">注销</van-button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {mapActions} from "vuex";
import Uploadimg from "@/components/uploadImg.vue"

export default {
   data() {
    return {
      lico:"&#xe669;",
      rico:"",
      isLogin:sessionStorage.userInfo,
    };
  },
  methods: {
    ...mapActions([
      'tologin',
      'toregiste'
    ]),
    back(){
      history.go(-1)
    },
    toquit(){
      // this.$axios("/quit").then(res=>{
        // console.log(res)
        sessionStorage.userInfo = "",
        this.$router.push({name:"login"})
      // })
    },
  },
  components:{
    Uploadimg
  }
}
</script>

<style lang="scss" scoped>
#my_body{
    padding: 20px;
    overflow: hidden;
}
h2{
    margin: 30% 0 10% 0;
    font-size: 30px;
}
.van-button--large {
    width: 90%;
    margin: 5px
}

#quit{
  margin-top: 50px;
  width: 80%;
}
</style>
