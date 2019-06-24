<template>

    <div>


        <Head title="首页"></Head>

        <van-notice-bar text="本站618大促,欢迎新老用户光临,3折优惠,vip品牌日速来抢购,仅限618" left-icon="volume-o" :scrollable="true" />
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img src="http://img.alicdn.com/imgextra/i1/2257674596/TB2cB8BcTAKh1JjSZFDXXbKlFXa_!!2257674596.jpg"
                    alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="http://img.alicdn.com/imgextra/i4/2257674596/TB2MXfKw5pnpuFjSZFIXXXh2VXa_!!2257674596.jpg"
                    alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="http://img.alicdn.com/imgextra/i4/2257674596/TB2xmb8w9FmpuFjSZFrXXayOXXa_!!2257674596.jpg"
                    alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="http://img.alicdn.com/imgextra/i4/2257674596/TB2xmb8w9FmpuFjSZFrXXayOXXa_!!2257674596.jpg"
                    alt="">
            </van-swipe-item>
        </van-swipe>

        <ul>
            <li v-for="(item,i) in list" :key="i" class="product">
                <nuxt-link :to="{name:'good',query:{goodId:item.id}}">
                    <img :src="item.img" alt="">
                    <h2 class="txt">￥{{item.price}}</h2>
                </nuxt-link>

            </li>
        </ul>
        <p class="empty">
            <video width="100%" height="240" controls autoplay="autoplay">
                <source
                    src="http://hc.yinyuetai.com/uploads/videos/common/77D0016B51007FAA1A54BAAF486A9E9E.mp4?sc=a62c02f47498992c&br=793&vid=3386048&aid=22&area=HT&vst=0" />
            </video>
        </p>
        <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了">
            <van-cell v-for="(item,i) in list" :key="i" />
            <!-- <h2>{{item.id}}</h2> -->
        <!-- </van-list>  -->
        <Foot></Foot>
    </div>

</template>


<script>
    import { NoticeBar } from 'vant';
    import { Swipe, SwipeItem } from 'vant';
    import { List } from 'vant';


    export default {


        data() {

            return {
                list: [],
                loading: false,
                finished: false
            }
        },
        name: "home",
        watch: {
            '$route': function (to) {
                console.log(to);
            }
        },
        mounted() {

            this.$axios.get("/api/getGoods", {

            }).then(res => {
                console.log(res)
                this.list = res.data.result;
                console.log(this.list);

            })
            // console.log(111)
        },

    }

</script>

<style>
    .van-swipe-item img {
        width: 100%;
        height: 300px;
    }

    .product {

        float: left;
        height: auto;
        padding: 0 2px;
        /* margin: auto 5px; */
    }

    .product img {
        /* width: 50%; */
    }

    .txt {
        color: purple;
    }

    .empty {
        position: absolute;
        top: 2500px;
        left: 0;
        width: 100%;
        height: 300px;
    }
</style>