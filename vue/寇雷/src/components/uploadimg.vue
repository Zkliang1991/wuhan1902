<template>
    <div>
        <van-row gutter="20">
            <van-col span="8">
                <img :src="touxiang" alt="上传头像" @click.stop="uploadimg" class="tx">
                <input type="file" name="" id="" ref="one" accept="image/*" @change="upload" class="hiddenInput">
            </van-col>
            <van-col span="16" style="margin-top:35px;">
                <van-button type="primary" size="small" style="margin-right:40px" @click="up">上传头像</van-button>
                <van-button type="danger" size="small" @click="relogin">注销登录</van-button>
            </van-col>
        </van-row>
    </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
    name:"avatar",
     components: {
    [Dialog.Component.name]: Dialog.Component
    },
    data(){
        return {
            touxiang:""
        }
    },
    mounted(){
        //进行判断
        if(localStorage.touxiang){
            this.touxiang = (localStorage.touxiang).replace(/localhost:1902/,"47.103.81.2")
        } else {
            this.touxiang = require("@/assets/images/user.jpg")
        }
    },
    methods:{
        //模拟点击事件
        uploadimg(){
            this.$refs.one.click();
        },
        //头像上传函数
        upload(){
            let file = this.$refs.one.files[0]; //需要上传图片
            let data = new FormData();  //新建表单对象
            data.append("avatar",file);

            this.$axios({
                url:"/vue/uploadAvatar",
                method:"POST",
                contentType:false,
                processData:false,
                data:data
            }).then(res=>{
                this.touxiang = res.data.avatarUrl.replace(/public/,"")
                localStorage.touxiang = this.touxiang
            })
        },
        //上传头像按钮逻辑
        up(){
            this.$refs.one.click();
        },
        //注销逻辑
        relogin(){
            Dialog.confirm({title: 'bilibili',message: '确定要退出登录吗?'}).then(() => {
                localStorage.removeItem("touxiang");
                sessionStorage.removeItem("userInfo");
                this.$router.push({name:"login"})
            }).catch(() =>{
                Dialog.close()
            });
        }
    }
}
</script>


<style scoped>
.tx{
    width: 80px;
    height: 80px;
    border-radius:50%;
    padding:10px 40px;
}
.hiddenInput{
    display:none
}
</style>

