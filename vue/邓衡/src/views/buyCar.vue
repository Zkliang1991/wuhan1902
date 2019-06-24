<template>

    <div>
        <Head title="购物车"></Head>
        <div class="par moveCar">

            <div v-for="(g,i) in data.CarGoods" :key='i' v-if="g.good.type">
                <van-swipe-cell :right-width="60"  :left-width="10">
                    <van-cell :border="false" >
                        <van-card :num="g.num" :tag="g.good.type.value" :price="(g.good.price*0.9).toFixed(2)  "
                            :desc="g.good.name" :title="g.good.type.text" :thumb="g.good.img"
                            :origin-price="g.good.price">
                            <div slot="footer">
                                小计：<span>{{(g.num*g.good.price*0.9).toFixed(2)}}</span>
                                <van-stepper v-model="g.num" @change="Onchange({num:g.num,id:g.id})" />                            
                            </div>
                        </van-card>
                    </van-cell>
                    <van-button square slot="right" type="danger" text="删除"  @click="remove(data.CarGoods.splice(i,1))" />
                </van-swipe-cell>
            </div>
            <!-- <van-checkbox v-model="checked">全选</van-checkbox> -->
        </div>
       
        <van-submit-bar :price="price" button-text="结算" @submit="onSubmit">
                <van-address-edit
                :area-list="areaList"
                show-postal
                show-delete
                show-set-default
                show-search-result
                :search-result="searchResult"
                @save="onSave"
                @delete="onDelete"
                @change-detail="onChangeDetail"
                v-if="look"
                />
        </van-submit-bar>
        
        
    </div>
</template>



<script>
    import { Dialog, Notify } from 'vant';

    import { mapState, mapActions } from "vuex"

    export default {
        name: 'buyCar',
        data() {
            return {
                // goods: [],
                look: false,
                areaList:{},
                searchResult: []

            }
        },
        computed: {
            ...mapState(['data']),
            price: {
                get() {
                    var prices = 0
                    this.data.CarGoods.filter(item => {
                        if (item.good != "") {
                            var price = (item.good.price * 0.9).toFixed(0);
                            prices += price * item.num
                        }
                    })
                    return prices * 100
                }
            }
        },
        created() {
            this.getCarGoods({
                url: '/vue/render',
            })

        },
        methods: {
            
            ...mapActions(['getCarGoods']),
            remove(val) {
                console.log(val)
                Notify('删除成功');
                this.$axios.get('/vue/remove', {
                    params: {
                        id: val[0].id,
                        username: val[0].username
                    }
                }).then(res => {

                })

            },

            Onchange(val) {
                console.log(val)
                this.$axios.get('/vue/add', {
                    params: val
                }).then(res => {

                })
            },
            onSubmit() {
            //     console.log(this.look)
            //     // Dialog({ message: '购买成功，正跳转首页' })
            //     // this.$router.push({ name: 'home' })
                this.look=!this.look;
                this.$router.push({name:'myList'})
        
            },
            
            onSave(){
                
            },
            onDelete(){

            },
            onChangeDetail(){

            },
        },



    }

</script>
<style scoped>
    .par {
        margin-top: 0.93rem;
    }

    .logo {
        position: absolute;
        left: 6.3rem;
        top: 0;
        z-index: 1;
    }

    .moveCar {
        animation: zoomInDown 2s;
    }
    
    .van-swipe-cell__right>.van-button--square{
        margin-top:1.2rem; 
    }
    .van-address-edit{
    width: 100%;
    position: absolute;
    top: -8.86rem;
    background-color: azure;
    }
    
</style>