<template>
    <div class="par">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" @load="onLoad">
            <div class="move">
                <List :goods="data.girl"></List>
            </div>
        </van-pull-refresh>
    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex"
    export default {
        data(){
            return{
                finished:false,
                isLoading:false,
            }
        },
        name: 'girl',
        computed: {
            ...mapState(['data'])
        },
        methods: {
            ...mapActions(['getGirl']),
            onRefresh(){
                setTimeout(() => {
                    this.$axios.get('/vue/img', {
                        params: {
                            limit: 8,
                            skip: 15,
                            key:"女"
                        }
                    }).then(res => {
                        this.$store.commit('getNewGirl', res.data.result)
                    })

                    this.isLoading = false;
                }, 500);
            },
            onLoad() {      //上拉加载
                setTimeout(() => {
                    // for (let i = 0; i < 15; i++) {
                    //     this.list.push(this.list.length + 1);
                    // }
                    // this.loading = false;
                    // if (this.list.length >= 60) {
                    //     this.finished = true;
                    // }
                }, 500);
            }

        },
        mounted() {
            this.getGirl({
                url: 'vue/img',
                params: {
                    key: '女',
                    limit:15,
                }

            })
        }
    }

</script>
