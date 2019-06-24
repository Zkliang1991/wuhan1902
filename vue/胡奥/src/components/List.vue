<template>
    <div>
        <ul>
             <li v-for="(good,i) in goods" :key='i'>
               <Item :good = "good"></Item>
            </li>
        </ul>
    </div>
</template>

<script>
import  Item from "./Item.vue"
export default {
    naem:'list',
    components:{
        Item
    },
    props:{
        goods:{
            type:Array,
        }
        
 },
}
</script>

