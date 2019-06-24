<template>
    <mt-header v-bind:title="title">
        <mt-button slot="left" v-if="show" icon="back" @click="goback">返回</mt-button>
        <mt-button v-if="flag" icon="search" slot="right" @click="goSearch"></mt-button>
    </mt-header>
</template>

<script>
export default {
    props:["title","show"],
    data(){
        return {
            flag:true
        }
    },
    mounted(){
        this.flag =  this.$route.name == 'search' ? false : true 
    },
    methods:{
        goback(){
            console.log("xxxx");
            this.$router.go(-1);
        },
        goSearch(){
            this.$router.push({name:'search'})
        }
    }
}
</script>


<style scoped>
.mint-header{
    position: fixed;
    top:0;
    left:0;
    z-index:1000;
    width:100%;
}
</style>
