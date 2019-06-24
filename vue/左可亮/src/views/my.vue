<template>
    <div>
        <Head title="个人中心" ></Head>
        <h2> my 个人中心 ... </h2>
        <div v-if="isLogin">
            <uploadImg></uploadImg>
            <h2> username == ??? </h2>
        </div>
        <div v-else>
           <mt-button type="danger" @click="gotoLogin">马上登录</mt-button>
        </div>
        <Swipe  id="banner" :swiperOptions="options">
            <SwipeItem v-for="(b,i) in banners" :key="i">
                <img :src="b" alt="" width="100%" height="200">
            </SwipeItem>
        </Swipe>
         <Swipe  id="movie" :swiperOptions="options">
            <SwipeItem v-for="(m,i) in newMv" :key="i">
                <img :src="m.images.large" alt="" width="100%" height="200">
            </SwipeItem>
        </Swipe>
    </div>
</template>

<script>
import { Indicator ,Toast} from 'mint-ui';
import uploadImg from "@/components/uploadImg.vue"

import {mapState,mapActions,mapGetters} from "vuex"

export default {
    computed:{
        ...mapState([
            'data'  // this.$store.state.data
        ]),
        ...mapGetters([
            'newMv'
        ])
    },
    data(){
        return {
            isLogin:sessionStorage.userInfo,
            options:{
                loop:true,
                autoplay:true,
                speed:1500,
            },
            banners:[
                require("@/assets/images/img1.jpg"),
                require("@/assets/images/img2.jpg"),
                require("@/assets/images/img3.jpg"),
                require("@/assets/images/img4.jpg"),
            ],
            // mv:[]
        }
    },
    methods:{
        gotoLogin(){
            this.$router.push({name:'login'})
        },
        ...mapActions(['getMv'])
    },
    components:{
        uploadImg
    },
    mounted(){
        Indicator.open({
            text: '加载中...',
            spinnerType: 'triple-bounce'
        });

        this.$axios.get("/vue/movie",{
            params:{
                limit:8
            }
        }).then(res=>{
            console.log(res);
            setTimeout(()=>{
                Indicator.close();
                Toast({
                    message: '请求成功',
                    iconClass: 'icon iconfont icon-success',
                    duration:500
                });
            },1000);
            
           
            // 将回调延迟到下次 DOM 更新循环之后执行 在修改数据之后立即使用它，然后等待 DOM 更新
            this.$nextTick(()=>{
                // this.mv = res.data.result;
                this.getMv(res.data.result);
                console.log("下一次DOM 更新之后再执行 promise ")
            })
        })
    }
}
</script>
