<template>
    <div>
        <Head></Head>
            <!-- 注册 -->
            <Register></Register>
    </div>
</template>
<script>
import Register from "@/components/register";
import {mapState,mapMutations} from 'vuex';
export default {
    components:{
        Register
    },
    computed:{
        ...mapState(['title'])
    },
    mounted(){
        this.$store.commit('changeTitle','注册')
    }
}
</script>

