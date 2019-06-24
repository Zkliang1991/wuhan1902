<template>
    <div>




        <van-list :immediate-check="flag" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad"
            :offset="num">

            <Head msg="店长推荐"></Head>
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <router-link v-for="(good,i) in data.tuijianGood" :to="{name:'more',query:{goodid:good._id}}" :key="i">
                    <tuiJian :good='good'></tuiJian>
                </router-link>
            </van-pull-refresh>
        </van-list>
    </div>
</template>
<script>
    import { PullRefresh } from 'vant';
    import { mapActions, mapMutations, mapState } from "vuex"
    import tuiJian from "@/components/tuijian.vue"
    export default {
        components: { tuiJian },
        data() {
            return {
                loading: false,
                finished: false,
                num: 0,
                goods: [],
                flag: false,
                down: "",
                isLoading: false,
                count: 0,
                num1: 10
            }
        },
        created() {
            // this.$axios.get('/vue/getgoods', { params: { num: 10} }).then(res => {
            //     this.goods=res.data.result
            //     // console.log(res)
            // })
            this.tuijian({ url: '/vue/getgoods', params: { number: this.num1 } })
        },
        methods: {
            ...mapActions(['tuijian']),
            ...mapMutations(['shuaxin']),
            
            onLoad() {
               
                this.count+=5
                // console.log(this.count)
                // this.finished = true
                this.$axios.get('/vue/getgoods', { params: { num: this.count,number:5} }).then(res => {
                    // console.log(res)
                    if(res.data.result[0]){
                        res.data.result.forEach(element => {
                        this.data.tuijianGood.push(element)
                        this.finished = false;
                        this.loading= false;
                    });
                    }else{
                        // console.log(1111)
                        this.finished = true ;
                        this.loading= false;
                    }
                    

                })
            },
            onRefresh() {
                var num = Math.round(Math.random() * 15) + 10
                this.$axios.get('/vue/getgoods', { params: { num } }).then(res => {
                    // console.log(res)
                   
                    this.shuaxin(res.data.result)
                    this.$toast('刷新成功');
                    this.isLoading = false;
                })
                // setTimeout(() => {
                //     
                //     
                //     this.count++;
                //     console.log(this.count)
                // }, 500);
            }

        },
        computed: {
            ...mapState(['data'])
        }
    }
</script>