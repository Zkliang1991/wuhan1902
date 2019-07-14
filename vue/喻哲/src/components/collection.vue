
<template>
    <div>
        <div class="head">
            <van-nav-bar title="收藏夹" left-arrow @click-left="back" :border="false">
                <van-icon name="search" slot="right" />
            </van-nav-bar>
        </div>
        <div class="goods">
            <div class="oneGood" v-for="(good,i) in collections.goods" :key="i">
                <!-- <div class="select">
                    <input type="checkbox" name="" id="" class="checkbox" v-model="good.check">
                </div> -->
                <div class="good">
                    <van-card
                        :price="good.good.price"
                        :title="good.good.name"
                        desc=""  
                        :thumb="good.good.img"                  
                        >
                    </van-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:"collection",
    data() {
        return {
            goods:"",
        }
    },
    computed: {
        ...mapState(['collections'])
    },
    methods: {
        back(){
            this.$router.back()
        }
    },
}
</script>

<style lang="scss" scoped>
.van-nav-bar{
    background-color: #3173e4;
}
.van-nav-bar__title{
    color: #fff;
}
.van-nav-bar .van-icon{
    color: #fff;
}

.van-card{
    background-color: #fff;
    text-align: left;
}
.van-card__bottom{
    margin-top: .2rem;
}
.van-card__price{
    font-weight: bold;
    font-size: 0.3rem;
}
.van-card__content{
    justify-content: space-between;
}
</style>
