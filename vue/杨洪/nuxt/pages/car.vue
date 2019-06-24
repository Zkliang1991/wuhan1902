


<template>
    <div>
       

         <div v-for="(good,i) in goods" :key="i">
            <router-link :to="{name:'car', params:{goodId:good.id},query:{name:good.name}}" >
                    <van-card
                    :num="good.count"
                    tag="标签"
                    :price="good.good.price"
                    :desc="good.good.name"  
                    :title="good.good.type.text"
                    :thumb="good.good.img"
                    :origin-price="good.discount"
                    >
                    <div slot="footer">
                        <van-button size="mini" @click="shanchu(i)">删除</van-button>
                        <van-button size="mini" @click="mai" >购买</van-button>
                    </div>
                    </van-card>
                    <van-submit-bar
                    :price="zongjia()"
                    button-text="提交订单"
                    @submit="onSubmit"
                    />
            </router-link>   
        </div>
      
    </div>
</template>

<script>
import { Toast } from 'vant';
import { Dialog } from 'vant';
export default {
        name:"car",
        data(){
                return{
                    goods:{},
                    testData:[]
                }
        },
        created(){
            console.log(111)
            this.$axios.post("/mki").then(res=>{
                 console.log(res, 132465)
                this.goods=res.data.result
                
            })
        },
        methods:{
            shanchu(i){
                // console.log( this.goods[i].goodId)
               
                this.$axios.get("/shanchu",{
                    params:{
                        goodId: this.goods[i].goodId,
                        goods:JSON.stringify(this.goods)
                    }
                }).then(res=>{
                    
                            console.log(res)
                })
               
                  this.$axios.post("/mki").then(res=>{
                      
                      this.goods=res.data.result
                
                })
                Toast.success('删除成功');
            },

            zongjia(){
                var num = 0
                this.goods.forEach(item=>{
                    num+=item.good.price*item.count
                })
                return num*100
            },

            mai(){
                Toast.success('订单已成功');
            },
            onSubmit(){
                Dialog.confirm({
                title: '你好',
                message: '是否确定购买商品？'
                }).then((action) => {
                // on confirma
                    if(action){
                         

                        this.$axios.get("/buy",{
                            goods:this.goods
                        }).then(res=>{
                                console.log(res)
                        }),
                        this.$axios.post("/mki").then(res=>{
                            
                            this.goods=res.data.result
                        
                        })
                        setTimeout(()=>{
                               Toast.success('付款成功，你的宝贝正在路上');
                               this.$router.push({name:"shouhuo"})
                        },1000)
                        
                    }
                }).catch(() => {
                // on cancel
                });
                
               
            }
        }
}
</script>
