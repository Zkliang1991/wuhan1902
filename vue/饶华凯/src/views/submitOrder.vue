<template>
    <div>
        <Head title="确认订单"></Head>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
        <van-address-list
            v-model="chosenAddressId"
            :list="list"
            @edit="onEdit"
            />
        <!-- 商品信息 -->
        <div v-if="goods.length>0">
            <div  v-for="(good,i) in goods" :key="i">
                <van-card
                :num="good.count"
                :price="good.goods.price"
                :desc="good.goods.type.text"  
                :title="good.goods.name"
                :thumb="good.goods.img"
                />
            </div>
        </div>
        <div class="footdiv"></div>
        <div class="footdiv"></div>
        </van-pull-refresh>
        <!-- 确认付款 -->
        <van-submit-bar
        :price="num*100"
        button-type="warning"
        button-text="确认付款"
        @submit="onSubmit"
        />
    </div>
</template>
<script>
import { Toast } from 'vant';
import { ImagePreview } from 'vant';
import {mapState} from "vuex";
export default {
    data(){
        return {
              chosenAddressId: '1',
              isLoading: false,
                list: [
                    {
                    id: '1',
                    name:"张三",
                    tel: '13000000000',
                    address: 'XX省XX市XX区XX路 138 号XXXX大厦 7 楼 501 室'
                    }
                ],
                goods:[],
        }
    },
    computed: {
        cardType() {
        return this.chosenContactId !== null ? 'edit' : 'add';
        },

        currentContact() {
        const id = this.chosenContactId;
        return id !== null ? this.list.filter(item => item.id === id)[0] : {};
        },
        ...mapState([
            "buycar",
        ]),
        num(){
            let num=0;
            for(let i=0;i<this.goods.length;i++){
                let goodOne=this.goods[i];
                let count=goodOne.count
                let price=goodOne.goods.price
                num+=price*count;
                }
            return num
        }
    },
    mounted(){
        this.$store.dispatch("getgoods");
    },
    watch:{
        buycar(data){
            this.goods=data
        },
    },
    methods: {
        // onAdd() {
        //     Toast('新增地址');
        // },

        onEdit(item, index) {
            // Toast('编辑地址:' + index);
            this.$router.push({name:"addressedit"})
        },
        onSubmit(){
            const instance = ImagePreview({
            images: [
                require('@/assets/images/bay.jpg'),
            ],
            asyncClose: true
            });

            setTimeout(() => {
                instance.close();
                Toast('支付成功');
                this.$store.dispatch("addDeletecar",this.goods).then(()=>{
                    this.$router.push({name:"buycar"})
                });
                
            }, 3000);
        },
        onRefresh() {
            setTimeout(() => {
                this.isLoading = false;
            }, 500);
        }
    },
};

</script>
<style lang="scss">
.van-address-list{
    padding-bottom: 0.2rem;
}
.van-submit-bar{
//   bottom:0.8rem;
z-index: 100000;
}
</style>
