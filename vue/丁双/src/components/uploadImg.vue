<template>
    <div class = 'box'>
        <div>
            <div style = "height:100px">
                <img :src="touxiang" alt="上传头像" @click.stop = 'loadImg' style = 'width:6rem;height:6rem;border-radius:6%'>
                <div class = 'userInformation'>
                    <h3>欢迎你 {{ nickname }}</h3>
                    <h3>用户等级:<span style = "color:red"> 黄金会员 </span></h3>
                </div>
            </div>
            <input type="file" ref = "one" accept = 'image/*' @change = "shangchuan" class = 'hiddenInput'>
        </div>
<!-- 个人详情 -->
        <div>
            <van-collapse v-model="activeNames">
                <van-collapse-item title="用户昵称" name="1">{{ nickname }}</van-collapse-item>
                 <van-collapse-item title="切换用户" name="2">
                     <p @click = 'pushLogin'>点击切换用户...</p>
                 </van-collapse-item>
                 <van-collapse-item title="注册新用户" name="3">
                     <p @click = "pushZhuce">点击注册新用户...</p>
                </van-collapse-item>
                <van-collapse-item title="收货地址" name="4">
                    <AddressEdit :nickname = nickname></AddressEdit>
                </van-collapse-item>
                <van-collapse-item title="我的订单" name="5">
                   <p @click = 'pushOrder'> 我的订单...</p>
                </van-collapse-item>
                <van-collapse-item title="密码设置" name="6">系统正在升级中...</van-collapse-item>
                <van-collapse-item title="安全中心" name="7">系统正在升级中...</van-collapse-item>
            </van-collapse>
        </div>
    </div>
</template>

<script>
import { Collapse, CollapseItem } from 'vant';
import AddressEdit from '@/components/AddressEdit.vue';
import { Toast } from 'vant';
export default {
    name:'uploadImg',
    components:{
        AddressEdit
    },
    data(){
        return {
            touxiang:require('@/assets/images/mv2.jpg'),
            nickname:'',
            activeNames: ['0']
        }
    },
    mounted(){
         if(sessionStorage.touxiang){
                this.touxiang = sessionStorage.touxiang;
            }else{
                this.$axios.post('/vue/address')
                .then(res=>{
                    // console.log(res.data.result.avatar);               
                    if(res.data.result.avatar){                       
                        var result = res.data.result.avatar;
                        // 上传时   把'http://localhost:1902/'改为''字符串
                        this.touxiang = result.replace(/public/,'');
                        sessionStorage.touxaing = this.touxiang;
                    }else{
                        Toast({
                            message:'还没有头像,请上传头像',
                            duration:500
                        })
                    }
                
                })
            }
      
        // 头像
        // if(localStorage.touxiang){
        //     this.touxiang = localStorage.touxiang;
        // }else{
        //     this.touxiang = require("@/assets/images/dm1.jpg")
        // }
        
        // 用户名
        var user = JSON.parse(sessionStorage.nickname);
        // console.log(user.nickname);
        this.nickname = user.nickname;
    },
    methods:{
        pushLogin(){
            this.$router.push({name:'login'})
        },
        pushZhuce(){
            this.$router.push({name:'zhuce'})
        },
        pushOrder(){
            this.$router.push({name:'order'})
        },
        loadImg(){
            this.$refs.one.click();
        },
        shangchuan(){
            let file = this.$refs.one.files[0];   //需要上传图片
            // console.log('准备上传');     //用axios上传  用表单上传（构建表单数据对象）
            let data = new FormData();  //新建表单对象 
            data.append('avatar',file);
            this.$axios({
                url:'/vue/uploadAvatar',
                method:'POST',
                contentType:false,
                processData:false,
                data:data,
            }).then(res=>{
                // console.log(res);
                // public  置空        
                this.touxiang = res.data.avatarUrl.replace(/public/,'http://localhost:1902/');
                // sessionStorage.touxiang = this.touxiang;   //保存到本地
                this.$axios.get('/vue/updateTouxiang',{
                    params:{
                        touxiang : this.touxiang
                    }
                }).then(res=>{
                    // console.log(res);
                })
                
            })
        }
    }
}
</script>


<style scoped>
    .box{
        width:100%;
        height:6rem;
    }
    img{
        float:left;
        margin-left:20px;
    }
    .userInformation{
        width:60%;
        height:6rem;
        /* border:1px solid #000; */
        margin-left:1rem;
        float:left;
    }
    h3{
        margin-top:0.5rem ;
    }
    p{
        margin-top:1.6rem;
    }
    .hiddenInput{
        display:none;
    }
</style>

