<template>
    <div>

        <Head title="商品分类"></Head>
        <div v-if="show">
            <van-tabs v-model="active" animated swipeable>
                <van-tab v-for="(type,i) in types" :key="i" :title="type.text" :id="type.value">
                    <List :type=" type" :allGoods="allGoods" @changegoods="getAllGoods">

                    </List>
                </van-tab>
            </van-tabs>


        </div>

    </div>

</template>

<script>
    export default {
        name: "classify",
        data() {
            return {
                types: [],
                allGoods: [],
                show: false,
                active: 2
            }
        },
        created() {
            this.$axios.get("/vue/getGoodTypes")
                .then(res => {
                    console.log(res)
                    this.types = res.data.result;
                })
        },
        mounted() {
            this.$axios.get("/vue/getGoods")
                .then(res => {

                    this.allGoods = res.data.result;
                    this.$nextTick(() => {
                        this.show = true;
                    })

                })
        },
        methods: {
            getAllGoods() {
                this.allGoods = this.allGoods.reverse();
            }
        }
    }
</script>