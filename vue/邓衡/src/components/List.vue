<template>
    <div>
        <ul v-if="goods.length>0" class="move">

            <li v-for="(good,i) in goods" :key="i">

                <router-link :to="{name:'good',params:{goodId:good.id},query:{name:good.name,goodId:good.id}}" class="item">
                    <img :src="good.img" alt="" width="100%" height="240">
                    <h3 style="color: red">{{good.name}}</h3>
                    <span style="font-size: 18px;font-weight:500;">价格 : {{good.price}} / 折扣 {{good.discount }}折</span>
                </router-link>
            </li>

        </ul>
    </div>
</template>
<script>
    export default {
        name: 'list',
        props: ['goods']
    }

</script>
<style scoped>
    li {
        text-align: center;
    }
</style>