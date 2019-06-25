<template>
    <div class="item-move">
        <router-link :to="{name:'good',params:{footId:foot._id},query:{name:foot.name}}" class="item">
            <img :src="foot.img" alt="" width="100%" height="240px">
            <h2 class="h2">{{foot.name}} -- ¥RMB{{  foot.price }} -- {{foot.type.text}}</h2>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"item",
    props:["foot"]
}
</script>

<style scoped>
.item{
    width:100%;
    padding: 20px 10px;
    box-sizing: border-box;
    display: block;
    background-color: rgb(255, 255, 255);
    /* border-bottom:2px dotted darkgoldenrod; */
}
.h2{
    height:40px;
    color:rgb(5, 5, 5);
    font-size:.3rem;
}

.item-move{
    animation: zoomInDown 1s;
}
</style>