
<!--- 第二种方法写 mFoot用别人的写好的,要调整三个bug --->
<template>
    <footer>
        <!-- 1: 不能使用router-link会改变Vant样式   watcH解决-->
        <van-tabbar v-model="active">
            <!-- vant通过name名称改变高亮 -->
            <van-tabbar-item v-for="(foot,i) in foots" :key="i" 
             :name="foot.name" >
                <!-- v-html写入页面(解编码) -->
                <i slot="icon" class="icon iconfont" v-html="foot.icon"></i>
                <span>{{foot.txt}}</span>
             </van-tabbar-item>
        </van-tabbar>

    </footer>
</template>


<script>
// mint-ui与vant等 UI控件都有这些问题
// 1: 不能使用router-link会改变mintUi样式
// 2:第二个问题重新刷新 之后,foot的高亮问题,
// 3:第三个问题,回退 高亮 选中

// 第三问解决准备,导入 组件的中央总线  导入bus
import {bus} from "@/utils/bus"

export default {
    name:"Mfoot",//组件名
    data(){
        return{
            // icon去阿里图标库下载
            foots:[
                {txt:"首页",path:"/index/home",name:"home",icon:"&#xe607;"},
                {txt:"出借",path:"/index/loan",name:"loan",icon:"&#xe675;"},
                {txt:"账户",path:"/index/my",name:"my",icon:"&#xe62f;"},
                {txt:"更多",path:"/index/more",name:"more",icon:"&#xe66b;"}
            ],
            active:"home"
        }
    },
    // watch解决第一个 跳转问题
    watch:{
        active(newVal){
            // console.log(newVal);//组件名home,loan等
            this.$router.push({name:newVal});//this.$router跳转页面
        }
    },
    // 第二个问题重新刷新之后,foot的高亮问题,mounted解决
    mounted(){
        
        // console.log(this.$route);
        this.active=this.$route.name;//this.$route可获取路由信息
        // 3:
        bus.$on("changeActive",(name)=>{
            this.active=name;
        })
        
    }
}
</script>


<style lang="scss" scoped>
.van-tabbar--fixed{
    z-index:1000;
}
</style>