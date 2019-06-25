<template>
    <div v-if="show">
        <Head title="商品分类"  ></Head>
        <van-tabs sticky animated>
            <van-tab :id="type.value" v-for="(type,i) in types" :title="type.text" :key="i">
                <List
                :type="type"
                :allGoods="allGoods"
                :goods="allGoods.filter(item=>item.type.value==type.value)"
                @changegoods="getAllGoods"
                ></List>
            </van-tab>
        </van-tabs>
        <!-- <mt-navbar v-model="selected">
            <mt-tab-item :id="type.value" v-for="(type,i) in types" :key="i"> {{type.text}}</mt-tab-item>
        </mt-navbar>    

        <mt-tab-container v-model="selected">
            <mt-tab-container-item :id="type.value" v-for="(type,i) in types" :key="i">
                <List
                    :type="type"
                    :allGoods="allGoods"
                    :goods="allGoods.filter(item=>item.type.value==type.value)"
                > </List>
            </mt-tab-container-item >
        </mt-tab-container> -->


    </div>
</template>

<script>
// import List from "@/components/List1.vue"
export default {
    name:"classify",
    // components:{
    //     List,
    // },
    data(){
        return{
            types:[],
            allGoods:[],
            show:false,
            selected:"cake"
        }
    },
    methods:{
        getAllGoods(){
            this.allGoods = this.allGoods.reverse();
        }
    },
    created(){
        this.$axios.get("/vue/getGoodTypes")
        .then(res=>{
            console.log(res);
            this.types = res.data.result;
        })

    },
    mounted(){
        this.$axios.get("/vue/getGoods",{
            params:{
                skip:11
            }
        })
        .then(res=>{
            console.log(res);
            this.allGoods = res.data.result;
            this.$nextTick(()=>{
                this.show = true;
            })
        })
        
    }
}
</script>
