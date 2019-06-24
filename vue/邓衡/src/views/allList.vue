<template>
    <div>

        <Head title="我的订单"></Head>
        <div class="allPar">

            <van-tabs v-model="active" animated swipeable :duration="0.8">
                <van-tab v-for="(m,i) in titles" :title='m.title' :key="i" @click='go(m.name)'>


                    <all v-if="i==0?true:false"></all>
                    <Noplay v-if="i==1?true:false"></Noplay>
                    <Toshipped v-if="i==2?true:false"></Toshipped>
                    <Toreceived v-if="i==3?true:false"></Toreceived>
                    <evaluate v-if="i==4?true:false"></evaluate>

                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
    import all from "@/components/all.vue"
    import Noplay from "@/components/Noplay.vue"

    import Toshipped from "@/components/Toshipped.vue"
    import Toreceived from "@/components/all.vue"
    import evaluate from "@/components/all.vue"

    export default {
        name: 'allList',
        components:{
            all,
            Noplay,
            Toshipped,
            Toreceived,
            evaluate,
        },
        data() {
            return {
                titles: [
                    { title: '全部', name: 'all' },
                    { title: '待付款', name: 'Noplay' },
                    { title: '待发货', name: 'Toshipped' },
                    { title: '待收货', name: 'Toreceived' },
                    { title: '待评价', name: 'evaluate' },



                    // {title:"bars",name:''}
                ],
                active: '',

            }
        },
        methods: {
            go(i) {
                console.log(i)
                this.$router.push({ name: i.name })
            },


        },
    }

</script>
<style scoped>
.allPar {
        margin-top: 1.1rem;
    }
    
</style>