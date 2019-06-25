<template>
    <div>
        <!-- <h2>债权项目--project-项目列表--组件</h2> -->
        <div style="color:#fff;background:#fff;" >1</div>
        <div style="color:#fff;background:#fff;" >1</div>
        <div style="color:#fff;background:#fff;" >1</div>
        <!-- <div style="color:#000;background:#fff;padding-left:20px;" >大小排序 : </div> -->

        <div>
            <button class="btn" v-bind:class="{ active: selected1 }" id="btn1" @click="profitSort">借款年利率{{show}}</button>
            <button class="btn" v-bind:class="{ active: selected2}" @click="changeDate">期限</button>
            <button class="btn" v-bind:class="{ active: selected3 }" @click="count">金额</button>

             <!-- @click="changeCarNumber(5) -->
        </div>
        
        <!-- 不同组件交互 -->
         <!-- <button class="btn"  @click="changeCarNumber(2)">改变roitCoin</button> -->

        <!-- <button class="btn btn-danger"  onclick="location.href='/movie?year=-1'">年份降序</button> -->
        <!-- <button class="btn btn-primary" onclick="location.href='/movie?year=1'">年份升序</button> -->

        <div class="bg" v-for="(pro,i) in projects" :key="i"

        >
        <!-- {{good.name}}---$RMB{{good.price}}--{{good.type.text}} -->
        <!-- 数据形式 -->
            
                <div class="pname">
                    <i></i>
                    
                    <span>{{pro.nikename}}/</span>
                    <span>{{pro.name}}/</span>
                    <span>{{pro.heroImg}}</span>
                    <van-tag class="fr" round plain type="danger">100元起投</van-tag>
                    
                </div>
                <!-- 清除浮动影响 -->
                <div class="ov left">
                    <div class="fl">
                        <p class="num1">{{pro.roitCoin}}</p>
                        <p>借款年利率(%)</p>
                    </div>
                    <div class="date fl">
                        <p ><span class="num2">{{pro.pithy}}</span>个月</p>
                        <p>期限</p>
                    </div>
                    <div class="fl r">
                        <p class="num2 ">{{pro.rmb}}</p>
                        <p>剩余金额(元)</p>
                    </div>
                </div>

                <div class="pname">
                    <van-progress
                    :show-pivot="pivot"
                    color="#f2826a"
                    :percentage="75"
                    />           
                    <div class="ptext">{{pro.type}}%</div>
                </div>
                
        </div>

    </div>
</template>

<script>

import {mapState,mapActions,mapMutations} from "vuex";
export default {
    name:"projects",
    data(){
        return{
            selected1:true,          
            selected2:false,      
            selected3:false,
            pivot:false,
            show:1,
            projects:[],
            
        }
    },
    props:{
        //数据goods从loan.vue父组件传递过来  
        goods:Array,
        // props传递数据改变
        
    },
    mounted(){
        //  子 projects  父  goods
        this.projects=this.goods;
    },
    computed:{

    },
    methods:{
        ...mapActions([
            'changeCarNumber'
        ]),
        ...mapMutations([
            'changeCarNum'   //  this.changeCarNum  映射为  this.$store.commit('changeCarNum')
        ]),


        profitSort(){
            // 样式

            // 改变标记
            // console.log(this.$parent.show); //this.$parent父组件数据
            switch(this.show){
                case 1:
                     this.show = this.show-2;
                     break;
                case -1:
                    this.show = this.show+2;break;
                default:
                    break;
            }
            //  console.log(this.show);
              
            if(this.selected1){
                this.selected1=false;
                //从小到大location.href='/movie?year=1'
                
            }else{

                this.selected1=true; 
               
            }         
        },
        changeDate(){
            // {{pro.pithy}}
            var vpithy=1;
            if(this.selected2){
                this.selected2=false; 
            }else{
                this.selected2=true;  
                 var vpithy=-1;          
            } 

        },
        count(){
            // {{pro.rmb}}
            var vrmb=1;

            if(this.selected3){
                this.selected3=false; 
                
            }else{
                this.selected3=true; 
                var vrmb=-1;
            } 

        }
    }
    
}
</script>

<style lang="scss" scoped>

.btn{
    width:33.33333333%;
    border:1px blue solid;
    background-color: #fff;
    color:blue;
}
.active{
    background-color: blue;
    color:#fff;
}
.bg{
    margin:10px 0;
    padding:0 10px;
    background-color: #fff;
}
.num1{

  font-size:32px;
  color:#DD9222;
}
.num2{
  font-size:18px;

   color:black; 
}
.date{
    text-align: center;
    line-height:30px;
}
.r{
    text-align: right;
     line-height:30px;
}
.pname{
    width:95%;
    margin-left:10px;
    padding:10px 0;
}
.van-tag {  
    float:right;
}
.fr{
    display: inline-block;
    float:right;
}
.ov{
    overflow: hidden;//触发BFC,,清除浮动影响
    margin-left:10px;
}
.fl{
    display:inline-block;
    width: 30%;
    height:80px;
    float: left;

}

.van-progress{
    width: 80%;
    margin-top:7px;
    float: left;
}

.ptext{
    display: inline-block;
    margin-left:30px;

    // float:right;
}
</style>
