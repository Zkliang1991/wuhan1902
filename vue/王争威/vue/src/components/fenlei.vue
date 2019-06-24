<template>
    <div>
        <van-tabs v-model="active" animated>
            <van-tab v-for="(tp,i) in type" :title="tp.text">

                <flx :goods="allgoods.filter(item=>item.type.value===tp.value)"></flx>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
    import { mapActions, mapState } from "vuex";
    import flx from "@/components/flx.vue"
    export default {
        components: { flx },
        data() {
            return {
                active: 0,
                allgoods:[]
            };
        },
        computed: {
            ...mapState(["type"])
        },
        mounted() {
            // console.log(this.type, 1111);
            this.fenlei({ url: "/vue/type" });
            this.$axios.get('/vue/getgoods').then(res => {
                // console.log(222,res )
                this.allgoods=res.data.result
            })
        },
        methods: {
            ...mapActions(["fenlei"])
        }
    };
</script>