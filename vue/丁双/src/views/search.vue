<template>
    <div>
        <Head></Head>
        <form action="/">
            <van-search placeholder="请输入搜索关键词" v-model="value" @input = 'searchGds()' />
        </form>
        <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
        <List></List>
    </div>
</template>

<script>
import  {mapState,mapMutations, mapActions} from 'vuex';
import List from "./list.vue";
export default {
    components:{
        List
    },
    computed:{
        ...mapState(['allGds'])
    },
    data() {
    return {
        value:'',
        value1: 0,
        value2: 'a',
        option1: [
            { text: '全部商品', value: 0 },
            { text: '新款商品', value: 1 },
            { text: '活动商品', value: 2 }
        ],
        option2: [
            { text: '默认排序', value: 'a' },
            { text: '好评排序', value: 'b' },
            { text: '销量排序', value: 'c' },
        ]
    }
  },
    computed:{
        ...mapState(['data'])
    },
    methods:{
        // 获取搜索商品
        searchGds(){
           this.$axios.get('/vue/getGds',
           {
               params:{
                   keyword:this.value
               }
           }
           )
            .then(res=>{
                console.log(res);
                this.$store.commit('getGds',res.data.result)
            })
        }
    },
    mounted(){
        this.$store.commit('changeTitle','搜索');
        this.$axios.get('/vue/getGds').then(res=>{
            this.$store.commit('getGds',res.data.result)
        })
    },
 
}
</script>
