  


  <template>
      <div>
          <form action="/">
                    <van-search
                        v-model.lazy="keyword"
                        placeholder="请输入搜索关键词"
                        show-action
                        @search="onSearch"
                        @cancel="onCancel"
                    />
            <list :goods="goods"></list>    
         </form>
      </div>
  </template>


  <script>
  export default {
      name:"search",
      components:{
          
      },
      data(){
         
          return{
              keyword:"",
              goods:[]
          }
      },
      watch:{
          keyword(newVal){
             
              this.$axios.get("/getgoods",{
                    params:{
                        keyword:newVal
                    }
              }).then(res=>{
                  console.log( res,"接收成功123")
                  this.goods=res.data.result
                  
              })
          }
      },
       methods:{
           onSearch(){

           },
           onCancel(){
                 history.go(-1)
               
           }
       }
  }
  </script>
  
  