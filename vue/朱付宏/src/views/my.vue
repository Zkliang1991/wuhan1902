<template>
  <div class="my">
    <Head title="我的" :show="true"></Head>
    <div class="tou">
            <uploadImg></uploadImg>
    </div>
       
    <div class="quanbu">
        <div class="deng">
          <div class="denglu" @click="zhuce"><p>请登录/注册</p></div>
        </div> 

        <van-row>
            <van-col span="12"><div class="col" @click="chongZhi">充值</div></van-col>
            <van-col span="12"><div class="col" @click="tixian">提现</div></van-col>
       </van-row> 


       <div class="con">
          <van-row>
              <van-col span="24">
                  <p>我的订单总数:<span id='wode'>{{dingdan1}}</span></p>
                  <p>订单总金额:<span id='dingdan'>{{ding1}}</span></p>
                  <p>预计总收益:<span id='zong'>{{zongshouyi1}}</span></p>
              </van-col>
              <van-col span="24" id='yue'>
                  <p>账户余额:<span id='zhang'>{{(chongzhi1*1)+(zongjine1*1)+(tixian1*1)}}</span></p>
              </van-col>
          </van-row>
       </div>
        

        <!-- 红包的遮罩层 -->
       <div class="zhe" v-if=!flag>     
          <p><img src="../assets/images/red.png" alt></p>
          <p class="xin">领新人红包</p>
          <p class="cha" @click="cha">
            <van-icon name="close" size="50" color="white"/>
          </p>
       </div>

    </div>
  </div>
</template>


<script>
//import {mapState,mapActions} from 'vuex';
import uploadImg from '@/components/uploadImg.vue'
export default {
    name: "my",
  data(){
    return {
       flag:false,
       zongjine1:this.$store.state.zongjine,
       dingdan1:this.$store.state.dingdan,
       ding1:this.$store.state.ding,
       zongshouyi1:this.$store.state.zongshouyi,
       chongzhi1:this.$store.state.chongzhi,
       tixian1:this.$store.state.tixian, 
    }
   
  },
  components:{   //注册一个上传头像的子组件
        uploadImg
  },
  methods:{
      zhuce(){
        this.$router.push({name:'login'})
      },
      chongZhi(){
          this.$router.push({name:'chongzhi'})
      },
      cha(){
          this.flag =true
      },
      tixian(){
          this.$router.push({name:'tixian'})
      },
    },
   
  
     //数据更新的时候数据保存到数据中
    mounted(){
      console.log('进来'),
      this.$axios.post('/vue/account',{ 
         //这是存入数据库的方法   携带的数据
            dingdan1:wode.innerHTML*1,        // <p>我的订单总数
            ding1:dingdan.innerHTML*1,        // <p>订单总金额
            zongshouyi1:(zong.innerHTML*1).toFixed(2),    // <p>预计总收益
            zhanghu:zhang.innerHTML*1,     //  <p>账户余额
      }).then(res=>{
          console.log('出来')
          console.log(res)  
          //从数据库得到的数据结果
        //this.goods=res.data.result
        // this.dingdan1=res.data.result.dingdan1
        // this.ding1=res.data.result.ding1
        // this.zongshouyi1=res.data.result.zongshouyi1
        // this.zhanghu=res.data.result.zhanghu
        console.log(this.zhanghu)
      })
    }
}
</script>

<style lang="scss" scoped>

.quanbu{
  padding-bottom: 40px;
  box-sizing: border-box;
}
.tou{
  width: 100vw;
  height: 18vh;
  padding-top: 2vh;
  background-color:cadetblue;
}

.deng{
  width: 100vw;
  height: 15vh;
  line-height: 15vh;
  background-color: orange;
  padding-top: 5vh;
}
.denglu {
  width: 45vw;
  height: 10vh;
  line-height: 10vh;
  margin: 0 auto;
  background-color: violet;
  border-radius: 8vw;
  text-align: center;
  font-size: 6vw;
  color: white;
  box-sizing: border-box;
}

.van-col--12{
  text-align: center;
}
.col{
  width: 22vh;
  height: 7vh;
  line-height: 7vh;
  border:2px solid salmon;
  margin-top: 4vh;
  margin-left: 5vw;
  box-sizing: border-box;
  color:red;
  border-radius: 2vw;
  font-size: 4vh;
}

/* 红包的遮罩层 */
/* 第一步是   遮罩层的固定写法 */
.zhe{
  position: absolute;
  width: 100vw;
  height: 100vh;
  top:0;
  left:0;
  background: rgba(0,0,0,0.3);
  z-index: 100;
}
.zhe img{
  width: 70vw;
  height: 50vh;
  position: absolute;
  top:20vh;
  left:15vw;
}

.xin{
  width: 50vw;
  height: 8vh;
  line-height: 8vh;
  background-color: salmon;
  position: absolute;
  top:75vh;
  left:25vw;
  text-align: center;
  font-size: 6vw;
  border-radius: 7vw;
  color:white;
}

.cha{
  width: 50vw;
  height: 5vh;
  position: absolute;
  top:85vh;
  left:44vw;
}


// 下面的订单的账户金额
.con{
  margin-top: 5vh;
  box-sizing: border-box;
  color:red;
  font-size: 7vw;
}
 #yue{
   margin-top: 5vh;
   box-sizing: border-box;
 }






</style>

