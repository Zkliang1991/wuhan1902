<template>
    <div>
        <Head title="注册" :show="true"></Head>
        <van-cell-group>
                    <van-field
                        v-model="registerInfo.username"
                        required
                        clearable
                        label="用户名"
                        right-icon="question-o"
                        placeholder="请输入用户名"
                        @click-right-icon="$toast('请输入4到10位用户名')"
                        @blur="name"
                        :error-message="nameMsg"
                    />

                     <van-field
                        v-model="registerInfo.tel"
                        label="手机号"
                        right-icon="question-o"
                        placeholder="请输入手机号"
                        @click-right-icon="$toast('请输入常用手机号')"
                        required
                        @blur="tel"
                        :error-message="telMsg"
                    />

                    <van-field
                        v-model="registerInfo.pwd"
                        type="password"
                        label="密码"
                        right-icon="question-o"
                        placeholder="请输入密码"
                        @click-right-icon="$toast('请输入6到10位密码')"
                        required
                        @blur="pwd"
                        :error-message="pwdMsg"
                    />

                    <van-field
                        v-model="registerInfo.repwd"
                        type="password"
                        label="确认密码"
                        right-icon="question-o"
                        placeholder="请输入密码"
                        @click-right-icon="$toast('请输入6到10位密码')"
                        required
                        @blur="repwd"
                        :error-message="repwdMsg"
                    />
                </van-cell-group>
                
                <van-button type="primary" size="large" @click="register()">注册</van-button>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            registerInfo:{},
            nameMsg:"",
            telMsg:"",
            pwdMsg:"",
            repwdMsg:"",

            nameFlag:false,
            telFlag:false,
            pwdFlag:false,
            repwdFlag:false,
        }
    },
    methods:{
        name(){
            // this.nameMsg="用户名不能为空";
            if(this.registerInfo.username){
                const nameReg = /^[a-zA-Z0-9]{4,10}$/;
                if(nameReg.test(this.registerInfo.username)){
                    this.nameFlag=true;
                    this.nameMsg="";
                }else{
                    this.nameMsg="用户名格式不正确";
                    this.nameFlag=false;
                }
            }else{
                this.nameMsg="用户名不能为空";
                this.nameFlag=false;
            }
        },
        tel(){
            if(this.registerInfo.tel){
                const telReg = /^1(3|4|5|7|8)[0-9]{9}$/;
                if(telReg.test(this.registerInfo.tel)){
                    this.telFlag=true;
                    this.telMsg="";
                }else{
                    this.telMsg="手机号格式不正确";
                    this.telFlag=false;
                }
            }else{
                this.telMsg="手机号不能为空";
                this.telFlag=false;
            }
        },
        pwd(){
            if(this.registerInfo.pwd){
                const pwdReg = /^[0-9A-Za-z]{6,10}$/;
                if(pwdReg.test(this.registerInfo.pwd)){
                    this.pwdFlag=true;
                    this.pwdMsg="";
                }else{
                    this.pwdMsg="密码格式不正确";
                    this.pwdFlag=false;
                }
            }else{
                this.pwdMsg="密码不能为空";
                this.pwdFlag=false;
            }
        },
        repwd(){
            if(this.registerInfo.repwd==this.registerInfo.pwd){
                this.repwdFlag=true;
                this.repwdMsg = "";
            }else{
                this.repwdMsg = "两次输入密码不匹配";
                this.repwdFlag=false;
            }
        },
        register(){
            if(this.nameFlag==true && this.telFlag==true && this.repwdFlag==true ){
                console.log(this.registerInfo);
                this.$axios.post("/vue/register",this.registerInfo)
                .then(res=>{
                    console.log(res);
                    if(res.data.type == 1){
                        this.registerInfo={};
                        this.$router.push({name:"login"});
                        Toast.success('注册成功');
                    }
                })
            }else{
                Toast.fail('注册失败');
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.van-cell-group{
    padding: 20px 0;
}
.van-cell {
    border: 1px solid #ccc;
    border-radius: 25px;
    margin: 20px 0;
    line-height: 30px;
}

.main-box{
    background: #fff;
}
</style>