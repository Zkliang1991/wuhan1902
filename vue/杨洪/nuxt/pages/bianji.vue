





<template>
    <div>
      
        
    <van-tabs  v-model="active" swipeable > 
   <van-tab v-for="(type,i) in types" :key="i"  :title="type.text" v-model="active" swipeable >
     <fenlei :type="type" :allgoods="allgoods"  @chang="getAllgood"></fenlei>
    </van-tab>
    
    </van-tabs>

  
      
    </div>
</template>



<script>
import { Notify } from 'vant';
import fenlei from "~/components/fenlei.vue"
export default {
        name:"bianji",
        components:{
            fenlei
        },
        data(){
            return{
                types:[],
                allgoods:[],
                 show:false,
                active:"shirt"

            }
        },
        methods:{
                getAllgood(){
                    this.allgoods=this.allgoods.resver()
                }
                
        },
        created(){
             this.$axios.get("/allcar").then(res=>{
                
                 this.types=res.data.result
             })
             
        },
        mounted(){
            //   this.$notify('提示文案');
              Notify({
                message: '十一特惠，全场五折',
                duration: 3000,
                background: '#1989fa'
                });
                this.$axios.get("/getgoods").then(res=>{
                   
                        this.allgoods=res.data.result
                        
                })
        }
}
</script>

