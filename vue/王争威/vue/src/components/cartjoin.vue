<template>
    <div>
        <van-sku v-model="showBase" :sku="sku" :goods="goods" :goods-id="good.id" :hide-stock="sku.hide_stock"
            :quota="quota" :quota-used="quotaUsed" :reset-stepper-on-hide="resetStepperOnHide"
            :reset-selected-sku-on-hide="resetSelectedSkuOnHide" :close-on-click-overlay="closeOnClickOverlay"
            :disable-stepper-input="disableStepperInput" :message-config="messageConfig" @buy-clicked="onBuyClicked"
            @add-cart="onAddCartClicked" />
        <!-- <van-button block type="warning" @click="showBase = true">
            点击添加加入购物车
        </van-button> -->
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-goods-action-icon icon="cart-o" text="购物车" :to="{name:'cart'}" />
            <van-goods-action-button type="warning" text="加入购物车" @click="showBase = true" />
            <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
        </van-goods-action>
    </div>

</template>
<script>
    import { mapState } from 'vuex'
    export default {
        // props:['good'],
        computed: {
            // ...mapState(['good'])
        },
        data() {
            return {
                good: {},
                messageConfig: {},
                showBase: false,
                flag: false,
                msg: {},
                sku: {},
                selectedNum: 1,
                goods: {},
                "sku.hide_stock": false,
                quota: 0,
                quotaUsed: 0,
                price: 1,
                resetStepperOnHide: false,
                resetSelectedSkuOnHide: false,
                closeOnClickOverlay: false,
                disableStepperInput: false,
                showBase: false,
            }
        },

        created() {
            // console.log("222", this.good)
            var id = this.$route.query.goodid
            console.log(id)
            // this.msg = this.$route.query.goodname
            if (id) {
                this.$axios.get('/vue/more', { params: { goodid: id } }).then(res => {
                    this.showBase=false
                    var res = res.data.result[0]
                    this.good = res
                    this.goods = {
                        title: res.name,
                        id: res.id,
                        // 默认商品 sku 缩略图
                        picture: res.img
                    },
                        this.sku = {
                            // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                            // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                            tree: [

                            ],
                            // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                            list: [
                                {
                                    id: 2259, // skuId，下单时后端需要
                                    price: res.price*100 , // 价格（单位分）
                                    s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
                                    s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
                                    s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                                    stock_num: 110 // 当前 sku 组合对应的库存
                                }
                            ],
                            price: res.price, // 默认价格（单位元）
                            stock_num: 227, // 商品总库存
                            collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                            none_sku: false, // 是否无规格商品
                            messages: [
                                {
                                    // 商品留言
                                    datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                                    multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                                    name: '留言', // 留言名称
                                    type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                                    required: '1' // 是否必填 '1' 表示必填
                                }
                            ],
                            hide_stock: false // 是否隐藏剩余库存
                        }

                })


            }


        },
        methods: {
            onBuyClicked(data) {
                console.log(data)
            },
            onClickIcon() { },
            onClickMiniBtn() { },
            onClickButton() {

            },
            onAddCartClicked(data) {
                // console.log(data)
                var username = sessionStorage.username
                // console.log(username)
                this.$axios.post('/vue/cartJoin', {id:this.good._id, selectedNum: data.selectedNum, username, goods: this.good, price: this.good.price ,}).then(res => {
                        console.log(res)
                })
            }
        }
    }
</script>