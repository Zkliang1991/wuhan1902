<template>
    <div>
        <Head title="个人中心"></Head>
        <scimg class="tuimg"></scimg>
        <van-button type="info" @click="login">马上登录</van-button>
        <Swipe  id="movie" :swiperOptions="options">
            <SwipeItem v-for="(m,i) in newMv" :key="i">
                <img :src="m.images.large" alt="" width="100%" height="200">
            </SwipeItem>
        </Swipe>
    </div>
</template>

<script>
import { Toast } from 'vant';
import scimg from "@/components/scimg.vue";
import {mapState,mapActions,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState([
            'data'
        ]),
        ...mapGetters([
            'newMv'  
        ])
    },
    data(){
        return{
            options:{
                loop:true,
                autoplay:true,
                speed:1500,
                effect : 'cube',
                /* slideShadows: true,
                shadow: true,
                shadowOffset: 100,
                shadowScale: 0.6 */
            },
            // mv:[]
        }
    },
    components:{
        scimg
    },
    methods:{
        login(){
            this.$router.push({name:'login'})
        },
        ...mapActions(['getMv']),
    },
    mounted(){
        this.$axios.get("/vue/movie",{  //axois里面获取数据要加params:{}
            params:{
                limit:10
            }
        }).then(res=>{
            console.log(res);
            setTimeout(() => {
                Toast('数据引入成功');
            }, 1000);
            // console.log(this.mv=res.data.result)
            // 将回调延迟到下次 DOM 更新循环之后执行 在修改数据之后立即使用它，然后等待 DOM 更新
            this.$nextTick(()=>{
                // this.mv=res.data.result;
                // console.log(res.data.result)
                this.getMv(res.data.result)
            })
        })
    }
}
</script>

<style>
    .tuimg{
        position: absolute;
        top:1rem;
        left: 10%;
    }
</style>


