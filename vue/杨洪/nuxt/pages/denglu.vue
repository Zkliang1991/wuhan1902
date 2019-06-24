



<template>
    <div>
       <van-tabs v-model="active">
        <van-tab title="注册" id="resgier">
            
            <van-cell-group>
            <van-field
            v-model="resgier.username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
        />

        <van-field
            v-model="resgier.password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
        />

         <van-field
            v-model="resgier.pwd"
            type="password"
            label="确认密码"
            placeholder="请输入密码"
            required
        />

        </van-cell-group>
        <van-button type="info" size="large" @click="sub">注册</van-button>
            
        </van-tab> 
        <van-tab title="登陆" id="login">

            <van-cell-group>
        <van-field
            v-model="login.username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
        />

        <van-field
            v-model="login.password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
        />
        </van-cell-group>
         <van-button type="info" size="large" @click="deng">登陆</van-button>


        </van-tab>
        </van-tabs>
    </div>

</template>

<script>

import {Toast} from 'vant';


export default {
    data(){
           return{
            active:1,
            login:{},
            resgier:{}
        }
    },
    methods:{

         sub(){
              
            //  if(this.resgier.username==""){
            //         alert("请填写用户名")
            //         console.log(132)
            //  }else{           
            //      if( this.resgier.password==this.resgier.pwd){
            //                      this.$axios.post("/zhuce",this.resgier).then(res=>{
            //                         console.log(res,2131)
                                    
                                    
            //                         if(!!res.data.result.type){
            //                                             Toast.success('注册成功');
            //                                             this.$router.push({name:"app"})
                                                        
            //                                     }else{
            //                                            Toast.fail('用户已注册，请重新注册');
                                                    
            //                                     }
                                                      
            //                     })
            //     }else{
            //                 Toast.fail('密码不一致');
            //          }
            // }
        },
        deng(){
            

            this.$axios.post("/login",this.login).then(res=>{
               
               console.log(res)
               if(!!res.data.type){
                   Toast.success('登陆成功');
                    sessionStorage.userInfo=JSON.stringify({token:res.data.token})
                    this.$router.push({name:"app"})
               }else{
                     Toast.fail('登陆失败');
                      this.$router.push({name:"wod"})
               }
                
                
            })
        },
       
    }
    
}
</script>
