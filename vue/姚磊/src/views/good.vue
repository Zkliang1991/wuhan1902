<template>
    <div>
        <Head title="商品详情"></Head>
        <div v-if="foot.type">
            <img :src="foot.img" alt="" width="100%" height="280px">
            <h2>{{foot.name}}</h2>
            <h2>价格 : {{foot.price}}  /  折扣  {{foot.discount }}</h2>
            <h2> 分类  : {{foot.type.text}}</h2>
        </div>
        <van-button type="info">-</van-button>
        <input type="text" value="1">
        <van-button type="info">+</van-button>
        <van-goods-action>
            <van-goods-action-icon
                icon="chat-o"
                text="客服"
            />
            <van-goods-action-icon
                info="5"
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
            />
            <van-goods-action-button
                type="danger"
                text="立即购买"
            />
        </van-goods-action>
    </div>
</template>

<script>
export default {
    name:"foot",
    data(){
        return {
            foot:{},
            number:1
        }
    },
    mounted(){
        console.log(this.$route.params.footId)
        this.$axios.get("/vue/getGoodOne",{
            params:{
                footId:this.$route.params.footId,
            }
        }).then(res=>{
            console.log(res);
            this.foot = res.data.result;
        })
    }
}
</script>

