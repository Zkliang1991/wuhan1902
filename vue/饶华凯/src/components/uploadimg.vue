<template>
    <div>
        <div id="head">
            <div class="first cl">
                <div class="left">
                    <div id="photo" >
                        <img :src="touxiang" alt="头像上传" @click="uploadimg" width="100%" height="100%">
                        <input type="file" ref="one" accept="image/*" @change="shangchuan" class="hiddenInput">
                    </div>
                    <div class="spanname">
                        <div>昵称:{{username}}</div>
                        <div class="qinqing">我的情亲号 ></div>
                    </div>
                </div>
                <div class="right">
                    <ul class="cl">
                        <li @click="kefu"><i class="iconfont">&#xe69d;</i></li>
                        <li @click="setup"><i class="iconfont">&#xe594;</i></li>
                        <li @click="outlogin"><i class="iconfont">&#xe587;</i></li>
                    </ul>
                </div>
            </div>
            <ul class="my_firstul cl">
                <li v-for="(item,i) in functions" :key="i" @click="fnCollect({num:i,txt:item.txt})"><p>{{item.content}}</p><p>{{item.txt}}</p></li>

            </ul>
        </div>
        <MyOrder></MyOrder>
    </div>
</template>
<script>
import { Notify } from 'vant';
import MyOrder from "./myOrder.vue";
import { Toast } from 'vant';
export default {
    nema:"uploadimg",
    data(){
        return{
            touxiang:sessionStorage.touxiang||require("@/assets/images/35.jpg"),
            username:sessionStorage.username,
            functions:[
                {txt:"收藏夹",num:0,content:520},
                {txt:"关注店铺",num:1,content:1314},
                {txt:"足迹",num:2,content:668},
                {txt:"红包卡券",num:3,content:999},
            ]
        }
    },
    components: {
        MyOrder
    },
    computed:{
        
    },
    methods: {
        uploadimg(){
            this.$refs.one.click();
        },
        shangchuan(){
            let file=this.$refs.one.files[0];  //需要上传的图片
            let data=new FormData(); //新建表单对象  <form></form>
            data.append("avatar",file);
             this.$axios({
                url:"/vue/uploadAvatar",
                method:"POST",
                contentType:false,
                processData:false,
                data:data
            }).then(res=>{
                console.log(res);
                this.touxiang = res.data.avatarurl.replace(/public/,'');
                console.log(this.touxiang)
                sessionStorage.touxiang = this.touxiang;
            })
        },
        outlogin(){
            delete sessionStorage.userInfo;
            // history.go(0)
            Toast('注销成功，请重新登陆');
            setTimeout(()=>{
                delete sessionStorage.touxiang;
                this.$router.push({name:"login"})
            },1000)
            
        },
        setup(){
            this.$router.push({name:"setup"})
        },
        //客服
        kefu(){
            Notify({
                message: '客服小姐姐招聘中...',
                duration: 1000,
                background: '#1989fa'
            });
        },
        //足迹，收藏夹功能入口
        fnCollect(data){
            this.$router.push({name:"fncollect",params:{num:data.num},query:{txt:data.txt}})
        }
    },
    beforeCreate(){
        this.$axios({
                url:"/vue/getAvatar",
                method:"GET",
            }).then(res=>{
                this.username=res.data.result[0].username;
                sessionStorage.username=this.username;
                if(res.data.result[0].avatar){
                    this.touxiang = res.data.result[0].avatar.replace(/public/,'');
                    sessionStorage.touxiang = this.touxiang;
                }
            })
    },watch:{
        username(data){
            this.username=data;
        }
    }
}
</script>
<style scoped lang="scss">
#head{
    height: 3rem;
    border:1px solid gray;
	background-image:linear-gradient(to right,#ff8d00,#ff5100);
    background-image:-webkit-linear-gradient(to right,#ff8d00,#ff5100);
    >.first{
        >.left{
            >#photo{
            margin:0.35rem;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            overflow: hidden;
            float:left;
                >.hiddenInput{
                display: none;
                }
            }
            >.spanname{
                float:left;
                margin-top:0.35rem;
                font-size:0.4rem;
                color:white;
                font-family:"宋体";
                >.qinqing{
                    margin-top:0.16rem;
                    background-color: #df6f01;
                    border-radius: 0.1rem;
                    width: 2.6rem;
                    height: 0.4rem;
                    font-size:0.24rem;
                    text-align:center;
                    line-height:0.4rem;
                    font-family:"宋体";
                }
            }
        }
        >.right{
            float:right;
            >ul{
                li{
                    float: left;
                    
                    margin:0.3rem 0.3rem 0 0;
                    i{
                        font-size:0.4rem;
                        color:#fff;
                    }
                }
            }
        }
    }
    .my_firstul{
        display: flex;
        padding-top:0.2rem;
        color:#fff;
        >li{
            flex: 1;
            float:left;
            // height: 0.7rem;
            p{
                text-align:center;
                height: 0.5rem;
                font-size:0.22rem;
                line-height:0.5rem;
            }
        }
    }
	/* position:relative; */
}
// 我的订单
#my_order{
    width: 100vw;
    height: 2.3rem;
    border-radius: 0.2rem;
    >.ul_order{
        display: flex;
        li{
            flex: 1;
        }
    }
}
</style>
