<template>
      
  <div class="home">
        <Head title="达人贷"></Head>
         <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div>


       <!-- <h2>home-home</h2> -->
            <div class="swipe">
                    <!-- 轮播图封装了一层 -->
                        <Swipe id="banner" >
                            <van-swipe-item v-for="(item,i) in items" :key="i">
                              <img :src="item" alt="" width="100%" height="150">
                            </van-swipe-item>
                        </swipe>
                    <!-- 导航栏被mFoot的覆盖了 用sel跳转页面 -->
                        <Tabbar id="menu"  v-model="sel" >
                            <TabbarItem

                             v-for="(me,i) in menus" :key="i">
                              <!-- v-html="me.icon" -->
                              <!-- <i class="van-tabbar-item icon iconfont" v-html=""></i> -->
                              <svg class="van-tabbar-item icon" aria-hidden="true">
                                  <use :href="me.icon"></use>
                                  <!-- xlink:href单个实例,,  :href才支持变量 -->
                              </svg>
                              <span class="van-tabbar-item__text">{{me.txt}}</span>
                            </TabbarItem>
                        </Tabbar>
            </div>
            <!-- 刷计数 -->
            <!-- <p>刷新次数: {{ count }}</p> -->
<!-- 新手专区 -->
      <div class="all">
          <van-cell value="查看更多福利"  is-link>
          <template slot="title" >
            <span class="custom-text">新手专区</span>
            <!-- <van-tag type="danger">标签</van-tag> -->
          </template>
          </van-cell>

          <van-row>
              <van-col span="8">
                <!-- <van-button type="default"> -->
                    <img src="@/assets/images/photo.jpg" alt="">
                    <span>3.7%加息礼包</span>
               <!-- </van-button> -->
            </van-col>
             <van-col span="8">
                <!-- <van-button type="default"> -->
                    <img src="@/assets/images/photo.jpg" alt="">
                    <span>开户绑卡送200达币</span>
              <!-- </van-button> -->
              </van-col>
              <!-- disabled禁用 -->
              <van-col span="8">
                  <!-- <van-button disabled type="default"> -->
                      <img src="@/assets/images/photo.jpg" alt="">
                      <span>首出借300达币</span>
                  <!-- </van-button> -->
                </van-col>
          </van-row>
          <div class="btn">
            <van-button  round size="mini" type="danger">开户绑卡送200达币</van-button>
          </div>         
      </div>
      
<!-- 3组合组件 -->

    <div class="all" v-for="(val,i) in values" :key="i">
        
         <a href="javascript:;" @click="click">
           <Cell>            
                <CellItem>
                  <span class="custom-text">{{val.title}}</span>
                  <van-tag plain type="danger">{{val.tag1}}</van-tag>
                  <!-- <van-tag plain type="danger">{{val.tag2}}</van-tag>  -->
                  {{val.value}} 
                </CellItem>
          </Cell>

          <van-row class="row">
              <van-col class="col1" span="12">
                  <span class="num1">{{val.num}}</span>
                  <span class="txt">历史年化(%)</span>
              </van-col>
              <van-col class="col1" span="12">
                  <span class="num2">{{val.txt1}}</span>
                  <span class="txt txt2">{{val.txt2}}</span>
              </van-col>
          </van-row>
         </a>
    
          

    </div>
  


<!-- 滚动通知栏 -->
                <div class="lent" >最新出借收益</div> 
                <van-notice-bar
                      color="#000"
                      background="#fff">
                    15*********22债权项目回款,获得本息35.45元　　　　/#/
                    15*********22债权项目回款,获得本息35.45元　　　　/#/
                    15*********22债权项目回款,获得本息35.45元　　　　/#/
                    15*********22债权项目回款,获得本息35.45元　　　　/#/
                    15*********22债权项目回款,获得本息35.45元
                    </van-notice-bar>

             
                
             

    </div>

           </van-pull-refresh>
  </div>
</template>


<script>

import "@/styles/fonts/iconfont.js"
// 局部注册
import Cell from '@/components/cell.vue'
import CellItem from '@/components/cell-item.vue'
export default {
  name: 'home',
  components: {
    Cell,CellItem
  },
  data() {
      return{
          items:[
                //  图片当模块映入
                require("@/assets/images/nimg1.jpg"),
                require("@/assets/images/nimg2.jpg"),
                require("@/assets/images/nimg3.jpg")
          ],
          selected:'home',
          menus:[
            {txt:"风控保障",name:"cloud",icon:"#icon-fengkongshenhe"},
            {txt:"信息披露",name:"msg",icon:"#icon-bingtu"},
            {txt:"邀请好友",name:"friends",icon:"#icon-tianjiahaoyou-"},
            {txt:"每日摇奖",name:"yao",icon:"#icon-yaoyiyao"},
          ],
          sel:1,
          values:[
            {title:"新手专享",tag1:"新手首投",tag2:"1000元起投",value:"",
              num:"7.5+6.0",txt1:"30天锁定期限",txt2:"万元目标收益112.5元",
            },
            {title:"自动出借",tag1:"每日10:00,18:00开放",tag2:"",value:"快!开放中",
              num:"7.5-12.5",txt1:"一键授权开启",txt2:"循环自动出借",
            },
            {title:"债权项目",tag1:"每日10:00,18:00开放",tag2:"",value:"",
              num:"12.0-14.0",txt1:"选择债权出借",txt2:"每月等额本息",
            },        
          ],

          count: 0,
          isLoading: false
      }
  },
   methods: {
      onRefresh() {
        //刷新时执行的操作
        setTimeout(() => {
          // this.$toast('刷新成功');
          console.log('刷新成功')
          this.isLoading = false;
          this.count++;
        }, 500);
      },
      click(){
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
a{
    color: #2c3e50;
}
.all{
  margin-top:10px;
  
}
.swipe{
  padding-top:3em;
}
.van-cell{
  border-bottom:1px solid 	#BFBFBF;
}

.van-col--8 {
  padding-top:10px;
  text-align: center;
  background-color: #fff;
}

.van-col--8 img{
  width: 3em;
  height:3em;
  margin:0 auto;
}
.van-col--8 span{
  font-size:0.5em;
}
/* 底部bottom样式定出来 */
.van-notice-bar{
  padding-bottom:4em;
}


.row{
  width:100%;
  height:7em;
  text-align: center;
  background-color: #fff;

}
.col1{
  margin-top:10px;
  padding:10px;
  border-right:1px solid 	#BFBFBF;
}
.num1{
  display:block;
  font-size:32px;
  color:#DD9222;
}
.num2{
  display:block;
  line-height:32px;
  font-size:16px;
  /* color:red; */
}
.txt{
  font-size:12px;
}
.txt2{
  display:block;
  line-height:26px;
}

.btn{
  height: 2.5em;
  line-height: 2em;
  background-color: #fff;
  text-align: center;
}
.lent{
  margin-top:10px;
  /* padding-bottom:5em; */
  color:red;
  text-align: center;background: #fff;line-height: 40px;
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
