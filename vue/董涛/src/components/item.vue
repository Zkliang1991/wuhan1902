<template>
    <div class="item-move">
        <router-link class="item" :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}">
            <img :src="good.img" alt="" class="item-img" v-lazy="good.img">
            <div class="item-s">
                <h3>{{good.name}}</h3>
                <b> ￥{{good.price}}</b>
                <span>{{good.describe}}</span>
            </div>
        </router-link>
    </div>
</template>


<script>
export default {
    props:{
        good:Object
    },
}
</script>


<style scoped>
.item{
    /* padding: 10px; */
    box-sizing: border-box;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.10);
}
.item-img {
    width:100%;
    height:300px;
    display: block;

}
.item-s{
    background: rgba(213,191,167,0.10);
}
h3{
    color: #333;
    padding-top: 10px;
    /* height: 40px; */
    line-height: 30px;
    font-size: .3rem;
}
b{
    display: block;
    color: red;
    padding-bottom: 10px;
}
.item-move{
    animation: zoomInLeft 1s;
}
</style>
