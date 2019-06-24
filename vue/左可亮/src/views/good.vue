<template>
    <div>
        <Head :title="$route.query.name" :show="true" ></Head>
        <div v-if="good.type">
            <img v-lazy="good.img" alt="" width="100%" height="280px">
            <h2>{{good.name}}</h2>
            <h2>价格 : {{good.price}}  /  折扣  {{good.discount }}</h2>
            <h2> 分类  : {{good.type.text}}</h2>
        </div>
        <div>
            
             <mt-button type="primary"  @click="number++">++</mt-button>
             <mt-field label="购买数量"  type="number" v-model="number"></mt-field>
             <mt-button :disabled="number<2" type="danger" @click="number--">--</mt-button>
        </div>
        <mt-button type="primary" @click="addToCar">加入购物车</mt-button>
        <mt-button type="danger" @click="gotoCar">立即购买</mt-button>
    </div>
</template>

<script>
import {MessageBox} from "mint-ui"
export default {
    name:"good",
    data(){
        return {
            good:{},
            number:1
        }
    },
    methods:{
        addToCar(){
            this.$axios.post("/vue/addToCar",{
                count:this.number,
                goodId:this.$route.params.goodId,
                good:JSON.stringify(this.good)
            }).then(res=>{
                console.log(res);
            })
        },
        gotoCar(){
            MessageBox({
                title: '提示',
                message: '你是否跳转购物车',
                showCancelButton: true
            }).then(action=>{
                console.log(action);
                if(action){
                    this.$router.push({name:'cart'})
                }
            })
        }
    },

    mounted(){
        this.$axios.get("/vue/getGoodOne",{
            params:{
                goodId:this.$route.params.goodId
            }
        }).then(res=>{
            this.good = res.data.result;
        })
    }
}
</script>

