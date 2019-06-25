<template>
  <div class="home">
    <Head title="首页" v-show="false"></Head>
    
    <div class="footdiv"></div>
    <div class="serch_head cl">
        <div class="sweep">
              <i class="iconfont">&#xe575;</i>
              <p>扫一扫</p>
        </div>
      <div class="serch_input">
          <keep-alive>
                <form action="/">
              <van-search
                  shape="round"
                  v-model="value"
                  background="#ff8b00"
                  placeholder="请输入搜索关键词"
                  @search="onSearch"
                  @cancel="onCancel"
                  @focus="inputblur"
              />
              </form>
          </keep-alive>
      </div>
      <div class="picture">
        <i class="iconfont">&#xe563;</i>
        <p>陶立拍</p>
      </div>
    </div>
    <Banner :images="images" ></Banner>
    <van-notice-bar
      :text="txt"
      left-icon="volume-o"
    />
    <p class="wo_o">哇哦视频<span>热门</span></p>
    <video class="lib-video" 
    width="100%"
    loop="" controls
    muted autoplay 
    preload="undefined"
    webkit-playsinline="webkit-playsinline"
    playsinline="playsinline" 
    poster="https://img.alicdn.com/bao/uploaded/i4/727249233/O1CN01188qZq2I4lPdxkLFl_!!727249233.jpg_600x600.jpg">
    <source src="//cloud.video.taobao.com/play/u/727249233/p/1/e/6/t/1/225994477363.mp4">
    </video>
  <div class="footdiv"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:"我是首页的title",
      images:[
      //   "https://img.alicdn.com/imgextra/i4/12985975/O1CN01888xFh1u0b1a4muQc_!!0-saturn_solar.jpg",
      //  "https://img.alicdn.com/imgextra/i1/131600870/O1CN01rhfd1h1IIV71rwz49_!!0-saturn_solar.jpg",
      //  "https://img.alicdn.com/imgextra/i2/33096604/O1CN01abxOlx1yeg9UCU1aI_!!0-saturn_solar.jpg",
      //   "https://img.alicdn.com/imgextra/i4/30266471/O1CN0176Hjtq1xflTV8BIur_!!0-saturn_solar.jpg",
            "http://img.alicdn.com/imgextra/i4/88/O1CN01ro0WDo1CWLOMeGnrW_!!88-0-luban.jpg",
            "https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg",
            "//gw.alicdn.com/imgextra/i2/88/O1CN01qiiUen1CWLON9iNLB_!!88-0-lubanu.jpg",
            "https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg",
            "//img.alicdn.com/imgextra/i4/21/O1CN01vplD1G1C1er6h3RN6_!!21-0-luban.jpg",
            "//gw.alicdn.com/imgextra/i3/152/O1CN019CmmRa1CzejyByBKe_!!152-0-lubanu.jpg"
      ],
      value:"",
      txt:"168活动大促，全场满8888立减200,可跨店购买！恭喜饶先生喜提html5的狗头，精通vue，脚写java，php，golang..."
    }
  },
  methods:{
    inputblur(){
      console.log(222)
      this.$router.push({name:"serch"})
    },
    onSearch(){

    },
    onCancel(){

    },
    getclassfiy(){

    }
  }
}
</script>
<style lang="scss" scoped>
.serch_head{
  background-color: #ff8b00;
  position: fixed;
  top: 0;
  left:0;
  height: 0.82rem;
  z-index: 33;
  width: 100%;
  // position: relative;
  // display: flex;
  div{
    // float: left;
  }
  .serch_input{
    padding: 0 0.6rem;
    border:1px solid #ff8b00;
    height: 0.8rem;
    overflow: hidden;
  }
  .sweep{
    position: absolute;
    top:0.01rem;
    color:#fff;
    padding-left:0.2rem;
    text-align:center;

    i{
      font-size: 0.5rem;
    }
    p{
      font-size:0.16rem;
    }
  }
  .picture{
     position: absolute;
    top:0.01rem;
    color:#fff;
    right:0.16rem;
    text-align:center;

    i{
      font-size: 0.5rem;
    }
    p{
      font-size:0.18rem;
    }
  }
}

h1{
  font-size:0.5rem;
}
.van-swipe .van-swipe{
  width: 100vw;
  height: 2vh;
}
.van-swipe .van-swipe__track,.van-swipe-item{
  width: 100vw !important;
  height: 1rem !important;
}
.van-swipe img{
   width: 100vw !important;
  height: 1rem !important;
}
.wo_o{
  font-size:0.3rem;
  padding:0.2rem;
  span{
    margin-left:0.1rem;
    color:red;
    font-size:0.18rem;
  }
}
.footdiv{
  width:100%;
  height:0.8rem;
}
.van-swipe{
  height: 3rem;
  width: 100vw;
}
</style>
