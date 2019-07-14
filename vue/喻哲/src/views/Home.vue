<template>
  <div class="home">
    <van-pull-refresh
      v-model="isLoading" 
      @refresh="onRefresh"  
      loading-text="更新中..."
      loosing-text="下拉更新"
    >
      <my-head1 class="head"></my-head1>
      <div class="banner">
        <van-swipe :autoplay="2000" class="wrap">
          <van-swipe-item><img src="https://img1.360buyimg.com/pop/s590x470_jfs/t10474/311/3137063167/96034/c89a2b43/5ce28a5aN0ae96232.jpg!q90!cc_590x470.webp" alt=""></van-swipe-item>
          <van-swipe-item><img src="https://img1.360buyimg.com/pop/s590x470_jfs/t1/51201/24/2898/55089/5d0b46d0Eb0e84668/4d38ca96bd8db700.jpg!q90!cc_590x470.webp" alt=""></van-swipe-item>
          <van-swipe-item><img src="https://img1.360buyimg.com/pop/s590x470_jfs/t1/40368/32/4267/95199/5cc83680E4979dad8/d2b132bb5142c38a.jpg!q90!cc_590x470.webp" alt=""></van-swipe-item>
          <van-swipe-item><img src="https://img1.360buyimg.com/pop/s590x470_jfs/t1/38778/24/6180/141464/5cd005b6E5daffc2d/aafffadf315bba83.jpg!q90!cc_590x470.webp" alt=""></van-swipe-item>
          <van-swipe-item><img src="https://img1.360buyimg.com/pop/s590x470_jfs/t1/42402/8/7107/90001/5d0b4b90E1e0236d9/2e89b3c769dddccf.jpg!q90!cc_590x470.webp" alt=""></van-swipe-item>
          <van-swipe-item><img src="https://imgcps.jd.com/ling/3735721/5o6i57Si5paw5aWH54m55LmL5peF/54iG5qy-55u06ZmN/t-5bf3e19274deafaac430e806/9a8d5c46.jpg" alt=""></van-swipe-item>
          <van-swipe-item><img src="https://img1.360buyimg.com/pop/s590x470_jfs/t1/38678/11/7856/174091/5cf0f3f0Eef85e2dc/4e53fc69f6d59c04.jpg!q90!cc_590x470.webp" alt=""></van-swipe-item>
          <van-swipe-item><img src="https://imgcps.jd.com/ling/3486678/6L-Q5Yqo5YGl6Lqr5oyH5Y2X/6JCl5YW76L-b6Zi256-H/t-5bd9142e6f64f11f63b3502d/a64324c0.jpg" alt=""></van-swipe-item>
        
        </van-swipe>
      </div>
      <headNav></headNav>
      <headClassify></headClassify>
    </van-pull-refresh>
    <div class="footer">
        <footerEmpty></footerEmpty>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      isLoading: false,

    }
  },
  methods: {
    onRefresh() {
            setTimeout(() => {
                this.isLoading = false;
        }, 500);
    }
  },
}
</script>

<style lang="scss" scoped>
.head{
  background-color: #3173e4;
}
  .home{
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .banner{
    width: 100%;    
  }
  img{
    width:100%;
    height: 100%;
    display: inline-block;
  }
  .nav{
    width: 6.8rem;
  }
  .box{
    width:6.8rem;
      
    >div{
      box-sizing: border-box;
      width: 20%;
      float: left;
      padding: .2rem 0;
    }
  }
</style>

