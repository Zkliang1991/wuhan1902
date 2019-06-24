<template>
    <div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" id="list-content">
            <van-list v-model="loading" :finished="finished" @load="onLoad" :offset="10">
                <div>
                    <van-swipe :autoplay="3000" indicator-color="white">
                        <van-swipe-item v-for="(img,i) in data.pic" :key="i">

                            <img :src="img.imageUrl" alt="" class="img1" @click="gotoHome(i)">
                        </van-swipe-item>
                    </van-swipe>
                </div>

                <div>
                    <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
                        最新商品上线vip 会员折扣vvdddddddddddddddddddddddddddddd
                    </van-notice-bar>
                </div>
                <div class="nav">
                    <van-row gutter="28">
                        <van-col span="8">猜你喜欢
                            <van-icon name="arrow" />
                        </van-col>
                        <van-col span="8"></van-col>
                        <van-col span="8">
                            <van-notice-bar text="抢红包啦" left-icon="volume-o" :scrollable="false" />
                        </van-col>
                    </van-row>
                </div>
                <div class="par  ">
                    <div v-for="(good,i) in data.movie" class="move">
                        <router-link :to="{name:'good',params:{goodId:good.id},query:{name:good.name,goodId:good.id}}" class="item">
                            <img :src="good.img" alt="">
                            <p class="name">{{good.name}}</p>
                            <p class="price">¥:{{  good.price }} </p>
                        </router-link>
                        
                    </div>
                    <br>
                </div>
            </van-list>
        </van-pull-refresh>

    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex"
    export default {
        data() {
            return {
                isLoading: false,
                loading: false,   //是否处于加载状态
                finished: false,  //是否已加载完所有数据
            }
        },
        name: 'selects',
        computed: {
            ...mapState(['newPic', 'data'])
        },


        methods: {
            ...mapActions(['getPic', 'getGoods']),
            gotoHome() { },
            onRefresh() {
                setTimeout(() => {
                    this.$axios.get('/vue/goods', {
                        params: {
                            limit: 18,
                            skip: 8,
                        }
                    }).then(res => {
                        this.$store.commit('getNewMovie', res.data.result)
                    })

                    this.isLoading = false;
                }, 500);
            },
            onLoad() {
                this.loading = false;
                setTimeout(() => {
                    // for (let i = 0; i < 9; i++) {
                    //     this.data.movie.push(this.data.movie.length + 1);
                    // }
                    // if (this.data.movie.length >= 19) {
                        this.finished = true;
                    // }
                }, 1000);
            }
        },

        mounted() {

            this.getPic({
                url: '/vue/pic',
                params: {
                    limit: 4,
                },
            })
            this.getGoods({
                url: '/vue/goods',
                params: {
                    limit: 20,
                },
            })
            // var winHeight = document.documentElement.clientHeight                          //视口大小
            // document.getElementById('list-content').style.height = (winHeight - 46) + 'px'  //调整上拉加载框高度
            // console.log(winHeight)
        },
    }

</script>
<style scoped>
    .par {    
        margin-top: 0.3rem;
    }
    .img1{
        width: 100%;
        height: 5.4rem;
    }

    #list-content {
        /* overflow: scroll; */
    }

    .nav {
        margin-top: 0.24rem;
    }

    .van-col--8 {
        font-size: 18px;
        font-weight: 600;
    }



    .item {
        /* width: 100%; */
        float: left;
        padding: 0.2rem;
        width: 3.7rem;
        height: 4.06rem;
        box-sizing: border-box;
        display: block;
        /* border-bottom: 2px dotted darkgoldenrod; */
    }

    .item>img {
        width: 100%;
        height: 100%;
        height: 3.2rem;
    }

   
    .price{
        font-size: 14px;
    }
    .name{
        text-overflow: ellipsis;
        width: 3.6rem;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
    }
    br{
        clear: both;
    }
</style>