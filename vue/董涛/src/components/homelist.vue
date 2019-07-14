<template>
    <ul>
        <li v-for="(good,i) in goods" :key="i">
            <Homeitem :good="good"></Homeitem>
        </li>
    </ul>
</template>

<script>
import Homeitem from "./homeitem.vue"
export default {
    name:"list",
    components:{
        Homeitem
    },
    props:{
        goods:{
            type:Array,
        },
    },
    mounted(){
        // console.log(this.allGoods.filter(item=>item.value==this.type.value))
    },
}
</script>

<style lang="scss" scoped>
li{
    border-radius: 5px;
    padding-bottom: 10px;
    background: #fff;
    overflow: hidden;
}
</style>
