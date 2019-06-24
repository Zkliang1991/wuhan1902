<template>
    <div>
        <router-link v-for="(good,i) in data.goodList" :key:="i" :to="{name:'more',query:{goodid:good._id}}">
            <van-card :num="good.num" :price="good.price" :desc="good.type.text" :title="good.name" :thumb="good.img" />
        </router-link>
    </div>
</template>
<script>
     import { mapState, mapActions } from "vuex"
    export default {
        computed:{
            ...mapState(['data'])
        }
    }
</script>