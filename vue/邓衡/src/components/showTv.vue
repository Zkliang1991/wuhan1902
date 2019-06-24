<!-- <template>
    <div>
        <h2>综艺</h2>
  
            <van-swipe  :width="200" indicator-color="white" >
                <van-swipe-item v-for="(m,i) in tv" :key="i">

                    <img :src="m.img" alt="" width="100" style="float: left">
                    <van-tag plain type="primary" >标签</van-tag>
                </van-swipe-item>
                <div  slot="indicator">
                    
                  </div>
            </van-swipe>
      
    </div>
</template>

<script>
    export default {
        name: 'showTv',
        data() {
            return {
                tv: [
                    { name: "三生三世", img: require('@/assets/images/1.gif') },
                    { name: "", img: require('@/assets/images/2.gif') },
                    { name: "", img: require('@/assets/images/3.gif') },
                    { name: "", img: require('@/assets/images/4.gif') },
                    { name: "", img: require('@/assets/images/5.jpg') },
                    { name: "", img: require('@/assets/images/6.gif') },
                    { name: "", img: require('@/assets/images/7.gif') },
                    { name: "", img: require('@/assets/images/8.gif') },
                    { name: "", img: require('@/assets/images/9.jpg') },
                    { name: "", img: require('@/assets/images/10.gif') },
                    { name: "", img: require('@/assets/images/11.gif') },
                    { name: "", img: require('@/assets/images/11.gif') },
                    { name: "", img: require('@/assets/images/10.gif') },
                    { name: "", img: require('@/assets/images/11.gif') },
                    { name: "", img: require('@/assets/images/11.gif') },
                    { name: "", img: require('@/assets/images/11.gif') },
                    { name: "", img: require('@/assets/images/11.gif') },
                    { name: "", img: require('@/assets/images/10.gif') },
                    { name: "", img: require('@/assets/images/11.gif') },
                    { name: "", img: require('@/assets/images/11.gif') },




                ]
            }
        }
    }

</script>
<style scoped>
    .van-swipe-item{
        width: 110px !important;
        

    }
    .van-swipe__track{
        width: 1300px;
    }


</style> -->
<template>

    <div>

        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" @load="onLoad">
                <!-- 加载的内容-->
                <div v-for="(good,i) in deviceList" >
                    <router-link :to="{name:'good',params:{goodId:good.id},query:{name:good.name,goodId:good.id}}"
                        class="item">
                        <img :src="good.img" alt="">
                        <p class="name">{{good.name}}</p>
                        <p class="price">¥:{{  good.price }} </p>
                    </router-link>

                </div>
            </van-list>
        </van-pull-refresh>
    </div>
</template>
<script>

    export default {
        name: 'showTv',
        data() {
            return {
                deviceList: [],//用于存放加载的数据
                totalPage: 0,
                pageNumber: 0,
                loading: false,//控制上拉加载的加载动画
                finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
                isLoading: false,//控制下拉刷新的加载动画
            };
        },
        created() {

        },
        methods: {
            init() {
                let data = {
                    pageNumber: this.pageNumber + 1
                };
                let self = this;
                this.$axios.post('/vue/render')
                    .then(res => {


                        self.deviceList = res.data.result;
                        self.isLoading = false; //关闭下拉刷新效果

                    })
                // this.$axios.Post("/project/deviceShow", data, re => {
                //     self.deviceList = re.info.list;
                //     self.totalPage = re.info.totalPage;
                //     self.isLoading = false; //关闭下拉刷新效果
                // });
            },
            //下拉刷新
            onRefresh() {
                let self = this;
                setTimeout(() => {
                    self.totalPage = 0;
                    self.pageNumber = 0;
                    self.init(); //加载数据
                }, 500);
            },
            //页面初始化之后会触发一次，在页面往下加载的过程中会多次调用【上拉加载】
            onLoad() {
                let self = this;
                setTimeout(() => {
                    let data = {
                        pageNumber: self.pageNumber + 1
                    };
                    
                    // self.$axios.Get("/project/deviceShow", data, re => {
                    //     self.totalPage = re.info.totalPage;
                    //     self.deviceList = self.deviceList.concat(re.info.list);
                    //     self.loading = false;
                    //     self.pageNumber++;
                    //     if (self.pageNumber >= self.totalPage) {
                            self.finished = true;
                    //     }
                    // });
                }, 500);
            }
        }
    };
</script>