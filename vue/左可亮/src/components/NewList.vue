<template>
    <div>
        <mt-loadmore 
        :top-method="loadTop" 
        :bottom-method="loadBottom" 
        :bottom-all-loaded="allLoaded" 
        ref="load">
            <ul v-if="goods.length>0">
                <li v-for="(good,i) in goods" :key="i">
                    <Item :good="good"></Item>
                </li>
            </ul>
        </mt-loadmore>
    </div>
</template>

<script>
import Item from "./Item.vue"
import { Indicator ,Toast} from 'mint-ui';

export default {
    name:"newlist",
    data(){
        return{
            allLoaded:false ,  // 判断数据是否加载完毕  
            goods:this.allGoods.filter(item=>item.type.value==this.type.value)
        }
    },
    components:{
        Item    
    },
    props:{
        type:Object,
        allGoods:Array
    },
    computed:{
        // goods(){
        //     return this.allGoods.filter(item=>item.type.value==this.type.value);
        // }
    },
    mounted(){
       
    },
    methods:{
        loadTop(){
            console.log("下拉刷新 -- top");
            this.$axios.get("/vue/getGoodsByTypes",{
                params:{
                    type:this.type.value
                }
            }).then(res=>{
                setTimeout(()=>{
                    console.log(res);
                    this.goods = res.data.result.reverse();
                    this.$refs.load.onTopLoaded();
                },1000)
            })
        
        },
        loadBottom(){
            console.log("上拉加载更多...bottom");
            this.allLoaded = true;// 若数据已全部获取完毕
            // ajax 
            setTimeout(()=>{
                this.allLoaded = false;
                this.$refs.load.onBottomLoaded();
                Toast({
                    message:"上拉加载更多成功",
                    duration:500
                });
            },1000)
        }
    }
}
</script>



