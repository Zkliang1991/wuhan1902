<template>
    <div>

        <Head title="搜索" ></Head>
        <div class="search">
            <van-search v-model="data.value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch" >
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>
        </div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div>
                <List :goods="data.goods"></List>
            </div>
        </van-pull-refresh>
    </div>
</template>

<script>
   import { Dialog } from 'vant';
   import { mapState, mapActions } from "vuex"

    export default {
        name: 'search',
        compontens: {

        },
        data() {
            return {
            //    value:'',
                isLoading: false,
               
            }
        },
        computed: {
            ...mapState(['data',]),
            value:{
                get(){
                    return this.$store.state.value
                },
                set(val){
                    this.$store.commit('getValue',val)
                }
            }
        },
      
        methods: {
            onSearch() {
                if (this.data.value != "") {
                    // console.log(val)
                    this.searchGoods({
                        url:"/vue/img",                
                        params:{
                            key: this.data.value,
                        }
                    })
                    
                }
            },
            ...mapActions([
                'searchGoods'
            ]),
            onRefresh() {
                var newGoods=this.data.goods.reverse()
                this.$store.commit('getNewGoods',newGoods)
                setTimeout(() => {
                    this.isLoading = false;
                }, 500);
            }
        }
    }

</script>
<style>
    .search{
        margin-top: 0.92rem;
    }


</style>