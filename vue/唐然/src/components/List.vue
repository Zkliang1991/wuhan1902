<template>
    <div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功!" loading-text="刷新中...">
            <ul v-if="goods.length>0">
                <li v-for=" (good,i) in goods " :key="i">
                    <Item :good="good"></Item>
                </li>
            </ul>
        </van-pull-refresh>
    </div>
</template>

<script>
    import Item from "./Item.vue"
    export default {
        data() {
            return {
                isLoading: false,
                goods: this.allGoods.filter(item => item.type.value == this.type.value),
            }
        },
        components: {
            Item
        },

        props: {
            type: Object,
            allGoods: Array
        },
        methods: {
            onRefresh() {
                this.$axios.get("/vue/getGoodsByTypes", {
                    params: {
                        type: this.type.value
                    }
                }).then(res => {
                    setTimeout(() => {
                        this.goods = res.data.result.reverse();
                        console.log(res)
                        this.isLoading = false;
                    }, 500);
                })

            }
        }
    }
</script>

<style scoped>

</style>