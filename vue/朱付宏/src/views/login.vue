<<template>  
   <div>
        <div class="login" id="title">
        <van-nav-bar
            title="登录"
            left-arrow
            class="ttt"
            @click-left="onClickLeft"
        />   
        </div>

        <van-cell-group>
            <van-field
                v-model="login.username"
                clearable
                label="用户名:"
                placeholder="请输入用户名"
                @click-right-icon="$toast('question')"
            />

            <van-field
                v-model="login.password"
                type="password"
                label="密码:"
                placeholder="请输入密码"           
            />
        </van-cell-group>
      <van-button type="danger" size="large" @click="denglu">登录
          <!-- <van-loading type="spinner" color="#1989fa" size="70" :show='false'/> -->
      </van-button>
      <van-row type="flex" justify="space-between">
            <van-col span="5">没有账号?</van-col>
            <van-col span="14" class="zhu"><p @click="zhuce">立即注册</p></van-col>
            <van-col span="5">忘记密码</van-col>
    </van-row>

   </div>

</template>


<script>
import { Dialog } from 'vant';

export default {
    name:"login",
    data(){
        return {
            login:{}
        }
    },
    methods: {
        onClickLeft() {
              this.$router.go(-1);
        },
        zhuce(){
            this.$router.push({name:'register'})
        },
        denglu(){
            this.$axios.post("/vue/login",this.login)
            .then(res=>{
                console.log(res)
                if(res.data.type==1){  //后台根据 1 或者 0 来判断是否登录正确
                    this.$router.push({name:'home'})
                    Dialog({ message: '登录成功' });
                    this.$store.commit('changeLogin','100')   
                   //登录后改变登录状态 isLogin = 100 ；
                   


                    //  if(this.$route.query.redirect){  //redirect  重定向
                    // //  let redirect = decodeURIComponent(this.$route.query.redirect);
                    //     let redirect = this.$route.query.redirect;
                    //     this.$router.push({name:'register'});
                    // }else{
                    //     this.$router.push('/');
                    // }




                }else{
                        Dialog({ message: '登录失败' });
                   }              
              })
          }
      }
}
</script>

<style lang="scss" scoped>

   .ttt{
       background-color: #ff550a;
       height: 8vh;
       line-height: 8vh;
   }
    .van-nav-bar__title{
        color:white;
        font-size: 4vh;
    }

    .van-nav-bar__arrow{
        color:white;
    }

   .van-cell{
       height: 10vh;
       line-height: 7vh;
       font-size: 5vw;
   }
   .van-button{
       width: 95vw;
       margin-left: 2.5vw;
       box-sizing: border-box;
   }
   .van-row{
       padding: 2.5vw;
       box-sizing: border-box;
       height: 5vh;
   }
   .zhu{
       color:red;
   }


</style>


