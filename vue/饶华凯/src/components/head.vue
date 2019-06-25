<template>
    <div>
        <div class="head"></div>
        <van-nav-bar
            :title="title"
            :left-text="msg"
            :left-arrow="flag"
            @click-left="onClickLeft"
            @click-right="onClickRight"
            >
            <van-icon name="search" slot="right" v-if="flag2"/>
        </van-nav-bar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:"返回",
            flag:true,
            flag2:true
        }
    },
    props:["title"],
    methods:{
        onClickLeft(){
            history.go(-1);
        },
        onClickRight(){
            this.$router.push({name:"serch"})
        }
    },
    mounted(){
        if(this.title=="首页"){
            this.msg="";
            this.flag=false
            this.$store.commit("footTaobao",true);
        }
        if(this.title=="搜索"){
            this.flag2=false
        }
    }
}
</script>
<style lang="scss" scoped>
//  img{
//   position:fixed;
//   width: 100vw;
//   height: 100vh;
//   z-index: -100;
// }
.van-nav-bar ,.van-hairline--bottom{
    position: fixed;
    top:0;
    width: 100%;
    height: 0.8rem;
    z-index: 100000;
    text-align: center;
    line-height:0.8rem;
}
.head{
    width: 100%;
    height: 0.8rem;
}
</style>
