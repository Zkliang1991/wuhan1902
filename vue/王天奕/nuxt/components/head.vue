<template>
    <div>
       

        <van-nav-bar :title="title" >
        <van-icon name="search" slot="right"  @click='goSearch'  style="font-size:28px"/>
        </van-nav-bar>

        </div>
        
</template>

<script>

export default {
    props:["title","show"],
    data(){
        return {
            fixed:true,
            flag:true,
          
        }
    },

    mounted(){
        this.flag =  this.$route.name == 'search' ? false : true ;
      
       

    },
    methods: {
       
        
        //  onClickLeft() {
        //     left-text="返回" left-arrow   @click-left="onClickLeft"
        //     this.$router.go(-1);
        //     //history.go(-1)
        // },
        goSearch(){
            this.$router.push({name:'search'})
        }
  }
}
</script>
