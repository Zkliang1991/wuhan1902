<template>
    <div>
        <Head title = '登录'></Head>
       
        <Login></Login>
    </div>
</template>
<script>
import Login from "@/components/login";
import {mapState,mapMutations} from 'vuex';
export default {
    components:{
        Login
    },
    computed:{
        ...mapState(['title'])
    },
    mounted(){
        this.$store.commit('changeTitle','登录')
    }
}
</script>

