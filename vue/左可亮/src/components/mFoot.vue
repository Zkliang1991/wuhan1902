<template>
    <footer>
        <!-- <mt-tab-container v-model="selected">
            <mt-tab-container-item v-for="(foot,i) in foots" :key="i" :id="foot.name">
                {{foot.path}}
            </mt-tab-container-item>
        </mt-tab-container> -->
        <mt-tabbar v-model="selected">
            <mt-tab-item v-for="(foot,i) in foots" :key="i" :id="foot.name">
                <mt-badge type="error" v-if="i==2" class="hot"  >{{carNum}}</mt-badge>
                <i slot="icon" class="icon iconfont" v-html="foot.icon"></i>
                {{foot.txt}}            
            </mt-tab-item>
        </mt-tabbar>
    </footer>
</template>


<script>
import {bus} from "@/utils/bus"
import {mapState,mapMutations} from "vuex"
export default {
    name:"Mfoot",
    data(){
        return {
            foots:[
                {txt:"首页",path:"/index/home",name:"home",icon:"&#xe62a;"},
                {txt:"分类",path:"/index/classify",name:"classify",icon:"&#xe778;"},
                {txt:"购物车",path:"/index/cart",name:"cart",icon:"&#xe614;"},
                {txt:"我",path:"/index/my",name:"my",icon:"&#xe60c;"}
            ],
            // selected:'home'
        }
    },
    methods:{
        ...mapMutations(['changeSele'])
    },
    computed:{
        ...mapState(['carNum']),
        selected:{
            get(){
                return this.$store.state.selected.sele
            },
            set(val){
                console.log(val);
                 this.changeSele(val);
            }
        }
    },
    watch:{
        selected(newVal){
            console.log(newVal);
            this.$router.push({name:newVal})
        }
    },
    mounted(){
        console.log(this.$route);
        // this.selected = this.$route.name;
        this.changeSele(this.$route.name);

        // bus.$on("changeActive",(name)=>{
        //     this.selected = name;
        // })

    }
}
</script>


<style lang="scss" scoped>
footer{
}
</style>