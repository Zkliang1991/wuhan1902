<template>
    <div>
         <Head :title="$route.query.name" ></Head>
        <div>
            <img :src="good.img" alt="" width="100%" height="280px">
            <h2>{{good.name}} ￥RMB {{good.price}} 折扣{{good.discount}} </h2>
            <van-stepper v-model="value" /> 
            
        </div>
      <van-goods-action>
        <van-goods-action-icon
            icon="chat-o"
            text="客服"
        />
        <van-goods-action-icon
            :info="num"
            icon="cart-o"
            text="购物车"
        />
        <van-goods-action-icon
            icon="shop-o"
            text="店铺"
        />
        <van-goods-action-button
            type="warning"
            text="加入购物车"
            @click="onClickMiniBtn"
        />
        <van-goods-action-button
            type="danger"
            text="立即购买"
            :to="{name:'cart',params:{id:good._id}}"
            
        />
     </van-goods-action>
    </div>
</template>
<script>
export default {
    name:"good",
    data(){
        return{
            good:{},
            num:0,
            value:1
           
        }
    },
    mounted(){
        this.$axios.get('/vue/getGoodOne',{
            params:{
                goodId:this.$route.params.goodId
            }
        }).then(res=>{
            console.log(res);
            this.good = res.data.result;
        })
    },
    methods:{
        onClickMiniBtn(){
            this.num = this.value;
        this.$axios.post("/vue/addCatr",{
          count:this.num,
          goodId:this.$route.params.goodId,
          good:JSON.stringify(this.good)
      }).then(res=>{
        console.log(res);
        
      })
        },
    }
}
</script>

