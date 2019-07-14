<template>
        
    <div class="cor">
        <!-- <div class="w-box">1</div> -->
            
            
            <div class="head">
                <div class="middle">
                    <button class="btn" v-bind:class="{ active: selected1 }" id="btn1" @click="autolent">自动出借</button>
                   
                    <button class="btn" v-bind:class="{ active: selected2}" @click="pro">债权项目数</button> <!-- {{roitCoin}} -->
                    <button class="btn" v-bind:class="{ active: selected3 }" @click="change">债权项目转让</button>
                </div>         
            </div>
<!-- 自动出借内容模块 -->
            <div v-if="selected1">
                <div class="prolist p-box">
                        <div class="pro-ch">自动出借工具选择循环出借的债权项目如下</div>
                        <div class="pro-check">
                            <van-checkbox
                            plain
                            v-model="checked" 
                            shape="square" 
                            checked-color="	#76EE00" 
                            icon-size="12px" 
                            :label-disabled="flag"
                            >债权项目列表展示的项目</van-checkbox> 
                        </div>

                        <div class="pro-check">
                            <van-checkbox
                            v-model="checked" 
                            shape="square" 
                            checked-color="	#76EE00" 
                            icon-size="12px" 
                            :label-disabled="flag"
                            >借款额度合规,信息披露详细</van-checkbox> 
                        </div>


                        <div class="pro-check">
                            <van-checkbox
                            v-model="checked" 
                            shape="square" 
                            checked-color="#76EE00" 
                            icon-size="12px" 
                            :label-disabled="flag"
                            >借款期限36个月以内</van-checkbox> 
                        </div>

                        <div class="div1">
                            <span class="span1">最短授权时间</span>
                            <span class="span2">(退出需手动预约)</span>
                            <van-tag class="tag1" color="#DD9222" plain>加息券</van-tag>
                        </div>

                        <van-tabs  v-model="active" type="card" color="#E6941A">
                            <van-tab
                             class="tab-lent"
                            v-for="(tab,i) in tabs" :key="i"
                             :title="tab.title" >
                                <div class="lentDiv">历史年化(%): <span class="num1">{{tab.year}}</span></div>
                                <div class="lentDiv">可授权金额(元): <span class="num2">{{tab.pnum}}</span></div>
                                <div class="lentDiv">出借限额(元): <span class="num2">{{tab.lent}}</span></div>
                            </van-tab>

                        </van-tabs>

                        <van-button type="info" size="large" @click="lent">授权出借</van-button>


                    </div>  

                    <div class="box p-box">
                        <!-- 导航栏被mFoot的覆盖了 用sel跳转页面 -->
                        <Tabbar id="msg" class="all"  >
                            <TabbarItem v-for="(msg,i) in msgs" :key="i">
                                <!-- v-html="me.icon" -->
                                <svg class="van-tabbar-item icon" aria-hidden="true">
                                    <use :href="msg.icon"></use>
                                    <!-- xlink:href单个实例,,  :href才支持变量 -->
                                </svg>
                                <span class="van-tabbar-item__text">{{msg.txt}}</span>

                            </TabbarItem>
                        </Tabbar>
                    </div>
            </div>
            
<!-- 债权项目 -->
            <div v-if="selected2">
               <!-- 3: -->
                <Projects 
                        :goods="data.projects"
                    

                    >
                    
                </Projects>
            </div>
<!-- 债权项目转让 -->

             <div v-if="selected3">
                <!-- :roitCoin="roitCoin" -->
                <Projects 
                        :goods="data.projects"
                                      
                    >

                </Projects>
            </div>

    </div>
</template>


<script>
// 全局注册在main.js   ,局部注册在各views的.vue文件中
import Projects from "@/components/projects.vue"
//1:
import {mapState,mapActions} from "vuex";

export default {
    name:"loan",
     components:{
        Projects, //此处P是大写的
    },
    data(){
        return{
            selected1:true,          
            selected2:false,      
            selected3:false, 
            

            // roitCoin:1,
            pithy:1,
            rmb:1,
            checked: true,
            flag:true,
            msgs:[
                {txt:"服务详情",name:"",icon:"#icon-shenqingjilu"},
                {txt:"加入记录",name:"",icon:"#icon-jilu"},
                {txt:"常见问题",name:"",icon:"#icon-changjianwenti"},
                {txt:"撮合记录",name:"",icon:"#icon-jiaoyijilu"},
            ],
            list: ['a', 'b', 'c'],
            result: ['a', 'b','c'],
            active: 2,
            tabs:[
                {title:"30天",year:"7.50+6.00",pnum:"30000.00",lent:"10000.00"},
                {title:"90天",year:"9.50",pnum:"14868.02",lent:"不限"},
                {title:"180天",year:"11.50",pnum:"125495.00",lent:"不限"},
                {title:"360天",year:"12.50",pnum:"1800000.00",lent:"不限"},

            ],
            // goods:[]

        }
    },
    computed:{//计算属性有缓存,
       
        // 2:
        ...mapState([
            'roitCoin',
            'data'
        ]),
    },

    mounted(){
        
        // /vue/getProjects后端路由

        // 5:调用方法store中的action里的函数, 传参执行
        this.getProjects({
            url:"/vue/getProjects",
            cb(){
                console.log('search success')
            },
            params:{
                roitCoin:-1
            }
        })
    },
    updated(){
        
          
    },
    watch:{
        // watch里面都是监听的函数
        
    },
    methods:{
        // 4:  操作在methods中
        ...mapActions(['getProjects']),
        // 出借跳转
        lent(){
            if(!!sessionStorage.username){
                this.$router.push({name:"about"});
                // 前端token解密模块
            }else{
                this.$router.push({name:"login"});
            }
        },
        autolent(){ 
            this.selected1=true;         
            this.selected2=false;
            this.selected3=false;
        },
        pro(){
            this.selected1=false;
            this.selected2=true;
            this.selected3=false;         
        },
        change(){
            this.selected1=false;
            this.selected2=false;
            this.selected3=true;           
        }
    }
}
</script>

<style scoped>

/* .cor{
    background-color: #fff;
} */
.btn{
    border:1px blue solid;
    background-color: #fff;
    color:blue;
}
.active{
    background-color: blue;
    color:#fff;
}
.w-box{
    background-color: #fff;
    color:#fff;height:20px;
}
.p-box{
    border-top: 5px solid #B0B0B0;
}
.myh2{
    padding-top:25px;
}


.head{
    width:100%;
    height:50px;
    text-align: center;
    position:fixed;
    z-index:1000;
    left:0;
    top:0;
    background-color: #fff;
}
.middle{
    margin-top:10px;
}
.card{
    background-color: #fff;
    top:20px;
}
.prolist{
    background-color: #fff;
    margin-top:50px; 
    padding:10px 20px 30px;
}
.pro-ch{
    text-align: center;
    font-size:16px; 
}
.pro-check{
    /* text-align: center; */
    padding-left:6em;
    margin:20px 0; 
    font-size:14px;
}

.div1{
    height:50px;
    line-height: 50px;
    margin-bottom:30px;
}
.span1{
    display:inline-block;
    float: left;
    padding:0 5px;
    font-size:18px;
    font-weight: 900;
}
.span2{
    display:inline-block;
    float: left;
    padding:0 5px;
    font-size:14px;
    color:red;
}
.tag1{
    display:inline-block;
    margin-top:20px;
    float:right;
}

.lentDiv{
    height:3em;
    line-height: 3em;
    margin-left:4em;
}
.num1{
    color:#E6941A;
}
.num2{
    color:black;
}
.van-tabs__wrap{
    top:20px;
    background-color: #fff;
}
.all{
  margin-top:10px;
}
.box{
    height:90px;
    background-color: #fff;
    padding-top:10px;
}
</style>

<style>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

