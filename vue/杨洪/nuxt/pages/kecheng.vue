


<template>
    <div class="ki">
        
        <van-swipe :autoplay="3000" indicator-color="white">
      
        <van-swipe-item><img src="../assets/images/7.jpg" alt="" width="100%" height="200"></van-swipe-item>
        <van-swipe-item><img src="../assets/images/8.jpg" alt="" width="100%" height="200"></van-swipe-item>
      
        </van-swipe>
        <van-tabs v-model="active">
            <van-tab title="科学小件"></van-tab>
            <van-tab title="学习课程"></van-tab>
        </van-tabs>

        <ul>
            
            <li v-for="(good ,i) in goods" :key="i" class="ki">
               <van-card
                price="2.00"
                :desc="good.genres[0]"  
                :title="good.title"
                :thumb="good.images.small"
                tag="标签"
                />
                
                
            </li>
            
           
        </ul>
    </div>
</template>

<script>
export default {
    name:"kecheng",
    // props:{
    //     goods:{
    //         type:Array,
    //     }
    // },
    data(){
        return{
           active:1,
           count:0,
           isLoading:false,
           goods:[]
            
            
        }
        
    },
    methods:{
        
    },
    mounted(){
        this.$axios.get("/wk",{
            params:{
                limit:4
            }
        }).then(res=>{
              console.log(res,123)
              this.goods=res.data.result
        })
    }

}
</script>