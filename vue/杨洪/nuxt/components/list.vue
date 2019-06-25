

<template>
    <div>
        <ul>
            <li v-for="(good,i) in goods" :key="i">
                    <router-link :to="{name:'xiangqing',params:{goodId:good.id},query:{name:good.name}}">
                    
                    <img v-lazy="good.img" alt="" width="100%" height="200px">
                    <h2 class="h2">{{good.name}}--rmb{{good.price}}---{{good.type.text}}</h2>
                    </router-link>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name:"list",
    props:{
        goods:{
            type:Array
        }
    }
}
</script>


<style>
       div.h2{
           font-size: 15px
       }
</style>
