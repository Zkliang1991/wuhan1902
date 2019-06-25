
<template>
    <div>
        <div class="head">
            <div class="search">
                <input type="text" placeholder="请输入搜索内容" v-model="value" @keydown.enter="search" :border="false">
            </div>
            <div class="cancel">
                <p @click="back">取消</p>
            </div>
        </div>
        <div class="oneGood" v-for="(good,i) in goods" :key="i">
            <!-- <div class="select">
                <input type="checkbox" name="" id="" class="checkbox" v-model="good.check">
            </div> -->
            <div class="good">
                <router-link :to="{name:'singel',params:{id:good._id}}" >
                <van-card
                    :price="good.price"
                    :title="good.name"
                    desc=""  
                    :thumb="good.img"                  
                    >
                </van-card>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"search",
    data() {
        return {
            value:"",
            goods:"",
        }
    },
    methods: {
        search(){
            this.$axios.get('/vue/search',{params:{keyword:this.value}}).then(result=>{
                this.goods = result.data.result;
            })
        },
        back(){
            this.$router.back()
        }
    },
}
</script>

<style lang="scss" scoped>
.head{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #3173e4;
}
.cancel{
    font-size: 0.28rem;
    color: #fff;
    
}
.search{
    width: 75%;
    >input{
        height: .6rem;
        width: 100%;
        display: block;
        border: none;
        border-radius: .3rem;
        color: grey;
        // margin: 0 2%;
        padding-left: 5%;
        font-size: 0.25rem;
    }
}
.van-card{
    background-color: #fff;
    text-align: left;
}
.van-card__bottom{
    margin-top: .2rem;
}
.van-card__price{
    font-weight: bold;
    font-size: 0.3rem;
}
</style>
