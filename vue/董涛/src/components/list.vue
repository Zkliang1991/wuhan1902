<template>
    <van-pull-refresh 
    v-model="isLoading" 
    @refresh="onRefresh"
    >
        <ul>
            <li v-for="(good,i) in goods" :key="i">
                <Item :good="good"></Item>
            </li>
        </ul>
    </van-pull-refresh>
</template>

<script>
import Item from "./item.vue"
export default {
    name:"list",
    data() {
        return {
            isLoading: false
        };
    },
    components:{
        Item
    },
    props:{
        goods:{
            type:Array,
        },
        type:Object,
        allGoods:Array
    },
    mounted(){
        // console.log(this.allGoods.filter(item=>item.value==this.type.value))
    },
    methods: {
        onRefresh() {
            // 异步更新数据
            setTimeout(() => {
                // 加载状态结束
                // this.goods = this.goods.reverse();
                this.$emit("changegoods",this.goods.reverse());
                this.$toast({
                   message: '刷新成功',
                   duration:500
                });
                this.isLoading = false;
                // 数据全部加载完成
            }, 1000);
        }
    }
}
</script>

<style lang="scss" scoped>
li{
    padding: 0 20px;
    padding-bottom: 20px;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
}
</style>
