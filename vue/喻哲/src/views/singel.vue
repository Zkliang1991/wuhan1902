
<template>
    <div class="singel">
         <div class="head">
             <singelHead></singelHead>
         </div> 
         <div class="good">
             <singelGood></singelGood>
         </div>
         <div class="ticket">
             <singelTicket></singelTicket>
         </div>
         <div class="space"></div>
         <div class="bottom">
             <singelBottom></singelBottom>
         </div>
         <div class="footer">
            <footerEmpty></footerEmpty>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
    name:"singel",
    data() {
        return {
            // show:true,
        }
    },
    methods: {
       previewBox(){
           this.show = true;
       },
        ...mapActions(['getOneGood']),

    },
    computed: {
        ...mapState(['singel'])
    },
    mounted(){
        this.getOneGood({
            url:'/vue/singelGood',
            params:{_id:this.$route.params.id},
            cb:(res=>{
                console.log(res)
            })
        })
    },
}
</script>

<style lang="scss" scoped>
.space{
    width: 100%;
    height: 1.1rem;
}
</style>




