<template>
  <van-tabs style="position:absolute;top:8;" v-model="active" animated>
    <!-- 分类 -->
    <van-tab v-for="(tab,i) in tabs" :key="i">
      <div slot="title" @click="getContext(i)">{{tab.catalog}}</div>
      <!-- 列表 -->
      <div class="itemall" style="width:100vw;height:76vh;overflow-y:scroll">
        <van-list>
          <!-- 每一项的样式 -->
          <van-cell v-for="(item,i) in context" :key="i">
            <van-card @click="godetail(item.title)" :desc="item.tags" :title="item.title">
              <img slot="thumb" :src="item.img" :onerror="errImg" alt width="80%" height="100%">
              <span slot="tags">
                <van-tag
                  v-for="(tag,i) in item.catalog.split(' ').splice(0,item.catalog.split(' ').length-1)"
                  plain
                  :key="i"
                  type="danger"
                  style="margin-right:1vw;"
                >{{tag}}</van-tag>
              </span>
              <span slot="num" style="color:#9f9f9f;">
                <span>查看详情</span>
                <span class="iconfont">&#xe600;</span>
              </span>
            </van-card>
          </van-cell>
        </van-list>
      </div>
    </van-tab>
  </van-tabs>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "itemize",
  data() {
    return {
      active: 0,
      errImg: 'this.src="' + require("@/assets/err.jpeg") + '"'
    };
  },
  computed: {
    // 获取分类数组 和 列表数组
    ...mapState({
      tabs: state => state.itemize.tabs,
      context: state => state.itemize.context
    })
  },
  mounted() {
    //载入请求tab的数据
    this.$store.dispatch("addTabAjax", { url: "/vue/itemtab" });
  },
  updated() {
    //当数据更新时获取列表数据
    if (this.context.length == 0) {
      this.$store.dispatch("addContextAjax", {
        url: "/vue/itemcontext",
        params: { id: this.tabs[this.active].id, limit: 10 }
      });
    }
  },
  methods: {
    //获取列表数据
    getContext(i) {
      this.$store.dispatch("addContextAjax", {
        url: "/vue/itemcontext",
        params: { id: this.tabs[i].id, limit: 10 }
      });
    },
    //获取详情数据
    godetail(title) {
      this.$store.dispatch("addDetailShow", {
        show: true,
        title: title,
        url: "/vue/detail"
      });
    }
  }
};
</script>
<style scoped>
.tab {
  position: absolute;
  top: 8vh;
  height: 60vh;
}
.itemall {
  overflow-y: scroll;
}
.iconfont {
  font-size: 12px;
}
.van-card__bottom {
  line-height: 14px;
  margin-top: 2.5vh;
}
</style>
