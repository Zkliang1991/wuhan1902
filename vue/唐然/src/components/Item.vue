<template>
    <div calss="item-move">
        <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}" class="item">
            <img :src="good.img" alt="" width="40%">
            <p class="name">{{good.name}}</p>
            <p class="price">￥{{good.price}}.00</p>
        </router-link>
    </div>

</template>

<script>
    export default {
        name: "item",
        props: ["good"]

    }
</script>

<style scoped>
    .item {
        text-align: center;
        width: 40%;
        float: left;
        padding: 0.2rem 0.37rem;
    }


    img {
        width: 100%;
        height: 150px;
    }

    .name {
        font-size: 0.3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #000;
        text-align: left;
    }

    .price {
        font-size: 0.35rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #f00;
        text-align: left;
    }

    .item-move {
        animation: bounceIn 4s;
        display: flex;
    }
</style>