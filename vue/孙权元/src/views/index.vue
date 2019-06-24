<template>
    <div>
       
        <router-view></router-view>
        <Foot></Foot>
    </div>
</template>


<script>
import Foot from "@/components/Foot.vue"

export default {
    name:"index",
    components:{
        Foot,
        
    },
    data(){
        return{
           
        }
    }
}
</script>
