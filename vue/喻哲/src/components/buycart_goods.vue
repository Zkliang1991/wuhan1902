
<template>
    <div>
        <div class="oneGood" v-for="(good,i) in cartgoods" :key="i">
            <div class="select">
                <input type="checkbox" name="" id="" class="checkbox" v-model="good.check">
            </div>
            <div class="good">
                <van-card
                    :num="good.num"
                    :price="good.good.price"
                    :title="good.good.name"
                    desc="1321231231321"  
                    :thumb="good.good.img"
                    origin-price="10.00"
                    
                    >
                    <div slot="footer">
                        <van-stepper 
                            v-model="good.num" 
                            integer max="18" 
                            @change="changeNum(good.num,good.goodId)"/>
                    </div>
                </van-card>
            </div>
        </div>
        <div class="jiesuan">
            <div class="quanxuan">
                <input type="checkbox" name="" id="quan" v-model="quan">
                <label for="quan">全选</label>
            </div>
            <div class="heji" v-show="buycart.deleteShow">
                <p><span class="s1">合计:</span><span class="s2"> ￥ </span><span class="s3">{{money}}</span></p>
                <button>结算(<span>{{countAll}}</span>)</button>
            </div>
            <div class="delete" v-show="!buycart.deleteShow">
                <p class="p1">移入收藏夹</p>
                <p class="p2" @click="deleteGood">删除</p>
            </div>
        </div>

        <!-- <div class="emptyCart" v-else>

        </div> -->
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    data() {
        return {
            show:true,
            value:1,
            checked: false,
            countAll:0,
            money:0,
        }
    },
    methods: {
        deleteGood(){
            var newCartgoods = [];
            var newCartgoodsList={};
            for(let key in this.cartgoods){
                if(this.cartgoods[key].check){
                    newCartgoods.push(this.cartgoods[key]);
                }
            }
            for(var key in newCartgoods){
                newCartgoodsList[key] = newCartgoods[key]
            }
            // console.log(newCartgoodsList)
            // this.$axios.post('/vue/deleteGoods',newCartgoodsList).then(result=>{
            //     console.log(result)
            // })
            
        },
        changeNum(num,id){
            this.$axios.post('/vue/cartGoodNum',{
                id,
                num
            }).then(res=>{
                console.log(res)
            })
        }
    },
    computed: {
        ...mapState(['singel','buycart']),
        quan:{
            get(){
                var flag = true;
                for(let key in this.cartgoods){
                    if(!this.cartgoods[key].check){
                        flag = false;
                    }
                }
                return flag;
            },
            set(val){
                // console.log(val);
                for(let key in this.cartgoods){
                    this.cartgoods[key].check = val  
                }
            }

        },
        cartgoods:{
            get(){
                return this.buycart.goods
            },
            set(val){
                // console.log(val)
            }
            
        }
    },
    watch:{
        cartgoods:{
            deep:true,
            handler(val){
                // console.log(val)
                var flag = true;
                val.map(item=>{
                    if(!item.check){
                        // flag = false;
                        
                    }
                })

            }
        }
    },
    updated() {
        var count = 0;
        var money = 0;
        this.cartgoods.map(item=>{
            if(item.check){
                count += item.num;
                money += item.num * item.good.price
            }
        })
        this.countAll = count;
        this.money = money.toFixed(2);
    },
}
</script>

<style lang="scss" scoped>
.cartGoods{
    overflow: hidden;
}
.oneGood{
    border-radius: .2rem;
    overflow: hidden;
    margin: .15rem 0;
}
.select{
    float: left;
}
.select{
    display: flex;
    width: 15%;
    height: 130px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    // >input{
    //     width: .3rem;
    //     height: .3rem;
    //     background-color: #fff;
    //     -webkit-appearance:none;
    //     border: 1px solid gray;
    //     border-radius: 50%;
    //     outline: none;
    // }
    // >.checkBox input[type=checkbox]:checked{
    //     // background: url("../images/checkbox_icon.png")no-repeat center;
    //     width: .35rem;
    //     height: .35rem;
    //     background-color: #6ff;
    //     -webkit-appearance:none;
    // }
}
.good{
    overflow: hidden;
    >.van-card{
        background-color: #fff;
        text-align: left;
    }
}
.jiesuan{
    background-color: #fff;
    width: 100%;
    height: 1rem;
    position: fixed;
    left: 0;
    bottom: 1rem;
    display: flex;
    justify-content: space-between;
    >.quanxuan{
        // line-height: 1rem;
        display: flex;
        align-items: center;
        >input{
            margin-left:.2rem
        }
        >label{
            font-size: 0.2rem;
            color: gray;
            margin-left:.1rem
        }
    }
    >.heji{
        // clear: both;
        // float: right;
        display: flex;
        align-items: center;
        >button{
            width: 1.8rem;
            height: .6rem;
            line-height: .6rem;
            border-radius: 1rem;
            border:none;
            font-size: .27rem;
            color: #fff;
            background-color: #000;
            margin: 0 .1rem;
        }
        >p{
            >.s1{
                font-size: 0.26rem;
                font-weight: bold;
            }
            >.s2,.s3{
                color: orangered;
            }
            >.s2{
                font-size: 0.23rem;
            }
            >.s3{
                font-size: 0.32rem;
            }
            
        }
    }
    >.delete{
        display: flex;
        align-items: center;
        >.p1,.p2{
            height: .5rem;
            line-height: .5rem;
            border-radius: 1rem;
            font-size: .27rem;
            text-decoration: underline;
        }
        >.p1{
            width: 2rem;
            border: .01rem solid orange;
            color: orange;

        }
        >.p2{
            width: 1.3rem;
            border: .01rem solid red;
            color: red;
            margin: 0 .2rem;
        }
    }
}
</style>