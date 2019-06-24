<template>
    <div>
        <form action="/">
            <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            @search="onSearch"
            @cancel="onCancel"
             />
        </form>
        <div class="warp" v-if='show'>
            <span>优雅男装</span><span>精品女装</span><span>花花公子</span><span>劲霸男装</span>
        </div>
        <ul>
            <li v-for="(good,i) in goods" :key='i' class="item-move">
                  <router-link :to="{name:'good',params:{goodId:good._id},query:{name:good.name}}" class="item">
                    <van-card
                    :price="good.price"
                    :desc="good.type.text"  
                    :title="good.name"
                    :thumb="good.img"
                    />
                </router-link>   
            </li>
        </ul> 
         
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:'',
            goods:[],
            show:true,
        }
    },
    methods:{
        onSearch(){
            console.log('来了小老弟')
        },
        onCancel(){
            history.go(-1);
        }
    },
    watch:{
        value(newval){
            
            this.$axios.get('/vue/getGoods',{
                params:{
                    value:newval
                }
            }).then(res=>{
                
                this.goods = res.data.result;
                this.show = false;
            })
        }
    }
}
</script>

<style scoped>
   .warp{
       display: flex;
       font-size: 0.28rem;
       justify-content:space-around;
       margin-top:2rem; 
   }
   .warp span{
       width: 1.5rem;
       text-align: center;
       border: 1px solid slategrey;
       border-radius: 46%;
       color: plum;
   }
    .item-move{
         animation: flipOutX .5s;
    }
</style>

