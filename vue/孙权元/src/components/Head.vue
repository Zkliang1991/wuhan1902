<template>
    <div>
        <van-nav-bar
            :title="title"
            left-text="返回"
            right-text="搜索"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
    </div>
</template>

<script>
export default {
    name:"Head",
    props:["title"],
    data(){
        return {
            
        }
    },
     methods: {
        onClickLeft() {
        
            history.go(-1,)
            
            
        },
        onClickRight() {
            this.$router.push({name:"search"})
        
        },
  },
 
    
}
</script>
