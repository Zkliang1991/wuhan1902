<template>
<div>
    <Head title="商品搜索"></Head>
    <van-search  
    placeholder="请输入搜索关键词" 
    v-model.lazy="keyword"
     />
     <List :foots="foots"></List>
</div>
</template>

<script>
export default {
    name:"search",
    data(){
        return{
            keyword:"",
            foots:[]    
        }
    },
    watch:{
        keyword(newVal){
            console.log(newVal);
            this.$axios.get("/vue/getFoots",{
                params:{
                    keyword:newVal
                }
            }).then(res=>{
                this.foots  = res.data.result;
                console.log(this.foots)
            })
        }
    },
    methods:{
        onSearch(){
            console.log("")
        }
    }
}
</script>

