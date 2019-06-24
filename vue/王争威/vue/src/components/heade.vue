<template>
    <div >
            
                 <van-nav-bar
                 :fixed="true"
            :title="msg"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
          />
          
           
    </div>
</template>
<script>
export default {
    props:['msg'],
    data(){
        return {

        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
    .fixed{
        position: fixed;
        top: 0;
        left: 0;
    }
</style>