<template>
    <div>
        <div id="my_order" >
            <div class="div_order cl">
                <h3>我的订单</h3>
                <p @click="daifuhuo({type:'全部',num:0})">查看全部订单></p>
            </div>
            <ul class="ul_order">
                <li v-for="(myorder,i) in myorders" :key="i" @click="daifuhuo({type:myorder.type,num:myorder.num})">
                    <p class="iconfont font" v-html="myorder.icon"></p>
                    <p>{{myorder.type}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            myorders:[
                {type:"待付款",num:1,icon:"&#xe604;"},
                {type:"待发货",num:2,icon:"&#xe55e;"},
                {type:"待收货",num:3,icon:"&#xe608;"},
                {type:"待评价",num:4,icon:"&#xe639;"},
                {type:"退款/售后",num:5,icon:"&#xe64c;"}
            ]
        }
    },
    methods:{
        daifuhuo(data){
            console.log(data)
            console.log(this.$route)
            this.$router.push({name:"myorder",params:{num:data.num},query:{type:data.type}})
        }
    }
}
</script>

<style lang="scss" scoped>
#my_order{
    background-color: #fff;
    
    margin:0.25rem 0.3rem;
    border-radius: 0.2rem;
    >.div_order{
        height: 0.7rem;
        line-height:0.7rem;
        border-bottom:1px solid gray;
        font-size:0.2rem;
        h3{
            font-size:0.25rem;
            float: left;
            margin-left:0.26rem;
        }
        p{
            float:right;
            margin-right:0.2rem;
            color:#bebebe;
        }
    }
    >.ul_order{
        display: flex;
        height: 1.47rem;
        box-sizing: border-box;
        padding-top:0.2rem;
        li{
            flex: 1;
            text-align:center;
            .font{
                font-size:0.56rem;
                color:#ff5001;
            }
            p:nth-child(2){
                color:#666666;
                padding-top:0.2rem;
            }
        }
        
    }
    
}
</style>
