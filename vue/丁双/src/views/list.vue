<template>
    <div class = "box">
        <div v-for = "(allGd,i) in data.allGds" :key = "i">
            <router-link :to = '{name:"detail",params:{keyword:allGd.id}}'>
                <img :src="allGd.img" alt="" style = 'width:100%;height:240px;'>
            </router-link>  
            <div>
                <p>{{allGd.title}}</p>
                <h3>分类:{{allGd.type.value}} -- {{allGd.type.text}}</h3>
               <p style = "color:#f00">价格￥RMB: {{ allGd.price }}元  /  正品 / 全场最低价只限最后一天</p>
            </div>
        </div>
    </div>
</template>

<script>
import  {mapState} from "vuex"
export default {
    name:'list',
    computed:{
        ...mapState(['data','keyword'])
    },
    methods:{

    }
}
</script>

<style scoped>
    .box{
        padding:0 8px;
    }
</style>


