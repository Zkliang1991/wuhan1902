<template>
  <div>
      <router-link  v-for="(good,i) in goods" :key="i" :to="{name:'more',query:{goodid:good._id}}">
           <van-card
      :num="good.num"
      :tag="good.type.text"
      :price="good.price"
      desc="描述信息"
      title="商品标题"
      :thumb="good.img"
      :origin-price="good.price+good.discount"
    >
    
    </van-card>
      </router-link>
   
  </div>
</template>
<script>
export default {
    props:['goods'],
    data(){
        return {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        }
    }
}
</script>





