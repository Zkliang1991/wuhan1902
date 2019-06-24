<template>
    <div>
        <span>宝贝评价({{this.lists.length}})</span> 
        <van-tabs 
        v-model="active"
        >
        <van-tab title="图片评论">
            <span style = "color:#999">该功能暂未对黄金会员开放...</span>
        </van-tab>
        <van-tab 
        title="文字评论" 
        v-for = "(list,i) in lists" 
        :key = "i" 
        >
            <!-- 文字评论 -->
           <div  class = "box">
               <div>
                   <div style = "height:6rem">
                        <img :src="list.touxiang" alt="" style = 'width:3rem;height:3rem;border-radius:50%'>
                        <span style = "position:absolute;left:60px;top:60px"> {{list.nickname}} <i style = "color:red">黄金会员</i></span>
                        <p style = "color:#999;position:absolute;right:0;top:44px">评论时间:{{list.time}}</p>
                   </div>
                <div>
                    <div class = 'rate'>
                        <van-rate
                        class = 'rate_noe'
                        v-model="list.value"
                        icon="like"
                        :size="25"
                        readonly 
                        allow-half 
                        void-icon="like-o"
                        color = "red"
                        />
                     </div>
                     <div id = "content">
                        <p>评论内容:</p>
                        
                            <span style = "color:#999">{{ list.content }}...</span>
                        
                     </div>
                    
                </div>
           </div>
           </div>
        </van-tab>
        </van-tabs>
        <!-- shadow -->
        <Shadow></Shadow>
        <div class="blank"></div>
    </div> 
</template>

<script>
import { Tab, Tabs } from 'vant';
import { Rate } from 'vant';
import { mapState, mapMutations } from "vuex";
import  Shadow from './shadow.vue';
import {bus} from '@/utils/bus.js';
export default {
    name:'comment',
    components:{
        Shadow
    },
    data() {
        return {
        active:2,
        value:1,
        value:4.5,
        };
    },
    computed:{
        ...mapState(['detailGds','lists']),
    },
    mounted(){
        this.$axios.get('/vue/commentData',{
            params:{
                goodId:this.$route.params.keyword
            }
        }
        ).then(res=>{
            // console.log(res.data.result);
            this.$store.commit('changeLists',res.data.result)
        });
        // 监听carFoot传来的点击事件
        bus.$on('addComment',()=>{
            shadow.style.display = "block";
        })
    },
    methods: {
        ...mapMutations(['changeLists']),
    }
}
</script>

<style scoped>
    .box{
        overflow:scroll;
    }
    .rate{
        position:absolute;
        right:0
    }
    .van-toast--text{
        min-width:100px;
        min-height:50px;
    }
    #content{
        position:absolute;
        left:0;
        top:84px;
        overflow:auto;
    }
    .rate[data-v-a0559e02]{
        bottom:18px;
    }
    .blank{
        height:100px;
    }
</style>
