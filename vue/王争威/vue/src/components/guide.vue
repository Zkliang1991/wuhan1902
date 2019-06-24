<template>
    <div>
        <div class="joinhome" @click="gohome">进入首页</div>
    </div>
</template>
<script>
export default {
    methods:{
        gohome(){
            this.$router.push({name:"home"})
        }
    }
}
</script>
<style>
    
    .joinhome{
        position: absolute;
        bottom: 0.5rem;
        left: 20%;
        width: 5rem;
        height: 1rem;
        background-color:mediumaquamarine;
        color: aliceblue;
        text-align: center;
        line-height: 1rem;
        border-top-left-radius:0.5rem;
        border-top-right-radius: 0.5rem;
        border-bottom-left-radius:0.5rem;
        border-bottom-right-radius: 0.5rem;
        z-index: 100;
    }
</style>