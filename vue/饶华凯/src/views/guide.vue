<template>
  <div class="about" >
    <div >
      <van-swipe :loop="false" indicator-color="white" >
          <van-swipe-item   v-for="(img,i) in imgs" :key="i" >
            <img :src="img" alt="" style="width:100vw;height:100vh">
          </van-swipe-item>
      </van-swipe>
      <div class="startinput">
        <van-button round type="warning"  class="button" v-if="flag"  :to="{name:'login'}" size="large">开始使用</van-button>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
    data(){
      return{
        imgs:[
          require("@/assets/images/guide.jpg"),
          // require("@/assets/images/1.png"),
          // require("@/assets/images/15.jpg"),
          // require("@/assets/images/35.jpg"),
        ],
        flag:false,
      }
    },
  methods:{

  },
  mounted(){
      setTimeout(()=>{
        this.flag=true;
        // localStorage.tabguide=1
      },3000)
      if(localStorage.tabguide){
        this.$router.push({name:"home"});
      }
  }
}
</script>
<style scoped>
.button{

  transform: translateX(-50%);
  /* background-color: #0ff; */
  background-image:linear-gradient(to right,rgb(248, 8, 8),rgb(223, 29, 78));
  border:none;
}
.startinput{
    position: fixed;
    bottom:2.3rem;
    width: 50%;
    left:50%;
}
</style>
