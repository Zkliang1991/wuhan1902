
<template>
    <div id="register">
        <div class="head">
            <headLogReg title="注册"></headLogReg>
        </div>
        <div class="pic">
            <img src="../assets/images/welcome.gif" alt="">
        </div>
        <div class="shuru">
            <input type="text" placeholder="请输入手机号" v-model="register.username">
            <input type="password" placeholder="请输入密码" v-model="register.password">
            <input type="password" placeholder="确认密码" v-model="register.password2">
            
        </div>
        <div class="btnBox">
            <button class="btn" @click="toRegister" >注册</button>
            <!-- <div class="mask btn"></div> -->
        </div>
        <div class="reg">
                
        </div>
    </div>
        

</template>

<script>
import { Dialog } from 'vant';

export default {
    data() {
        return {
            register:{},
        }
    },
    methods: {
        toRegister(){
            if(this.register.password===this.register.password2){
                this.$axios.post('/vue/register',this.register).then(result=>{
                    if(!!result.data.type){
                        this.$router.push({name:"mine"})
                    }
                })
            }else{
                Dialog.alert({
                    message: '注册失败,请重新注册'
                    }).then(() => {
                    // on close
                });
            }
            
        }
    },
    // watch: {
    //     register:function(a){
    //         var reg_mobile = /^(1[3-9][0-9])[0-9]{8}$/;
    //         var result = reg_mobile.test(a.username)
    //         console.log(result)
    //         console.log(a)
    //     }
    // },
}
</script>

<style lang="scss" scoped>
#register{
    width: 100%;
    height: 100%;
    background-color: #fff;
}
.van-nav-bar{
    background-color:transparent;
}
// .btnBox{
//     position: relative;
// }
.btn{
    width: 6.5rem;
    height: .65rem;
    border-radius: .3rem;
    border: none;
    background-color: #000;
    color: #fff;
    font-size: .25rem;
    margin: .7rem 0 .4rem
}
// .mask{
//     background-color: rgba(255, 255, 255,.3);
//     position:absolute;
//     top: 0;
//     left: 0.4rem;
// }
.shuru{
    >input{
        border-left: none;
        border-top: none;
        border-right: none;
        border-bottom: .01rem solid #747474;
        width: 6rem;
        height: .7rem;
        margin: .2rem 0;
        font-size: .25rem;
        background-color: transparent;
    }
}
.pic{
    margin: 1.5rem 0;
    img{
        width: 100%;
    }
}
</style>






<style lang="scss" scoped>

</style>
