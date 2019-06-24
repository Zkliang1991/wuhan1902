<template>
    <div style="padding-bottom:100px ">

        <Head title="购物车"></Head>
        <div v-if="carts.length>0">
            <div v-for="(car,i) in carts" :key="i">
                <van-card :num="car.count" :price="car.good.price" :title="car.good.name" :thumb="car.good.img"
                    class="tilte">
                    <div slot="footer">
                        <van-checkbox v-model="car.check"> </van-checkbox>
                        <van-stepper v-model="car.count" input-width="80px" @change="Update" />
                        <van-button size="small" round @click="del(car.goodId)">删除</van-button>
                    </div>
                </van-card>
                <van-submit-bar :price="sun()" button-text="提交订单" @submit="" style="bottom: 50px;">
                    <van-checkbox v-model=" checked">全选</van-checkbox>
                </van-submit-bar>
            </div>
        </div>
        <div v-else>
            <van-notice-bar color="#1989fa" background="#ecf9ff">
                您的购物车是空的！
            </van-notice-bar>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                carts: [],
            }

        },
        props: {
            good: Object,
            count: String
        },
        mounted() {
            this.getCart()
        },
        methods: {
            //获取购物车数据
            getCart() {
                this.$axios.get("/vue/getCart", {

                }).then(res => {
                    this.carts = res.data.result;
                })
            },
            //计算购物车总价
            sun() {
                var total = 0;
                this.carts.forEach((item) => {
                    if (item.check) {
                        total += item.count * item.good.price
                    }
                })
                return total * 100;
            },
            //删除购物车数据
            del(id) {
                console.log(id)
                this.$axios.post("/vue/toDel", {
                    goodId: id
                }).then(res => {
                    console.log(res)
                    this.getCart();
                })
            },
            //同步购物车数量
            Update() {
                this.carts.forEach((item) => {
                    this.$axios.post("/vue/toCar", {
                        count: item.count,
                        goodId: item.goodId,
                    }).then(res => {
                    })
                })
            }
        },
        computed: {
            //全选单选
            checked: {
                get() {
                    var flag = true;
                    this.carts.forEach((item, index) => {
                        if (!item.check) {
                            flag = false;
                        }
                    });
                    return flag;
                },
                set(val) {
                    console.log(val);
                    this.carts = this.carts.map((item) => {
                        item.check = val;
                        return item;
                    })
                }

            },
        }

    }
</script>


<style scoped>
    .tilte {
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
        font-size: 0.35rem;
        padding: 0.2rem;
    }
</style>