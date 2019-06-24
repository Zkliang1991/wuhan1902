<template>
    <div id="mywrap">
        <Head title="个人中心"></Head>
        <div style="">

        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
        <div>
            
            <Uploadimg></Uploadimg>
            <!-- </keep-alive> -->
        </div>

        <van-button type="info" @click="gologin" v-if="flag">立即登陆</van-button>
        </van-pull-refresh>
        </div>
    </div>
</template>
<script>
import Uploadimg from "@/components/uploadimg.vue";
export default {
    data(){
        return{
            flag:true,
            userInfo:this.a,
            isLoading: false
        }
    },

    components: {
        Uploadimg,
    },
    methods:{
        gologin(){
            this.$router.push({name:"login"});
        },
        onRefresh() {
            setTimeout(() => {
                this.isLoading = false;
            }, 500);
        }
        
    },
    mounted(){
        if(sessionStorage.userInfo){
            this.flag=false;
        }else{
            this.flag=true;
        }
    }
    
}
</script>
<style lang="scss" scoped>
#mywrap{
    height: 100vh;
    width: 100vw;
    background-color: #f2f2f2;
}
h3{
    font-size:0.4rem;
}
div{
    overflow: visible
}
</style>
