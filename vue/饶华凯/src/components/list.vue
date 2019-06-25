<template>
    <div >
        <div v-if="setgoods.length>0">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">

                                <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
>
            <ul style="min-height:100%">
                <li  v-for="(good,i) in setgoods" :key="i" class="li">
                    <Item :good="good"></Item>
                </li>
                
            </ul>

                        <!-- <van-cell
                v-for="item in list"
                :key="item"
                :title="item"
            /> -->
            </van-list>
        </van-pull-refresh>
        </div>

    </div>
</template>
<script>
import { PullRefresh } from 'vant';
import { List } from 'vant'
import Item from "./item.vue"
export default {
    data(){
        return{
            list: [],
            loading: false,
            finished: false,
            setgoods:[],  //搜索页的数组
            isLoading: false,
            a:0
            
        }
    },
    components:{
        Item
    },
    created(){
        // console.log(111)
        this.$store.dispatch("addgoods")
        // this.setgoods=this.classfiy
    },
    computed:{
        listgoods(){
            return this.$store.state.listgoods;
        },
        classfiygoods(){
            return this.$store.state.addgoods.filter((item2,i)=>item2.type.text==this.classfiy)
        } , //分类页的数组
    },
    props:[
        "classfiy"
    ],
    watch:{
        listgoods(data){
            this.setgoods=data
        },
        classfiygoods(data){
           this.setgoods=data
            console.log(222)
            console.log(data)
        }
    },
    methods:{
        //下拉刷新
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
                console.log(this.setgoods.reverse())
            }, 500);
        },
        //上拉加载
         onLoad() {
        // 异步更新数据
        setTimeout(() => {
            var index=Math.floor(Math.random()*this.setgoods.length-4);
                var arr=this.setgoods.slice(index,index+4);
                this.setgoods=this.setgoods.concat(arr);
            for (let i = 0; i < 5; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 180) {
          this.finished = true;
        }
        }, 500);
        }
    }
}
</script>
<style lang="scss" scoped>
.van-pull-refresh,.van-pull-refresh__track{
    overflow: visible;
}
.li{
    
   margin-bottom:5px;
   border-bottom:1px dotted rgb(214, 124, 6);
}
</style>
