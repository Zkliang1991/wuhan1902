<template>
    <div id="loginwrap">
        <img src="@/assets/images/login.jpg" alt="" class="imglogin">
        <div class="login">

        <van-tabs v-model="active" animated>
        <van-tab  title="登陆">
            <van-cell-group>
                <van-field v-model="login_account.username" placeholder="请输入用户名" label="用户名:" />
               <van-field v-model="login_account.password" placeholder="请输入密码" label="密  码:"/>
            </van-cell-group>
        <van-cell-group>
         <van-button type="primary" block @click="gologin">马上登陆</van-button>
        </van-cell-group>
        </van-tab>
        <van-tab  title="注册">
             <van-cell-group>
                <van-field v-model="create_account.username" placeholder="请输入用户名" label="用户名"/>
               <van-field v-model="create_account.pwd" placeholder="请输入密码" label="密码"/>
               <van-field v-model="create_account.dbpwd" placeholder="请输入密码" label="确认密码"/>
            </van-cell-group>
            <van-button type="primary" block @click="createaccount">立即注册</van-button>
        </van-tab>
        </van-tabs>
        </div>
    </div>
</template>
<script>
import { Dialog } from 'vant';
import { Notify } from 'vant';
export default {
    data(){
        return{
            active:0,
            login_account:{},
            create_account:{},
        }
    },
    methods:{
        createaccount(){
            if(!!this.create_account.username&&!!this.create_account.pwd&&!!this.create_account.dbpwd){

                this.$axios.post("/vue/create",this.create_account)
                .then((res)=>{
                    var data=res.data;
                    if(data.type){
                        Notify({
                        message: data.msg,
                        duration: 1000,
                        background: '#1989fa'
                        });
                        this.active=0;
                        this.login_account.username=data.result.username
                    }else{
                         Notify({
                        message: data.msg,
                        duration: 1000,
                        background: 'red'
                        });
                    }
                })
            }else{
                 Dialog.alert({
                    title: '注册失败',
                    message: '请正确输入账号和密码'
                    }).then(() => {
                    // on close
                    });
            }

        },
        gologin(){
            if(!!this.login_account.username&&!!this.login_account.password){
                this.$axios.post("/vue/login",this.login_account)
               .then((res)=>{
                   var data=res.data;
                   if(data.type){
                      sessionStorage.userInfo=data.token;
                      Notify({
                       message: data.msg,
                       duration: 1000,
                       background: '#0ff'
                       });
                       this.$router.push({name:"my"})
                   }else{
                        Notify({
                       message: data.msg,
                       duration: 1000,
                       background: 'red'
                       });
                   }
               })
            }else{
                Dialog.alert({
                    title: '登陆失败',
                    message: '请正确输入账号和密码'
                    }).then(() => {
                    // on close
                    });


            }
        }
    },
    mounted () {
        // history.go(0);
    }
}
</script>
<style scoped>
#loginwrap{
    overflow: hidden;
}
.imglogin{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -100;
}
.login{
    margin:0 auto;
    margin-top:2.5rem;
    border-radius:0.2rem;
    overflow: hidden;
    width: 80%;
}
</style>

