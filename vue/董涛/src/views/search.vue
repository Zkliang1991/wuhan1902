<template>
    <div>
        <Head title="搜索" :show="true" ></Head>
        <van-search placeholder="请输入搜索关键词" v-model.lazy="keyword" show-action/>
        <List :goods="goods"  @changegoods="getNewGoods">
            
        </List>
    </div>
</template>


<script>
export default {
    name:"search",
    data(){
        return{
            keyword:"",
            goods:[]
        }
    },
    methods:{
        getNewGoods(data){
            console.log(data);
            this.goods = data;
        }
    },
    watch:{
        keyword(newVal){
            console.log(newVal);
            this.$axios.get("/vue/getGoods",{
                params:{
                    keyword:newVal
                }
            }).then(res=>{
                this.goods  = res.data.result;
                console.log(res);
            })
        }
    }
}
</script>
