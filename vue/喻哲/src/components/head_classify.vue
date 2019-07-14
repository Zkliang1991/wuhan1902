
<template>
    <div class="box">
        <div>
            <div class="nav">
                <van-tabs v-model="seleted" background="#3173e4" color="#fff" type="line" :border="false" title-active-color="red" title-inactive-color="#ffd5df" line-width=".4rem" line-height="0.1rem" sticky>
                    <van-tab v-for="(type,i) in types" :key="i" :index="i" :title="type">
                        <ul>
                            <div class="wrap">
                                <li v-for="(good,i) in allGooods.filter(item=>item.type.text==type)" :key="i" class="good">
                                    <router-link :to="{name:'singel',params:{id:good._id}}" >
                                        <img :src="good.img" alt="">
                                        <p class="p1">{{good.name}}</p>
                                        <p class="p2"><span>￥</span>{{good.price}}</p>
                                    </router-link>
                                </li>
                            </div>
                        </ul>
                        
                    </van-tab>
                </van-tabs>
            
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            seleted:0,
            allGooods:[],
            types:[],
        }
    },
    methods: {
        
            
        
    },
    mounted(){
        this.$axios.get('/vue/goods').then(res=>{
            var arr = res.data.result;
            this.allGooods = arr;
            var result = arr.map((item,index)=>{
                return item.type.text
            })
            this.types = Array.from(new Set(result))
            // this.types = result;
                console.log(this.allGooods)
        })
    },
}
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
}
.wrap{
    display: flex;
    // justify-content: space-evenly;
    // align-content: space-around;
    flex-wrap: wrap;
}
.good{
    // box-shadow: .01rem .01rem .01rem .01rem gray; 
    display: flex;
    flex-direction: column;
    width: 50%;
    box-sizing: border-box;
    padding: .1rem;
    margin: .1rem 0;
    text-align: left;
    img{
        width: 3.5rem;
    }
    .p1{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        box-sizing: border-box;
        margin: .1rem .15rem;
        font-size: .25rem;  
        color: #000;
    }
    .p2{
        color: red;
        font-size: 0.3rem;
        >span{
            font-size: 0.25rem;
        }
    }
}
</style>
