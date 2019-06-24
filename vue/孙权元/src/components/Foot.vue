<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item v-for="(foot,i) in foots" :key="i" :name="foot.name">
            <i class="icon iconfont" v-html="foot.icon"></i>
            <p>{{foot.txt}}</p>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name:"Foot",
    computed:{
        
    },
    data(){
        return {
            
             foots:[
                {txt:"首页",path:"/index/home",name:"home",icon:"&#xe62a;"},
                {txt:"分类",path:"/index/classify",name:"classify",icon:"&#xe778;"},
                {txt:"购物车",path:"/index/cart",name:"cart",icon:"&#xe614;"},
                {txt:"我",path:"/index/my",name:"my",icon:"&#xe60c;"}
            ],
        }
    },
    computed:{
        active:{
            get(){
                return this.$store.state.active
            },
            set(val){
                //this.$store.state.active = this.$route.name;
                this.$store.state.active = val
                this.$router.push({name:val})
            }
        }
    },
    watch:{
        active(val){
             this.$store.state.active = val
        }
    }
    
}



</script>
