<template>

    <div>

        <Head title="确认订单"></Head>
        <!-- (sureGood?sureGood:data.CarGoods) -->
        <div class="address">
            <van-contact-card />
            <van-address-list v-model="chosenAddressId" :list="list" :disabled-list="disabledList" @add="onAdd"
                @edit="onEdit" />
        </div>
        <div class="par">
            <div v-if="shows1">
                <div v-if="sureGood.type" class="goods">
                    <van-card :num="num" :tag="sureGood.type.value" :price="(sureGood.price*0.9).toFixed(2)  "
                        :desc="sureGood.name" :title="sureGood.type.text" :thumb="sureGood.img"
                        :origin-price="sureGood.price">
                        <div slot="footer">
                            小计：<span>{{(num*sureGood.price*0.9).toFixed(2)}}</span>
                            <van-stepper v-model="num" @change="Onchange({num:num,id:sureGood.id,good:sureGood})" />
                        </div>
                    </van-card>
                    <div class="">
                        <van-swipe-cell>
                            <van-cell :border="false" title="公益宝贝" value="成功交易后将捐献0.02元给公益宝贝计划" @click="bt1" />
                            <van-cell :border="false" title="配送方式" value="快递 免邮" @click="bt1" />
                            <van-cell :border="false" title="运险费" value="卖家送 确认收货前可理赔" @click="bt1" />
                            <van-icon name="arrow" class="right" />
                            <van-icon name="arrow" class="right two" />
                            <van-icon name="arrow" class="right three" />
                        </van-swipe-cell>
                    </div>
                </div>
            </div>
            <div v-if="shows2">
                <div v-for="(g,i) in data.CarGoods" :key='i' v-if="g.good.type" class="goods">
                    <van-card :num="g.num" :tag="g.good.type.value" :price="(g.good.price*0.9).toFixed(2)  "
                        :desc="g.good.name" :title="g.good.type.text" :thumb="g.good.img" :origin-price="g.good.price">
                        <div slot="footer">
                            小计：<span>{{(g.num*g.good.price*0.9).toFixed(2)}}</span>
                            <!-- <van-stepper v-model="g.num" @change="Onchange({num:g.num,id:g.id})" /> -->
                        </div>
                    </van-card>
                    <div class="baby">
                        <van-swipe-cell>
                            <van-cell :border="false" title="公益宝贝" value="成功交易后将捐献0.02元给公益宝贝计划" @click="bt1" />
                            <van-cell :border="false" title="配送方式" value="快递 免邮" @click="bt1" />
                            <van-cell :border="false" title="运险费" value="卖家送 确认收货前可理赔" @click="bt1" />
                            <van-icon name="arrow" class="right" />
                            <van-icon name="arrow" class="right two" />
                            <van-icon name="arrow" class="right three" />
                        </van-swipe-cell>
                    </div>
                </div>
            </div>
        </div>
        <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
            <div class="position">
                <van-button type="primary" size="normal">取消</van-button>
                <van-button type="danger" size="normal">确认</van-button>
            </div>
        </van-popup>
        <div v-if="shows1">
            <van-submit-bar :price="price1" button-text="提交订单" @submit="onSubmit" />
        </div>
        <div v-if="shows2">
            <van-submit-bar :price="price" button-text="提交订单" @submit="onSubmit" />
        </div>
    </div>





</template>


<script>
    import { Toast } from 'vant';
    import { mapState, mapActions } from "vuex"
    export default {
        name: 'myList',
        data() {
            return {
                chosenAddressId: '1',
                list: [
                    {
                        id: '1',
                        name: '收货人：张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                    },
                ],
                disabledList: [],
                show: false,
                sureGood: [],
                shows1: false,
                shows2: false,
                num: 1,
               

            }
        },
        created() {
            console.log(this.$route.query.goodId)
            if (this.$route.query.goodId !== undefined) {
                this.shows1 = true
                this.$axios.get('/vue/renderOne',
                    {
                        params: { id: this.$route.query.goodId }
                    }).then(res => {
                        this.sureGood = res.data.result
                        console.log(this.sureGood)

                    })
            } else {
                this.shows2 = true
                this.getCarGoods({
                    url: '/vue/render',
                })
            }
        },

        methods: {
            ...mapActions(['getCarGoods']),
            bt1() {
                console.log(this)
                this.show = !this.show

            },

            onAdd() {

            },

            onEdit(item, index) {
                // Toast('编辑地址:' + index);
                this.$router.push({ name: 'callList' })

            },

            goCallList() {
                this.$router.push({ name: 'callList' })
            },
            Onchange() {               
            },
            onSubmit() {
                console.log(this.num)
                Toast.loading({
                    mask: true,
                    message: '正在跳转支付宝...'
                });
                if(this.shows1){
                    this.$axios.get('/vue/NoPlay', {
                        params: {num:this.num,id:this.sureGood.id,good:this.sureGood}
                    }).then(res => {
                        console.log(res)
                    })
                }
                this.$router.push({ name: 'payment',query:{id:this.$route.query.goodId,num:this.num}})
            },
        },
        computed: {
            ...mapState(['data']),
            price: {
                get() {
                    var prices = 0
                    this.data.CarGoods.filter(item => {
                        if (item.good != "") {
                            var price = (item.good.price * 0.9).toFixed(0);
                            prices += price * item.num
                        }
                    })
                    return prices * 100
                }
            },
            price1: {
                get() {
                    return (this.num * this.sureGood.price * 0.9).toFixed(2) * 100
                }
            }


        }
    }

</script>
<style scoped>
    .address {
        margin-top: -0.3rem;
    }

    .van-address-list__add {
        display: none;
    }

    .van-address-list {

        padding-bottom: 0.3rem;
    }

    .van-cell__title {

        flex: none;
        width: 25%;
    }

    .van-card {
        background-color: #fff;
    }


    .right {
        position: fixed;
        left: 7.14rem;
        top: 0.3rem;
    }

    .goods {
        margin-bottom: 0.1rem;
    }

    .two {
        top: 1.15rem;
    }

    .three {
        top: 2.05rem
    }

    .position {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
    }

    .position>.van-button--normal {
        width: 50%;
    }
</style>