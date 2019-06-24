<template>
    <div>
        <van-nav-bar id="title">
            <p slot="title" style="font-size:7vw" class="title">{{title}}</p>
            <van-icon name="user-circle-o" slot="right" style="font-size:8vw" />
        </van-nav-bar>
    </div>
</template>

<script>
export default {
     props:["title","show"], 
}
</script>

<style>
#title{
    background-color: #ff550a;
    height: 60px;
    line-height: 60px;
    
}
.title{
   color:white;
   font-weight: 550;
}

#title .van-icon{
    color:white;

}
</style>

