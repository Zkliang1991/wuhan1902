<template>
    <div>
        <Header :title="errt.name"></Header>
        <div class="box">
            <img :src="errt.img" alt="">
            <p class="a1">
                {{errt.name}}
            </p>
            <div class="a2">
                秒杀价:<span>{{errt.price}}</span>
            </div>
        </div>
        <div class="wap">
            <h2 class="aljsdl">历史好评</h2>
            <!-- <hr> -->

            <van-button type="primary" ref="one" size="large" @click="liuyan">发表评论</van-button>
            <van-field v-model="value" placeholder="评论内容" @keyup.13="aslee" />
            <div v-for="(a,i) in arr">
                <p>
                    内容： {{a.value}}
                </p>
                <p>时间：{{a.time}}</p>
                <p>留言人：{{a.usename}}</p>
            </div>
        </div>
        <Goodsa :errt="errt"></Goodsa>
    </div>
</template>
<script>
    import { Toast } from 'vant';
    import { mapActions, mapState, mapMutations } from "vuex"
    export default {
        data() {
            return {
                errt: {},
                arr: [],
                value: ""

            }
        },
        mounted() {
            console.log(this.$route.query.id)
            var id = this.$route.query.id
            this.$axios.get("/vue/goodsid", { params: { id: id } }).then(res => {
                console.log(res)
                this.errt = res.data.result[0]
                if (localStorage[this.errt.id]) {
                    this.arr = JSON.parse(localStorage[this.errt.id])
                    console.log(this.arr, "444444444")
                }
            })
        },
        methods: {
            liuyan() {
                if (this.value != "") {
                    var obj = {}
                    var time = new Date();
                    var year = time.getFullYear();
                    var month = time.getMonth() + 1;
                    var day = time.getDate();
                    var hour = time.getHours();
                    var min = time.getMinutes();
                    var second = time.getSeconds();
                    var data = `${year}年${month}月${day}日 ${hour}:${min}:${second}`
                    obj.usename = sessionStorage.usename
                    obj.value = this.value
                    obj.time = data
                    obj.id = this.errt.id
                    this.arr.unshift(obj)
                    console.log(obj.usename)
                    localStorage[this.errt.id] = JSON.stringify(this.arr)
                    this.value = ""
                } else {
                    Toast('内容不能为空');
                }
            },
            aslee() {
                this.$refs.one.click()
            }
        },

    }
</script>
<style lang="scss" scoped>
    .box {
        margin-top: 46px;

        >img {
            width: 100vw;
            height: 60vh;
        }
    }

    .a1 {
        margin-top: 15px;
        color: brown;
        line-height: 20px;
    }

    .a2 {
        font-size: 25px;
        color: red;
        font-weight: 900;
        margin-top: 10px;
        margin-left: 20px;

        >span {
            font-size: 30px;
            color: #9ff;
            margin-left: 15px;
        }
    }

    .aljsdl {
        margin-top: 30px;
        font-size: 30px;
        color: blueviolet;
        text-align: center
    }

    .wap {
        padding-bottom: 150px;
    }
</style>