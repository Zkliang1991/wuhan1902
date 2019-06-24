<template>
    <div>
        <Head title="商品搜索" :show="true" ></Head>
        <mt-search
            v-model.lazy="keyword"
            cancel-text="取消"
            placeholder="搜索">
            <List 
            :goods="data.goods" 
            @changegoods="getNewGoods"
            >

            </List>
        </mt-search>
    </div>
</template>

<script>

import {mapState,mapActions} from "vuex";
export default {
    name:"search",

    data(){
        return {
            // keyword:"",
            // goods:[]
        }
    },
    computed:{
        ...mapState(['data']),
        // v-model Object.defineProperty
        keyword:{
            get(){
                return this.$store.state.keyword;
            },
            set(val){
                console.log(val);
                this.$store.commit("getKeyword",val);
            }
        }
    },
    methods:{
        getNewGoods(data){
            console.log(data);
            this.goods = data;
        },
        ...mapActions(['getSearchGoods'])
    },
    watch:{
        keyword(newVal){
            console.log(newVal);
            this.getSearchGoods({
                url:"/vue/getGoods",
                cb(){console.log('search success')},
                params:{
                    keyword:newVal
                }
            })
            // this.$axios.get("/vue/getGoods",{
            //     params:{
            //         keyword:newVal
            //     }
            // }).then(res=>{
            //     this.goods  = res.data.result;
            // })
        }
    }
}
</script>

<style scoped>

.mint-search{
   
}
</style>

