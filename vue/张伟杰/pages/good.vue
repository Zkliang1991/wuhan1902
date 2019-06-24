<template>

    <div>

        <Head title="商品详情" :show="true"></Head>
        <div>
            <img :src="good.img" alt="" width="100%" height="280px">
            <h2>{{good.title}}</h2>
            <h2>价格 : ￥{{good.price}}</h2>
            <h3>{{number}}件</h3>
            <van-button type="danger" @click="number++">+</van-button>
            <van-button :disabled="number<2" type="danger" @click="number--">-</van-button>
            <!-- <h2> 分类 : {{good.type.text}}</h2> -->
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="客服" />
                <van-goods-action-icon icon="cart-o" text="购物车" />
                <van-goods-action-button type="warning" text="加入购物车" @click="addtoCart" />
                <van-goods-action-button type="danger" text="立即购买" @click="gotoCart" />
            </van-goods-action>
        </div>
        <span style="color:red">评价:</span>
        <van-rate v-model="value" icon="like" void-icon="like-o" color="red" allow-half />
    </div>
</template>


<script>

    import { Rate } from 'vant';
    import {
        GoodsAction,
        GoodsActionIcon,
        GoodsActionButton
    } from 'vant';
    import { Toast } from 'vant';


    export default {
        name: "good",
        data() {
            return {
                good: {},
                number: 1,
                value: 0
            }
        },
        mounted() {

            console.log(this.$route.query.goodId);  //前端的query的传参,用this.$route.query.goodId
            this.$axios.get("/api/getGoodOne", { params: { goodid: this.$route.query.goodId } }).then(res => {

                this.good = res.data.result;
                console.log(res.data.result);
                console.log(this.good);
            })
        },
        methods: {
            addtoCart() {

                console.log(this.number);
                console.log(this.$route.query.goodId);
                console.log(sessionStorage.userInfo);
                this.$axios.post("/api/addtoCart", {
                    count: this.number,
                    goodId: this.$route.query.goodId,
                    good: JSON.stringify(this.good),
                    // userinfo: sessionStorage.userinfo

                }).then(res => {
                    console.log(res)
                })


            },
            gotoCart() {

                Toast('即将跳转购物车');

                this.$router.push({ name: 'cart' })

            }
        }
    }

</script>