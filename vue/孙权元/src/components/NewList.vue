<template>
    <div>
        <li v-for="(good,i) in goods" :key="i">
            <Item :good="good" ></Item>
        </li>
            
          
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name:"NewList",
    data(){
        return {
             goods:this.$store.state.data.allGoods.filter(item=>item.type.value==this.type.value)
        }
    },
    props:{type:Object},
    computed:{
        ...mapState(['data'])
    },
    methods:{
        ...mapActions(['getGoodsByTypes']),
        
    },
    mounted(){
        
        // this.$axios.get("vue/getGoodsByTypes",{
        //     params:{type:this.type.value}
        // }).then(res=>{
        //     this.$store.state.data.goods = res.data.result 
        // })
       
    },
    
    }
    

</script>


<style scoped>
    li{
        list-style: none;
    }
</style>
