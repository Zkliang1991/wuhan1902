<template>
    <ul v-if="goods.length>0">
        <li v-for="(good,i) in goods" :key="i">
            <nuxt-link class="any" :to="{name:'good',query:{goodId:good.id}}">
                <img :src="good.img" alt="">
                <h4>￥{{good.price}}</h4>
            </nuxt-link>
        </li>
        <div class="empty"></div>
    </ul>
</template>

<script>
    export default {
        data() {

            return {

            }

        },
        props: {
            goods: {
                type: Array,
            },
            type: Object,
            allGoods: Array
        },

    }
</script>


<style>
    .any {
        float: left;
        padding: 2px;
    }


    .empty {
        width: 100%;
        height: 50px;
    }
</style>