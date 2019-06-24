<template>
    <footer id="footer">
       <van-tabbar v-model="active">
            <van-tabbar-item v-for="(foot,i) in foots" :key='i' :name="foot.name">
                <i slot="icon" class="iconfont" v-html="foot.icon"></i>
                 {{foot.txt}}  
            </van-tabbar-item>
          
        </van-tabbar>
   </footer>
</template>
<script>
import {bus} from "@/utils/bus"
export default {
    data(){
        return{
            active:"home",
              foots:[
                {txt:"首页",path:"/index/home",name:"home",icon:"&#xe62a;"},
                {txt:"分类",path:"/index/classify",name:"classify",icon:"&#xe778;"},
                {txt:"购物车",path:"/index/cart",name:"cart",icon:"&#xe614;"},
                {txt:"我",path:"/index/my",name:"my",icon:"&#xe60c;"}
            ]
        }
    },
    watch:{
        active(newval){
            this.$router.push({name:newval})
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

<style scoped>

 
</style>


