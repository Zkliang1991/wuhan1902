<template>
    <div class="register">
         <div  id="title">
            <van-nav-bar
                title="注册"
                left-arrow
                class="ttt"
                @click-left="onClickLeft"
            />   
        </div>
        <van-cell-group>
        <van-field
            v-model="username"
            clearable
            label="用户名"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
        />

        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
        />
         <van-field
            v-model="dbpassword"
            type="password"
            label="密码"
            placeholder="请确认密码"
        />
        </van-cell-group>

        


         <ul id='ce'>
             <li><input type="checkbox"></li>
             <li>我已阅读并同意</li>
             <li>《掌中财富服务协议》</li>
             <li>《风险提示》</li>
         </ul>

         <van-button type="danger" size="large" style="font-size:7vw" @click="send">注册</van-button>
          
          <ul id='you'>
              <li>已有账号?</li>
              <li @click="toLogin">马上登录</li>
          </ul>

    </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
    name:"register",
    data(){
        return {
            dbpassword:"",
            username: "",
            password: ""  //一定要声明
        }
    },
    methods:{
        onClickLeft(){
            this.$router.push({name:'login'})
        },
        toLogin(){
            this.$router.push({name:'login'})
        }, 
           //注册的逻辑
        send(){
            if(this.password==this.dbpassword){ //先判断两次密码是否输入一致
                this.$axios.post("/vue/register",{
                    username:this.username,
                    password:this.password,
                    dbpassword:this.dbpassword,
                }).then(res=>{
                    console.log('aaaa')
                   // if(res.data.type==1){                       
                        window.localStorage.username=this.username;
                        window.localStorage.password=this.password;
                        console.log(res)       
                                      
                        //this.$toast("注册成功")
                        Dialog({ message: '注册成功' });
                        this.$router.push({name:"login"})
                   // }
                });
            }else{
                console.log('两次密码输入不一致')
                this.$toast("两次密码输入不一致")
                Dialog({ message: '注册失败' });
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
     .van-cell{
       height: 10vh;
       line-height: 7vh;
       font-size: 5vw;
   }
   .van-button{
       width: 95vw;
       margin-left: 2.5vw;
       box-sizing: border-box;
   }
   .van-row{
       padding: 2.5vw;
       box-sizing: border-box;
       height: 5vh;
   }
   .zhu{
       color:red;
   }

   #ce{
       background-color: white;
       height: 3vh;
       line-height: 3vh;
       margin-top: 3vh;
       box-sizing: border-box;
       overflow: hidden;
       margin-bottom: 3vh;
   }
   #ce li{
       float: left;
   }
   #ce li:nth-child(1){
       padding-left: 1vw;
       padding-right: 1vw;
       box-sizing: border-box;
   }
    #ce li:nth-child(3){
        padding-left: 2vw;
        padding-right: 1vw;
        box-sizing: border-box;
        color:green
   }
      #ce li:nth-child(4){
        color:green
   }


   #you{
       height: 3vh;
       line-height: 3vh;
       margin-top: 3vh;
       box-sizing: border-box;
       overflow: hidden;  
       padding-left: 30vw;
       box-sizing: border-box;
   }
   #you li{
       float: left;
       padding-left: 2vw;
       box-sizing: border-box;
   }
    #you li:nth-child(2){
        color:red
   }

</style>


