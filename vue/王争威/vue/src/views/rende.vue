<template>
    <div>
        <div>
            <img :src="good.img" alt="" class="img">
            <p>￥<span>{{good.price}}</span> 折扣  ￥{{good.discount}}</p>
            <h4>{{good.name}}</h4>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['good']
    }
</script>
<style scoped>
    img {
        width: 100vw;
        height: 8rem;
    }

    p {
        color: aliceblue;
        background-color: hotpink;
        width: 100vw;
        height: 1rem;
        line-height: 1rem;
        margin-bottom: 0.1rem;
    }

    span {
        font-size: 0.5rem;
        margin-right: 2rem;
    }

    h4 {
        padding: 0.2rem;
    }
</style>