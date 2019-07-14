
<template>
    <div>
        <div class="head">
            <div class="headtop">
                <p class="p1">购物车</p>
                <p class="p2" @click="manage">管理</p>
            </div>
            <p>共{{count}}件宝贝</p>
        </div>

    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(['buycart']),
        count(){
            var count = this.buycart.goods.length;
            return count
        }
    },
    // mounted() {
    //     console.log(this.buycart)
    // },
    methods: {
        manage(){
            this.changeTf()
        },
        ...mapActions(['changeTf']),
    },
}
</script>

<style lang="scss" scoped>
.head{
    width: 100%;
    color: #fff;
    background-color: #3173e4;
    >p{
        text-align: left;
        padding-left: .2rem;
        font-size: 0.22rem;
    }
    >.headtop{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: underline;
        box-sizing: border-box;
        padding: 0 .2rem;
        >.p2{
            font-size: 0.24rem;
        }
    }
}




// .van-nav-bar{
//     background-color: #3173e4;
//     color: #fff;
// }
// .van-nav-bar__title{
//     color: #fff;
// }
// .van-nav-bar__text{
//     color: #fff;
//     font-size: .25rem;
//     text-decoration: underline;
// }
</style>
