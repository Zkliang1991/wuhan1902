<template>
    <div>
        <div class="login" id="title">
            <van-nav-bar
                title="立即加入"
                left-arrow
                class="ttt"
                @click-left="onClickLeft"
            />   
        </div>
        <div class="yu"><p>剩余可投：</p><p>额度充足</p></div>
        <div class="ketou"><p>账户可投金额：<span id='ketou'>{{zongjine1*1+chongzhi1*1+tixian1*1}}</span>元</p><p @click="chong">[充值]</p></div>
          
        <div class="touzi">
            <div>投资金额:</div>
            <div class="shuru"><input type="text" id='jine' placeholder="50元起投" @change="five"></div>         
        </div>

        <van-row type="flex" justify="space-around" class="yuqi">
            <van-col span="12"><p class="zong">预期年利率：</p> <p class="shouyi">{{count}}%</p></van-col>
            <van-col span="12"><p class="zong">预期总收益：</p> <p class="shouyi" id='aaa'></p></van-col>
        </van-row>

       <van-button type="danger" size="large" @click="yuyue">我要预约</van-button>
        
    </div>
</template>


<script>
import { Dialog } from 'vant';
import { Toast } from 'vant';
export default {
    name:"jiaru",
    data(){
        return {
            count:this.$store.state.count,
            zongjine1:this.$store.state.zongjine,
            chongzhi1:this.$store.state.chongzhi,
            tixian1:this.$store.state.tixian,
            
        }
        
    },
    methods:{
        onClickLeft(){
            this.$router.push({name:"buy"})
        },
        five(){
            if(jine.value<50){
                Dialog.alert({
                    message: '50元起投'
                    }).then(() => {
                    // on close
                    });
            }else{
                var num=1.1*jine.value;
                var nihao=num.toFixed(2)
                aaa.innerHTML=nihao

            }
        },
        yuyue(){
            if(jine.value==''){
                Dialog.confirm({
                    title: '请输入金额',
                    }).then(() => {
                    // on confirm
                    }).catch(() => {
                    // on cancel
                    });
            }else{          
                if(ketou.innerHTML*1>jine.value){  
                    //可投金额要用vuex和充值中心的账户余额关联在一起
                    // 进行判断  如果投资金额小于账户可投金额  则弹出按钮  然后确认购买  
                    // 然后连接数据库    对金额数据进行减法
                    // 如果投资金额大于账户余额  则要充值
                    Dialog.confirm({
                        title: '确认购买？',
                        }).then(() => {
                        Toast.success('购买成功,请查看订单');
                        this.$router.push({name:"my"})

                        //购买之后  总金额减少  订单数增加
                        this.$store.commit('dingdanAdd')
                        var n=jine.value*1     //  jine.value 是每次购买的金额  花了多少钱
                        this.$store.commit('zongjineDesc',n)  //总金额减少
                        this.$store.commit('ding',n)     //   订单总金额
                        var m=aaa.innerHTML*1            //预计总收益
                        this.$store.commit('zongshouyi',m)
                        var lirun=jine.value*10    //每一单的收益
                        this.$store.commit('zhuanqu',lirun)

     
                        }).catch(() => {
                        // on cancel  取消
                        });

                }else{
                    Dialog.alert({
                        title: '余额不足，请先充值'
                        }).then(() => {
                        // on close
                        });
               }
            }
        },
        chong(){
              this.$router.push({name:"chongzhi"})
            //   Dialog.alert({
            //     message: '还未登录,请先登录'
            //     }).then(() => {
            //     // on close
            //     });
        }
 
   },

     
}
</script>



<style lang="scss" scoped>
 
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


.yu,.ketou{
    overflow: hidden;
    height: 8vh;
    line-height: 8vh;
    font-size: 5vw;
    padding-left: 3vw;
    box-sizing: border-box;
    
}
.yu>p{
    float: left;
}
.ketou>p{
    float: left;  
}
.yu{
    border-bottom:1px solid gray;
}
.yu>p:nth-child(2){
    color:red;
}
.ketou>p:nth-child(2){
    color:green;
    padding-left: 2vw;
    box-sizing: border-box;
}
.ketou span{
    color:red;
}




.touzi div{
    float: left;
    height: 10vh;
    line-height: 10vh;
    font-size: 7vw;
    background-color: white;
}
.touzi{
    overflow: hidden;
}

.shuru{
    width: 50%;
}
.shuru input{
    border:none;
}


.van-col p{
    padding-left: 3vw;
    box-sizing: border-box;
}


.yuqi .shouyi{
    height: 20vh;
    font-size: 7vw;
    padding-left: 6vw;
    box-sizing: border-box;
    color:red;
}
.zong{
    height: 8vh;
    line-height: 8vh;
    font-size: 7vw;
}

</style>


