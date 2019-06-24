<template>
    <div>
        <Head title="个人中心"></Head>
        <div class="tou">
            <!-- <div class="mor"></div> -->
            <uploadimg class="mor"></uploadimg>
            <span class="den" @click="denlu">{{innHtml}}</span>
        </div>
         <div class="jge">
             <van-row gutter="20">
                <van-col  span="6" v-for="(tt,i) in nav" :key="i"><span @click="tofen">{{tt.txt}}</span></van-col>
            </van-row>
         </div>
         <div class="bai">
                <van-row type="flex" justify="space-between">
                    <van-col span="6" v-for="(na,ind) in tnav" :key="ind">
                         <i  class="iconfont" v-html="na.icon"></i>
                         {{na.txt}}  
                    </van-col>
                   
                </van-row>
         </div>
         <div class="lunbo">
                
             <van-swipe :autoplay="3000" vertical class="keb" :show-indicators='false'>
               <van-swipe-item v-for="(img,index) in images" :key="index">
                <img v-lazy="img"  class="sha"  alt="">
               </van-swipe-item>
            </van-swipe>

         </div>
    </div>
</template>
<script>
import uploadimg from "@/components/uploadimg.vue"
export default {
    naem:"my",
    data(){
        return{
            nav:[
                {txt:"我的足迹"},
                {txt:"我的订单"},
                {txt:"我的评价"},
                {txt:"收货地址"},
            ],
            innHtml:"",

            tnav:[
                {txt:"待付款",icon:"&#xe778;"},
                {txt:"待收货",icon:"&#xe61c;"},
                {txt:"喜欢的",icon:"&#xe615;"},
                {txt:"白嫖",icon:"&#xe67f;"}
            ],
            images:[
                require('@/assets/images/1.jpg'),
                require('@/assets/images/2.jpg'),
                require('@/assets/images/3.jpg'),
                require('@/assets/images/4.jpg'),
              ]
        }
    },
    methods:{
        denlu(){
            if(!localStorage.username) {
                this.$router.push({name:'login'})
            }
                
            
                
           
        },
        tofen(){
            this.$router.push({name:'classify'});
        }
    },
    components:{
        uploadimg
    },
    mounted(){
        console.log(localStorage)
        this.innHtml = localStorage.username ? localStorage.username : "登录注册";
    }
}
</script>

<style lang="css" scoped>
.tou{
    width: 100%;
    height: 3rem;
    padding-left:0.8rem; 
    display: flex;
    flex-direction:row;
    justify-content:flex-start;
}
.mor{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-top:0.3rem; 
    
}
.tou .den{
    width: 1rem;
    height: 0.3rem;
    text-align: center;
    line-height: 0.31rem;
    color: blueviolet;
    font-size:0.22rem; 
    margin-left:0.25rem;
    margin-top: 0.72rem; 
    border: 1px solid #566;
    border-radius:45%; 
}
.jge{
    color: slategray;
    padding-left:0.15rem;
    padding-bottom: 0.6rem;
}
.bai{
    text-align: center;
    padding-bottom: 0.68rem;
}

.lunbo{
    height: 6.2rem;
}
.lunbo .keb{
    width: 100%;
    height: 6.2rem;
}
.lunbo .keb .sha{
    width: 100%;
    height: 100%;
}
</style>

