<template>
    <div>

        <Head title="搜索"></Head>
        <van-search placeholder="请输入搜索关键词" v-model="value" />
        <List :goods="goods" @changegoods="getNewGoods">

        </List>
        <Foot></Foot>
    </div>
</template>

<script>
    import Foot from '~/components/foot'

    export default {

        data() {
            return {
                value: "",
                goods: []
            }
        },

        methods: {

            getNewGoods(data) {
                // console.log(data);
                this.goods = data;
            }

        },
        watch: {
            value(newVal) {

                console.log(newVal);

                this.$axios.get("/api/search", {
                    params: {
                        value: newVal,

                    }
                }).then(res => {
                    this.goods = res.data.result;
                    console.log(this.goods)
                })

            }
        }

    }
</script>