<template>
  <van-popup v-model="show" v-if="flag" position="right" :overlay="false">
    <div class="all">
      <!-- 商品信息 -->
      <div class="item">
        <div class="head">
          <van-nav-bar class="header" left-arrow>
            <div slot="left" @click="goback">返回</div>
            <div style="color:#fff" slot="title">{{item.title}}</div>
          </van-nav-bar>
        </div>
        <div class="item-top" :style="{backgroundImage:bgimg}">
          <div class="item-shadow">
            <div class="img-box">
              <img class="img" :src="item.img" :onerror="errImg" alt>
            </div>
            <p class="title">{{item.title}}</p>
            <p class="sub1">{{item.sub1}}</p>
          </div>
        </div>
        <!-- 收藏 阅读 评论 数量 -->
        <van-tabbar active-color="black" inactive-color="black">
          <van-tabbar-item>
            <span>收藏</span>
            <span slot="icon">{{colnum}}</span>
          </van-tabbar-item>
          <van-tabbar-item>
            <span>阅读</span>
            <span slot="icon">{{item.reading}}</span>
          </van-tabbar-item>
          <van-tabbar-item>
            <span>评论</span>
            <span slot="icon">{{disnum}}</span>
          </van-tabbar-item>
        </van-tabbar>
        <van-cell-group>
          <van-cell title="标签">
            <div slot="default">
              <van-tag
                v-for="(tag,i) in (catalog) "
                plain
                :key="i"
                type="danger"
                style="margin-right:1vw;"
              >{{tag}}</van-tag>
            </div>
          </van-cell>
          <van-cell title="出版时间">{{item.bytime}}</van-cell>
        </van-cell-group>
        <van-collapse v-model="activeNames">
          <van-collapse-item name="1">
            <div slot="title">简介</div>
            <div slot="default">{{item.sub2}}</div>
          </van-collapse-item>
          <van-collapse-item name="2">
            <div slot="title">购买途径</div>
            <div slot="default">
              <van-row v-for="(un,i) in online" :key="i">
                <van-col
                  style="padding-left:3vw;position:relative;color:black;line-height:7.5vw;font-size:4.5vw;"
                  span="7"
                >
                  <van-icon
                    style="position:absolute;left:-2vw;top:50%;transform: translateY(-50%)"
                    name="shop-o"
                  />
                  {{un.split(':')[0]}}
                </van-col>
                <van-col span="13">
                  <van-field :value="un.split(':')[1]+un.split(':')[2]" style="padding:0;"/>
                </van-col>
                <van-col span="4">
                  <van-button
                    v-clipboard:copy="un.split(':')[1]+un.split(':')[2]"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError"
                    size="mini"
                    type="primary"
                  >复制链接</van-button>
                </van-col>
              </van-row>
              <!-- {{item.online}} -->
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
    <!-- 底部选项 -->
    <van-goods-action>
      <van-goods-action-icon icon="star-o" @click="goCollect" text="收藏夹"/>
      <van-goods-action-button @click="goDown" icon="comment-o" type="info" text="评论"/>
      <van-goods-action-button @click="getCollect" icon="label-o" type="warning" text="收藏"/>
    </van-goods-action>
    <!-- 评论页 -->
    <van-popup v-model="downshow" position="bottom" :overlay="true">
      <!-- 头部 -->
      <div class="downview">
        <van-nav-bar class="header" style="background:white; border-bottom:1px solid #dfdfdf">
          <div slot="left" @click="downNone">返回</div>
          <div slot="title">评论({{discuss? discuss.length : 0}})</div>
        </van-nav-bar>
        <!-- 评论的列表 -->
        <div class="downalltext">
          <van-row class="userow" v-if="discuss ? true : false" v-for="(dis,i) in discuss" :key="i">
            <van-col style="text-align:center;" span="6">
              <img class="userhead" v-if="dis.userimg?false:true" src="@/assets/head.jpg" alt>
              <!-- 默认头像切换 有头像就显示下面那个 没有头像显示上面 -->
              <img
                class="userhead"
                v-else
                :src="dis.userimg.replace(/public/, 'http://47.93.187.155:1902/')"
                alt
              >
              <p class="van-ellipsis" style="font-size:2vw;padding-top:2vh;">{{dis.username}}</p>
            </van-col>
            <van-col class="textcol" span="18">
              <van-field
                style="font-size:2vw;line-height:3vh;padding:1vh 2vw;margin-top:2vh;border-radius:0 3vw 4vw 4vw"
                v-model="dis.userspeak"
                type="textarea"
                rows="1"
                autosize
                readonly
                class="dialog"
              />
              <van-row class="textcoltop">
                <van-col span="24">{{dis.time}}</van-col>
              </van-row>
              <!-- 赞 -->
              <van-row class="textcolbottom">
                <van-col offset="1" span="6">
                  <span @click="getZan(dis)" class="iconfont">&#xe606;</span>
                  赞({{dis.zan.length}})
                  <transition name="van-slide-up">
                    <div class="iconfont gotozan" v-show="shixinzan">&#xe649;</div>
                  </transition>
                </van-col>
                <!-- 踩 -->
                <van-col span="6">
                  <span @click="getCai(dis)" class="iconfont">&#xe664;</span>
                  踩({{dis.cai.length}})
                </van-col>
              </van-row>
              <div class="threebox"></div>
            </van-col>
          </van-row>
        </div>
        <!-- 评论输入框 -->
        <van-cell-group class="bottom-input">
          <van-field v-model="speak" center clearable placeholder="输入你的评论 ^_^">
            <van-button @click="setdis" slot="button" size="small" type="primary">评论</van-button>
          </van-field>
        </van-cell-group>
      </div>
    </van-popup>
  </van-popup>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { Notify } from "vant";
export default {
  name: "detail",
  data() {
    return {
      activeNames: [],
      speak: "",
      shixinzan: false,
      errImg: 'this.src="' + require("@/assets/err.jpeg") + '"'
    };
  },
  computed: {
    flag: {
      get() {
        return this.$store.state.detail.flag;
      },
      set(val) {
        this.$store.state.detail.flag = val;
      }
    },
    show: {
      get() {
        return this.$store.state.detail.show;
      },
      set(newValue) {
        this.$store.state.detail.show = newValue;
      }
    },
    catalog: {
      get() {
        var catalog = this.$store.state.detail.item.catalog;
        var arr = catalog.split(" ").splice(0, catalog.split(" ").length - 1);
        return arr;
      },
      set(newValue) {
        this.$store.state.detail.item.catalog = newValue;
      }
    },
    online() {
      var online = this.$store.state.detail.item.online;
      var arr = online.split(" ");
      return arr;
    },
    item: {
      get() {
        this.flag = true;
        return this.$store.state.detail.item;
      },
      set(val) {
        this.$store.state.detail.item = val;
      }
    },
    bgimg() {
      return "url(" + this.$store.state.detail.item.img + ")";
    },
    //评论显隐
    downshow: {
      get() {
        return this.$store.state.detail.downshow;
      },
      set(val) {
        this.$store.state.detail.downshow = val;
      }
    },
    //当前书的所有评论
    discuss: {
      get() {
        return this.$store.state.discuss.arr;
      },
      set(val) {
        this.$store.state.discuss.arr = val;
      }
    },
    colnum: {
      get() {
        return this.$store.state.detail.colnum;
      },
      set(val) {
        this.$store.state.detail.colnum = val;
      }
    },
    disnum: {
      get() {
        return this.$store.state.detail.disnum;
      },
      set(val) {
        this.$store.state.detail.disnum = val;
      }
    }
  },
  methods: {
    goback() {
      this.$store.dispatch("addDetailShow", { show: false });
    },
    //复制input内容插件
    onCopy() {
      Notify({
        message: "复制成功",
        duration: 1000,
        background: "#38e646"
      });
    },
    onError() {
      Notify("复制失败");
    },
    //评论页获取数据
    goDown() {
      this.$store.dispatch("addDiscussAJAX", {
        url: "/vue/discuss",
        title: this.item.title
      });
    },
    //评论页显隐
    downNone() {
      this.$store.commit("getDownShow", false);
    },
    //进入收藏页
    goCollect() {
      this.$router.push({ name: "collect" });
      this.$store.commit("getDetailShow", false);
      // this.$store.commit("getReLoad", false);
      // this.$nextTick(function() {
      //   this.$store.commit("getReLoad", true);
      // });
    },
    //发表评论
    setdis() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDate();
      var hour = date.getHours();
      if (hour * 1 < 10) {
        hour = "0" + hour;
      }
      var min = date.getMinutes();
      if (min * 1 < 10) {
        min = "0" + min;
      }
      var sec = date.getSeconds();
      if (sec * 1 < 10) {
        sec = "0" + sec;
      }
      var time = `${year}年${month}月${day}日${hour}:${min}:${sec}`;
      this.$store.dispatch("addDiscussSet", {
        url: "/vue/setdisc",
        dis: {
          speak: this.speak,
          time: time,
          bookimg: this.item.img,
          title: this.item.title
        }
      });
      this.speak = "";
    },
    // 点赞
    getZan(dis) {
      console.log(dis);
      this.$store.dispatch("addZanCai", {
        url: "/vue/getzan",
        dis: {
          username: dis.username,
          booktitle: dis.booktitle,
          userspeak: dis.userspeak,
          time: dis.time
        }
      });
    },
    // 点踩
    getCai(dis) {
      console.log(dis);
      this.$store.dispatch("addZanCai", {
        url: "/vue/getcai",
        dis: {
          username: dis.username,
          booktitle: dis.booktitle,
          userspeak: dis.userspeak,
          time: dis.time
        }
      });
    },
    // 收藏
    getCollect() {
      this.$store.dispatch("addCollectGet", {
        url: "/vue/getcollect",
        book: {
          title: this.item.title,
          img: this.item.img,
          catalog: this.item.catalog,
          tags: this.item.tags
        }
      });
    }
  }
};
</script>
<style scoped>
/* 主体部分 */
.all {
  width: 100vw;
  height: 100vh;
}
.item {
  width: 100vw;
  height: 92vh;
  overflow-y: scroll;
}
.item-top {
  color: rgb(255, 255, 255);
  position: relative;
  width: 100vw;
  height: 40vh;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: 10vw 0;
  background-size: 80% auto;
}
.item-top::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 40vh;
  background: inherit;
  transform: scale(1.3);
  /* background: rgba(32, 31, 31, 0.7); */
  /* filter: blur(15px); */
  filter: blur(1px) contrast(0.48);
  z-index: 0;
}
.item-shadow {
  position: absolute;
  box-sizing: border-box;
  padding-top: 4vh;
  width: 100vw;
  height: 45vh;
  top: 0;
  z-index: 1;
}
.van-tabbar--fixed {
  position: relative;
}
/* 头部  */
.head {
  color: white;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 7vh;
  z-index: 100;
}
.header {
  width: 100vw;
  height: 7vh;
  background: rgba(0, 0, 0, 0.4);
}
.van-hairline--bottom::after {
  border: none;
}
.van-nav-bar__left,
.van-nav-bar__right,
.van-nav-bar__text {
  height: 7vh;
  line-height: 7vh;
}
.van-nav-bar__title {
  height: 7vh;
  line-height: 7vh;
}
/* 书图片 */
.img-box {
  position: relative;
  width: 100vw;
  text-align: center;
  height: 20vh;
}
.img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 29vw;
  height: 20vh;
}
/* 标题 */
.title {
  font-size: 5.4vw;
  font-weight: 400;
  padding: 3vh 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.sub1 {
  font-size: 4vw;
  text-align: center;
  width: 100vw;
  position: absolute;
  bottom: 8vh;
  left: 50%;
  transform: translateX(-50%);
}
/* 评论框 */
.downview {
  width: 100vw;
  height: 90vh;
  position: relative;
}
.bottom-input {
  position: absolute;
  width: 100vw;
  bottom: 0;
  border-top: 0.1vh solid #dfdfdf;
}
.downalltext {
  box-sizing: border-box;
  padding: 0 5vw;
  padding-top: 2.5vh;
  width: 100vw;
  height: 73.5vh;
  overflow-y: scroll;
  /* background: red; */
}
.userow {
  padding-top: 1.5vh;
  padding-bottom: 3.5vh;
  margin: 1vh 0;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}
/* 用户头像 */
.userhead {
  margin: 0 4.5vw;
  width: 14vw;
  height: 14vw;
  border-radius: 50%;
}
.textcol {
  box-sizing: border-box;
  padding: 1vh 2vw;
  position: relative;
}
.dialog {
  border: 2px solid #55c0eb;
  background: #55c0eb;
}
.threebox {
  width: 0;
  position: absolute;
  top: 3vh;
  left: -5.1vw;
  border-width: 0 3.5vw 3.5vw 3.5vw;
  border-style: solid;
  border-color: transparent #55c0eb transparent transparent;
  height: 0;
}
.textcoltop {
  width: 64vw;
  position: absolute;
  top: 0;
  font-size: 1vw;
}
.textcolbottom {
  width: 64vw;
  position: absolute;
  bottom: -2.8vh;
  font-size: 1vw;
}
.gotozan {
  position: absolute;
  top: 0;
}
</style>


