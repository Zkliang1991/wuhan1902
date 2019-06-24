<template>
    <div>
        <Head title="设置"></Head>
        <van-collapse v-model="activeName" accordion>
        <van-collapse-item title="账户与安全" name="1">内容</van-collapse-item>
        <van-collapse-item title="我的收货地址" name="2">内容</van-collapse-item>
        <van-collapse-item title="通用" name="3">内容</van-collapse-item>
        <van-collapse-item title="问题反馈" name="4">内容</van-collapse-item>
        <van-collapse-item title="地区设置" name="5">内容</van-collapse-item>
        <van-collapse-item title="音效与通知" name="6">内容</van-collapse-item>
         <van-collapse-item title="关于手机淘宝" name="7">内容</van-collapse-item>
        </van-collapse>
        <van-button type="warning" @click="outlogin" size="large">注销登陆</van-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"设置",
            activeName:1
        }
    },
    methods:{
        outlogin(){
            delete sessionStorage.userInfo;
            this.$router.push({name:"login"})
        }
    }
}
</script>
