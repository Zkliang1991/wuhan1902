
<template>
    <div id="buycart">
        <div class="head">
            <buycartHead></buycartHead>
        </div>
        <div class="cartGoods">
           <buycartGoods></buycartGoods>
        </div>
        <!-- <div class="jiesuan">
            <buycartJiesuan></buycartJiesuan>
        </div> -->
        <div class="footer">
            <footerEmpty></footerEmpty>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name:"buycart",
    data() {
        return {

}
    },
    computed: {
        ...mapState(['singel','mine']),
    },
    mounted() {
        console.log(this.mine.username)
        this.randerCart({
            url:'/vue/randerCart',
            // username:{username:this.mine.username},
            cb:(res)=>{
                console.log(res)
            }
        })
    },
    methods: {
        ...mapActions(["randerCart"])
    },
}
</script>

<style lang="scss" scoped>
.head{
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 9999;
}
</style>





