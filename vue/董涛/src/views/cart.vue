<template>
    <div>
        <Head title="购物车"></Head>
        <div :v-if='flag'>
            <div slot="top" class="top">
                <van-checkbox v-model="checked" class="checkAll">全选</van-checkbox>
                <!-- <van-button size='small' type="danger" class="delChecked">删除</van-button> -->
            </div>
            <van-checkbox-group class="card-goods" v-model="checkedGoods">
                <van-checkbox
                class="card-goods__item"
                v-for="(item , i) in goods"
                :key="i"
                >
                    <van-card
                    :title="item.good.name"
                    :desc="item.good.describe"
                    :num="item.count"
                    :tag="item.good.type?item.good.type.text:''"
                    :price="item.good.price"
                    :thumb="item.good.img"
                    >
                        <div slot="footer">
                            <van-button size='small' type="danger" class="delChecked" @click="delGoodOne(i)">删除</van-button>
                            <van-stepper v-model="item.count" integer />
                        </div>
                    </van-card>
                </van-checkbox>
            </van-checkbox-group>
            
            <van-submit-bar
                :delChecked="delChecked"
                :price="totalPrice"
                :disabled="!checkedGoods.length"
                :button-text="submitBarText"
                @submit="onSubmit"
                />
        </div>
        <div v-if='!flag' class="empty-box">
            <img src="//static.21cake.com/themes/wap/img/cart-empty.png">
            <p>您的购物车里还没有商品</p>
            <a href="/gallery-index---0---1.html">去购物 &gt;&gt;</a>
        </div>
    </div>
</template>


<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from 'vant';
// import store from "@/store";
// import {mapState} from 'vuex';
export default {
    components: {
        [Card.name]: Card,
        [Checkbox.name]: Checkbox,
        [SubmitBar.name]: SubmitBar,
        [CheckboxGroup.name]: CheckboxGroup
    },
    data() {
        return {
            checkedGoods: [],
            goods: [],
            checked:false,
            flag:Boolean,
        };
    },
    computed: {
       
        
        submitBarText() {
            const count = this.checkedGoods.length;
            return '结算' + (count ? `(${count})` : '');
        },
        totalPrice() {
            return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
        }
    },
    methods: {
        // formatPrice(price) {
        //     return (price / 100).toFixed(2);
        // },
        delChecked(){

        },
        delGoodOne(i){
            if(!confirm('确定删除该商品吗~?')){
                window.event.returnValue = false;
            }else{
                this.goods.splice(i,1);
                console.log(this.goods[i]);
                var username = this.goods[i].username; 
                var goodId = this.goods[i].goodId; 
                console.log(username,goodId);
                 this.$axios.post('/vue/delGoods',{
                    username,
                    goodId,
                }).then(res=>{
                    console.log(res);
                })
            }
        },
        onSubmit() {
            Toast('点击结算');
        }
    },
    mounted(){
        console.log(this.$store);
        var username = sessionStorage.username;
        console.log(username);
        if(username){
            this.flag = true ;
            this.$axios.post("/vue/getCarGoods",{
                username
            }).then(res=>{
                console.log(res);
                this.goods = res.data.result;
                console.log(this.goods);
                
                // this.goods.forEach(function(item){
                //     return  item.goodId
                // })
            })
        }else{
            this.flag = false;
        }
    }
};
</script>

<style lang="scss" scoped>
    .card-goods {
        padding: 10px 0;
        background-color: #fff;
        margin-bottom: 120px;
    }
    .card-goods__item {
        position: relative;
        background-color: #fafafa;
        border-bottom: 10px solid #fff;

    }
    .card-goods__item .van-checkbox__label {
        width: 100%;
        height: auto; // temp
        padding: 0 10px 0 15px;
        box-sizing: border-box;
    }
    
    .van-checkbox__icon {
        top: 50%;
        left: 10px;
        z-index: 1;
        position: absolute;
        margin-top: -10px;
    }
    .van-card__price {
        color: #f44;
    }
    .van-card__content{
        width: 270px;
    }
    .van-card{
        padding: 10px 0
    }
    .van-submit-bar{
        margin-bottom: 50px;
    }
    .numBtn{
        border-radius: 5px;
    }
    .van-button--mini {
        height: 22px;
        min-width: 35px;
        font-size: 10px;
        line-height: 20px;
    }
    .top{
        width: 100%;
        height: 30px;
    }
    .checkAll{
        display: inline-block;
        vertical-align: middle;
        margin-top: 0.1rem;
        // float: left;
    }
    .delChecked{
        float: right;
    }

    .empty-box{
        max-width: 420px;
        margin: 0 auto;
        margin-top: 120px;

    }
    .empty-box img{
        height: 150px;
        width: 150px;
        display: block;
        margin: 0 auto;
    }
    .empty-box p{
        margin: 10px 0;
        font-size: 14px;
        color: #D5BFA7;
        text-align: center;
    }
    .empty-box a{
        width: 120px;
        margin: 0 auto;
        display: block;
        text-align: center;
        font-size: 12px;
        color: #442818;
    }
    .empty-box a:hover{
        cursor: pointer;
        color: #442818;
    }
</style>