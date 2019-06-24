<template>
    <div>

        <Head :title="$route.query.name"></Head>
        <div class="con">
            <img :src="good.img" alt="" class="img">
            <p class="name">{{good.name}}</p>
            <p class="price">￥{{good.price}}</p>
            <div class="num">
                <van-rate v-model="xing" :size="25" color="#f44" void-icon="star" void-color="#eee" class="xing" />
                <span class=" goumai">购买数量</span>
                <van-stepper v-model="value" class="ste" />
            </div>
        </div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon info="" icon="cart-o" text="购物车" @click="gotoCar" />
            <van-goods-action-icon icon="shop-o" text="店铺" />
            <van-goods-action-button type="warning" text="加入购物车" @click="addToCar" />
            <van-goods-action-button type="danger" text="立即购买" @click="gotoCar" />
        </van-goods-action>
    </div>
</template>

<script>
    import { Dialog } from 'vant';
    export default {
        name: "good",
        data() {
            return {
                good: {},
                value: 1,
                check: false,
                xing: 3
            }
        },
        methods: {
            gotoCar() {
                Dialog.confirm({
                    title: '标题',
                    message: '是否跳转购物车'
                }).then((action) => {
                    console.log(action);
                    if (action) {
                        this.$router.push({ name: "carts" })
                    }
                }).catch(() => {
                    // on cancel
                });
            },
            addToCar() {
                this.$axios.post("/vue/addToCar", {
                    count: this.value,
                    goodId: this.$route.params.goodId,
                    good: JSON.stringify(this.good),
                    check: this.check
                })
            }
        },
        mounted() {
            this.$axios.get("/vue/getGoodOne", {
                params: {
                    goodId: this.$route.params.goodId
                }
            }).then(res => {
                this.good = res.data.result;
            })
        },


    }
</script>

<style scoped>
    .con {
        text-align: center;
    }

    .img {
        width: 92%;
        padding: 0.2rem;
    }

    .name {
        font-size: 0.4rem;
        font-weight: normal;
        text-align: left;
        padding-top: 0.3rem;
        padding-left: 0.3rem;
        padding-right: 0.3rem;
    }

    .price {
        color: #f00;
        font-size: 0.5rem;
        text-align: left;
        padding-left: 0.3rem;
    }

    .num {
        overflow: hidden;
        padding-top: 0.3rem;
    }

    .goumai {
        padding-left: 0.3rem;
        font-size: 0.35rem;
        font-weight: normal;
        text-align: left;
        float: left;
    }

    .ste {
        float: right;
        padding-right: 0.3rem;
    }

    .xing {
        text-align: left;
        padding-left: 0.3rem;
    }
</style>