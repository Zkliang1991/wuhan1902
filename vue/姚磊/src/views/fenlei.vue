<template>
    <div>
        <Head title="商品分类"></Head>
        <van-tabs v-model="active" animated>
            <van-tab :id="type.value" v-for="(type,i) in types" :title="type.text" :key="i">
                <!-- {{type.value}}---{{type.text}} -->
                <List 
                    :type="type"
                    :allFoots="allFoots"
                    :foots="allFoots.filter(item=>item.type.value==type.value)" 
                > </List>
                <!-- "allFoots.filter(item=>item.type.value==type.value)" 用来过滤的 -->
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
    name:"fenlei",
    data(){
        return{
            types:[],
            allFoots:[], //所有数据
            active:""
        }
    },
    created(){
        this.$axios.get("/vue/getFenlei")
        .then(res=>{
            console.log(res);
            this.types = res.data.result;
        })
    },
    mounted(){
        this.$axios.get("/vue/getFoots",)
        .then(res=>{
            console.log(res);
            this.allFoots = res.data.result;
        })
    }
}
</script>
