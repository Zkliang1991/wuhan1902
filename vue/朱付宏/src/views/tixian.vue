<template>
    <div>
        <div class="tixian">
            <van-nav-bar
                title="提现中心"
                left-arrow
                class="ttt"
                @click-left="onClickLeft"
            />   
        </div>

        <van-row>
            <van-col span="24">请输入提现银行卡号:</van-col>
        </van-row>

        <div class="kahao"><input type="text" id='ka' @blur="shijiao" placeholder="3位数银行卡号"></div>

         <van-row>
            <van-col span="24">请输入提现金额:</van-col>
        </van-row>

        <div class="kahao"><input type="text" id='tixian' placeholder="提现金额"></div>

        <div class='ka'><p> 账户余额:<span id='yue'>{{(zongjine1*1)+(chongzhi1*1)+(tixian1*1)}}</span>  </p></div>
        <van-button class='btn1' type="danger" size="large" @click='que'>确定</van-button>
        <van-button class='btn2' type="primary" @click='fanhui'>回到首页</van-button>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name:"tixian",
    data(){
        return {
            tixian1:this.$store.state.tixian,
            zongjine1:this.$store.state.zongjine,
            chongzhi1:this.$store.state.chongzhi,
        }
    },
    methods:{
         onClickLeft() {
              this.$router.go(-1);
        },
        fanhui(){
            this.$router.push({name:"home"})
        },
        shijiao(){
                console.log(typeof ka.value)
                var err=ka.value.split('')
                console.log(typeof err)
                if(err.length==3){       
                    console.log("ok")
                }else{
                    console.log("卡号错误")
                    Toast.fail('卡号输入不合理');
           }   
        },
        que(){
            if(tixian.value*1>yue.innerHTML*1){
                   Toast.fail('对不起！余额不足');
            }else{
                var desc = tixian.value*1
                this.$store.commit("tixian",desc);
                yue.innerHTML=(yue.innerHTML*1)-(tixian.value*1)
                Toast.success('提现成功');
            }
               
        }
    }
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

    .van-col--24{
         height: 10vh;
         line-height: 10vh;
         color:red;
         font-size: 7vw;
     }

    .van-tabs{
        height: 10vh;
        line-height: 10vh;
    }

    .kahao input{
        width: 100%;
        height: 10vh;
        border:none;
        color:red;
        font-size: 7vw;
    }

    .btn1{
      margin-top: 8vh;
      height: 10vh;
      font-size: 7vw;
      border-radius: 2vw;
      box-sizing: border-box;
  }
   .btn2{
      margin-top: 2vh;
      height: 10vh;
      font-size: 7vw;
      border-radius: 2vw;
      box-sizing: border-box;
  }

   .ka{
      margin-top: 10vh;
   }
  .ka p{
      font-size: 8vw;
      color:red;
    //   background-color: #fff;
  }
</style>


