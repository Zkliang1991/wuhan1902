<template>
    <div>
        <div v-for="(good,i) in goods" :key="i" class="maiguo">
            <router-link :to="{name:'more',query:{goodid:good.goods._id}}">
                <van-card :num="good.selectedNum" :price="good.price" :desc="good.goods.type.text"
                    :title="good.goods.name" :thumb="good.goods.img" />

            </router-link>
            <pinglun>
                <van-cell-group>
                    <van-field v-model="message" label="请填写评论" type="textarea" placeholder="请输入评论" rows="3" autosize />
                    <p class="fs"> <span class="span">服务态度:</span>
                        <van-rate v-model="value" :size="25" color="#f44" void-icon="star" void-color="#666" />
                    </p>
                    <p class="fs"> <span class="span">物流服务:</span>
                        <van-rate v-model="value1" :size="25" color="#f44" void-icon="star" void-color="#666" />
                    </p>
                    <p class="fs"> <span class="span">描述相符:</span>
                        <van-rate v-model="value2" :size="25" color="#f44" void-icon="star" void-color="#666" />
                    </p>
                </van-cell-group>
                <van-button size="large" type="primary" @click=data(good)>提交评论</van-button>
            </pinglun>

        </div>


    </div>
</template>
<script>
    import pinglun from "@/components/pinglun.vue";

    import { Dialog } from 'vant';
    export default {
        components: { pinglun },
        data() {
            return {
                goods: [],
                message: "",
                value: 0,
                value1: 0,
                value2: 0
            }
        },
        created() {
            this.$axios.get('/vue/maiguo').then(res => {
                // console.log(222, res)
                this.goods = res.data.result
            })
        },
        methods: {
            data(good) {
                // console.log(good)
                // console.log(this.message)



                if (this.message) {
                    if (this.value != 0 && this.value1 != 0 && this.value2 != 0) {
                        var time = new Date();
                        var year = time.getFullYear();
                        var month = time.getMonth() + 1;
                        var day = time.getDate();
                        var hour = time.getHours();
                        var min = time.getMinutes();
                        var second = time.getSeconds();
                        var data = `${year}年${month}月${day}日 ${hour}:${min}:${second}`
                        this.$axios.post('/vue/goodsPing', { value: this.value, value1: this.value1, value2: this.value2, goods: good.goods, time: data, selectedNum: good.selectedNum, message: this.message }).then(res => {
                            // console.log(res)
                            this.message = "";
                            this.value = 0;
                            this.value1 = 0;
                            this.value2 = 0;
                            
                            Dialog.alert({
                                message: '填写评论成功'
                            })
                        })
                    } else {
                        Dialog.alert({
                            message: '请给出星级评价'
                        })
                    }
                    // console.log(this.message)

                } else {
                    Dialog.alert({
                        message: '请填写评论再提交'
                    })
                }

            }
        }
    }
</script>
<style scoped>
    .maiguo {
        margin: 0.3rem 0;
        border-top: 0.02rem solid #000
    }

    a {
        font-size: 1rem
    }

    .fs {
        display: flex;
        justify-content: space-between;
    }

    .span {
        font-size: 0.35rem;
    }
</style>