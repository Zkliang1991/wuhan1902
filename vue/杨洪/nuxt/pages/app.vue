


<template>
    <div>
        <head title="火星人俱乐部"></head>
      
        <van-swipe :autoplay="2000" indicator-color="white">
        <van-swipe-item><img src="../assets/images/1.jpg" alt="" width="100%" height="200"></van-swipe-item>
        <van-swipe-item><img src="../assets/images/2.jpg" alt="" width="100%" height="200"></van-swipe-item>
        <van-swipe-item><img src="../assets/images/3.jpg" alt="" width="100%" height="200"></van-swipe-item>
        <van-swipe-item><img src="../assets/images/4.jpg" alt="" width="100%" height="200"></van-swipe-item>
        </van-swipe>

        <van-notice-bar
        text=" 少儿暑期培训班开班啦，孩子学习老不好，多半是打少了，来我们千锋培训吧 包教包会，如果不会，退还你双倍学费"
        left-icon="volume-o"
        />
        <van-button type="info" size="large" @click="huo">火星人俱乐部商城</van-button>
         <!-- <van-notice-bar
        color="green"
        background="gold"
        left-icon="volume-o"
        >
        少儿暑期培训班开班啦，孩子学习老不好，多半是打少了，来我们千锋培训吧 包教包会，如果不会，退还你双倍学费
        </van-notice-bar> -->
        <div class="aaa">
            <!-- <iframe height=100% width=100% src='http://player.youku.com/embed/XNDE0NjY2OTI0MA==' frameborder='allowfullscreen'></iframe> -->
            <iframe height=100% width=100% src='http://player.youku.com/embed/XNTE3NzM3MjIw' frameborder='allowfullscreen'></iframe>
        </div>
        <div class="aaa">
            <iframe height=100% width=100% src='http://player.youku.com/embed/XNDEyNDE5MzYyOA==' frameborder= 'allowfullscreen'></iframe>
        </div>

        <div v-for="(movie,i) in movies" :key="i">
            <img :src="movie.images.small" alt="" width="100%" height="150px">
            
            <h6>{{movie.directors[0].name}}</h6>
        </div>
    </div>
  
</template>


<script>

export default {
   
    data(){
        return{
           
                movies:[]
            
        }
        
    },
    methods:{
            huo(){
                this.$router.push({name:"bianji"})
            }
    },
    created(){
        this.$axios.get("/go").then(res=>{
            console.log(res)
            this.movies=res.data.result
        })
    }
}
</script>

<style lang="css" scoped>
.aaa{
    width: 100%;
    height: 200px;
}
</style>

