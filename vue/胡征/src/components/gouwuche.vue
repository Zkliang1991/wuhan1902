<template>
    <div>
        <div v-for="(a,i) in att" :key="i" v-if="a.goods">
            <van-card :num="a.selectedNum" tag="标签" :price="a.price" desc="描述信息" :title="a.goods.name"
                :thumb="a.goods.img" origin-price="10.00" thumb-link="{name:'xiangqing',query:{id='a.goods.id'}}">
                <div slot="footer">
                    <input type="checkbox" v-model="a.lirr" name="">
                    <van-button type="warning" @click="shanchu(i)">删除</van-button>
                    <van-button size="mini" @click="a.selectedNum++;asdf(a)">+</van-button>
                    <van-button size="mini" @click="a.selectedNum--<=1?a.selectedNum=1:a.selectedNum;adlkjf(a)">-
                    </van-button>
                </div>
            </van-card>
        </div>
        <input type="checkbox" v-model="quan" name="" v-if="swe">
        <van-button type="warning" @click="genggai" v-if="swe">全部删除</van-button>
    </div>
</template>
<script>
    import { mapMutations } from "vuex"
    import { Toast } from 'vant';

    export default {



        mounted() {
            var we = sessionStorage.usename || ""
            this.$axios.get("/vue/getcar", { params: { usename: we } }).then(res => {
                sessionStorage.goods = JSON.stringify(res.data.result)
                this.att = JSON.parse(sessionStorage.goods)
            })
            // window.onbeforeunload = e => {      //刷新时弹出提示
            //     this.$axios.post("/vue/cartJoinsanchuxinshua", this.att).then(res => {
            //         console.log(res, "111111")
            //     })
            //     // console.log(0000)
            // }
        },
        data() {
            return {
                imageURL: "",
                att: [],
                swe: true
            }
        },
        methods: {
            genggai() {
                // console.log(this.att)
                if (this.quan) {
                    sessionStorage.goods = []
                    this.att = []
                }

            },
            asdf(qqw) {
                this.$axios.post("/vue/cartJoinjiajia", qqw).then(res => {
                    // console.log(res)
                })
                // console.log(111111)
            },
            adlkjf(qqw) {
                this.$axios.post("/vue/cartJoinjiajia", qqw).then(res => {
                    // console.log(res)
                })
                // console.log(111111)
            },
            shanchu(i) {
                // console.log(this.att[i])
                this.$axios.post("/vue/cartJoinsanchu", this.att[i]).then(res => {
                    // console.log(res)
                })
                // console.log(i)
                var arr = JSON.parse(sessionStorage.goods)
                var li = arr.splice(i, 1)
                sessionStorage.goods = JSON.stringify(arr)
                this.att = arr

            },

            ...mapMutations(['gaizhi'])
        },
        computed: {
            quan: {
                get() {
                    var flag = true;
                    var arrew = 0
                    this.att.forEach((item) => {
                        if (item.lirr) {
                            arrew += item.price * item.selectedNum * 100
                        }
                        if (!item.lirr) {
                            flag = false;
                        }
                    });
                    this.gaizhi(arrew)
                    return flag;
                },
                set(val) {
                    this.att = this.att.map((item) => {
                        item.lirr = val;
                        return item;
                    })
                }
            },
        },
        watch: {
            att(newVol) {
                // console.log(newVol)
                if (newVol.length == 0) {
                    this.swe = false
                }
            },
            swe(newVal) {
                // consolg.log(newVal)
                if (!newVal) {
                    const toast = Toast.loading({
                        duration: 0,       // 持续展示 toast
                        forbidClick: true, // 禁用背景点击
                        loadingType: 'spinner',
                        message: '即将跳转列表  倒计时 3 秒'
                    });

                    let second = 3;
                    const timer = setInterval(() => {
                        second--;
                        if (second) {
                            toast.message = `即将跳转列表  倒计时 ${second} 秒`;
                        } else {
                            clearInterval(timer);
                            Toast.clear();
                            this.$router.push({ name: 'about' })
                        }
                    }, 1000);
                }
            }

        },
    }
</script>
<style lang="scss" scoped>
    div .van-button {
        height: 20px;
        line-height: 20px;
    }
</style>