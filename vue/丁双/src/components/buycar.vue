<template>
    <div style = "position:relative;width:100%;height:100%">
        <div v-if = 'show'>
            <div v-for = "(cartGood,i) in cartAllGoods" :key = 'i'>
                <van-checkbox 
                    id = "checked" 
                    v-model="cartGood.good[0].checked"
                    checked-color="#07c160" 
                    ></van-checkbox>
                <van-card
                    :num="cartGood.count"
                    :tag="cartGood.count.toString()"
                    :price="cartGood.good[0].price.toFixed(2)"
                    :desc="'分类:' + cartGood.good[0].type.text"  
                    :title="cartGood.good[0].title"
                    :thumb="cartGood.good[0].img"
                    :origin-price="Number(cartGood.good[0].price.toFixed(2)) + 20"
                    >
                    <div slot="footer">
                        <van-button id = 'delSelect' @click = 'delSelect(i)' type="danger" size = "mini">删除</van-button>
                        <van-button :disabled = "cartGood.count<2?true:false" @click = "reduceCartNumber(i)" size="mini" plain  type="warning">-1</van-button>
                        <van-button @click = "addCartNumber(i)" size="mini" plain  type="primary">+1</van-button>
                    </div>
                </van-card>
                
            </div>
        </div>
        <div v-else>暂无商品,请速去添加商品...</div>
        <div>
            <van-submit-bar
            :price="price"
            button-text="提交订单"
            @submit="onSubmit"
            />
            <van-checkbox id = "quanxuan" v-model="quan" checked-color="#07c160">全选/反选</van-checkbox>
            
        </div>
        <div>
            <div class = 'blank'></div>
        </div>
    </div>
</template>

<script>
import { Card } from 'vant';
import {mapState , mapMutations} from 'vuex';
import { SubmitBar } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Toast } from 'vant';
export default {
    name:'buycar',
    data(){
        return {
            show:true,
            // cartAllGoods:[],
            price:3050
        }
    },
    props:['cartAllGoods'],
    computed:{
        // 单选 全选 判断
        quan:{
            get(){
                var flag = true;
                this.cartAllGoods.forEach((item)=>{
                    if(!item.good[0].checked){
                        flag = false;
                    }
                });
                return flag 

            },
            set(val){
                // console.log(val);
                this.cartAllGoods = this.cartAllGoods.map((item)=>{
                    item.good[0].checked = val;
                    return item;
                })
            }
        },
    },
    mounted(){
        this.$axios.get('/vue/getAllGoods')
        .then(res=>{
            this.cartAllGoods = res.data.result;
            var money = 0;
            if(this.cartAllGoods != undefined){
                this.cartAllGoods.forEach((item,index)=>{
                if(item.good[0].checked){
                    money += item.count * item.good[0].price.toFixed(2) * 100;
                }
                })
            this.price = money;
            }
           
        })
        // 查询
        if(this.cartAllGoods != undefined){
            this.show = false;
        }else{
            this.show = true;
        }
    
    },
    methods:{
        // 更新goodsData
        reduceCartNumber(i){
            this.cartAllGoods[i].count--;
            this.$axios.get('/vue/updateGoods',{
                params:{
                    count:this.cartAllGoods[i].count,
                    goodId:this.cartAllGoods[i].good[0].id
                }
            }).then(res=>{
                this.price = this.price - this.cartAllGoods[i].good[0].price.toFixed(2)*100
            })
        },
        addCartNumber(i){
            this.cartAllGoods[i].count++;
            this.$axios.get('/vue/updateGoods',{
                params:{
                    count:this.cartAllGoods[i].count,
                    goodId:this.cartAllGoods[i].good[0].id
                }
            }).then(res=>{
                this.price = this.price + this.cartAllGoods[i].good[0].price.toFixed(2)*100
            })
        },
        // delGoodsData
        delSelect(i){
            // if(this.cartAllGoods[i].good[0].checked){
                this.$axios.get('/vue/delGoods',{
                    params:{
                        goodId:this.cartAllGoods[i].good[0].id
                    }
                }).then(res=>{
                   this.$axios.get('/vue/getAllGoods')
                   .then(res=>{
                       this.cartAllGoods = res.data.result;
                   })
                })
            // }  
        },
        // 购物车提交到订单页面
        onSubmit(){
            
            // 要进行连接数据库 判断 my or order
            this.$axios.post('/vue/address')
            .then(res=>{
                var result = res.data.result.body;
                if(result){
                    this.$router.push({name:'order'});
                }else{
                    Toast({
                        message:'亲,请填写收货地址...',
                        duration:800
                    })
                    this.$router.push({name:'my'})
                }
            })
            
        }
    },
}
</script>

<style scoped>
    .van-submit-bar{
        height:52px;
    }
    /* 复选框 */
    #quanxuan{
        position:fixed;
        left:20px;
        bottom:65px;
        z-index:999;

    }
    .blank{
        height:110px;
    }
    .van-submit-bar{
        bottom:49px;
    }
   
</style>
