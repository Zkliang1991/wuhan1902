



<template>
        
    <div v-if="good.type" class="mk" >
             
       <img :src="good.img" alt="" width="100%" height="220px">
        <h2>{{good.name}}</h2>
        <h3>价格:{{good.price}}/折扣:{{good.discount}}</h3>
        <h3>分类:{{good.type.text}}</h3>
       
        <van-stepper v-model="value" min="1" max="1000" />
        <van-button type="danger" @click="jiaru">加入购物车</van-button>
        <van-button type="warning" @click="goumai">立即购买</van-button>
           
    </div>
</template>



<script>
import { Dialog } from 'vant';
import {Toast} from 'vant';

export default {
        name:"xiangqing",
        data(){
            return{
                good:{},
                value:1
            }
        },

        methods:{
                jiaru(){
                        Dialog.confirm({
                            title: '你好',
                            message: '是否将商品加入到购物车？'
                            }).then((action) => {
                           
                                if(action){
                                    this.$router.push({name:"car"})
                                     this.$axios.post('/setCart',{
                        
                                    goodId:this.$route.params.goodId,
                                    count:this.value,
                                    good:JSON.stringify(this.good)
                                
                            
                                    }).then(res=>{
                                        console.log(res)
                                    })
                                }
                            }).catch(() => {
                            // on cancel
                            });
                },
                goumai(){
                    Toast.success('添加成功');
                    this.$axios.post('/setCart',{
                        
                            goodId:this.$route.params.goodId,
                            count:this.value,
                            good:JSON.stringify(this.good)
                         
                       
                    }).then(res=>{
                        console.log(res)
                    })
                    this.$router.push({name:"car"})
                }
        },
        mounted(){
                this.$axios.get("/xiang",{
                    params:{
                        goodId:this.$route.params.goodId
                    }
                }).then(res=>{
                    
                    this.good=res.data.result
                })
        }
}
</script>
