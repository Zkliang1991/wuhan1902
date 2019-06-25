

<template>
    <div>
        <div class="head">
            <div class="headpic"><p v-show="show">
                <!-- <img src="../assets/images/pic1.jpg" alt=""> -->
            </p></div>
            <div class="mine"><p v-show="show">我的</p></div>
            <div class="icon">
                <van-icon name="setting-o" />
                <van-icon name="chat-o" />
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show:true,
        }
    }
}
</script>

<style lang="scss" scoped>
.head{
    width: 100%;
    height: .8rem;
    background-color:#3173e4;
    display: flex;
    align-items: center;
    color: aliceblue;
   >div{
       width: 33.33%;
   }
   >.headpic{
       text-align-last: left;
       >p{
           box-sizing: border-box;
            border-radius: 50%;
            width: 0.6rem;
            height: 0.6rem;
            overflow: hidden;
            margin-left: .2rem;
            >img{
                width: 100%;
                height: 100%;
            }
       }
   }
   >.icon{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        >i{
            box-sizing: border-box;
            padding: 0 .1rem;
            font-size: .4rem;  
   }
}


}

</style>
