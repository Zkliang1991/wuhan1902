<template>

    <div>

        <Head title="分类"></Head>
        <!-- <h2>我是分类页面</h2> -->
        <!-- <van-tabs v-model="active" v-for="(type,i) in types">
            <van-tab :title="type.value" :key="i">{{type.text}}</van-tab> -->

        <!-- <van-tabs v-model="active" v-for="(good,i) in goods" v-if="good.type">
            <van-tab :title="good.type.text"></van-tab>

        </van-tabs> -->

        <van-tabs>
            <van-tab v-for="(type,i) in types" :title="type.text" :key="i" v-if="types.length>0">

                <Lint :type="type" :allgoods="allGoods" :goods="allGoods.filter(item=>item.type.value==type.value)">

                </Lint>


            </van-tab>

        </van-tabs>

        




        <!-- <div :title="type.value" v-for="(type,i) in types" :key=i>

            <List :type="type" :goods="goods" @changegoods="getNewGoods">

            </List>


        </div> -->
        <Foot></Foot>
    </div>
</template>

<script>
    import { Tab, Tabs } from 'vant';
 

    export default {
        name: "classify",
        data() {
            return {

                active: "配饰",
                types: [],
                allGoods: []



            }

        },


        // watch: {
        //     types(d) {
        //         console.log(222, d)
        //     }
        // },




        created() {
            this.$axios.get("/api/getGoodTypes").then(res => {




                this.types = res.data.result;
                // console.log(res);
            })

        },
        mounted() {
            this.$axios.get("/api/getGoods").then(res => {


                console.log(res);

                this.allGoods = res.data.result;


            })
        }
    }
</script>