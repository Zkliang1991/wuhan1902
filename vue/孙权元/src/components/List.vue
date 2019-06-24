<template>
    <div>
        <li v-for="(good,i) in this.$store.state.data.goods" :key="i">
            
            <Item :good="good"></Item>
        </li>
     
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    
    name:"List",
    computed:{
        ...mapState["data"]
    }
}
</script>


<style scoped>
    li{
        list-style: none;
    }
</style>
