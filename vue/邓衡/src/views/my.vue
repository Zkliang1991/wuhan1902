<template>

    <div>

        <Head title="个人中心" show="true"></Head>
        <div class="pic">
            <!-- <img src="../assets/images/pic.jpg" alt=""> -->
            <Photo></Photo>
            <h3>{{name}}</h3>
            <div class='icoRight three'>
                <van-icon name="setting-o" size="30" @click="toback" />
                注销
            </div>
            <div class="close">             
            </div>

        </div>
        <div class="me">
            <router-link :to="{name:'alls'}" class="item">
                <van-swipe-cell>
                    <van-cell :border="false" title="我的订单" value="查看订单" />
                </van-swipe-cell>
            </router-link>
            <van-row type="flex" justify="center">
                <van-col span="6">
                    <router-link :to="{name:'Noplay'}" class="item">
                        <div class="three">
                            <van-icon name="shop-collect-o" size="30" color="red" />待付订单
                            <van-tag round type="danger">{{num}}</van-tag>
                        </div>
                    </router-link>
                </van-col>
                <van-col span="6">
                    <router-link :to="{name:'Toshipped'}" class="item">
                        <div class="three">
                            <van-icon name="send-gift-o" size="30" color="red" /> 待发货</div>
                    </router-link>
                </van-col>
                <van-col span="6">
                    <router-link :to="{name:'Toreceived'}" class="item">
                        <div class="three">
                            <van-icon name="send-gift-o" size="30" color="red" /> 待收货</div>
                    </router-link>
                </van-col>
                <van-col span="6">
                    <router-link :to="{name:'evaluate'}" class="item">
                        <div class="three">
                            <van-icon name="more-o" size="30" color="red" /> 评价</div>
                    </router-link>
                </van-col>
                <van-col span="6">
                    <!-- <router-link :to="{name:'after'}" class="item"> -->
                        <div class="three">
                            <van-icon name="refund-o" size="30" color="red" /> 退款/售后</div>
                    <!-- </router-link> -->
                </van-col>
            </van-row>
        </div>
        <div class="all">
            <h3 class="title">第三方</h3>

            <van-row type="flex" justify="space-around">
                <van-col span="6">
                    <div class="three">
                        <van-icon name="video-o" size="30" color="red" />
                        <span>ccc</span>
                    </div>
                </van-col>
                <van-col span="6">
                    <div class="three">
                        <van-icon name="shop-collect-o" size="30" color="red" />
                        <span>ccc</span>
                    </div>
                </van-col>
                <van-col span="6">
                    <div class="three">
                        <van-icon name="play-circle-o" size="30" color="red" />
                        <span>ccc</span>
                    </div>
                </van-col>

            </van-row>
            <van-row type="flex" justify="space-around">
                <van-col span="6">
                    <div class="three">
                        <van-icon name="newspaper-o" size="30" color="red" />
                        <span>ccc</span>
                    </div>
                </van-col>
                <van-col span="6">
                    <div class="three">
                        <van-icon name="apps-o" size="30" color="red" />
                        <span>ccc</span>
                    </div>
                </van-col>
                <van-col span="6">
                    <div class="three">
                        <van-icon name="ecard-pay" size="30" color="red" />
                        <span>ccc</span>
                    </div>
                </van-col>

            </van-row>

        </div>
        <div class="all">
            <h3 class="title">限时推广</h3>

            <van-row type="flex" justify="space-around">
                <van-col span="6">
                    <div class="three">
                        <van-icon name="vip-card" size="30" color="red" />
                        <span>ccc</span>
                    </div>
                </van-col>
                <van-col span="6">
                    <div class="three">
                        <van-icon name="alipay" size="30" color="red" />
                        <span>ccc</span>
                    </div>
                </van-col>
                <van-col span="6">
                    <div class="three">
                        <van-icon name="photograph" size="30" color="red" />
                        <span>ccc</span>
                    </div>
                </van-col>

            </van-row>
            <van-row type="flex" justify="space-around">
                <van-col span="6">
                    <div class="three">
                        <van-icon name="live" size="30" color="red" />
                        <span>ccc</span>
                    </div>
                </van-col>
                <van-col span="6">
                    <div class="three">
                        <van-icon name="service" size="30" color="red" />
                        <span>ccc</span>
                    </div>
                </van-col>
                <van-col span="6">
                    <div class="three">
                        <van-icon name="gem-o" size="30" color="red" />
                        <span>ccc</span>
                    </div>
                </van-col>

            </van-row>
            <div class="three"></div>
        </div>
    </div>
</template>



<script>
    import { mapState, mapActions } from "vuex";
    import { Dialog } from 'vant';
    export default {
        name: 'my',
        data() {
            return {

                name: '',
                show: false,
                num: 0,
            }
        },

        computed: {
            ...mapState(['data', 'login']),
            username: {
                get() {
                    return this.$store.state.login.username
                }
            },

        },
        created() {
            this.$axios.get('/vue/payment')
                .then(res => {
                    console.log(res.data.result)
                    this.num = res.data.result.length
                })
        },
        mounted() {
            var name = sessionStorage.username
            this.name = name
        },

        methods: {
            toback() {
                this.show = !this.show
                Dialog.confirm({
                    message: '请您确认注销！'
                }).then(() => {
                    sessionStorage.removeItem("userInfo")
                    sessionStorage.removeItem('username');
                    this.$router.push({ name: 'login' })
                }).catch(() => {
                });
            },
            confirm() {
                // console.log(1111111111111)
            }
        }

    }
</script>
<style>
    .pic {
        display: flex;
        margin-top: 1.52rem;
        margin-left: 0.4rem;
    }

    .pic>h3 {
        margin-top: 0.3rem;
        margin-left: 0.3rem;
        font-size: 16px;
        font-weight: 500;
        color: firebrick;

    }

    .me {
        background-color: #fff;
        margin-top: 0.4rem;
        font-weight: 500;
        border: 1px solid transparent;
        border-radius: 0.6rem
    }

    .all {
        margin-top: 0.8rem
    }

    .title {
        margin-bottom: 0.5rem;
        font-weight: 500;
    }

    .three {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 0.6rem;

    }

    .icoRight {
        position: relative;
        right: -3.2rem;
        top: 1.3rem;
        color: rgba(206, 171, 171, 0.7)
    }

    .close {
        text-align: center;
        color: red;
        font-size: 18px;
    }

    .van-cell--borderless {
        border-radius: 0.6rem;
    }

    .three .van-tag {
        position: absolute;
        left: 1rem;
        top: 4.64rem;
    }
</style>