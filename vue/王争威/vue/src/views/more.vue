<template>
    <div>

        <Head :msg="good.name"></Head>
        <Rende :good='good'></Rende>
         <cartJoin></cartJoin> 
        
    </div>
</template>
<script>
    import { mapActions, mapState } from 'vuex'
    import cartJoin from "@/components/cartjoin.vue";
    export default {
        components:{cartJoin},
        data() {
            return {

            }
        },
       
        methods: {
                 ...mapActions(['getGoods']),
        },
        created() {
            // console.log('good',this.good)
            this.getGoods({ url: '/vue/more', params: { goodid: this.$route.query.goodid } })
        },
        computed: {
            ...mapState(['good'])
        },
    }
</script>