<template>
    <div>
        <Head></Head>
        <div v-if = 'show'>
            <van-steps direction="vertical" :active="0">
                <van-step>
                    <h3>【已出仓】商家已发货</h3>
                    <p>{{ time }} 三小时后物流寄出 预计三天后到达</p>
                </van-step>
                <van-step>
                    <h3>【杭州省】快件正发往到:   {{ addressDetail.province }}  中转站</h3>
                    <p>预计时间:{{ time1 }} 快件发出</p>
                </van-step>
                <van-step>
                    <h3>【{{ addressDetail.province }}】快件到达:  {{ addressDetail.province }}  中转站</h3>
                    <p>预计时间:{{ time2 }} 到达</p>
                </van-step>
                <van-step>
                    <h3>【地区】快件正派往到:  
                        {{ addressDetail.province }}
                        {{ addressDetail.city }}
                        {{ addressDetail.county }}
                        {{ addressDetail.addressDetail }}
                        </h3>
                    <p>预计时间:{{ time3 }} 到达</p>
                </van-step>
                <van-step>
                    <h3>快件已到达
                        {{ addressDetail.province }}
                        {{ addressDetail.city }}
                        {{ addressDetail.county }}
                        {{ addressDetail.addressDetail }}
                    </h3>
                    <p>预计时间:{{ time4 }} 到达</p>
                </van-step>
            </van-steps>
        </div>
        <div v-else>
            <span style = "color:#999">暂无订单查询!请前去购买商品填写收货地址...</span>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
import { Step, Steps } from 'vant';
export default {
    name:'order',
    computed:{
        ...mapState(['title'])
    },
    data() {
        return {
        active: 1,
        addressDetail:{},
        time:'',
        time1:'',
        time2:'',
        time3:'',
        time4:'',
        show:true
        };
    },
    methods:{
        ...mapMutations(['changeTitle']),
    },
    mounted(){
        // 拿回用户地址
        this.$store.commit('changeTitle','订单详情');
        this.$axios.post('/vue/address')
        .then(res=>{
            var body = res.data.result.body;
            if( body != undefined){
                this.show = true;
                var addressDetail = body.content
                this.addressDetail = addressDetail;
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var hour = date.getHours();
                var minute = date.getMinutes();
                var second  = date.getSeconds();
                this.time = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
                this.time1 = `${year}-${month}-${day } ${hour + 3}:${minute}:${second}`;
                this.time2 = `${year}-${month}-${day + 1} ${hour + 3}:${minute}:${second}`;
                this.time3 = `${year}-${month}-${day + 2} ${hour + 3}:${minute}:${second}`;
                this.time4 = `${year}-${month}-${day + 3} ${hour + 3}:${minute}:${second}`;
            }else{
                this.show = false;
            }
            // console.log(addressDetail);
        })
        
        // console.log(this.time)
    }
}
</script>
