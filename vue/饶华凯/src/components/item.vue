<template>
    <div class="item-active cl">
        <router-link :to="{name:'good',params:{id:good.id}}" >
            <div class="wrap">

                <div class="img_div">
                    <img :src="good.img" alt="" style="width:100%;height:100%">
                </div>
                <div class="msg_div">
                    <div class="goods_name">{{good.name}}</div>
                    <p>￥:<span>{{good.price}}元</span></p>
                    <p>风格:{{good.type.text}}</p>
                </div>
            </div>
           
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
     props:["good"],
}
</script>
<style lang="scss" scoped>

p{
    font-size:0.3rem;
}
.item-active{
    animation: zoomIn .8s;
   
}
.wrap{
     display: flex;
     height: 2rem;
    div{
        flex: 1;
    }
    .msg_div{
        box-sizing: border-box;
        padding-left:0.15rem;
        .goods_name{
            padding-top:0.1rem;
            font-size:0.26rem;
            color:#000;
            overflow:hidden;
            text-overflow:ellipsis;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2; 
            letter-spacing:0.03rem;
        }
        p{
            font-size:0.25rem;
            padding-top:0.06rem;
            color:gray;
            letter-spacing:0.03rem;
            span{
                margin-left:0.1rem;
                font-size:0.3rem;
                color:red;
            }
        }
    }
}
</style>
