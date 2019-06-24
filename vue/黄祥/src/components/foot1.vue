<template>
  <div>
    <van-tabbar v-model="active">

        <van-tabbar-item :name="foots[0].name" :icon="foots[0].icon" :id="foots[0].name" :to="foots[0].name">
          <i slot="icon" class="iconfont" v-html="foots[0].icon"></i>
          {{foots[0].txt}}
        </van-tabbar-item>
   
        <van-tabbar-item :name="foots[1].name" :icon="foots[1].icon" :id="foots[1].name" :to="foots[1].name">
          <i slot="icon" class="iconfont" v-html="foots[1].icon"></i>
          {{foots[1].txt}}
        </van-tabbar-item>
     
        <van-tabbar-item :name="foots[2].name" :icon="foots[2].icon" :id="foots[2].name" :to="foots[2].name">
          <i slot="icon" class="iconfont" v-html="foots[2].icon"></i>
          {{foots[2].txt}}
        </van-tabbar-item>
        
    </van-tabbar>
  </div>
</template>

<script>
import {bus} from '@/utils/bus'
import routes from "vue-router"
export default {
    data(){
        return{
        active: "home",
        foots: [
                { txt: "书架", path: "/home", name: "home", icon: "&#xe60c;" },
                { txt: "书城",path: "/classify",name: "classify",icon: "&#xe647;"},
                { txt: "排行榜", path: "/rank", name: "rank", icon: "&#xe610;" },
            ],
        }
    },
     watch: {

    },
    mounted() {
    // console.log(this.$route); //this.$route 获取当前路由信息
    this.active = this.$route.name;

    bus.$on("changeact",(name)=>{
        this.active = name
    })
  }
}
</script>
