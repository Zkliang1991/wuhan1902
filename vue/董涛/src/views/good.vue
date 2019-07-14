<template>
    <div>
        <Head :title="$route.query.name" :show="true"></Head>
        <div>
            <img :src="good.img" alt="" width="100%" height="320px">
            <div class="item-s">
                <h3>{{good.name}}</h3>
                <b> ￥{{good.price}}</b>
            </div>
        </div>
        <div class="good-button">
            <van-button type="default" @click="addCart">加入购物车</van-button>
            <van-button type="danger" @click="goCart">立即购买</van-button>
        </div>
        <!-- <Sku></Sku> -->
        <div class="card">
            <h3>购买数量</h3>
            <van-stepper v-model="number" integer />
            <ul class="store-info">
                <li>
                    <img src="//static.21cake.com/themes/wap/img/fresh.png" alt="保鲜条件">                        
                    <span>保鲜条件</span>
                    <div><p>0－4℃保藏10小时，5℃食用为佳</p></div>
                </li>
            </ul>
        </div>
        <div style="padding: 15px;background: #FFFFFF; margin-top: 12px;" class="description">
                /“浅草才能没马蹄”/<br>
                /切着吃的雨前西湖龙井/<br>
                /中国绿茶与爽脆果实，工笔勾勒一杯好茶/<br>
                /复杂而纯粹的深浅绿意/<br>
                *本款为季节性产品，夹心层5月10日起为梨。                
        </div>

    </div>
</template>

<script>
// import Sku from "@/components/sku.vue";
import { Toast } from 'vant';
import { Dialog } from 'vant';
export default {
    name:"good",
    data(){
        return{
            goodId:this.$route.params.goodId,
            good:{},
            show:false,
            number:1
        }
    },
    methods:{
        addCart(){
            var username = sessionStorage.username;
            if(username){
                this.$axios.post("/vue/addCart",{
                    count:this.number,
                    goodId:this.$route.params.goodId,
                    good:JSON.stringify(this.good)
                }).then(res=>{
                    console.log(res)
                })
            }else{
                Toast('请登录...');
                this.$router.push({name:'login'})
            }
        },
        goCart(){
            Dialog.confirm({
            title: '提示',
            message: '是否跳转购物车?'
            }).then((action) => {  // on confirm
                console.log(action);
                if(action){
                    this.$router.push({name:'cart'});
                }
            }).catch((cancel)=>{
                console.log(cancel);
                Dialog.close;
            })
        }
    },
    mounted(){
        this.$axios.get("/vue/goodsOne",{
            params:{
                goodId:this.goodId
            }
        }).then(res=>{
            console.log(res);
            this.good = res.data.result;
            this.show = true;
        })
    }
}
</script>

<style lang="scss" scoped>
.item-img {
    width:100%;
    height:300px;
    display: block;

}
.item-s{
    background: rgba(213,191,167,0.10);
    padding: 0 20px;
    padding-bottom: 20px;
    background: #fff;
}
h3{
    color: #333;
    padding-top: 10px;
    // height: 40px;
    line-height: 30px;
    font-size: .3rem;
}
b{
    display: block;
    color: #C69C6D;
    font-size: 22px;
}


.good-button{
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    .van-button{
        width: 50%;
        height: 50px;
        line-height: 50px;
        font-size: 15px;
    }
    .van-button--default{
        color: #442818;
    }
    .van-button--danger {
        color: #fff;
        background-color:  #442818;
        border: 1px solid  #442818;
    }
}
.card{
    background: #FFF;
    box-shadow: 0 3px 10px 0 rgba(0,0,0,0.20);
    border-radius: 4px;
    margin: 0 20px;
    overflow: hidden;
    padding-left: 17px;
    .store-info{
        padding: 10px 0;
        li{
            margin: 0;
            padding: 0;
            // font-size: 12px;
            color: #442818;
            
            img{
                height: 20px;
                width: auto;
                display: block;
                // vertical-align: top;
                float: left;
            }
        }
    }
}
.description{
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #442818;
    border-top: 20px solid #F6F6F6;
    margin-bottom: 70px;
    border-bottom: 20px solid #F6F6F6;
}
</style>
