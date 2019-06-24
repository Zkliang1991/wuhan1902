<template>
    <div class="cm">
        <div class="sm">
            <img :src="good.img" alt="">
            <h4 >{{good.name}}</h4>
            <h4 class="h4">￥{{good.price}}</h4>
        </div>
    </div>
</template>
<script>
export default {
    props:['good']
}
</script>
<style lang="scss" scoped>
    /* .cm{
        display: flex;
    } */
    .sm{
        /* display: flex; */
        box-sizing:border-box;
        /* margin: 0.5rem; */
        margin-bottom: 2rem;
        float: left;
        width: 50%;
        height: 5rem;
        >img{
            width: 100%;
            height: 100%;
        }
    }
    .h4{
        color: red;
    }
</style>