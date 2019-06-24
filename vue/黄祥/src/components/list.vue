<template>
  <div id="list">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <ul v-if="xh.length>0">
          <li v-for="(m,i) in xh" :key="i">
            <Item :m="m"></Item>
          </li>
        </ul>
    </van-pull-refresh>
  </div>
</template>

<script>
import Item from "./item.vue"
export default {
    name:"list",
    props:{
        xh:{
            type:Array,
        }
    },
    data(){
        return{
            list: [],
            isLoading: false,   //判断数据是否加载完毕
            finished: false,  //是否已加载完所有数据
            loading: false,   //是否处于下拉刷新状态
        }
    },
    methods: {
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
                this.xh.reverse();
            }, 500);
        },
    },
    components:{
        Item
    },
}
</script>

<style lang="scss" scoped>
#list {
  margin-top: 60px
}
</style>

