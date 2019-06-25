<template>
    <div>

        <div class="head">
                <div class="user" v-if="isLogin" key="login">                
                    <img :src="img1" alt="">
                    <van-button round size="mini"  type="info" @click="out">退出登录</van-button>
                    <span class="username">用户名:{{isLogin}}</span>           
                    <van-icon class="user-icon" name="envelop-o" info="1" />
                </div>
                <div v-else key="login">
                    <span class="username">用户名:无</span>
                    <!--type="info"蓝色按钮  -->                 
                    <van-button round size="mini" type="info" @click="gotoLogin">马上登录</van-button>
                </div>
        </div>
        <h2 class="myh2">1</h2>
        <hr>

        <!-- 下拉刷新 -->
         <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <!-- 整个页面的大盒子 -->
        <div class="my-user">
               


            <van-row class="row">
                    <van-col class="col1" span="24">
                    <span class="txt2"><span>6</span> 月预计回款(元)</span>
                    <span class="num1">0.00</span>
                    <i></i>
                </van-col>
                
                
                <van-col class="col2 col3" span="12">
                    <span class="txt2">总资产</span>
                    <span class="num2">0.00</span>
                </van-col>
                <van-col class="col3" span="12">
                    <span class="txt2">已赚利息(元)</span>
                    <span class="num2">0.00</span>
                </van-col>
                    
                


                <van-col class="col col2" span="12">
                    <span >累计加息(元)</span>
                    <span class="num3">0.00</span>
                </van-col>
                <van-col class="col" span="12">
                    <span >达币奖励(元)</span>
                    <span class="num3">0.00</span>
                </van-col>

                <van-col class="col col2" span="12">
                    <span class="txt3">可用余额(元)</span>
                    <span >0.00</span>
                </van-col>
                <van-col class="col right" span="12">
                    <!-- :to="" -->
                    <van-button type="info"  size="mini" @click="clickTo" plain>提现</van-button>
                    <van-button type="info" size="mini" @click="clickTo"  plain>充值</van-button>
                </van-col>

            </van-row>

            <van-row class="row1">

                <van-col class="col2 col4" span="12">
                    <span class="txt2">达币</span>
                    <span class="num2">0.0</span>
                </van-col>
                <van-col class="col4" span="12">
                    <span class="txt2">加息劵</span>
                    <span class="num2">4张</span>
                </van-col>

            </van-row>

            <van-row class="last">
                <van-card class="wid"  v-for="(card,i) in cards" :key="i"   
                :desc="card.desc"  
                :title="card.title"
                :thumb="card.imageURL"
                />
                
            </van-row>
        </div>
        
          
            <!--下拉刷新  -->
           </van-pull-refresh>

    </div>   
</template>

<script>

import {aesDecrypt,aesEncrypt,keys} from "@/utils/index.js"

export default {
    name:"my",
    data(){
        return {
            isLogin:sessionStorage.username,//login的状态取决于sessionStorage.username ,加密的token数据
            flag1:true,
            cards:[
                {imageURL:require("@/assets/images/1.png"),title:"自动出借",desc:"资金高效利用循环自动出借"},
                {imageURL:require("@/assets/images/2.png"),title:"债权项目",desc:"每月等额本息可转让"},
                {imageURL:require("@/assets/images/3.png"),title:"交易记录",desc:"查看详情"},
                {imageURL:require("@/assets/images/4.png"),title:"月账单",desc:"月度流水汇总"},

            ],
        //    count: 0,
          isLoading: false,
          img1:require("@/assets/images/photo.png"),
        }
    },
    mounted(){
        // 判断isLogin
        console.log("token: "+sessionStorage.username);
        if(!!sessionStorage.username){
            this.$router.push({name:"my"});
            // 前端token解密模块
            
            this.isLogin=aesDecrypt(sessionStorage.username, keys);

        }else{
            this.$router.push({name:"login"});
        }
    },
    methods:{
        onRefresh() {
            //刷新时执行的操作
            setTimeout(() => {
            // this.$toast('刷新成功');
            console.log('刷新成功');
            this.isLoading = false;
            //   this.count++;
            }, 500);
        },
        gotoLogin(){
            // this.$router.push路由跳转方法
            this.$router.push({name:"login"})
        },
        out(){
            sessionStorage.removeItem('username');
            this.isLogin=false;
            this.$router.push({name:"home"});
        },
        clickTo(){
            if(!!sessionStorage.username){
                this.$router.push({name:"about"});
                // 前端token解密模块
            }else{
                this.$router.push({name:"login"});
            }
        }
    }
}
</script>

<style scoped>
.myh2{
    padding-top:25px;
}
.head{
    width:100%;
    position:fixed;
    z-index:1000;
    left:0;
    top:0;
}
.my-user{
    height:120%;
    margin-bottom:100px;
}
.user{
    padding:0 30px;
    height:50px;
    line-height: 50px;
    background-color: #fff;
}
.user img{
    display: inline-block;
    padding:0 10px;
    width: 2em;
    height:2em;
    float: left;
    margin-top:10px;
}
.user-icon{
    display: inline-block ;
    margin-top:20px;
    float:right;
}
.username{
    display:inline-block;
    padding:0 10px;
}
.row{
    background-color: #fff;
    padding:0 10px;
}
.row1{
    margin-top:10px;
    background-color: #fff;
    text-align: center;
}
.col1{
  margin-top:10px;
  padding:10px;
  border-bottom:1px solid 	#BFBFBF;
  background-color: #fff;
  text-align: center;
}
.col3{
    margin-top:10px;
    padding:10px;
    border-bottom:1px solid #BFBFBF;
}

.col4{
    margin-top:10px;
    margin-bottom:10px;
    padding:5px;
}

.col2{
  border-right:1px solid 	#BFBFBF;
}
.col{
    padding:10px;
    background-color: #fff;
}
.right{
    text-align: right;
}
.num1{
  display:block;
  font-size:24px;height:40px;
  line-height: 40px;
  color:#DD9222;
}

.num2{
  display:block;
  font-size:16px;
  color:#DD9222;
}
.num3{
  font-size:16px;
  color:#DD9222;
}
.txt2{
  display:block;
  height:35px;
  line-height:26px;
}
.txt3{
    font-size:12px;
  line-height:26px;
}
.last{
    margin-top:10px;
    
}

.wid{
    float: left;
    padding:10px;
    width:50%;
    background-color: #fff ;
    border:0.5px solid 	#EEEED1;
}
.van-card__thumb{
    width: 20px;
    height: 20px;
    margin-top:20px;
}
.van-card__desc{
    max-width: 100px;
}

.van-ellipsis{
    overflow: none;
    white-space: none;
    text-overflow: none;
}

.van-card__content{
    padding-top:20px;
    min-height:70px;
}
.van-card:not(:first-child) {
    margin-top: 0;
}
</style>
