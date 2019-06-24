<template>
    <div v-if="true">
        <Head title="购物车"></Head>
        <li v-for="(car,i) in cars" :key="i">
            <van-card
            v-if="true"
            :num="car.count"
            tag="爆款"
            :price="car.good.price"
            :desc="car.good.type.text"  
            :title="car.good.name"
            :thumb="car.good.img"
           
           >
            <div slot="footer">
                <van-button size="small" @click="deleteOne(i)">删除</van-button>
            </div>
            </van-card>
            
      
        
        
        </li>
        <van-submit-bar
            :price="total"
            button-text="提交订单"
            @submit="onSubmit"
            />
    </div>
</template>

<script>
import { Dialog,Toast} from 'vant';
import { mapState } from 'vuex';
export default {
    name:"cars",
    data(){
        return {
            cars:[],
            
            total:0,
            // token:JSON.parse(sessionStorage.userInfo).token
        }
    },
     mounted(){
         this.$axios.get("/vue/getCar",{
             params:{username:this.data.username}
         }).then(res=>{
             this.cars = res.data.result
             console.log(this.cars)

            this.cars.forEach(item=>{
                this.total += (item.good.price*item.count)*100
            })    
        })
     },
     computed:{
         ...mapState(["data"]),
        
         },
     methods:{
         onSubmit(){
             if(this.cars.length>0){

                 Dialog.confirm({
                    title: '确认支付',
                    message: '是否已确认好订单并准备支付'
                    }).then(()=>{
                        
                        this.$axios.get("/vue/deleteCar",{
                            params:{
                                username:this.data.username,
                            }
                        })
                        .then(res=>{
                            Toast("买单成功")
                            history.go(0)
                        })
                    }).cancel()
                 }else{
                     Dialog.alert({
                        
                        message: '购物车是空的，快去选购吧'
                        }).then(() => {
                        this.$router.push({name:"classify"})
                        });
                 }
             },
        deleteOne(i){
            console.log(this.cars)
            this.$axios.get("/vue/deleteOne",{
                    params:{goodId:this.cars[i].goodId}
            }).then(res=>{
                console.log(res)
                this.cars.splice(i,1);
                this.total=0
                this.cars.forEach(item=>{
                this.total += (item.good.price*item.count)*100
            })    
            })
        },
   
     },
     
}
</script>


<style scoped>
    li{
        list-style: none;
    }
</style>
