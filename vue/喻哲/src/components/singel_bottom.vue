
<template>
    <div>
        <div class="bottom">
            <van-goods-action>
                <van-goods-action-icon
                    icon="chat-o"
                    text="客服"
                />
                <van-goods-action-icon
                    :info="cartCount"
                    icon="cart-o"
                    text="购物车"
                    @click="toCart"
                />
                <van-goods-action-icon
                    :icon="star"
                    text="收藏"
                    class="shoucang"
                    @click="shoucang"
                />
                <van-goods-action-button
                    type="warning"
                    text="加入购物车"
                    @click="joinCart"
                />
                <van-goods-action-button
                    type="danger"
                    text="立即购买"
                />
            </van-goods-action>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {  
  data() {
    return {
        star:"star-o",
        }
    },
    computed:{
        ...mapState(['singel','mine','buycart','collections']),
        cartCount(){
            var count = this.buycart.goods.length;
            return count
        }
    },
    mounted() {
        // this.$axios.post('vue/isCollect',{good:this.singel.good}).then(result=>{
        //     // if(result.data.type==1){
        //     //     this.star = "star";
        //     // }else{
        //     //     this.star = "star-o";
        //     // }
        //     console.log(result)
        // })
    },
    methods: {
        toCart(){
            this.$router.push('/index/buycart')
        },
        joinCart(){
            this.$axios.post('/vue/addCart',{
                goodId: this.$route.params.id,
                good:this.singel.good,
                check:false,
            }).then(res=>{
                console.log(res)
            })  
        },
        shoucang(){
            this.$axios.post('/vue/shoucang',{
                good:this.singel.good,
                star:"star",
                }).then(result=>{
                    console.log(result)
            })
            this.star = this.star=="star-o"?"star":"star-o";
            
            
        }
    }
};
</script>


<style lang="scss" scoped>
.van-goods-action{
    z-index: 999;
}
// .van-icon-star-o {
//     // color: red;
// }
</style>


