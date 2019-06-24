<template>
    <div>
         <div >
            <van-nav-bar
                title="新闻列表"
                left-arrow
                class="ttt"
                @click-left="onClickLeft"
            />   
        </div>

        <div>
            <img :src="good.img" alt="" width="100%" height="400vh">
             <h3>{{good.name}}</h3>
             <h3>价格：{{good.price}}</h3>
             <h3>折扣：{{good.discount}}</h3>
        </div>
    </div>
</template>


<script>
export default {
    name:"good",
    data(){
        return {
            good:{}
        }
    },
    methods:{
        onClickLeft(){
        this.$router.push({name:'find'})
       }
    },
    
    mounted(){
         this.$axios.get("vue/getGoodOne",{
             params:{
                 goodId:this.$route.params.goodId
             }
         }).then(res=>{
             this.good=res.data.result
         })
    },
    
}
</script>
