<template>
    <div v-if="show">
        <Head title="商品分类"></Head>
         <van-tabs v-model="active">
            <van-tab v-for="(type,i) in types" :title="type.text" :key="i">
               
                   <List
                    :type = "type"
                    allGoods = "allGoods"
                    :goods="allGoods.filter(item=>item.type.value==type.value)"
                   >

                   </List>
                

            </van-tab>
        
         </van-tabs>
    </div>
</template>
<script>
export default {
    name:"classify",
      data(){
        return{
             types:[],
             allGoods:[],
            show:false,
            active: 1
        }
    },
    created(){
        this.$axios.get("/vue/getGoodType")
        .then(res=>{
            this.types = res.data.result;
        })
    },
    mounted(){
        this.$axios.get("/vue/getGoods")
        .then(res=>{
            this.allGoods = res.data.result;
            this.show = true;
        })
    }
}
</script>

