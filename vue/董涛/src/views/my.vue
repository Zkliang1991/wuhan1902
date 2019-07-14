<template>
    <div>
        <Head title="个人中心" ></Head>
        <header>
            <div class="a-bar">
                <div class="a-name">我的廿一客</div>
            </div>
        </header>
        <div class="main-info">
            <div class="person_info">
                <div class="my_info">
                    <div class="mem_logo">
                        <uploadImg></uploadImg>
                    </div>
                    <ul class="mem_info">
                        <li>21cake</li>
                        <li v-if="isLogin">
                            <van-button type="default"> 欢迎您 &nbsp;&nbsp;{{username}}</van-button>
                        </li>
                        <li v-else>
                            <van-button type="danger" @click="gotoLogin">马上登陆</van-button>
                        </li>
                        <li v-if="isLogin"><a>修改个人信息 &gt;</a></li>
                    </ul>
                </div>
                <div class="activity">
                    <ul class="balance">
                        <li class="a_title">￥0.0</li>
                        <li class="a_txt">果实币余额</li>
                    </ul>
                    <ul class="coupon">
                        <li class="a_title">0张</li>
                        <li id="couponId" class="a_txt">优惠券</li>
                    </ul>
                </div>
            </div>
            <van-cell-group class="user-group">
                <van-cell icon="records" title="待付订单" @click="gotoCar" is-link />
                <van-cell icon="points" title="全部订单" @click="gotoCar" is-link />
                <van-cell icon="location-o" title="地址管理" is-link />
            </van-cell-group>
            <van-button type="default" size="large" @click="outLogin">退出登陆</van-button>
        </div>
        <!-- <p v-if="isLogin">
            <van-button type="default"> username==xxx </van-button>
        </p>
        <p v-else>
            <van-button type="danger" @click="gotoLogin">马上登陆</van-button>
        </p> -->
    </div>
</template>

<script>
import { Toast } from 'vant';
import uploadImg from "@/components/uploadImg.vue"
export default {
    data(){
        return{
            isLogin:sessionStorage.userInfo,
            username:sessionStorage.username
            
        }
    },
    components:{
        uploadImg
    },
    methods:{
        gotoLogin(){
            this.$router.push({name:'login'})
        },
        outLogin(){
            if(sessionStorage.userInfo){
                sessionStorage.removeItem('userInfo');
                sessionStorage.removeItem('username');
                this.$router.push({name:'login'});
            }else{
                Toast.fail('未登录...');
            }
        },
        gotoCar(){
            this.$router.push({name:'cart'})
        }
    }
}
</script>

<style lang="scss" scoped>
.a-bar {
    border-bottom: 1px solid #fbeeef;
    height: 44px;
    position: relative;
}
.a-bar .a-name {
    text-align: center;
    font-size: 16px;
    line-height: 44px;
    color: #8e6a55;
}
.person_info {
    height: 235px;
    color: #684029;
    font-size: 14px;
}
.person_info .my_info {
    text-align: center;
    /* height: 235px; */
}
.person_info .my_info .mem_logo {
    margin-top: 23px;
}
.person_info .my_info .mem_logo img {
    width: 70px;
    height: 70px;
    text-align: center;
    margin: 0 auto;
}
.person_info .my_info .mem_info li {
    margin: 5px 0;
}
.person_info .activity {
    border-bottom: 12px solid #f9f9f9;
    height: 70px;
}
.person_info .activity ul {
    float: left;
    width: 50%;
    height: 50px;
    margin-top: 20px;
    border-top: 1px solid #efefef;
    border-right: 1px solid #efefef;
    font-size: 12px;
    text-align: center;
    padding-top: 5px;
    box-sizing: border-box;
}
.person_info .activity ul .a_title {
    font-size: 14px;
}




.user-poster {
    width: 100%;
    height: 53vw;
    display: block;
}
.user-group{
    padding: 0;
    font-size: 12px;
    // text-align: center;
    background-color: #fff;
    margin-top: 15px;
    .van-icon {
      display: block;
      font-size: 24px;
    }
}

p{
    text-align: center;
    background: #fff;
}

.van-button--large{
    position: absolute;
    left: 0;
    bottom: 50px;
}
.van-button .van-button--default .van-button--normal{
    color: red;
}
</style>
