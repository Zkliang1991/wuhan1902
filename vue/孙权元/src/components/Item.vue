<template>
    <div class="item-move">
        <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}">
        <van-card
                :price="good.price"
                :desc="good.name"  
                :title="good.type.text"
                :thumb="good.img"
                    
        />
        </router-link> 
        
    </div>
</template>


<script>

export default {
    name:'Item',
    props:['good']
}
</script>


<style scoped>
    .item-move{
        animation: fadeIn .5s;
    }
</style>
