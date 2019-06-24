<template>
  <div class="jie">
    <Head title="出借" :show="true"></Head>
    <div class="quanbu">
      <van-tabs type="line">
        <van-tab title="随心投">
          <div class="pic">
            <img src="../assets/images/a.jpg" alt>
          </div>
          <!-- 新手礼  第一个    -->
          <div class="xin" @click='toOne'>
            <ul class="one">
              <li>
                <span class="shou">新手礼</span>
              </li>
              <li>
                <p class="ten">10%</p>
              </li>
              <li class="wang">往期年利率</li>
            </ul>
            <ul class="two">
              <li class="two1">3个月</li>
              <li class="wang">先息后本</li>
            </ul>
            <ul class="three">
              <van-tag color="#ffb200" size="large">立即加入</van-tag>
            </ul>
          </div>

          <!-- 季安心  第二个    -->
          <div class="hui"></div>
          <div class="xin" @click='toAnxin'>
            <ul class="one">
              <li>
                <span class="shou">季安心</span>
              </li>
              <li>
                <p class="ten">10%</p>
              </li>
              <li class="wang">往期年利率</li>
            </ul>
            <ul class="two">
              <li class="two1">3个月</li>
              <li class="wang">先息后本</li>
            </ul>
            <ul class="three">
              <van-tag color="#ffb200" size="large">立即加入</van-tag>
            </ul>
          </div>

          <!-- 第三个  年舒心 -->
          <div class="hui"></div>
          <div class="xin" @click='toShuxin'>
            <ul class="one">
              <li>
                <span class="shou">年舒心</span>
              </li>
              <li>
                <p class="ten">11%</p>
              </li>
              <li class="wang">往期年利率</li>
            </ul>
            <ul class="two">
              <li class="two1">12个月</li>
              <li class="wang">等额本金</li>
            </ul>
            <ul class="three">
              <van-tag color="#ffb200" size="large">立即加入</van-tag>
            </ul>
          </div>

          <!-- 投畅心  第四个    -->
          <div class="hui"></div>
          <div class="xin" @click='toChangxin'>
            <ul class="one">
              <li>
                <span class="shou">投畅心</span>
              </li>
              <li>
                <p class="ten">10%</p>
              </li>
              <li class="wang">往期年利率</li>
            </ul>
            <ul class="two">
              <li class="two1">12个月</li>
              <li class="wang">先息后本</li>
            </ul>
            <ul class="three">
              <van-tag color="#ffb200" size="large">立即加入</van-tag>
            </ul>
          </div>

          <!-- 出借最底部的 -->
          <div class="dibu">
            <ul class="dibu1">
              <li class="dibu11">
                <img src="../assets/images/3.gif" alt>
              </li>
              <li class="dibu22">[广州]马自达6抵押借款</li>
            </ul>
            <ul class="dibu2">
              <li class="dibu21">10%</li>
              <li class="dibu222">3个月</li>
              <li class="dibu23">
                <van-tag size="large">还款中</van-tag>
              </li>
            </ul>
          </div>
          <!-- 出借最底部的 -->
        </van-tab>

        <van-tab title="出借项目">出借项目</van-tab>
        <van-tab title="债券转让">债券转让</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "jie",
  methods:{
        toOne(){
            this.$router.push({name:"buy"})
        },
        toAnxin(){
            this.$router.push({name:"anxin"})
        },
        toShuxin(){
            this.$router.push({name:"shuxin"})
        },
        toChangxin(){
            this.$router.push({name:"changxin"})
        }
    }
};
</script>


<style lang="scss" scoped>
.quanbu {
  padding-bottom: 40px;
  box-sizing: border-box;
}

.van-ellipsis {
  color: red;
}

.pic img {
  width: 100vw;
  height: 20vh;
}

/* 新手礼 */
.xin {
  width: 100%;
  height: 130px;
  background-color: white;
  overflow: hidden;
}
.xin ul {
  float: left;
  width: 30%;
}
.xin > ul > li {
  padding-left: 20px;
}
.one > li {
  line-height: 40px;
  overflow: hidden;
}
.xin > .one {
  width: 39%;
}

.shou {
  padding-right: 10px;
  color: black;
  font-size: 15px;
}
.ten {
  padding-right: 10px;
  font-size: 25px;
  color: red;
  float: left;
}
.ten1 {
  float: left;
}
.wang {
  color: grey;
}
/* 第一列的样式 */

.two1 {
  padding-top: 50px;
  padding-bottom: 18px;
  color: darkolivegreen;
  box-sizing: border-box;
}
.three {
  text-align: center;
  line-height: 130px;
}

/* 出借最底部的 */
.dibu > ul {
  overflow: hidden;
  height: 60px;
}
.dibu > ul > li {
  float: left;
}
.dibu1 > li {
  font-size: 20px;
  color: black;
}

.dibu2 {
  color: green;
}
.dibu11 {
  padding-left: 10px;
  padding-top: 10px;
  box-sizing: border-box;
}
.dibu22 {
  line-height: 60px;
  font-size: 15px;
  padding-left: 10px;
  box-sizing: border-box;
}

/* 第二行 */

.dibu21 {
  color: red;
  font-size: 25px;
  width: 39%;
  padding-left: 10px;
  box-sizing: border-box;
}
.dibu222 {
  color: black;
  width: 30%;
  padding-top: 5px;
  box-sizing: border-box;
}
.dibu23 {
  color: white;
  padding-left: 20px;
  padding-top: 5px;
  box-sizing: border-box;
}
/* 出借最底部部分 */
</style>

