<template>
    <footer>
        <van-tabbar v-model="active" class="cent" >
            <van-tabbar-item v-for="(foot,i) in foots" :key="i" :to="foot.name">
                <p class="icon iconfont" v-html="foot.icon"></p>
                {{foot.txt}}
            </van-tabbar-item>
        </van-tabbar>
        <!-- <div v-for="(foot,i) in foots" :key="i">
            <router-link :to="{name:foot.name}">
                <i class="icon iconfont" v-html="foot.icon"></i>
                <span > {{foot.txt}}</span>
            </router-link>
        </div> -->
    </footer>
</template>

<script>
// import { bus } from '@/uilt/bus'

export default {
    data(){
        return{
            foots:[
                {txt:"首页",path:"/index/home",name:"home",icon:"&#xe610;"},
                {txt:"分类",path:"/index/fenlei",name:"fenlei",icon:"&#xe62f;"},
                {txt:"购物车",path:"/index/shpping",name:"shpping",icon:"&#xe63c;"},
                {txt:"我",path:"/index/my",name:"my",icon:"&#xe60b;"}
            ],
            //  
             active:0,
             
        }
    },
    methods:{
        fi(){

            const id=this.foots.findIndex(foot=>this.$route.name==foot.name);
            this.active=id;
        }
    },
    mounted(){
        const id=this.foots.findIndex(foot=>this.$route.name==foot.name)
        this.active=id;
        console.log(id)
        bus.$on("gaolactive",(name)=>{
            const id=this.foots.findIndex(foot=>name==foot.name)
            // console.log(id)
            this.active=id;
        })
    }

}
</script>
<style>
    .cent{
        text-align: center
    }
    p{
        padding-bottom:10px;
    }
    
</style>
