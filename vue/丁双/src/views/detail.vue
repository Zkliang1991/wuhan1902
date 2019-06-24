<template>
    <div>
        <Head></Head>
        <div>
            <img :src="detailGds[0].img" alt="" width='100%' height='240px'>
            <h2>{{detailGds[0].title}} </h2>
            <p>分类: {{ detailGds[0].type.text }}</p>
            <p> 商品ID : {{ detailGds[0].id }}   /  月销量:{{detailGds[0].xiaoliang}} 万件</p>
           
            <p style="color:#f00">￥RMB:{{detailGds[0].price}} 元  / 正品 / 新品  折扣: {{ detailGds[0].pingjia }}</p> 
        </div>
        <div>
            <comment></comment>
        </div>
        <CartFoot :detailGds = detailGds ></CartFoot>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import CartFoot from '@/components/cartFoot.vue';
import Comment from '@/components/comment.vue';
export default {
    name:'detail',
    components:{
        CartFoot,
        Comment
    },
    data(){
        return {
            value:'',
        }
    },
    computed:{
        ...mapState(['detailGds'])
    },
    methods:{
        ...mapMutations(['changeTitle','changeDetailGds']),
    },
    mounted(){
        this.$store.commit('changeTitle','商品详情');
        this.$axios.get('/vue/getGds',
           {
               params:{
                   keyword:this.$route.params.keyword
               }
           }
           )
            .then(res=>{
                // console.log(res.data.result);
                this.$store.commit('changeDetailGds',res.data.result);
            })
    }
}
</script>

<style scoped>
    .parent{
        height:10px;
    }
    .right{
        float:right;
    }
    .right>van-field{
        text-align:center;
        display:inline-block;
    }
</style>

