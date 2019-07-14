

<template>
    <div>
        <div class="attention">
            <div @click="toShoucang"><span>{{collections.count}}</span><span>收藏夹</span></div>
            <div @click="toDianpu"><span>{{mine.arr.countDian}}</span><span>关注店铺</span></div>
            <div @click="toZuji"><span>{{mine.arr.countZu}}</span><span>足迹</span></div>
            <div @click="toHongbao"><span>{{mine.arr.countQuan}}</span><span>红包卡券</span></div>

        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['mine','collections'])
    },
    methods: {
        toShoucang(){
            this.$router.push({name:"collection"})
        },
        toDianpu(){

        },
        toZuji(){

        },
        toHongbao(){

        },
    },
}
</script>

<style lang="scss" scoped>
.attention{
    display: flex;
    justify-content: space-around;
    padding: .2rem .1rem;
    color: aliceblue;
    >div{
        display: flex;
        flex-direction: column;
        >span:first-child{
            font-size: .3rem;
        }
        >span:last-child{
            font-size: .2rem;
        }
    }
}
</style>
