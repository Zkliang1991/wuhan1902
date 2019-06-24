<template>
    <div>
        <div class="chongzhi">
            <van-nav-bar
                title="充值中心"
                left-arrow
                class="ttt"
                @click-left="onClickLeft"
            />   
        </div>

          <van-row>
            <van-col span="24">请选择充值方式:</van-col>
        </van-row>

        <van-tabs type="line">
            <van-tab title="银行卡">
                <div class='kahao'>请输入卡号：</div>
                <div class='ka'><input type="text" @blur='shijiao' id='yin' placeholder="请输入3位数卡号："></div>
                
                <div class='kahao' >请输入充值金额:</div>
                <div class='ka'><input type="text" id='ka1' @click='dianji' placeholder="请输入金额："></div>
        
                 <div class='ka'><p> 账户余额：<span id='yue'>{{(zongjine1*1)+(chongzhi1*1)+(tixian1*1)}}</span>  </p></div>
            </van-tab>
                <van-tab title="微信">内容 2</van-tab>
                <van-tab title="支付宝">内容 3</van-tab>
          </van-tabs>

          
          <van-button class='btn1' type="danger" size="large" @click='que'>确定</van-button>
          <van-button class='btn2' type="primary" @click='fanhui'>回到首页</van-button>
    </div>
</template>


<script>
import { Toast } from 'vant';
export default {
    name:'chongzhi',
     data(){
        return {
            zongjine1:this.$store.state.zongjine,
            chongzhi1:this.$store.state.chongzhi,
            tixian1:this.$store.state.tixian,
        }
        
    },
    methods:{
         onClickLeft() {
              this.$router.go(-1);
        },
        dianji(){
              if(yin.value==''){
                Toast.fail('请输入银行卡号');
            }else{

            }
        },
        
        shijiao(){
                    console.log(typeof yin.value)
                    var err=yin.value.split('')
                    console.log(typeof err)
                    if(err.length==3){       
                         console.log("ok")
                    }else{
                        console.log("卡号错误")
                        Toast.fail('卡号输入不规范');
               }   
        },
        que(){ 
            yue.innerHTML=(yue.innerHTML*1)+(ka1.value*1)
            window.localStorage.money=yue.innerHTML

            this.$axios.post("/vue/account",{
                money:yue.innerHTML*1,
            }).then(res=>{
                console.log(res)
                //window.localStorage.money=yue.innerHTML*1              
                var add=ka1.value*1   //每次充值的金额
                this.$store.commit("chongzhi",add); //数据要和jiaru.vue页面中的金额关联在一起
              
            })
             
            
        },
        fanhui(){
            this.$router.push({name:"home"})
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
    .kahao{
        font-size: 7vw;
        color:hotpink;
        background-color: #fff;
    }
    .ka input{
        border:none;
        font-size: 6vw;
        width: 100%;
    }

  .ka p{
      font-size: 8vw;
      color:red;
      background-color: #fff;
  }

  .btn1{
      margin-top: 43vh;
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
    
</style>

