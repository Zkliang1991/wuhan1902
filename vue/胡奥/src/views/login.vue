<template>
 <div>
     <van-tabs v-model="active">
         <van-tab title="登录">
            <van-cell-group>
                <van-field
                    v-model="user.username"
                    required
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="请输入用户名"
                    @click-right-icon="$toast('question')"
                />

                <van-field
                    v-model="user.password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
                />
                <van-button  type="primary" size="large" @click="denglu">登录</van-button>
                 <van-button  type="primary" size="large">返回</van-button>
            </van-cell-group>
        </van-tab>
        <van-tab title="注册">
            <van-cell-group>
                <van-field
                    v-model="sertn.username"
                    required
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="请输入用户名"
                    @click-right-icon="$toast('用户名大于等于6位，密码请保持一致')"
                />

                <van-field
                    v-model="sertn.password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
                />
                    <van-field
                    v-model="sertn.userpassword"
                    type="password"
                    label="密码"
                    placeholder="确认密码"
                    required
                />
                 <van-button  type="primary" size="large" @click="sendpost">确认</van-button>
                 <van-button  type="primary" size="large" @click="goback">返回</van-button>
            </van-cell-group>
        </van-tab>
    </van-tabs>
</div>
</template>
<script>
// import {mapState,mapActions} from "vuex"
import { Toast } from 'vant';
export default {
        data(){
        return{
            user:{},
            active:1,
            sertn:{},
        }
    },
    //   computed:{
    //    ...mapState(['data'])
    // },
    
    methods:{
        goback(){
            this.$router.push({name:"home"});
        },
        // ...mapActions(['denglu',]),
        denglu(){
            this.$axios.post("/vue/login",this.user)
            .then(res=>{
                console.log(res)
                localStorage.username = res.data.username
                if(!!res.data.type){
                    sessionStorage.userInfo =  JSON.stringify({token:res.data.token});
                    this.$router.push({name:'my'});
                }else{
                    sessionStorage.removeItem('userInfo');
                }
            })
        },
        sendpost(){
            if(this.sertn.username!=''&& this.sertn.username.length>=6){
                if(this.sertn.password!=''&& this.sertn.password.length>=6){
                    if(this.sertn.userpassword==this.sertn.password){
                        Toast('密码正确');
                        this.$axios.post('/vue/register',this.sertn)
                        .then(res=>{
                            console.log(res)
                            if(!!res.data.result.type){
                                this.active=0
                                Toast('注册成功')
                            }
                            Toast(res.data.result.msg)
                            localStorage.User = res.data
                        })
                    }
                }else{
                    Toast('密码不正确');
                }
            }else{
                Toast('用户名格式不正确');
            }
           
        }
    },
    // mounted(){
    //     this.denglu({
    //         url:"/vue/login",
    //         cb:()=>{
    //              console.log(res)
    //             localStorage.username = res.data.username
    //              if(!!res.data.type){
    //                 sessionStorage.userInfo =  JSON.stringify({token:res.data.token});
    //              this.$router.push({name:'my'});
    //             }else{
    //                sessionStorage.removeItem('userInfo');
    //             }
    //         }
    //     })
    // }
}
</script>

