<template>
    <div>

        <Head title="商品搜索"></Head>
        <form action="/">
            <van-search v-model.lazy="keyword" placeholder="请输入搜索关键词" show-action />
            <Slist :goods="goods"></Slist>
        </form>

    </div>
</template>
<script>
    export default {
        name: "search",
        data() {
            return {
                keyword: '',
                goods: []
            }
        },
        watch: {
            keyword(newVal) {
                console.log(newVal);
                this.$axios.get("/vue/getGoods", {
                    params: {
                        keyword: newVal
                    }
                }).then(res => {
                    console.log(res);
                    this.goods = res.data.result;
                    console.log(res.data.result)
                    console.log(this.goods)
                })
            }
        },
    }
</script>