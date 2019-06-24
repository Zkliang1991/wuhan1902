<template>
    

    <div>

       <van-notice-bar
        color="#429200"
        background="#ecf9ff"
        left-icon="info-o"
        >
        {{text}}
        </van-notice-bar>
        <van-dropdown-menu>
  <van-dropdown-item v-model="value" :options="option" />
  <van-dropdown-item title="筛选" ref="item">
    <van-switch-cell v-model="switch1" title="Tank" />
    <van-switch-cell v-model="switch2" title="Mage" />
    <van-switch-cell v-model="switch3" title="Assassin" />
    <van-switch-cell v-model="switch4" title="Fighter" />
    <van-switch-cell v-model="switch5" title="Support" />
    <van-switch-cell v-model="switch6" title="Marksman" />
    <van-button block type="info" @click="onConfirm">确认</van-button>
  </van-dropdown-item>
</van-dropdown-menu>
    
            <li v-for="(list,i) in lists" :key='i'  @click="goumai(list.title,list.dataTags,list.src)"   >
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
    props:['info'],
    data(){
        return {
            
            tag:[],
            tags:{},
            lists:[],
            a:'',
            b:'',
            c:'',
            show: false,
            flag:true,
            text:'新用户注册送兰博基尼,5元优惠卷;代刷点券,5折优惠中;体验10元代练上王者;',
            //text:'少装不努力,后跳带剑气;',
            value: 0,
            switch1: false,
            switch2: false,
            switch3: false,
            switch4: false,
            switch5: false,
            switch6: false,
            option: [
                { text: '全部商品', value: 0 },
                { text: '价格从高到低', value: 1 },
                { text: '价格从低到高', value: 2 }
            ]
        }
    },
    methods:{
        onConfirm() {
            this.$refs.item.toggle();
            this.tag=[];
            if(this.switch1){this.tag.push("Tank")};
            if(this.switch2){this.tag.push("Mage")};
            if(this.switch3){this.tag.push("Assassin")};
            if(this.switch4){this.tag.push("Fighter")};
            if(this.switch5){this.tag.push("Support")};
            if(this.switch6){this.tag.push("Marksman")};
            this.tags={ta:this.tag}
            console.log(this.tag);
            if(this.tag.length>0){

                this.$axios.get("/getGoodss",{
                    params:this.tags
                }
                    
                )
                .then(res=>{
                    this.lists=res.data.result;
                    console.log(this.lists);
                 })
            }
        },
        goumai(a,b,c){
            this.show=true
            this.a=a;
            this.b=b;
            this.c=c;
            
            console.log(a,b,c);
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
                
            })

        },
        onClickButton2(a,b,c) {
            this.show=false;
            


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
                
            })

            this.$router.push({name:'cart'});
        }

    },
    created(){
        this.$axios.get("/getGoods")
        .then(res=>{
            this.lists=res.data.result
            
        })
        
    }
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
