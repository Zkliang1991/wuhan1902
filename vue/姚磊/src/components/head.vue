<template>
    <van-nav-bar :title="title" v-bind:left-text="show" :left-arrow="flag" @click-left="onClickLeft"
        @click-right="onClickRight">  
        <van-icon name="search" slot="right" />
    </van-nav-bar>
</template>

<script>
export default {
    props:["title","search"],
    data(){
        return{
            show:"返回",
            flag:true
        }
    },
    mounted(){
        this.flag =  this.$route.name == 'home' ? false : true ;
        this.show =  this.$route.name == 'home' ? '' : "返回" 
    },
     methods: {
    onClickLeft() {
      history.go(-1);
    },
    onClickRight() {
      this.$router.push({name:'search'})
    }
  }
}
</script>




