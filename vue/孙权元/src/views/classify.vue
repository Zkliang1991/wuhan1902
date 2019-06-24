<template>
    <div>
        <Head title="商品分类"></Head>
        <van-tabs v-model="active">
            
            <van-tab v-for="(type,i) in this.$store.state.data.types" :key="i" :title="type.text" >
                <NewList 
                :type="type"
                
                 ></NewList>
 
            </van-tab>
        </van-tabs>
                
    </div>
</template>


<script>
import {mapActions,mapState} from "vuex"
import NewList from '@/components/NewList.vue'
export default {
    name:"classify",
    components:{
        NewList,
    },
    data(){
        return {
            active:"",
        }
    },
    computed:{
        ...mapState(['data'])
    },
    methods:{
        ...mapActions(["getTypesAjax","getAllgoods"]),
        

    },
    created(){
        this.getTypesAjax({
            url:"/vue/getGoodTypes"
        })
    },
    mounted(){
        this.getAllgoods({
            url:"/vue/getAllgoods",
            cb:()=>{
                this.$nextTick(()=>{
                    // this.show = true;
                    
                })
            }
        })

    }
}
</script>
