<template>
    <div>
        <Head title="更多" class="vant-header"></Head>
        <!-- <h2 class="more">跟多分页--more</h2> -->
        <div class="more">
        <!--  单元格 -->    
            <!-- <van-cell   title="意见反馈" icon="envelop-o" value="" is-link /> -->
            <!-- 变量属性 :src -->
            <van-cell  v-for="(left,i) in lefts" :key="i" 
              v-bind:title="left.title" 
              :icon="left.icon"
               :value="left.value" is-link 
              @click="cellClick"
              />

        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            lefts:[
                {title:"意见反馈",icon:"envelop-o",name:"sug",value:""},
                {title:"我的客服",icon:"service-o",name:"cus",value:"加群,咨询"},
                {title:"消息推送",icon:"comment-circle-o",name:"",value:""},
                {title:"关于我们",icon:"warning-o",name:"",value:""},
                {title:"版本号",icon:"upgrade",name:"num",value:"3.4.4"},
            ],
            show:true,

        }
    },
    methods: {
        cellClick(){

            if(!!sessionStorage.username){
                this.$router.push({name:"about"});
                // 前端token解密模块
            }else{
                this.$router.push({name:"login"});
            }
            
        }
    },
    mounted(){
        
    }

}   
</script>

<style scoped>
.more{
    margin-top:55px;
    border-top:1px solid #323233;
    
}
.col{
    color: #323233;
}

</style>

