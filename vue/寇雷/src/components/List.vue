<template>
    <div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <ul v-if="goods.length>0">
                <li v-for="(good , i) in goods" :key="i" height="150px">
                    <Item :good="good"></Item>
                </li>
            </ul> 
        </van-pull-refresh>
    </div>
</template>

<script>
import Item from "./Item"

export default {
    name:"list",
    data(){
        return{    
            isLoading:true,
        }
    },
    components:{
        Item    
    },
    props:{
        goods:{
            type:Array,
        },
        type:String,
        allGoods:Array
    },
    methods:{
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
                this.goods = this.goods.reverse();
            }, 500);
        }
    }
}
</script>

<style scoped>
li{
    margin:10px 0;
    background-color: #fff;
    }
</style>


