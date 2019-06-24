<template>
    

    <div>
        <van-cell-group>
  <van-field
    v-model="key"
    center
    clearable
    
    placeholder="请输入英雄名"
  >
    <van-button slot="button" size="small" type="primary" @click="btn">搜索</van-button>
  </van-field>
</van-cell-group>


    <li v-for="(list,i) in lists" :key='i' :data-tag="list.dataTag" @click="goumai(list.title,list.dataTags,list.src)"   >
              <img :src="list.src"    width="66" height="66" :alt="list.title">
              
              <p>{{list.title}}</p>
              
            </li>


    
            
            <van-popup v-model="show">
            
            <img :src="c"     width="100" height="100" :alt="b">
              
              <p>{{a}}</p>



            <van-goods-action>
            <van-goods-action-button
                type="warning"
                text="加入购物车"
                @click="onClickButton1(a,b,c)"
            />
            <van-goods-action-button
                type="danger"
                text="立即购买"
                @click="onClickButton2(a,b,c)"
            />
            </van-goods-action>

            



        </van-popup>





    </div>
</template>
<script>
export default {
    data(){
        return {
            lists:[],
            flag:false,
            key:"",
            
            a:'',
            b:'',
            c:'',
            show: false,
        }
    },
    methods:{
            btn(){
                console.log(this.key)

                this.$axios.get("/getGoodsss",{
                    params:{
                        keyword:this.key
                    }
                }).then(res=>{
                this.lists=res.data.result;
                this.flag=true
                })
            },
            goumai(a,b,c){
            this.show=true
            this.a=a;
            this.b=b;
            this.c=c;
            
        },
         onClickButton1(a,b,c) {
            this.show=false
            
            this.$store.dispatch('suAdd');


            this.$axios.post("/addCar",{
                data:{
                    username:localStorage.username,
                    num:'1',
                    title:a,
                    dataTags:b,
                    src:c
                }
                
            }).then(res=>{
                console.log(res)
            })

        },
        onClickButton2(a,b,c) {
            this.show=false;
            
             this.$store.dispatch('suAdd');

            this.$router.push({name:'cart'});

            this.$axios.post("/addCar",{
                data:{
                    username:localStorage.username,
                    num:'1',
                    title:a,
                    dataTags:b,
                    src:c
                }
                
            }).then(res=>{
                console.log(res)
            })





        }
        

    },
       
    
}
</script>
<style scoped>
ul{
    display: flex;
    flex-wrap: wrap;
    
}
li{
    float: left;
    text-align: center;
    width: 25%;
    list-style:none;
    height: 150px;
}
img{
    display: inline;
    
}
.van-popup{
    width: 200px;
    height: 200px;  
    text-align: center;
}

</style>