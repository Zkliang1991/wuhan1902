<template>
    <div>
        <div v-for='(good,i) in cartGoods' :key="i" class="all">
            <input type="checkbox" class="fux" v-model="good.check">
            <van-card v-if="good.goods" :num="good.selectedNum" :tag="good.goods.type.text" :price="good.price"
                :desc="good.goods.type.text" :title="good.goods.name" :thumb="good.goods.img"
                :origin-price="good.price+good.goods.discount">
                <div slot="footer">

                    <van-button size="mini" @click='good.selectedNum++'>+</van-button>
                    <van-button size="mini" @click="good.selectedNum>1?good.selectedNum--:visible=false">-</van-button>
                </div>
            </van-card>
            <van-submit-bar :price="count" button-text="提交订单" @submit="onSubmit">
                <label for="check">全选</label>
                <input type="checkbox" id="check" v-model="quan">
            </van-submit-bar>
        </div>
    </div>

</template>
<script>
    import { mapState, mapMutations } from 'vuex'
    import { Dialog } from 'vant';
    export default {
        data() {
            return {
                // checked:false,
                // flag:false
                count: 0
            }
        },
        watch: {
            cartGoods: {
                deep: true,
                handler(val) {
                    // console.log(val);
                    var flag = true;
                    val.forEach((item) => {
                        if (!item.check) {
                            flag = false;
                        }
                    })
                    this.setQuan(flag);
                    // this.getCartInfo(carList)
                }
            },
        },
        updated() {
            var count = 0
            this.cartGoods.forEach(good => {
                if (good.check) {
                    // console.log(111)
                    count += good.selectedNum * good.price * 100
                }
                // return good
            })
            // console.log(count)
            this.count = count;
            localStorage.total = count;
        },
        computed: {
            quan: {
                get() {
                    return this.$store.state.quan;
                },
                set(val) {
                    // console.log(val);
                    var carList = this.cartGoods.map((item) => {
                        item.check = val;
                        return item;
                    })

                    this.getCartInfo(carList)
                }
            },
            cartGoods: {
                get() {
                    return this.$store.state.cartGoods
                },
                set(val) {
                    // console.log(val);
                    this.getCartInfo(val)
                }
            }

        },

        methods: {
            ...mapMutations(['getCartInfo', 'setQuan']),
            desc() {

            },
            onSubmit() {
                var flag = false
                this.cartGoods.forEach(good => {
                    if (good.check) {

                        flag = true

                    }

                    // return good
                })
                if (flag) {
                    this.$router.push({ name: "adress" })
                    var al = this.$store.state.cartGoods;
                    // console.log(al)
                    al.forEach(item => {
                        if (item.check) {
                            if (localStorage.goods) {
                                var b = JSON.parse(localStorage.goods)
                                b.push(item)
                                localStorage.goods = JSON.stringify(b)
                            } else {
                                localStorage.goods = JSON.stringify([item])
                            }
                        }
                    })
                } else {
                    Dialog.alert({
                        title: '友情提示',
                        message: '请选择商品，大佬'
                    })
                }
            },
            all() {
                console.log(111)
            }
        }
    }
</script>
<style scoped>
    #check {
        width: 0.7rem;
        height: 0.7rem;
        margin-left: 0.3rem;
    }

    .all {
        display: flex;
    }

    .fux {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        margin-top: 1rem;
        background-color: #fff;

    }
</style>