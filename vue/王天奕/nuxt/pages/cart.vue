<template>
    

    <div>
          <div v-for="(list,i) in lists" :key='i' class="box">
           
            <img :src='list.src' :alt='list.titlelk' width="100" height="100"><span class="title">{{list.title}}</span><span class="tags">{{list.dataTags}}</span><span class="x" @click="shan(list.title)">X</span>
              <span class="dan">单价:6300</span><span class="num">件数: {{list.num}}</span><span class="xiao">小计:{{list.num*6300}}</span>
          </div>
          



         <van-submit-bar
          :price="zongji"
          button-text="提交订单"
          
        />

    </div>
</template>
<script>
export default {
  data() {
    return {
      su:0,
      zongji:0,
      show: true,
      lists:{},
      username:'',
      msg:[],
    }
  },
  computed:{
      
  },
  methods: {
    
   
  
    shan(a){
      if(localStorage.username){
           this.username=localStorage.username;
          console.log(this.username,a);
          this.$axios.get("/shan",{
                      params:{username:this.username,title:a}
                  })
          .then(res=>{
                  if(localStorage.username){
              this.username=localStorage.username;
              console.log(this.username);
              this.$axios.get("/getGoodssss",{
                          params:{username:this.username}
                      })
              .then(res=>{



                
                this.lists=res.data.result
                console.log(this.lists);
                this.su=0;
                console.log(this.su);
                this.zongji=0;
                this.lists.forEach(element => {
                this.su+=(element.num);
                this.zongji+=(6300*element.num)*100;
              });
                this.$store.dispatch('suAdd',this.su);
              })
              }
          })
        }
     
      
    }
  },
  created(){



        if(localStorage.username){
           this.username=localStorage.username;
          console.log(this.username);
          this.$axios.get("/getGoodssss",{
                      params:{username:this.username}
                  })
          .then(res=>{
              this.lists=res.data.result
              console.log(this.lists);
              this.su=0;
              this.zongji=0;
              this.lists.forEach(element => {
                this.su+=(element.num);
                this.zongji+=(6300*element.num)*100;
                this.$store.dispatch('suAdd',this.su);
              });
          })
        }
        
    }
};

</script>
<style scoped>
.box{
  margin-top: 20px;
  clear: both;
  overflow: hidden;
}
img{
  float: left;
}
.box span{
    float: left;
    margin: 0 10px;
    width: 20%;
    margin-top: 10px;
}
.title{
  height: 42px;
}
.tags{
  
}
.num{
  color: #f00;
  
}
.box .x{
  float: right;
  height: 100px;
  line-height: 100px;
  width: 10px;
  
}
.dan{
 
}
.xiao{
  
}
</style>
