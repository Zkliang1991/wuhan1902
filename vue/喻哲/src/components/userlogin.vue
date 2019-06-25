
<template>
    <div>
        <div class="userlogin">
            <div class="userpic">
                <div>
                    <img src="../assets/images/pic1.jpg" alt="" title="上传头像">
                    <!-- <input type="file" ref="one" accept="image/*" @change="shangchuan" class="hiddnInput"> -->
                </div>
            </div>
            <div class="username" >
                <p class="p1" v-if="isLogin" >{{username}}</p>
                <p class="p3" v-else @click="goLogin">登陆/注册<van-icon name="arrow"/></p>
                <p class="p2" v-if="isLogin"><span class="span1">会员1元抢</span><span>小白信用89.6</span></p>
            </div>
        </div>
    </div>
</template>

<script>
// import store from '@/store'
import { mapState,mapActions } from 'vuex';

export default {
    data() {
        return {
            // touxiang:require("@/assets/images/pic1.jpg"),
        }
    },
    computed: {
        ...mapState({
            changebg:state=>state.mine.changebg,
            isLogin:state=>state.mine.isLogin,
            show:state=>state.mine.show,
            username:state=>state.mine.username,
            headpic:state=>state.mine.headpic,
        })
    },
    // mounted() {
    //     if(localstorage.touxiang){
    //         this.touxiang = localstorage.touxiang;
    //     }else{
    //         this.touxiang = require("@/assets/images/pic1.jpg");
    //     }
    // },
    methods: {
        goLogin(){
            this.$router.push({name:"login"})
        },
    //     uploadImg(){
    //         this.$refs.one.click();
    //     },
    //     shangchuan(){
    //         console.log("准备上传")
    //         let file = this.$refs.one.files[0]; // 需要上传图片
    //         let data = new FormData(); //创建表单对象 
    //         data.append("avatar",file);

    //         this.$axios({
    //             url:"/vue/uploadAvatar",
    //             methods:"POST",
    //             contentType:false,
    //             processData:false,
    //             data:data,
    //         }).then(res=>{
    //             console.log(res)
    //             this.touxiang = res.data.avatarurl.replace(/public/,'http://localhost:9966/')
    //             localStorage.touxiang = this.touxiang
    //         })
    //     }
    },
}
</script>

<style lang="scss" scoped>
.userlogin{
    width: 100%;
    height: 1.2rem;
    display: flex;
    color: aliceblue;

}
.userpic{
    width: 18%;
    display: flex;
    align-items: center;
    >div{
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        margin-left: .2rem;
        overflow: hidden;
        >img{
            width: 100%;
            height: 100%;
        }
    }
}
.username{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: left;
    >.p1{
        font-size: .26rem;
        padding-left: .03rem;
        font-weight: bold;
    }
    >.p2{
        font-size: .1rem;
        font-weight: 100;
        >span{
            border: .01rem solid goldenrod;
            border-radius: .5rem;
            padding: .04rem .1rem;
        }
        >span:first-child{
            margin-right: .1rem;
        }
    }
    >.p3{
        font-size: .25rem;
        font-weight: 100;
        display: flex;
        align-items: center;
    }
}
.hiddenIput{
    display: none;
}

</style>
