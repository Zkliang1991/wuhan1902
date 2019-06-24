<template>
    <div>
            <van-collapse v-model="activeName" accordion>
                    <van-collapse-item title="点击评论商品" name="1"  icon="comment">
                           
                            <slot></slot>
                    </van-collapse-item>
                   
                   
                  </van-collapse>
    </div>
</template>
<script>
    
    export default {

        // props:['good'],
        data(){
            return {
                activeName:"3",
            }
        },
        methods:{
            dianji(data){
                console.log(data)
            }
        }
    }
</script>
<style>

    .van-cell__left-icon{
        font-size: 0.4rem;
        color:#1f6;
        margin-right: 1rem;
    }
    .van-card__title{
        font-size: 0.3rem;
        color: darkturquoise
    }
    .van-card__desc {
        color: salmon;
        font-size: 0.35rem;
        margin: 0.1rem 0;
    }
    .van-card__price{
        font-size: 0.35rem;
    }
    .van-card__num{
        font-size: 0.35rem;
    }
</style>