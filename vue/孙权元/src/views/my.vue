<template>
    <div>
        <Head title="个人中心"></Head>
        <!-- <div id="box">
            <div id="img">

            </div>
            <van-button plain type="primary" class="btn" @click="tiao">{{user}}</van-button>
       
        </div> -->
        <van-row id="box">
            <van-col span="8">
                <div id="img">

                </div>
            </van-col>
            <van-col span="6">
                <van-button plain type="primary" class="btn" @click="tiao">{{user}}</van-button>
            </van-col>
            <van-col span="6">
                <van-button plain type="danger" class="btn" @click="tui">退出</van-button>
            </van-col>
        </van-row>
    </div>
</template>


<script>
import { Dialog} from 'vant';
export default {
    name:"my",
    data(){
        return {
           user:localStorage.username
        }
    },
    methods:{
        tiao(){
            if(!localStorage.username){

                this.$router.push({name:"login"})
            }
        },
        tui(){
            if(localStorage.username){

                Dialog.confirm({
                    title: '退出登录',
                    message: '是否退出登录'
                    }).then(() => {
                        localStorage.username=''
                        history.go(0)
                    }).catch(() => {
                    // on cancel
                    });
            }

        }
    },
    created(){
        if(!localStorage.username){
            this.user = "登陆&注册"
        }
    }
}
</script>


<style scoped>

    #box{
        width: 100%;
        padding-left: 20px;
        display:flex;
        flex-direction: row;
        
        
    }
    #img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #f00;
    }
    .btn{
        
    }
</style>
