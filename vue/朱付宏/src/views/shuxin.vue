<template>
    <div>
        <div >
            <van-nav-bar
                title="年舒心"
                left-arrow
                class="ttt"
                @click-left="onClickLeft"
            />   
        </div>
     <div class="an">
         <p>{{count}}%</p>
         <p>+{{jia}}%</p>
         <p><van-tag  color="#f2826a">全程加息</van-tag></p>           
     </div>
       
       <div class="nian">往期年利率</div>

       <van-row type="flex" justify="center">
            <van-col span="8"><p>12个月</p><p>借款期限</p></van-col>
            <van-col span="8"><p>先息后本</p><p>还款方式</p></van-col>
            <van-col span="8"><p>￥50</p><p>起投金额</p></van-col>
       </van-row>
        
        <div class="jiao">
            <ul>
                <li>累计成交:{{leiji1*1+dingdan1*1}}</li>
                <li>今日成交:{{dingdan1}}</li>
            </ul>

             <van-notice-bar mode="link" scrollable="true" > 
                {{huadong}}
             </van-notice-bar>
        </div>
        
                
         <van-button type="danger" size="large" @click="toJiaru">立即加入</van-button>

    </div>
</template>

<script>
export default {
    name:"shuxin",
    data(){
        return {
            count:this.$store.state.count+1,
            jia:this.$store.state.jia,
            huadong:this.$store.state.huadong ,
            leiji1:this.$store.state.leiji,
            dingdan1:this.$store.state.dingdan,  //订单总数   当日的成交量
        }
    },
    methods:{
        onClickLeft(){
            this.$router.push({name:"home"})
        },
        toJiaru(){
            this.$router.push({name:"jiaru"})
        }
    },
     mounted(){
        this.$axios.get("/vue/getGoods",
        ).then(res=>{
            console.log(res)
            this.goods=res.data.result;
            
    })
  }
}
</script>



<style  lang="scss" scoped> 
   .ttt{
       background-color: #ff550a;
       height: 8vh;
       line-height: 8vh;
   }
    .van-nav-bar__title{
        color:white;
        font-size: 4vh;
    }

    .van-nav-bar__arrow{
        color:white;
    }

    .an{
        overflow: hidden;
        padding-top: 5vh;
        box-sizing: border-box;
        color:red;
    }
    .an>p{
        float: left;
    }
    .an>p:nth-child(1){
        width: 25vw;
        height: 10vh;
        font-size: 13vw;
        padding-left: 35vw;
        padding-right: 25vw;
        box-sizing: border-box;
        
    }
    .an>p:nth-child(3){
        color:white;
        padding-left: 5vw;
        box-sizing: border-box;
    }

    .nian{
        width: 100%;
        height: 7vh;
        text-align: left;
        font-size: 3vh;
        text-align: center;
        color:grey;
    }
    .van-row--justify-center p{
        text-align: center;
    }
    .van-col>p:nth-child(1){
        height: 10vh;
        line-height: 10vh;
        color:darkblue;
        font-size: 5vw
    }
     .jiao ul{
         height: 10vh;
         line-height: 8vh;
         padding:2vh 0 2vh 3vw;
         box-sizing: border-box;
         font-size: 5vw;
         color:red;
     }

     .van-button--danger{
         margin-top: 20vh;
         box-sizing: border-box;
     }
     .van-notice-bar{
         margin-top: 10vh;
         box-sizing: border-box;
     }



</style>


