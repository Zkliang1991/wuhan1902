
<template>
    <div class="box">
        <img src="../assets/images/1.jpg" alt="">
        <p @click="goHome"><span>{{advCount}}</span> 跳过广告</p>
    </div>
</template>
<script>
export default {
    
    data() {
        return {
            advCount:3,
            timer:null,
        }
    },
    methods: {
        goHome(){
            this.$router.push({name:"home"})
            clearInterval(this.timer);
        }
    },
    mounted(){
        this.timer = setInterval(() => {
            this.advCount--;
            if(this.advCount==0){
                clearInterval(this.timer);
                this.$router.push({name:"home"})
            }
        }, 1000);
    },
}
</script>

<style lang="scss" scoped>
    .box,img{
        width: 100%;
        height: 100%;
    }
    p{  
        width: 1.5rem;
        height: .4rem;
        position: fixed;
        top: 0.6rem;
        right: 0.6rem;
        font-size: 0.27rem;
        color: #000;
        border-radius: .18rem;
        background-color: rgba(255, 255, 255, .2)
    }
    span{
        color: azure;
    }
</style>
