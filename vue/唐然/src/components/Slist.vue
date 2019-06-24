<template>
    <div>
        <ul>
            <li v-for="(good,i) in goods" :key="i">
                <Item :good="good"></Item>
                <!-- <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}">
                    <img :src="good.img" alt="" width="100%" height="240px">
                    <h2 class="h2">{{good.name}} -- ¥RMB{{  good.price }} -- {{good.type.text}}</h2>
                </router-link> -->
            </li>
        </ul>
    </div>
</template>

<script>
    import Item from "./Item.vue"
    export default {
        name: "list",
        props: {
            goods: Array
        },
        components: {
            Item
        },
    }
</script>