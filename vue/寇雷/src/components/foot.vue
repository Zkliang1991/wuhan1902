<template>
    <footer>
        <van-tabbar v-model="active" active-color="#1E90FF" >
            <van-tabbar-item v-for="(foot,i) in foots" :key="i" :name="foot.name" :to="{name:foot.name}">
                <i slot="icon" class="iconfont" v-html="foot.icon" ></i>
                <span>{{foot.txt}}</span>
            </van-tabbar-item>
        </van-tabbar>
    </footer>
</template>


<script>
import {bus} from "@/untils/bus.js"
export default {
    name:"foot",
    data(){
        return {
            active:"home",
            foots:[
                {txt:"首页",path:"/index/home",name:"home",icon:"&#xe63a;"},
                {txt:"分区",path:"/index/select",name:"select",icon:"&#xe661;"},
                {txt:"收藏",path:"/index/active",name:"active",icon:"&#xe662;"},
                {txt:"消息",path:"/index/message",name:"message",icon:"&#xe610;"}
            ]
        }
    },
    mounted(){
      this.active = this.$route.name;

      bus.$on("changeActive",(name)=>{
          this.active = name;
      })
  }
}
</script>


