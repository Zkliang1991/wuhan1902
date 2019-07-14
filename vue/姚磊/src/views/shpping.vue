<template>
    <div>
        <Head title="购物车"></Head>
        <h2>----------------购物车 ----------------</h2>
        <div>
            <h1>{{count}}---{{count1}}---{{count2}}---{{count3}}</h1>
            <h2>{{cict}}</h2>
            <h2>-----------{{city1}}</h2>
            <h2>-----------{{msg1}}</h2>
            <h2>{{carNum}}</h2>
            <h2>{{numw}}---{{carNum1}}</h2>
            <h2>数量---{{nums}}</h2>
        </div>
        <van-button type="primary" @click="xdd">加一</van-button>
        <van-button type="info" @click="shuju3">减一</van-button>
        <van-button type="primary" @click="shujunew(50)">点击加50</van-button>
        <van-button type="info" @click="chagecity('云中之城')">修改城市</van-button>
        <p>
            <input type="text" placeholder="请输入城市名称" ref="one" @input="huoqu">
        </p>
        <van-button type="primary" @click="shulian">点击数量加 2</van-button>

    </div>
</template>

<script>
import store from "@/store";
//引入四个常用辅助函数
import {mapState,mapActions,mapMutations} from "vuex";
export default {
    data(){
        return{
            count1:this.$store.state.count+1,
            count2:store.state.count+2,
            cict:this.$store.state.city,
            numw:this.$store.state.numw,
        }
    },

    //mapState基本vuex的写法
    /* computed:{
        count3(){
            return this.$store.state.count+10;
        },
        carNum1(){
            return this.$store.state.carNum;
        },
        city1(){
            return this.$store.state.city;
        },
        msg1(){
            return this.$store.state.msg;
        }
    }, */
    //mapState简洁式写法
    /* computed:mapState({
        // 箭头函数可使代码更简练
        count3: state => state.count,
        // 传字符串参数 'count' 等同于 `state => state.count`
        msg1:"msg",
        carNum1:"carNum",
        city1(state){
            return state.city+"YL1998"
        }
    }), */
    //mapState超简洁式写法
    computed:{
        ...mapState({  // ... 对象展开运算符
            // 箭头函数可使代码更简练
            count3: state => state.count,
            // 传字符串参数 'count' 等同于 `state => state.count`
            msg1:"msg",
            carNum1:"carNum",
            city1(state){
                return state.city+"YL1998"
            }
        }),
        ...mapState([,
            'count',
            'carNum',
            'nums'
        ]),
    },

    methods:{
        //mapActions简洁式写法
        ...mapActions({
            xdd:"shuju1",
            // pdd:"shuju3",
            // xdzhi:"shulian"
        }),
        ...mapActions([
            'shuju3',
            'getMsg'
        ]),
        ...mapMutations([
            'shulian',
            'shujunew',
            'chagecity'
        ]),
        /* xdd(){
            this.$store.dispatch("shuju1");
        }, */
        /* shulian(){
            this.$store.commit("shulian")
        }, */
        /* pdd(){
            this.$store.dispatch("shuju3",1)
        }, */
        /* shujunew(n){
            // this.$store.dispatch("newsj",n)
            this.$store.commit("shujunew",n)
        }, */
        /* chagecity(city){
            // this.$store.dispatch("chagecity",city)
            //直接在这里创建一个commit
            this.$store.commit("chagecity",city)
        }, */
        /* getMsg(msg){
            this.$store.dispatch("getMsg",msg)
            
        }, */
        huoqu(){
            this.getMsg(this.$refs.one.value)
        }
    },
    mounted(){
        console.log(this.$store)
    }

}
</script>
