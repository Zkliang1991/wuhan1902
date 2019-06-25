<template>
    <div>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index" @click="huichang">
                <img :src="image" style="width:100%;height:3rem" >
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
export default {
    data(){
        return{
             
        
        }
    },
    props:["images"],
    methods:{
        huichang(){
            this.$router.push({name:"classify"})
        }
    }
}
</script>
