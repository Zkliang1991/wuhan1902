<template>
    <div class = "blank">
       <van-nav-bar
            v-bind:title="title"
            left-text="返回"
            :right-text="show"
            left-arrow
            @click-left="back"
            @click-right="go"
        />
    </div>
</template>

<script>
import { NavBar,Toast } from 'vant';
import {mapState} from 'vuex';
export default {
    name:'Head',
    methods:{
       back(){
           history.go(-1);
       },
       go(){
           Toast({
               message:'努力搜索中',
               duration:200
           })
           this.$router.push({name:'search'})
       }
    
    },
    computed:{
        ...mapState([
            'title',
            'show'
        ])
    },
    updated(){
        if(this.$route.name == 'search'  
            || this.$route.name == 'detail'
            || this.$route.name == "my"
            || this.$route.name == "cart"
            ){
            this.$store.commit('changeSearch','')
        }else{
            this.$store.commit('changeSearch','搜索')
        }
       
    }

}
</script>

<style scoped>

   
</style>

