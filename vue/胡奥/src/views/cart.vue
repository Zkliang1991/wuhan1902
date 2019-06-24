<template>
<div>
        <Head title="购物车"></Head>
        <h2 v-if="show"><span class="bz">{{texts}}</span>
            <img :src="one" alt="" class="mg">
        </h2>
        <!-- <h2>{{this.num}}-----{{this.good.price}}</h2> -->
    <div v-if='sp'>
      <div v-for="(item,i) in goods" :key="i">
        <van-card
            :num='item.count'
            :tag="item.good.type.text"
            :price="item.good.price"
            :desc="item.good.type.value"  
            :title="item.good.name"
            :thumb="item.good.img"
            origin-price="1000"
            >
            <div slot="footer">
                <van-button size="mini" @click="delet(i)">删除</van-button>
                <van-button size="mini" @click="money(i)">结算</van-button>
            </div>
        </van-card>
      </div>
    </div>
</div>
</template>
<script>
import { Toast } from 'vant';
// import { fstat } from 'fs';
export default {
    naem:"cart",
    data(){
        return{
            username:localStorage.username,
            texts:"你还没有购买任何东西！",
            goodId:'',
            show:true,
            goods:[],
            num:0,
            sp:false,
            a:0,
            one:require("@/assets/images/gw.jpg"),
        }
    },
    mounted(){
        console.log(this.username)
       
            this.$axios.get('/vue/searchGood',{
            params:{
                username:this.username,
                
            }
        }).then(res=>{
            console.log(res);
            this.goods = res.data.result;
            this.sp = true;
            this.show = false;
         })
    },
    beforeUpdate(){
         console.log(this.goods);
                if(this.goods.length == 0){
                    this.show = true
                }
    },
    methods:{
        money(i){
            Toast( (this.goods[i].count*1)* this.goods[i].good.price+'￥')
        },
        delet(i){
           this.goodId = this.goods[i].good._id
            this.$axios.get('/vue/delete',{
                params:{
                    goodId:this.goodId
                }
            }).then(res=>{
                console.log(res);
                this.goods.splice(i,1);
            })
        }
    }
}
</script>
<style scoped>
    h2{
        width: 100%;
        height: 100%;
        color:salmon;
        font-size: 0.32rem;
        text-align: center;
        position: relative;
    }
    h2 .mg{
        width: 100%;
        height: 100%;
        margin-top:35%; 
    }
    h2 .bz{
       position: absolute;
       top: -25%;
       left: 25%;
    }
</style>

