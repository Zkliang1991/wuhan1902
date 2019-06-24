<template>
  <div>
         <van-nav-bar
            v-bind:title="title"
            left-text="返回"
            right-text="搜索"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            class="sk"
            />
    </div>
</template>
<script>
export default {
    props:["title"],
    methods:{
        onClickLeft(){
            history.go(-1);
        },
        onClickRight(){
            this.$router.push({name:"search"});
        }
    }
}
</script>

