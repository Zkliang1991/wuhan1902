<template>
    <div>
        <mt-loadmore 
        :top-method="loadTop" 
        :bottom-method="loadBottom" 
        :bottom-all-loaded="allLoaded" 
        ref="loadmore">
            <ul v-if="goods.length>0">
                <li v-for="(good,i) in goods" :key="i">
                    <Item :good="good"></Item>
                </li>
            </ul>
        </mt-loadmore>
    </div>
</template>

<script>
import Item from "./item.vue"
import { Indicator ,Toast} from 'mint-ui';

export default {
    name:"list",
    data(){
        return{
            allLoaded:false   // 判断数据是否加载完毕  
        }
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
        console.log(this.allGoods.filter(item=>item.type.value==this.type.value))
    },
    methods:{
        loadTop(){
            console.log("下拉刷新 -- top");
            setTimeout(()=>{
                // this.goods = this.goods.reverse();    // 修改 goods 
                this.$emit("changegoods",this.goods.reverse())
                this.$refs.loadmore.onTopLoaded();
                Toast({
                    message:"下拉刷新成功",
                    duration:500
                });
            },1000)
        },
        loadBottom(){
            console.log("上拉加载更多...bottom");
            this.allLoaded = true;// 若数据已全部获取完毕
            var length = this.goods.length-1;  // 20    0-16 
            var num =  Math.floor(Math.random() * (length-4));
            var arr = this.goods.slice(num,4);
            console.log(arr);   
            var goods = this.goods.concat(arr);
            this.$emit("changegoods",goods)
            setTimeout(()=>{
                this.allLoaded = false;
                this.$refs.loadmore.onBottomLoaded();
                Toast({
                    message:"上拉加载更多成功",
                    duration:500
                });
            },1000)
        }
    }
}
</script>



