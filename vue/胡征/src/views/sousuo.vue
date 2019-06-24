<template>
    <div>

        <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
            <div v-if="flg" slot="action" @click="onSearch">搜索</div>
            <div v-if="!flg" slot="action" @click="cancel">取消</div>
        </van-search>
        <div>
            <div v-for='(a,i) in arr' :key="i">
                <router-link :to="{name:'xiangqing',query:{id:a.id}}">
                    <img :src="a.img" alt="">
                    <p class="biaoti">{{a.name}}</p>
                    <p class="jiage">$ = {{a.price}} 元</p>
                </router-link>

            </div>
        </div>
        <!-- 111111111 -->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value: "",
                flg: false,
                arr: []
            }
        },
        methods: {
            onSearch() {
                this.$axios.get("/vue/search", { params: { keyword: this.value } }).then(res => {
                    console.log(res.data.result)
                    this.arr = res.data.result
                    console.log(this.arr)
                })
            },
            cancel() {
                this.$router.go(-1)
            }
        },
        watch: {
            value(newValue, oldValue) {
                if (newValue == "") {
                    this.flg = false
                } else {
                    this.flg = true
                }
            }
        },
    }
</script>
<style lang="scss" scoped>
    img {
        width: 100vw;
        height: 50vh;
    }

    .baioti {
        width: 100vw;
        height: 10vh;
        line-height: 10vh
    }

    .jiage {
        line-height: 30px;
        border-top: 2px dashed rgb(158, 22, 22);
        border-bottom: 2px dashed rgb(158, 22, 22);
        margin: 5px 0;
        /* padding-left: 30px; */
        text-align: center;
        font-size: 20px;
        background-color: rgb(167, 228, 152);
    }
</style>