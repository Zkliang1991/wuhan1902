<template>

    <div>

        <Head title="购物车"></Head>
        <!-- <h3>我是购物车</h3> -->
        <div v-for="(product,i) in products" :key="i">
            <!-- <van-checkbox v-model="checked" for="quan"></van-checkbox> -->
            <input type="checkbox" v-model="product.check">
            <van-card :num="product.count" :price="product.good.price" :title="product.good.title"
                :thumb="product.good.img" origin-price="10.00">
                <div slot="footer">
                    <!-- <h4>小计:</h4> -->
                    <van-button size="mini" @click="product.count++">+</van-button>
                    <van-button size="mini" @click="product.count--" :disabled="product.count<2">-</van-button>
                </div>
            </van-card>
            <div class="other"></div>


            <!-- <van-goods-action-button type="danger" text="立即购买" /> -->
        </div>
        <div class="apple"></div>
        <p class="box"> <label for="quan">全选</label> <input v-model="quan" id="quan" type="checkbox"> </p>
        <p class="text">价格:{{total}}</p>
        <p class="all">数量: {{all}}</p>
        <van-button type="warning" class="btn" @click="onSubmit">提交订单</van-button>
        <div class="every"></div>
        <!-- <van-submit-bar type="danger" :button-text="sumText" @submit="onSubmit(all)" /> -->
        <Foot></Foot>
    </div>
</template>

<script>
    import { Card } from 'vant';
    import { SubmitBar } from 'vant';
    import { Dialog } from 'vant';
    import { Checkbox, CheckboxGroup } from 'vant';
    import { Button } from 'vant';
    // import { Dialog } from 'vant';



    export default {
        data() {
            return {

                name: "cart",
                products: [],
                all: 0,
                check: false



            }
        },

        props: {
            num: Number
        },
        computed: {
            quan: {

                get() {
                    var flag = true;
                    this.products.forEach((item) => {
                        if (!item.check) {
                            flag = false;
                        }
                    });
                    return flag;
                },
                set(val) {

                    this.products = this.products.map((item) => {
                        item.check = val;
                        return item;
                    })

                }
            },
            total() {

                var total = 0;
                this.products.forEach((item) => {
                    if (item.check) {
                        total += item.good.price * item.count * 1
                    }
                })

                return total
            },


            // sumText() {
            //     return "提交订单 " + this.all
            // }

        },

        watch: {
            products: {
                deep: true,
                handler(newVal) {
                    console.log(newVal);
                    var all = 0;
                    newVal.forEach(item => {
                        console.log(item)

                        all += item.count * 1;






                        // this.all = all;
                    })
                    this.all = all;


                    this.products.forEach(item => {
                        console.log(item);
                        this.$axios.get("/api/order", {
                            params: {
                                count: item.count * 1,
                            }
                        }).then(res => {
                            console.log(res);
                        })

                    })

                }
            }
        },


        created() {


            var username = sessionStorage.getItem("userInfo");
            console.log(username);
            this.$axios.get("/api/carts", {


                params: {

                    username: username,

                }


            }).then(res => {
                // console.log(11111, res);
                this.products = res.data.result;

            })

        },
        methods: {
            onSubmit() {

                Dialog({ message: '即将跳转地址列表' });
                this.$router.push({ name: "dizhi" })
            }
        }




    }
</script>

<style>
    .other {
        width: 100%;
        height: 300px;
        position: absolute;
        top: 605.6px;
        left: 0;
        z-index: -333;

    }

    .box {
        position: fixed;
        left: 0px;
        bottom: 100px;
        color: red;
        z-index: 1000;

    }

    .text {
        position: fixed;
        height: 30px;
        width: 90px;
        right: 0px;
        color: white;
        bottom: 60px;
        background: pink;
        z-index: 1000;
    }

    .all {

        position: fixed;
        height: 30px;
        width: 90px;
        right: 90px;
        color: white;
        bottom: 60px;
        background: pink;
        z-index: 1000;

    }

    .btn {
        position: fixed;
        /* height: 70px; */
        bottom: 50px;
        left: 0;
    }

    .every {
        position: fixed;
        width: 100%;
        height: 100px;
        bottom: 50px;
        right: 90px;
        z-index: -333;
    }
</style>