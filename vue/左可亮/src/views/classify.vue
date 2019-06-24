<template>
    <div v-if="show">
        <Head title="商品分类" :show="true"></Head>
        <mt-navbar v-model="selected">
            <mt-tab-item :id="type.value" v-for="(type,i) in newTypes" :key="i"> {{type.text}}</mt-tab-item>
        </mt-navbar>    

        <mt-tab-container v-model="selected">
            <mt-tab-container-item :id="type.value" v-for="(type,i) in newTypes" :key="i">
                <NewList 
                    :type="type"
                    :allGoods="data.allGoods"
                    
                    @changegoods="getAllGoods"
                > </NewList>
            </mt-tab-container-item >
        </mt-tab-container>
    </div>
</template>


<script>
import NewList from "@/components/NewList.vue"
import {mapState,mapActions,mapGetters} from "vuex"

export default {
    name:"classify",
    components:{
        NewList
    },
    data(){
        return {
            // types:[],
            allGoods:[],
            show:false,
            selected:'shirt'
        }
    },
    computed:{
        ...mapState(['data']),
        ...mapGetters(['newTypes'])
    },
    methods:{
        getAllGoods(){
            this.allGoods = this.allGoods.reverse();
        },
        ...mapActions(['getTypesAjax','getAllGoodsAjax'])
    },
    created(){
        // this.$axios.get("/vue/getGoodTypes")
        // .then(res=>{
        //     console.log(res);
        //     this.types = res.data.result;
        // })
        this.getTypesAjax({
            url:"/vue/getGoodTypes"
        })
    },
    mounted(){
        this.getAllGoodsAjax({
            url:"/vue/getGoods",
            cb:()=>{
                this.$nextTick(()=>{
                    this.show = true;
                })
            }
        })
        // this.$axios.get("/vue/getGoods",)
        // .then(res=>{
            
        //     this.allGoods = res.data.result;
        //     this.$nextTick(()=>{
        //         this.show = true;
        //     })
        // })
    }
}
</script>
