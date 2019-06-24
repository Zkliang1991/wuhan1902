<template>

    <div>
        <!-- <Head title="首页"></Head> -->
        <van-tabs v-model="active" animated swipeable :duration="0.8">
            <van-tab v-for="(m,i) in titles" :title='m.title' :key="i" @click='go(m.name)'>
             
                <div>
                    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
                        <div slot="action" @click="onSearch">搜索</div>
                    </van-search>
                </div>
                <Selects v-if="i==0?true:false"></Selects>

                <girl v-if="i==1?true:false"></girl>
                <man v-if="i==2?true:false"></man>
                <!-- <showTv v-if="i==3?true:false"></showTv> -->
            </van-tab>
        </van-tabs>
        <div></div>

      

    </div>
</template>



<script>
    import { mapState, mapActions } from "vuex"

    import man from "@/components/man.vue";
    import Selects from "@/components/select.vue";

    import girl from "@/components/girl.vue";
    // import showTv from "@/components/showTv.vue";

    export default {
        name: 'home',
        components: {
            man,
            Selects,
            girl,
            // showTv

        },
        computed: {
            ...mapState(['data', 'newMv',]),
            value:{
                get(){
                    return this.$store.state.value
                },
                set(val){
                    this.$store.commit('getValue',val)
                }
            }
        },

        data() {
            return {
                titles: [
                    { title: '精选', name: 'selects' },
                    { title: '女装', name: 'girl' },
                    { title: '男装', name: 'man' },
                    // { title: '男装', name: 'showTv' },

                  
                    // {title:"bars",name:''}
                ],
                active: '精选',
            
            }
        },
        methods: {
            go(i) {
                // this.$router.push({ name: i.name })
            },
            onSearch(){
                this.$router.push({ name: 'search' })

            }

        },


    }
</script>
<style scoped>
    .van-tabs__wrap {
        position: fixed !important;
    }
</style>