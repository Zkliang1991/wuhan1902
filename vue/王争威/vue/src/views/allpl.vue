<template>
    <div>
        <div v-for="(good,i) in goods" :key="i" class="div">
            <p>
                <van-icon name="manager" /> 用户名<span class="span1">{{good.username}} </span>评论时间 <span class="span2">{{good.time}}</span></p>
            <router-link :to="{name:'more',query:{goodid:good.goods._id}}"><van-card :desc="good.goods.type.text" :title="good.goods.name" :thumb="good.goods.img" /></router-link>
            <h2>评论内容:</h2>
            <h4><span class="span3">{{good.message}}</span></h4>
            <p class="fs"> <span class="span">服务态度:</span>
                <van-rate v-model="value=good.value" :size="25" color="#f44" void-icon="star" void-color="#666" readonly />
            </p>
            <p class="fs"> <span class="span">物流服务:</span>
                <van-rate v-model="value1=good.value1" :size="25" color="#f44" void-icon="star" void-color="#666" readonly />
            </p>
            <p class="fs"> <span class="span">描述相符:</span>
                <van-rate v-model="value2=good.value2" :size="25" color="#f44" void-icon="star" void-color="#666" readonly />
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                goods:[]
            }
        },
        mounted() {
            this.$axios.get('/vue/getping').then(res => {
                this.goods=res.data.result
                console.log(111, res)
            })
        }
    }
</script>
<style scoped>
    .van-icon-manager {
        color: aquamarine;
        font-size: 0.3rem
    }
    .span1{
        font-size: 0.5rem;
        color: darkgoldenrod;
        margin-left:  0.2rem;
        
    }
    .span2{
        font-size: 0.3rem;
        color: darkgoldenrod;
       
        
    }
    .fs {
        display: flex;
        justify-content: space-between;
    }
    .div{
        margin: 0.2rem 0;
    }
    .span3{
        color: black
    }
</style>
