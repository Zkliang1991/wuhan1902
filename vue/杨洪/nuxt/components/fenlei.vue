



<template>
    <div>
        <ul>
            <li v-for="(good ,i) in goods" :key="i" >
                    <router-link :to="{name:'xiangqing', params:{goodId:good.id},query:{name:good.name}}" >
                          
                             <van-card
                            
                            :price="good.price"
                            :desc="good.name"  
                            :title="good.type.text"
                            :thumb="good.img"
                            :origin-price="good.discount"
                        />
                        
                    </router-link>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name:"fenlei",
    props:{
        type:Object,
        allgoods:Array
    },
    data(){
        return{
            goos:[]
        }
    },
    computed:{
        goods(){
            return this.allgoods.filter(item=>item.type.value==this.type.value)
        }
    }
}
</script>


<style>
   
</style>
