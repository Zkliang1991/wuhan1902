<template>
    <ul v-if="goods.length>0">
        <li v-for="(good,i) in goods" :key="i">
            <nuxt-link class="any" :to="{name:'good',query:{goodId:good.id}}">
                <img :src="good.img" alt="">
                <h4>￥{{good.price}}</h4>

            </nuxt-link>
        </li>
    </ul>
</template>

<script>

    import { List } from 'vant';
    export default {
        data() {
            return {
                finished: false,
                loading: false
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
    .txt {
        color: purple;
        font-size: 1rem;
    }

    .price {
        color: blueviolet;

    }
</style>