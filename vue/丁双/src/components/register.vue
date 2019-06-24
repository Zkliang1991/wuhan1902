<template>
    <div>
        <van-cell-group>
            <van-field
                v-model="register.username"
                required
                clearable
                label="用户名"
                right-icon="question-o"
                placeholder="请输入用户名"
                @click-right-icon="$toast('请输入6-12位')"
            />
            <van-field
                v-model="register.nickname"
                required
                clearable
                label="昵称"
                right-icon="question-o"
                placeholder="请输入昵称"
                @click-right-icon="$toast('必须中文2-4位')"
                
            />

            <van-field
                v-model="register.password"
                type="password"
                label="密码"
                placeholder="请输入密码6-12位"
                required
            />
            <van-field
                v-model="register.dbpwd"
                type="password"
                label="确认密码"
                placeholder="请再次确认密码"
                required
            />
        </van-cell-group>
        <van-button size="large" type="primary" @click = "zhuce()">注册</van-button>
        <div class = 'box' @click = "pushLogin" style = "text-align:center;color:#999;line-heigth:24px;margin-top:20px">
            <span>快速登录 ></span>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import { Toast } from 'vant';
export default {
    data(){
        return {
            register:{},
        }
    },
    computed:{
    },
    methods:{
        zhuce(){
            if(this.register.username != undefined){
                if(this.register.username.length>=6 && this.register.username.length <= 12){
                    // 判断用户昵称
                    var str = this.register.nickname;
                    var han = /^[\u4e00-\u9fa5]+$/;
                    if(han.test(str)){
                        if(this.register.nickname.length >= 2 && this.register.nickname.length <= 4){
                            if(this.register.password.length >= 6 && this.register.password.length <= 12){
                                if(this.register.password == this.register.dbpwd){
                                    // console.log("success")
                                    this.$axios.post("/vue/zhuce",this.register).then(res=>{
                                        // console.log(1111);
                                        if(res.data.code == 200){
                                            this.$router.push({name:'login'});
                                        }else{
                                            Toast({
                                                message:'用户名已被注册...',
                                                duration:300
                                            })
                                        }
                                    })

                                }else{
                                    Toast({
                                        message:'两次密码不一致...',
                                        duration:300
                                    })
                                }
                            }else{
                                Toast({
                                    message:'密码不合法...',
                                    duration:300
                                })
                            }
                        }else{
                            Toast({
                                message:'昵称长度不合法...',
                                duration:300
                            })
                        }
                    }else{
                        Toast({
                            message:'昵称必须中文...',
                            duration:500
                        })
                    }
                }else{
                    Toast({
                        message:'用户名不合法...',
                        duration:300
                    })
                }

            }else{
                Toast({
                    message:'用户名不能为空...',
                    duration:300
                })
            }
        },
        pushLogin(){
            this.$router.push({name:'login'});
        }
    }
}
</script>

