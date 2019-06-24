<template>
    <div>
        <Head :title="$route.query.name" ></Head>
        <van-notice-bar
            :text="$route.query.name+'打折中，天猫6.18钜惠，错过今天再等一年，买到就是赚到，你还在等什么！！！'"
            left-icon="volume-o"
        />
       
        <div v-if="good.type" class="box">
            <img v-lazy="good.img" alt="" width="100%" height="280px">
            <h3>{{good.name}}</h3>
            <div class="box1">
                <span>价格：￥ {{good.price}}</span>
                <span>总价：<span class="totle">￥ {{good.price*value}}</span></span>
                    
                    <van-stepper v-model="value" />
            </div>
            
        </div>
         <van-goods-action>
            <van-goods-action-icon
                icon="chat-o"
                text="客服"
                @click="kefu"
            />
            <van-goods-action-icon
                icon="cart-o"
                text="购物车"
                :to="{name:'cart'}"
            />
            <van-goods-action-button
                type="warning"
                text="加入购物车"
                @click="addToCar"
            />
            <van-goods-action-button
                type="danger"
                text="立即购买"
                @click="toCar"
            />
        </van-goods-action>



        
    </div>
</template>


<script>
import { Toast,Dialog } from 'vant';
import { mapState, mapActions } from 'vuex';
export default {
    name:"good",
    data(){
        return{
            goodId:this.$route.params.goodId,
            good:{},
            value:1,
            showBase:true,
            closeOnClickOverlay:false,
        }
    },
    created(){
       this.$axios.get("/vue/getGoodOne",{
           params:{
               goodId : this.goodId
           }
       }).then(res=>{
           this.good = res.data.result
       })
    },
    methods:{
        kefu(){
            Toast("客服不在线")
        },
        addToCar(){
            if(!!this.good.price){
                if(localStorage.username){

                this.$axios.post("/vue/addToCar",{
                    username:this.data.username,
                    goodId:this.goodId,
                    good:JSON.stringify(this.good),
                    count:this.value
                }).then(res=>{
                    Toast("添加购物车成功")
                })
                 }else{
                 Dialog.confirm({
                    title: '请登录',
                    message: '您还未登录，点击确认前往登录'
                 }).then(()=>{
                     this.$router.push({name:"login"})
                 }).catch()
             }
            }
        },
       toCar(){
           if(!!this.good.price){
                if(localStorage.username){
                this.$axios.post("/vue/addToCar",{
                    username:this.data.username,
                    goodId:this.goodId,
                    good:JSON.stringify(this.good),
                    count:this.value
                }).then(res=>{
                    
                    this.$router.push({name:"cart"})
                })
                }else{
                 Dialog.confirm({
                    title: '请登录',
                    message: '您还未登录，点击确认前往登录'
                 }).then(()=>{
                     this.$router.push({name:"login"})
                 }).catch()
             }
            }
       }
    },
    computed:{
        ...mapState(["data"])
    }
}
</script>

<style lang="scss" scoped>
    .box{
        padding: 0 1rem;
        .box1{
            
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .totle{
                color:red;
            }
        }
    }
</style>

