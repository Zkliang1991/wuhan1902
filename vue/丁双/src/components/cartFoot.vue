<template>
    <van-goods-action>
        <van-goods-action-icon
            icon="chat-o"
            text="文字评论"
            @click="onClickIcon"
        />
        <van-goods-action-icon
            icon="cart-o"
            :info = 'cartNumber'
            text="购物车"
            @click = 'pushCart'
        />
        <van-goods-action-button
            type="warning"
            text="加入购物车"
            @click="addToCar"
        />
        <van-goods-action-button
            type="danger"
            text="立即购买"
            @click="onClickButton"
        />
</van-goods-action>
</template>

<script>
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';
import { Toast } from 'vant';
import {mapState , mapMutations} from 'vuex';
import {bus} from '@/utils/bus.js';
export default {
    name:'cartFoot',
    props:['detailGds'],
    data(){
        return {
            number:1,
            cartNumber:0
        }
    },
    methods: {
        onClickIcon() {
            // Toast('客服不在家...');
            bus.$emit('addComment');
        },
        addToCar(){
            // console.log(this.$route.params.keyword)   记住自己的传值
            // 添加
            this.$axios.post('/vue/addToCar',
            {
                count:this.number,
                goodId:this.$route.params.keyword,
                good:JSON.stringify(this.detailGds),
            }).then(res=>{
                this.$axios.get('/vue/getAllGoods')
                .then(res=>{
                    res.data.result.forEach((item,i)=>{
                        var m = 0;
                        m += item.count;
                        this.cartNumber = m;
                    })
                })
            })
        },
        onClickButton() {
            Toast('马上进入购物车页面');
            this.$router.push({name:'cart'});
        },
        pushCart(){
            this.$router.push({name:'cart'})
        }
    },
    updated(){
       
    }
}
</script>

